-- Add communities to reach 60+ total, matching actual schema
-- Schema: id, category_id, name, description, size_estimate, engagement_level, growth_trend

-- Category 1: Arts & Creative Expression
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(1, 'Digital Content Creation', 'Video and social media content creators', 4200000, 'very_high', 'exploding'),
(1, 'Independent Publishing', 'Writers and publishers outside traditional publishing', 2800000, 'high', 'growing'),
(1, 'Street Art & Urban Culture', 'Street art and urban creative expression', 3100000, 'very_high', 'growing'),
(1, 'Experimental Arts', 'Avant-garde and experimental creative practices', 1400000, 'medium', 'growing'),
(1, 'Craft & Artisan Markets', 'Handmade crafts and artisan products', 3500000, 'high', 'growing'),
(1, 'Digital Art Communities', 'Digital illustration and design communities', 2900000, 'very_high', 'growing'),
(1, 'Music Production & Audio', 'Music creation and audio engineering', 2900000, 'very_high', 'growing'),
(1, 'Film & Video Production', 'Independent filmmaking and video production', 2400000, 'high', 'growing');

-- Category 2: Gaming & Entertainment  
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(2, 'Retro Gaming Culture', 'Classic and vintage gaming enthusiasts', 2700000, 'high', 'stable'),
(2, 'Mobile Gaming', 'Smartphone and tablet gaming communities', 5800000, 'very_high', 'exploding'),
(2, 'Game Development', 'Game creation and modding communities', 2100000, 'high', 'growing'),
(2, 'Entertainment Analysis', 'Entertainment discussion and analysis', 3400000, 'high', 'growing'),
(2, 'Streaming Culture', 'Live streaming and viewer communities', 4200000, 'very_high', 'exploding'),
(2, 'Competitive Gaming', 'Esports and competitive gaming scenes', 3800000, 'very_high', 'growing'),
(2, 'Game Collecting', 'Video game collecting and preservation', 1900000, 'medium', 'stable'),
(2, 'Interactive Entertainment', 'VR, AR, and interactive media communities', 1600000, 'high', 'exploding');

-- Category 3: Health, Wellness & Fitness
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(3, 'Alternative Health', 'Non-traditional health and healing methods', 2900000, 'high', 'growing'),
(3, 'Chronic Condition Support', 'Long-term health condition management', 3600000, 'very_high', 'growing'),
(3, 'Fitness Subcultures', 'Specialized fitness communities', 4100000, 'very_high', 'growing'),
(3, 'Longevity & Biohacking', 'Health optimization and lifespan extension', 1800000, 'high', 'exploding'),
(3, 'Mental Health Advocacy', 'Mental health awareness and support', 4500000, 'very_high', 'exploding'),
(3, 'Recovery Communities', 'Addiction recovery and sobriety support', 2200000, 'very_high', 'growing'),
(3, 'Youth Sports & Activities', 'Youth-focused sports and physical activities', 3300000, 'high', 'stable'),
(3, 'Holistic Wellness', 'Integrated approach to mind-body wellness', 2800000, 'high', 'growing');

-- Category 4: Technology & Innovation
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(4, 'Open Source', 'Open source software development', 2400000, 'high', 'stable'),
(4, 'Hardware Hacking', 'Hardware modification and creation', 1900000, 'high', 'growing'),
(4, 'Future Tech', 'Emerging technology enthusiasts', 2200000, 'medium', 'growing'),
(4, 'Tech Ethics', 'Technology impact on society', 1600000, 'high', 'growing'),
(4, 'DevOps & Cloud', 'Development operations and cloud computing', 2800000, 'high', 'growing'),
(4, 'Cybersecurity', 'Information security and cyber defense', 2100000, 'high', 'growing'),
(4, 'Startup Tech', 'Technology entrepreneurship and startups', 1900000, 'high', 'growing'),
(4, 'Data Science', 'Data analysis and machine learning', 2500000, 'high', 'growing'),
(4, 'No-Code Movement', 'Visual programming and automation tools', 1700000, 'high', 'exploding');

