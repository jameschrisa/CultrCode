-- LaunchLens Extended Seed Data
-- Comprehensive expansion for premium user exploration
-- Adds remaining communities, trending topics, brands, and audience segments

-- Complete the remaining communities for all 8 categories
-- Learning & Self-Improvement (Category 5)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(5, 'Language Learning Communities', 'Communities focused on specific language acquisition and cultural exchange', '["Japanese learners", "polyglot communities", "immersion techniques", "language exchange", "specific apps like Duolingo"]', 4800000, 'very_high', 'growing', '["YouTube", "Instagram", "TikTok", "Discord"]'),
(5, 'Professional Development & Career Growth', 'Career-focused learning and networking communities', '["specific industry professionals", "LinkedIn Learning", "coding bootcamps", "MBA communities", "career pivoting"]', 3600000, 'high', 'growing', '["LinkedIn", "YouTube", "Reddit", "Discord"]'),
(5, 'Online Course & MOOC Communities', 'Learners around specific educational platforms and subjects', '["Coursera study groups", "edX communities", "MasterClass enthusiasts", "Khan Academy"]', 2900000, 'medium', 'stable', '["Facebook", "Reddit", "Discord", "YouTube"]'),
(5, 'Self-Help & Personal Development', 'Communities focused on personal growth methodologies', '["productivity systems", "habit tracking", "specific self-help book clubs", "life coaching"]', 3200000, 'high', 'growing', '["Instagram", "TikTok", "YouTube", "Pinterest"]'),
(5, 'Financial Literacy & Investing', 'Financial education and investment strategy communities', '["personal finance", "specific investment strategies", "cryptocurrency education", "retirement planning"]', 2700000, 'high', 'exploding', '["Reddit", "YouTube", "TikTok", "Twitter/X"]'),
(5, 'Academic & Research Communities', 'Higher education and research-focused groups', '["PhD students", "specific academic disciplines", "research methodology", "academic writing"]', 1800000, 'medium', 'stable', '["Reddit", "Twitter/X", "LinkedIn", "YouTube"]'),
(5, 'Skill-Specific Learning', 'Communities around particular skill development', '["public speaking", "negotiation skills", "speed reading", "memory techniques", "critical thinking"]', 2400000, 'high', 'growing', '["YouTube", "Reddit", "LinkedIn", "Instagram"]'),
(5, 'Philosophy & Critical Thinking', 'Intellectual discussion and philosophical exploration communities', '["stoicism", "existentialism", "debate communities", "ethics discussions", "logic puzzles"]', 1600000, 'medium', 'stable', '["Reddit", "YouTube", "Twitter/X", "Discord"]'),
(5, 'Entrepreneurship & Startup Culture', 'Business building and startup communities', '["indie hackers", "specific startup accelerators", "solopreneur communities", "business model innovation"]', 2100000, 'high', 'growing', '["Twitter/X", "LinkedIn", "YouTube", "Reddit"]');

