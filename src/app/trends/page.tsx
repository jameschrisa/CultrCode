'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Activity, TrendingUp, Users, Eye, BarChart3, Calendar, AlertTriangle, Target, Search, Filter } from 'lucide-react'
import { FaReddit, FaTiktok, FaYoutube, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import { emergingTrends, EmergingTrend } from '@/data/emergingTrends'
import { cn, formatNumber } from '@/lib/utils'
import Link from 'next/link'

export default function TrendsPage() {
  const { isAuthenticated, user, isLoading, canAccessPremium } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [trends, setTrends] = useState<EmergingTrend[]>(emergingTrends)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, isLoading, router])

  // Filter trends based on search and filters
  const filteredTrends = trends.filter(trend => {
    const matchesSearch = trend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trend.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trend.hashtags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || trend.category === selectedCategory
    const matchesPlatform = selectedPlatform === 'all' || trend.platform === selectedPlatform
    const matchesStatus = selectedStatus === 'all' || trend.status === selectedStatus
    
    return matchesSearch && matchesCategory && matchesPlatform && matchesStatus
  })

  const getPlatformIcon = (platform: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'reddit': <FaReddit className="w-4 h-4" />,
      'tiktok': <FaTiktok className="w-4 h-4" />,
      'youtube': <FaYoutube className="w-4 h-4" />,
      'discord': <FaDiscord className="w-4 h-4" />,
      'instagram': <FaInstagram className="w-4 h-4" />,
      'linkedin': <FaLinkedin className="w-4 h-4" />
    }
    return iconMap[platform] || <Activity className="w-4 h-4" />
  }

  const getStatusColor = (status: string) => {
    const colorMap = {
      'emerging': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      'rising': 'text-green-400 bg-green-500/10 border-green-500/20',
      'peaked': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      'declining': 'text-red-400 bg-red-500/10 border-red-500/20'
    }
    return colorMap[status as keyof typeof colorMap] || 'text-gray-400 bg-gray-500/10 border-gray-500/20'
  }

  const getViralityColor = (virality: number) => {
    if (virality >= 90) return 'text-red-400'
    if (virality >= 80) return 'text-orange-400'
    if (virality >= 70) return 'text-yellow-400'
    return 'text-green-400'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-400"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
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
            <span className="text-primary-200">Emerging Trends</span>
          </nav>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-primary-100">
            <Activity className="w-8 h-8 inline-block mr-3 text-accent-400" />
            Monitor Emerging Trends
          </h1>
          <p className="text-primary-300 max-w-2xl mx-auto">
            Track real-time trends across social platforms. Identify opportunities before they go mainstream 
            and discover what&apos;s driving engagement in your target communities.
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">{emergingTrends.length} Trends Tracked</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">Real-time Monitoring</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2 text-accent-400" />
              <span className="text-primary-400">Predictive Analytics</span>
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
                    placeholder="Search trends, hashtags, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400"
                  />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Categories</option>
                      <option value="tech">Tech</option>
                      <option value="wellness">Wellness</option>
                      <option value="aesthetic">Aesthetic</option>
                      <option value="food">Food</option>
                      <option value="creative">Creative</option>
                      <option value="finance">Finance</option>
                      <option value="social-cause">Social Cause</option>
                      <option value="professional">Professional</option>
                      <option value="parenting">Parenting</option>
                      <option value="travel">Travel</option>
                    </select>
                  </div>

                  {/* Platform Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Platform</label>
                    <select
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Platforms</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="instagram">Instagram</option>
                      <option value="reddit">Reddit</option>
                      <option value="discord">Discord</option>
                      <option value="linkedin">LinkedIn</option>
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                    >
                      <option value="all">All Statuses</option>
                      <option value="emerging">Emerging</option>
                      <option value="rising">Rising</option>
                      <option value="peaked">Peaked</option>
                      <option value="declining">Declining</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-primary-400">
          <span>Showing {filteredTrends.length} of {emergingTrends.length} trends</span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>

        {/* Trends Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredTrends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 bg-primary-800/50 backdrop-blur-xl hover:bg-primary-800/70 transition-all cursor-pointer group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                        {getPlatformIcon(trend.platform)}
                      </div>
                      <div>
                        <div className={cn("px-2 py-1 rounded text-xs font-medium border", getStatusColor(trend.status))}>
                          {trend.status.charAt(0).toUpperCase() + trend.status.slice(1)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={cn("text-2xl font-bold", getViralityColor(trend.virality))}>
                        {trend.virality}
                      </div>
                      <div className="text-xs text-primary-400">Virality Score</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-primary-100 group-hover:text-accent-400 transition-colors">
                    {trend.name}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-2 text-xs text-primary-400">
                    <span className="px-2 py-1 bg-primary-700/50 rounded capitalize">
                      {trend.category}
                    </span>
                    <span>•</span>
                    <span className="capitalize">{trend.platform}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  <p className="text-primary-300 text-sm leading-relaxed">
                    {trend.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-success-400">+{trend.growth}%</div>
                      <div className="text-xs text-primary-400">Growth</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-400">{formatNumber(trend.predictedReach)}</div>
                      <div className="text-xs text-primary-400">Predicted Reach</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-brand-400">{trend.commercialPotential}</div>
                      <div className="text-xs text-primary-400">Commercial Score</div>
                    </div>
                  </div>
                  
                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1">
                    {trend.hashtags.slice(0, 3).map((hashtag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-500/10 text-accent-300 text-xs rounded"
                      >
                        {hashtag}
                      </span>
                    ))}
                    {trend.hashtags.length > 3 && (
                      <span className="px-2 py-1 bg-primary-700/50 text-primary-400 text-xs rounded">
                        +{trend.hashtags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Influencer Adoption */}
                  <div className="border-t border-primary-700/50 pt-3">
                    <div className="text-xs font-medium text-primary-400 mb-2">Influencer Adoption</div>
                    <div className="flex space-x-4 text-xs">
                      <div>
                        <span className="text-primary-300">Nano: </span>
                        <span className="text-blue-400 font-medium">{trend.influencerAdoption.nano}%</span>
                      </div>
                      <div>
                        <span className="text-primary-300">Micro: </span>
                        <span className="text-green-400 font-medium">{trend.influencerAdoption.micro}%</span>
                      </div>
                      <div>
                        <span className="text-primary-300">Macro: </span>
                        <span className="text-yellow-400 font-medium">{trend.influencerAdoption.macro}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTrends.length === 0 && (
          <Card className="border-0 bg-primary-800/50 backdrop-blur-xl">
            <CardContent className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold text-primary-100 mb-2">No Trends Found</h3>
              <p className="text-primary-300 mb-4">
                Try adjusting your search terms or filters to find relevant trends.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedPlatform('all')
                  setSelectedStatus('all')
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