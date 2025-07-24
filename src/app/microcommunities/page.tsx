'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Crown, Target, TrendingUp, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { MicrocommunityExploration } from '@/components/MicrocommunityExploration'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function MicrocommunitiesPage() {
  const { isAuthenticated, user, isLoading, canAccessPremium } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, isLoading, router])

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
            <span className="text-primary-200">Microcommunities</span>
          </nav>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="flex items-center px-4 py-2 bg-gradient-to-r from-accent-500/20 to-brand-500/20 border border-accent-500/30 rounded-full">
            <Crown className="w-5 h-5 mr-2 text-accent-400" />
            <span className="text-accent-300 font-semibold">
              Premium Feature
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MicrocommunityExploration />
        </motion.div>

        {/* Premium Benefits Footer */}
        {canAccessPremium() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-0 backdrop-blur-xl bg-gradient-to-br from-accent-500/10 to-brand-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-primary-50 flex items-center">
                  <Crown className="w-6 h-6 mr-3 text-accent-400" />
                  Premium Insights Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-100 mb-1">Growth Analytics</h4>
                      <p className="text-primary-300 text-sm">
                        Monthly growth rates, seasonal patterns, and future projections for each community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-100 mb-1">Influencer Network</h4>
                      <p className="text-primary-300 text-sm">
                        Detailed influencer profiles, collaboration rates, and audience match data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-100 mb-1">Geographic Insights</h4>
                      <p className="text-primary-300 text-sm">
                        Regional concentrations, city-specific variations, and local market opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-8 pt-6 border-t border-primary-700/50">
                  <p className="text-primary-300 text-center">
                    <span className="font-semibold text-primary-200">225 communities</span> ready to explore. 
                    Use these insights to identify your perfect microcommunity and connect with your ideal audience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}