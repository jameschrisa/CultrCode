-- LaunchLens Micro-Communities Registry Seed Data
-- Based on the 8 categories and 80 communities from Communities.txt

-- Insert main categories
INSERT INTO categories (name, description, roman_numeral) VALUES
('Arts & Creative Expression', 'Communities focused on artistic creation, design, and creative pursuits', 'I'),
('Gaming & Entertainment', 'Communities around gaming, anime, movies, streaming, and pop culture', 'II'),
('Health, Wellness & Fitness', 'Communities focused on physical health, mental wellness, and fitness activities', 'III'),
('Technology & Innovation', 'Communities around emerging tech, programming, AI, and digital innovation', 'IV'),
('Learning & Self-Improvement', 'Communities focused on education, personal development, and skill building', 'V'),
('Hobbies & Specialized Interests', 'Communities around specific hobbies, collecting, and niche interests', 'VI'),
('Lifestyle & Values-Driven', 'Communities based on lifestyle choices, values, and intentional living', 'VII'),
('Niche Social & Identity Groups', 'Communities formed around specific identities, experiences, and social bonds', 'VIII');

-- Insert platforms
INSERT INTO platforms (name, type, user_base_size, primary_demographics) VALUES
('TikTok', 'social_media', 1000000000, '{"age_range": "16-34", "gender_split": "60_female", "interests": ["entertainment", "trends", "creativity"]}'),
('Instagram', 'social_media', 2000000000, '{"age_range": "18-44", "gender_split": "51_female", "interests": ["visual_content", "lifestyle", "brands"]}'),
('YouTube', 'content', 2700000000, '{"age_range": "18-49", "gender_split": "54_male", "interests": ["education", "entertainment", "tutorials"]}'),
('Reddit', 'forum', 430000000, '{"age_range": "18-34", "gender_split": "64_male", "interests": ["discussion", "niche_topics", "communities"]}'),
('Discord', 'messaging', 150000000, '{"age_range": "16-34", "gender_split": "70_male", "interests": ["gaming", "communities", "real_time_chat"]}'),
('Pinterest', 'social_media', 450000000, '{"age_range": "25-44", "gender_split": "76_female", "interests": ["DIY", "inspiration", "planning"]}'),
('Twitter/X', 'social_media', 400000000, '{"age_range": "25-49", "gender_split": "56_male", "interests": ["news", "opinions", "real_time_updates"]}'),
('Twitch', 'content', 140000000, '{"age_range": "16-34", "gender_split": "65_male", "interests": ["gaming", "live_streaming", "interaction"]}'),
('Facebook', 'social_media', 2900000000, '{"age_range": "25-54", "gender_split": "53_female", "interests": ["family", "groups", "local_community"]}'),
('LinkedIn', 'social_media', 900000000, '{"age_range": "25-54", "gender_split": "52_male", "interests": ["professional", "networking", "career"]}');

