'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, TrendingUp, Users, DollarSign, Star, ChevronRight, Crown, Zap, Save, BookmarkPlus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { formatPercentage, formatCurrency, cn } from '@/lib/utils'
import { digitalBehaviorMapping, valuesDriverMapping, spendingPowerMapping, creatorAffinityMapping } from '@/data/segments'
import { PremiumUpgrade } from '@/components/PremiumUpgrade'
import { LaunchStrategyReport } from '@/components/LaunchStrategyReport'
import { BasicStrategyReport } from '@/components/BasicStrategyReport'
import { PremiumInsightsGenerator } from '@/lib/premiumInsightsGenerator'
import { useAuth, useUser } from '@clerk/nextjs'
import { GISMap } from '@/components/gis/GISMap'
import { reportsService } from '@/lib/reportsService'

interface SegmentResultsProps {
  matches: SegmentMatch[]
  userInputs?: UserInputs
  onSegmentSelect?: (match: SegmentMatch) => void
}

export function SegmentResults({ matches, userInputs, onSegmentSelect }: SegmentResultsProps) {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper functions for usage tracking and permissions (simplified for now)
  const canAccessPremium = () => {
    if (!user) return false
    const publicMetadata = user.publicMetadata as any
    const subscriptionTier = publicMetadata?.subscriptionTier || 'free'
    return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'
  }
  const canSaveReport = () => true // For now, all users can save reports
  const getUsageStats = () => ({ reportsGenerated: 0, savedReports: 0 }) // Placeholder
  const [showPremiumUpgrade, setShowPremiumUpgrade] = useState(false)
  const [showPremiumReport, setShowPremiumReport] = useState(false)
  const [showBasicReport, setShowBasicReport] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<SegmentMatch | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const topMatches = matches.slice(0, 5)
  const usageStats = getUsageStats()

  const handleBasicStrategy = (match: SegmentMatch) => {
    setSelectedMatch(match)
    setShowBasicReport(true)
    onSegmentSelect?.(match)
  }

  const handlePremiumUpgrade = (match: SegmentMatch) => {
    setSelectedMatch(match)
    
    // If user can already access premium, show report directly
    if (canAccessPremium()) {
      const premiumInsights = PremiumInsightsGenerator.generatePremiumInsights(
        userInputs || {} as UserInputs,
        match
      )
      match.premiumInsights = premiumInsights
      setShowPremiumReport(true)
    } else {
      setShowPremiumUpgrade(true)
    }
  }

  const handleUpgradeComplete = () => {
    setShowPremiumUpgrade(false)
    if (selectedMatch) {
      // Generate premium insights
      const premiumInsights = PremiumInsightsGenerator.generatePremiumInsights(
        userInputs || {} as UserInputs,
        selectedMatch
      )
      selectedMatch.premiumInsights = premiumInsights
      setShowPremiumReport(true)
    }
  }

  const handleSaveReport = async (match: SegmentMatch, reportType: 'basic' | 'premium') => {
    if (!isSignedIn || !user) {
      alert('Please log in to save reports')
      return
    }

    if (!canSaveReport()) {
      const subscriptionTier = (user?.publicMetadata as any)?.subscriptionTier || 'free'
      if (subscriptionTier === 'free') {
        alert('Upgrade to Standard or Pro to save reports')
      } else if (subscriptionTier === 'standard') {
        alert('Standard users can save only 1 report. Upgrade to Pro for unlimited saves.')
      }
      return
    }

    setIsSaving(true)
    try {
      const reportData = {
        userId: user.id,
        segmentMatch: match,
        userInputs: userInputs,
        reportType,
        title: `${match.segment.name} Analysis - ${reportType === 'premium' ? 'Premium' : 'Basic'}`,
        description: `Analysis report for ${match.segment.name} segment with ${formatPercentage(match.matchScore)} match`
      }

      await reportsService.saveReport(reportData)
      alert('Report saved successfully!')
    } catch (error) {
      console.error('Error saving report:', error)
      alert('Failed to save report. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-success-500/20 text-success-400 border-success-500/30'
    if (score >= 80) return 'bg-accent-500/20 text-accent-400 border-accent-500/30'
    if (score >= 70) return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    if (score >= 60) return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    return 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center px-6 py-3 glass-card text-success-400 rounded-full text-sm font-semibold border border-success-500/20">
          <Target className="w-4 h-4 mr-2" />
          Found {matches.length} matching segments
        </div>
        <h2 className="text-4xl font-bold text-primary-50">
          Your Perfect Customer Segments
        </h2>
        <p className="text-primary-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Based on your inputs, we&apos;ve identified the most promising segments for your brand launch. 
          Start with the highest matches for maximum impact.
        </p>
        
        {/* Usage Stats for Standard Users */}
        {isSignedIn && ((user?.publicMetadata as any)?.subscriptionTier === 'standard') && (
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-lg text-sm">
            <Users className="w-4 h-4 mr-2 text-accent-400" />
            <span className="text-accent-300">
              Standard Plan: {usageStats.savedReports}/1 report saved
            </span>
          </div>
        )}
      </motion.div>

      {/* Top 3 Segments Overview */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {topMatches.slice(0, 3).map((match, index) => (
          <Card key={match.segment.id} className="border-0 hover:border-accent-500/30 transition-all cursor-pointer hover:bg-white/[0.08] group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="px-3 py-1 rounded-xl text-xs font-bold bg-accent-500 text-primary-950 inline-block mb-3">
                    {match.segment.tier}
                  </div>
                  <CardTitle className="text-xl text-primary-50 group-hover:text-white transition-colors text-left">
                    {match.segment.name}
                  </CardTitle>
                </div>
                <div className={cn("px-4 py-2 rounded-xl text-sm font-bold border ml-4 flex-shrink-0", getMatchScoreColor(match.matchScore))}>
                  {formatPercentage(match.matchScore)} match
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-300 mb-4 line-clamp-3 leading-relaxed group-hover:text-primary-200 transition-colors">
                {match.segment.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-primary-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Ages {match.segment.ageMin}-{match.segment.ageMax}</span>
                </div>
                <div className="flex items-center text-sm text-primary-400">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>{formatCurrency(match.segment.incomeMin)} - {formatCurrency(match.segment.incomeMax)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* GIS Geographic Intelligence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-primary-50 flex items-center">
          <Target className="w-6 h-6 mr-3 text-accent-400" />
          Geographic Intelligence
        </h3>
        <Card className="border-0 p-6">
          <CardContent className="p-0">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary-100 mb-2">Customer Density Heat Map</h4>
              <p className="text-sm text-primary-300 leading-relaxed">
                Interactive visualization showing where your ideal customers are concentrated across the United States. 
                Click on any zip code to see detailed demographics and customer match percentages.
              </p>
            </div>
            <GISMap height="600px" />
          </CardContent>
        </Card>
      </motion.div>

      {/* Detailed Results */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-primary-50 flex items-center">
          <Star className="w-6 h-6 mr-3 text-accent-400" />
          Detailed Analysis
        </h3>
        
        {topMatches.map((match, index) => (
          <motion.div
            key={match.segment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 hover:border-accent-500/20 transition-all hover:bg-white/[0.05] group">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-3xl font-bold text-accent-400">#{index + 1}</span>
                          <div className="px-3 py-1 rounded-xl text-xs font-bold bg-accent-500 text-primary-950">
                            {match.segment.tier}
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-primary-50 mb-2 group-hover:text-white transition-colors text-left">
                          {match.segment.name}
                        </h4>
                        <p className="text-base text-accent-300 font-medium text-left">
                          {match.segment.lifestyle}
                        </p>
                      </div>
                      <div className={cn("px-5 py-3 rounded-2xl text-xl font-bold border ml-4 flex-shrink-0", getMatchScoreColor(match.matchScore))}>
                        {formatPercentage(match.matchScore)}
                      </div>
                    </div>

                    <p className="text-base text-primary-300 leading-relaxed group-hover:text-primary-200 transition-colors">
                      {match.segment.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700/50">
                        <div className="text-primary-400 text-xs font-medium mb-1">Age Range</div>
                        <div className="font-bold text-primary-100 text-lg">
                          {match.segment.ageMin}-{match.segment.ageMax} years
                        </div>
                      </div>
                      <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700/50">
                        <div className="text-primary-400 text-xs font-medium mb-1">Income Range</div>
                        <div className="font-bold text-primary-100 text-sm">
                          {formatCurrency(match.segment.incomeMin)} - {formatCurrency(match.segment.incomeMax)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Segment Profile */}
                  <div className="space-y-6">
                    <h5 className="font-bold text-primary-100 text-lg">Segment Profile</h5>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-brand-500/10 rounded-xl border border-brand-500/20">
                        <span className="text-2xl flex-shrink-0">
                          {digitalBehaviorMapping[match.segment.digitalBehavior].icon}
                        </span>
                        <div>
                          <div className="font-semibold text-brand-300 mb-1">
                            {digitalBehaviorMapping[match.segment.digitalBehavior].name}
                          </div>
                          <div className="text-sm text-primary-400 leading-relaxed">
                            {digitalBehaviorMapping[match.segment.digitalBehavior].description}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-success-500/10 rounded-xl border border-success-500/20">
                        <span className="text-2xl flex-shrink-0">
                          {valuesDriverMapping[match.segment.valuesDriver].icon}
                        </span>
                        <div>
                          <div className="font-semibold text-success-300 mb-1">
                            {valuesDriverMapping[match.segment.valuesDriver].name}
                          </div>
                          <div className="text-sm text-primary-400 leading-relaxed">
                            {valuesDriverMapping[match.segment.valuesDriver].description}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-accent-500/10 rounded-xl border border-accent-500/20">
                        <span className="text-2xl flex-shrink-0">
                          {creatorAffinityMapping[match.segment.creatorAffinity].icon}
                        </span>
                        <div>
                          <div className="font-semibold text-accent-300 mb-1">
                            {creatorAffinityMapping[match.segment.creatorAffinity].name}
                          </div>
                          <div className="text-sm text-primary-400 leading-relaxed">
                            {creatorAffinityMapping[match.segment.creatorAffinity].description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Strategy & Reasons */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-primary-100 text-lg mb-4">Why This Matches</h5>
                      <div className="space-y-3">
                        {match.reasons.slice(0, 3).map((reason, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-success-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-primary-300 leading-relaxed">{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl border border-accent-500/20">
                      <h5 className="font-bold text-primary-100 text-base mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-accent-400" />
                        Launch Strategy
                      </h5>
                      <p className="text-sm text-primary-300 leading-relaxed mb-4">
                        {match.segment.launchStrategy}
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleBasicStrategy(match)}
                            className="flex-1"
                          >
                            Basic Strategy
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                          {isSignedIn && canSaveReport() && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleSaveReport(match, 'basic')}
                              disabled={isSaving}
                              className="px-3"
                              title="Save Basic Report"
                            >
                              <Save className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
                            size="sm"
                            onClick={() => handlePremiumUpgrade(match)}
                          >
                            <Crown className="w-4 h-4 mr-2" />
                            {canAccessPremium() ? 'View Premium Report' : 'Unlock Premium Report'}
                          </Button>
                          {isSignedIn && canAccessPremium() && canSaveReport() && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleSaveReport(match, 'premium')}
                              disabled={isSaving}
                              className="px-3"
                              title="Save Premium Report"
                            >
                              <Save className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section - Only show for non-premium users */}
      {!canAccessPremium() && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-12"
        >
          <Card className="border-0 bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20 backdrop-blur-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-primary-50 mb-4">Ready to Launch?</h3>
              <p className="text-primary-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Get detailed geographic data, influencer recommendations, and a complete launch playbook for your top segments.
              </p>
              <Button 
                variant="primary" 
                size="xl" 
                className="px-12"
                onClick={() => topMatches.length > 0 && handlePremiumUpgrade(topMatches[0])}
              >
                <Zap className="w-5 h-5 mr-2" />
                Unlock Premium Intelligence
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Premium User CTA - Show saved reports link */}
      {canAccessPremium() && isSignedIn && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-12"
        >
          <Card className="border-0 bg-gradient-to-br from-success-500/20 via-brand-600/10 to-accent-500/20 backdrop-blur-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-primary-50 mb-4">Premium Analysis Complete!</h3>
              <p className="text-primary-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Your detailed reports are ready. Save important segments and access them anytime from your dashboard.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8"
                onClick={() => window.location.href = '/dashboard'}
              >
                <BookmarkPlus className="w-5 h-5 mr-2" />
                View Saved Reports
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Premium Upgrade Modal */}
      <AnimatePresence>
        {showPremiumUpgrade && selectedMatch && (
          <PremiumUpgrade
            matchScore={selectedMatch.matchScore}
            segmentName={selectedMatch.segment.name}
            onUpgrade={handleUpgradeComplete}
            onClose={() => setShowPremiumUpgrade(false)}
          />
        )}
      </AnimatePresence>

      {/* Basic Strategy Report Modal */}
      <AnimatePresence>
        {showBasicReport && selectedMatch && (
          <BasicStrategyReport
            segmentMatch={selectedMatch}
            userInputs={userInputs}
            onClose={() => setShowBasicReport(false)}
          />
        )}
      </AnimatePresence>

      {/* Premium Report Modal */}
      <AnimatePresence>
        {showPremiumReport && selectedMatch?.premiumInsights && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div className="min-h-screen p-4">
              <div className="max-w-7xl mx-auto py-8">
                <div className="mb-8 text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowPremiumReport(false)}
                    className="mb-4"
                  >
                    ← Back to Results
                  </Button>
                </div>
                <LaunchStrategyReport
                  segmentMatch={selectedMatch}
                  premiumInsights={selectedMatch.premiumInsights}
                  onDownloadPDF={() => {
                    window.print()
                  }}
                  onPrint={() => {
                    window.print()
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}