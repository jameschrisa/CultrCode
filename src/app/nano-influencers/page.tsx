'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, UserCheck, Users, TrendingUp, MapPin, Search, Filter, Star, DollarSign, Eye, MessageSquare, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth, useUser } from '@clerk/nextjs'
import { nanoInfluencers, NanoInfluencer } from '@/data/nanoInfluencers'
import { cn, formatNumber } from '@/lib/utils'
import Link from 'next/link'

export default function NanoInfluencersPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    if (!user) return false
    const publicMetadata = user.publicMetadata as any
    const subscriptionTier = publicMetadata?.subscriptionTier || 'free'
    return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'
  }
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedNiche, setSelectedNiche] = useState<string>('all')
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all')
  const [minEngagement, setMinEngagement] = useState<number>(0)
  const [maxRate, setMaxRate] = useState<number>(1000)
  const [influencers, setInfluencers] = useState<NanoInfluencer[]>(nanoInfluencers)

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isSignedIn, isLoaded, router])

  // Filter influencers based on search and filters
  const filteredInfluencers = influencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.niche.some(n => n.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         influencer.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPlatform = selectedPlatform === 'all' || influencer.platform === selectedPlatform
    const matchesNiche = selectedNiche === 'all' || influencer.niche.some(n => n.includes(selectedNiche))
    const matchesAvailability = selectedAvailability === 'all' || influencer.collaboration.availability === selectedAvailability
    const matchesEngagement = influencer.engagementRate >= minEngagement
    const matchesRate = influencer.collaboration.averageRate <= maxRate
    
    return matchesSearch && matchesPlatform && matchesNiche && matchesAvailability && matchesEngagement && matchesRate
  })

  const getPlatformIcon = (platform: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'instagram': <FaInstagram className="w-4 h-4" />,
      'tiktok': <FaTiktok className="w-4 h-4" />,
      'youtube': <FaYoutube className="w-4 h-4" />,
      'linkedin': <FaLinkedin className="w-4 h-4" />,
      'twitter': <FaTwitter className="w-4 h-4" />
    }
    return iconMap[platform] || <Users className="w-4 h-4" />
  }

  const getAvailabilityIcon = (availability: string) => {
    const iconMap = {
      'available': <CheckCircle className="w-4 h-4 text-green-400" />,
      'busy': <Clock className="w-4 h-4 text-yellow-400" />,
      'selective': <AlertCircle className="w-4 h-4 text-orange-400" />
    }
    return iconMap[availability as keyof typeof iconMap] || <Clock className="w-4 h-4 text-gray-400" />
  }

  const getAvailabilityColor = (availability: string) => {
    const colorMap = {
      'available': 'text-green-400 bg-green-500/10 border-green-500/20',
      'busy': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      'selective': 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    }
    return colorMap[availability as keyof typeof colorMap] || 'text-gray-400 bg-gray-500/10 border-gray-500/20'
  }

  const getEngagementColor = (rate: number) => {
    if (rate >= 12) return 'text-red-400'
    if (rate >= 8) return 'text-orange-400'
    if (rate >= 5) return 'text-yellow-400'
    return 'text-green-400'
  }

  // Get unique niches for filter
  const allNiches = Array.from(new Set(nanoInfluencers.flatMap(inf => inf.niche)))

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-400"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="h-6 w-px bg-primary-700" />
          <nav className="flex items-center space-x-2 text-sm text-primary-400">
            <Link href="/dashboard" className="hover:text-primary-200 transition-colors">
              Dashboard
            </Link>
            <span>→</span>
            <span className="text-primary-200">Nano-Influencer Registry</span>
          </nav>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-primary-100">
            <UserCheck className="w-8 h-8 inline-block mr-3 text-accent-400" />
            Nano-Influencer Registry
          </h1>
          <p className="text-primary-300 max-w-2xl mx-auto">
            Discover authentic nano-influencers (1K-10K followers) with high engagement rates. 
            Connect with creators who have genuine influence in their communities.
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">{nanoInfluencers.length} Verified Influencers</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">Avg 10.2% Engagement</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">$150-350 Avg Rate</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 bg-primary-800/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name, handle, niche, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400"
                  />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Platform Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Platform</label>
                    <select
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Platforms</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="linkedin">LinkedIn</option>
                    </select>
                  </div>

                  {/* Niche Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Niche</label>
                    <select
                      value={selectedNiche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Niches</option>
                      {allNiches.map(niche => (
                        <option key={niche} value={niche}>{niche}</option>
                      ))}
                    </select>
                  </div>

                  {/* Availability Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Availability</label>
                    <select
                      value={selectedAvailability}
                      onChange={(e) => setSelectedAvailability(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Availability</option>
                      <option value="available">Available</option>
                      <option value="selective">Selective</option>
                      <option value="busy">Busy</option>
                    </select>
                  </div>

                  {/* Engagement Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Min Engagement</label>
                    <select
                      value={minEngagement}
                      onChange={(e) => setMinEngagement(Number(e.target.value))}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value={0}>Any Engagement</option>
                      <option value={5}>5%+ Engagement</option>
                      <option value={8}>8%+ Engagement</option>
                      <option value={10}>10%+ Engagement</option>
                      <option value={12}>12%+ Engagement</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-primary-400">
          <span>Showing {filteredInfluencers.length} of {nanoInfluencers.length} influencers</span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>

        {/* Influencers Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredInfluencers.map((influencer, index) => (
            <motion.div
              key={influencer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 bg-primary-800/50 backdrop-blur-xl hover:bg-primary-800/70 transition-all cursor-pointer group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                        {getPlatformIcon(influencer.platform)}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-100">{influencer.name}</h3>
                        <p className="text-sm text-primary-400">{influencer.handle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {influencer.verified && (
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                      )}
                      <div className={cn("px-2 py-1 rounded text-xs font-medium border flex items-center", getAvailabilityColor(influencer.collaboration.availability))}>
                        {getAvailabilityIcon(influencer.collaboration.availability)}
                        <span className="ml-1 capitalize">{influencer.collaboration.availability}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-primary-400">
                    <MapPin className="w-3 h-3" />
                    <span>{influencer.location}</span>
                    <span>•</span>
                    <span className="capitalize">{influencer.platform}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent-400">{formatNumber(influencer.followers)}</div>
                      <div className="text-xs text-primary-400">Followers</div>
                    </div>
                    <div>
                      <div className={cn("text-lg font-bold", getEngagementColor(influencer.engagementRate))}>
                        {influencer.engagementRate}%
                      </div>
                      <div className="text-xs text-primary-400">Engagement</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-success-400">${influencer.collaboration.averageRate}</div>
                      <div className="text-xs text-primary-400">Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-brand-400">{influencer.authenticity}</div>
                      <div className="text-xs text-primary-400">Authenticity</div>
                    </div>
                  </div>
                  
                  {/* Niche Tags */}
                  <div className="flex flex-wrap gap-1">
                    {influencer.niche.slice(0, 3).map((niche, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-500/10 text-accent-300 text-xs rounded"
                      >
                        {niche}
                      </span>
                    ))}
                    {influencer.niche.length > 3 && (
                      <span className="px-2 py-1 bg-primary-700/50 text-primary-400 text-xs rounded">
                        +{influencer.niche.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Content Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-primary-400">Content:</span>
                      <span className="text-primary-200">{influencer.content.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-400">Avg Views:</span>
                      <span className="text-primary-200">{formatNumber(influencer.content.avgViews)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-400">Response Rate:</span>
                      <span className="text-primary-200">{influencer.collaboration.responseRate}%</span>
                    </div>
                  </div>
                  
                  {/* Recent Performance */}
                  <div className="border-t border-primary-700/50 pt-3">
                    <div className="text-xs font-medium text-primary-400 mb-2">Recent Performance</div>
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-3">
                        <div>
                          <span className="text-primary-300">Growth: </span>
                          <span className="text-success-400 font-medium">+{influencer.recentMetrics.monthlyGrowth}%</span>
                        </div>
                        <div>
                          <span className="text-primary-300">Viral Posts: </span>
                          <span className="text-yellow-400 font-medium">{influencer.recentMetrics.viralPosts}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className={cn("w-3 h-3", 
                          influencer.recentMetrics.engagementTrend === 'rising' ? 'text-green-400' : 
                          influencer.recentMetrics.engagementTrend === 'stable' ? 'text-yellow-400' : 'text-red-400'
                        )} />
                        <span className={cn("text-xs capitalize",
                          influencer.recentMetrics.engagementTrend === 'rising' ? 'text-green-400' : 
                          influencer.recentMetrics.engagementTrend === 'stable' ? 'text-yellow-400' : 'text-red-400'
                        )}>
                          {influencer.recentMetrics.engagementTrend}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View Full Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredInfluencers.length === 0 && (
          <Card className="border-0 bg-primary-800/50 backdrop-blur-xl">
            <CardContent className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold text-primary-100 mb-2">No Influencers Found</h3>
              <p className="text-primary-300 mb-4">
                Try adjusting your search terms or filters to find relevant influencers.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedPlatform('all')
                  setSelectedNiche('all')
                  setSelectedAvailability('all')
                  setMinEngagement(0)
                  setMaxRate(1000)
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}