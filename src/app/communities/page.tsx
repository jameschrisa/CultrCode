'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Search, Filter, Eye, TrendingUp, Activity, Star, Pin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'

interface Community {
  id: number
  category_id: number
  name: string
  description: string
  size_estimate: number
  engagement_level: string
  growth_trend: string
  category_name?: string
}

interface Category {
  id: number
  name: string
  description: string
}

function CommunitiesContent() {
  const { user } = useUser(); const canAccessPremium = () => { if (!user) return false; const publicMetadata = user.publicMetadata as any; const subscriptionTier = publicMetadata?.subscriptionTier || 'free'; return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'; }
  const [communities, setCommunities] = useState<Community[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all')
  const [selectedEngagement, setSelectedEngagement] = useState<string>('all')
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)
  const [pinnedCommunities, setPinnedCommunities] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // For now, use mock data since database connection seems to have issues
      // In production, this would fetch from /api/communities and /api/categories
      const mockCategories = [
        { id: 1, name: 'Arts & Creative Expression', description: 'Communities focused on artistic creation, design, and creative pursuits' },
        { id: 2, name: 'Gaming & Entertainment', description: 'Communities around gaming, anime, movies, streaming, and pop culture' },
        { id: 3, name: 'Health, Wellness & Fitness', description: 'Communities focused on physical health, mental wellness, and fitness activities' },
        { id: 4, name: 'Technology & Innovation', description: 'Communities around emerging tech, programming, AI, and digital innovation' },
        { id: 5, name: 'Learning & Self-Improvement', description: 'Communities focused on education, skill development, and personal growth' },
        { id: 6, name: 'Hobbies & Specialized Interests', description: 'Communities around specific hobbies, collecting, and specialized interests' },
        { id: 7, name: 'Lifestyle & Values-Driven', description: 'Communities focused on lifestyle choices, values, and purposeful living' },
        { id: 8, name: 'Niche Social & Identity Groups', description: 'Communities based on identity, culture, and social connections' }
      ]

      const mockCommunities = [
        // Category 1: Arts & Creative Expression
        { id: 1, category_id: 1, name: 'Pixel Pushers United', description: 'Digital artists using specific software and techniques', size_estimate: 2500000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 2, category_id: 1, name: 'Brushstrokes & Beyond', description: 'Traditional art forms and techniques', size_estimate: 1800000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 3, category_id: 1, name: 'Makers Gonna Make', description: 'Handmade crafts and do-it-yourself projects', size_estimate: 3200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 4, category_id: 1, name: 'Frame by Frame Society', description: 'Photography and video creation communities', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 5, category_id: 1, name: 'Ink & Inspiration', description: 'Fiction, poetry, and creative writing', size_estimate: 2600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 6, category_id: 1, name: 'Beats & Bass Collective', description: 'Music creation and DJ communities', size_estimate: 3100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 7, category_id: 1, name: 'Fit Check Central', description: 'Fashion and aesthetic movements', size_estimate: 5800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 8, category_id: 1, name: 'Home Sweet Aesthetic', description: 'Home design and decoration', size_estimate: 4200000, engagement_level: 'high', growth_trend: 'growing' },

        // Category 2: Gaming & Entertainment
        { id: 9, category_id: 2, name: 'The Spawn Point', description: 'Dedicated communities around particular games', size_estimate: 8500000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 10, category_id: 2, name: 'Critical Hit Crew', description: 'Role-playing games and board game enthusiasts', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 11, category_id: 2, name: 'GG No Re', description: 'Professional and competitive gaming communities', size_estimate: 3800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 12, category_id: 2, name: 'Weeb Nation', description: 'Japanese animation and manga communities', size_estimate: 6200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 13, category_id: 2, name: 'Binge Watchers Anonymous', description: 'Film and television fan communities', size_estimate: 7800000, engagement_level: 'very_high', growth_trend: 'stable' },
        { id: 14, category_id: 2, name: 'Pixel Nostalgia Club', description: 'Classic and vintage gaming', size_estimate: 2700000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 15, category_id: 2, name: 'Pocket Gamers Unite', description: 'Smartphone and tablet gaming', size_estimate: 8900000, engagement_level: 'very_high', growth_trend: 'exploding' },

        // Category 3: Health, Wellness & Fitness  
        { id: 16, category_id: 3, name: 'Clean Eating Crusaders', description: 'Communities focused on particular dietary approaches', size_estimate: 4600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 17, category_id: 3, name: 'Sweat & Soul Tribe', description: 'Specialized fitness and exercise communities', size_estimate: 2300000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 18, category_id: 3, name: 'Mindful Movement', description: 'Mental health and mindfulness practitioners', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 19, category_id: 3, name: 'Wild & Free Collective', description: 'Hiking, climbing, and outdoor activities', size_estimate: 5200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 20, category_id: 3, name: 'Human Optimization HQ', description: 'Health optimization and life extension', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 21, category_id: 3, name: 'Holistic Healers Hub', description: 'Non-traditional healing practices', size_estimate: 2900000, engagement_level: 'medium', growth_trend: 'growing' },

        // Category 4: Technology & Innovation
        { id: 22, category_id: 4, name: 'AI Overlords & Understudies', description: 'Communities focused on artificial intelligence', size_estimate: 1800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 23, category_id: 4, name: 'Decentralized Dreams', description: 'Blockchain and decentralized technology communities', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 24, category_id: 4, name: 'Code Warriors Alliance', description: 'Programming and software development communities', size_estimate: 5200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 25, category_id: 4, name: 'Digital Fortress Squad', description: 'Digital security and privacy', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 26, category_id: 4, name: 'Circuit Breakers Club', description: 'Hardware modification and creation', size_estimate: 1900000, engagement_level: 'high', growth_trend: 'growing' },

        // Category 5: Learning & Self-Improvement
        { id: 27, category_id: 5, name: 'Polyglot Paradise', description: 'Communities focused on language acquisition', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 28, category_id: 5, name: 'Level Up Lounge', description: 'Career advancement and skill building', size_estimate: 3600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 29, category_id: 5, name: 'Money Moves Collective', description: 'Personal finance and investment education', size_estimate: 2700000, engagement_level: 'high', growth_trend: 'exploding' },

        // Category 6: Hobbies & Specialized Interests
        { id: 30, category_id: 6, name: 'Treasure Hunters Guild', description: 'Enthusiasts who collect specific items', size_estimate: 3400000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 31, category_id: 6, name: 'Plant Parent Support Group', description: 'Plant cultivation and gardening', size_estimate: 5600000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 32, category_id: 6, name: 'Gearheads & Grease Monkeys', description: 'Car enthusiasts and culture', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'growing' },

        // Category 7: Lifestyle & Values-Driven
        { id: 33, category_id: 7, name: 'Zero Waste Warriors', description: 'Environmental consciousness and waste reduction', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 34, category_id: 7, name: 'Less is More Society', description: 'Simplified and purposeful living', size_estimate: 3800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 35, category_id: 7, name: 'Off-Grid Odyssey', description: 'Van life, tiny houses, off-grid', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'exploding' },

        // Category 8: Niche Social & Identity Groups
        { id: 36, category_id: 8, name: 'Rainbow Coalition Central', description: 'LGBTQ+ identity and community spaces', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 37, category_id: 8, name: 'Neurodivergent Nexus', description: 'Neurodiversity advocacy and support', size_estimate: 3200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 38, category_id: 8, name: 'Roots & Rituals Circle', description: 'Cultural identity and preservation communities', size_estimate: 5400000, engagement_level: 'high', growth_trend: 'stable' },

        // EXPANDED COMMUNITIES - Category 1: Arts & Creative Expression (Additional)
        { id: 39, category_id: 1, name: 'Sketch Society', description: 'Drawing and illustration enthusiasts sharing daily sketches', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 40, category_id: 1, name: 'The Pottery Wheel', description: 'Ceramics and pottery community', size_estimate: 800000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 41, category_id: 1, name: 'Fiber Arts Fellowship', description: 'Knitting, crocheting, and textile arts', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 42, category_id: 1, name: 'Vinyl Vibes Collective', description: 'Record collectors and music enthusiasts', size_estimate: 1500000, engagement_level: 'very_high', growth_trend: 'stable' },
        { id: 43, category_id: 1, name: 'Streetwear Syndicate', description: 'Urban fashion and street style community', size_estimate: 3200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 44, category_id: 1, name: 'Calligraphy Crusaders', description: 'Hand lettering and calligraphy artists', size_estimate: 900000, engagement_level: 'medium', growth_trend: 'growing' },
        { id: 45, category_id: 1, name: 'Zine Scene', description: 'Independent magazine and zine creators', size_estimate: 650000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 46, category_id: 1, name: 'Cosplay Kingdom', description: 'Costume design and character cosplay', size_estimate: 2800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 47, category_id: 1, name: 'Dark Room Developers', description: 'Film photography and darkroom techniques', size_estimate: 750000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 48, category_id: 1, name: 'Vintage Vibes Hub', description: 'Vintage and retro aesthetic enthusiasts', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 49, category_id: 1, name: 'Graffiti Underground', description: 'Street art and urban murals community', size_estimate: 1100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 50, category_id: 1, name: 'Bookbinding Brotherhood', description: 'Traditional and modern bookbinding crafts', size_estimate: 420000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 51, category_id: 1, name: 'Neon Dreams Collective', description: 'Cyberpunk and futuristic aesthetic lovers', size_estimate: 1300000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 52, category_id: 1, name: 'Cottagecore Cabin', description: 'Rural, pastoral lifestyle and aesthetics', size_estimate: 2400000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 53, category_id: 1, name: 'Pop Art Paradise', description: 'Modern pop art and contemporary design', size_estimate: 980000, engagement_level: 'medium', growth_trend: 'stable' },

        // EXPANDED COMMUNITIES - Category 2: Gaming & Entertainment (Additional)
        { id: 54, category_id: 2, name: 'Indie Game Underground', description: 'Independent game developers and players', size_estimate: 1800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 55, category_id: 2, name: 'Fighting Game Dojo', description: 'Competitive fighting game community', size_estimate: 1200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 56, category_id: 2, name: 'Speedrun Central', description: 'Game speedrunning and world records', size_estimate: 850000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 57, category_id: 2, name: 'VR Pioneers', description: 'Virtual reality gaming and experiences', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 58, category_id: 2, name: 'K-Pop Stans United', description: 'Korean pop music fan community', size_estimate: 8200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 59, category_id: 2, name: 'Horror Hounds', description: 'Horror movie and content enthusiasts', size_estimate: 2100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 60, category_id: 2, name: 'Cozy Mystery Club', description: 'Mystery and detective story fans', size_estimate: 1400000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 61, category_id: 2, name: 'Meme Lords Council', description: 'Internet meme culture and creators', size_estimate: 5600000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 62, category_id: 2, name: 'Podcast Addicts Anonymous', description: 'Podcast listeners and creators', size_estimate: 4200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 63, category_id: 2, name: 'Trivia Night Champions', description: 'Quiz and trivia game enthusiasts', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 64, category_id: 2, name: 'Comic Book Vault', description: 'Comic book collectors and readers', size_estimate: 2300000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 65, category_id: 2, name: 'Trading Card Masters', description: 'Collectible card game players', size_estimate: 1900000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 66, category_id: 2, name: 'True Crime Obsessed', description: 'True crime documentary and podcast fans', size_estimate: 6800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 67, category_id: 2, name: 'Simulation Station', description: 'Life and simulation game players', size_estimate: 3100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 68, category_id: 2, name: 'Retro Arcade Alliance', description: 'Classic arcade game enthusiasts', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'stable' },

        // EXPANDED COMMUNITIES - Category 3: Health, Wellness & Fitness (Additional)
        { id: 69, category_id: 3, name: 'Yoga Flow Family', description: 'Yoga practitioners and instructors', size_estimate: 3800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 70, category_id: 3, name: 'Keto Krew', description: 'Ketogenic diet community', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 71, category_id: 3, name: 'Marathon Maniacs', description: 'Long-distance running enthusiasts', size_estimate: 1600000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 72, category_id: 3, name: 'Cold Plunge Club', description: 'Cold water therapy and ice bath community', size_estimate: 800000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 73, category_id: 3, name: 'Plant-Based Power', description: 'Vegan and plant-based lifestyle', size_estimate: 4100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 74, category_id: 3, name: 'Sleep Optimization Society', description: 'Sleep tracking and improvement community', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 75, category_id: 3, name: 'Breath Work Warriors', description: 'Breathing techniques and practices', size_estimate: 900000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 76, category_id: 3, name: 'Intermittent Fasting Club', description: 'Fasting protocols and community support', size_estimate: 2800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 77, category_id: 3, name: 'Rock Climbing Collective', description: 'Indoor and outdoor climbing community', size_estimate: 1500000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 78, category_id: 3, name: 'Mental Health Advocates', description: 'Mental health awareness and support', size_estimate: 5200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 79, category_id: 3, name: 'Meditation Mastery', description: 'Meditation techniques and mindfulness', size_estimate: 3600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 80, category_id: 3, name: 'Functional Fitness Force', description: 'Functional movement and CrossFit', size_estimate: 2100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 81, category_id: 3, name: 'Supplement Scholars', description: 'Nutrition and supplement research', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 82, category_id: 3, name: 'Dance Fitness Divas', description: 'Dance-based fitness and movement', size_estimate: 2200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 83, category_id: 3, name: 'Wilderness Therapy Tribe', description: 'Nature-based healing and outdoor therapy', size_estimate: 650000, engagement_level: 'high', growth_trend: 'growing' },

        // EXPANDED COMMUNITIES - Category 4: Technology & Innovation (Additional)
        { id: 84, category_id: 4, name: 'No-Code Nation', description: 'No-code and low-code development tools', size_estimate: 1400000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 85, category_id: 4, name: 'Data Science Collective', description: 'Data analysis and machine learning practitioners', size_estimate: 2100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 86, category_id: 4, name: 'DevOps Dynasty', description: 'Development operations and cloud infrastructure', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 87, category_id: 4, name: 'AR Reality Builders', description: 'Augmented reality developers and creators', size_estimate: 900000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 88, category_id: 4, name: 'IoT Innovators', description: 'Internet of Things and smart device creators', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 89, category_id: 4, name: 'Quantum Computing Club', description: 'Quantum computing research and development', size_estimate: 400000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 90, category_id: 4, name: 'Open Source Heroes', description: 'Open source software contributors', size_estimate: 3200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 91, category_id: 4, name: '3D Printing Pioneers', description: '3D printing and digital fabrication', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 92, category_id: 4, name: 'Tech Ethics Council', description: 'Technology ethics and responsible innovation', size_estimate: 800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 93, category_id: 4, name: 'Robotics Revolution', description: 'Robotics engineering and automation', size_estimate: 1100000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 94, category_id: 4, name: 'API Architects', description: 'API design and integration specialists', size_estimate: 1500000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 95, category_id: 4, name: 'Green Tech Guild', description: 'Sustainable technology and clean energy', size_estimate: 1300000, engagement_level: 'high', growth_trend: 'exploding' },

        // EXPANDED COMMUNITIES - Category 5: Learning & Self-Improvement (Additional)
        { id: 96, category_id: 5, name: 'Speed Reading Society', description: 'Rapid reading and comprehension techniques', size_estimate: 800000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 97, category_id: 5, name: 'Memory Palace Masters', description: 'Memory techniques and mnemonics', size_estimate: 600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 98, category_id: 5, name: 'Productivity Powerhouse', description: 'Time management and productivity systems', size_estimate: 2800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 99, category_id: 5, name: 'Public Speaking Pros', description: 'Presentation and communication skills', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 100, category_id: 5, name: 'Skill Stacking Squad', description: 'Multiple skill development and career pivots', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 101, category_id: 5, name: 'Critical Thinking Circle', description: 'Logic, reasoning, and analytical skills', size_estimate: 900000, engagement_level: 'medium', growth_trend: 'growing' },
        { id: 102, category_id: 5, name: 'Habit Hackers Hub', description: 'Behavior change and habit formation', size_estimate: 2200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 103, category_id: 5, name: 'Leadership Lab', description: 'Leadership development and management skills', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 104, category_id: 5, name: 'Online Learning Legends', description: 'Digital education and course creators', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 105, category_id: 5, name: 'Career Pivot Point', description: 'Career transitions and industry switching', size_estimate: 1900000, engagement_level: 'high', growth_trend: 'growing' },

        // EXPANDED COMMUNITIES - Category 6: Hobbies & Specialized Interests (Additional)
        { id: 106, category_id: 6, name: 'Urban Beekeepers', description: 'City beekeeping and honey production', size_estimate: 400000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 107, category_id: 6, name: 'Sneakerhead Central', description: 'Athletic shoe collecting and culture', size_estimate: 3800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 108, category_id: 6, name: 'Vinyl Record Hunters', description: 'Record collecting and music discovery', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 109, category_id: 6, name: 'Model Train Masters', description: 'Model railroading and miniature worlds', size_estimate: 600000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 110, category_id: 6, name: 'Watch Enthusiasts', description: 'Timepiece collecting and horology', size_estimate: 1400000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 111, category_id: 6, name: 'Bird Watching Society', description: 'Ornithology and bird spotting community', size_estimate: 1800000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 112, category_id: 6, name: 'Home Brewing Brigade', description: 'Beer and wine making enthusiasts', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 113, category_id: 6, name: 'Astronomy Addicts', description: 'Stargazing and space observation', size_estimate: 2200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 114, category_id: 6, name: 'Chess Champions Circle', description: 'Chess strategy and competitive play', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 115, category_id: 6, name: 'Antique Treasure Hunters', description: 'Vintage item collecting and restoration', size_estimate: 1300000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 116, category_id: 6, name: 'Drone Pilots United', description: 'Drone flying and aerial photography', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 117, category_id: 6, name: 'Fountain Pen Fellowship', description: 'Fine writing instruments and calligraphy', size_estimate: 500000, engagement_level: 'high', growth_trend: 'stable' },

        // EXPANDED COMMUNITIES - Category 7: Lifestyle & Values-Driven (Additional)
        { id: 118, category_id: 7, name: 'Digital Detox Club', description: 'Reducing screen time and tech mindfulness', size_estimate: 1800000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 119, category_id: 7, name: 'Slow Living Society', description: 'Mindful living and life simplification', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 120, category_id: 7, name: 'Ethical Fashion Force', description: 'Sustainable and fair trade clothing', size_estimate: 1900000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 121, category_id: 7, name: 'Conscious Parenting Circle', description: 'Mindful and intentional parenting', size_estimate: 3200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 122, category_id: 7, name: 'Urban Homesteading Hub', description: 'Self-sufficient city living', size_estimate: 1100000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 123, category_id: 7, name: 'Circular Economy Champions', description: 'Waste reduction and reuse culture', size_estimate: 800000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 124, category_id: 7, name: 'Minimalist Moms & Dads', description: 'Simplified family living', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 125, category_id: 7, name: 'Regenerative Living Lab', description: 'Healing the planet through lifestyle choices', size_estimate: 600000, engagement_level: 'high', growth_trend: 'exploding' },

        // EXPANDED COMMUNITIES - Category 8: Niche Social & Identity Groups (Additional)
        { id: 126, category_id: 8, name: 'Digital Nomad Network', description: 'Location-independent workers and travelers', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 127, category_id: 8, name: 'Third Culture Kids', description: 'People raised in cultures different from their parents', size_estimate: 800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 128, category_id: 8, name: 'Solo Travelers Society', description: 'Independent travel enthusiasts', size_estimate: 2800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 129, category_id: 8, name: 'Highly Sensitive People', description: 'HSP community and support network', size_estimate: 1400000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 130, category_id: 8, name: 'Expat Exchange', description: 'Expatriates living abroad', size_estimate: 3600000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 131, category_id: 8, name: 'Military Family Network', description: 'Military families and veterans', size_estimate: 2200000, engagement_level: 'very_high', growth_trend: 'stable' },
        { id: 132, category_id: 8, name: 'Single Parent Support', description: 'Solo parenting community', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 133, category_id: 8, name: 'Adoptee Alliance', description: 'Adopted individuals and families', size_estimate: 1200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 134, category_id: 8, name: 'Empty Nesters Network', description: 'Parents after children leave home', size_estimate: 2600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 135, category_id: 8, name: 'Introvert Inner Circle', description: 'Introverted personality community', size_estimate: 3800000, engagement_level: 'high', growth_trend: 'growing' }
      ]

      // Add category names to communities
      const communitiesWithCategories = mockCommunities.map(community => {
        const category = mockCategories.find(cat => cat.id === community.category_id)
        return {
          ...community,
          category_name: category?.name || 'Unknown'
        }
      })

      setCategories(mockCategories)
      setCommunities(communitiesWithCategories)
    } catch (error) {
      console.error('Error loading communities:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || community.category_id === selectedCategory
    const matchesEngagement = selectedEngagement === 'all' || community.engagement_level === selectedEngagement
    return matchesSearch && matchesCategory && matchesEngagement
  })

  const getEngagementColor = (level: string) => {
    switch(level) {
      case 'very_high': return 'text-green-400'
      case 'high': return 'text-blue-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-orange-400'
      default: return 'text-gray-400'
    }
  }

  const getGrowthIcon = (trend: string) => {
    switch(trend) {
      case 'exploding': return '🚀'
      case 'growing': return '📈'
      case 'stable': return '📊'
      case 'declining': return '📉'
      default: return '📊'
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }

  const handlePin = (communityName: string) => {
    setPinnedCommunities(prev => {
      const newSet = new Set(prev)
      if (newSet.has(communityName)) {
        newSet.delete(communityName)
      } else {
        newSet.add(communityName)
      }
      return newSet
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-primary-300">Loading communities...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-400" />
              </div>
              <h1 className="text-4xl font-bold text-primary-50">
                Micro-Communities
              </h1>
            </div>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Discover and connect with {communities.length}+ niche communities across 8 major categories. 
              Find your audience where they naturally gather.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-brand-400 mb-1">{communities.length}</div>
                <div className="text-xs text-primary-400">Total Communities</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {communities.filter(c => c.engagement_level === 'very_high').length}
                </div>
                <div className="text-xs text-primary-400">Very High Engagement</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">
                  {communities.filter(c => c.growth_trend === 'exploding').length}
                </div>
                <div className="text-xs text-primary-400">Exploding Growth</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">8</div>
                <div className="text-xs text-primary-400">Categories</div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
              <input
                type="text"
                placeholder="Search communities by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                className="px-3 py-2 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedEngagement}
                onChange={(e) => setSelectedEngagement(e.target.value)}
                className="px-3 py-2 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              >
                <option value="all">All Engagement Levels</option>
                <option value="very_high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: community.id * 0.05 }}
            >
              <Card className="glass-card hover:border-brand-500/50 transition-all duration-200 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium text-brand-400 bg-brand-500/20 px-2 py-1 rounded">
                          {community.category_name}
                        </span>
                        <span className="text-lg">{getGrowthIcon(community.growth_trend)}</span>
                      </div>
                      <CardTitle className="text-lg text-primary-50 leading-tight">
                        {community.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-primary-300 leading-relaxed">
                      {community.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary-400">Community Size:</span>
                        <span className="text-brand-400 font-medium">
                          {formatNumber(community.size_estimate)} members
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary-400">Engagement:</span>
                        <span className={`font-medium capitalize ${getEngagementColor(community.engagement_level)}`}>
                          {community.engagement_level.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary-400">Growth Trend:</span>
                        <span className="text-primary-200 capitalize flex items-center space-x-1">
                          <span>{community.growth_trend}</span>
                          <span>{getGrowthIcon(community.growth_trend)}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 text-xs"
                        onClick={() => setSelectedCommunity(community)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                      {canAccessPremium() && (
                        <Button 
                          variant={pinnedCommunities.has(community.name) ? "primary" : "outline"} 
                          size="sm" 
                          className="text-xs"
                          onClick={() => handlePin(community.name)}
                        >
                          <Pin className={`w-3 h-3 ${pinnedCommunities.has(community.name) ? 'fill-current' : ''}`} />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-primary-300 mb-2">No communities found</h3>
            <p className="text-primary-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Community Details Modal */}
      {selectedCommunity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-xl border border-primary-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-medium text-brand-400 bg-brand-500/20 px-2 py-1 rounded">
                      {selectedCommunity.category_name}
                    </span>
                    <span className="text-lg">{getGrowthIcon(selectedCommunity.growth_trend)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary-50">{selectedCommunity.name}</h2>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCommunity(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-2">Description</h3>
                  <p className="text-primary-300 leading-relaxed">{selectedCommunity.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Community Metrics</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-primary-400">Total Members:</span>
                        <span className="text-brand-400 font-medium">
                          {formatNumber(selectedCommunity.size_estimate)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Engagement Level:</span>
                        <span className={`font-medium capitalize ${getEngagementColor(selectedCommunity.engagement_level)}`}>
                          {selectedCommunity.engagement_level.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Growth Trend:</span>
                        <span className="text-primary-200 capitalize flex items-center space-x-1">
                          <span>{selectedCommunity.growth_trend}</span>
                          <span>{getGrowthIcon(selectedCommunity.growth_trend)}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Category Info</h3>
                    <div className="bg-brand-500/10 border border-brand-500/30 rounded-lg p-4">
                      <div className="text-brand-300 font-medium mb-2">{selectedCommunity.category_name}</div>
                      <div className="text-sm text-primary-400">
                        {categories.find(c => c.id === selectedCommunity.category_id)?.description}
                      </div>
                    </div>
                  </div>
                </div>

                {canAccessPremium() && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-2">Launch Strategy Insights</h3>
                    <div className="bg-accent-500/10 border border-accent-500/30 rounded-lg p-4">
                      <p className="text-accent-300 text-sm leading-relaxed">
                        This community shows {selectedCommunity.engagement_level.replace('_', ' ')} engagement levels with {selectedCommunity.growth_trend} growth trends. 
                        Consider targeting this audience with content that aligns with their {selectedCommunity.category_name?.toLowerCase() || 'community'} interests.
                        {selectedCommunity.growth_trend === 'exploding' && ' This community is experiencing rapid growth - perfect timing for early entry.'}
                        {selectedCommunity.engagement_level === 'very_high' && ' High engagement indicates active community participation and word-of-mouth potential.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function CommunitiesPage() {
  return (
    <ProtectedRoute>
      <CommunitiesContent />
    </ProtectedRoute>
  )
}