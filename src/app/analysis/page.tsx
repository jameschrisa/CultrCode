'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Sparkles, ArrowRight, ChevronLeft, ChevronRight, Crown, Users, MapPin, Zap, Brain, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'
import { SegmentFinder } from '@/components/SegmentFinder'
import { SegmentResults } from '@/components/SegmentResults'
import { SegmentMatch, UserInputs } from '@/types/segments'

// Sample emerging micro-communities data
const emergingCommunities = [
  {
    id: 1,
    name: "Digital Nomad Parents",
    growth: "+340%",
    size: "2.1M",
    description: "Parents working remotely while traveling, seeking family-friendly co-working spaces and educational tools.",
    trending: ["Remote Education", "Family Travel", "Work-Life Balance"],
    location: "Global, concentrated in Latin America & SE Asia",
    avgIncome: "$75,000-$120,000",
    ageRange: "28-42"
  },
  {
    id: 2,
    name: "Climate-Conscious Gen Alpha",
    growth: "+280%",
    size: "1.8M",
    description: "Gen Alpha (ages 10-14) driving family purchasing decisions around sustainability and climate action.",
    trending: ["Sustainable Products", "Climate Education", "Eco-Gaming"],
    location: "Urban areas, California, NY, Portland",
    avgIncome: "Family: $90,000-$180,000",
    ageRange: "10-14 (influence family)"
  },
  {
    id: 3,
    name: "AI-Native Creators",
    growth: "+520%",
    size: "850K",
    description: "Content creators building their entire brand around AI tools, automation, and digital-first workflows.",
    trending: ["AI Tools", "Automation", "Digital Workflows"],
    location: "Global, concentrated in tech hubs",
    avgIncome: "$45,000-$200,000",
    ageRange: "18-35"
  },
  {
    id: 4,
    name: "Micro-Luxury Minimalists",
    growth: "+180%",
    size: "3.2M",
    description: "Consumers who buy fewer, but significantly higher-quality items. Focus on craftsmanship over quantity.",
    trending: ["Artisan Products", "Lifetime Warranties", "Heritage Brands"],
    location: "Major metros, high-income suburbs",
    avgIncome: "$85,000-$250,000",
    ageRange: "25-45"
  },
  {
    id: 5,
    name: "Social Commerce Seniors",
    growth: "+450%",
    size: "4.1M",
    description: "Baby Boomers and Gen X discovering social media shopping, especially video-based commerce.",
    trending: ["Video Commerce", "Easy Checkout", "Trust Signals"],
    location: "Suburban and rural areas nationwide",
    avgIncome: "$55,000-$120,000",
    ageRange: "55-75"
  }
]

// Sample segment updates
const segmentUpdates = [
  {
    id: 1,
    segment: "Tech-Forward Millennials",
    update: "Increased spending on AI productivity tools by 85% in Q4 2024",
    impact: "High",
    trend: "up",
    details: "Major shift toward AI-assisted workflows and automated personal finance tools."
  },
  {
    id: 2,
    segment: "Sustainable Living Advocates",
    update: "New preference for local, zero-waste subscription services",
    impact: "Medium",
    trend: "up",
    details: "60% increase in local subscription preferences over national brands."
  },
  {
    id: 3,
    segment: "Digital Health Enthusiasts",
    update: "Mental health apps seeing 200% growth in engagement",
    impact: "High",
    trend: "up",
    details: "Meditation, therapy, and wellness apps dominating health tech spending."
  },
  {
    id: 4,
    segment: "Creator Economy Participants",
    update: "Shift from influencer marketing to micro-community building",
    impact: "High",
    trend: "pivot",
    details: "Focus moving from follower count to engagement depth and community value."
  }
]