-- Hobbies & Specialized Interests (Category 6)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(6, 'Collecting Communities', 'Enthusiasts who collect specific items or categories', '["vintage electronics", "rare books", "coin collecting", "stamp collecting", "antique furniture", "vinyl records"]', 3400000, 'high', 'stable', '["Instagram", "Facebook", "Reddit", "YouTube"]'),
(6, 'Model Building & Scale Models', 'Communities focused on building detailed scale models', '["model trains", "airplane models", "car models", "architectural models", "dioramas"]', 1900000, 'high', 'stable', '["YouTube", "Facebook", "Instagram", "Reddit"]'),
(6, 'Automotive Enthusiasts', 'Car culture and automotive hobby communities', '["specific car brands", "classic cars", "modification communities", "racing enthusiasts", "motorcycle groups"]', 4200000, 'very_high', 'growing', '["Instagram", "YouTube", "Facebook", "Reddit"]'),
(6, 'Aviation & Space Enthusiasts', 'Communities interested in flight and space exploration', '["pilot communities", "aircraft spotting", "space exploration", "drone flying", "amateur rocketry"]', 2300000, 'high', 'growing', '["YouTube", "Reddit", "Instagram", "Facebook"]'),
(6, 'Gardening & Plant Care', 'Communities focused on plant cultivation and care', '["houseplant care", "specific plant varieties", "organic gardening", "urban farming", "rare plant collecting"]', 5600000, 'very_high', 'growing', '["Instagram", "TikTok", "Pinterest", "YouTube"]'),
(6, 'Amateur Radio & Electronics', 'Radio communication and electronics hobbyists', '["ham radio operators", "electronics repair", "circuit building", "radio experimentation"]', 1200000, 'medium', 'stable', '["YouTube", "Reddit", "Facebook", "Discord"]'),
(6, 'Genealogy & Family History', 'Communities researching family history and ancestry', '["DNA testing", "historical research", "family tree building", "heritage preservation"]', 2800000, 'medium', 'stable', '["Facebook", "YouTube", "Reddit", "Pinterest"]'),
(6, 'Puzzle & Brain Game Communities', 'Communities around mental challenges and puzzles', '["crossword enthusiasts", "sudoku", "escape room design", "logic puzzles", "chess communities"]', 2100000, 'medium', 'stable', '["Reddit", "YouTube", "Facebook", "Discord"]'),
(6, 'Woodworking & Craftsmanship', 'Traditional craft and woodworking communities', '["furniture making", "carving", "restoration", "traditional techniques", "tool collecting"]', 2600000, 'high', 'growing', '["YouTube", "Instagram", "Pinterest", "Facebook"]'),
(6, 'Astronomy & Stargazing', 'Amateur astronomy and space observation communities', '["telescope users", "astrophotography", "celestial events", "planetarium enthusiasts"]', 1700000, 'high', 'growing', '["Reddit", "Instagram", "YouTube", "Facebook"]');

-- Lifestyle & Values-Driven (Category 7)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(7, 'Minimalism & Intentional Living', 'Communities focused on simplified, purposeful living', '["minimalist lifestyle", "decluttering", "intentional consumption", "simple living", "digital minimalism"]', 3800000, 'high', 'growing', '["Instagram", "YouTube", "TikTok", "Pinterest"]'),
(7, 'Zero Waste & Sustainability', 'Environmental consciousness and waste reduction communities', '["zero waste lifestyle", "plastic-free living", "sustainable fashion", "eco-friendly products", "climate activism"]', 4200000, 'very_high', 'exploding', '["Instagram", "TikTok", "YouTube", "Pinterest"]'),
(7, 'Spiritual & New Age Communities', 'Alternative spirituality and wellness practices', '["crystal healing", "astrology", "meditation practices", "energy healing", "tarot communities"]', 3600000, 'very_high', 'growing', '["TikTok", "Instagram", "YouTube", "Pinterest"]'),
(7, 'Alternative Lifestyle Choices', 'Non-conventional living arrangements and lifestyles', '["van life", "tiny house living", "off-grid living", "nomadic communities", "co-housing"]', 2400000, 'high', 'exploding', '["Instagram", "YouTube", "TikTok", "Facebook"]'),
(7, 'Ethical Consumption & Fair Trade', 'Conscious consumer communities focused on ethical purchasing', '["fair trade products", "ethical fashion", "cruelty-free beauty", "local sourcing", "B-corp support"]', 2900000, 'high', 'growing', '["Instagram", "Pinterest", "YouTube", "TikTok"]'),
(7, 'Digital Privacy & Rights', 'Communities advocating for digital rights and privacy', '["data privacy", "open source software", "digital rights activism", "surveillance resistance"]', 1600000, 'high', 'growing', '["Reddit", "Twitter/X", "YouTube", "Discord"]'),
(7, 'Slow Living & Mindful Consumption', 'Communities embracing slower-paced, mindful lifestyles', '["slow fashion", "mindful eating", "seasonal living", "analog hobbies", "digital detox"]', 3100000, 'high', 'growing', '["Instagram", "Pinterest", "YouTube", "TikTok"]'),
(7, 'Community Building & Mutual Aid', 'Groups focused on building stronger local communities', '["neighborhood organizing", "mutual aid networks", "community gardens", "local business support"]', 2200000, 'medium', 'growing', '["Facebook", "Instagram", "Twitter/X", "YouTube"]'),
(7, 'Frugal Living & Financial Independence', 'Communities focused on financial freedom through intentional spending', '["FIRE movement", "frugal living", "budget optimization", "debt-free living", "early retirement"]', 2700000, 'high', 'exploding', '["Reddit", "YouTube", "TikTok", "Instagram"]');