-- Insert communities for Arts & Creative Expression (Category 1)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(1, 'Digital Art & Illustration', 'Digital artists using specific software and techniques', '["Procreate artists", "Photoshop illustrators", "pixel artists", "concept artists", "NFT art collectors"]', 2500000, 'high', 'growing', '["Instagram", "TikTok", "YouTube", "Pinterest"]'),
(1, 'Traditional Arts', 'Artists working with physical mediums and classical techniques', '["oil painting", "watercolor", "ceramics", "sculpture", "drawing techniques"]', 1800000, 'medium', 'stable', '["Instagram", "Pinterest", "YouTube", "Facebook"]'),
(1, 'Crafting & DIY', 'Hands-on creators making physical projects', '["knitting/crochet", "macrame", "resin art", "papercraft", "custom keycaps"]', 3200000, 'very_high', 'growing', '["Pinterest", "Instagram", "TikTok", "YouTube"]'),
(1, 'Photography & Videography', 'Visual content creators with specialized equipment and techniques', '["specific camera brands", "drone photography", "street photography", "astrophotography", "short film making"]', 4100000, 'high', 'growing', '["Instagram", "YouTube", "TikTok", "Pinterest"]'),
(1, 'Creative Writing', 'Writers focused on specific genres and storytelling', '["fantasy world-building", "poetry", "screenwriting", "fanfiction", "nanowrimo groups"]', 1600000, 'medium', 'stable', '["Twitter/X", "Reddit", "Discord", "YouTube"]'),
(1, 'Music Production & DJing', 'Music creators using digital tools and techniques', '["specific DAWs like Ableton", "modular synths", "lo-fi beat makers"]', 2200000, 'high', 'growing', '["YouTube", "TikTok", "Instagram", "Discord"]'),
(1, 'Fashion & Style Subcultures', 'Fashion enthusiasts following specific aesthetic movements', '["cottagecore", "dark academia", "streetwear", "vintage fashion", "cosplay", "specific sneakerhead groups"]', 5800000, 'very_high', 'exploding', '["TikTok", "Instagram", "Pinterest", "YouTube"]'),
(1, 'Interior Design & Home Decor', 'Home design enthusiasts with specific aesthetic preferences', '["maximalism", "minimalist living", "tiny home enthusiasts", "home renovation DIY"]', 3400000, 'high', 'growing', '["Pinterest", "Instagram", "TikTok", "YouTube"]'),
(1, 'Performing Arts', 'Live performance enthusiasts and practitioners', '["amateur theater", "improv", "specific dance styles", "musical instrument learning"]', 1900000, 'medium', 'stable', '["TikTok", "YouTube", "Instagram", "Facebook"]');

-- Insert communities for Gaming & Entertainment (Category 2)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(2, 'Specific Video Game Fandoms', 'Dedicated communities around particular games', '["Genshin Impact", "Elden Ring", "specific indie game communities", "retro gaming"]', 8500000, 'very_high', 'growing', '["Discord", "Reddit", "Twitch", "YouTube"]'),
(2, 'Tabletop RPGs & Board Games', 'Physical gaming communities and hobbyists', '["Dungeons & Dragons lore", "specific board game designers", "miniature painting"]', 2800000, 'high', 'growing', '["Reddit", "Discord", "YouTube", "Facebook"]'),
(2, 'Esports & Competitive Gaming', 'Competitive gaming fans and participants', '["specific team fans", "game meta discussions", "competitive strategies"]', 4200000, 'very_high', 'growing', '["Twitch", "YouTube", "Discord", "Reddit"]'),
(2, 'Anime & Manga Fandoms', 'Japanese media enthusiasts', '["specific series", "genre discussions", "figure collecting"]', 3600000, 'very_high', 'stable', '["Twitter/X", "Reddit", "Discord", "TikTok"]'),
(2, 'Movie & TV Show Fandoms', 'Entertainment media communities', '["specific franchises", "film theory", "obscure cinema", "film festival enthusiasts"]', 2900000, 'high', 'stable', '["Twitter/X", "Reddit", "YouTube", "TikTok"]'),
(2, 'Pop Culture & Collectibles', 'Collectors and pop culture enthusiasts', '["Funko Pop collecting", "comic book collecting", "specific trading card games"]', 2400000, 'high', 'stable', '["Instagram", "Facebook", "Reddit", "YouTube"]'),
(2, 'Live Streaming & Content Creation', 'Content creators and their communities', '["Twitch streamer communities", "YouTube content creators", "podcasting"]', 5100000, 'very_high', 'exploding', '["Twitch", "YouTube", "TikTok", "Discord"]');

