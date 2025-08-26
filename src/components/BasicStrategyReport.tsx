'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Target, 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Lightbulb, 
  ArrowRight,
  CheckCircle,
  Download,
  Printer
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { formatPercentage, formatCurrency } from '@/lib/utils'
import { digitalBehaviorMapping, valuesDriverMapping, creatorAffinityMapping } from '@/data/segments'

interface BasicStrategyReportProps {
  segmentMatch: SegmentMatch
  userInputs?: UserInputs
  onClose: () => void
}

export function BasicStrategyReport({ segmentMatch, userInputs, onClose }: BasicStrategyReportProps) {
  const { segment } = segmentMatch

  const strategies = [
    {
      icon: Target,
      title: 'Social Media Focus',
      description: 'Heavy social media presence, influencer partnerships, affordable entry-level products.',
      actionItems: [
        'Build consistent presence on Instagram and TikTok',
        'Partner with micro-influencers in your niche',
        'Create shareable, trending content formats',
        'Launch with accessible price points ($25-75)'
      ]
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Focus on building authentic relationships and community-driven growth.',
      actionItems: [
        'Create exclusive Facebook group or Discord community',
        'Host regular live sessions and Q&As',
        'Encourage user-generated content and reviews',
        'Implement referral and loyalty programs'
      ]
    },
    {
      icon: MapPin,
      title: 'Geographic Targeting',
      description: 'Target specific ZIP codes and regions where this segment concentrates.',
      actionItems: [
        'Focus paid ads on urban coastal areas',
        'Target ZIP codes: 10014, 90210, 94107, 60614',
        'Consider local partnerships and events',
        'Optimize shipping and logistics for these areas'
      ]
    },
    {
      icon: Calendar,
      title: 'Launch Timeline',
      description: 'Recommended 90-day launch strategy with key milestones.',
      actionItems: [
        'Weeks 1-4: Build awareness through content',
        'Weeks 5-8: Soft launch to community',
        'Weeks 9-12: Full public launch with influencer push',
        'Month 4+: Scale and optimize based on performance'
      ]
    }
  ]

  const budgetBreakdown = [
    { category: 'Content Creation', percentage: 35, amount: '$1,750' },
    { category: 'Paid Advertising', percentage: 30, amount: '$1,500' },
    { category: 'Influencer Partnerships', percentage: 20, amount: '$1,000' },
    { category: 'Community Building', percentage: 15, amount: '$750' }
  ]

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // For now, just trigger print - in a real app you'd generate a PDF
    window.print()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="min-h-screen p-4">
        <div className="max-w-5xl mx-auto py-8">
          {/* Header with close button */}
          <div className="mb-8 text-center">
            <Button
              variant="outline"
              onClick={onClose}
              className="mb-6"
            >
              ← Back to Results
            </Button>
            
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Report Content */}
          <div className="space-y-8 print:space-y-6">
            {/* Title Section */}
            <Card className="border-0 bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
              <CardContent className="p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Basic Launch Strategy Report
                  </div>
                  <h1 className="text-4xl font-bold text-primary-50">
                    {segment.name}
                  </h1>
                  <p className="text-xl text-primary-300">
                    {formatPercentage(segmentMatch.matchScore)} Customer Match • {segment.lifestyle}
                  </p>
                  {userInputs && (
                    <p className="text-lg text-primary-400">
                      Strategy for: {userInputs.brandDescription || 'Your Product'}
                    </p>
                  )}
                </motion.div>
              </CardContent>
            </Card>

            {/* Segment Overview */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-50 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent-400" />
                  Segment Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-primary-100">Demographics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-primary-800/50 rounded-lg">
                        <span className="text-primary-300">Age Range</span>
                        <span className="font-bold text-primary-100">{segment.ageMin}-{segment.ageMax} years</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary-800/50 rounded-lg">
                        <span className="text-primary-300">Income Range</span>
                        <span className="font-bold text-primary-100">{formatCurrency(segment.incomeMin)} - {formatCurrency(segment.incomeMax)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary-800/50 rounded-lg">
                        <span className="text-primary-300">Match Score</span>
                        <span className="font-bold text-accent-400">{formatPercentage(segmentMatch.matchScore)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-primary-100">Behavioral Profile</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-brand-500/10 rounded-lg border border-brand-500/20">
                        <div className="font-semibold text-brand-300 mb-1">
                          {digitalBehaviorMapping[segment.digitalBehavior].name}
                        </div>
                        <div className="text-sm text-primary-400">
                          {digitalBehaviorMapping[segment.digitalBehavior].description}
                        </div>
                      </div>
                      <div className="p-3 bg-success-500/10 rounded-lg border border-success-500/20">
                        <div className="font-semibold text-success-300 mb-1">
                          {valuesDriverMapping[segment.valuesDriver].name}
                        </div>
                        <div className="text-sm text-primary-400">
                          {valuesDriverMapping[segment.valuesDriver].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                  <h4 className="font-bold text-accent-300 mb-2">Why This Segment Matches</h4>
                  <div className="space-y-2">
                    {segmentMatch.reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-success-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Recommendations */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-50 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-accent-400" />
                  Strategic Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {strategies.map((strategy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-6 rounded-xl hover:border-accent-500/30 transition-all"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-2 bg-accent-500/20 rounded-lg">
                          <strategy.icon className="w-5 h-5 text-accent-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary-100 mb-1">{strategy.title}</h4>
                          <p className="text-sm text-primary-300">{strategy.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {strategy.actionItems.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <ArrowRight className="w-3 h-3 text-accent-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-primary-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Budget Recommendations */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-50 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-accent-400" />
                  Budget Allocation ($5,000 monthly)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-primary-100">{item.category}</div>
                        <div className="w-full bg-primary-800 rounded-full h-2 mt-2">
                          <motion.div
                            className="bg-accent-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                          />
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-bold text-accent-400">{item.percentage}%</div>
                        <div className="text-sm text-primary-300">{item.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-0 bg-gradient-to-br from-success-500/20 via-success-600/10 to-brand-500/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-50 mb-4">Ready for More Detailed Intelligence?</h3>
                <p className="text-primary-300 mb-6 max-w-2xl mx-auto">
                  Upgrade to our Premium Report for ZIP code analysis, competitor intelligence, 
                  detailed customer personas, and a complete 90-day launch playbook.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-[10px]"
                >
                  Upgrade to Premium Report
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}