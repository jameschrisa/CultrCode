-- Restore basic communities first
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
-- Original communities from each category
(1, 'Digital Art & Illustration', 'Digital artists using specific software and techniques', 2500000, 'high', 'growing'),
(1, 'Traditional Arts', 'Traditional art forms and techniques', 1800000, 'medium', 'stable'),
(1, 'Crafting & DIY', 'Handmade crafts and do-it-yourself projects', 3200000, 'high', 'growing'),
(2, 'Specific Video Game Fandoms', 'Dedicated communities around particular games', 8500000, 'very_high', 'growing'),
(2, 'Tabletop RPGs & Board Games', 'Role-playing games and board game enthusiasts', 2100000, 'high', 'growing'),
(2, 'Esports & Competitive Gaming', 'Professional and competitive gaming communities', 3800000, 'very_high', 'growing'),
(3, 'Specific Diets & Nutrition', 'Communities focused on particular dietary approaches', 4600000, 'high', 'growing'),
(3, 'Niche Fitness Regimes', 'Specialized fitness and exercise communities', 2300000, 'high', 'growing'),
(3, 'Mental Wellness & Mindfulness', 'Mental health and mindfulness practitioners', 4200000, 'very_high', 'growing'),
(4, 'AI & Machine Learning Enthusiasts', 'Communities focused on artificial intelligence', 1800000, 'very_high', 'exploding'),
(4, 'Web3 & Decentralization', 'Blockchain and decentralized technology communities', 2400000, 'high', 'growing'),
(4, 'Coding & Programming Languages', 'Programming and software development communities', 5200000, 'very_high', 'growing'),
(5, 'Language Learning', 'Communities focused on language acquisition', 4800000, 'very_high', 'growing'),
(5, 'Professional Development', 'Career advancement and skill building', 3600000, 'high', 'growing'),
(5, 'Financial Literacy', 'Personal finance and investment education', 2700000, 'high', 'exploding'),
(6, 'Collecting Communities', 'Enthusiasts who collect specific items', 3400000, 'high', 'stable'),
(6, 'Model Building', 'Scale model construction communities', 1900000, 'high', 'stable'),
(6, 'Gardening & Plant Care', 'Plant cultivation and gardening', 5600000, 'very_high', 'growing'),
(7, 'Zero Waste & Sustainability', 'Environmental consciousness and waste reduction', 4200000, 'very_high', 'exploding'),
(7, 'Minimalism & Intentional Living', 'Simplified and purposeful living', 3800000, 'high', 'growing'),
(7, 'Spiritual & New Age', 'Alternative spirituality and wellness practices', 3600000, 'very_high', 'growing'),
(8, 'LGBTQ+ Communities', 'LGBTQ+ identity and community spaces', 4800000, 'very_high', 'growing'),
(8, 'Neurodivergent Communities', 'Neurodiversity advocacy and support', 3200000, 'very_high', 'exploding'),
(8, 'Cultural Heritage', 'Cultural identity and preservation communities', 5400000, 'high', 'stable');

-- Now add expanded communities to reach 70+ total
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES
-- More Arts & Creative (Category 1)
(1, 'Photography & Videography', 'Photography and video creation communities', 4800000, 'very_high', 'growing'),
(1, 'Creative Writing', 'Fiction, poetry, and creative writing', 2600000, 'high', 'growing'),
(1, 'Music Production & DJing', 'Music creation and DJ communities', 3100000, 'very_high', 'growing'),
(1, 'Fashion & Style Subcultures', 'Fashion and aesthetic movements', 5800000, 'very_high', 'exploding'),
(1, 'Interior Design & Home Decor', 'Home design and decoration', 4200000, 'high', 'growing'),
(1, 'Performing Arts', 'Theater, dance, and live performance', 2100000, 'medium', 'stable'),
(1, 'Street Art & Graffiti', 'Urban art and street culture', 1900000, 'high', 'growing'),
(1, 'Film & Video Production', 'Independent filmmaking and video', 2400000, 'high', 'growing'),

-- More Gaming & Entertainment (Category 2)
(2, 'Anime & Manga Fandoms', 'Japanese animation and manga communities', 6200000, 'very_high', 'growing'),
(2, 'Movie & TV Show Fandoms', 'Film and television fan communities', 7800000, 'very_high', 'stable'),
(2, 'Pop Culture & Collectibles', 'Pop culture collecting and fandom', 4600000, 'high', 'growing'),
(2, 'Live Streaming & Content Creation', 'Streaming and content creator communities', 5100000, 'very_high', 'exploding'),
(2, 'Retro Gaming', 'Classic and vintage gaming', 2700000, 'high', 'stable'),
(2, 'Mobile Gaming', 'Smartphone and tablet gaming', 8900000, 'very_high', 'exploding'),
(2, 'Game Development', 'Game creation and indie development', 1400000, 'high', 'growing'),