-- Insert communities for Health, Wellness & Fitness (Category 3)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(3, 'Specific Diets & Nutrition', 'Communities around particular dietary approaches', '["carnivore diet", "intuitive eating", "specific allergen-free lifestyles", "plant-based athletes"]', 3800000, 'high', 'growing', '["Instagram", "TikTok", "YouTube", "Reddit"]'),
(3, 'Niche Fitness Regimes', 'Specialized fitness and training communities', '["powerlifting", "ultra-running", "CrossFit", "calisthenics", "aerial silks", "pole fitness"]', 2700000, 'high', 'growing', '["Instagram", "YouTube", "TikTok", "Facebook"]'),
(3, 'Mental Wellness & Mindfulness', 'Mental health and mindfulness practitioners', '["specific meditation practices", "self-care routines", "specific therapeutic approaches"]', 4200000, 'very_high', 'growing', '["Instagram", "TikTok", "YouTube", "Pinterest"]'),
(3, 'Outdoor & Adventure Sports', 'Outdoor recreation enthusiasts', '["rock climbing", "backpacking", "surfing", "kayaking", "competitive cycling"]', 3100000, 'high', 'stable', '["Instagram", "YouTube", "Facebook", "Reddit"]'),
(3, 'Biohacking & Longevity', 'Health optimization and enhancement communities', '["nootropics", "specific health tech", "sleep optimization"]', 1400000, 'high', 'exploding', '["Reddit", "YouTube", "Twitter/X", "Instagram"]'),
(3, 'Personal Grooming & Beauty', 'Beauty and skincare enthusiasts', '["specific skincare routines", "clean beauty", "indie makeup brands"]', 6200000, 'very_high', 'growing', '["TikTok", "Instagram", "YouTube", "Pinterest"]');

-- Continue with remaining categories...
-- Technology & Innovation (Category 4)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(4, 'AI & Machine Learning Enthusiasts', 'Communities focused on artificial intelligence and ML', '["specific AI art generators", "open-source AI development", "ethical AI discussions"]', 1800000, 'very_high', 'exploding', '["Reddit", "Twitter/X", "YouTube", "Discord"]'),
(4, 'Web3 & Decentralization', 'Blockchain and decentralized technology communities', '["specific blockchain projects", "DeFi", "DAOs", "crypto art"]', 2200000, 'high', 'growing', '["Twitter/X", "Discord", "Reddit", "YouTube"]'),
(4, 'Coding & Programming Languages', 'Developer communities around specific technologies', '["Rust developers", "Python for data science", "specific open-source projects"]', 3400000, 'high', 'growing', '["Reddit", "Discord", "YouTube", "LinkedIn"]'),
(4, 'DIY Electronics & Robotics', 'Hardware hacking and robotics enthusiasts', '["Arduino projects", "Raspberry Pi enthusiasts", "robotics competitions"]', 1600000, 'high', 'growing', '["YouTube", "Reddit", "Discord", "Instagram"]'),
(4, 'Cybersecurity & Privacy', 'Security and privacy-focused communities', '["ethical hacking", "data privacy advocates", "open-source security tools"]', 1200000, 'high', 'growing', '["Reddit", "Twitter/X", "YouTube", "Discord"]'),
(4, 'Smart Home & Home Automation', 'Home automation and IoT enthusiasts', '["specific ecosystems like HomeKit", "custom smart home setups"]', 1900000, 'high', 'growing', '["Reddit", "YouTube", "Facebook", "Instagram"]'),
(4, 'Virtual & Augmented Reality', 'VR/AR technology and experience communities', '["specific VR games", "AR development", "metaverse exploration"]', 1300000, 'high', 'growing', '["Discord", "Reddit", "YouTube", "Twitter/X"]'),
(4, '3D Printing & Fabrication', 'Digital fabrication and 3D printing communities', '["specific printer brands", "model design", "material science"]', 1700000, 'high', 'growing', '["Reddit", "YouTube", "Instagram", "Facebook"]');

