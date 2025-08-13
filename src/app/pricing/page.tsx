'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Crown, Zap, FileText, MapPin, Users, TrendingUp, Shield, Phone, Star } from 'lucide-react'
import { FaRobot, FaMapMarkedAlt, FaFileInvoiceDollar } from 'react-icons/fa'
import { RiAiGenerate, RiBrainFill } from 'react-icons/ri'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { OptimizedImage, ImagePresets } from '@/components/ui/OptimizedImage'
import { SimpleImage } from '@/components/ui/SimpleImage'
import { getImageWithAttribution } from '@/lib/imageConfig'
import { useAuth, useUser } from '@clerk/nextjs'
import { useCheckout } from '@/hooks/useCheckout'
import { getSubscriptionAccess, getSubscriptionTier } from '@/lib/subscription'
import Link from 'next/link'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)
  // Updated with real Stripe pricing - v2
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  const { createCheckoutSession } = useCheckout()
  
  // Get current user's subscription information
  const currentTier = user ? getSubscriptionTier(user) : 'free'
  const subscriptionAccess = user ? getSubscriptionAccess(user) : null
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return subscriptionAccess?.hasAdvancedFeatures || false
  }

  // Map plan names to Stripe price IDs 
  const getPriceId = (planName: string) => {
    const priceIds = {
      'scouts': 'price_1Rv7V8AhoMB1H3i83iN3dm0G', // $29.99/month
      'curators': 'price_1Rv7W4AhoMB1H3i8VlejcIyQ',    // $69.00/month
      'insiders': 'price_1Rv7WlAhoMB1H3i8xQBFS9vK'           // $649.00/month
    }
    return priceIds[planName.toLowerCase().replace(/\s+/g, '-') as keyof typeof priceIds]
  }

  const handlePlanSelect = async (plan: any) => {
    // Handle Insiders plan immediately without loading state
    if (plan.name === 'Insiders') {
      window.location.href = '/sales'
      return
    }
    
    const planKey = plan.name.toLowerCase().replace(/\s+/g, '-')
    const priceId = getPriceId(plan.name)
    
    try {
      setLoadingPlan(plan.name) // Set loading for this specific plan
      
      if (!priceId) {
        console.error('No price ID found for plan:', plan.name)
        alert('No pricing information found for this plan. Please try again later.')
        return
      }

      await createCheckoutSession({
        planName: planKey,
        priceId: priceId
      })
    } catch (error) {
      console.error('Plan selection error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoadingPlan(null) // Reset loading state
    }
  }

  // Function to determine button content and behavior based on user's current tier
  const getButtonProps = (plan: any) => {
    const planKey = plan.name.toLowerCase().replace(/\s+/g, '-')
    
    // If user has this tier or higher, show "Current Plan" or "Manage"
    if (currentTier === planKey) {
      return {
        text: 'Current Plan',
        disabled: true,
        variant: 'outline' as const,
        onClick: undefined
      }
    }
    
    // If user has a higher tier, show "Downgrade" (disabled)  
    const tierOrder = ['free', 'scouts', 'curators', 'insiders']
    const currentIndex = tierOrder.indexOf(currentTier)
    const planIndex = tierOrder.indexOf(planKey)
    
    if (currentIndex > planIndex && currentIndex > 0) {
      return {
        text: 'Downgrade',
        disabled: true,
        variant: 'outline' as const,
        onClick: undefined
      }
    }
    
    // Otherwise show upgrade option
    return {
      text: plan.cta,
      disabled: false,
      variant: plan.ctaVariant,
      onClick: () => handlePlanSelect(plan)
    }
  }

  const plans = [
    {
      name: 'Free Discovery',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for exploring your core audience and getting started',
      features: [
        { name: 'Basic audience discovery', included: true },
        { name: 'Top 3 customer segments', included: true },
        { name: 'High-level demographic insights', included: true },
        { name: 'Mobile-optimized experience', included: true },
        { name: 'Micro-community access', included: false },
        { name: 'Subcultural trend analysis', included: false },
        { name: 'Emerging community alerts', included: false },
        { name: 'Cultural movement tracking', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Start Now',
      ctaVariant: 'outline' as const,
      popular: false,
      highlight: false
    },
    {
      name: 'Scouts',
      price: { monthly: 29.99, annual: 29.99 },
      description: 'Access to 25+ micro-communities and trend analysis',
      features: [
        { name: 'Everything in Free', included: true },
        { name: 'Access to 25+ micro-communities', included: true },
        { name: 'Monthly trend reports', included: true },
        { name: 'Community growth tracking', included: true },
        { name: 'Basic cultural insights', included: true },
        { name: 'Real-time trend alerts', included: false },
        { name: 'Full 100+ community access', included: false },
        { name: 'Predictive trend analysis', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Upgrade',
      ctaVariant: 'primary' as const,
      popular: false,
      highlight: false,
      badge: 'Perfect for creators'
    },
    {
      name: 'Curators',
      price: { monthly: 69.00, annual: 69.00 },
      description: 'Advanced trend prediction and cultural movement tracking',
      features: [
        { name: 'Everything in Scouts', included: true },
        { name: 'Full 100+ micro-community access', included: true },
        { name: 'Real-time trend alerts', included: true },
        { name: 'Predictive cultural analysis', included: true },
        { name: 'Weekly subcultural briefings', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom integrations', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Dedicated account manager', included: false }
      ],
      cta: 'Unlock Now',
      ctaVariant: 'primary' as const,
      popular: true,
      highlight: true,
      badge: 'Most Popular'
    },
    {
      name: 'Insiders',
      price: { monthly: 649.00, annual: 649.00 },
      description: 'Complete cultural intelligence platform with custom solutions',
      features: [
        { name: 'Everything in Curators', included: true },
        { name: 'Multi-brand community analysis', included: true },
        { name: 'Team collaboration features', included: true },
        { name: 'Custom trend tracking', included: true },
        { name: 'Dedicated cultural analyst', included: true },
        { name: 'Custom community reports', included: true },
        { name: 'API access', included: true },
        { name: 'White-label options', included: true },
        { name: 'SLA guarantees', included: true }
      ],
      cta: 'Contact Sales',
      ctaVariant: 'outline' as const,
      popular: false,
      highlight: false
    }
  ]

  const faq = [
    {
      question: "How accurate is the segment matching?",
      answer: "Our AI-powered algorithm delivers 95% accuracy in customer matching, trained on millions of data points from successful creator launches. The system continuously learns and improves with each analysis."
    },
    {
      question: "What makes CultrCode different from other tools?",
      answer: "CultrCode is purpose-built for the creator economy with our proprietary 48-segment framework, GIS technology for ZIP code precision, and AI specifically trained on creator brand data - not generic demographics."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle. We'll prorate any differences."
    },
    {
      question: "What's included in the Premium Report?",
      answer: "The Premium Report includes a 15-page comprehensive strategy with detailed customer personas, ZIP code analysis, competitive intelligence, 90-day launch timeline, and budget allocation recommendations."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with your results, we'll provide a full refund, no questions asked."
    },
    {
      question: "How does the geographic intelligence work?",
      answer: "Our GIS technology analyzes demographic data across 2,847+ ZIP codes, showing you exactly where your customers live, their income levels, age distribution, and the best marketing channels for each area."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, Glow Naturals",
      content: "CultrCode helped us identify our perfect customer segment and launch locations. We hit $50K in sales in our first month - something we never achieved with generic targeting.",
      rating: 5,
      imageKey: "testimonials.sarah"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creator, FitLife App",
      content: "The competitor analysis was a game-changer. We discovered market gaps that our competitors missed and positioned ourselves perfectly. Worth every penny.",
      rating: 5,
      imageKey: "testimonials.marcus"
    },
    {
      name: "Emma Johnson",
      role: "CEO, Sustainable Style",
      content: "The ZIP code intelligence was incredibly accurate. We focused our launch on their top 5 recommended areas and saw 3x higher conversion rates than our previous launches.",
      rating: 5,
      imageKey: "testimonials.emma"
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20">
              <Crown className="w-5 h-5 mr-2" />
              Transparent Pricing
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Discover Emerging
              <span className="gradient-text block">Micro-Communities</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              From free audience discovery to premium subcultural intelligence. 
              Explore 100+ emerging micro-communities and cultural trends shaping consumer behavior.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-primary-200' : 'text-primary-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-14 h-7 bg-primary-700 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <div className={`w-5 h-5 bg-accent-500 rounded-full transition-transform ${billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-primary-200' : 'text-primary-400'}`}>
                Annual
              </span>
              <div className="inline-flex items-center px-2 py-1 bg-success-500/20 text-success-300 rounded-full text-xs font-semibold">
                Save 20%
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-accent-500 text-primary-950 px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <Card className={`glass-card h-full relative transition-all duration-300 ${
                  plan.highlight ? 'border-accent-500 shadow-2xl shadow-accent-500/25' : 'hover:border-accent-500/30'
                }`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-primary-50 text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="text-4xl font-black text-primary-100 mb-2">
                      {typeof plan.price.monthly === 'number' ? (
                        <>
                          ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                          {plan.price.monthly > 0 && (
                            <span className="text-lg font-normal text-primary-400">
                              /month
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-3xl">{plan.price.monthly}</span>
                      )}
                    </div>
                    <p className="text-sm text-primary-300 leading-relaxed">
                      {plan.description}
                    </p>
                    {plan.badge && !plan.popular && (
                      <div className="inline-flex items-center px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs font-semibold mt-2">
                        {plan.badge}
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-success-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-primary-200' : 'text-primary-500'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {plan.name === 'Free Discovery' ? (
                      <Link href="/sign-up">
                        <Button
                          variant={plan.ctaVariant}
                          className="w-full"
                          size="lg"
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    ) : (() => {
                      const buttonProps = getButtonProps(plan)
                      return (
                        <Button
                          variant={buttonProps.variant}
                          className={`w-full ${plan.highlight ? 'bg-accent-500 hover:bg-accent-600' : ''}`}
                          size="lg"
                          onClick={buttonProps.onClick}
                          disabled={buttonProps.disabled || loadingPlan === plan.name}
                        >
                          {loadingPlan === plan.name ? 'Processing...' : buttonProps.text}
                        </Button>
                      )
                    })()}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              What&apos;s Included in Each Plan
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Compare features and find the perfect plan for your creator brand needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <RiAiGenerate className="w-6 h-6" />,
                title: "Micro-Community Access",
                free: "Basic discovery",
                standard: "25+ communities",
                pro: "100+ communities",
                insiders: "Unlimited access"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Trend Analysis",
                free: "Overview only",
                standard: "Monthly reports",
                pro: "Real-time alerts",
                insiders: "Predictive insights"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Cultural Intelligence",
                free: "Basic insights",
                standard: "Community tracking",
                pro: "Subcultural briefings",
                insiders: "Custom analysis"
              },
              {
                icon: <HiSparkles className="w-6 h-6" />,
                title: "Emerging Movements",
                free: "Not included",
                standard: "Growth tracking",
                pro: "Predictive analysis",
                insiders: "Custom tracking"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Team Features",
                free: "Individual use",
                standard: "Individual use",
                pro: "Individual use",
                insiders: "Team collaboration"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Support Level",
                free: "Community",
                standard: "Email support",
                pro: "Priority support",
                insiders: "Cultural analyst"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-accent-500/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary-50">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-primary-400">Free:</span>
                        <span className="text-primary-200">{feature.free}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Explorer:</span>
                        <span className="text-primary-200">{feature.standard}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Curators:</span>
                        <span className="text-accent-300">{feature.pro}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-400">Insiders:</span>
                        <span className="text-brand-300">{feature.insiders}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Trusted by 1,000+ Creators
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              See how CultrCode has helped creators discover emerging micro-communities and tap into cultural trends.
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
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-primary-200 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <SimpleImage
                          src={`/images/${testimonial.imageKey.split('.')[1]}.png`}
                          alt={`${testimonial.name} testimonial photo`}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-100">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-primary-400">
                          {testimonial.role}
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

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-primary-300">
              Everything you need to know about CultrCode pricing and features.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-primary-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
                  Ready to Discover Your Micro-Community?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Join thousands of creators exploring emerging cultural movements 
                  and connecting with their perfect niche communities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {!isSignedIn ? (
                    <>
                      <Link href="/sign-up">
                        <Button size="xl" className="px-12">
                          <Zap className="w-5 h-5 mr-2" />
                          Get Started
                        </Button>
                      </Link>
                      <Link href="/sign-in">
                        <Button variant="outline" size="xl" className="px-12">
                          Sign In
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href={canAccessPremium() ? "/dashboard" : "/analysis"}>
                        <Button size="xl" className="px-12">
                          <Zap className="w-5 h-5 mr-2" />
                          {canAccessPremium() ? "Go to Dashboard" : "Start Analysis"}
                        </Button>
                      </Link>
                      <Button variant="outline" size="xl" className="px-12">
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </Button>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span>Cancel anytime</span>
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