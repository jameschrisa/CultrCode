'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BookmarkPlus, Calendar, Crown, Eye, Trash2, Star, Target, Users, TrendingUp, Sparkles, Activity, Bike, Gamepad2, Bot, Sprout, Footprints, Clock, Leaf, FlaskConical, Shirt, MapPin, Home, Pin, ArrowUpRight, Brain } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Tag } from '@/components/ui/Tag'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'
import { formatPercentage } from '@/lib/utils'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { ReportViewer } from '@/components/ReportViewer'
import { ReportManagement } from '@/components/ReportManagement'
import { reportsService, SavedReport } from '@/lib/reportsService'
import { CardDetailsModal } from '@/components/CardDetailsModal'
import { getSubscriptionAccess } from '@/lib/subscription'

function DashboardContent() {
  const { user } = useUser()
  
  // Get subscription access information
  const subscriptionAccess = user ? getSubscriptionAccess(user) : null
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return subscriptionAccess?.hasAdvancedFeatures || false
  }
  const [savedReports, setSavedReports] = useState<SavedReport[]>([])
  const [loading, setLoading] = useState(true)
  const [viewingReport, setViewingReport] = useState<SavedReport | null>(null)
  const [selectedCard, setSelectedCard] = useState<any>(null)
  const [savedPersonasCount, setSavedPersonasCount] = useState(1) // Mock count for saved personas
  const [showPinnedModal, setShowPinnedModal] = useState<{
    type: 'segments' | 'trends' | 'communities' | 'personas' | 'reports' | null
    title: string
    items: string[]
  }>({ type: null, title: '', items: [] })
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

  const handleStatCardClick = (type: 'segments' | 'trends' | 'communities' | 'personas' | 'reports') => {
    // Check specific access permissions based on feature type
    if (type === 'segments' && !subscriptionAccess?.canAccessAdvancedSegmentation) return
    if (type === 'trends' && !subscriptionAccess?.canAccessTrendAnalysis) return  
    if (type === 'communities' && !subscriptionAccess?.canAccessMicrocommunities) return
    if (type === 'personas' && !subscriptionAccess?.canAccessPersonas) return
    if (type === 'reports' && !subscriptionAccess?.canAccessAnalytics) return
    
    let title = ''
    let items: string[] = []
    
    switch (type) {
      case 'segments':
        title = 'Pinned Segments'
        items = Array.from(pinnedItems.segments)
        break
      case 'trends':
        title = 'Pinned Trends'
        items = Array.from(pinnedItems.trends)
        break
      case 'communities':
        title = 'Pinned Communities'
        items = Array.from(pinnedItems.communities)
        break
      case 'personas':
        title = 'Saved Personas'
        items = ['Eco-Conscious Emma'] // Mock data - in production this would come from API
        break
      case 'reports':
        title = 'Saved Reports'
        items = savedReports.map(report => `Analysis Report - ${formatDate(report.createdAt)}`)
        break
    }
    
    setShowPinnedModal({ type, title, items })
  }

  const handleUnpin = (itemName: string, type: 'segments' | 'trends' | 'communities' | 'personas' | 'reports') => {
    if (type === 'personas') {
      // Handle persona deletion - in production this would call an API
      setShowPinnedModal(prev => ({
        ...prev,
        items: prev.items.filter(item => item !== itemName)
      }))
      return
    }
    
    if (type === 'reports') {
      // Handle report deletion - find the report by name and delete it
      const reportToDelete = savedReports.find(report => `Analysis Report - ${formatDate(report.createdAt)}` === itemName)
      if (reportToDelete) {
        deleteReport(reportToDelete.id)
        // Update modal items
        setShowPinnedModal(prev => ({
          ...prev,
          items: prev.items.filter(item => item !== itemName)
        }))
      }
      return
    }
    
    setPinnedItems(prev => {
      const key = type
      const newSet = new Set(prev[key])
      newSet.delete(itemName)
      
      // Update modal items
      setShowPinnedModal(prevModal => ({
        ...prevModal,
        items: Array.from(newSet)
      }))
      
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
                Welcome back, {user?.firstName || 'Creator'}! 👋
              </h1>
              {subscriptionAccess && subscriptionAccess.displayName !== 'Free' && (
                <div className="flex justify-center mb-3">
                  <div className="inline-flex items-center px-3 py-1 bg-accent-500/20 border border-accent-500/30 rounded-full">
                    <Crown className="w-4 h-4 text-accent-400 mr-2" />
                    <span className="text-accent-300 text-sm font-semibold">
                      {subscriptionAccess.displayName}
                    </span>
                  </div>
                </div>
              )}
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
          </div>

          {/* Desktop Header Layout */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-4xl font-bold text-primary-50">
                  Welcome back, {user?.firstName || 'Creator'}! 👋
                </h1>
                {subscriptionAccess && subscriptionAccess.displayName !== 'Free' && (
                  <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full">
                    <Crown className="w-5 h-5 text-accent-400 mr-2" />
                    <span className="text-accent-300 font-semibold">
                      {subscriptionAccess.displayName}
                    </span>
                  </div>
                )}
              </div>
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
            </div>
          </div>

          {/* Tool Access Buttons - Single Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {subscriptionAccess?.canAccessAdvancedSegmentation && (
              <Button
                variant="outline"
                onClick={() => window.location.href = '/advanced-segmentation'}
                className="p-4 h-auto flex items-center justify-start space-x-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 hover:border-accent-400 transition-all duration-300"
              >
                <Target className="w-5 h-5 text-accent-400" />
                <div className="text-left">
                  <div className="font-medium text-primary-50">Advanced Segmentation</div>
                  <div className="text-xs text-primary-400">Hyperlocal targeting</div>
                </div>
              </Button>
            )}
            
            {/* Basic Segments for Community Explorer */}
            {subscriptionAccess?.hasBasicFeatures && !subscriptionAccess?.canAccessAdvancedSegmentation && (
              <Button
                variant="outline"
                onClick={() => window.location.href = '/segments'}
                className="p-4 h-auto flex items-center justify-start space-x-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 hover:border-accent-400 transition-all duration-300"
              >
                <Target className="w-5 h-5 text-accent-400" />
                <div className="text-left">
                  <div className="font-medium text-primary-50">Segments</div>
                  <div className="text-xs text-primary-400">Audience targeting</div>
                </div>
              </Button>
            )}
            
            {subscriptionAccess?.canAccessMicrocommunities && (
              <Button
                variant="outline"
                onClick={() => window.location.href = '/microcommunities'}
                className="p-4 h-auto flex items-center justify-start space-x-3 rounded-xl hover:shadow-lg hover:shadow-brand-500/20 hover:border-brand-400 transition-all duration-300"
              >
                <Users className="w-5 h-5 text-brand-400" />
                <div className="text-left">
                  <div className="font-medium text-primary-50">Micro-Communities</div>
                  <div className="text-xs text-primary-400">135+ niche communities</div>
                </div>
              </Button>
            )}
            
            {subscriptionAccess?.canAccessTrendAnalysis && (
              <Button
                variant="outline"
                onClick={() => window.location.href = '/trends'}
                className="p-4 h-auto flex items-center justify-start space-x-3 rounded-xl hover:shadow-lg hover:shadow-success-500/20 hover:border-success-400 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 text-success-400" />
                <div className="text-left">
                  <div className="font-medium text-primary-50">Emerging Trends</div>
                  <div className="text-xs text-primary-400">Creator economy insights</div>
                </div>
              </Button>
            )}
            
            {subscriptionAccess?.canAccessPersonas && (
              <Button
                variant="outline"
                onClick={() => window.location.href = '/personas'}
                className="p-4 h-auto flex items-center justify-start space-x-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-400 transition-all duration-300"
              >
                <Brain className="w-5 h-5 text-purple-400" />
                <div className="text-left">
                  <div className="font-medium text-primary-50">Generated Personas</div>
                  <div className="text-xs text-primary-400">
                    {subscriptionAccess?.hasAdvancedFeatures ? 'AI-powered personas' : 'Basic personas (3 max)'}
                  </div>
                </div>
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className={`border-0 transition-all duration-200 ${canAccessPremium() ? 'cursor-pointer hover:border-accent-500/30' : ''}`} onClick={() => canAccessPremium() && handleStatCardClick('reports')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Saved Reports</p>
                    <p className="text-3xl font-bold text-primary-50">{savedReports.length}</p>
                  </div>
                  <BookmarkPlus className="w-8 h-8 text-accent-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className={`border-0 transition-all duration-200 ${subscriptionAccess?.canAccessPersonas ? 'cursor-pointer hover:border-accent-500/30' : ''}`} onClick={() => subscriptionAccess?.canAccessPersonas ? handleStatCardClick('personas') : window.location.href = '/personas'}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-400 text-sm font-medium">Saved Personas</p>
                    <p className="text-3xl font-bold text-primary-50">
                      {savedPersonasCount}
                      {subscriptionAccess && !subscriptionAccess.hasAdvancedFeatures && subscriptionAccess.canAccessPersonas && (
                        <span className="text-sm text-primary-400 ml-1">/3</span>
                      )}
                    </p>
                  </div>
                  <Brain className="w-8 h-8 text-accent-400" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <Card className={`border-0 transition-all duration-200 ${canAccessPremium() ? 'cursor-pointer hover:border-accent-500/30' : ''}`} onClick={() => canAccessPremium() && handleStatCardClick('segments')}>
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
            
            <Card className={`border-0 transition-all duration-200 ${canAccessPremium() ? 'cursor-pointer hover:border-accent-500/30' : ''}`} onClick={() => canAccessPremium() && handleStatCardClick('trends')}>
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

            <Card className={`border-0 transition-all duration-200 ${canAccessPremium() ? 'cursor-pointer hover:border-accent-500/30' : ''}`} onClick={() => canAccessPremium() && handleStatCardClick('communities')}>
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

        {/* Navigation Cards - New Image-Based Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Segments Navigation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="glass-card hover:border-accent-500/70 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:scale-[1.02] shadow-lg hover:shadow-accent-500/10 border border-accent-500/20 h-[400px]"
                      onClick={() => window.location.href = '/segments'}>
                  <CardContent className="p-0 relative z-10 h-full">
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Image Section */}
                      <div className="w-full lg:w-2/5 h-48 lg:h-full relative">
                        <img
                          src="/images/segments.png"
                          alt="Segments"
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-900/60 lg:to-primary-900/80" />
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 p-6 lg:p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-primary-50 group-hover:text-accent-100 transition-colors duration-300">
                            CultrCode Segments
                          </h3>
                        </div>
                        
                        <p className="text-primary-300 text-sm lg:text-base font-medium mb-4">
                          48 precision audience segments
                        </p>
                        
                        <p className="text-primary-400 text-sm mb-6 leading-relaxed flex-1">
                          Explore our comprehensive framework of audience segments built specifically for creator brands. 
                          Discover your ideal customers across 4 tiers of engagement.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-red-400 mb-1">9</div>
                            <div className="text-xs text-primary-500">Brand Evangelists</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-orange-400 mb-1">15</div>
                            <div className="text-xs text-primary-500">Early Believers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-blue-400 mb-1">12</div>
                            <div className="text-xs text-primary-500">Quality Seekers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-purple-400 mb-1">12</div>
                            <div className="text-xs text-primary-500">Micro-Segments</div>
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={(e) => {e.stopPropagation(); window.location.href = '/segments'}}
                          className="w-full group-hover:border-accent-400 group-hover:text-accent-300 group-hover:bg-accent-500/10 transition-all duration-300 font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-500/20 text-sm"
                        >
                          Explore All Segments →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Micro-Communities Navigation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="glass-card hover:border-brand-500/70 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:scale-[1.02] shadow-lg hover:shadow-brand-500/10 border border-brand-500/20 h-[400px]"
                      onClick={() => window.location.href = '/microcommunities'}>
                  <CardContent className="p-0 relative z-10 h-full">
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Image Section */}
                      <div className="w-full lg:w-2/5 h-48 lg:h-full relative">
                        <img
                          src="/images/micro-communites.png"
                          alt="Micro-Communities"
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-900/60 lg:to-primary-900/80" />
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 p-6 lg:p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-primary-50 group-hover:text-brand-100 transition-colors duration-300">
                            Micro-Communities
                          </h3>
                        </div>
                        
                        <p className="text-primary-300 text-sm lg:text-base font-medium mb-4">
                          135+ niche communities
                        </p>
                        
                        <p className="text-primary-400 text-sm mb-6 leading-relaxed flex-1">
                          Discover where your audience naturally gathers. Find active communities across 8 major categories 
                          with detailed engagement and growth metrics.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-green-400 mb-1">24</div>
                            <div className="text-xs text-primary-500">Very High Engagement</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-accent-400 mb-1">18</div>
                            <div className="text-xs text-primary-500">Exploding Growth</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-brand-400 mb-1">8</div>
                            <div className="text-xs text-primary-500">Major Categories</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg lg:text-2xl font-bold text-purple-400 mb-1">50M+</div>
                            <div className="text-xs text-primary-500">Total Members</div>
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={(e) => {e.stopPropagation(); window.location.href = '/microcommunities'}}
                          className="w-full group-hover:border-brand-400 group-hover:text-brand-300 group-hover:bg-brand-500/10 transition-all duration-300 font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/20 text-sm"
                        >
                          Explore All Communities →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
        </motion.div>

        
        {/* Emerging Trends Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="glass-card hover:border-success-500/70 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:scale-[1.01] shadow-lg hover:shadow-success-500/10 border border-success-500/20"
                onClick={() => window.location.href = '/trends'}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-success-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-success-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-50 group-hover:text-success-100 transition-colors duration-300">
                      Emerging Trends
                    </h2>
                    <p className="text-primary-300 text-lg">
                      Real-time cultural movement intelligence
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={(e) => {e.stopPropagation(); window.location.href = '/trends'}}
                  className="group-hover:border-success-400 group-hover:text-success-300 group-hover:bg-success-500/10 transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-success-500/20"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View All Trends
                </Button>
              </div>

              {/* Top 3 Trending Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-primary-800/30 rounded-xl border border-primary-700/30">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Footprints className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-bold text-primary-50 mb-1">Silent Walking</h3>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <span className="text-red-400 font-medium">89 virality</span>
                    <span className="text-primary-400">•</span>
                    <span className="text-success-400">+342%</span>
                  </div>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                    Peak
                  </span>
                </div>
                
                <div className="text-center p-4 bg-primary-800/30 rounded-xl border border-primary-700/30">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-primary-50 mb-1">Regenerative Beauty</h3>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <span className="text-blue-400 font-medium">83 virality</span>
                    <span className="text-primary-400">•</span>
                    <span className="text-success-400">+267%</span>
                  </div>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Emerging
                  </span>
                </div>
                
                <div className="text-center p-4 bg-primary-800/30 rounded-xl border border-primary-700/30">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-primary-50 mb-1">Micro-Dosing Productivity</h3>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <span className="text-orange-400 font-medium">76 virality</span>
                    <span className="text-primary-400">•</span>
                    <span className="text-success-400">+198%</span>
                  </div>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                    Growing
                  </span>
                </div>
              </div>

              {/* Overall Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-primary-700/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-400 mb-1">156</div>
                  <div className="text-xs text-primary-400">Active Trends</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400 mb-1">24</div>
                  <div className="text-xs text-primary-400">Peak Virality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-400 mb-1">12</div>
                  <div className="text-xs text-primary-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">89%</div>
                  <div className="text-xs text-primary-400">Avg Growth</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Communities Section - Only for non-premium users */}
        {!canAccessPremium() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-primary-50 mb-6">Trending Micro-Communities Feed</h2>
            
            <div className="text-center py-8">
              <p className="text-primary-400">Communities content coming soon...</p>
            </div>
          </motion.div>
        )}

        {/* Saved Reports - Only for non-premium users */}
        {!canAccessPremium() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary-50 mb-6">Saved Reports</h2>
            
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full"></div>
              </div>
            ) : savedReports.length === 0 ? (
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-300 mb-2">No Reports Yet</h3>
                  <p className="text-primary-500 mb-4">Start by generating your first audience analysis report</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/analysis'}
                    className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                  >
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-8">
                {savedReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-card hover:border-accent-500/50 transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                report.reportType === 'premium' 
                                  ? 'bg-accent-500/20 text-accent-400 border-accent-500/30'
                                  : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                              }`}>
                                {report.reportType === 'premium' ? 'Premium' : 'Basic'}
                              </div>
                              <span className="text-xs text-primary-400">
                                {formatDate(report.createdAt)}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-primary-50 mb-2">
                              Analysis Report
                            </h3>
                            
                            <div className="flex items-center space-x-4 text-sm text-primary-300 mb-4">
                              <span>Top Match: <span className="text-success-400 font-medium">92%</span></span>
                              <span>•</span>
                              <span>
                                {report.segmentMatch ? 1 : 0} segments analyzed
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setViewingReport(report)}
                              className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteReport(report.id)}
                              className="text-red-400 border-red-500/30 hover:bg-red-500/10 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
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
        )}

        {/* Report Management - Only for non-premium users */}
        {!canAccessPremium() && savedReports.length > 0 && (
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
          isOpen={true}
          data={selectedCard}
          onClose={() => setSelectedCard(null)}
          onPin={() => {
            const cardType = selectedCard.type === 'segment' ? 'segments' : 
                           selectedCard.type === 'trend' ? 'trends' : 'communities'
            handlePin(selectedCard.name, selectedCard.type)
          }}
          isPinned={
            selectedCard.type === 'segment' ? pinnedItems.segments.has(selectedCard.name) :
            selectedCard.type === 'trend' ? pinnedItems.trends.has(selectedCard.name) :
            pinnedItems.communities.has(selectedCard.name)
          }
        />
      )}

      {/* Pinned Items Modal */}
      {showPinnedModal.type && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-xl border border-primary-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    {showPinnedModal.type === 'segments' && <Target className="w-6 h-6 text-accent-400" />}
                    {showPinnedModal.type === 'trends' && <TrendingUp className="w-6 h-6 text-success-400" />}
                    {showPinnedModal.type === 'communities' && <Users className="w-6 h-6 text-blue-400" />}
                    {showPinnedModal.type === 'personas' && <Brain className="w-6 h-6 text-accent-400" />}
                    {showPinnedModal.type === 'reports' && <BookmarkPlus className="w-6 h-6 text-accent-400" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-50">{showPinnedModal.title}</h2>
                    <p className="text-primary-300">{showPinnedModal.items.length} {showPinnedModal.items.length === 1 ? 'item' : 'items'}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPinnedModal({ type: null, title: '', items: [] })}
                  className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                >
                  ✕
                </Button>
              </div>

              {showPinnedModal.items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    {showPinnedModal.type === 'segments' && <Target className="w-8 h-8 text-primary-400" />}
                    {showPinnedModal.type === 'trends' && <TrendingUp className="w-8 h-8 text-primary-400" />}
                    {showPinnedModal.type === 'communities' && <Users className="w-8 h-8 text-primary-400" />}
                    {showPinnedModal.type === 'personas' && <Brain className="w-8 h-8 text-primary-400" />}
                    {showPinnedModal.type === 'reports' && <BookmarkPlus className="w-8 h-8 text-primary-400" />}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-300 mb-2">No {showPinnedModal.title}</h3>
                  <p className="text-primary-500">
                    {showPinnedModal.type === 'personas' 
                      ? 'Create your first persona to get started'
                      : showPinnedModal.type === 'reports'
                      ? 'Generate your first analysis report to get started'
                      : `Pin ${showPinnedModal.type} from the dashboard to see them here`
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {showPinnedModal.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-primary-800/50 rounded-xl border border-primary-700/50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                          {showPinnedModal.type === 'segments' && <Target className="w-4 h-4 text-accent-400" />}
                          {showPinnedModal.type === 'trends' && <TrendingUp className="w-4 h-4 text-success-400" />}
                          {showPinnedModal.type === 'communities' && <Users className="w-4 h-4 text-blue-400" />}
                          {showPinnedModal.type === 'personas' && <Brain className="w-4 h-4 text-accent-400" />}
                          {showPinnedModal.type === 'reports' && <BookmarkPlus className="w-4 h-4 text-accent-400" />}
                        </div>
                        <span className="text-primary-100 font-medium">{item}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnpin(item, showPinnedModal.type!)}
                        className="text-red-400 border-red-500/30 hover:bg-red-500/10 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        {showPinnedModal.type === 'personas' || showPinnedModal.type === 'reports' ? 'Delete' : 'Unpin'}
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-primary-700">
                <Button
                  variant="outline"
                  className="w-full rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                  onClick={() => setShowPinnedModal({ type: null, title: '', items: [] })}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
