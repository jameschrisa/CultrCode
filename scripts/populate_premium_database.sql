-- LaunchLens Premium Database Population Script
-- Complete data setup for premium user exploration
-- Run this after the base schema to get comprehensive community and trend data

-- Import base data first
.read database/seed_data.sql

-- Add all extended communities and data
.read database/extended_seed_data.sql

-- Add premium analytics data
.read database/premium_analytics_data.sql

-- Create additional indexes for premium analytics queries
CREATE INDEX IF NOT EXISTS idx_trending_topics_score ON trending_topics(trend_score DESC);
CREATE INDEX IF NOT EXISTS idx_trending_topics_start_date ON trending_topics(trend_start_date DESC);
CREATE INDEX IF NOT EXISTS idx_community_segment_affinity ON community_segment_mapping(affinity_score DESC);
CREATE INDEX IF NOT EXISTS idx_community_brand_sentiment ON community_brand_affinity(sentiment, affinity_score DESC);
CREATE INDEX IF NOT EXISTS idx_platform_activity_engagement ON community_platform_activity(activity_level, member_count_estimate DESC);
CREATE INDEX IF NOT EXISTS idx_communities_growth_engagement ON communities(growth_trend, engagement_level);

-- Create materialized views for premium analytics (SQLite compatible)
DROP VIEW IF EXISTS premium_community_insights;
CREATE VIEW premium_community_insights AS
SELECT 
    c.id as community_id,
    c.name as community_name,
    cat.name as category_name,
    c.size_estimate,
    c.engagement_level,
    c.growth_trend,
    
    -- Segment analysis
    COUNT(DISTINCT csm.segment_id) as segment_count,
    AVG(csm.affinity_score) as avg_segment_affinity,
    MAX(csm.overlap_percentage) as max_segment_overlap,
    
    -- Platform presence
    COUNT(DISTINCT cpa.platform_id) as platform_count,
    SUM(CASE WHEN cpa.activity_level = 'primary' THEN 1 ELSE 0 END) as primary_platforms,
    SUM(cpa.member_count_estimate) as total_platform_members,
    
    -- Brand relationships
    COUNT(DISTINCT cba.brand_id) as brand_relationships,
    AVG(cba.affinity_score) as avg_brand_affinity,
    
    -- Trending status
    COUNT(DISTINCT tt.id) as trending_topics,
    AVG(tt.trend_score) as avg_trend_score
    
FROM communities c
JOIN categories cat ON c.category_id = cat.id
LEFT JOIN community_segment_mapping csm ON c.id = csm.community_id
LEFT JOIN community_platform_activity cpa ON c.id = cpa.community_id
LEFT JOIN community_brand_affinity cba ON c.id = cba.community_id
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id
GROUP BY c.id, c.name, cat.name, c.size_estimate, c.engagement_level, c.growth_trend;

-- Trending communities with growth metrics
DROP VIEW IF EXISTS trending_growth_analysis;
CREATE VIEW trending_growth_analysis AS
SELECT 
    c.id,
    c.name as community_name,
    cat.name as category_name,
    c.growth_trend,
    c.engagement_level,
    c.size_estimate,
    
    -- Trending metrics
    COUNT(tt.id) as active_trends,
    AVG(tt.trend_score) as avg_trend_score,
    MAX(tt.trend_score) as peak_trend_score,
    
    -- Platform momentum
    COUNT(DISTINCT cpa.platform_id) as platform_presence,
    SUM(cpa.member_count_estimate) as total_reach,
    
    -- Brand interest
    COUNT(DISTINCT cba.brand_id) as brand_interest_count,
    AVG(cba.affinity_score) as brand_appeal

FROM communities c
JOIN categories cat ON c.category_id = cat.id
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id AND tt.status IN ('growing', 'exploding', 'peak')
LEFT JOIN community_platform_activity cpa ON c.id = cpa.community_id
LEFT JOIN community_brand_affinity cba ON c.id = cba.community_id
WHERE c.growth_trend IN ('growing', 'exploding') OR tt.trend_score > 0.8
GROUP BY c.id, c.name, cat.name, c.growth_trend, c.engagement_level, c.size_estimate
ORDER BY avg_trend_score DESC, total_reach DESC;

-- Premium segment insights
DROP VIEW IF EXISTS premium_segment_insights;
CREATE VIEW premium_segment_insights AS
SELECT 
    s.id as segment_id,
    s.name as segment_name,
    s.size_percentage,
    
    -- Community affinities
    COUNT(DISTINCT csm.community_id) as community_connections,
    AVG(csm.affinity_score) as avg_community_affinity,
    MAX(csm.overlap_percentage) as max_community_overlap,
    
    -- Category distribution
    COUNT(DISTINCT c.category_id) as category_spread,
    
    -- Brand alignment potential
    COUNT(DISTINCT cba.brand_id) as potential_brand_matches,
    AVG(cba.affinity_score) as avg_brand_alignment,
    
    -- Trending involvement
    COUNT(DISTINCT tt.id) as trending_topic_exposure,
    AVG(tt.trend_score) as trend_engagement_potential

