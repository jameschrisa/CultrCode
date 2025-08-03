'use client'

import { motion } from 'framer-motion'
import { Users, Eye, Heart, Zap, ArrowRight, CheckCircle, Play, Star, TrendingUp, Search } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function CommunitiesPage() {
  const { isSignedIn } = useAuth(); const { user } = useUser(); const canAccessPremium = () => { if (!user) return false; const publicMetadata = user.publicMetadata as any; const subscriptionTier = publicMetadata?.subscriptionTier || 'free'; return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'; }

  const featuredCommunities = [
    {
      name: "Climate Optimists",
      members: "52K",
      growth: "+285%",
      description: "Solution-focused environmental advocates promoting positive climate action and innovation",
      values: ["Environmental hope", "Tech optimism", "Aesthetic innovation"],
      demographics: "18-34, College-educated, Urban/Suburban",
      platforms: ["Instagram", "TikTok", "Pinterest"],
      brands: ["Patagonia", "Allbirds", "Reformation"],
      icon: "🌱",
      tier: "Premium"
    },
    {
      name: "Goblincore Enthusiasts",
      members: "67K",
      growth: "+425%",
      description: "Aesthetic celebrating nature&apos;s chaotic beauty, collecting shiny objects, and earthy vibes",
      values: ["Authentic self-expression", "Nature connection", "Anti-perfectionism"],
      demographics: "16-28, Creative industries, Rural/Suburban",
      platforms: ["TikTok", "Tumblr", "Instagram"],
      brands: ["Glossier", "The Ordinary", "Lush"],
      icon: "🍄",
      tier: "Free Preview"
    },
    {
      name: "AI Wellness Coaches",
      members: "43K",
      growth: "+310%",
      description: "Tech-savvy wellness practitioners using AI to personalize mental health and fitness",
      values: ["Freedom", "Family-first", "Experience over things"],
      demographics: "28-45, High income, Tech/Creative fields",
      platforms: ["LinkedIn", "Facebook Groups", "YouTube"],
      brands: ["Airbnb", "Away", "Notion"],
      icon: "✈️",
      tier: "Premium"
    },
    {
      name: "Micro-Luxury Living",
      members: "38K",
      growth: "+225%",
      description: "Curating premium experiences in small spaces and minimalist lifestyles",
      values: ["Quality over quantity", "Intentional living", "Aesthetic refinement"],
      demographics: "25-40, High income, Urban",
      platforms: ["Instagram", "Pinterest", "YouTube"],
      brands: ["Muji", "Aesop", "Kinfolk"],
      icon: "✨",
      tier: "Premium"
    }
  ]

  const communityCategories = [
    {
      category: "Aesthetic Movements",
      count: "25+",
      examples: ["Dark Academia", "Cottagecore 2.0", "Y2K Revival", "Maximalist Minimalism"],
      description: "Visual and style communities shaping culture",
      growth: "+280%"
    },
    {
      category: "Lifestyle Philosophy",
      count: "18+",
      examples: ["Slow Living", "Anti-Hustle Culture", "Mindful Tech", "Radical Self-Care"],
      description: "Value-driven communities redefining modern life",
      growth: "+195%"
    },
    {
      category: "Creative Economy",
      count: "22+",
      examples: ["Nano Influencers", "Creator Collective", "Passion Economy", "Skills-First Career"],
      description: "Communities building the future of work",
      growth: "+312%"
    },
    {
      category: "Conscious Consumption",
      count: "15+",
      examples: ["Zero Waste Plus", "Repair Culture", "Local First", "Conscious Luxury"],
      description: "Communities redefining how we buy and consume",
      growth: "+167%"
    },
    {
      category: "Tech Philosophy",
      count: "12+",
      examples: ["Privacy First", "AI Ethics", "Digital Wellness", "Tech Minimalism"],
      description: "Communities navigating technology mindfully",
      growth: "+245%"
    },
    {
      category: "Cultural Movements",
      count: "8+",
      examples: ["Afrofuturism 2.0", "Indigenous Futurism", "Queer Joy", "Neurodiversity Pride"],
      description: "Identity-centered communities creating change",
      growth: "+189%"
    }
  ]

  const insights = [
    {
      title: "Authentic Community Values",
      description: "Understand the deep-rooted beliefs and principles that drive each community's behavior and purchasing decisions.",
      icon: <Heart className="w-6 h-6" />,
      examples: ["Core value mapping", "Belief system analysis", "Motivation drivers"]
    },
    {
      title: "Behavioral Patterns",
      description: "How communities discover, evaluate, and purchase products. From browsing habits to decision-making processes.",
      icon: <Eye className="w-6 h-6" />,
      examples: ["Purchase journey mapping", "Platform preferences", "Content consumption habits"]
    },
    {
      title: "Community Leadership",
      description: "Identify key voices, influencers, and thought leaders who shape opinions and drive trends within each community.",
      icon: <Star className="w-6 h-6" />,
      examples: ["Influence network mapping", "Voice authority scoring", "Trend propagation patterns"]
    },
    {
      title: "Brand Compatibility",
      description: "See which brands each community currently supports and identify gaps for authentic brand positioning.",
      icon: <Search className="w-6 h-6" />,
      examples: ["Brand affinity analysis", "Competition mapping", "Opportunity identification"]
    }
  ]

  const benefits = [
    "Find your perfect niche before competitors discover it",
    "Understand community values for authentic brand positioning",
    "Connect with early adopters and passionate advocates",
    "Build products that communities actually want and need",
    "Create content that resonates with community culture",
    "Identify partnership and collaboration opportunities"
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
              <HiSparkles className="w-5 h-5 mr-2" />
              100+ Micro-Communities & Growing
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Discover Your Perfect
              <span className="gradient-text block">Micro-Community</span>
              <span className="text-primary-300 text-2xl lg:text-3xl font-medium block mt-4">
                Beyond Demographics to True Connection
              </span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Go deeper than age and location. Explore 100+ emerging micro-communities defined by shared values, 
              aesthetics, and lifestyles. Find the tribes that will become your most passionate customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {canAccessPremium() ? (
                <Link href="/explore">
                  <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30">
                    <HiSparkles className="w-5 h-5 mr-2" />
                    Explore Communities
                  </Button>
                </Link>
              ) : (
                <Link href="/pricing">
                  <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30">
                    <Star className="w-5 h-5 mr-2" />
                    Unlock All Communities
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="xl" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>100+ communities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>Real-time growth data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>Cultural intelligence included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Communities Preview */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Featured Micro-Communities
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Explore trending communities that are reshaping consumer behavior and creating new market opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCommunities.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`glass-card h-full relative ${community.tier === 'Premium' && !canAccessPremium() ? 'opacity-75' : ''}`}>
                  {community.tier === 'Premium' && !canAccessPremium() && (
                    <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Star className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-primary-200 mb-3">Premium Content</p>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 mr-2" />
                          Upgrade to View
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{community.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-primary-50">{community.name}</h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-primary-400">{community.members} members</span>
                            <span className="text-success-400 font-medium">{community.growth} growth</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        community.tier === 'Premium' ? 'bg-accent-500/20 text-accent-400' : 'bg-success-500/20 text-success-400'
                      }`}>
                        {community.tier}
                      </span>
                    </div>

                    <p className="text-primary-300 mb-6 leading-relaxed">
                      {community.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Core Values</h4>
                        <div className="flex flex-wrap gap-2">
                          {community.values.map((value, valueIndex) => (
                            <span key={valueIndex} className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded text-xs">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Demographics</h4>
                        <p className="text-sm text-primary-200">{community.demographics}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Top Platforms</h4>
                        <div className="flex space-x-2">
                          {community.platforms.map((platform, platformIndex) => (
                            <span key={platformIndex} className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded text-xs">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-primary-400 mb-2">Brands They Love</h4>
                        <div className="flex space-x-2">
                          {community.brands.map((brand, brandIndex) => (
                            <span key={brandIndex} className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded text-xs">
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              100+ Communities Across 6 Categories
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              From aesthetic movements to tech philosophy, we&apos;ve mapped the emerging communities shaping culture and commerce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary-50">{category.category}</h3>
                      <div className="text-right">
                        <div className="text-sm font-medium text-accent-400">{category.count}</div>
                        <div className="text-xs text-success-400">{category.growth}</div>
                      </div>
                    </div>
                    
                    <p className="text-primary-300 mb-4 text-sm">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-primary-400 mb-2">Examples:</div>
                      {category.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                          <span className="text-xs text-primary-200">{example}</span>
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

      {/* Deep Insights */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Go Beyond Surface-Level Demographics
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Our community intelligence reveals the deep cultural insights that drive authentic connections and lasting customer relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
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
                        {insight.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50 mb-3">
                          {insight.title}
                        </h3>
                        <p className="text-primary-300 mb-4">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary-400 mb-2">What You Get:</div>
                      {insight.examples.map((example, exampleIndex) => (
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

      {/* Benefits */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Why Creator Brands Love Micro-Community Intelligence
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Connect with passionate communities that become your most loyal customers and authentic brand advocates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 glass-card rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
                <span className="text-primary-200">{benefit}</span>
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
                  Find Your Perfect Community Match
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Stop casting wide nets. Connect with micro-communities that share your values 
                  and will become your most passionate advocates.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {canAccessPremium() ? (
                    <Link href="/explore">
                      <Button size="xl" className="px-12">
                        <HiSparkles className="w-5 h-5 mr-2" />
                        Explore Communities
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/pricing">
                      <Button size="xl" className="px-12">
                        <Star className="w-5 h-5 mr-2" />
                        Unlock All Communities
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
                    <span>100+ communities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Cultural intelligence included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Real-time updates</span>
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