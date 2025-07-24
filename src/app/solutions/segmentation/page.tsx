'use client'

import { motion } from 'framer-motion'
import { Target, Users, Brain, Zap, ArrowRight, CheckCircle, Play, Star, TrendingUp } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { ProfileAvatar } from '@/components/ui/ProfileAvatar'

export default function SegmentationPage() {
  const { isAuthenticated, canAccessPremium } = useAuth()

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Stop Launching Blindly",
      description: "67% of creator products fail - replace guesswork with precision audience intelligence that identifies your ideal micro-audience."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Intelligence",
      description: "While competitors analyze the past, we predict cultural trends and emerging micro-communities before they scale."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "87% Accuracy Rate",
      description: "Our AI analyzes 500M+ cultural data points to deliver 87% accuracy in audience prediction vs 65% industry standard."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "6x Faster Insights",
      description: "From insight to launch in 72 hours, not 3-8 months. Mobile-first dashboard for real-time decision making."
    }
  ]

  const features = [
    {
      title: "Smart Segment Matching",
      description: "AI analyzes your brand description, category, and target audience to match you with ideal customer segments",
      icon: "🎯"
    },
    {
      title: "Behavioral Insights",
      description: "Understand how your audience shops, what they value, and which platforms they use most actively",
      icon: "🧠"
    },
    {
      title: "Creator Affinity Scoring",
      description: "See how likely your audience is to support creator-founded brands and purchase from emerging companies",
      icon: "⭐"
    },
    {
      title: "Competition Analysis",
      description: "Discover which brands your ideal customers already follow and how to differentiate your positioning",
      icon: "📊"
    },
    {
      title: "Platform Preferences",
      description: "Learn which social platforms, marketplaces, and channels your segments prefer for discovery and purchase",
      icon: "📱"
    },
    {
      title: "Spending Power Intel",
      description: "Understand purchasing behavior, price sensitivity, and willingness to pay premium for authentic brands",
      icon: "💰"
    }
  ]

  const testimonials = [
    {
      name: "Maya Patel",
      role: "Founder, Conscious Beauty Co.",
      content: "CultrCode showed me my customers weren't who I thought they were. I pivoted my entire marketing strategy and 3x'd my conversion rate in the first month.",
      image: "/images/testimonials/maya-founder.jpg",
      initials: "MF",
      metric: "3x Conversion Rate"
    },
    {
      name: "James Rodriguez",
      role: "Creator, Sustainable Living",
      content: "I was targeting millennials but CultrCode revealed my real audience was Gen Z eco-warriors. Total game changer for my content strategy.",
      image: "/images/testimonials/alex-creator.jpg",
      initials: "AC",
      metric: "2.5x Engagement"
    },
    {
      name: "Sarah Kim",
      role: "Fashion Brand Founder",
      content: "The creator affinity scores were spot on. I focused on the highest-scoring segments and my sales jumped 400% in 6 weeks.",
      image: "/images/testimonials/sara-fashion.jpg",
      initials: "SF",
      metric: "400% Sales Growth"
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
            <div className="inline-flex items-center px-6 py-3 glass-card text-success-300 rounded-full text-sm font-semibold border border-success-500/20">
              <Target className="w-5 h-5 mr-2" />
              Free Forever • No Credit Card Required
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              AI-Powered Audience
              <span className="gradient-text block">Segmentation</span>
              <span className="text-primary-300 text-2xl lg:text-3xl font-medium block mt-4">
                Built for Creator Brands
              </span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              While competitors analyze the past, we predict the future. Our AI discovers emerging micro-communities and behavioral segments before your competition, helping creator brands and challenger startups identify their ideal customers with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={isAuthenticated ? "/" : "/register"}>
                <Button size="xl" className="px-12 shadow-xl hover:shadow-accent-500/30">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Analysis
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>Results in 60 seconds</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>87% accuracy rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>1000+ creator brands served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Segmentation Matters */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Why Creator Brands & Challenger Startups Choose CultrCode
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Traditional market research takes 3-8 months and costs $25K-100K. We deliver cultural intelligence in 72 hours for emerging brands that need to move fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-500/20 rounded-xl text-accent-400">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50 mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-primary-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Everything You Need to Know Your Audience
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Our comprehensive analysis reveals the insights that matter most for creator brand success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-primary-50 mb-3 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-primary-300 group-hover:text-primary-200 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Real Results from Real Creators
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              See how accurate audience segmentation has transformed creator brand launches and growth strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <ProfileAvatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        initials={testimonial.initials}
                        size="lg"
                      />
                      <div>
                        <div className="font-bold text-primary-50">{testimonial.name}</div>
                        <div className="text-sm text-primary-400">{testimonial.role}</div>
                        <div className="text-sm font-bold text-success-400">{testimonial.metric}</div>
                      </div>
                    </div>
                    <p className="text-primary-200 italic leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </CardContent>
                </Card>
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
                  Ready to Know Your Perfect Audience?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Join 1,000+ creator brands who discovered their ideal customers with CultrCode. 
                  Start your free analysis in under 60 seconds.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={isAuthenticated ? "/" : "/register"}>
                    <Button size="xl" className="px-12">
                      <Target className="w-5 h-5 mr-2" />
                      Start Free Analysis
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="outline" size="xl" className="px-12">
                      View Pricing
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Free forever plan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span>Setup in 60 seconds</span>
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