-- Niche Social & Identity Groups (Category 8)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(8, 'LGBTQ+ Subcultures & Identity', 'Diverse LGBTQ+ community groups and identity-based spaces', '["specific identity groups", "pride communities", "queer art", "LGBTQ+ professionals", "chosen family networks"]', 4800000, 'very_high', 'growing', '["TikTok", "Instagram", "Twitter/X", "Discord"]'),
(8, 'Neurodivergent Communities', 'Support and advocacy groups for neurodivergent individuals', '["autism communities", "ADHD support", "dyslexia advocacy", "sensory processing", "neurodiversity celebration"]', 3200000, 'very_high', 'exploding', '["TikTok", "Reddit", "Instagram", "YouTube"]'),
(8, 'Cultural Heritage & Diaspora', 'Communities preserving and celebrating cultural identity', '["specific ethnic communities", "heritage language preservation", "cultural traditions", "diaspora connections"]', 5400000, 'high', 'stable', '["Facebook", "Instagram", "YouTube", "TikTok"]'),
(8, 'Chronic Illness & Disability Support', 'Support communities for specific health conditions and disabilities', '["invisible illness advocacy", "specific condition support", "accessibility activism", "adaptive living"]', 2800000, 'very_high', 'growing', '["Instagram", "TikTok", "Facebook", "YouTube"]'),
(8, 'Age-Specific Communities', 'Communities organized around specific life stages or generations', '["Gen Z culture", "millennial nostalgia", "active seniors", "empty nesters", "young professionals"]', 6200000, 'high', 'stable', '["TikTok", "Instagram", "Facebook", "YouTube"]'),
(8, 'Professional Identity Groups', 'Career and profession-based identity communities', '["women in tech", "minority professionals", "industry-specific groups", "professional mothers", "career changers"]', 3600000, 'high', 'growing', '["LinkedIn", "Instagram", "Twitter/X", "YouTube"]'),
(8, 'Geographic & Regional Identity', 'Location-based identity and community groups', '["specific city cultures", "regional pride", "expat communities", "rural communities", "small town life"]', 4900000, 'medium', 'stable', '["Facebook", "Instagram", "TikTok", "Reddit"]'),
(8, 'Alternative Family Structures', 'Communities around non-traditional family arrangements', '["single parents", "childfree communities", "blended families", "adoption communities", "fertility journey support"]', 2400000, 'high', 'growing', '["Facebook", "Instagram", "Reddit", "YouTube"]'),
(8, 'Hobby-Based Social Groups', 'Social communities that form around shared recreational activities', '["book clubs", "hiking groups", "cooking communities", "pet owner groups", "travel buddy networks"]', 7800000, 'very_high', 'growing', '["Facebook", "Instagram", "Reddit", "TikTok"]');

