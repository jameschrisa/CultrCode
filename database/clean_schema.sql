-- Clean LaunchLens Database Schema
-- Fixed version without syntax errors

CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    roman_numeral TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE communities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    examples TEXT,
    size_estimate INTEGER,
    engagement_level TEXT CHECK(engagement_level IN ('low', 'medium', 'high', 'very_high')),
    growth_trend TEXT CHECK(growth_trend IN ('declining', 'stable', 'growing', 'exploding')),
    platform_presence TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE audience_segments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    demographics TEXT,
    psychographics TEXT,
    behavioral_patterns TEXT,
    size_percentage REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE platforms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    type TEXT CHECK(type IN ('social_media', 'forum', 'messaging', 'content', 'marketplace')),
    user_base_size INTEGER,
    primary_demographics TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    category TEXT,
    brand_type TEXT CHECK(brand_type IN ('mainstream', 'indie', 'luxury', 'budget', 'sustainable', 'tech')),
    target_demographics TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE community_segment_mapping (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    segment_id INTEGER NOT NULL,
    affinity_score REAL CHECK(affinity_score >= 0 AND affinity_score <= 1),
    overlap_percentage REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (segment_id) REFERENCES audience_segments(id),
    UNIQUE(community_id, segment_id)
);

CREATE TABLE community_brand_affinity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    brand_id INTEGER NOT NULL,
    affinity_score REAL CHECK(affinity_score >= 0 AND affinity_score <= 1),
    sentiment TEXT CHECK(sentiment IN ('negative', 'neutral', 'positive', 'enthusiastic')),
    reasons TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    UNIQUE(community_id, brand_id)
);

CREATE TABLE trending_topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic_name TEXT NOT NULL,
    related_community_id INTEGER,
    trend_score REAL,
    platforms TEXT,
    keywords TEXT,
    estimated_reach INTEGER,
    trend_start_date DATE,
    status TEXT CHECK(status IN ('emerging', 'growing', 'peak', 'declining')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (related_community_id) REFERENCES communities(id)
);

CREATE TABLE community_platform_activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    platform_id INTEGER NOT NULL,
    activity_level TEXT CHECK(activity_level IN ('low', 'medium', 'high', 'primary')),
    member_count_estimate INTEGER,
    engagement_metrics TEXT,
    hashtags TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id),
    FOREIGN KEY (platform_id) REFERENCES platforms(id),
    UNIQUE(community_id, platform_id)
);

-- Indexes
CREATE INDEX idx_communities_category ON communities(category_id);
CREATE INDEX idx_community_segment_mapping_community ON community_segment_mapping(community_id);
CREATE INDEX idx_community_segment_mapping_segment ON community_segment_mapping(segment_id);
CREATE INDEX idx_community_brand_affinity_community ON community_brand_affinity(community_id);
CREATE INDEX idx_trending_topics_community ON trending_topics(related_community_id);