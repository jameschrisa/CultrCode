-- Sample notifications for testing
INSERT INTO notifications (title, message, type, target_audience, priority, created_by, metadata) VALUES 
('New Emerging Trend Detected', '"Sustainable Tech" gaining momentum in micro-communities across Reddit and Discord', 'trend', 'all', 'high', 'admin', '{"trend_name": "Sustainable Tech", "platforms": ["Reddit", "Discord"], "growth_rate": "34%"}'),

('New Micro-Community Discovered', 'EcoTech Entrepreneurs (2.3k members) matches your Creative Professionals segment', 'community', 'community_explorer', 'medium', 'admin', '{"community_name": "EcoTech Entrepreneurs", "member_count": 2300, "match_score": 87}'),

('Segment Update Available', 'Creative Professionals segment expanded with new behavioral data and preferences', 'segment', 'cultural_analyst', 'medium', 'admin', '{"segment_name": "Creative Professionals", "new_data_points": 156}'),

('System Enhancement', 'AI persona generation now includes cultural insights and community preferences', 'system', 'all', 'low', 'admin', '{"feature": "AI Persona Generation", "improvement": "Cultural Insights"}'),

('Weekly Trend Report Ready', 'Your personalized cultural intelligence report for this week is now available', 'system', 'cultural_analyst', 'medium', 'admin', '{"report_type": "Weekly Trend Report", "insights_count": 23}'),

('New Community Match', 'Digital Nomad Developers (890 members) shows 92% affinity with your target audience', 'community', 'enterprise', 'high', 'admin', '{"community_name": "Digital Nomad Developers", "member_count": 890, "affinity_score": 92});