-- Add more platforms for comprehensive coverage
INSERT INTO platforms (name, type, user_base_size, primary_demographics) VALUES
('Snapchat', 'social_media', 750000000, '{"age_range": "13-34", "gender_split": "51_female", "interests": ["ephemeral_content", "AR_filters", "peer_communication"]}'),
('BeReal', 'social_media', 50000000, '{"age_range": "16-25", "gender_split": "55_female", "interests": ["authenticity", "real_moments", "peer_sharing"]}'),
('Clubhouse', 'social_media', 30000000, '{"age_range": "25-45", "gender_split": "52_male", "interests": ["audio_conversations", "networking", "learning"]}'),
('Mastodon', 'social_media', 15000000, '{"age_range": "25-50", "gender_split": "60_male", "interests": ["decentralization", "privacy", "tech_discussion"]}'),
('Substack', 'content', 35000000, '{"age_range": "25-55", "gender_split": "48_female", "interests": ["newsletters", "independent_journalism", "niche_expertise"]}'),
('Medium', 'content', 120000000, '{"age_range": "25-50", "gender_split": "52_male", "interests": ["long_form_content", "professional_insights", "thought_leadership"]}'),
('Patreon', 'content', 20000000, '{"age_range": "18-40", "gender_split": "53_female", "interests": ["creator_support", "exclusive_content", "community_funding"]}'),
('OnlyFans', 'content', 50000000, '{"age_range": "18-35", "gender_split": "70_female", "interests": ["creator_economy", "subscription_content", "adult_content"]}'),
('Etsy', 'marketplace', 90000000, '{"age_range": "25-54", "gender_split": "85_female", "interests": ["handmade_goods", "vintage_items", "creative_entrepreneurship"]}'),
('Goodreads', 'social_media', 125000000, '{"age_range": "25-54", "gender_split": "75_female", "interests": ["reading", "book_reviews", "literary_discussion"]}');

-- Add more brands across diverse categories
INSERT INTO brands (name, category, brand_type, target_demographics) VALUES
-- Tech & Innovation
('OpenAI', 'AI/Technology', 'tech', '{"age_range": "18-45", "profession": "tech_workers", "values": ["innovation", "AI_advancement", "future_tech"]}'),
('Spotify', 'Music/Technology', 'mainstream', '{"age_range": "16-45", "interests": ["music"], "values": ["personalization", "discovery", "convenience"]}'),
('Canva', 'Design/Software', 'mainstream', '{"age_range": "20-45", "profession": "creative_professionals", "values": ["accessibility", "creativity", "ease_of_use"]}'),
('Figma', 'Design/Software', 'tech', '{"age_range": "22-40", "profession": "designers", "values": ["collaboration", "innovation", "design_systems"]}'),

-- Lifestyle & Wellness
('Lululemon', 'Athletic/Lifestyle', 'luxury', '{"age_range": "25-45", "gender": "60_female", "values": ["wellness", "quality", "community"]}'),
('Peloton', 'Fitness/Technology', 'luxury', '{"age_range": "25-50", "income": "high", "values": ["fitness", "technology", "community"]}'),
('Oura', 'Health/Technology', 'luxury', '{"age_range": "25-45", "interests": ["biohacking"], "values": ["data_driven_health", "optimization"]}'),
('Headspace', 'Wellness/Software', 'mainstream', '{"age_range": "20-50", "interests": ["mental_health"], "values": ["mindfulness", "wellness", "accessibility"]}'),

-- Fashion & Beauty
('Reformation', 'Fashion', 'sustainable', '{"age_range": "20-35", "gender": "female", "values": ["sustainability", "style", "transparency"]}'),
('Fenty Beauty', 'Beauty', 'mainstream', '{"age_range": "16-40", "gender": "80_female", "values": ["inclusivity", "quality", "representation"]}'),
('The Ordinary', 'Beauty', 'indie', '{"age_range": "18-35", "interests": ["skincare"], "values": ["simplicity", "efficacy", "affordability"]}'),
('Allbirds', 'Fashion/Sustainable', 'sustainable', '{"age_range": "25-45", "values": ["sustainability", "comfort", "minimal_design"]}'),

-- Gaming & Entertainment
('Discord', 'Gaming/Communication', 'tech', '{"age_range": "13-35", "interests": ["gaming", "communities"], "values": ["communication", "community", "privacy"]}'),
('Twitch', 'Gaming/Content', 'tech', '{"age_range": "16-35", "interests": ["gaming", "streaming"], "values": ["entertainment", "community", "interaction"]}'),
('Epic Games', 'Gaming', 'tech', '{"age_range": "10-40", "interests": ["gaming"], "values": ["innovation", "free_to_play", "creator_economy"]}'),

