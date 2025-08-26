'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Brain, Zap, ArrowRight, CheckCircle, Play, Star, Users, AlertCircle } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { ProfileAvatar } from '@/components/ui/ProfileAvatar'
import { getSubscriptionAccess } from '@/lib/subscription'
import { TrendHuntersRegistry } from '@/components/TrendHuntersRegistry'

export default function TrendsPage() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  
  // Get subscription access information
  const subscriptionAccess = user ? getSubscriptionAccess(user) : null
  
  // Check if user can access premium features (curator level or higher)
  const canAccessPremium = () => {
    return subscriptionAccess?.hasAdvancedFeatures || false
  }
  
  // Check if user has curator level access for trend hunters
  const canAccessTrendHunters = () => {
    return subscriptionAccess?.canAccessTrendAnalysis || false
  }

  const trendCategories = [
    {
      name: "Aesthetic Movements",
      description: "Visual and style trends shaping consumer preferences",
      trends: ["Solarpunk", "Dark Academia", "Goblincore", "Cottagecore 2.0"],
      growth: "+285%",
      icon: "🎨"
    },
    {
      name: "Lifestyle Shifts",
      description: "Emerging ways people live, work, and consume",
      trends: ["Micro-Luxury", "Climate Optimism", "Digital Nomad Families", "Slow Living"],
      growth: "+194%",
      icon: "🌱"
    },
    {
      name: "Tech Behaviors",
      description: "How technology adoption creates new consumer segments",
      trends: ["AI Wellness", "Privacy-First Living", "Creator Economy 2.0", "Metaverse Natives"],
      growth: "+312%",
      icon: "🤖"
    },
    {
      name: "Value Systems",
      description: "Evolving principles driving purchase decisions",
      trends: ["Radical Transparency", "Community Over Product", "Anti-Hustle Culture", "Regenerative Business"],
      growth: "+167%",
      icon: "💫"
    }
  ]

  const features = [
    {
      title: "Viral Trend Prediction",
      description: "Spot viral trends 2-6 weeks before mainstream adoption, giving you first-mover advantage",
      icon: <Eye className="w-6 h-6" />,
      examples: ["Spotted 'Solarpunk' at 2K mentions", "Predicted 'Goblincore' explosion", "Called the 'Climate Optimism' wave"]
    },
    {
      title: "Cultural Intelligence",
      description: "Understand the deeper values and motivations driving each trend",
      icon: <Brain className="w-6 h-6" />,
      examples: ["Values mapping for 50+ movements", "Behavioral pattern analysis", "Cross-cultural trend correlation"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting of which trends will scale and which will fade",
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ["90% accuracy on trend longevity", "Peak timing predictions", "Market size projections"]
    },
    {
      title: "Creator Opportunity Alerts",
      description: "Get notified when trends align with your brand values and audience",
      icon: <AlertCircle className="w-6 h-6" />,
      examples: ["Personalized trend matching", "Timing recommendations", "Competition gap analysis"]
    }
  ]

  const successStories = [
    {
      brand: "Eco Threads Co.",
      founder: "Lisa Chen",
      trend: "Solarpunk Movement",
      timing: "8 months early",
      result: "First to market with solarpunk fashion line, captured 60% of early adopters",
      revenue: "$2.3M in first year",
      image: "/images/testimonials/elena-wellness.jpg",
      initials: "EW"
    },
    {
      brand: "Mindful Tech",
      founder: "Alex Kumar",
      trend: "Digital Minimalism 2.0",
      timing: "5 months early",
      result: "Launched productivity app targeting trend, became category leader",
      revenue: "10K+ users in 3 months",
      image: "/images/testimonials/david-tech.jpg",
      initials: "DT"
    },
    {
      brand: "Slow Beauty",
      founder: "Maria Rodriguez",
      trend: "Anti-Hustle Wellness",
      timing: "6 months early",
      result: "Positioned as the anti-rush skincare brand, 300% year-over-year growth",
      revenue: "500% ROI on marketing",
      image: "/images/testimonials/priya-research.jpg",
      initials: "PR"
    }
  ]

  const liveUpdates = [
    {
      trend: "Neuroaesthetics",
      category: "Design Philosophy",
      growth: "+340%",
      confidence: 94,
      stage: "Early Adoption",
      description: "Brain-optimized visual design for productivity and wellness",
      opportunity: "High",
      timeframe: "Next 6 months"
    },
    {
      trend: "Repair Culture",
      category: "Sustainability",
      growth: "+287%", 
      confidence: 88,
      stage: "Rising",
      description: "Making fixing and maintaining things cool again",
      opportunity: "Medium",
      timeframe: "Next 12 months"
    },
    {
      trend: "Micro-Dosing Wellness",
      category: "Health Tech",
      growth: "+195%",
      confidence: 76,
      stage: "Emerging",
      description: "Small, consistent wellness interventions over dramatic changes",
      opportunity: "High",
      timeframe: "Next 8 months"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20">
              <TrendingUp className="w-5 h-5 mr-2" />
              Real-Time Cultural Intelligence
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Spot Trends Before
              <span className="gradient-text block">They Go Viral</span>
              <span className="text-primary-300 text-2xl lg:text-3xl font-medium block mt-4">
                Cultural Intelligence for Creator Brands
              </span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t chase trends—lead them. Our AI monitors 50+ cultural signals across social platforms, 
              subcultures, and emerging communities to identify movements 6-12 months before they hit mainstream.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {canAccessPremium() ? (
                <Link href="/explore">
                  <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30 rounded-[10px]">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Explore Live Trends
                  </Button>
                </Link>
              ) : (
                <Link href="/pricing">
                  <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30 rounded-[10px]">
                    <Star className="w-5 h-5 mr-2" />
                    Unlock Trend Intelligence
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>50+ trend categories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>6-12 month lead time</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>90% accuracy rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Trend Updates */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              🔴 Live Trend Intelligence
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Real-time updates on emerging cultural movements. These trends are growing right now—perfect timing for early adoption.
            </p>
          </motion.div>

          <div className="space-y-6">
            {liveUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card border-accent-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-xl font-bold text-primary-50">{update.trend}</h3>
                          <span className="px-2 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-medium">
                            {update.category}
                          </span>
                          <span className="px-2 py-1 bg-success-500/20 text-success-400 rounded-full text-xs font-medium">
                            {update.growth} growth
                          </span>
                        </div>
                        <p className="text-primary-300 mb-3">{update.description}</p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="text-primary-400">
                            Confidence: <span className="text-success-400 font-medium">{update.confidence}%</span>
                          </div>
                          <div className="text-primary-400">
                            Stage: <span className="text-accent-400 font-medium">{update.stage}</span>
                          </div>
                          <div className="text-primary-400">
                            Opportunity: <span className="text-orange-400 font-medium">{update.opportunity}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-primary-400 mb-1">Peak expected</div>
                        <div className="font-medium text-primary-200">{update.timeframe}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Categories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              50+ Trend Categories We Monitor
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              From aesthetic movements to value system shifts, we track the cultural signals that create new consumer behaviors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl">{category.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50 mb-2">
                          {category.name}
                        </h3>
                        <p className="text-primary-300 mb-4">
                          {category.description}
                        </p>
                        <div className="text-success-400 font-medium">
                          {category.growth} average growth
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary-400 mb-2">Current Hot Trends:</div>
                      {category.trends.map((trend, trendIndex) => (
                        <div key={trendIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent-400 rounded-full" />
                          <span className="text-primary-200">{trend}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              How We Give You the Edge
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Our trend intelligence goes beyond surface-level monitoring to give you actionable cultural insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-3 bg-accent-500/20 rounded-xl text-accent-400">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-primary-300 mb-4">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary-400 mb-2">Recent Wins:</div>
                      {feature.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-400" />
                          <span className="text-sm text-primary-200">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Brands That Rode the Wave Early
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              See how getting in early on cultural trends created massive competitive advantages for these creator brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <ProfileAvatar
                        src={story.image}
                        alt={story.founder}
                        initials={story.initials}
                        size="lg"
                      />
                      <div>
                        <div className="font-bold text-primary-50">{story.founder}</div>
                        <div className="text-sm text-primary-400">{story.brand}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-accent-500/10 rounded-lg border border-accent-500/20">
                        <div className="text-xs text-accent-400 font-medium mb-1">TREND SPOTTED</div>
                        <div className="text-sm font-medium text-primary-200">{story.trend}</div>
                        <div className="text-xs text-success-400 mt-1">{story.timing}</div>
                      </div>
                      <p className="text-sm text-primary-300">{story.result}</p>
                      <div className="text-lg font-bold text-success-400">{story.revenue}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Hunters Registry Section - Curator Level */}
      {canAccessTrendHunters() && (
        <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/30 to-primary-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <TrendHuntersRegistry />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Don&apos;t Chase Trends—Lead Them
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Get 6-12 month early access to emerging cultural movements. 
                  Position your brand at the forefront of the next big wave.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {canAccessPremium() ? (
                    <Link href="/explore">
                      <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30 rounded-[10px]">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Explore Live Trends
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/pricing">
                      <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30 rounded-[10px]">
                        <Star className="w-5 h-5 mr-2" />
                        Upgrade to Premium
                      </Button>
                    </Link>
                  )}
                  <Link href="/how-it-works">
                    <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Real-time updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>90% accuracy rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>6-12 month lead time</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}