FROM audience_segments s
LEFT JOIN community_segment_mapping csm ON s.id = csm.segment_id
LEFT JOIN communities c ON csm.community_id = c.id
LEFT JOIN community_brand_affinity cba ON c.id = cba.community_id
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id
GROUP BY s.id, s.name, s.size_percentage
ORDER BY s.size_percentage DESC, avg_community_affinity DESC;

-- Brand opportunity matrix
DROP VIEW IF EXISTS brand_opportunity_matrix;
CREATE VIEW brand_opportunity_matrix AS
SELECT 
    b.id as brand_id,
    b.name as brand_name,
    b.category as brand_category,
    b.brand_type,
    
    -- Community connections
    COUNT(DISTINCT cba.community_id) as community_partnerships,
    AVG(cba.affinity_score) as avg_community_affinity,
    
    -- Segment reach through communities
    COUNT(DISTINCT csm.segment_id) as segment_reach,
    SUM(s.size_percentage) as total_segment_percentage,
    
    -- Platform presence through communities
    COUNT(DISTINCT cpa.platform_id) as platform_exposure,
    SUM(cpa.member_count_estimate) as potential_reach,
    
    -- Trending alignment
    COUNT(DISTINCT tt.id) as trending_alignment,
    AVG(tt.trend_score) as trend_momentum

FROM brands b
LEFT JOIN community_brand_affinity cba ON b.id = cba.brand_id
LEFT JOIN community_segment_mapping csm ON cba.community_id = csm.community_id
LEFT JOIN audience_segments s ON csm.segment_id = s.id
LEFT JOIN community_platform_activity cpa ON cba.community_id = cpa.community_id
LEFT JOIN trending_topics tt ON cba.community_id = tt.related_community_id
GROUP BY b.id, b.name, b.category, b.brand_type
ORDER BY potential_reach DESC, avg_community_affinity DESC;

-- Platform ecosystem analysis
DROP VIEW IF EXISTS platform_ecosystem_analysis;
CREATE VIEW platform_ecosystem_analysis AS
SELECT 
    p.id as platform_id,
    p.name as platform_name,
    p.type as platform_type,
    p.user_base_size,
    
    -- Community presence
    COUNT(DISTINCT cpa.community_id) as active_communities,
    COUNT(CASE WHEN cpa.activity_level = 'primary' THEN 1 END) as primary_communities,
    
    -- Category distribution
    COUNT(DISTINCT c.category_id) as category_diversity,
    
    -- Engagement levels
    SUM(cpa.member_count_estimate) as total_community_members,
    AVG(cpa.member_count_estimate) as avg_community_size,
    
    -- Growth potential
    COUNT(CASE WHEN c.growth_trend IN ('growing', 'exploding') THEN 1 END) as growing_communities,
    
    -- Trending content
    COUNT(DISTINCT tt.id) as trending_topics

FROM platforms p
LEFT JOIN community_platform_activity cpa ON p.id = cpa.platform_id
LEFT JOIN communities c ON cpa.community_id = c.id
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id
GROUP BY p.id, p.name, p.type, p.user_base_size
ORDER BY total_community_members DESC, category_diversity DESC;

-- Insert summary statistics for quick dashboard loading
INSERT OR REPLACE INTO community_tags (community_id, tag, tag_type) 
SELECT DISTINCT 
    c.id,
    CASE 
        WHEN c.growth_trend = 'exploding' THEN 'high_growth'
        WHEN c.engagement_level = 'very_high' THEN 'high_engagement'
        WHEN c.size_estimate > 3000000 THEN 'large_community'
        WHEN COUNT(tt.id) > 2 THEN 'trending_active'
        ELSE 'stable'
    END,
    'performance'
FROM communities c
LEFT JOIN trending_topics tt ON c.id = tt.related_community_id
GROUP BY c.id;

-- Performance optimization: Update statistics
ANALYZE;

-- Report generation summary
SELECT 
    'Database Population Complete' as status,
    COUNT(*) as total_categories
FROM categories
UNION ALL
SELECT 
    'Total Communities' as status,
    COUNT(*) as count
FROM communities
UNION ALL
SELECT 
    'Total Audience Segments' as status,
    COUNT(*) as count
FROM audience_segments
UNION ALL
SELECT 
    'Total Brands' as status,
    COUNT(*) as count
FROM brands
UNION ALL
SELECT 
    'Total Trending Topics' as status,
    COUNT(*) as count
FROM trending_topics
UNION ALL
SELECT 
    'Total Platforms' as status,
    COUNT(*) as count
FROM platforms;

-- Final message
SELECT 'Premium database populated successfully! Ready for user exploration.' as message;