-- Food & Beverage
('Oatly', 'Food/Beverage', 'sustainable', '{"age_range": "20-40", "values": ["sustainability", "health", "environmental_impact"]}'),
('Liquid Death', 'Beverage', 'indie', '{"age_range": "18-35", "values": ["irreverence", "sustainability", "punk_aesthetic"]}'),
('Blue Apron', 'Food/Service', 'mainstream', '{"age_range": "25-45", "lifestyle": "busy_professionals", "values": ["convenience", "cooking", "quality"]}'),

-- Finance & Crypto
('Robinhood', 'Finance/Technology', 'tech', '{"age_range": "18-35", "interests": ["investing"], "values": ["accessibility", "simplicity", "democratization"]}'),
('Coinbase', 'Cryptocurrency', 'tech', '{"age_range": "20-45", "interests": ["crypto"], "values": ["innovation", "security", "mainstream_adoption"]}'),
('Mint', 'Finance/Software', 'mainstream', '{"age_range": "22-50", "interests": ["personal_finance"], "values": ["budgeting", "financial_health", "simplicity"]}');

-- Add more diverse audience segments
INSERT INTO audience_segments (name, description, demographics, psychographics, behavioral_patterns, size_percentage) VALUES
('Digital Nomads', 'Location-independent professionals who work remotely while traveling',
'{"age_range": "25-40", "income": "50k-100k", "education": "college_plus", "location": "global"}',
'{"values": ["freedom", "experiences", "flexibility"], "interests": ["travel", "technology", "remote_work"], "lifestyle": "nomadic_professional"}',
'{"shopping": "experience_focused", "media": "productivity_content", "decision_making": "research_driven"}',
7.2),

('Eco-Conscious Parents', 'Parents prioritizing environmental sustainability for their families',
'{"age_range": "28-45", "income": "40k-120k", "education": "college", "location": "suburban"}',
'{"values": ["sustainability", "family", "responsibility"], "interests": ["parenting", "environment", "health"], "lifestyle": "family_focused_sustainable"}',
'{"shopping": "values_driven", "media": "parenting_content", "decision_making": "impact_focused"}',
9.8),

('Gaming Enthusiasts', 'Dedicated gamers across platforms and genres',
'{"age_range": "16-35", "income": "25k-80k", "education": "varied", "location": "urban_suburban"}',
'{"values": ["entertainment", "achievement", "community"], "interests": ["gaming", "technology", "streaming"], "lifestyle": "gaming_focused"}',
'{"shopping": "performance_focused", "media": "gaming_content", "decision_making": "peer_influenced"}',
13.4),

('Spiritual Seekers', 'Individuals exploring alternative spirituality and personal growth',
'{"age_range": "22-55", "income": "30k-90k", "education": "some_college_plus", "location": "urban_suburban"}',
'{"values": ["growth", "meaning", "connection"], "interests": ["spirituality", "wellness", "self_development"], "lifestyle": "spiritually_focused"}',
'{"shopping": "values_aligned", "media": "spiritual_content", "decision_making": "intuition_based"}',
8.6),

('Urban Professionals', 'Career-focused individuals in metropolitan areas',
'{"age_range": "24-40", "income": "60k-150k", "education": "college_plus", "location": "major_cities"}',
'{"values": ["success", "efficiency", "networking"], "interests": ["career", "culture", "technology"], "lifestyle": "fast_paced_professional"}',
'{"shopping": "convenience_focused", "media": "professional_content", "decision_making": "time_efficient"}',
14.7),

('DIY Creators', 'Hands-on makers and crafting enthusiasts',
'{"age_range": "25-50", "income": "35k-85k", "education": "varied", "location": "suburban_rural"}',
'{"values": ["creativity", "self_reliance", "authenticity"], "interests": ["crafting", "home_improvement", "sustainability"], "lifestyle": "maker_focused"}',
'{"shopping": "project_based", "media": "tutorial_content", "decision_making": "quality_focused"}',
10.3),

('Retirement Adventurers', 'Active retirees pursuing new experiences and hobbies',
'{"age_range": "55-75", "income": "40k-120k", "education": "varied", "location": "varied"}',
'{"values": ["freedom", "experiences", "legacy"], "interests": ["travel", "hobbies", "family"], "lifestyle": "active_retirement"}',
'{"shopping": "experience_focused", "media": "lifestyle_content", "decision_making": "research_heavy"}',
6.9),

