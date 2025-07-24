-- LaunchLens Micro-Communities Registry Database Schema
-- SQLite database for audience segmentation and community data

-- Main categories table (8 major categories from the text file)
CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    roman_numeral TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sub-communities table (80 specific communities)
CREATE TABLE communities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    examples TEXT, -- JSON array of specific examples from the text
    size_estimate INTEGER, -- estimated community size
    engagement_level TEXT CHECK(engagement_level IN ('low', 'medium', 'high', 'very_high')),
    growth_trend TEXT CHECK(growth_trend IN ('declining', 'stable', 'growing', 'exploding')),
    platform_presence TEXT, -- JSON array of primary platforms
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Community tags for flexible categorization
CREATE TABLE community_tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    tag TEXT NOT NULL,
    tag_type TEXT CHECK(tag_type IN ('interest', 'platform', 'demographic', 'behavior', 'technology')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id)
);

-- Audience segments (from existing segmentation tool)
CREATE TABLE audience_segments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    demographics TEXT, -- JSON object with age, income, education, etc.
    psychographics TEXT, -- JSON object with values, interests, lifestyle
    behavioral_patterns TEXT, -- JSON object with buying habits, media consumption
    size_percentage REAL, -- percentage of total population
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bridge table connecting communities to audience segments
CREATE TABLE community_segment_mapping (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    segment_id INTEGER NOT NULL,
    affinity_score REAL CHECK(affinity_score >= 0 AND affinity_score <= 1), -- 0-1 score of how well they match
    overlap_percentage REAL, -- what % of the segment participates in this community
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (segment_id) REFERENCES audience_segments(id),
    UNIQUE(community_id, segment_id)
);

-- Platform data for tracking where communities are most active
CREATE TABLE platforms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    type TEXT CHECK(type IN ('social_media', 'forum', 'messaging', 'content', 'marketplace')),
    user_base_size INTEGER,
    primary_demographics TEXT, -- JSON object
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Community platform activity tracking
CREATE TABLE community_platform_activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    platform_id INTEGER NOT NULL,
    activity_level TEXT CHECK(activity_level IN ('low', 'medium', 'high', 'primary')),
    member_count_estimate INTEGER,
    engagement_metrics TEXT, -- JSON object with posts/day, comments, etc.
    hashtags TEXT, -- JSON array of popular hashtags
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (platform_id) REFERENCES platforms(id),
    UNIQUE(community_id, platform_id)
);

-- Brand affinity data - which brands resonate with each community
CREATE TABLE brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    category TEXT,
    brand_type TEXT CHECK(brand_type IN ('mainstream', 'indie', 'luxury', 'budget', 'sustainable', 'tech')),
    target_demographics TEXT, -- JSON object
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Community brand affinity mapping
CREATE TABLE community_brand_affinity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    brand_id INTEGER NOT NULL,
    affinity_score REAL CHECK(affinity_score >= 0 AND affinity_score <= 1),
    sentiment TEXT CHECK(sentiment IN ('negative', 'neutral', 'positive', 'enthusiastic')),
    reasons TEXT, -- why this community likes/dislikes this brand
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    UNIQUE(community_id, brand_id)
);

-- User inputs from segmentation tool
CREATE TABLE user_segmentation_inputs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    age_range TEXT,
    gender TEXT,
    income_range TEXT,
    education_level TEXT,
    location TEXT,
    interests TEXT, -- JSON array
    buying_behavior TEXT, -- JSON object
    media_consumption TEXT, -- JSON object
    values TEXT, -- JSON array
    goals TEXT, -- JSON array
    challenges TEXT, -- JSON array
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Segmentation results linking user inputs to segments and communities
CREATE TABLE segmentation_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    input_id INTEGER NOT NULL,
    segment_id INTEGER NOT NULL,
    community_id INTEGER,
    match_score REAL CHECK(match_score >= 0 AND match_score <= 1),
    confidence_level TEXT CHECK(confidence_level IN ('low', 'medium', 'high')),
    reasons TEXT, -- JSON array explaining why this match was made
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (input_id) REFERENCES user_segmentation_inputs(id),
    FOREIGN KEY (segment_id) REFERENCES audience_segments(id),
    FOREIGN KEY (community_id) REFERENCES communities(id)
);