function AdvancedAnalysisContent() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    if (!user) return false
    const publicMetadata = user.publicMetadata as any
    const subscriptionTier = publicMetadata?.subscriptionTier || 'free'
    return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'
  }
  const [currentView, setCurrentView] = useState<'form' | 'results'>('form')
  const [segmentMatches, setSegmentMatches] = useState<SegmentMatch[]>([])
  const [userInputs, setUserInputs] = useState<UserInputs | null>(null)
  const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0)
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0)

  const handleResults = (matches: SegmentMatch[], inputs: UserInputs) => {
    setSegmentMatches(matches)
    setUserInputs(inputs)
    setCurrentView('results')
  }

  const handleBack = () => {
    setCurrentView('form')
  }

  const nextCommunity = () => {
    setCurrentCommunityIndex((prev) => (prev + 1) % emergingCommunities.length)
  }

  const prevCommunity = () => {
    setCurrentCommunityIndex((prev) => (prev - 1 + emergingCommunities.length) % emergingCommunities.length)
  }

  const nextUpdate = () => {
    setCurrentUpdateIndex((prev) => (prev + 1) % segmentUpdates.length)
  }

  const prevUpdate = () => {
    setCurrentUpdateIndex((prev) => (prev - 1 + segmentUpdates.length) % segmentUpdates.length)
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-success-400" />
      case 'pivot': return <Target className="w-4 h-4 text-accent-400" />
      default: return <TrendingUp className="w-4 h-4 text-success-400" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-accent-400 bg-accent-500/20'
      case 'Medium': return 'text-blue-400 bg-blue-500/20'
      case 'Low': return 'text-primary-400 bg-primary-500/20'
      default: return 'text-primary-400 bg-primary-500/20'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
      </div>

      <Header showBackButton={currentView === 'results'} onBack={handleBack} />
      
      <main className="relative z-10">
        {currentView === 'form' ? (
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20 mb-6">
                <Brain className="w-5 h-5 mr-2" />
                Advanced Intelligence Platform
                {canAccessPremium() && <Crown className="w-4 h-4 ml-2" />}
              </div>
              
              <h1 className="text-5xl font-black text-primary-50 leading-tight mb-6">
                Advanced Audience
                <span className="gradient-text block">Intelligence</span>
              </h1>
              
              <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
                Access our most sophisticated analysis tools, real-time segment updates, and emerging micro-community insights.
              </p>
            </motion.div>

            {/* Enhanced Segment Finder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <SegmentFinder onResults={handleResults} />
            </motion.div>

            {/* Emerging Communities Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary-50 mb-2">Emerging Micro-Communities</h2>
                  <p className="text-primary-300">New audience segments with high growth potential</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={prevCommunity}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-primary-400 text-sm">
                    {currentCommunityIndex + 1} of {emergingCommunities.length}
                  </span>
                  <Button variant="ghost" size="sm" onClick={nextCommunity}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Card className="border-0">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-50 mb-2">
                            {emergingCommunities[currentCommunityIndex].name}
                          </h3>
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="px-3 py-1 bg-success-500/20 text-success-400 rounded-lg text-sm font-medium">
                              {emergingCommunities[currentCommunityIndex].growth} growth
                            </div>
                            <div className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-lg text-sm font-medium">
                              {emergingCommunities[currentCommunityIndex].size} audience
                            </div>
                          </div>
                        </div>
                        <Sparkles className="w-8 h-8 text-accent-400" />
                      </div>

                      <p className="text-primary-300 leading-relaxed">
                        {emergingCommunities[currentCommunityIndex].description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-primary-200 mb-2">Trending Interests</h4>
                          <div className="flex flex-wrap gap-2">
                            {emergingCommunities[currentCommunityIndex].trending.map((trend, index) => (
                              <span key={index} className="px-3 py-1 bg-brand-500/20 text-brand-300 rounded-lg text-sm">
                                {trend}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-primary-800/50 p-3 rounded-lg">
                            <div className="text-primary-400 text-xs font-medium mb-1">Location</div>
                            <div className="text-primary-100">{emergingCommunities[currentCommunityIndex].location}</div>
                          </div>
                          <div className="bg-primary-800/50 p-3 rounded-lg">
                            <div className="text-primary-400 text-xs font-medium mb-1">Age Range</div>
                            <div className="text-primary-100">{emergingCommunities[currentCommunityIndex].ageRange}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-accent-500/10 to-brand-500/10 p-6 rounded-2xl border border-accent-500/20">
                        <h4 className="font-semibold text-primary-100 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-accent-400" />
                          Targeting Opportunity
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-primary-300">Market Size:</span>
                            <span className="text-primary-100 font-medium">{emergingCommunities[currentCommunityIndex].size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-primary-300">Growth Rate:</span>
                            <span className="text-success-400 font-medium">{emergingCommunities[currentCommunityIndex].growth}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-primary-300">Avg Income:</span>
                            <span className="text-primary-100 font-medium">{emergingCommunities[currentCommunityIndex].avgIncome}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-4">
                          <Eye className="w-4 h-4 mr-2" />
                          Analyze This Community
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Segment Updates Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary-50 mb-2">Latest Segment Updates</h2>
                  <p className="text-primary-300">Real-time insights from existing audience segments</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={prevUpdate}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-primary-400 text-sm">
                    {currentUpdateIndex + 1} of {segmentUpdates.length}
                  </span>
                  <Button variant="ghost" size="sm" onClick={nextUpdate}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Card className="border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-3 bg-accent-500/20 rounded-xl">
                      {getTrendIcon(segmentUpdates[currentUpdateIndex].trend)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-primary-50">
                          {segmentUpdates[currentUpdateIndex].segment}
                        </h3>
                        <div className={`px-3 py-1 rounded-lg text-xs font-medium ${getImpactColor(segmentUpdates[currentUpdateIndex].impact)}`}>
                          {segmentUpdates[currentUpdateIndex].impact} Impact
                        </div>
                      </div>
                      <p className="text-lg text-primary-200 mb-3">
                        {segmentUpdates[currentUpdateIndex].update}
                      </p>
                      <p className="text-primary-400 leading-relaxed">
                        {segmentUpdates[currentUpdateIndex].details}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          <div className="px-4 py-12">
            <SegmentResults 
              matches={segmentMatches}
              userInputs={userInputs || undefined}
              onSegmentSelect={(match) => {
                console.log('Selected segment:', match)
              }}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default function AdvancedAnalysis() {
  return (
    <ProtectedRoute requireAuth={true}>
      <AdvancedAnalysisContent />
    </ProtectedRoute>
  )
}