('Social Justice Advocates', 'Activists and advocates for social and political change',
'{"age_range": "18-45", "income": "25k-75k", "education": "college", "location": "urban"}',
'{"values": ["justice", "equality", "change"], "interests": ["activism", "politics", "community"], "lifestyle": "advocacy_focused"}',
'{"shopping": "values_driven", "media": "news_and_activism", "decision_making": "impact_focused"}',
5.8),

('Luxury Lifestyle', 'High-income consumers focused on premium experiences and products',
'{"age_range": "30-60", "income": "150k_plus", "education": "college_plus", "location": "affluent_areas"}',
'{"values": ["quality", "exclusivity", "status"], "interests": ["luxury_goods", "travel", "culture"], "lifestyle": "luxury_focused"}',
'{"shopping": "quality_over_price", "media": "luxury_content", "decision_making": "brand_focused"}',
4.2),

('Micro-Influencers', 'Content creators with engaged niche audiences',
'{"age_range": "18-35", "income": "30k-100k", "education": "varied", "location": "urban_suburban"}',
'{"values": ["authenticity", "creativity", "community"], "interests": ["content_creation", "social_media", "personal_branding"], "lifestyle": "creator_economy"}',
'{"shopping": "brand_partnership_driven", "media": "platform_native", "decision_making": "audience_influenced"}',
3.7);

-- Add trending topics for comprehensive trend tracking
INSERT INTO trending_topics (topic_name, related_community_id, trend_score, platforms, keywords, estimated_reach, trend_start_date, status) VALUES
-- Technology trends
('ChatGPT Productivity Hacks', 32, 0.95, '["TikTok", "YouTube", "Twitter/X"]', '["chatgpt", "ai productivity", "automation", "workflow"]', 3200000, '2024-01-15', 'exploding'),
('Web3 Social Media', 34, 0.82, '["Twitter/X", "Discord", "YouTube"]', '["decentralized social", "blockchain social", "web3 community"]', 1800000, '2023-10-20', 'growing'),
('No-Code Movement', 33, 0.88, '["YouTube", "LinkedIn", "TikTok"]', '["no code", "citizen developer", "automation tools"]', 2100000, '2023-08-10', 'growing'),

-- Lifestyle trends
('Dopamine Detox', 20, 0.91, '["TikTok", "Instagram", "YouTube"]', '["dopamine detox", "digital wellness", "mental clarity"]', 2800000, '2024-02-01', 'exploding'),
('Core Aesthetics', 7, 0.87, '["TikTok", "Pinterest", "Instagram"]', '["corecore", "aesthetic trends", "visual identity"]', 4200000, '2023-07-15', 'peak'),
('Soft Life Movement', 52, 0.84, '["TikTok", "Instagram", "Pinterest"]', '["soft life", "gentle living", "rest culture"]', 3600000, '2023-09-05', 'growing'),

-- Health & Wellness trends
('Hormone Health Awareness', 18, 0.93, '["TikTok", "Instagram", "YouTube"]', '["hormone health", "cycle syncing", "wellness education"]', 2400000, '2024-01-20', 'exploding'),
('Cold Therapy', 19, 0.89, '["YouTube", "Instagram", "TikTok"]', '["cold plunge", "ice bath", "wim hof", "cold exposure"]', 1900000, '2023-11-10', 'growing'),
('Primal Movement', 19, 0.86, '["Instagram", "YouTube", "TikTok"]', '["primal movement", "functional fitness", "natural movement"]', 1600000, '2023-12-01', 'growing'),

-- Creative trends
('AI Art Ethics Debate', 1, 0.88, '["Twitter/X", "Reddit", "YouTube"]', '["ai art ethics", "artist rights", "copyright ai"]', 1400000, '2023-12-15', 'growing'),
('Upcycled Fashion', 7, 0.85, '["TikTok", "Instagram", "Pinterest"]', '["upcycled fashion", "thrift flip", "sustainable style"]', 3100000, '2023-06-20', 'growing'),
('Analog Renaissance', 52, 0.79, '["Instagram", "TikTok", "YouTube"]', '["film photography", "vinyl revival", "analog hobbies"]', 2200000, '2023-05-10', 'stable'),