-- More Health & Wellness (Category 3)
(3, 'Outdoor & Adventure Sports', 'Hiking, climbing, and outdoor activities', 5200000, 'very_high', 'growing'),
(3, 'Biohacking & Longevity', 'Health optimization and life extension', 1600000, 'high', 'exploding'),
(3, 'Personal Grooming & Beauty', 'Beauty routines and personal care', 6800000, 'very_high', 'growing'),
(3, 'Alternative Medicine', 'Non-traditional healing practices', 2900000, 'medium', 'growing'),
(3, 'Recovery & Sobriety', 'Addiction recovery communities', 2200000, 'very_high', 'growing'),
(3, 'Chronic Illness Support', 'Health condition support groups', 3400000, 'very_high', 'growing'),

-- More Technology (Category 4)
(4, 'DIY Electronics & Robotics', 'Hardware hacking and robotics', 1500000, 'high', 'growing'),
(4, 'Cybersecurity & Privacy', 'Digital security and privacy', 2100000, 'high', 'growing'),
(4, 'Smart Home & Automation', 'Home automation and IoT', 2800000, 'high', 'growing'),
(4, 'Virtual & Augmented Reality', 'VR and AR communities', 1300000, 'medium', 'growing'),
(4, '3D Printing & Fabrication', 'Digital manufacturing and making', 1700000, 'high', 'growing'),
(4, 'Open Source Software', 'Open source development', 2400000, 'high', 'stable'),
(4, 'Data Science & Analytics', 'Data analysis and machine learning', 2600000, 'high', 'growing'),

-- More Learning (Category 5)
(5, 'Online Course Communities', 'MOOC and online learning', 2900000, 'medium', 'stable'),
(5, 'Self-Help & Personal Development', 'Personal growth and improvement', 3200000, 'high', 'growing'),
(5, 'Academic & Research', 'Higher education and research', 1800000, 'medium', 'stable'),
(5, 'Skill-Specific Learning', 'Targeted skill development', 2400000, 'high', 'growing'),
(5, 'Philosophy & Critical Thinking', 'Intellectual discussion', 1600000, 'medium', 'stable'),
(5, 'Entrepreneurship & Startups', 'Business building and startups', 2100000, 'high', 'growing'),

-- More Hobbies (Category 6)
(6, 'Automotive Enthusiasts', 'Car culture and modification', 4200000, 'very_high', 'growing'),
(6, 'Aviation & Space', 'Flight and space exploration', 2300000, 'high', 'growing'),
(6, 'Amateur Radio & Electronics', 'Ham radio and electronics', 1200000, 'medium', 'stable'),
(6, 'Genealogy & Family History', 'Ancestry research and family trees', 2800000, 'medium', 'stable'),
(6, 'Puzzle & Brain Games', 'Mental challenges and puzzles', 2100000, 'medium', 'stable'),
(6, 'Woodworking & Craftsmanship', 'Traditional woodworking and crafts', 2600000, 'high', 'growing'),
(6, 'Astronomy & Stargazing', 'Amateur astronomy', 1700000, 'high', 'growing'),
(6, 'Cooking & Culinary Arts', 'Cooking techniques and food culture', 7200000, 'very_high', 'growing'),

-- More Lifestyle (Category 7)
(7, 'Alternative Lifestyle Choices', 'Van life, tiny houses, off-grid', 2400000, 'high', 'exploding'),
(7, 'Ethical Consumption & Fair Trade', 'Conscious consumerism', 2900000, 'high', 'growing'),
(7, 'Digital Privacy & Rights', 'Privacy advocacy and digital rights', 1600000, 'high', 'growing'),
(7, 'Slow Living & Mindful Consumption', 'Intentional and mindful living', 3100000, 'high', 'growing'),
(7, 'Community Building & Mutual Aid', 'Local organizing and support', 2200000, 'medium', 'growing'),
(7, 'Frugal Living & Financial Independence', 'FIRE movement and frugal living', 2700000, 'high', 'exploding'),
(7, 'Prepping & Self-Sufficiency', 'Emergency preparedness', 1800000, 'high', 'growing'),

-- More Identity Groups (Category 8) 
(8, 'Chronic Illness & Disability Support', 'Health advocacy and support', 2800000, 'very_high', 'growing'),
(8, 'Age-Specific Communities', 'Generation-based communities', 6200000, 'high', 'stable'),
(8, 'Professional Identity Groups', 'Career-based identity', 3600000, 'high', 'growing'),
(8, 'Geographic & Regional Identity', 'Location-based communities', 4900000, 'medium', 'stable'),
(8, 'Alternative Family Structures', 'Non-traditional families', 2400000, 'high', 'growing'),
(8, 'Hobby-Based Social Groups', 'Recreation-based social communities', 7800000, 'very_high', 'growing'),
(8, 'Religious & Spiritual Groups', 'Faith-based communities', 3400000, 'high', 'stable'),
(8, 'Expat & Immigrant Communities', 'International and diaspora groups', 4100000, 'high', 'stable');