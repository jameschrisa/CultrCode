-- Quick seed data for testing
INSERT INTO categories (name, description, roman_numeral) VALUES 
('Arts & Creative Expression', 'Communities focused on artistic creation, design, and creative pursuits', 'I'),
('Gaming & Entertainment', 'Communities around gaming, anime, movies, streaming, and pop culture', 'II'),
('Health, Wellness & Fitness', 'Communities focused on physical health, mental wellness, and fitness activities', 'III'),
('Technology & Innovation', 'Communities around emerging tech, programming, AI, and digital innovation', 'IV');

INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(1, 'Digital Art & Illustration', 'Digital artists using specific software and techniques', '["Procreate artists", "pixel artists", "NFT art collectors"]', 2500000, 'high', 'growing', '["Instagram", "TikTok", "YouTube"]'),
(1, 'Fashion & Style Subcultures', 'Fashion enthusiasts following specific aesthetic movements', '["cottagecore", "dark academia", "streetwear"]', 5800000, 'very_high', 'exploding', '["TikTok", "Instagram", "Pinterest"]'),
(2, 'Specific Video Game Fandoms', 'Dedicated communities around particular games', '["Genshin Impact", "Elden Ring", "indie games"]', 8500000, 'very_high', 'growing', '["Discord", "Reddit", "Twitch"]'),
(3, 'Mental Wellness & Mindfulness', 'Mental health and mindfulness practitioners', '["meditation practices", "self-care routines"]', 4200000, 'very_high', 'growing', '["Instagram", "TikTok", "YouTube"]'),
(4, 'AI & Machine Learning Enthusiasts', 'Communities focused on artificial intelligence and ML', '["AI art generators", "open-source AI"]', 1800000, 'very_high', 'exploding', '["Reddit", "Twitter", "YouTube"]');

INSERT INTO audience_segments (name, description, demographics, psychographics, behavioral_patterns, size_percentage) VALUES
('Creative Millennials', 'Millennials focused on creative expression and artistic pursuits', 
 '{"age_range": "26-40", "income": "30k-70k"}',
 '{"values": ["creativity", "authenticity"], "interests": ["art", "design"]}',
 '{"shopping": "values_driven", "media": "visual_platforms"}', 
 12.5),
('Health-Conscious Gen Z', 'Gen Z individuals prioritizing mental and physical wellness',
 '{"age_range": "18-25", "income": "20k-50k"}',
 '{"values": ["wellness", "sustainability"], "interests": ["fitness", "mental_health"]}',
 '{"shopping": "influencer_driven", "media": "short_form_video"}',
 15.3);

INSERT INTO community_segment_mapping (community_id, segment_id, affinity_score, overlap_percentage) VALUES
(1, 1, 0.92, 35.2),
(2, 1, 0.91, 33.6),
(4, 2, 0.96, 38.9),
(5, 1, 0.89, 31.4);