-- Social & Identity trends
('Neurodiverse Pride', 59, 0.94, '["TikTok", "Instagram", "Twitter/X"]', '["neurodivergent pride", "autism acceptance", "adhd awareness"]', 2700000, '2024-01-05', 'exploding'),
('Cultural Appreciation Education', 60, 0.83, '["TikTok", "Instagram", "YouTube"]', '["cultural appreciation", "respectful practices", "heritage education"]', 1800000, '2023-08-25', 'growing'),
('Chosen Family Networks', 58, 0.86, '["TikTok", "Instagram", "Reddit"]', '["chosen family", "found family", "community support"]', 2100000, '2023-10-05', 'growing'),

-- Learning & Development trends
('Micro-Learning', 41, 0.90, '["TikTok", "Instagram", "YouTube"]', '["micro learning", "bite sized education", "skill stacking"]', 2900000, '2023-09-15', 'growing'),
('Financial Independence Education', 45, 0.92, '["YouTube", "TikTok", "Reddit"]', '["fire movement", "financial independence", "early retirement"]', 2500000, '2023-07-01', 'exploding'),
('AI Prompt Engineering', 32, 0.96, '["YouTube", "LinkedIn", "Twitter/X"]', '["prompt engineering", "ai optimization", "chatgpt mastery"]', 1700000, '2024-02-10', 'exploding'),

-- Gaming & Entertainment trends
('Indie Game Renaissance', 10, 0.85, '["Twitch", "YouTube", "Reddit"]', '["indie games", "small developer support", "unique gaming"]', 1900000, '2023-11-20', 'growing'),
('Retro Gaming Nostalgia', 47, 0.81, '["YouTube", "Twitch", "Instagram"]', '["retro gaming", "nostalgia gaming", "classic consoles"]', 2300000, '2023-04-15', 'stable'),
('VTuber Culture', 16, 0.87, '["Twitch", "YouTube", "Twitter/X"]', '["vtuber", "virtual content", "anime streaming"]', 1500000, '2023-08-30', 'growing');

-- Add comprehensive community-segment mappings for new segments
INSERT INTO community_segment_mapping (community_id, segment_id, affinity_score, overlap_percentage) VALUES
-- Digital Nomads mappings
(32, 5, 0.94, 38.7), -- Language Learning Communities
(33, 5, 0.89, 31.2), -- Professional Development
(34, 5, 0.85, 24.8), -- Online Course Communities
(47, 5, 0.91, 33.5), -- Tech Enthusiasts connections

-- Eco-Conscious Parents mappings
(50, 6, 0.96, 42.3), -- Zero Waste & Sustainability
(46, 6, 0.87, 28.9), -- Gardening & Plant Care
(52, 6, 0.84, 26.1), -- Minimalism & Intentional Living
(18, 6, 0.89, 31.7), -- Specific Diets & Nutrition

-- Gaming Enthusiasts mappings
(10, 7, 0.97, 45.8), -- Specific Video Game Fandoms
(11, 7, 0.93, 37.2), -- Tabletop RPGs
(12, 7, 0.95, 41.6), -- Esports & Competitive Gaming
(16, 7, 0.88, 29.4), -- Live Streaming & Content Creation

-- Continue mappings for other new segments...
-- Spiritual Seekers
(51, 8, 0.95, 39.8), -- Spiritual & New Age Communities
(20, 8, 0.91, 33.4), -- Mental Wellness & Mindfulness
(35, 8, 0.83, 25.7), -- Philosophy & Critical Thinking

-- Urban Professionals
(33, 9, 0.92, 36.1), -- Professional Development
(56, 9, 0.87, 28.8), -- Professional Identity Groups
(35, 9, 0.84, 24.3), -- Entrepreneurship & Startup Culture

