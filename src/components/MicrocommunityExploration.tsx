'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Users, TrendingUp, MapPin, Crown, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MicroCommunity, CommunityCategory, CommunitySize, Platform } from '@/types/segments'
import { allMicroCommunities } from '@/data/allMicroCommunities'
import { cn, formatNumber } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { canAccessFeature } from '@/lib/subscription'

interface MicrocommunityExplorationProps {
  className?: string
}

export function MicrocommunityExploration({ className }: MicrocommunityExplorationProps) {
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return canAccessFeature(user, 'canAccessMicrocommunities')
  }
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<CommunityCategory | 'all'>('all')
  const [selectedSize, setSelectedSize] = useState<CommunitySize | 'all'>('all')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | 'all'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  const ITEMS_PER_PAGE = 12

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter communities based on search and filters
  const filteredCommunities = useMemo(() => {
    let filtered = allMicroCommunities

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(community =>
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.characteristics.interests.some(interest => 
          interest.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(community => community.category === selectedCategory)
    }

    // Size filter
    if (selectedSize !== 'all') {
      filtered = filtered.filter(community => community.size === selectedSize)
    }

    // Platform filter
    if (selectedPlatform !== 'all') {
      filtered = filtered.filter(community => community.platform === selectedPlatform)
    }

    return filtered
  }, [searchTerm, selectedCategory, selectedSize, selectedPlatform])

  // Paginate results
  const paginatedCommunities = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredCommunities.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredCommunities, currentPage])

  const totalPages = Math.ceil(filteredCommunities.length / ITEMS_PER_PAGE)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedSize, selectedPlatform])

  const categories: (CommunityCategory | 'all')[] = [
    'all', 'aesthetic', 'lifestyle', 'professional', 'hobby', 'cultural', 
    'wellness', 'tech', 'creative', 'social-cause', 'sports', 
    'food', 'travel', 'parenting', 'finance', 'education'
  ]

  const sizes: (CommunitySize | 'all')[] = ['all', 'emerging', 'growing', 'established', 'massive']
  const platforms: (Platform | 'all')[] = ['all', 'instagram', 'tiktok', 'youtube', 'linkedin', 'twitter', 'substack', 'discord']

  const getSizeInfo = (size: CommunitySize) => {
    const sizeMap = {
      'emerging': { label: 'Emerging', range: '< 10K', color: 'text-blue-400' },
      'growing': { label: 'Growing', range: '10K - 100K', color: 'text-green-400' },
      'established': { label: 'Established', range: '100K - 1M', color: 'text-yellow-400' },
      'massive': { label: 'Massive', range: '1M+', color: 'text-red-400' }
    }
    return sizeMap[size]
  }

  const getPlatformIcon = (platform: Platform) => {
    const iconMap = {
      'instagram': <FaInstagram className="w-4 h-4" />,
      'tiktok': <FaTiktok className="w-4 h-4" />,
      'youtube': <FaYoutube className="w-4 h-4" />,
      'linkedin': <FaLinkedin className="w-4 h-4" />,
      'twitter': <FaTwitter className="w-4 h-4" />,
      'discord': <FaDiscord className="w-4 h-4" />,
      'substack': <SiSubstack className="w-4 h-4" />
    }
    return iconMap[platform] || <span className="text-xs font-bold">{platform.charAt(0).toUpperCase()}</span>
  }

  if (!canAccessPremium()) {
    return (
      <div className={cn("space-y-6", className)}>
        <Card className="border-2 border-accent-500/30 bg-gradient-to-br from-accent-500/20 to-brand-500/20 backdrop-blur-xl">
          <CardContent className="text-center py-12">
            <Crown className="w-16 h-16 mx-auto text-accent-400 mb-4" />
            <h3 className="text-2xl font-bold text-primary-100 mb-2">Premium Feature</h3>
            <p className="text-primary-300 mb-6 max-w-md mx-auto">
              Explore 225+ microcommunities with detailed insights, growth data, and influencer connections. 
              Available for Premium subscribers.
            </p>
            <Button variant="primary" size="lg">
              Upgrade to Premium
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary-100">
          Explore Microcommunities
        </h2>
        <p className="text-primary-300 max-w-2xl mx-auto">
          Discover and analyze 225+ unique microcommunities across North America. 
          Find your perfect audience with detailed demographics, growth data, and influencer insights.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-primary-400">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>225 Communities</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>15 Categories</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>North America</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 bg-primary-800/50 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search communities..."
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
                  onChange={(e) => setSelectedCategory(e.target.value as CommunityCategory | 'all')}
                  className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value as CommunitySize | 'all')}
                  className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                >
                  {sizes.map(size => (
                    <option key={size} value={size}>
                      {size === 'all' ? 'All Sizes' : getSizeInfo(size as CommunitySize).label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Platform Filter */}
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">Platform</label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value as Platform | 'all')}
                  className="custom-select w-full p-3 bg-primary-900/50 border border-primary-700 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100"
                >
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>
                      {platform === 'all' ? 'All Platforms' : platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-primary-400">
        <span>
          Showing {paginatedCommunities.length} of {filteredCommunities.length} communities
        </span>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Community Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} className="border-0 bg-primary-800/50 backdrop-blur-xl animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-primary-700 rounded mb-4"></div>
                <div className="h-3 bg-primary-700 rounded mb-2"></div>
                <div className="h-3 bg-primary-700 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedSize}-${selectedPlatform}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {paginatedCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 bg-primary-800/50 backdrop-blur-xl hover:bg-primary-800/70 transition-all cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                          {getPlatformIcon(community.platform)}
                        </div>
                        <div className={cn("px-2 py-1 rounded text-xs font-medium", getSizeInfo(community.size).color)}>
                          {getSizeInfo(community.size).range}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <CardTitle className="text-lg text-primary-100 group-hover:text-accent-400 transition-colors">
                      {community.name}
                    </CardTitle>
                    
                    <div className="flex items-center space-x-2 text-xs text-primary-400">
                      <span className="px-2 py-1 bg-primary-700/50 rounded capitalize">
                        {community.category.replace('-', ' ')}
                      </span>
                      <span>•</span>
                      <span className="capitalize">{community.platform}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-primary-300 text-sm mb-4 line-clamp-3">
                      {community.description}
                    </p>
                    
                    <div className="space-y-3">
                      {/* Key Interests */}
                      <div>
                        <div className="text-xs font-medium text-primary-400 mb-1">Top Interests</div>
                        <div className="flex flex-wrap gap-1">
                          {community.characteristics.interests.slice(0, 3).map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-accent-500/10 text-accent-300 text-xs rounded"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Demographics */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-primary-400">Primary Age:</span>
                          <div className="text-primary-200">
                            {Object.entries(community.demographics.ageDistribution)
                              .reduce((a, b) => community.demographics.ageDistribution[a[0] as keyof typeof community.demographics.ageDistribution] > community.demographics.ageDistribution[b[0] as keyof typeof community.demographics.ageDistribution] ? a : b)[0]}
                          </div>
                        </div>
                        <div>
                          <span className="text-primary-400">Growth:</span>
                          <div className="text-success-400">+{community.growth.monthlyGrowthRate}%/mo</div>
                        </div>
                      </div>
                      
                      {/* Regional Focus */}
                      <div>
                        <div className="text-xs font-medium text-primary-400 mb-1">Primary Region</div>
                        <div className="text-xs text-primary-300 capitalize">
                          {community.geography.primaryRegions[0]?.replace('-', ' ') || 'North America'}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(7, totalPages) }).map((_, index) => {
              let pageNumber
              if (totalPages <= 7) {
                pageNumber = index + 1
              } else if (currentPage <= 4) {
                pageNumber = index + 1
              } else if (currentPage >= totalPages - 3) {
                pageNumber = totalPages - 6 + index
              } else {
                pageNumber = currentPage - 3 + index
              }
              
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNumber)}
                  className="w-8 h-8 p-0"
                >
                  {pageNumber}
                </Button>
              )
            })}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredCommunities.length === 0 && (
        <Card className="border-0 bg-primary-800/50 backdrop-blur-xl">
          <CardContent className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold text-primary-100 mb-2">No Communities Found</h3>
            <p className="text-primary-300 mb-4">
              Try adjusting your search terms or filters to find relevant microcommunities.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedSize('all')
                setSelectedPlatform('all')
              }}
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}