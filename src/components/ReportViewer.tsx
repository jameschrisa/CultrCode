'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Share2, FileText, Crown, Target, Calendar, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SegmentMatch, UserInputs, PremiumInsights } from '@/types/segments'
import { formatPercentage, formatCurrency } from '@/lib/utils'
import { LaunchStrategyReport } from '@/components/LaunchStrategyReport'
import { BasicStrategyReport } from '@/components/BasicStrategyReport'
import { PremiumInsightsGenerator } from '@/lib/premiumInsightsGenerator'

interface SavedReport {
  id: string
  userId: string
  segmentMatch: SegmentMatch
  userInputs?: UserInputs
  reportType: 'basic' | 'premium'
  createdAt: string
  title: string
  description: string
}

interface ReportViewerProps {
  report: SavedReport
  onClose: () => void
}

export function ReportViewer({ report, onClose }: ReportViewerProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [premiumInsights, setPremiumInsights] = useState<PremiumInsights | null>(null)

  const { segmentMatch, userInputs, reportType, createdAt, title } = report

  // Generate premium insights if viewing a premium report
  const generatePremiumInsights = () => {
    if (reportType === 'premium' && userInputs && !premiumInsights) {
      setIsLoading(true)
      try {
        const insights = PremiumInsightsGenerator.generatePremiumInsights(userInputs, segmentMatch)
        setPremiumInsights(insights)
      } catch (error) {
        console.error('Error generating premium insights:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Auto-generate premium insights on mount for premium reports
  useState(() => {
    generatePremiumInsights()
  })

  const handleDownload = () => {
    if (reportType === 'premium') {
      window.print()
    } else {
      // For basic reports, create a simplified download
      const reportData = {
        title,
        segment: segmentMatch.segment.name,
        matchScore: segmentMatch.matchScore,
        createdAt,
        strategy: segmentMatch.segment.launchStrategy
      }
      
      const dataStr = JSON.stringify(reportData, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${segmentMatch.segment.name.replace(/\s+/g, '_')}_Report.json`
      link.click()
      URL.revokeObjectURL(url)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out my ${reportType} audience analysis for ${segmentMatch.segment.name} (${formatPercentage(segmentMatch.matchScore)} match)`,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    const shareText = `${title}\n\nSegment: ${segmentMatch.segment.name}\nMatch: ${formatPercentage(segmentMatch.matchScore)}\nGenerated: ${new Date(createdAt).toLocaleDateString()}\n\nAnalyzed with CultrCode`
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Report summary copied to clipboard!')
    })
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
      >
        <div className="min-h-screen p-4">
          <div className="max-w-7xl mx-auto py-8">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-8 print:hidden">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </Button>
                
                <div className="flex items-center space-x-2 text-sm text-primary-300">
                  <Calendar className="w-4 h-4" />
                  <span>Saved {new Date(createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="flex items-center space-x-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </Button>
                
                <Button
                  variant="primary"
                  onClick={handleDownload}
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            {/* Report Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-sm font-semibold border border-accent-500/20 mb-4">
                {reportType === 'premium' ? (
                  <>
                    <Crown className="w-4 h-4 mr-2 text-accent-400" />
                    <span className="text-accent-300">Premium Report</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-blue-300">Basic Report</span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-primary-50 mb-2">
                {title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-success-400" />
                  <span className="text-primary-300">{formatPercentage(segmentMatch.matchScore)} Match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-accent-400" />
                  <span className="text-primary-300">Ages {segmentMatch.segment.ageMin}-{segmentMatch.segment.ageMax}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-brand-400" />
                  <span className="text-primary-300">{segmentMatch.segment.tier} Tier</span>
                </div>
              </div>
            </motion.div>

            {/* Report Content */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-primary-300">Loading detailed analysis...</p>
              </div>
            ) : reportType === 'premium' && premiumInsights ? (
              <LaunchStrategyReport
                segmentMatch={segmentMatch}
                premiumInsights={premiumInsights}
                onDownloadPDF={handleDownload}
                onPrint={() => window.print()}
              />
            ) : reportType === 'basic' ? (
              <BasicStrategyReport
                segmentMatch={segmentMatch}
                userInputs={userInputs}
                onClose={() => {}} // Empty function since we're not closing from here
              />
            ) : (
              <Card className="glass-card">
                <CardContent className="p-12 text-center">
                  <Crown className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-50 mb-2">Premium Report Loading</h3>
                  <p className="text-primary-300 mb-6">
                    Generating comprehensive insights for your saved premium report...
                  </p>
                  <Button onClick={generatePremiumInsights} disabled={isLoading}>
                    Generate Full Report
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Segment Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 print:hidden"
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary-50">Quick Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 glass-card rounded-xl">
                      <div className="text-2xl font-bold text-accent-400">
                        {formatPercentage(segmentMatch.matchScore)}
                      </div>
                      <div className="text-sm text-primary-300">Match Score</div>
                    </div>
                    
                    <div className="text-center p-4 glass-card rounded-xl">
                      <div className="text-2xl font-bold text-success-400">
                        {formatCurrency(segmentMatch.segment.incomeMin)} - {formatCurrency(segmentMatch.segment.incomeMax)}
                      </div>
                      <div className="text-sm text-primary-300">Income Range</div>
                    </div>
                    
                    <div className="text-center p-4 glass-card rounded-xl">
                      <div className="text-2xl font-bold text-brand-400">
                        {segmentMatch.segment.tier}
                      </div>
                      <div className="text-sm text-primary-300">Segment Tier</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary-800/50 rounded-xl">
                    <h4 className="font-semibold text-primary-100 mb-2">Description</h4>
                    <p className="text-primary-300 leading-relaxed">
                      {segmentMatch.segment.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}