-- DIY Creators
(3, 10, 0.94, 38.9), -- Crafting & DIY
(48, 10, 0.91, 34.2), -- Woodworking & Craftsmanship
(31, 10, 0.88, 29.6), -- 3D Printing & Fabrication

-- Add more brand affinities for richer data
INSERT INTO community_brand_affinity (community_id, brand_id, affinity_score, sentiment, reasons) VALUES
-- Technology communities
(24, 9, 0.89, 'enthusiastic', 'OpenAI represents the forefront of AI innovation'),
(26, 12, 0.92, 'enthusiastic', 'Figma revolutionized collaborative design workflows'),
(25, 21, 0.85, 'positive', 'Coinbase makes crypto accessible to mainstream users'),

-- Health & Wellness communities
(20, 17, 0.93, 'enthusiastic', 'Headspace makes meditation accessible and engaging'),
(19, 15, 0.88, 'positive', 'Peloton combines technology with fitness community'),
(22, 16, 0.91, 'enthusiastic', 'Oura provides detailed biometric tracking for optimization'),

-- Creative communities
(1, 11, 0.87, 'positive', 'Canva democratizes design for digital artists'),
(7, 18, 0.84, 'positive', 'Reformation aligns with sustainable fashion values'),
(4, 10, 0.89, 'enthusiastic', 'Spotify helps photographers discover mood-setting music'),

-- Lifestyle communities
(50, 19, 0.92, 'enthusiastic', 'Fenty Beauty champions inclusivity and representation'),
(52, 13, 0.88, 'positive', 'Lululemon embodies the wellness lifestyle aesthetic'),
(53, 4, 0.86, 'positive', 'Glossier fits minimalist beauty routines'),

-- Gaming communities
(10, 14, 0.94, 'enthusiastic', 'Discord is essential for gaming community communication'),
(12, 15, 0.91, 'positive', 'Twitch is the primary platform for esports content'),
(11, 20, 0.83, 'positive', 'Epic Games supports indie developers and creators');

-- Add platform activity data for comprehensive community profiles
INSERT INTO community_platform_activity (community_id, platform_id, activity_level, member_count_estimate, engagement_metrics, hashtags) VALUES
-- Digital Art & Illustration
(1, 2, 'primary', 850000, '{"posts_per_day": 12000, "avg_likes": 2400, "avg_comments": 180}', '["digitalart", "procreate", "illustration", "artprocess"]'),
(1, 1, 'high', 650000, '{"posts_per_day": 8500, "avg_views": 45000, "avg_shares": 320}', '["digitalart", "timelapse", "arttutorial", "procreateart"]'),
(1, 3, 'medium', 420000, '{"videos_per_day": 450, "avg_views": 85000, "avg_subscribers": 15000}', '["digitalart", "speedpaint", "arttutorial", "photoshop"]'),

-- Gaming communities
(10, 21, 'primary', 2400000, '{"messages_per_day": 450000, "active_channels": 1200, "voice_hours": 180000}', '["genshinimpact", "eldenring", "indiegames", "retrogaming"]'),
(10, 4, 'high', 1800000, '{"posts_per_day": 3200, "avg_upvotes": 450, "avg_comments": 120}', '["gaming", "gamedev", "indiegames", "retrogaming"]'),

-- Health & Wellness
(20, 1, 'primary', 1200000, '{"posts_per_day": 5400, "avg_views": 125000, "avg_shares": 890}', '["mentalhealth", "mindfulness", "selfcare", "wellness"]'),
(19, 2, 'primary', 980000, '{"posts_per_day": 3600, "avg_likes": 8500, "avg_comments": 240}', '["fitness", "workout", "calisthenics", "functionalfitness"]'),

-- Sustainability communities
(50, 1, 'primary', 1600000, '{"posts_per_day": 4200, "avg_views": 89000, "avg_shares": 1200}', '["zerowaste", "sustainability", "ecofriendly", "climateaction"]'),
(50, 2, 'high', 1200000, '{"posts_per_day": 2800, "avg_likes": 6500, "avg_comments": 180}', '["sustainable", "zerowaste", "ecofriendly", "greenliving"]');