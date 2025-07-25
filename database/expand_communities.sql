-- Expand communities to 60+ total
-- Using simple INSERT instead of INSERT OR IGNORE to ensure they get added

-- Category 1: Arts & Creative Expression (add 6 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(1, 'Digital Content Creation', 'Video and social media content creators', '["YouTube creators", "TikTok creators", "Instagram content"]', 4200000, 'very_high', 'exploding', '["TikTok", "YouTube", "Instagram"]'),
(1, 'Independent Publishing', 'Writers and publishers outside traditional publishing', '["self-publishing", "indie authors", "poetry"]', 2800000, 'high', 'growing', '["Twitter/X", "Instagram", "Medium"]'),
(1, 'Street Art & Urban Culture', 'Street art and urban creative expression', '["graffiti artists", "mural painters", "street photography"]', 3100000, 'very_high', 'growing', '["Instagram", "TikTok", "YouTube"]'),
(1, 'Experimental Arts', 'Avant-garde and experimental creative practices', '["performance art", "digital installations", "mixed media"]', 1400000, 'medium', 'growing', '["Instagram", "YouTube", "Twitter/X"]'),
(1, 'Craft & Artisan Markets', 'Handmade crafts and artisan products', '["pottery", "jewelry making", "leather crafts", "textiles"]', 3500000, 'high', 'growing', '["Instagram", "Pinterest", "Facebook"]'),
(1, 'Digital Art Communities', 'Digital illustration and design communities', '["concept art", "character design", "digital painting"]', 2900000, 'very_high', 'growing', '["Instagram", "ArtStation", "Twitter/X"]');

-- Category 2: Gaming & Entertainment (add 7 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(2, 'Retro Gaming Culture', 'Classic and vintage gaming enthusiasts', '["retro console collecting", "arcade culture", "speed running"]', 2700000, 'high', 'stable', '["YouTube", "Reddit", "Twitch"]'),
(2, 'Mobile Gaming', 'Smartphone and tablet gaming communities', '["gacha games", "puzzle games", "mobile esports"]', 5800000, 'very_high', 'exploding', '["Discord", "Reddit", "YouTube"]'),
(2, 'Game Development', 'Game creation and modding communities', '["indie game dev", "game modding", "level design"]', 2100000, 'high', 'growing', '["Discord", "Reddit", "YouTube"]'),
(2, 'Entertainment Analysis', 'Entertainment discussion and analysis', '["film theory", "TV analysis", "pop culture critique"]', 3400000, 'high', 'growing', '["YouTube", "Reddit", "Twitter/X"]'),
(2, 'Streaming Culture', 'Live streaming and viewer communities', '["Twitch streamers", "YouTube Live", "streaming tools"]', 4200000, 'very_high', 'exploding', '["Twitch", "YouTube", "Discord"]'),
(2, 'Competitive Gaming', 'Esports and competitive gaming scenes', '["tournament players", "esports fans", "team supporters"]', 3800000, 'very_high', 'growing', '["Twitch", "YouTube", "Discord"]'),
(2, 'Game Collecting', 'Video game collecting and preservation', '["rare game hunting", "game preservation", "hardware collecting"]', 1900000, 'medium', 'stable', '["Reddit", "YouTube", "Facebook"]');

-- Category 3: Health, Wellness & Fitness (add 7 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(3, 'Alternative Health', 'Non-traditional health and healing methods', '["herbal medicine", "acupuncture", "energy healing"]', 2900000, 'high', 'growing', '["Instagram", "YouTube", "TikTok"]'),
(3, 'Chronic Condition Support', 'Long-term health condition management', '["diabetes support", "autoimmune groups", "pain management"]', 3600000, 'very_high', 'growing', '["Facebook", "Instagram", "Reddit"]'),
(3, 'Fitness Subcultures', 'Specialized fitness communities', '["powerlifting", "rock climbing", "martial arts"]', 4100000, 'very_high', 'growing', '["Instagram", "YouTube", "TikTok"]'),
(3, 'Longevity & Biohacking', 'Health optimization and lifespan extension', '["intermittent fasting", "cold therapy", "nootropics"]', 1800000, 'high', 'exploding', '["YouTube", "Reddit", "Instagram"]'),
(3, 'Mental Health Advocacy', 'Mental health awareness and support', '["depression support", "anxiety management", "therapy communities"]', 4500000, 'very_high', 'exploding', '["TikTok", "Instagram", "Reddit"]'),
(3, 'Recovery Communities', 'Addiction recovery and sobriety support', '["sobriety support", "addiction recovery", "clean living"]', 2200000, 'very_high', 'growing', '["Reddit", "Facebook", "Instagram"]'),
(3, 'Youth Sports & Activities', 'Youth-focused sports and physical activities', '["youth soccer", "gymnastics", "dance teams"]', 3300000, 'high', 'stable', '["Instagram", "Facebook", "YouTube"]');

-- Category 4: Technology & Innovation (add 8 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(4, 'Open Source', 'Open source software development', '["Linux users", "open source developers", "free software"]', 2400000, 'high', 'stable', '["GitHub", "Reddit", "Discord"]'),
(4, 'Hardware Hacking', 'Hardware modification and creation', '["raspberry pi", "arduino", "electronics repair"]', 1900000, 'high', 'growing', '["YouTube", "Reddit", "Discord"]'),
(4, 'Future Tech', 'Emerging technology enthusiasts', '["quantum computing", "space tech", "biotech"]', 2200000, 'medium', 'growing', '["Reddit", "YouTube", "Twitter/X"]'),
(4, 'Tech Ethics', 'Technology impact on society', '["AI ethics", "data privacy", "tech regulation"]', 1600000, 'high', 'growing', '["Twitter/X", "Reddit", "Medium"]'),
(4, 'DevOps & Cloud', 'Development operations and cloud computing', '["cloud architecture", "DevOps practices", "infrastructure"]', 2800000, 'high', 'growing', '["LinkedIn", "Reddit", "YouTube"]'),
(4, 'Cybersecurity', 'Information security and cyber defense', '["ethical hacking", "security research", "privacy tools"]', 2100000, 'high', 'growing', '["Reddit", "Twitter/X", "LinkedIn"]'),
(4, 'Startup Tech', 'Technology entrepreneurship and startups', '["tech startups", "venture capital", "product development"]', 1900000, 'high', 'growing', '["Twitter/X", "LinkedIn", "Medium"]'),
(4, 'Data Science', 'Data analysis and machine learning', '["data visualization", "machine learning", "big data"]', 2500000, 'high', 'growing', '["LinkedIn", "Reddit", "Kaggle"]');

-- Continue adding communities for other categories to reach 60+
-- Category 5: Learning & Self-Improvement (add 6 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(5, 'Online Course Communities', 'Educational platform learners', '["Coursera groups", "edX communities", "MasterClass"]', 2900000, 'medium', 'stable', '["Facebook", "Reddit", "Discord"]'),
(5, 'Self-Help & Development', 'Personal growth methodologies', '["productivity systems", "habit tracking", "life coaching"]', 3200000, 'high', 'growing', '["Instagram", "TikTok", "YouTube"]'),
(5, 'Academic Research', 'Higher education and research', '["PhD students", "academic disciplines", "research methods"]', 1800000, 'medium', 'stable', '["Reddit", "Twitter/X", "LinkedIn"]'),
(5, 'Skill Development', 'Specific skill learning communities', '["public speaking", "negotiation", "memory techniques"]', 2400000, 'high', 'growing', '["YouTube", "Reddit", "LinkedIn"]'),
(5, 'Philosophy & Critical Thinking', 'Intellectual discussion communities', '["stoicism", "ethics discussions", "logic puzzles"]', 1600000, 'medium', 'stable', '["Reddit", "YouTube", "Twitter/X"]'),
(5, 'Startup & Entrepreneurship', 'Business building communities', '["indie hackers", "startup accelerators", "solopreneurs"]', 2100000, 'high', 'growing', '["Twitter/X", "LinkedIn", "YouTube"]');

-- Category 6: Hobbies & Specialized Interests (add 7 more) 
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(6, 'Collecting Culture', 'Item and category collectors', '["vintage electronics", "rare books", "vinyl records"]', 3400000, 'high', 'stable', '["Instagram", "Facebook", "Reddit"]'),
(6, 'Model Building', 'Scale model construction', '["model trains", "airplane models", "dioramas"]', 1900000, 'high', 'stable', '["YouTube", "Facebook", "Instagram"]'),
(6, 'Automotive Culture', 'Car enthusiasts and culture', '["classic cars", "modification", "racing"]', 4200000, 'very_high', 'growing', '["Instagram", "YouTube", "Facebook"]'),
(6, 'Aviation & Space', 'Flight and space exploration', '["pilot communities", "aircraft spotting", "amateur rocketry"]', 2300000, 'high', 'growing', '["YouTube", "Reddit", "Instagram"]'),
(6, 'Amateur Radio', 'Radio communication hobbyists', '["ham radio", "electronics repair", "radio experimentation"]', 1200000, 'medium', 'stable', '["YouTube", "Reddit", "Facebook"]'),
(6, 'Genealogy Research', 'Family history and ancestry', '["DNA testing", "historical research", "heritage preservation"]', 2800000, 'medium', 'stable', '["Facebook", "YouTube", "Reddit"]'),
(6, 'Music Production', 'Music creation and audio', '["home recording", "beat making", "sound design"]', 2900000, 'very_high', 'growing', '["YouTube", "Reddit", "Instagram"]');

-- Category 7: Lifestyle & Values-Driven (add 6 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(7, 'Alternative Lifestyles', 'Non-conventional living arrangements', '["van life", "tiny house", "off-grid living"]', 2400000, 'high', 'exploding', '["Instagram", "YouTube", "TikTok"]'),
(7, 'Ethical Consumption', 'Conscious consumer communities', '["fair trade", "ethical fashion", "cruelty-free"]', 2900000, 'high', 'growing', '["Instagram", "Pinterest", "YouTube"]'),
(7, 'Digital Privacy', 'Digital rights and privacy advocacy', '["data privacy", "open source", "surveillance resistance"]', 1600000, 'high', 'growing', '["Reddit", "Twitter/X", "YouTube"]'),
(7, 'Slow Living', 'Mindful and slower-paced lifestyles', '["slow fashion", "mindful eating", "analog hobbies"]', 3100000, 'high', 'growing', '["Instagram", "Pinterest", "YouTube"]'),
(7, 'Financial Independence', 'Financial freedom communities', '["FIRE movement", "frugal living", "early retirement"]', 2700000, 'high', 'exploding', '["Reddit", "YouTube", "TikTok"]'),
(7, 'Prepping & Self-Sufficiency', 'Emergency preparedness and self-reliance', '["emergency prep", "homesteading", "survivalism"]', 1800000, 'high', 'growing', '["YouTube", "Reddit", "Facebook"]');

-- Category 8: Niche Social & Identity Groups (add 7 more)
INSERT INTO communities (category_id, name, description, examples, size_estimate, engagement_level, growth_trend, platform_presence) VALUES
(8, 'Cultural Heritage', 'Cultural identity and preservation', '["ethnic communities", "heritage language", "cultural traditions"]', 5400000, 'high', 'stable', '["Facebook", "Instagram", "YouTube"]'),
(8, 'Chronic Illness Support', 'Health condition support communities', '["invisible illness", "accessibility activism", "adaptive living"]', 2800000, 'very_high', 'growing', '["Instagram", "TikTok", "Facebook"]'),
(8, 'Age-Specific Groups', 'Life stage and generation communities', '["Gen Z culture", "millennial nostalgia", "active seniors"]', 6200000, 'high', 'stable', '["TikTok", "Instagram", "Facebook"]'),
(8, 'Professional Identity', 'Career-based identity communities', '["women in tech", "minority professionals", "career changers"]', 3600000, 'high', 'growing', '["LinkedIn", "Instagram", "Twitter/X"]'),
(8, 'Geographic Identity', 'Location-based communities', '["city cultures", "regional pride", "expat groups"]', 4900000, 'medium', 'stable', '["Facebook", "Instagram", "TikTok"]'),
(8, 'Alternative Family', 'Non-traditional family arrangements', '["single parents", "childfree", "blended families"]', 2400000, 'high', 'growing', '["Facebook", "Instagram", "Reddit"]'),
(8, 'Religious & Spiritual', 'Faith-based and spiritual communities', '["progressive faith", "interfaith dialogue", "spiritual exploration"]', 3400000, 'high', 'stable', '["Facebook", "YouTube", "Instagram"]');