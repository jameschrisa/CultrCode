-- Premium Analytics Data Extension
-- Advanced data for premium user insights and exploration

-- Add more sophisticated trending topics with detailed analytics
INSERT INTO trending_topics (topic_name, related_community_id, trend_score, platforms, keywords, estimated_reach, trend_start_date, status) VALUES
-- Emerging Technology Trends
('Quantum Computing Accessibility', 26, 0.78, '["YouTube", "LinkedIn", "Reddit"]', '["quantum computing", "quantum algorithms", "quantum programming"]', 450000, '2024-02-20', 'emerging'),
('Edge AI Development', 24, 0.91, '["GitHub", "YouTube", "Twitter/X"]', '["edge ai", "on device ai", "federated learning"]', 780000, '2024-01-30', 'growing'),
('Spatial Computing', 30, 0.85, '["Twitter/X", "YouTube", "LinkedIn"]', '["spatial computing", "mixed reality", "3d interfaces"]', 620000, '2024-02-05', 'emerging'),

-- Advanced Health & Biohacking
('Personalized Nutrition AI', 18, 0.89, '["Instagram", "YouTube", "TikTok"]', '["personalized nutrition", "nutrigenomics", "precision diet"]', 1200000, '2024-01-25', 'growing'),
('Longevity Protocols', 22, 0.93, '["YouTube", "Instagram", "Reddit"]', '["longevity", "anti aging", "lifespan extension", "healthspan"]', 890000, '2023-12-10', 'exploding'),
('Circadian Optimization', 20, 0.87, '["Instagram", "TikTok", "YouTube"]', '["circadian rhythm", "light therapy", "sleep optimization"]', 1100000, '2024-01-15', 'growing'),

-- Creative Economy Evolution
('AI-Human Collaboration Art', 1, 0.84, '["Instagram", "TikTok", "YouTube"]', '["ai collaboration", "human ai art", "creative partnership"]', 950000, '2024-02-01', 'growing'),
('Micro-Creator Economy', 16, 0.92, '["TikTok", "Instagram", "YouTube"]', '["micro creators", "nano influencers", "creator tools"]', 2100000, '2023-11-15', 'exploding'),
('NFT Utility Renaissance', 25, 0.81, '["Twitter/X", "Discord", "Instagram"]', '["utility nfts", "functional tokens", "web3 tools"]', 680000, '2024-01-20', 'growing'),

-- Sustainable Innovation
('Regenerative Agriculture Tech', 46, 0.86, '["YouTube", "Instagram", "LinkedIn"]', '["regenerative agriculture", "soil health", "carbon farming"]', 720000, '2023-10-30', 'growing'),
('Circular Economy Design', 50, 0.88, '["LinkedIn", "Instagram", "YouTube"]', '["circular economy", "sustainable design", "zero waste design"]', 840000, '2023-09-10', 'growing'),
('Ocean Cleanup Innovation', 50, 0.83, '["YouTube", "Instagram", "Twitter/X"]', '["ocean cleanup", "plastic removal", "marine conservation"]', 1300000, '2023-11-05', 'growing'),

-- Social & Cultural Movements
('Digital Minimalism 2.0', 52, 0.90, '["YouTube", "Instagram", "TikTok"]', '["digital minimalism", "tech intentionality", "mindful technology"]', 1800000, '2024-01-10', 'exploding'),
('Community Land Ownership', 53, 0.79, '["YouTube", "Facebook", "Instagram"]', '["community ownership", "land back", "cooperative housing"]', 520000, '2023-12-01', 'emerging'),
('Intergenerational Wisdom Exchange', 62, 0.82, '["TikTok", "YouTube", "Instagram"]', '["intergenerational", "elder wisdom", "knowledge transfer"]', 940000, '2024-01-05', 'growing'),

-- Learning & Development Innovation
('Embodied Learning Methods', 34, 0.85, '["YouTube", "Instagram", "TikTok"]', '["embodied learning", "somatic education", "body based learning"]', 680000, '2023-12-15', 'growing'),
('Peer-to-Peer Skill Sharing', 35, 0.91, '["Discord", "YouTube", "Instagram"]', '["skill sharing", "peer learning", "community education"]', 1400000, '2024-01-01', 'exploding'),
('Micro-Credentials Revolution', 33, 0.87, '["LinkedIn", "YouTube", "Twitter/X"]', '["micro credentials", "skill verification", "competency badges"]', 1100000, '2023-11-20', 'growing');