-- Trending topics and emerging communities
CREATE TABLE trending_topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic_name TEXT NOT NULL,
    related_community_id INTEGER,
    trend_score REAL, -- popularity/growth score
    platforms TEXT, -- JSON array of where it's trending
    keywords TEXT, -- JSON array of related keywords
    estimated_reach INTEGER,
    trend_start_date DATE,
    status TEXT CHECK(status IN ('emerging', 'growing', 'peak', 'declining')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (related_community_id) REFERENCES communities(id)
);

-- Indexes for performance optimization
CREATE INDEX idx_communities_category ON communities(category_id);
CREATE INDEX idx_community_tags_community ON community_tags(community_id);
CREATE INDEX idx_community_tags_tag ON community_tags(tag);
CREATE INDEX idx_community_segment_mapping_community ON community_segment_mapping(community_id);
CREATE INDEX idx_community_segment_mapping_segment ON community_segment_mapping(segment_id);
CREATE INDEX idx_community_platform_activity_community ON community_platform_activity(community_id);
CREATE INDEX idx_community_platform_activity_platform ON community_platform_activity(platform_id);
CREATE INDEX idx_community_brand_affinity_community ON community_brand_affinity(community_id);
CREATE INDEX idx_segmentation_results_input ON segmentation_results(input_id);
CREATE INDEX idx_segmentation_results_segment ON segmentation_results(segment_id);
CREATE INDEX idx_trending_topics_community ON trending_topics(related_community_id);
CREATE INDEX idx_trending_topics_status ON trending_topics(status);

-- Views for common queries
CREATE VIEW community_overview AS
SELECT 
    c.id,
    c.name,
    c.description,
    cat.name as category_name,
    c.size_estimate,
    c.engagement_level,
    c.growth_trend,
    COUNT(DISTINCT csa.segment_id) as related_segments,
    COUNT(DISTINCT cpa.platform_id) as active_platforms,
    COUNT(DISTINCT cba.brand_id) as brand_affinities
FROM communities c
LEFT JOIN categories cat ON c.category_id = cat.id
LEFT JOIN community_segment_mapping csa ON c.id = csa.community_id
LEFT JOIN community_platform_activity cpa ON c.id = cpa.community_id
LEFT JOIN community_brand_affinity cba ON c.id = cba.community_id
GROUP BY c.id, c.name, c.description, cat.name, c.size_estimate, c.engagement_level, c.growth_trend;

CREATE VIEW segment_community_matches AS
SELECT 
    s.name as segment_name,
    c.name as community_name,
    cat.name as category_name,
    csm.affinity_score,
    csm.overlap_percentage,
    c.engagement_level,
    c.growth_trend
FROM community_segment_mapping csm
JOIN audience_segments s ON csm.segment_id = s.id
JOIN communities c ON csm.community_id = c.id
JOIN categories cat ON c.category_id = cat.id
ORDER BY csm.affinity_score DESC;

CREATE VIEW trending_communities AS
SELECT 
    c.id,
    c.name,
    cat.name as category_name,
    c.growth_trend,
    c.engagement_level,
    AVG(tt.trend_score) as avg_trend_score,
    COUNT(tt.id) as trending_topics_count
FROM communities c
LEFT JOIN categories cat ON c.category_id = cat.id
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id
WHERE c.growth_trend IN ('growing', 'exploding') 
   OR tt.status IN ('emerging', 'growing', 'peak')
GROUP BY c.id, c.name, cat.name, c.growth_trend, c.engagement_level
ORDER BY avg_trend_score DESC;