'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Heart, TrendingUp, Filter, Search, Play, Eye, MessageCircle, Share2, ExternalLink } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth, useUser } from '@clerk/nextjs'
import { ProfileAvatar } from '@/components/ui/ProfileAvatar'
import Link from 'next/link'

export default function InfluencersPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    if (!user) return false
    const publicMetadata = user.publicMetadata as any
    const subscriptionTier = publicMetadata?.subscriptionTier || 'free'
    return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'
  }
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Stubbed creator data representing API responses from TikTok, YouTube, Instagram
  const nanoInfluencers = [
    {
      id: 1,
      name: "Emma Chen",
      handle: "@emmacreates",
      platform: "TikTok",
      followers: 8500,
      engagement: 12.4,
      avatar: "/images/influencers/emma-chen.jpg",
      initials: "EC",
      category: "Sustainable Living",
      location: "Portland, OR",
      recentPosts: [
        { views: 45000, likes: 5600, comments: 320 },
        { views: 32000, likes: 4100, comments: 280 },
        { views: 28000, likes: 3200, comments: 190 }
      ],
      avgViews: 35000,
      tags: ["Zero Waste", "Eco Fashion", "DIY"],
      bio: "Making sustainability accessible and fun ✨ Zero waste lifestyle tips & eco-friendly DIYs",
      contentType: "Educational + Entertainment",
      audienceAge: "18-34",
      audienceGender: "78% Female",
      brandAlignment: 94
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      handle: "@mindfulmarc",
      platform: "YouTube",
      followers: 6800,
      engagement: 15.2,
      avatar: "/images/influencers/marcus-rodriguez.jpg",
      initials: "MR",
      category: "Wellness Tech",
      location: "Austin, TX",
      recentPosts: [
        { views: 12000, likes: 1800, comments: 95 },
        { views: 15000, likes: 2200, comments: 110 },
        { views: 18000, likes: 2700, comments: 140 }
      ],
      avgViews: 15000,
      tags: ["Mental Health", "Productivity", "Mindfulness"],
      bio: "Tech professional sharing mindful productivity tips and mental health awareness 🧠",
      contentType: "Educational",
      audienceAge: "25-40",
      audienceGender: "60% Male",
      brandAlignment: 88
    },
    {
      id: 3,
      name: "Zoe Kim",
      handle: "@zoeaesthetic",
      platform: "Instagram",
      followers: 9200,
      engagement: 8.7,
      avatar: "/images/influencers/sage-winters.jpg",
      initials: "SW",
      category: "Dark Academia",
      location: "Brooklyn, NY",
      recentPosts: [
        { views: 25000, likes: 2100, comments: 180 },
        { views: 30000, likes: 2600, comments: 220 },
        { views: 22000, likes: 1900, comments: 150 }
      ],
      avgViews: 25600,
      tags: ["Dark Academia", "Book Reviews", "Vintage Fashion"],
      bio: "Literature student sharing dark academia aesthetics & vintage finds 📚",
      contentType: "Lifestyle + Reviews",
      audienceAge: "16-28",
      audienceGender: "85% Female",
      brandAlignment: 91
    },
    {
      id: 4,
      name: "Jake Thompson",
      handle: "@jakethecreator",
      platform: "TikTok",
      followers: 7300,
      engagement: 14.8,
      avatar: "/images/influencers/alex-kim.jpg",
      initials: "AK",
      category: "Creative DIY",
      location: "Denver, CO",
      recentPosts: [
        { views: 55000, likes: 8200, comments: 450 },
        { views: 42000, likes: 6300, comments: 380 },
        { views: 38000, likes: 5600, comments: 290 }
      ],
      avgViews: 45000,
      tags: ["DIY", "Woodworking", "Creative Process"],
      bio: "Making things with my hands 🔨 DIY projects & creative tutorials",
      contentType: "Tutorial + Process",
      audienceAge: "20-35",
      audienceGender: "55% Male",
      brandAlignment: 85
    },
    {
      id: 5,
      name: "Sophia Martinez",
      handle: "@sophiaskincare",
      platform: "Instagram",
      followers: 5900,
      engagement: 11.3,
      avatar: "/images/influencers/maya-patel.jpg",
      initials: "MP",
      category: "Clean Beauty",
      location: "Los Angeles, CA",
      recentPosts: [
        { views: 18000, likes: 1620, comments: 95 },
        { views: 21000, likes: 1890, comments: 110 },
        { views: 16000, likes: 1440, comments: 85 }
      ],
      avgViews: 18300,
      tags: ["Clean Beauty", "Skincare", "Product Reviews"],
      bio: "Esthetician sharing honest clean beauty reviews & skincare tips ✨",
      contentType: "Educational + Reviews",
      audienceAge: "22-38",
      audienceGender: "92% Female",
      brandAlignment: 96
    },
    {
      id: 6,
      name: "Alex Rivera",
      handle: "@alexeats",
      platform: "YouTube",
      followers: 4200,
      engagement: 18.5,
      avatar: "/images/influencers/carlos-rivera.jpg",
      initials: "CR",
      category: "Plant-Based Food",
      location: "Seattle, WA",
      recentPosts: [
        { views: 8500, likes: 1530, comments: 125 },
        { views: 12000, likes: 2220, comments: 180 },
        { views: 9800, likes: 1815, comments: 145 }
      ],
      avgViews: 10100,
      tags: ["Plant-Based", "Recipe Development", "Food Education"],
      bio: "Chef creating delicious plant-based recipes for everyday cooking 🌱",
      contentType: "Tutorial + Educational",
      audienceAge: "25-45",
      audienceGender: "70% Female",
      brandAlignment: 89
    }
  ]

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: '🌐' },
    { id: 'TikTok', name: 'TikTok', icon: '🎵' },
    { id: 'YouTube', name: 'YouTube', icon: '📺' },
    { id: 'Instagram', name: 'Instagram', icon: '📸' }
  ]

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Sustainable Living', name: 'Sustainable Living' },
    { id: 'Wellness Tech', name: 'Wellness Tech' },
    { id: 'Dark Academia', name: 'Dark Academia' },
    { id: 'Creative DIY', name: 'Creative DIY' },
    { id: 'Clean Beauty', name: 'Clean Beauty' },
    { id: 'Plant-Based Food', name: 'Plant-Based Food' }
  ]

  const filteredInfluencers = nanoInfluencers.filter(influencer => {
    const matchesPlatform = selectedPlatform === 'all' || influencer.platform === selectedPlatform
    const matchesCategory = selectedCategory === 'all' || influencer.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesPlatform && matchesCategory && matchesSearch
  })

  const stats = {
    totalCreators: nanoInfluencers.length,
    avgEngagement: (nanoInfluencers.reduce((sum, inf) => sum + inf.engagement, 0) / nanoInfluencers.length).toFixed(1),
    avgFollowers: Math.round(nanoInfluencers.reduce((sum, inf) => sum + inf.followers, 0) / nanoInfluencers.length),
    avgAlignment: Math.round(nanoInfluencers.reduce((sum, inf) => sum + inf.brandAlignment, 0) / nanoInfluencers.length)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20">
              <Star className="w-5 h-5 mr-2" />
              1K-10K Followers • Authentic Creators
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Nano Influencer
              <span className="gradient-text block">Dashboard</span>
              <span className="text-primary-300 text-2xl lg:text-3xl font-medium block mt-4">
                Discover 1K-10K Authentic Creators
              </span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Connect with authentic voices in untapped micro-communities. Our nano-influencer network helps creator brands and challenger startups find genuine advocates who drive real engagement and conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {canAccessPremium() ? (
                <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30">
                  <Star className="w-5 h-5 mr-2" />
                  Explore Creators
                </Button>
              ) : (
                <Link href="/pricing">
                  <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30">
                    <Star className="w-5 h-5 mr-2" />
                    Unlock Creator Database
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="xl" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-accent-400">{stats.totalCreators}</div>
                <div className="text-sm text-primary-400">Active Creators</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-success-400">{stats.avgEngagement}%</div>
                <div className="text-sm text-primary-400">Avg Engagement</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-brand-400">{stats.avgFollowers.toLocaleString()}</div>
                <div className="text-sm text-primary-400">Avg Followers</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary-300">{stats.avgAlignment}%</div>
                <div className="text-sm text-primary-400">Brand Alignment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative z-10 py-8 bg-gradient-to-br from-primary-900/30 to-primary-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search creators, handles, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-white/10 rounded-xl text-primary-200 placeholder-primary-400 focus:outline-none focus:border-accent-500/50"
                />
              </div>

              {/* Platform Filter */}
              <div className="flex gap-2">
                {platforms.map(platform => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedPlatform === platform.id
                        ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                        : 'bg-primary-700/50 text-primary-300 border border-white/10 hover:border-accent-500/30'
                    }`}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="custom-select px-4 py-3 bg-primary-800/50 border border-white/10 rounded-xl text-primary-200 focus:outline-none focus:border-accent-500/50"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-50 mb-2">
              {filteredInfluencers.length} Creator{filteredInfluencers.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-primary-400">
              Showing nano influencers with 1K-10K followers across TikTok, YouTube, and Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInfluencers.map((creator, index) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`glass-card h-full hover:border-accent-500/30 transition-all duration-300 ${
                  !canAccessPremium() ? 'relative overflow-hidden' : ''
                }`}>
                  {!canAccessPremium() && index > 1 && (
                    <div className="absolute inset-0 bg-primary-900/90 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Star className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-primary-200 mb-3">Premium Content</p>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 mr-2" />
                          Upgrade to View
                        </Button>
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6">
                    {/* Creator Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <ProfileAvatar
                        src={creator.avatar}
                        alt={creator.name}
                        initials={creator.initials}
                        size="lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-primary-50">{creator.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            creator.platform === 'TikTok' ? 'bg-pink-500/20 text-pink-400' :
                            creator.platform === 'YouTube' ? 'bg-red-500/20 text-red-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {creator.platform}
                          </span>
                        </div>
                        <p className="text-sm text-primary-400">{creator.handle}</p>
                        <p className="text-xs text-primary-500">{creator.location}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-accent-500/10 rounded-lg">
                        <div className="text-lg font-bold text-accent-400">{creator.followers.toLocaleString()}</div>
                        <div className="text-xs text-primary-400">Followers</div>
                      </div>
                      <div className="text-center p-3 bg-success-500/10 rounded-lg">
                        <div className="text-lg font-bold text-success-400">{creator.engagement}%</div>
                        <div className="text-xs text-primary-400">Engagement</div>
                      </div>
                    </div>

                    {/* Category & Tags */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary-400">Category</span>
                        <span className="text-sm text-accent-400">{creator.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {creator.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Performance */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-primary-400 mb-2">Recent Performance</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-primary-500">Avg Views:</span>
                          <span className="text-primary-300">{creator.avgViews.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-primary-500">Content Type:</span>
                          <span className="text-primary-300">{creator.contentType}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-primary-500">Brand Alignment:</span>
                          <span className="text-success-400">{creator.brandAlignment}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-primary-300 mb-4 italic">&ldquo;{creator.bio}&rdquo;</p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredInfluencers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-primary-50 mb-2">No creators found</h3>
              <p className="text-primary-400">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Ready to Connect with Authentic Creators?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Access our full database of 1000+ nano influencers with real-time data 
                  from TikTok, YouTube, and Instagram APIs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {canAccessPremium() ? (
                    <Button size="xl" className="px-12">
                      <Star className="w-5 h-5 mr-2" />
                      Explore All Creators
                    </Button>
                  ) : (
                    <Link href="/pricing">
                      <Button size="xl" className="px-12">
                        <Star className="w-5 h-5 mr-2" />
                        Upgrade to Premium
                      </Button>
                    </Link>
                  )}
                  <Link href="/how-it-works">
                    <Button variant="outline" size="xl" className="px-12">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-success-400" />
                    <span>Real-time API data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-success-400" />
                    <span>1000+ verified creators</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-success-400" />
                    <span>Authenticity scored</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}