-- Add premium audience segments with detailed psychographic profiles
INSERT INTO audience_segments (name, description, demographics, psychographics, behavioral_patterns, size_percentage) VALUES
('Conscious Consumers', 'Highly informed consumers who prioritize ethical and sustainable purchasing decisions',
'{"age_range": "25-45", "income": "45k-100k", "education": "college_plus", "location": "urban_suburban"}',
'{"values": ["transparency", "sustainability", "social_justice"], "interests": ["ethical_consumption", "brand_research", "impact_investing"], "lifestyle": "values_driven_consumption"}',
'{"shopping": "research_intensive", "media": "investigative_content", "decision_making": "impact_weighted", "brand_loyalty": "values_based"}',
11.4),

('Neo-Traditionalists', 'Individuals blending traditional values with modern technology and lifestyle adaptations',
'{"age_range": "30-55", "income": "40k-120k", "education": "varied", "location": "suburban_rural"}',
'{"values": ["tradition", "family", "craftsmanship"], "interests": ["heritage_preservation", "artisan_goods", "community_building"], "lifestyle": "modern_traditional_blend"}',
'{"shopping": "quality_focused", "media": "documentary_content", "decision_making": "heritage_influenced", "brand_loyalty": "story_based"}',
8.9),

('Optimization Enthusiasts', 'Data-driven individuals focused on personal and professional optimization across all life areas',
'{"age_range": "22-40", "income": "55k-150k", "education": "college_plus", "location": "urban_tech_hubs"}',
'{"values": ["efficiency", "measurement", "continuous_improvement"], "interests": ["quantified_self", "productivity_systems", "performance_tracking"], "lifestyle": "optimization_focused"}',
'{"shopping": "performance_based", "media": "data_driven_content", "decision_making": "metrics_focused", "brand_loyalty": "results_based"}',
6.7),

('Cultural Curators', 'Individuals who seek out and share unique cultural experiences and perspectives',
'{"age_range": "24-50", "income": "35k-95k", "education": "college_plus", "location": "cultural_centers"}',
'{"values": ["diversity", "authenticity", "cultural_exchange"], "interests": ["global_cultures", "arts", "travel", "languages"], "lifestyle": "culturally_immersive"}',
'{"shopping": "authenticity_focused", "media": "cultural_content", "decision_making": "origin_story_weighted", "brand_loyalty": "cultural_alignment"}',
7.8),

('Future Builders', 'Forward-thinking individuals actively working to shape positive future outcomes',
'{"age_range": "20-45", "income": "40k-120k", "education": "college_plus", "location": "innovation_hubs"}',
'{"values": ["progress", "innovation", "systems_thinking"], "interests": ["emerging_tech", "social_innovation", "future_planning"], "lifestyle": "future_oriented"}',
'{"shopping": "innovation_focused", "media": "futurist_content", "decision_making": "long_term_impact", "brand_loyalty": "vision_aligned"}',
5.3),

('Artisan Supporters', 'Consumers who actively seek out and support independent creators and small businesses',
'{"age_range": "25-50", "income": "40k-100k", "education": "college", "location": "varied"}',
'{"values": ["craftsmanship", "independence", "community_support"], "interests": ["handmade_goods", "local_business", "creator_economy"], "lifestyle": "artisan_focused"}',
'{"shopping": "creator_supportive", "media": "maker_content", "decision_making": "story_driven", "brand_loyalty": "personal_connection"}',
9.2),

('Wellness Pioneers', 'Early adopters of emerging wellness practices and holistic health approaches',
'{"age_range": "25-45", "income": "50k-120k", "education": "college_plus", "location": "wellness_focused_areas"}',
'{"values": ["holistic_health", "prevention", "mind_body_connection"], "interests": ["alternative_medicine", "wellness_tech", "consciousness"], "lifestyle": "wellness_pioneering"}',
'{"shopping": "wellness_focused", "media": "holistic_content", "decision_making": "health_impact", "brand_loyalty": "wellness_philosophy"}',
4.9),

('Digital Sovereignty Advocates', 'Privacy-conscious individuals focused on digital rights and decentralized technologies',
'{"age_range": "22-50", "income": "45k-110k", "education": "college_plus", "location": "tech_aware_areas"}',
'{"values": ["privacy", "decentralization", "digital_rights"], "interests": ["cryptocurrency", "open_source", "digital_privacy"], "lifestyle": "privacy_first"}',
'{"shopping": "privacy_conscious", "media": "tech_analysis", "decision_making": "privacy_weighted", "brand_loyalty": "values_alignment"}',
3.8);

-- Add complex community-segment-brand triangulations for premium insights
INSERT INTO community_segment_mapping (community_id, segment_id, affinity_score, overlap_percentage) VALUES
-- Conscious Consumers across multiple communities
(50, 11, 0.96, 44.2), -- Zero Waste & Sustainability
(18, 11, 0.92, 38.7), -- Specific Diets & Nutrition
(53, 11, 0.89, 32.1), -- Ethical Consumption & Fair Trade
(7, 11, 0.87, 29.4), -- Fashion & Style Subcultures (sustainable fashion)
(23, 11, 0.85, 26.8), -- Personal Grooming & Beauty (clean beauty)

