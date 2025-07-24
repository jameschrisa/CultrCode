'use client'

import { motion } from 'framer-motion'
import { Crown, FileText, MapPin, Users, TrendingUp, Download, CheckCircle, Star, Zap } from 'lucide-react'
import { FaMapMarkedAlt, FaFileInvoiceDollar } from 'react-icons/fa'
import { RiBrainFill } from 'react-icons/ri'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

interface PremiumUpgradeProps {
  onUpgrade?: () => void
  onClose?: () => void
  matchScore?: number
  segmentName?: string
}

export function PremiumUpgrade({ onUpgrade, onClose, matchScore, segmentName }: PremiumUpgradeProps) {
  const premiumFeatures = [
    {
      icon: FileText,
      title: 'Detailed Launch Strategy Report',
      description: 'Comprehensive 15-page printable strategy with week-by-week execution plan',
      highlight: 'PDF Export Ready'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'ZIP Code Intelligence',
      description: 'Precise geographic data showing where your customers live down to ZIP code level',
      highlight: 'GIS-Powered'
    },
    {
      icon: Users,
      title: 'Customer Personas',
      description: 'Detailed persona profiles with demographics, psychographics, and behavior patterns',
      highlight: '3D Demographics'
    },
    {
      icon: TrendingUp,
      title: 'Competitor Analysis',
      description: 'Deep competitive intelligence and market positioning recommendations',
      highlight: 'AI-Driven'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Budget Allocation Framework',
      description: 'Optimized spending recommendations across all marketing channels',
      highlight: 'ROI Focused'
    },
    {
      icon: RiBrainFill,
      title: 'Advanced AI Insights',
      description: 'Machine learning predictions for campaign performance and customer lifetime value',
      highlight: 'Predictive'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-primary-950 border border-primary-700 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        {/* Header */}
        <div className="p-8 border-b border-primary-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl">
                <Crown className="w-8 h-8 text-accent-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-50">Unlock Premium Intelligence</h2>
                <p className="text-primary-300">Get the complete picture for your {segmentName} segment</p>
              </div>
            </div>
            {onClose && (
              <Button variant="ghost" onClick={onClose} className="text-primary-400">
                ✕
              </Button>
            )}
          </div>

          {matchScore && (
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-accent-400">{matchScore}% Match</div>
                  <div className="text-primary-300">Perfect alignment detected</div>
                </div>
                <div className="flex items-center space-x-2 text-success-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">High Confidence</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-accent-500/30 transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent-500/20 rounded-xl group-hover:bg-accent-500/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-primary-50">{feature.title}</h3>
                      <span className="text-xs bg-accent-500/20 text-accent-300 px-2 py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-primary-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-50 mb-2">Choose Your Plan</h3>
              <p className="text-primary-300">Unlock insights that drive results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Standard Report */}
              <Card className="border border-primary-700 glass-card">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-primary-50">Standard Report</CardTitle>
                  <div className="text-3xl font-bold text-primary-100">
                    $49
                    <span className="text-lg font-normal text-primary-400">/report</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Detailed launch strategy',
                      'Customer personas',
                      'ZIP code analysis',
                      'PDF export'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-400" />
                        <span className="text-primary-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Get Report
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-accent-500 glass-card relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-primary-950 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-primary-50">Pro Intelligence</CardTitle>
                  <div className="text-3xl font-bold text-accent-400">
                    $149
                    <span className="text-lg font-normal text-primary-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Everything in Standard',
                      'Competitor deep-dive',
                      'Advanced AI predictions',
                      'Budget optimization',
                      'Monthly updates',
                      'Priority support'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-400" />
                        <span className="text-primary-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-accent-500 hover:bg-accent-600" 
                    onClick={onUpgrade}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Start Pro Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="border border-primary-700 glass-card">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-primary-50">Enterprise</CardTitle>
                  <div className="text-3xl font-bold text-primary-100">
                    Custom
                    <span className="text-lg font-normal text-primary-400">/team</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Everything in Pro',
                      'Multi-brand analysis',
                      'Team collaboration',
                      'Custom integrations',
                      'Dedicated support'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-400" />
                        <span className="text-primary-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-primary-700">
            <div className="flex items-center justify-center space-x-8 text-sm text-primary-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full" />
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}