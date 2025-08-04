'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, TrendingUp, Users, Sparkles, Star, Eye, Bookmark } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { useAuth, useUser } from '@clerk/nextjs'

interface MicroCommunity {
  id: string
  name: string
  growth: string
  members: string
  description: string
  tags: string[]
  category: string
  status: 'Emerging' | 'Rising' | 'Trending' | 'Established'
  icon: string
  engagement: number
  avgAge: string
  topLocations: string[]
  keyInterests: string[]
  isPremium: boolean
}

export default function ExplorePage() {
  const { user } = useUser(); const canAccessPremium = () => { if (!user) return false; const publicMetadata = user.publicMetadata as any; const subscriptionTier = publicMetadata?.subscriptionTier || 'free'; return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'; }
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')

  const categories = ['All', 'Aesthetics', 'Lifestyle', 'Technology', 'Wellness', 'Environment', 'Arts & Culture', 'Fashion', 'Food & Drink']
  const statuses = ['All', 'Emerging', 'Rising', 'Trending', 'Established']

  const microCommunities: MicroCommunity[] = [
    {
      id: '1',
      name: 'Solarpunk Creators',
      growth: '+340%',
      members: '45K',
      description: 'Eco-futuristic aesthetic movement blending sustainability with optimistic sci-fi visuals',
      tags: ['Sustainability', 'Futurism', 'Art'],
      category: 'Environment',
      status: 'Emerging',
      icon: '🌱',
      engagement: 94,
      avgAge: '18-34',
      topLocations: ['Portland', 'Berlin', 'Melbourne'],
      keyInterests: ['Climate Tech', 'Renewable Energy', 'Green Architecture'],
      isPremium: false
    },
    {
      id: '2',
      name: 'Goblincore Enthusiasts',
      growth: '+425%',
      members: '67K',
      description: 'Aesthetic celebrating nature\'s chaotic beauty, collecting shiny objects, and earthy vibes',
      tags: ['Aesthetic', 'Nature', 'Collecting'],
      category: 'Aesthetics',
      status: 'Rising',
      icon: '🍄',
      engagement: 87,
      avgAge: '16-28',
      topLocations: ['Pacific Northwest', 'Scandinavia', 'New Zealand'],
      keyInterests: ['Mushroom Foraging', 'Crystal Collecting', 'Cottage Living'],
      isPremium: false
    },
    {
      id: '3',
      name: 'AI Wellness Coaches',
      growth: '+310%',
      members: '43K',
      description: 'Tech-savvy wellness practitioners using AI to personalize mental health and fitness',
      tags: ['Wellness', 'AI', 'Health'],
      category: 'Technology',
      status: 'Trending',
      icon: '🤖',
      engagement: 91,
      avgAge: '25-40',
      topLocations: ['San Francisco', 'London', 'Singapore'],
      keyInterests: ['Biohacking', 'Meditation Apps', 'Fitness Tech'],
      isPremium: true
    },
    {
      id: '4',
      name: 'Micro-Luxury Living',
      growth: '+225%',
      members: '38K',
      description: 'Curating premium experiences in small spaces and minimalist lifestyles',
      tags: ['Minimalism', 'Luxury', 'Lifestyle'],
      category: 'Lifestyle',
      status: 'Trending',
      icon: '✨',
      engagement: 89,
      avgAge: '28-45',
      topLocations: ['Tokyo', 'NYC', 'Copenhagen'],
      keyInterests: ['Tiny Homes', 'Quality Goods', 'Experiential Luxury'],
      isPremium: true
    },
    {
      id: '5',
      name: 'Climate Optimists',
      growth: '+285%',
      members: '52K',
      description: 'Solution-focused environmental advocates promoting positive climate action',
      tags: ['Environment', 'Innovation', 'Optimism'],
      category: 'Environment',
      status: 'Rising',
      icon: '🌍',
      engagement: 92,
      avgAge: '20-35',
      topLocations: ['Boulder', 'Amsterdam', 'Vancouver'],
      keyInterests: ['Clean Tech', 'Sustainability', 'Climate Solutions'],
      isPremium: false
    },
    {
      id: '6',
      name: 'Neuroaesthetics',
      growth: '+280%',
      members: '32K',
      description: 'Brain-stimulating visual content designed for focus, productivity, and mental wellness',
      tags: ['Wellness', 'Productivity', 'Design'],
      category: 'Wellness',
      status: 'Emerging',
      icon: '🧠',
      engagement: 88,
      avgAge: '22-38',
      topLocations: ['Silicon Valley', 'Seoul', 'Stockholm'],
      keyInterests: ['Cognitive Enhancement', 'Visual Design', 'Neuroscience'],
      isPremium: true
    }
  ]

  const filteredCommunities = microCommunities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || community.category === selectedCategory
    const matchesStatus = selectedStatus === 'All' || community.status === selectedStatus
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string | undefined) => {
    if (!status) return 'bg-accent-500/20 text-accent-400 border-accent-500/30'
    
    switch (status) {
      case 'Emerging': return 'bg-accent-500/20 text-accent-400 border-accent-500/30'
      case 'Rising': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'Trending': return 'bg-success-500/20 text-success-400 border-success-500/30'
      case 'Established': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-primary-500/20 text-primary-400 border-primary-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20 mb-6">
            <HiSparkles className="w-5 h-5 mr-2" />
            100+ Micro-Communities & Growing
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight mb-6">
            Explore Emerging
            <span className="gradient-text block">Micro-Communities</span>
          </h1>
          
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Discover cultural movements, subcultural trends, and niche communities shaping consumer behavior before they go mainstream.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
                  <input
                    type="text"
                    placeholder="Search communities, tags, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 placeholder:text-primary-400 focus:outline-none focus:border-accent-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="custom-select px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:outline-none focus:border-accent-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="custom-select px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:outline-none focus:border-accent-500"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-50">
              {filteredCommunities.length} Communities Found
            </h2>
            <div className="flex items-center space-x-4 text-sm text-primary-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                <span>Free Access</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                <span>Premium Only</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-0 hover:border-accent-500/30 transition-all group h-full relative">
                  {community.isPremium && !canAccessPremium() && (
                    <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-primary-200 mb-3">Premium Content</p>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 mr-2" />
                          Upgrade to View
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-2xl">{community.icon}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-success-400">{community.growth}</div>
                        <div className="text-xs text-primary-400">{community.members} members</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(community.status)}`}>
                        {community.status}
                      </div>
                      {community.isPremium && (
                        <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 ml-2">
                          Premium
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-primary-50 text-lg mb-3 group-hover:text-white transition-colors">
                      {community.name}
                    </h3>
                    
                    <p className="text-sm text-primary-300 leading-relaxed mb-4 group-hover:text-primary-200 transition-colors">
                      {community.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(canAccessPremium() || !community.isPremium) && (
                      <div className="space-y-3">
                        <div className="text-xs text-primary-400 space-y-1">
                          <div>Engagement: {community.engagement}%</div>
                          <div>Age Range: {community.avgAge}</div>
                          <div>Top Locations: {community.topLocations.join(', ')}</div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCommunities.length === 0 && (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-50 mb-2">No communities found</h3>
              <p className="text-primary-300 mb-6">
                Try adjusting your search terms or filters to discover more micro-communities.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedStatus('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}