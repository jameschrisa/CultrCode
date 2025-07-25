'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Search, Filter, Eye, TrendingUp, Activity, Star, Pin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

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
  const { canAccessPremium } = useAuth()
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
        { id: 1, category_id: 1, name: 'Digital Art & Illustration', description: 'Digital artists using specific software and techniques', size_estimate: 2500000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 2, category_id: 1, name: 'Traditional Arts', description: 'Traditional art forms and techniques', size_estimate: 1800000, engagement_level: 'medium', growth_trend: 'stable' },
        { id: 3, category_id: 1, name: 'Crafting & DIY', description: 'Handmade crafts and do-it-yourself projects', size_estimate: 3200000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 4, category_id: 1, name: 'Photography & Videography', description: 'Photography and video creation communities', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 5, category_id: 1, name: 'Creative Writing', description: 'Fiction, poetry, and creative writing', size_estimate: 2600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 6, category_id: 1, name: 'Music Production & DJing', description: 'Music creation and DJ communities', size_estimate: 3100000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 7, category_id: 1, name: 'Fashion & Style Subcultures', description: 'Fashion and aesthetic movements', size_estimate: 5800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 8, category_id: 1, name: 'Interior Design & Home Decor', description: 'Home design and decoration', size_estimate: 4200000, engagement_level: 'high', growth_trend: 'growing' },

        // Category 2: Gaming & Entertainment
        { id: 9, category_id: 2, name: 'Specific Video Game Fandoms', description: 'Dedicated communities around particular games', size_estimate: 8500000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 10, category_id: 2, name: 'Tabletop RPGs & Board Games', description: 'Role-playing games and board game enthusiasts', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 11, category_id: 2, name: 'Esports & Competitive Gaming', description: 'Professional and competitive gaming communities', size_estimate: 3800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 12, category_id: 2, name: 'Anime & Manga Fandoms', description: 'Japanese animation and manga communities', size_estimate: 6200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 13, category_id: 2, name: 'Movie & TV Show Fandoms', description: 'Film and television fan communities', size_estimate: 7800000, engagement_level: 'very_high', growth_trend: 'stable' },
        { id: 14, category_id: 2, name: 'Retro Gaming', description: 'Classic and vintage gaming', size_estimate: 2700000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 15, category_id: 2, name: 'Mobile Gaming', description: 'Smartphone and tablet gaming', size_estimate: 8900000, engagement_level: 'very_high', growth_trend: 'exploding' },

        // Category 3: Health, Wellness & Fitness  
        { id: 16, category_id: 3, name: 'Specific Diets & Nutrition', description: 'Communities focused on particular dietary approaches', size_estimate: 4600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 17, category_id: 3, name: 'Niche Fitness Regimes', description: 'Specialized fitness and exercise communities', size_estimate: 2300000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 18, category_id: 3, name: 'Mental Wellness & Mindfulness', description: 'Mental health and mindfulness practitioners', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 19, category_id: 3, name: 'Outdoor & Adventure Sports', description: 'Hiking, climbing, and outdoor activities', size_estimate: 5200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 20, category_id: 3, name: 'Biohacking & Longevity', description: 'Health optimization and life extension', size_estimate: 1600000, engagement_level: 'high', growth_trend: 'exploding' },
        { id: 21, category_id: 3, name: 'Alternative Medicine', description: 'Non-traditional healing practices', size_estimate: 2900000, engagement_level: 'medium', growth_trend: 'growing' },

        // Category 4: Technology & Innovation
        { id: 22, category_id: 4, name: 'AI & Machine Learning Enthusiasts', description: 'Communities focused on artificial intelligence', size_estimate: 1800000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 23, category_id: 4, name: 'Web3 & Decentralization', description: 'Blockchain and decentralized technology communities', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 24, category_id: 4, name: 'Coding & Programming Languages', description: 'Programming and software development communities', size_estimate: 5200000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 25, category_id: 4, name: 'Cybersecurity & Privacy', description: 'Digital security and privacy', size_estimate: 2100000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 26, category_id: 4, name: 'Hardware Hacking', description: 'Hardware modification and creation', size_estimate: 1900000, engagement_level: 'high', growth_trend: 'growing' },

        // More communities for other categories...
        { id: 27, category_id: 5, name: 'Language Learning', description: 'Communities focused on language acquisition', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 28, category_id: 5, name: 'Professional Development', description: 'Career advancement and skill building', size_estimate: 3600000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 29, category_id: 5, name: 'Financial Literacy', description: 'Personal finance and investment education', size_estimate: 2700000, engagement_level: 'high', growth_trend: 'exploding' },

        { id: 30, category_id: 6, name: 'Collecting Communities', description: 'Enthusiasts who collect specific items', size_estimate: 3400000, engagement_level: 'high', growth_trend: 'stable' },
        { id: 31, category_id: 6, name: 'Gardening & Plant Care', description: 'Plant cultivation and gardening', size_estimate: 5600000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 32, category_id: 6, name: 'Automotive Culture', description: 'Car enthusiasts and culture', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'growing' },

        { id: 33, category_id: 7, name: 'Zero Waste & Sustainability', description: 'Environmental consciousness and waste reduction', size_estimate: 4200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 34, category_id: 7, name: 'Minimalism & Intentional Living', description: 'Simplified and purposeful living', size_estimate: 3800000, engagement_level: 'high', growth_trend: 'growing' },
        { id: 35, category_id: 7, name: 'Alternative Lifestyles', description: 'Van life, tiny houses, off-grid', size_estimate: 2400000, engagement_level: 'high', growth_trend: 'exploding' },

        { id: 36, category_id: 8, name: 'LGBTQ+ Communities', description: 'LGBTQ+ identity and community spaces', size_estimate: 4800000, engagement_level: 'very_high', growth_trend: 'growing' },
        { id: 37, category_id: 8, name: 'Neurodivergent Communities', description: 'Neurodiversity advocacy and support', size_estimate: 3200000, engagement_level: 'very_high', growth_trend: 'exploding' },
        { id: 38, category_id: 8, name: 'Cultural Heritage', description: 'Cultural identity and preservation communities', size_estimate: 5400000, engagement_level: 'high', growth_trend: 'stable' }
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
                        Consider targeting this audience with content that aligns with their {selectedCommunity.category_name.toLowerCase()} interests.
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