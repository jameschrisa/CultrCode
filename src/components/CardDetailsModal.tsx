'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Pin, Share2, Download, ChevronDown, ChevronUp, TrendingUp, Users, Target, Calendar, BarChart3, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

interface CardDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
    type: 'segment' | 'trend' | 'community'
    name: string
    description: string
    match?: string
    growth?: string
    members?: string
    status: string
    tags: string[]
    icon: React.ReactNode
    metrics: {
      primary: { label: string; value: string; trend?: 'up' | 'down' | 'stable' }
      secondary: Array<{ label: string; value: string }>
    }
    insights: Array<{
      title: string
      content: string
      type: 'opportunity' | 'challenge' | 'insight'
    }>
    recommendations: string[]
  }
  onPin: () => void
  isPinned?: boolean
}

export function CardDetailsModal({ 
  isOpen, 
  onClose, 
  data, 
  onPin, 
  isPinned = false 
}: CardDetailsModalProps) {
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null)

  const getActionLabel = () => {
    switch (data.type) {
      case 'segment': return 'Pin Segment'
      case 'trend': return 'Pin Trend'
      case 'community': return 'Pin Community'
      default: return 'Pin Item'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'hot': case 'viral': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'growing': case 'rising': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'emerging': case 'trending': return 'bg-success-500/20 text-success-400 border-success-500/30'
      default: return 'bg-accent-500/20 text-accent-400 border-accent-500/30'
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <TrendingUp className="w-4 h-4 text-success-400" />
      case 'challenge': return <Target className="w-4 h-4 text-orange-400" />
      case 'insight': return <Sparkles className="w-4 h-4 text-accent-400" />
      default: return <BarChart3 className="w-4 h-4 text-primary-400" />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] mx-2 mb-2 md:mx-auto md:max-w-2xl md:bottom-4"
          >
            <Card className="border-0 bg-primary-800/95 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400">
                        {data.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50">{data.name}</h3>
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(data.status)}`}>
                          {data.status}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      variant={isPinned ? "primary" : "outline"}
                      size="sm"
                      onClick={onPin}
                      className="flex-1"
                    >
                      <Pin className={`w-4 h-4 mr-2 ${isPinned ? 'fill-current' : ''}`} />
                      {isPinned ? 'Pinned' : getActionLabel()}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {/* Hero Metrics */}
                  <div className="p-6 border-b border-white/10">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary-50 mb-1">
                        {data.metrics.primary.value}
                      </div>
                      <div className="text-sm text-primary-400">{data.metrics.primary.label}</div>
                      {data.metrics.primary.trend && (
                        <div className={`inline-flex items-center mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                          data.metrics.primary.trend === 'up' ? 'bg-success-500/20 text-success-400' :
                          data.metrics.primary.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                          'bg-primary-500/20 text-primary-400'
                        }`}>
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {data.metrics.primary.trend === 'up' ? 'Trending Up' : 
                           data.metrics.primary.trend === 'down' ? 'Trending Down' : 'Stable'}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {data.metrics.secondary.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-primary-50">{metric.value}</div>
                          <div className="text-xs text-primary-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 border-b border-white/10">
                    <h4 className="text-lg font-semibold text-primary-50 mb-3">Overview</h4>
                    <p className="text-primary-300 leading-relaxed">{data.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {data.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="p-6 border-b border-white/10">
                    <h4 className="text-lg font-semibold text-primary-50 mb-4">Key Insights</h4>
                    <div className="space-y-3">
                      {data.insights.map((insight, index) => (
                        <div key={index} className="border border-white/10 rounded-lg">
                          <button
                            onClick={() => setExpandedInsight(expandedInsight === index ? null : index)}
                            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              {getInsightIcon(insight.type)}
                              <span className="font-medium text-primary-50">{insight.title}</span>
                            </div>
                            {expandedInsight === index ? 
                              <ChevronUp className="w-4 h-4 text-primary-400" /> : 
                              <ChevronDown className="w-4 h-4 text-primary-400" />
                            }
                          </button>
                          <AnimatePresence>
                            {expandedInsight === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-0 text-primary-300 text-sm leading-relaxed">
                                  {insight.content}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-primary-50 mb-4">Recommended Actions</h4>
                    <div className="space-y-2">
                      {data.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-400 text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-primary-300 text-sm leading-relaxed">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}