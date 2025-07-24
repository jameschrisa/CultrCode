'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BookmarkPlus, Calendar, Crown, Eye, Trash2, Star, Target, Users, TrendingUp, Sparkles, Activity, UserCheck, Bike, Gamepad2, Bot, Sprout, Footprints, Clock, Leaf, FlaskConical, Shirt, MapPin, Home, Pin } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'
import { formatPercentage } from '@/lib/utils'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { ReportViewer } from '@/components/ReportViewer'
import { ReportManagement } from '@/components/ReportManagement'
import { reportsService, SavedReport } from '@/lib/reportsService'
import { CardDetailsModal } from '@/components/CardDetailsModal'

function DashboardContent() {
  const { user, canAccessPremium } = useAuth()
  const [savedReports, setSavedReports] = useState<SavedReport[]>([])
  const [loading, setLoading] = useState(true)
  const [viewingReport, setViewingReport] = useState<SavedReport | null>(null)
  const [selectedCard, setSelectedCard] = useState<any>(null)
  const [pinnedItems, setPinnedItems] = useState<{
    segments: Set<string>
    trends: Set<string>
    communities: Set<string>
  }>({
    segments: new Set(),
    trends: new Set(),
    communities: new Set()
  })

  const loadSavedReports = useCallback(async () => {
    if (!user) {
      setLoading(false)
      return
    }

    try {
      const reports = await reportsService.getReports(user.id)
      setSavedReports(reports.reverse()) // Show newest first
    } catch (error) {
      console.error('Error loading saved reports:', error)
      setSavedReports([])
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    loadSavedReports()
  }, [loadSavedReports])

  const deleteReport = async (reportId: string) => {
    if (!user || !confirm('Are you sure you want to delete this report?')) {
      return
    }

    try {
      await reportsService.deleteReport(reportId, user.id)
      // Update local state
      const updatedReports = savedReports.filter(report => report.id !== reportId)
      setSavedReports(updatedReports)
    } catch (error) {
      console.error('Error deleting report:', error)
      alert('Failed to delete report. Please try again.')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getReportTypeColor = (type: 'basic' | 'premium') => {
    return type === 'premium' 
      ? 'bg-accent-500/20 text-accent-400 border-accent-500/30'
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-success-400'
    if (score >= 80) return 'text-accent-400'
    if (score >= 70) return 'text-blue-400'
    if (score >= 60) return 'text-orange-400'
    return 'text-red-400'
  }

  const handleViewDetails = (card: any, type: 'segment' | 'trend' | 'community') => {
    const cardData = {
      type,
      name: card.name,
      description: card.description,
      match: card.match,
      growth: card.growth,
      members: card.members,
      status: card.status,
      tags: card.tags,
      icon: card.icon,
      metrics: {
        primary: {
          label: type === 'segment' ? 'Match Score' : type === 'trend' ? 'Viral Score' : 'Growth Rate',
          value: card.match || card.virality || card.growth,
          trend: 'up'
        },
        secondary: [
          { label: 'Potential', value: card.potential || 'High' },
          { label: 'Members', value: card.members || 'N/A' },
        ]
      },
      insights: [
        {
          title: 'Market Opportunity',
          content: 'Strong engagement potential with growing audience base and high conversion likelihood.',
          type: 'opportunity'
        },
        {
          title: 'Competitive Landscape',
          content: 'Moderate competition with room for differentiation through unique value propositions.',
          type: 'challenge'
        },
        {
          title: 'Key Demographics',
          content: 'Primary audience consists of tech-savvy millennials and Gen Z with disposable income.',
          type: 'insight'
        }
      ],
      recommendations: [
        'Focus on authentic storytelling and community building',
        'Leverage user-generated content for social proof',
        'Create detailed personas to understand this audience better',
        'Test different content formats to maximize engagement'
      ]
    }
    setSelectedCard(cardData)
  }

  const handlePin = (cardName: string, type: 'segment' | 'trend' | 'community') => {
    setPinnedItems(prev => {
      const key = type === 'segment' ? 'segments' : type === 'trend' ? 'trends' : 'communities'
      const newSet = new Set(prev[key])
      if (newSet.has(cardName)) {
        newSet.delete(cardName)
      } else {
        newSet.add(cardName)
      }
      return {
        ...prev,
        [key]: newSet
      }
    })
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
          {/* Mobile Header Layout */}
          <div className="block lg:hidden mb-6">
            <div className="text-center mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-50 mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-primary-300 text-sm sm:text-base">
                Explore trending micro-communities and manage your cultural intelligence reports
              </p>
            </div>
            {canAccessPremium() && (
              <div className="flex justify-center mb-4">
                <div className="px-3 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg">
                  <div className="flex items-center text-accent-400 text-sm font-medium">
                    <Crown className="w-4 h-4 mr-2" />
                    Premium User
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {canAccessPremium() && (
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/advanced-segmentation'}
                  className="w-full text-sm"
                  size="sm"
                >
                  <Target className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Advanced Segmentation</span>
                  <span className="sm:hidden">Segmentation</span>
                </Button>
              )}
              {canAccessPremium() && (
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/microcommunities'}
                  className="w-full text-sm"
                  size="sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Explore Microcommunities</span>
                  <span className="sm:hidden">Communities</span>
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => window.location.href = '/trends'}
                className="w-full text-sm"
                size="sm"
              >
                <Activity className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Monitor Emerging Trends</span>
                <span className="sm:hidden">Trends</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/solutions/personas'}
                className="w-full text-sm"
                size="sm"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Generated Personas</span>
                <span className="sm:hidden">Personas</span>
              </Button>
            </div>
          </div>

          {/* Desktop Header Layout */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-primary-50 mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-primary-300 text-lg">
                Explore trending micro-communities and manage your cultural intelligence reports
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {canAccessPremium() && (
                <div className="px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg">
                  <div className="flex items-center text-accent-400 text-sm font-medium">
                    <Crown className="w-4 h-4 mr-2" />
                    Premium User
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                {canAccessPremium() && (
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/advanced-segmentation'}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Advanced Segmentation
                  </Button>
                )}
                {canAccessPremium() && (
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/microcommunities'}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Explore Microcommunities
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/trends'}
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Monitor Emerging Trends
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/solutions/personas'}
                >
                  <UserCheck className="w-4 h-4 mr-2" />
                  Generated Personas
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Total Reports</p>
                    <p className="text-3xl font-bold text-primary-50">{savedReports.length}</p>
                  </div>
                  <BookmarkPlus className="w-8 h-8 text-accent-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Premium Reports</p>
                    <p className="text-3xl font-bold text-primary-50">
                      {savedReports.filter(r => r.reportType === 'premium').length}
                    </p>
                  </div>
                  <Crown className="w-8 h-8 text-accent-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Avg Match Score</p>
                    <p className="text-3xl font-bold text-primary-50">
                      {savedReports.length > 0 
                        ? Math.round(savedReports.reduce((acc, r) => acc + r.segmentMatch.matchScore, 0) / savedReports.length)
                        : 0}%
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-success-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pinned Items Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Pinned Segments</p>
                    <p className="text-3xl font-bold text-primary-50">{pinnedItems.segments.size}</p>
                  </div>
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Pinned Trends</p>
                    <p className="text-3xl font-bold text-primary-50">{pinnedItems.trends.size}</p>
                  </div>
                  <div className="w-10 h-10 bg-success-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-success-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Pinned Communities</p>
                    <p className="text-3xl font-bold text-primary-50">{pinnedItems.communities.size}</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* New Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-50">New Segments</h2>
            <Button variant="outline" size="sm">
              <Target className="w-4 h-4 mr-2" />
              View All Segments
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Digital Nomad Families",
                match: "94%",
                potential: "High",
                description: "Remote-working families traveling while educating children digitally",
                tags: ["Remote Work", "Family", "Travel"],
                status: "Hot",
                icon: <Users className="w-6 h-6" />
              },
              {
                name: "Micro-Mobility Enthusiasts",
                match: "87%",
                potential: "Medium",
                description: "Urban commuters passionate about e-scooters, e-bikes, and sustainable transport",
                tags: ["Urban", "Sustainability", "Tech"],
                status: "Growing",
                icon: <Bike className="w-6 h-6" />
              },
              {
                name: "Plant-Based Gamers",
                match: "91%",
                potential: "High",
                description: "Gaming community focused on plant-based nutrition and ethical gaming habits",
                tags: ["Gaming", "Wellness", "Plant-Based"],
                status: "Emerging",
                icon: <Gamepad2 className="w-6 h-6" />
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-0 hover:border-accent-500/30 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                        {segment.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-accent-400">{segment.match} match</div>
                        <div className="text-xs text-primary-400">{segment.potential} potential</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                        segment.status === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        segment.status === 'Growing' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                      }`}>
                        {segment.status}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-primary-50 text-lg mb-3 group-hover:text-white transition-colors">
                      {segment.name}
                    </h3>
                    
                    <p className="text-sm text-primary-300 leading-relaxed mb-4 group-hover:text-primary-200 transition-colors">
                      {segment.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {segment.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {canAccessPremium() && (
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-accent-400 hover:text-accent-300 border-accent-400/50 hover:border-accent-400"
                          onClick={() => handleViewDetails(segment, 'segment')}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          variant={pinnedItems.segments.has(segment.name) ? "primary" : "outline"} 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handlePin(segment.name, 'segment')}
                        >
                          <Pin className={`w-4 h-4 mr-2 ${pinnedItems.segments.has(segment.name) ? 'fill-current' : ''}`} />
                          {pinnedItems.segments.has(segment.name) ? 'Pinned' : 'Pin Segment'}
                        </Button>
                      </div>
                    )}
                    
                    {!canAccessPremium() && (
                      <Button variant="outline" size="sm" className="w-full">
                        <Crown className="w-4 h-4 mr-2" />
                        Unlock with Premium
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emerging Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-50">Emerging Trends</h2>
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              View All Trends
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Silent Walking",
                virality: "89",
                growth: "+342%",
                description: "Mindful walking without music or podcasts, focusing on present-moment awareness",
                tags: ["Wellness", "Mindfulness", "Outdoor"],
                status: "Viral",
                icon: <Footprints className="w-6 h-6" />
              },
              {
                name: "Cozy Gaming",
                virality: "76",
                growth: "+198%",
                description: "Low-stress, atmospheric games focused on relaxation and comfort rather than competition",
                tags: ["Gaming", "Wellness", "Lifestyle"],
                status: "Rising",
                icon: <Gamepad2 className="w-6 h-6" />
              },
              {
                name: "Micro-Seasons",
                virality: "84",
                growth: "+267%",
                description: "Capsule wardrobes aligned with subtle seasonal shifts rather than traditional fashion cycles",
                tags: ["Fashion", "Sustainability", "Mindful"],
                status: "Trending",
                icon: <Leaf className="w-6 h-6" />
              }
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-0 hover:border-accent-500/30 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                        {trend.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-brand-400">{trend.virality} viral score</div>
                        <div className="text-xs text-success-400">{trend.growth}</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                        trend.status === 'Viral' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        trend.status === 'Rising' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-success-500/20 text-success-400 border border-success-500/30'
                      }`}>
                        {trend.status}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-primary-50 text-lg mb-3 group-hover:text-white transition-colors">
                      {trend.name}
                    </h3>
                    
                    <p className="text-sm text-primary-300 leading-relaxed mb-4 group-hover:text-primary-200 transition-colors">
                      {trend.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trend.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {canAccessPremium() && (
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-accent-400 hover:text-accent-300 border-accent-400/50 hover:border-accent-400"
                          onClick={() => handleViewDetails(trend, 'trend')}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          variant={pinnedItems.trends.has(trend.name) ? "primary" : "outline"} 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handlePin(trend.name, 'trend')}
                        >
                          <Pin className={`w-4 h-4 mr-2 ${pinnedItems.trends.has(trend.name) ? 'fill-current' : ''}`} />
                          {pinnedItems.trends.has(trend.name) ? 'Pinned' : 'Pin Trend'}
                        </Button>
                      </div>
                    )}
                    
                    {!canAccessPremium() && (
                      <Button variant="outline" size="sm" className="w-full">
                        <Crown className="w-4 h-4 mr-2" />
                        Unlock with Premium
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trending Micro-Communities Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-50">Trending Micro-Communities</h2>
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              View All Trends
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Goblincore Enthusiasts",
                growth: "+425%",
                members: "67K",
                description: "Aesthetic celebrating nature's chaotic beauty, collecting shiny objects, and earthy vibes",
                tags: ["Aesthetic", "Nature", "Collecting"],
                status: "Emerging",
                icon: <FlaskConical className="w-6 h-6" />
              },
              {
                name: "AI Wellness Coaches",
                growth: "+310%",
                members: "43K",
                description: "Tech-savvy wellness practitioners using AI to personalize mental health and fitness",
                tags: ["Wellness", "AI", "Health"],
                status: "Rising",
                icon: <Bot className="w-6 h-6" />
              },
              {
                name: "Climate Optimists",
                growth: "+285%",
                members: "52K",
                description: "Solution-focused environmental advocates promoting positive climate action and innovation",
                tags: ["Environment", "Innovation", "Optimism"],
                status: "Trending",
                icon: <Sprout className="w-6 h-6" />
              }
            ].map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-0 hover:border-accent-500/30 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400">
                        {community.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-success-400">{community.growth}</div>
                        <div className="text-xs text-primary-400">{community.members} members</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                        community.status === 'Emerging' ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30' :
                        community.status === 'Rising' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-success-500/20 text-success-400 border border-success-500/30'
                      }`}>
                        {community.status}
                      </div>
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
                    
                    {canAccessPremium() && (
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-accent-400 hover:text-accent-300 border-accent-400/50 hover:border-accent-400"
                          onClick={() => handleViewDetails(community, 'community')}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          variant={pinnedItems.communities.has(community.name) ? "primary" : "outline"} 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handlePin(community.name, 'community')}
                        >
                          <Pin className={`w-4 h-4 mr-2 ${pinnedItems.communities.has(community.name) ? 'fill-current' : ''}`} />
                          {pinnedItems.communities.has(community.name) ? 'Pinned' : 'Pin'}
                        </Button>
                      </div>
                    )}
                    
                    {!canAccessPremium() && (
                      <Button variant="outline" size="sm" className="w-full">
                        <Crown className="w-4 h-4 mr-2" />
                        Unlock with Premium
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Saved Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary-50 mb-6">Saved Reports</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-primary-300">Loading your reports...</p>
            </div>
          ) : savedReports.length === 0 ? (
            <Card className="border-0">
              <CardContent className="p-12 text-center">
                <BookmarkPlus className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-50 mb-2">No saved reports yet</h3>
                <p className="text-primary-300 mb-6">
                  Start by creating a segment analysis and save your favorite reports for easy access.
                </p>
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/analysis'}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Create First Analysis
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {savedReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 hover:border-accent-500/30 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`px-3 py-1 rounded-xl text-xs font-bold border ${getReportTypeColor(report.reportType)}`}>
                              {report.reportType === 'premium' ? 'Premium' : 'Basic'} Report
                            </div>
                            <div className={`text-2xl font-bold ${getMatchScoreColor(report.segmentMatch.matchScore)}`}>
                              {formatPercentage(report.segmentMatch.matchScore)} match
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-primary-50 mb-2 group-hover:text-white transition-colors">
                            {report.segmentMatch.segment.name}
                          </h3>
                          
                          <p className="text-primary-300 mb-4 leading-relaxed">
                            {report.description}
                          </p>
                          
                          <div className="flex items-center space-x-6 text-sm text-primary-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(report.createdAt)}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              Ages {report.segmentMatch.segment.ageMin}-{report.segmentMatch.segment.ageMax}
                            </div>
                            <div className="flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              {report.segmentMatch.segment.tier} Tier
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-6">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setViewingReport(report)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteReport(report.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Report Management */}
        {savedReports.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <ReportManagement 
              reports={savedReports} 
              onReportsUpdated={loadSavedReports}
            />
          </motion.div>
        )}
      </div>

      {/* Report Viewer Modal */}
      {viewingReport && (
        <ReportViewer
          report={viewingReport}
          onClose={() => setViewingReport(null)}
        />
      )}

      {/* Card Details Modal */}
      {selectedCard && (
        <CardDetailsModal
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          data={selectedCard}
          onPin={() => handlePin(selectedCard.name, selectedCard.type)}
          isPinned={
            selectedCard.type === 'segment' ? pinnedItems.segments.has(selectedCard.name) :
            selectedCard.type === 'trend' ? pinnedItems.trends.has(selectedCard.name) :
            pinnedItems.communities.has(selectedCard.name)
          }
        />
      )}
    </div>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute requireAuth={true}>
      <DashboardContent />
    </ProtectedRoute>
  )
}