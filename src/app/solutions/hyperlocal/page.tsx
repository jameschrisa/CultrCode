'use client'

import { motion } from 'framer-motion'
import { MapPin, Target, Eye, Zap, ArrowRight, CheckCircle, Play, Star, TrendingUp, Users } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function HyperlocalPage() {
  const { isAuthenticated, canAccessPremium } = useAuth()

  const locationData = [
    {
      zipCode: "90210",
      city: "Beverly Hills, CA",
      customerDensity: 94,
      avgIncome: "$185K",
      ageRange: "25-44",
      topInterests: ["Luxury Wellness", "Sustainable Fashion", "Tech Innovation"],
      platforms: ["Instagram", "LinkedIn", "TikTok"],
      brands: ["Goop", "Reformation", "Glossier"],
      opportunity: "High-end wellness products"
    },
    {
      zipCode: "10001",
      city: "Manhattan, NY",
      customerDensity: 89,
      avgIncome: "$95K",
      ageRange: "22-35",
      topInterests: ["Food Culture", "Art & Design", "Nightlife"],
      platforms: ["Instagram", "TikTok", "Twitter"],
      brands: ["Supreme", "Glossier", "Warby Parker"],
      opportunity: "Trendsetting lifestyle brands"
    },
    {
      zipCode: "78701",
      city: "Austin, TX",
      customerDensity: 76,
      avgIncome: "$78K",
      ageRange: "24-38",
      topInterests: ["Music Culture", "Local Food", "Tech Startups"],
      platforms: ["Instagram", "Reddit", "YouTube"],
      brands: ["Patagonia", "Local Brands", "Direct-to-Consumer"],
      opportunity: "Authentic, local-first products"
    },
    {
      zipCode: "97205",
      city: "Portland, OR",
      customerDensity: 82,
      avgIncome: "$72K",
      ageRange: "26-42",
      topInterests: ["Environmental Causes", "Craft Culture", "Wellness"],
      platforms: ["Instagram", "Reddit", "Facebook"],
      brands: ["Patagonia", "REI", "Local Artisans"],
      opportunity: "Eco-conscious, artisanal products"
    }
  ]

  const features = [
    {
      title: "ZIP Code Precision",
      description: "Drill down to individual ZIP codes to see exactly where your ideal customers live and work",
      icon: <MapPin className="w-6 h-6" />,
      stats: "2,847+ ZIP codes analyzed",
      benefits: ["Precise ad targeting", "Store location planning", "Event location selection"]
    },
    {
      title: "Demographic Overlays",
      description: "Layer income, age, education, and lifestyle data to build complete customer profiles by location",
      icon: <Users className="w-6 h-6" />,
      stats: "15+ data dimensions",
      benefits: ["Income targeting", "Age-specific messaging", "Education-based positioning"]
    },
    {
      title: "Competition Mapping",
      description: "See which brands dominate each area and identify underserved markets with high potential",
      icon: <Target className="w-6 h-6" />,
      stats: "10K+ brand mappings",
      benefits: ["White space identification", "Competition analysis", "Market entry strategy"]
    },
    {
      title: "Cultural Heat Maps",
      description: "Visualize cultural movements, trends, and community clusters across geographic regions",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "50+ cultural signals",
      benefits: ["Trend hotspot identification", "Cultural alignment mapping", "Community penetration analysis"]
    }
  ]

  const useCases = [
    {
      title: "Retail Location Planning",
      description: "Choose the perfect location for your popup, store, or experience center",
      icon: "🏪",
      example: "Beauty brand found 3x higher foot traffic in specific LA neighborhoods",
      metrics: ["Foot traffic analysis", "Competitor density", "Customer concentration"]
    },
    {
      title: "Event & Activation Planning",
      description: "Host events where your community actually lives and gathers",
      icon: "🎉",
      example: "Wellness brand's popup in Brooklyn generated 85% local attendance",
      metrics: ["Community density mapping", "Event venue optimization", "Local influence networks"]
    },
    {
      title: "Hyperlocal Marketing",
      description: "Create region-specific campaigns that speak to local culture and values",
      icon: "📍",
      example: "Sustainable fashion brand's Portland campaign drove 4x higher engagement",
      metrics: ["Local trend alignment", "Regional messaging optimization", "Cultural resonance scoring"]
    },
    {
      title: "Influencer Location Matching",
      description: "Find local influencers and creators in your target geographic markets",
      icon: "👥",
      example: "Tech startup found micro-influencers in 5 key cities, driving authentic reach",
      metrics: ["Local influencer mapping", "Geographic reach analysis", "Community leadership identification"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Position inventory and fulfillment based on actual customer density",
      icon: "📦",
      example: "DTC brand reduced shipping costs 40% with strategic warehouse placement",
      metrics: ["Customer density analysis", "Logistics optimization", "Regional demand forecasting"]
    },
    {
      title: "Partnership Identification",
      description: "Discover local brands, venues, and partners in your target markets",
      icon: "🤝",
      example: "Coffee brand partnered with local bookstores in 12 high-density areas",
      metrics: ["Local business mapping", "Partnership opportunity scoring", "Community ecosystem analysis"]
    }
  ]

  const successStories = [
    {
      brand: "Mindful Mornings",
      category: "Wellness Brand",
      challenge: "Needed to choose between SF, LA, and Seattle for first physical location",
      solution: "Used hyperlocal analysis to identify Pacific Heights, SF as the optimal location",
      result: "achieved 3x projected sales in first 6 months",
      metric: "$2.1M first-year revenue",
      image: "☕"
    },
    {
      brand: "Local Harvest Co.",
      category: "Sustainable Food",
      challenge: "Wanted to expand beyond farmers markets but didn't know where",
      solution: "Identified 8 ZIP codes in Portland metro with highest eco-conscious density",
      result: "Launched meal kit service with 60% customer concentration in predicted areas",
      metric: "500% ROI on targeted marketing",
      image: "🥬"
    },
    {
      brand: "Urban Makers",
      category: "Artisan Crafts",
      challenge: "Struggling to find their audience for handmade home goods",
      solution: "Discovered micro-clusters of design-conscious customers in Brooklyn and Oakland",
      result: "Focused marketing on 12 ZIP codes, increased conversion rate 4x",
      metric: "85% of sales from targeted areas",
      image: "🏺"
    }
  ]

  const mapFeatures = [
    "Interactive heat map visualization",
    "Customer density overlays",
    "Demographic data layers",
    "Competition mapping",
    "Cultural trend hotspots", 
    "Real-time data updates",
    "Export capabilities for team sharing",
    "Mobile-optimized interface"
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
            <div className="inline-flex items-center px-6 py-3 glass-card text-orange-300 rounded-full text-sm font-semibold border border-orange-500/20">
              <MapPin className="w-5 h-5 mr-2" />
              Coming Soon • Q3 2025
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Hyperlocal Customer
              <span className="gradient-text block">Intelligence</span>
              <span className="text-primary-300 text-2xl lg:text-3xl font-medium block mt-4">
                Know Where Your Customers Actually Live
              </span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Go beyond state and city targeting. Our GIS-powered platform reveals customer density down to individual ZIP codes, 
              helping you make smarter decisions about where to focus your marketing, events, and expansion efforts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30" disabled>
                <MapPin className="w-5 h-5 mr-2" />
                Join Waitlist
              </Button>
              <Button variant="outline" size="xl" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Preview Features
              </Button>
            </div>

            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-orange-300 mb-3">🚀 Coming Q3 2025</h3>
              <p className="text-orange-200 leading-relaxed mb-4">
                We&apos;re building comprehensive hyperlocal intelligence with ZIP code precision, 
                demographic overlays, and real-time market data to help creators make smarter location-based decisions.
              </p>
              <div className="pt-4 border-t border-orange-500/30">
                <div className="text-sm text-orange-300 font-medium mb-2">Early Access Includes:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-orange-200">
                  <div>• 2,847+ ZIP code coverage</div>
                  <div>• Real-time demographic data</div>
                  <div>• Interactive map visualization</div>
                  <div>• Market opportunity scoring</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>2,847+ ZIP codes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>15+ data dimensions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>Real-time updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Location Data */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Sample Geographic Intelligence
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              See the depth of insights available for each geographic market, from customer density to cultural preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locationData.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-primary-50">ZIP {location.zipCode}</h3>
                        <p className="text-primary-400">{location.city}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        location.customerDensity >= 90 ? 'bg-success-500/20 text-success-400' :
                        location.customerDensity >= 80 ? 'bg-accent-500/20 text-accent-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {location.customerDensity}% Match
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-primary-400">Avg Income:</span>
                          <p className="font-medium text-primary-200">{location.avgIncome}</p>
                        </div>
                        <div>
                          <span className="text-primary-400">Age Range:</span>
                          <p className="font-medium text-primary-200">{location.ageRange}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Top Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.topInterests.map((interest, interestIndex) => (
                            <span key={interestIndex} className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded text-xs">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Platform Preferences</h4>
                        <div className="flex space-x-2">
                          {location.platforms.map((platform, platformIndex) => (
                            <span key={platformIndex} className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded text-xs">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Brands They Love</h4>
                        <div className="flex space-x-2">
                          {location.brands.map((brand, brandIndex) => (
                            <span key={brandIndex} className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded text-xs">
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <h4 className="text-sm font-medium text-success-400 mb-1">Opportunity</h4>
                        <p className="text-sm text-primary-200">{location.opportunity}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Geographic Intelligence Features
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Powerful tools to understand and leverage geographic customer data for smarter business decisions.
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
                        <h3 className="text-xl font-bold text-primary-50 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-primary-300 mb-3">
                          {feature.description}
                        </p>
                        <div className="text-sm font-medium text-accent-400">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary-400 mb-2">Use Cases:</div>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-400" />
                          <span className="text-sm text-primary-200">{benefit}</span>
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

      {/* Use Cases */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              How Creator Brands Use Geographic Intelligence
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              From retail planning to influencer partnerships, see how location data drives strategic decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{useCase.icon}</div>
                      <h3 className="text-lg font-bold text-primary-50 mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-primary-300 text-sm mb-4">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="p-3 bg-success-500/10 rounded-lg border border-success-500/20 mb-4">
                      <div className="text-xs text-success-400 font-medium mb-1">SUCCESS STORY</div>
                      <p className="text-xs text-primary-200">{useCase.example}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-medium text-primary-400 mb-2">Key Metrics:</div>
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                          <span className="text-xs text-primary-300">{metric}</span>
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
              Real Geographic Intelligence Success Stories
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              See how location-based insights have driven major business decisions for creator brands.
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
                      <div className="text-3xl">{story.image}</div>
                      <div>
                        <div className="font-bold text-primary-50">{story.brand}</div>
                        <div className="text-sm text-primary-400">{story.category}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-1">Challenge</h4>
                        <p className="text-sm text-primary-300">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-accent-400 mb-1">CultrCode Solution</h4>
                        <p className="text-sm text-primary-200">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-success-400 mb-1">Result</h4>
                        <p className="text-sm text-primary-200">{story.result}</p>
                        <div className="text-lg font-bold text-success-400 mt-2">{story.metric}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Features Preview */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Interactive Map Features
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              When fully enabled, our interactive maps provide powerful visualization and analysis tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mapFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 glass-card rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
                <span className="text-primary-200 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  Make Smarter Location-Based Decisions
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Stop guessing where your customers are. Use precision geographic intelligence 
                  to optimize everything from marketing to retail expansion.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {canAccessPremium() ? (
                    <Link href="/explore">
                      <Button size="xl" className="px-12">
                        <MapPin className="w-5 h-5 mr-2" />
                        Explore Geographic Data
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/pricing">
                      <Button size="xl" className="px-12">
                        <Star className="w-5 h-5 mr-2" />
                        Unlock Geographic Intelligence
                      </Button>
                    </Link>
                  )}
                  <Link href="/how-it-works">
                    <Button variant="outline" size="xl" className="px-12">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>ZIP code precision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Real-time updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>2,847+ ZIP codes</span>
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