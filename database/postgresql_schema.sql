-- CultrCode PostgreSQL Database Schema
-- Migration from SQLite to PostgreSQL for production deployment
-- Compatible with Vercel Postgres

-- Enable UUID extension for better primary keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Main categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    roman_numeral VARCHAR(10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sub-communities table
CREATE TABLE communities (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    examples JSONB DEFAULT '[]', -- JSON array of specific examples
    size_estimate INTEGER DEFAULT 0,
    engagement_level VARCHAR(20) CHECK(engagement_level IN ('low', 'medium', 'high', 'very_high')),
    growth_trend VARCHAR(20) CHECK(growth_trend IN ('declining', 'stable', 'growing', 'exploding')),
    platform_presence JSONB DEFAULT '[]', -- JSON array of primary platforms
    metadata JSONB DEFAULT '{}', -- Additional flexible data
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Community tags for flexible categorization
CREATE TABLE community_tags (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    community_id INTEGER NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    tag VARCHAR(100) NOT NULL,
    tag_type VARCHAR(20) CHECK(tag_type IN ('interest', 'platform', 'demographic', 'behavior', 'technology')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audience segments
CREATE TABLE audience_segments (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    demographics JSONB DEFAULT '{}', -- JSON object with age, income, education, etc.
    psychographics JSONB DEFAULT '{}', -- JSON object with values, interests, lifestyle
    behavioral_patterns JSONB DEFAULT '{}', -- JSON object with buying habits, media consumption
    size_percentage DECIMAL(5,2) DEFAULT 0.00, -- percentage of total population
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Community-Segment mapping with scores
CREATE TABLE community_segment_mappings (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    community_id INTEGER NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    segment_id INTEGER NOT NULL REFERENCES audience_segments(id) ON DELETE CASCADE,
    affinity_score DECIMAL(4,2) DEFAULT 0.00 CHECK(affinity_score >= 0 AND affinity_score <= 100),
    overlap_percentage DECIMAL(5,2) DEFAULT 0.00 CHECK(overlap_percentage >= 0 AND overlap_percentage <= 100),
    confidence_level VARCHAR(20) DEFAULT 'medium' CHECK(confidence_level IN ('low', 'medium', 'high')),
    last_calculated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(community_id, segment_id)
);

-- Trending topics table
CREATE TABLE trending_topics (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    topic_name VARCHAR(255) NOT NULL,
    related_community_id INTEGER REFERENCES communities(id) ON DELETE SET NULL,
    trend_score DECIMAL(6,2) DEFAULT 0.00,
    platforms JSONB DEFAULT '[]', -- JSON array of platforms
    keywords JSONB DEFAULT '[]', -- JSON array of keywords
    estimated_reach BIGINT DEFAULT 0,
    trend_start_date DATE,
    status VARCHAR(20) DEFAULT 'emerging' CHECK(status IN ('emerging', 'growing', 'peak', 'declining')),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User personas table (for the persona system)
CREATE TABLE personas (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    user_id VARCHAR(255), -- Clerk user ID
    name VARCHAR(255) NOT NULL,
    description TEXT,
    demographics JSONB DEFAULT '{}',
    psychographics JSONB DEFAULT '{}',
    interests JSONB DEFAULT '[]',
    goals JSONB DEFAULT '[]',
    challenges JSONB DEFAULT '[]',
    preferred_communities JSONB DEFAULT '[]', -- Array of community IDs
    avatar_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User segmentation inputs (for analysis results)
CREATE TABLE user_segmentation_inputs (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    session_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255), -- Clerk user ID if authenticated
    age_range VARCHAR(50),
    gender VARCHAR(50),
    income_range VARCHAR(50),
    education_level VARCHAR(100),
    location VARCHAR(255),
    interests JSONB DEFAULT '[]',
    buying_behavior JSONB DEFAULT '{}',
    media_consumption JSONB DEFAULT '{}',
    values JSONB DEFAULT '[]',
    goals JSONB DEFAULT '[]',
    challenges JSONB DEFAULT '[]',
    analysis_results JSONB DEFAULT '{}', -- Store the matching results
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User reports table (for generated reports)
CREATE TABLE user_reports (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    user_id VARCHAR(255) NOT NULL, -- Clerk user ID
    report_type VARCHAR(50) NOT NULL, -- 'basic', 'premium', 'enterprise'
    title VARCHAR(255) NOT NULL,
    content JSONB NOT NULL, -- Full report content
    segments JSONB DEFAULT '[]', -- Related segments
    communities JSONB DEFAULT '[]', -- Related communities
    status VARCHAR(20) DEFAULT 'draft' CHECK(status IN ('draft', 'completed', 'archived')),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_communities_category_id ON communities(category_id);
CREATE INDEX idx_communities_engagement_growth ON communities(engagement_level, growth_trend);
CREATE INDEX idx_community_tags_community_id ON community_tags(community_id);
CREATE INDEX idx_community_tags_tag ON community_tags(tag);
CREATE INDEX idx_community_segment_mappings_community ON community_segment_mappings(community_id);
CREATE INDEX idx_community_segment_mappings_segment ON community_segment_mappings(segment_id);
CREATE INDEX idx_community_segment_mappings_scores ON community_segment_mappings(affinity_score DESC, overlap_percentage DESC);
CREATE INDEX idx_trending_topics_status ON trending_topics(status);
CREATE INDEX idx_trending_topics_score ON trending_topics(trend_score DESC);
CREATE INDEX idx_personas_user_id ON personas(user_id);
CREATE INDEX idx_personas_active ON personas(is_active);
CREATE INDEX idx_user_reports_user_id ON user_reports(user_id);
CREATE INDEX idx_user_reports_type ON user_reports(report_type);

-- Create useful views
CREATE OR REPLACE VIEW community_overview AS
SELECT 
    c.id,
    c.uuid,
    c.name,
    c.description,
    cat.name as category_name,
    c.size_estimate,
    c.engagement_level,
    c.growth_trend,
    COUNT(DISTINCT csm.segment_id) as related_segments,
    COALESCE(jsonb_array_length(c.platform_presence), 0) as active_platforms,
    COUNT(DISTINCT ct.id) as brand_affinities,
    c.created_at,
    c.updated_at
FROM communities c
LEFT JOIN categories cat ON c.category_id = cat.id
LEFT JOIN community_segment_mappings csm ON c.id = csm.community_id
LEFT JOIN community_tags ct ON c.id = ct.community_id
GROUP BY c.id, c.uuid, c.name, c.description, cat.name, c.size_estimate, 
         c.engagement_level, c.growth_trend, c.platform_presence, c.created_at, c.updated_at;

CREATE OR REPLACE VIEW segment_community_matches AS
SELECT 
    s.name as segment_name,
    c.name as community_name,
    cat.name as category_name,
    csm.affinity_score,
    csm.overlap_percentage,
    c.engagement_level,
    c.growth_trend,
    csm.confidence_level,
    csm.last_calculated
FROM community_segment_mappings csm
JOIN communities c ON csm.community_id = c.id
JOIN audience_segments s ON csm.segment_id = s.id
JOIN categories cat ON c.category_id = cat.id;

CREATE OR REPLACE VIEW trending_communities AS
SELECT 
    co.*,
    COALESCE(AVG(tt.trend_score), 0) as avg_trend_score
FROM community_overview co
LEFT JOIN trending_topics tt ON co.id = tt.related_community_id
WHERE co.growth_trend IN ('growing', 'exploding')
GROUP BY co.id, co.uuid, co.name, co.description, co.category_name, 
         co.size_estimate, co.engagement_level, co.growth_trend,
         co.related_segments, co.active_platforms, co.brand_affinities,
         co.created_at, co.updated_at
ORDER BY avg_trend_score DESC, co.size_estimate DESC;

-- Create functions for common operations
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for auto-updating timestamps
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_communities_updated_at BEFORE UPDATE ON communities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_audience_segments_updated_at BEFORE UPDATE ON audience_segments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trending_topics_updated_at BEFORE UPDATE ON trending_topics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_personas_updated_at BEFORE UPDATE ON personas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_reports_updated_at BEFORE UPDATE ON user_reports
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();