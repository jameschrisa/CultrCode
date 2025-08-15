'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Brain, MapPin, FileText, Users, TrendingUp, Zap, CheckCircle, Play, Sparkles, Star, UserCheck } from 'lucide-react'
import { FaRobot, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa'
import { RiAiGenerate, RiBrainFill } from 'react-icons/ri'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { OptimizedImage, ImagePresets } from '@/components/ui/OptimizedImage'
import { SimpleImage } from '@/components/ui/SimpleImage'
import { getImageWithAttribution } from '@/lib/imageConfig'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function HowItWorks() {
  const { isSignedIn } = useAuth(); const { user } = useUser(); const canAccessPremium = () => { if (!user) return false; const publicMetadata = user.publicMetadata as any; const subscriptionTier = publicMetadata?.subscriptionTier || 'free'; return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'; }
  
  const steps = [
    {
      number: 1,
      title: "AI Audience Segmentation",
      description: "Get precise audience insights with our free discovery tool. Perfect for creators, challenger brands, and startups understanding their market segments.",
      icon: <Target className="w-8 h-8" />,
      details: [
        "95% accuracy segmentation",
        "48 specialized segments",
        "Instant demographic matching",
        "Free registration required"
      ],
      visual: "Segmentation Tool Interface"
    },
    {
      number: 2,
      title: "Micro-Community Discovery",
      description: "Explore 100+ emerging micro-communities and subcultural movements. Find untapped markets before they go mainstream.",
      icon: <HiSparkles className="w-8 h-8" />,
      details: [
        "100+ micro-communities tracked",
        "Real-time growth metrics",
        "Community behavior insights",
        "Cultural authenticity guides"
      ],
      visual: "Community Discovery Dashboard"
    },
    {
      number: 3,
      title: "Emerging Trends Intelligence",
      description: "Track cultural movements and spot trends 6-12 months before they hit mainstream. Stay ahead of your competition.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: [
        "Early trend detection",
        "50+ trend categories",
        "Virality prediction scoring",
        "Market timing insights"
      ],
      visual: "Trends Intelligence Platform"
    },
    {
      number: 4,
      title: "Generated Personas",
      description: "Create AI-powered psychographic personas that reveal deep insights about your ideal customers.",
      icon: <Star className="w-8 h-8" />,
      details: [
        "1K-10K follower range",
        "Brand alignment scoring",
        "Engagement rate analysis",
        "Authentic creator matching"
      ],
      visual: "Persona Generation Tool"
    }
  ]

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Audience Segmentation",
      description: "Precision audience discovery for creators, challenger brands, and innovative startups",
      stats: "95% accuracy"
    },
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: "Micro-Community Discovery",
      description: "Explore 100+ emerging cultural movements and niche markets before they explode",
      stats: "100+ communities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Emerging Trends Intelligence",
      description: "Spot cultural trends 6-12 months early and position your brand for viral growth",
      stats: "6-12 months early"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Generated Personas",
      description: "AI-powered psychographic profiles that reveal customer motivations and behaviors",
      stats: "Behavioral insights"
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-success-400" />,
      title: "Find Your Perfect Market",
      description: "Discover untapped audiences and emerging communities that align with your brand or product vision."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-success-400" />,
      title: "Launch with Confidence",
      description: "Get market intelligence that transforms guesswork into data-driven launch strategies."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-success-400" />,
      title: "Beat the Competition",
      description: "Access trends and communities 6-12 months before they become mainstream opportunities."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-success-400" />,
      title: "Understand Your Customers",
      description: "Generate detailed personas that reveal customer values, motivations, and decision-making patterns."
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20">
                <HiSparkles className="w-5 h-5 mr-2" />
                For Creators, Challenger Brands & Startups
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
                Launch with
                <span className="gradient-text block">Market Intelligence</span>
              </h1>
              
              <p className="text-xl text-primary-300 leading-relaxed">
                From AI audience segmentation to emerging trends intelligence. Get the market insights 
                your brand needs to find the perfect audience and launch with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {!isSignedIn ? (
                  <>
                    <Link href="/sign-up">
                      <Button variant="outline" size="lg" className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                        <HiSparkles className="w-5 h-5 mr-2" />
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button variant="outline" size="lg" className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                        Sign In
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={canAccessPremium() ? "/dashboard" : "/sign-up?redirect=segmentation"}>
                      <Button variant="outline" size="lg" className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                        <HiSparkles className="w-5 h-5 mr-2" />
                        {canAccessPremium() ? "Go to Dashboard" : "Start Free Analysis"}
                      </Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button variant="outline" size="lg" className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                        Dashboard
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto lg:max-w-lg aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
                  <SimpleImage
                    src="/images/hero.png"
                    alt="Professional woman working on laptop with confidence"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-brand-500/20 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Four Steps to Market Domination
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Our comprehensive platform combines AI segmentation, community discovery, trend intelligence, 
              and persona generation to help creators, challenger brands, and startups launch with confidence.
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent-400 mb-1">
                        STEP {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-primary-50">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-primary-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mt-3 flex-shrink-0" />
                        <span className="text-primary-200 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <Card className="glass-card border-accent-500/20">
                    <CardContent className="p-8">
                      {step.number === 1 && (
                        <SimpleImage
                          src="/images/UX-segmentation.png"
                          alt="AI Audience Segmentation Interface"
                          className="w-full rounded-xl"
                        />
                      )}
                      {step.number === 2 && (
                        <SimpleImage
                          src="/images/UX-microcommunities.png"
                          alt="Micro-Community Discovery Dashboard"
                          className="w-full rounded-xl"
                        />
                      )}
                      {step.number === 3 && (
                        <SimpleImage
                          src="/images/UX-trends.png"
                          alt="Emerging Trends Intelligence Platform"
                          className="w-full rounded-xl"
                        />
                      )}
                      {step.number === 4 && (
                        <SimpleImage
                          src="/images/UX-personas.png"
                          alt="Generated Personas Dashboard"
                          className="w-full rounded-xl"
                        />
                      )}
                      <div className="mt-4 text-center">
                        <div className="text-sm text-primary-400 uppercase tracking-wide">
                          {step.visual}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Complete Market Intelligence Suite
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              CultrCode combines AI-powered segmentation, community tracking, trend intelligence, 
              and persona generation to deliver market insights no other platform can match.
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
                <Card className="glass-card hover:border-accent-500/30 transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-500/20 rounded-xl">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-50 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-primary-300 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-success-500/20 text-success-300 rounded-full text-sm font-semibold">
                          {feature.stats}
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

      {/* Benefits Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Why Innovative Brands Choose CultrCode™
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Join 1,000+ creators, challenger brands, and startups who have transformed their launches 
              with data-driven market intelligence and trend insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                {benefit.icon}
                <div>
                  <h3 className="text-xl font-bold text-primary-50 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
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
                  Ready to Dominate Your Market?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Stop guessing about your market. Get precise audience insights, trend intelligence, 
                  and community data that transform launches from hope to certainty.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {!isSignedIn ? (
                    <>
                      <Link href="/sign-up?redirect=segmentation">
                        <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                          <Zap className="w-5 h-5 mr-2" />
                          Start Free Analysis
                        </Button>
                      </Link>
                      <Link href="/sign-in">
                        <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                          Sign In
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href={canAccessPremium() ? "/dashboard" : "/sign-up?redirect=segmentation"}>
                        <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                          <Zap className="w-5 h-5 mr-2" />
                          {canAccessPremium() ? "Go to Dashboard" : "Start Free Analysis"}
                        </Button>
                      </Link>
                      <Link href="/pricing">
                        <Button variant="outline" size="xl" className="px-12 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]">
                          View Pricing
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>Results in 60 seconds</span>
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