-- Neo-Traditionalists
(48, 12, 0.94, 41.3), -- Woodworking & Craftsmanship
(42, 12, 0.91, 35.7), -- Collecting Communities
(37, 12, 0.88, 30.2), -- Genealogy & Family History
(2, 12, 0.86, 27.9), -- Traditional Arts
(60, 12, 0.89, 33.4), -- Cultural Heritage & Diaspora

-- Optimization Enthusiasts
(22, 13, 0.97, 46.8), -- Biohacking & Longevity
(32, 13, 0.94, 40.1), -- AI & Machine Learning Enthusiasts
(33, 13, 0.92, 37.5), -- Professional Development & Career Growth
(36, 13, 0.89, 31.8), -- Skill-Specific Learning
(45, 13, 0.91, 34.9), -- Financial Literacy & Investing

-- Cultural Curators
(60, 14, 0.95, 42.6), -- Cultural Heritage & Diaspora
(32, 14, 0.88, 29.8), -- Language Learning Communities
(2, 14, 0.91, 35.4), -- Traditional Arts
(4, 14, 0.89, 31.7), -- Photography & Videography
(58, 14, 0.86, 27.3), -- Alternative Family Structures

-- Future Builders
(24, 15, 0.98, 48.2), -- AI & Machine Learning Enthusiasts
(25, 15, 0.95, 41.7), -- Web3 & Decentralization
(35, 15, 0.93, 38.9), -- Entrepreneurship & Startup Culture
(30, 15, 0.90, 33.2), -- Virtual & Augmented Reality
(31, 15, 0.87, 28.6), -- 3D Printing & Fabrication

-- Artisan Supporters
(3, 16, 0.94, 40.3), -- Crafting & DIY
(48, 16, 0.92, 36.8), -- Woodworking & Craftsmanship
(2, 16, 0.90, 33.5), -- Traditional Arts
(1, 16, 0.88, 29.7), -- Digital Art & Illustration
(6, 16, 0.86, 26.4), -- Music Production & DJing

-- Wellness Pioneers
(20, 17, 0.96, 43.1), -- Mental Wellness & Mindfulness
(51, 17, 0.94, 39.8), -- Spiritual & New Age Communities
(22, 17, 0.92, 36.2), -- Biohacking & Longevity
(18, 17, 0.89, 31.5), -- Specific Diets & Nutrition
(19, 17, 0.87, 28.9), -- Niche Fitness Regimes

-- Digital Sovereignty Advocates
(54, 18, 0.97, 45.3), -- Digital Privacy & Rights
(25, 18, 0.94, 38.9), -- Web3 & Decentralization
(28, 18, 0.91, 34.7), -- Cybersecurity & Privacy
(26, 18, 0.89, 30.2), -- Coding & Programming Languages
(24, 18, 0.86, 26.8); -- AI & Machine Learning Enthusiasts

-- Add premium brand partnerships and affinities
INSERT INTO brands (name, category, brand_type, target_demographics) VALUES
-- Emerging Tech Brands
('Anthropic', 'AI/Technology', 'tech', '{"age_range": "22-45", "profession": "knowledge_workers", "values": ["ai_safety", "responsible_innovation"]}'),
('Superhuman', 'Productivity/Software', 'luxury', '{"age_range": "25-40", "income": "high", "profession": "executives", "values": ["efficiency", "premium_experience"]}'),
('Linear', 'Software/Productivity', 'tech', '{"age_range": "20-35", "profession": "developers", "values": ["simplicity", "speed", "design"]}'),
('Vercel', 'Developer/Technology', 'tech', '{"age_range": "20-40", "profession": "developers", "values": ["performance", "developer_experience"]}'),

-- Conscious Consumption Brands
('Patagonia', 'Outdoor/Sustainable', 'sustainable', '{"age_range": "25-55", "values": ["environmental_responsibility", "quality", "activism"]}'),
('Everlane', 'Fashion/Sustainable', 'sustainable', '{"age_range": "22-40", "values": ["transparency", "ethical_production", "minimalism"]}'),
('Thrive Market', 'Food/E-commerce', 'sustainable', '{"age_range": "25-45", "values": ["organic_food", "sustainability", "health"]}'),
('Grove Collaborative', 'Home/Sustainable', 'sustainable', '{"age_range": "25-45", "values": ["natural_products", "sustainability", "family_health"]}'),

-- Artisan & Creator Economy
('Gumroad', 'Creator/Platform', 'indie', '{"age_range": "18-40", "profession": "creators", "values": ["creator_independence", "direct_sales"]}'),
('ConvertKit', 'Marketing/Creator', 'tech', '{"age_range": "22-45", "profession": "creators", "values": ["creator_focus", "simplicity", "growth"]}'),
('Mighty Networks', 'Community/Platform', 'tech', '{"age_range": "25-50", "profession": "community_builders", "values": ["community_building", "engagement"]}'),