-- Add sample brands for testing
INSERT INTO brands (name, category, brand_type, target_demographics) VALUES
('Apple', 'Technology', 'mainstream', '{"age_range": "18-54", "income": "middle_to_high", "values": ["innovation", "design", "premium"]}'),
('Patagonia', 'Outdoor/Lifestyle', 'sustainable', '{"age_range": "25-45", "income": "middle_to_high", "values": ["sustainability", "adventure", "quality"]}'),
('Adobe', 'Software', 'mainstream', '{"age_range": "18-44", "profession": "creative", "values": ["creativity", "professionalism", "innovation"]}'),
('Glossier', 'Beauty', 'indie', '{"age_range": "18-35", "gender": "female", "values": ["minimalism", "authenticity", "community"]}'),
('Tesla', 'Automotive/Tech', 'luxury', '{"age_range": "25-54", "income": "high", "values": ["innovation", "sustainability", "status"]}'),
('Nintendo', 'Gaming', 'mainstream', '{"age_range": "6-45", "values": ["fun", "family", "creativity"]}'),
('REI', 'Outdoor', 'mainstream', '{"age_range": "25-54", "interests": ["outdoor_activities"], "values": ["adventure", "quality", "community"]}'),
('Notion', 'Software', 'indie', '{"age_range": "18-35", "profession": "knowledge_worker", "values": ["productivity", "customization", "community"]}');

-- Add sample audience segments (these would typically come from your segmentation tool)
INSERT INTO audience_segments (name, description, demographics, psychographics, behavioral_patterns, size_percentage) VALUES
('Creative Millennials', 'Millennials focused on creative expression and artistic pursuits', 
 '{"age_range": "26-40", "income": "30k-70k", "education": "college", "location": "urban"}',
 '{"values": ["creativity", "authenticity", "self_expression"], "interests": ["art", "design", "culture"], "lifestyle": "urban_creative"}',
 '{"shopping": "values_driven", "media": "visual_platforms", "decision_making": "research_heavy"}', 
 12.5),
 
('Health-Conscious Gen Z', 'Gen Z individuals prioritizing mental and physical wellness',
 '{"age_range": "18-25", "income": "20k-50k", "education": "some_college", "location": "suburban_urban"}',
 '{"values": ["wellness", "sustainability", "authenticity"], "interests": ["fitness", "mental_health", "nutrition"], "lifestyle": "health_focused"}',
 '{"shopping": "influencer_driven", "media": "short_form_video", "decision_making": "peer_influenced"}',
 15.3),

('Tech Enthusiasts', 'Technology early adopters and digital natives',
 '{"age_range": "22-45", "income": "50k-120k", "education": "college_plus", "location": "urban_tech_hubs"}',
 '{"values": ["innovation", "efficiency", "progress"], "interests": ["technology", "gaming", "programming"], "lifestyle": "digital_first"}',
 '{"shopping": "research_driven", "media": "technical_content", "decision_making": "feature_focused"}',
 8.7),

('Sustainable Living Advocates', 'Environmentally conscious consumers across age groups',
 '{"age_range": "25-50", "income": "40k-100k", "education": "college", "location": "urban_suburban"}',
 '{"values": ["sustainability", "responsibility", "quality"], "interests": ["environment", "ethical_consumption", "minimal_living"], "lifestyle": "conscious_consumption"}',
 '{"shopping": "values_aligned", "media": "educational_content", "decision_making": "impact_focused"}',
 11.2);

-- Add community-segment mappings
INSERT INTO community_segment_mapping (community_id, segment_id, affinity_score, overlap_percentage) VALUES
-- Creative Millennials mappings
(1, 1, 0.92, 35.2), -- Digital Art & Illustration
(2, 1, 0.87, 28.1), -- Traditional Arts
(3, 1, 0.84, 22.3), -- Crafting & DIY
(4, 1, 0.89, 31.4), -- Photography & Videography
(5, 1, 0.85, 25.7), -- Creative Writing
(6, 1, 0.83, 19.8), -- Music Production
(7, 1, 0.91, 33.6), -- Fashion & Style Subcultures
(8, 1, 0.86, 27.9), -- Interior Design

