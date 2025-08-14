'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Crown, Target, TrendingUp, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { SegmentFinder } from '@/components/SegmentFinder'
import { SegmentResults } from '@/components/SegmentResults'
import { PremiumEnhancement } from '@/components/PremiumEnhancement'
import { useAuth, useUser } from '@clerk/nextjs'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { SegmentMatcher } from '@/lib/segmentMatcher'
import { canAccessFeature } from '@/lib/subscription'
import Link from 'next/link'

export default function AdvancedSegmentationPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return canAccessFeature(user, 'canAccessAdvancedSegmentation')
  }
  const router = useRouter()
  const [currentView, setCurrentView] = useState<'finder' | 'enhancement' | 'results'>('finder')
  const [results, setResults] = useState<SegmentMatch[]>([])
  const [userInputs, setUserInputs] = useState<UserInputs | null>(null)
  
  const handleFormComplete = (inputs: UserInputs) => {
    setUserInputs(inputs)
    setCurrentView('enhancement')
  }

  const handleEnhancement = (enhancedInputs: UserInputs) => {
    const matches = SegmentMatcher.matchSegments(enhancedInputs)
    setResults(matches)
    setUserInputs(enhancedInputs)
    setCurrentView('results')
  }

  const handleSkipEnhancement = () => {
    if (userInputs) {
      const matches = SegmentMatcher.matchSegments(userInputs)
      setResults(matches)
      setCurrentView('results')
    }
  }
  
  const handleNewSearch = () => {
    setResults([])
    setUserInputs(null)
    setCurrentView('finder')
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    } else if (isLoaded && isSignedIn && !canAccessPremium()) {
      router.push('/pricing')
    }
  }, [isSignedIn, isLoaded, canAccessPremium, router])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isSignedIn || !canAccessPremium()) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-primary-50">Advanced Segmentation</h1>
                <p className="text-primary-300 mt-1">
                  Hyperlocal targeting with comprehensive market intelligence
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent-500/20 rounded-lg border border-accent-500/30">
              <Crown className="w-5 h-5 text-accent-400" />
              <span className="text-accent-300 font-medium">Premium Feature</span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="p-4 bg-primary-800/50 rounded-lg border border-primary-700/50"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-medium text-primary-100">City Targeting</h3>
                  <p className="text-sm text-primary-400">25+ North American cities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-primary-800/50 rounded-lg border border-primary-700/50"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-medium text-primary-100">Micro-Communities</h3>
                  <p className="text-sm text-primary-400">6+ niche segments</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-primary-800/50 rounded-lg border border-primary-700/50"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success-500/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-success-400" />
                </div>
                <div>
                  <h3 className="font-medium text-primary-100">Market Analysis</h3>
                  <p className="text-sm text-primary-400">Creator economy insights</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-primary-800/50 rounded-lg border border-primary-700/50"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-primary-100">Cross-References</h3>
                  <p className="text-sm text-primary-400">Market opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-0 backdrop-blur-xl bg-primary-800/50">
            <CardHeader>
              <CardTitle className="text-xl text-primary-50 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent-400" />
                Advanced Audience Segmentation
              </CardTitle>
              <p className="text-primary-300">
                Use our advanced tools to identify highly specific audience segments with geographic precision. 
                Perfect for brands looking to test new markets or creators expanding their reach.
              </p>
            </CardHeader>
            <CardContent>
              {currentView === 'finder' && (
                <SegmentFinder isPremiumMode={true} onResults={handleFormComplete} />
              )}
              
              {currentView === 'enhancement' && userInputs && (
                <PremiumEnhancement 
                  userInputs={userInputs}
                  onEnhance={handleEnhancement}
                  onSkip={handleSkipEnhancement}
                />
              )}
              
              {currentView === 'results' && results.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-primary-100">Your Segment Matches</h3>
                    <Button 
                      variant="outline" 
                      onClick={handleNewSearch}
                      className="flex items-center"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      New Search
                    </Button>
                  </div>
                  <SegmentResults 
                    matches={results} 
                    userInputs={userInputs || undefined}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Premium Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="border border-accent-500/30 bg-gradient-to-r from-accent-500/10 to-brand-500/10">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-500/20 rounded-lg">
                  <Crown className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-2">
                    You&apos;re using {(user?.publicMetadata as any)?.subscriptionTier === 'enterprise' ? 'Enterprise' : (user?.publicMetadata as any)?.subscriptionTier === 'premium' ? 'Premium' : 'Free'} features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-primary-300">
                    <div>
                      <strong className="text-accent-300">✓ Unlimited Reports:</strong> Generate as many segmentation reports as you need
                    </div>
                    <div>
                      <strong className="text-brand-300">✓ Save & Export:</strong> Save reports and export data for your team
                    </div>
                    <div>
                      <strong className="text-success-300">✓ Hyperlocal Data:</strong> City-level targeting and micro-community insights
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}