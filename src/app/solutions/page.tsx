'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, Users, TrendingUp, Search, BarChart3, Lightbulb, 
  ArrowRight, CheckCircle, Star, Zap, Globe, Heart,
  Brain, Compass, Rocket, Shield, Award, Sparkles
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

interface Solution {
  id: string
  title: string
  description: string
  icon: any
  benefits: string[]
  tools: string[]
  color: string
  route: string
  features: {
    name: string
    description: string
  }[]
}

function SolutionsContent() {
  const { canAccessPremium } = useAuth()
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null)

  const handleSolutionAction = (solution: Solution) => {
    if (canAccessPremium()) {
      // Premium users go directly to the tool
      window.location.href = solution.route
    } else {
      // Non-premium users see the informational modal
      setSelectedSolution(solution)
    }
  }

  const solutions: Solution[] = [
    {
      id: 'audience-discovery',
      title: 'Audience Discovery & Segmentation',
      description: 'Discover untapped audience segments and understand exactly who will buy your product before you launch.',
      icon: Target,
      color: 'accent',
      route: '/segments',
      benefits: [
        'Identify 48+ precision audience segments',
        'Understand psychographic profiles & buying behavior',
        'Discover underserved market opportunities',
        'Reduce customer acquisition costs by 40%'
      ],
      tools: ['CultrCode Segments', 'Behavioral Analytics', 'Psychographic Mapping'],
      features: [
        {
          name: '48 Precision Segments',
          description: 'Comprehensive framework covering Brand Evangelists, Early Believers, Quality Seekers, and Micro-Segments'
        },
        {
          name: 'Behavioral Profiles',
          description: 'Digital behavior patterns, values drivers, spending power, and creator affinity for each segment'
        },
        {
          name: 'Launch Strategies',
          description: 'Tailored go-to-market strategies for each audience segment'
        }
      ]
    },
    {
      id: 'community-intelligence',
      title: 'Community Intelligence & Mapping',
      description: 'Find exactly where your ideal customers gather online and how to reach them effectively.',
      icon: Users,
      color: 'brand',
      route: '/communities',
      benefits: [
        'Map 135+ micro-communities across 8 categories',
        'Track engagement levels & growth trends',
        'Identify high-value community opportunities',
        'Increase organic reach by 300%'
      ],
      tools: ['Community Explorer', 'Engagement Analytics', 'Growth Tracking'],
      features: [
        {
          name: 'Community Database',
          description: '135+ mapped micro-communities with size estimates and engagement data'
        },
        {
          name: 'Growth Trends',
          description: 'Real-time tracking of community growth patterns and emerging opportunities'
        },
        {
          name: 'Engagement Metrics',
          description: 'Deep analysis of community engagement levels and participation rates'
        }
      ]
    },
    {
      id: 'market-validation',
      title: 'Market Validation & Opportunity Analysis',
      description: 'Validate product-market fit before building and identify the highest-value market opportunities.',
      icon: BarChart3,
      color: 'success',
      route: '/dashboard',
      benefits: [
        'Validate ideas with real audience data',
        'Identify market gaps & opportunities',
        'Optimize pricing & positioning strategy',
        'Reduce product failure risk by 60%'
      ],
      tools: ['Market Analyzer', 'Opportunity Scanner', 'Validation Framework'],
      features: [
        {
          name: 'Demand Analysis',
          description: 'Quantify market demand across different audience segments and communities'
        },
        {
          name: 'Competition Gaps',
          description: 'Identify underserved niches and unmet needs in target markets'
        },
        {
          name: 'Revenue Potential',
          description: 'Estimate revenue potential across different segments and launch strategies'
        }
      ]
    },
    {
      id: 'launch-optimization',
      title: 'Launch Strategy & Optimization',
      description: 'Execute data-driven launches that connect with the right audience at the perfect moment.',
      icon: Rocket,
      color: 'purple',
      route: '/dashboard',
      benefits: [
        'Optimize launch timing & messaging',
        'Target highest-converting segments first',
        'Maximize early adopter engagement',
        'Increase launch success rate by 250%'
      ],
      tools: ['Launch Planner', 'Messaging Optimizer', 'Timing Analytics'],
      features: [
        {
          name: 'Segment Prioritization',
          description: 'AI-powered recommendations for which segments to target first for maximum impact'
        },
        {
          name: 'Message Optimization',
          description: 'Craft compelling messages that resonate with each specific audience segment'
        },
        {
          name: 'Launch Sequencing',
          description: 'Strategic timing and sequencing across communities for viral growth'
        }
      ]
    }
  ]

  const coreValues = [
    {
      icon: Brain,
      title: 'Data-Driven Intelligence',
      description: 'Every recommendation backed by comprehensive audience and community data'
    },
    {
      icon: Compass,
      title: 'Strategic Direction',
      description: 'Clear roadmap from idea validation to successful market penetration'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Minimize launch failures with validated audience and market insights'
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'Proprietary segmentation framework unavailable anywhere else'
    }
  ]

  const integrationFlow = [
    {
      step: 1,
      title: 'Discover Your Audience',
      description: 'Use CultrCode Segments to identify your ideal customer profiles',
      icon: Target,
      color: 'accent'
    },
    {
      step: 2,
      title: 'Map Their Communities',
      description: 'Find where your audience gathers using Community Intelligence',
      icon: Users,
      color: 'brand'
    },
    {
      step: 3,
      title: 'Validate Market Fit',
      description: 'Confirm demand and opportunity with Market Analysis tools',
      icon: BarChart3,
      color: 'success'
    },
    {
      step: 4,
      title: 'Launch Strategically',
      description: 'Execute with optimized timing, messaging, and targeting',
      icon: Rocket,
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      accent: 'bg-accent-500/20 border-accent-500/30 text-accent-400',
      brand: 'bg-brand-500/20 border-brand-500/30 text-brand-400',
      success: 'bg-success-500/20 border-success-500/30 text-success-400',
      purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.accent
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent-400" />
            </div>
            <h1 className="text-5xl font-bold text-primary-50">
              CultrCode Solutions
            </h1>
          </div>
          <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed mb-8">
            The complete creator intelligence suite that turns audience discovery into profitable launches. 
            Discover untapped markets, validate ideas, and execute data-driven strategies that actually work.
          </p>
          
          {/* Core Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-800/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-semibold text-primary-50 mb-2">{value.title}</h3>
                <p className="text-sm text-primary-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-50 mb-4">How It All Works Together</h2>
            <p className="text-lg text-primary-300 max-w-3xl mx-auto">
              Our integrated approach transforms scattered audience insights into a cohesive launch strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {integrationFlow.map((flow, index) => (
              <motion.div
                key={flow.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${getColorClasses(flow.color)}`}>
                      <flow.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-bold text-accent-400 mb-2">STEP {flow.step}</div>
                    <h3 className="text-lg font-bold text-primary-50 mb-3">{flow.title}</h3>
                    <p className="text-sm text-primary-300">{flow.description}</p>
                  </CardContent>
                </Card>
                
                {index < integrationFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-50 mb-4">Complete Solution Suite</h2>
            <p className="text-lg text-primary-300 max-w-3xl mx-auto">
              Four integrated solutions that work together to maximize your launch success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:border-accent-500/50 transition-all duration-200 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClasses(solution.color)}`}>
                        <solution.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary-50">{solution.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-primary-300 leading-relaxed">{solution.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {/* Key Benefits */}
                      <div>
                        <h4 className="font-semibold text-primary-50 mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-success-400 flex-shrink-0" />
                              <span className="text-sm text-primary-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tools Included */}
                      <div>
                        <h4 className="font-semibold text-primary-50 mb-3">Tools Included</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.tools.map((tool, idx) => (
                            <span 
                              key={idx}
                              className={`text-xs px-3 py-1 rounded-full border ${getColorClasses(solution.color)}`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleSolutionAction(solution)}
                      >
                        <Search className="w-4 h-4 mr-2" />
                        {canAccessPremium() ? 'Open Tool' : 'View Details'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card className="glass-card border-accent-500/30">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <TrendingUp className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary-50 mb-4">
                  Measurable Impact on Your Bottom Line
                </h2>
                <p className="text-lg text-primary-300 max-w-3xl mx-auto">
                  CultrCode users see dramatic improvements in launch success and customer acquisition
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">250%</div>
                  <div className="text-primary-300">Higher Launch Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-success-400 mb-2">40%</div>
                  <div className="text-primary-300">Lower Customer Acquisition Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-400 mb-2">300%</div>
                  <div className="text-primary-300">Increase in Organic Reach</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="glass-card border-accent-500/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary-50 mb-4">
                Ready to Transform Your Launch Strategy?
              </h2>
              <p className="text-lg text-primary-300 mb-8 max-w-2xl mx-auto">
                Join creators who've discovered their perfect audience and launched with confidence
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8"
                  onClick={() => window.location.href = canAccessPremium() ? '/segments' : '/auth/login'}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {canAccessPremium() ? 'Go to Segments' : 'Start Free Analysis'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View Dashboard
                </Button>
              </div>
              
              <p className="text-sm text-primary-400 mt-6">
                Free audience segmentation • No credit card required • Upgrade anytime
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Solution Details Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-xl border border-primary-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(selectedSolution.color)}`}>
                    <selectedSolution.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-50">{selectedSolution.title}</h2>
                    <p className="text-primary-300">{selectedSolution.description}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedSolution(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    {selectedSolution.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-accent-500/30 pl-4">
                        <h4 className="font-medium text-primary-50 mb-1">{feature.name}</h4>
                        <p className="text-sm text-primary-300">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-50 mb-4">Benefits & ROI</h3>
                  <div className="space-y-3">
                    {selectedSolution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                        <span className="text-primary-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium text-primary-50 mb-3">Included Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSolution.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className={`text-sm px-3 py-1 rounded-full border ${getColorClasses(selectedSolution.color)}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      if (canAccessPremium()) {
                        window.location.href = selectedSolution.route
                      } else {
                        // Redirect to signup/upgrade page
                        window.location.href = '/auth/login'
                      }
                    }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {canAccessPremium() ? 'Open Tool' : 'Get Access'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedSolution(null)}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <ProtectedRoute>
      <SolutionsContent />
    </ProtectedRoute>
  )
}