-- Health-Conscious Gen Z mappings
(18, 2, 0.94, 42.1), -- Specific Diets & Nutrition
(19, 2, 0.88, 31.7), -- Niche Fitness Regimes
(20, 2, 0.96, 38.9), -- Mental Wellness & Mindfulness
(21, 2, 0.82, 24.3), -- Outdoor & Adventure Sports
(22, 2, 0.89, 29.4), -- Biohacking & Longevity
(23, 2, 0.91, 35.8), -- Personal Grooming & Beauty

-- Tech Enthusiasts mappings
(24, 3, 0.97, 45.6), -- AI & Machine Learning
(25, 3, 0.93, 38.2), -- Web3 & Decentralization
(26, 3, 0.95, 41.3), -- Coding & Programming
(27, 3, 0.91, 33.7), -- DIY Electronics & Robotics
(28, 3, 0.94, 39.8), -- Cybersecurity & Privacy
(29, 3, 0.87, 28.9), -- Smart Home & Automation
(30, 3, 0.89, 31.2), -- VR & AR
(31, 3, 0.85, 26.4), -- 3D Printing

-- Sustainable Living Advocates mappings
(3, 4, 0.88, 29.3), -- Crafting & DIY
(18, 4, 0.92, 34.7), -- Specific Diets & Nutrition
(21, 4, 0.89, 31.8), -- Outdoor & Adventure Sports
(23, 4, 0.85, 27.2); -- Personal Grooming & Beauty (clean beauty focus)

-- Add community brand affinities
INSERT INTO community_brand_affinity (community_id, brand_id, affinity_score, sentiment, reasons) VALUES
(1, 3, 0.94, 'enthusiastic', 'Adobe Creative Suite is essential for digital artists'),
(1, 4, 0.72, 'positive', 'Aesthetic aligns with minimalist design trends'),
(7, 4, 0.89, 'enthusiastic', 'Glossier embodies authentic, effortless beauty aesthetic'),
(24, 1, 0.91, 'enthusiastic', 'Apple products are preferred for AI/ML development'),
(25, 5, 0.83, 'positive', 'Tesla represents innovation in decentralized future'),
(18, 2, 0.87, 'enthusiastic', 'Patagonia aligns with sustainable nutrition values'),
(21, 2, 0.93, 'enthusiastic', 'Patagonia is the gold standard for outdoor gear'),
(21, 7, 0.88, 'positive', 'REI provides quality gear and outdoor community'),
(26, 8, 0.85, 'positive', 'Notion is popular among developers for project management');

-- Add some trending topics
INSERT INTO trending_topics (topic_name, related_community_id, trend_score, platforms, keywords, estimated_reach, trend_start_date, status) VALUES
('AI Art Generation', 1, 0.89, '["TikTok", "Instagram", "Twitter/X"]', '["midjourney", "dalle", "stable diffusion", "ai art"]', 2400000, '2023-12-01', 'growing'),
('Cottagecore Aesthetic', 7, 0.76, '["TikTok", "Pinterest", "Instagram"]', '["cottagecore", "dark academia", "aesthetic", "vintage"]', 1800000, '2023-06-15', 'peak'),
('Biohacking Optimization', 22, 0.92, '["YouTube", "Instagram", "Reddit"]', '["biohacking", "longevity", "optimization", "health tech"]', 950000, '2024-01-10', 'exploding'),
('Sustainable Beauty', 23, 0.81, '["TikTok", "Instagram", "YouTube"]', '["clean beauty", "sustainable skincare", "zero waste beauty"]', 1600000, '2023-09-20', 'growing'),
('Web3 Gaming', 10, 0.87, '["Discord", "Twitter/X", "YouTube"]', '["web3 gaming", "nft games", "blockchain gaming", "play to earn"]', 1200000, '2023-11-05', 'growing');