-- Category 5: Learning & Self-Improvement
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(5, 'Online Course Communities', 'Educational platform learners', 2900000, 'medium', 'stable'),
(5, 'Self-Help & Development', 'Personal growth methodologies', 3200000, 'high', 'growing'),
(5, 'Academic Research', 'Higher education and research', 1800000, 'medium', 'stable'),
(5, 'Skill Development', 'Specific skill learning communities', 2400000, 'high', 'growing'),
(5, 'Philosophy & Critical Thinking', 'Intellectual discussion communities', 1600000, 'medium', 'stable'),
(5, 'Startup & Entrepreneurship', 'Business building communities', 2100000, 'high', 'growing'),
(5, 'Career Advancement', 'Professional development and networking', 3100000, 'high', 'growing'),
(5, 'Creative Learning', 'Art, music, and creative skill development', 2300000, 'high', 'growing');

-- Category 6: Hobbies & Specialized Interests
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(6, 'Collecting Culture', 'Item and category collectors', 3400000, 'high', 'stable'),
(6, 'Model Building', 'Scale model construction', 1900000, 'high', 'stable'),
(6, 'Automotive Culture', 'Car enthusiasts and culture', 4200000, 'very_high', 'growing'),
(6, 'Aviation & Space', 'Flight and space exploration', 2300000, 'high', 'growing'),
(6, 'Amateur Radio', 'Radio communication hobbyists', 1200000, 'medium', 'stable'),
(6, 'Genealogy Research', 'Family history and ancestry', 2800000, 'medium', 'stable'),
(6, 'Puzzle & Brain Games', 'Mental challenges and puzzle solving', 2100000, 'medium', 'stable'),
(6, 'Woodworking & Crafts', 'Traditional craftsmanship and woodworking', 2600000, 'high', 'growing'),
(6, 'Astronomy & Stargazing', 'Amateur astronomy and space observation', 1700000, 'high', 'growing'),
(6, 'Outdoor Adventure', 'Hiking, camping, and outdoor exploration', 4500000, 'very_high', 'growing');

-- Category 7: Lifestyle & Values-Driven
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(7, 'Alternative Lifestyles', 'Non-conventional living arrangements', 2400000, 'high', 'exploding'),
(7, 'Ethical Consumption', 'Conscious consumer communities', 2900000, 'high', 'growing'),
(7, 'Digital Privacy', 'Digital rights and privacy advocacy', 1600000, 'high', 'growing'),
(7, 'Slow Living', 'Mindful and slower-paced lifestyles', 3100000, 'high', 'growing'),
(7, 'Financial Independence', 'Financial freedom communities', 2700000, 'high', 'exploding'),
(7, 'Prepping & Self-Sufficiency', 'Emergency preparedness and self-reliance', 1800000, 'high', 'growing'),
(7, 'Spiritual Exploration', 'Modern spirituality and new age practices', 3600000, 'very_high', 'growing'),
(7, 'Community Building', 'Local community organizing and mutual aid', 2200000, 'medium', 'growing'),
(7, 'Environmental Activism', 'Climate action and environmental advocacy', 3400000, 'very_high', 'exploding');

-- Category 8: Niche Social & Identity Groups
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
(8, 'Cultural Heritage', 'Cultural identity and preservation', 5400000, 'high', 'stable'),
(8, 'Chronic Illness Support', 'Health condition support communities', 2800000, 'very_high', 'growing'),
(8, 'Age-Specific Groups', 'Life stage and generation communities', 6200000, 'high', 'stable'),
(8, 'Professional Identity', 'Career-based identity communities', 3600000, 'high', 'growing'),
(8, 'Geographic Identity', 'Location-based communities', 4900000, 'medium', 'stable'),
(8, 'Alternative Family', 'Non-traditional family arrangements', 2400000, 'high', 'growing'),
(8, 'Religious & Spiritual', 'Faith-based and spiritual communities', 3400000, 'high', 'stable'),
(8, 'Neurodivergent Support', 'Neurodiversity advocacy and support', 3200000, 'very_high', 'exploding'),
(8, 'LGBTQ+ Culture', 'LGBTQ+ identity and community spaces', 4800000, 'very_high', 'growing'),
(8, 'Social Justice', 'Activism and social change communities', 2900000, 'high', 'growing');