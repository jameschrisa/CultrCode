'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, Search, Filter, Eye, BookmarkPlus, ArrowUpRight, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Tag } from '@/components/ui/Tag'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { expandedSegments, tierMapping } from '@/data/expanded_segments'
import { digitalBehaviorMapping, valuesDriverMapping, spendingPowerMapping, creatorAffinityMapping } from '@/data/segments'

function SegmentsContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTier, setSelectedTier] = useState<string>('all')
  const [selectedSegment, setSelectedSegment] = useState<any>(null)

  const filteredSegments = expandedSegments.filter(segment => {
    const matchesSearch = segment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         segment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         segment.lifestyle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTier = selectedTier === 'all' || segment.tier === selectedTier
    return matchesSearch && matchesTier
  })

  const segmentsByTier = {
    TIER1: filteredSegments.filter(s => s.tier === 'TIER1'),
    TIER2: filteredSegments.filter(s => s.tier === 'TIER2'), 
    TIER3: filteredSegments.filter(s => s.tier === 'TIER3'),
    MICRO: filteredSegments.filter(s => s.tier === 'MICRO')
  }

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'TIER1': return 'bg-red-500/10 border-red-500/30 text-red-400'
      case 'TIER2': return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
      case 'TIER3': return 'bg-blue-500/10 border-blue-500/30 text-blue-400'
      case 'MICRO': return 'bg-purple-500/10 border-purple-500/30 text-purple-400'
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-400'
    }
  }

  const handleViewDetails = (segment: any) => {
    setSelectedSegment(segment)
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
              <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-400" />
              </div>
              <h1 className="text-4xl font-bold text-primary-50">
                CultrCode Segments
              </h1>
            </div>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              48 precision audience segments built for creator brands. Discover your ideal customers through our proprietary segmentation framework.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">9</div>
                <div className="text-sm text-primary-400">Brand Evangelists</div>
                <div className="text-xs text-primary-500">Tier 1 Segments</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15</div>
                <div className="text-sm text-primary-400">Early Believers</div>
                <div className="text-xs text-primary-500">Tier 2 Segments</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-sm text-primary-400">Quality Seekers</div>
                <div className="text-xs text-primary-500">Tier 3 Segments</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-sm text-primary-400">Micro-Segments</div>
                <div className="text-xs text-primary-500">Creator-Specific</div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
              <input
                type="text"
                placeholder="Search segments by name, description, or lifestyle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTier === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTier('all')}
              >
                All Segments ({expandedSegments.length})
              </Button>
              <Button
                variant={selectedTier === 'TIER1' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTier('TIER1')}
                className="text-red-400 border-red-500/30"
              >
                Tier 1 ({segmentsByTier.TIER1.length})
              </Button>
              <Button
                variant={selectedTier === 'TIER2' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTier('TIER2')}
                className="text-orange-400 border-orange-500/30"
              >
                Tier 2 ({segmentsByTier.TIER2.length})
              </Button>
              <Button
                variant={selectedTier === 'TIER3' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTier('TIER3')}
                className="text-blue-400 border-blue-500/30"
              >
                Tier 3 ({segmentsByTier.TIER3.length})
              </Button>
              <Button
                variant={selectedTier === 'MICRO' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTier('MICRO')}
                className="text-purple-400 border-purple-500/30"
              >
                Micro ({segmentsByTier.MICRO.length})
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Segments Grid */}
        <div className="space-y-8">
          {Object.entries(segmentsByTier).map(([tier, segments]) => {
            if (segments.length === 0) return null
            
            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className={`px-4 py-2 rounded-lg border ${getTierColor(tier)}`}>
                    <span className="font-semibold">{tierMapping[tier as keyof typeof tierMapping]?.name}</span>
                  </div>
                  <span className="text-primary-400 text-sm">
                    {tierMapping[tier as keyof typeof tierMapping]?.description}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {segments.map((segment) => (
                    <Card key={segment.id} className="glass-card hover:border-accent-500/50 transition-all duration-200">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-primary-50 leading-tight mb-3">
                              {segment.name}
                            </CardTitle>
                            <div className="flex flex-col space-y-2">
                              <Tag 
                                variant={
                                  segment.tier === 'TIER1' ? 'danger' :
                                  segment.tier === 'TIER2' ? 'warning' :
                                  segment.tier === 'TIER3' ? 'primary' :
                                  'secondary'
                                }
                                size="sm"
                              >
                                {segment.code}
                              </Tag>
                              <span className="text-xs text-primary-500">{segment.lifestyle}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm text-primary-300 leading-relaxed">
                            {segment.description.substring(0, 120)}...
                          </p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-primary-400">Age Range:</span>
                              <span className="text-primary-200">{segment.ageMin}-{segment.ageMax}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-primary-400">Income:</span>
                              <span className="text-success-400">
                                ${(segment.incomeMin/1000).toFixed(0)}K - ${(segment.incomeMax/1000).toFixed(0)}K
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="space-y-1">
                              <div className="text-primary-400">Digital Behavior:</div>
                              <div className="flex items-center space-x-1">
                                <span className="text-primary-200">
                                  {digitalBehaviorMapping[segment.digitalBehavior]?.name}
                                </span>
                                <span>{digitalBehaviorMapping[segment.digitalBehavior]?.icon}</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-primary-400">Values:</div>
                              <div className="flex items-center space-x-1">
                                <span className="text-primary-200">
                                  {valuesDriverMapping[segment.valuesDriver]?.name}
                                </span>
                                <span>{valuesDriverMapping[segment.valuesDriver]?.icon}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1 text-xs"
                              onClick={() => handleViewDetails(segment)}
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Details
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                            >
                              <BookmarkPlus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredSegments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-primary-300 mb-2">No segments found</h3>
            <p className="text-primary-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Segment Details Modal */}
      {selectedSegment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-xl border border-primary-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary-50 mb-3">{selectedSegment.name}</h2>
                  <p className="text-accent-400 mb-3">{tierMapping[selectedSegment.tier as keyof typeof tierMapping]?.name}</p>
                  <div className="flex flex-col space-y-2">
                    <Tag 
                      variant={
                        selectedSegment.tier === 'TIER1' ? 'danger' :
                        selectedSegment.tier === 'TIER2' ? 'warning' :
                        selectedSegment.tier === 'TIER3' ? 'primary' :
                        'secondary'
                      }
                      size="md"
                    >
                      {selectedSegment.code}
                    </Tag>
                    <span className="text-xs text-primary-500">{selectedSegment.lifestyle}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedSegment(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-2">Description</h3>
                  <p className="text-primary-300 leading-relaxed">{selectedSegment.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Demographics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-primary-400">Age Range:</span>
                        <span className="text-primary-200">{selectedSegment.ageMin}-{selectedSegment.ageMax} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Income Range:</span>
                        <span className="text-success-400">
                          ${(selectedSegment.incomeMin/1000).toFixed(0)}K - ${(selectedSegment.incomeMax/1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Lifestyle:</span>
                        <span className="text-primary-200">{selectedSegment.lifestyle}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Behavioral Profile</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="text-primary-400 mb-1">Digital Behavior:</div>
                        <div className="flex items-center space-x-2">
                          <span>{digitalBehaviorMapping[selectedSegment.digitalBehavior as keyof typeof digitalBehaviorMapping]?.icon}</span>
                          <span className="text-primary-200">{digitalBehaviorMapping[selectedSegment.digitalBehavior as keyof typeof digitalBehaviorMapping]?.name}</span>
                        </div>
                        <div className="text-xs text-primary-500 mt-1">
                          {digitalBehaviorMapping[selectedSegment.digitalBehavior as keyof typeof digitalBehaviorMapping]?.description}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-primary-400 mb-1">Values Driver:</div>
                        <div className="flex items-center space-x-2">
                          <span>{valuesDriverMapping[selectedSegment.valuesDriver as keyof typeof valuesDriverMapping]?.icon}</span>
                          <span className="text-primary-200">{valuesDriverMapping[selectedSegment.valuesDriver as keyof typeof valuesDriverMapping]?.name}</span>
                        </div>
                        <div className="text-xs text-primary-500 mt-1">
                          {valuesDriverMapping[selectedSegment.valuesDriver as keyof typeof valuesDriverMapping]?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-2">Launch Strategy</h3>
                  <div className="bg-accent-500/10 border border-accent-500/30 rounded-lg p-4">
                    <p className="text-accent-300 text-sm leading-relaxed">{selectedSegment.launchStrategy}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function SegmentsPage() {
  return (
    <ProtectedRoute>
      <SegmentsContent />
    </ProtectedRoute>
  )
}