-- Wellness & Optimization
('Oura', 'Health/Wearables', 'luxury', '{"age_range": "25-45", "interests": ["biohacking"], "values": ["data_driven_health", "optimization"]}'),
('Eight Sleep', 'Sleep/Technology', 'luxury', '{"age_range": "25-50", "income": "high", "values": ["sleep_optimization", "performance"]}'),
('Levels Health', 'Health/Technology', 'tech', '{"age_range": "25-45", "interests": ["metabolic_health"], "values": ["data_driven_wellness"]}'),
('WHOOP', 'Fitness/Wearables', 'tech', '{"age_range": "18-45", "interests": ["fitness"], "values": ["performance_tracking", "recovery"]}');

-- Add sophisticated brand affinity mappings
INSERT INTO community_brand_affinity (community_id, brand_id, affinity_score, sentiment, reasons) VALUES
-- AI/Tech communities with emerging brands
(24, 22, 0.96, 'enthusiastic', 'Anthropic represents responsible AI development and safety'),
(26, 24, 0.91, 'enthusiastic', 'Linear exemplifies developer-focused design principles'),
(33, 23, 0.88, 0.94, 'Superhuman aligns with productivity optimization goals'),

-- Sustainability communities
(50, 26, 0.94, 'enthusiastic', 'Everlane embodies transparency in sustainable fashion'),
(18, 27, 0.92, 'enthusiastic', 'Thrive Market supports organic and sustainable food access'),
(53, 28, 0.89, 'positive', 'Grove Collaborative offers natural home products'),

-- Creator communities
(1, 29, 0.91, 'positive', 'Gumroad empowers independent digital artists to sell directly'),
(16, 30, 0.87, 'positive', 'ConvertKit focuses specifically on creator needs'),
(58, 31, 0.85, 'positive', 'Mighty Networks enables authentic community building'),

-- Biohacking/wellness communities
(22, 32, 0.95, 'enthusiastic', 'Oura provides detailed biometric tracking for optimization'),
(20, 33, 0.89, 'positive', 'Eight Sleep optimizes recovery through sleep tracking'),
(19, 35, 0.92, 'enthusiastic', 'WHOOP focuses on fitness performance and recovery data'),
(18, 34, 0.87, 'positive', 'Levels Health enables metabolic health optimization');

-- Add premium platform activity data with detailed engagement metrics
INSERT INTO community_platform_activity (community_id, platform_id, activity_level, member_count_estimate, engagement_metrics, hashtags) VALUES
-- Advanced engagement data for AI communities
(24, 4, 'primary', 420000, '{"posts_per_day": 890, "avg_upvotes": 340, "avg_comments": 95, "crosspost_rate": 0.23}', '["MachineLearning", "ArtificialIntelligence", "DeepLearning", "AIResearch"]'),
(24, 7, 'high', 180000, '{"posts_per_day": 340, "retweet_rate": 0.18, "avg_likes": 280, "thread_engagement": 0.31}', '["AI", "MachineLearning", "TechTwitter", "AIEthics"]'),

-- Detailed creator economy metrics
(16, 15, 'primary', 1200000, '{"streams_per_day": 8500, "avg_viewers": 850, "subscriber_growth": 0.08, "donation_rate": 0.12}', '["Twitch", "LiveStreaming", "ContentCreator", "Gaming"]'),
(1, 11, 'high', 320000, '{"pins_per_day": 1200, "avg_saves": 450, "repin_rate": 0.28, "board_follows": 0.15}', '["DigitalArt", "ArtTutorial", "Procreate", "IllustrationInspiration"]'),

-- Sustainability movement detailed analytics
(50, 1, 'primary', 2100000, '{"posts_per_day": 5600, "avg_views": 145000, "share_rate": 0.19, "save_rate": 0.31}', '["ZeroWaste", "Sustainability", "ClimateAction", "EcoFriendly"]'),
(50, 6, 'high', 580000, '{"pins_per_day": 2800, "avg_saves": 890, "repin_rate": 0.34, "eco_board_creation": 0.22}', '["ZeroWaste", "SustainableLiving", "EcoTips", "GreenLiving"]'),

-- Wellness communities with engagement depth
(20, 1, 'primary', 1800000, '{"posts_per_day": 6200, "avg_views": 89000, "comment_depth": 3.2, "story_completion": 0.67}', '["MentalHealth", "Mindfulness", "SelfCare", "Wellness"]'),
(22, 2, 'primary', 650000, '{"posts_per_day": 1800, "avg_likes": 3200, "story_views": 45000, "bio_link_clicks": 0.08}', '["Biohacking", "Longevity", "HealthOptimization", "WellnessTech"]');