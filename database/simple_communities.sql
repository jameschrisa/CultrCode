PRAGMA foreign_keys=OFF;

-- Add communities one by one to ensure they work
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES (1, 'Digital Art & Illustration', 'Digital artists using specific software and techniques', 2500000, 'high', 'growing');
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES (1, 'Traditional Arts', 'Traditional art forms and techniques', 1800000, 'medium', 'stable');
INSERT INTO communities (category_id, name, description, size_estimate, engagement_level, growth_trend) VALUES (1, 'Crafting & DIY', 'Handmade crafts and do-it-yourself projects', 3200000, 'high', 'growing');