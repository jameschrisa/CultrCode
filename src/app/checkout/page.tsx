'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Crown, Shield, CheckCircle, CreditCard, Lock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function CheckoutPageContent() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const selectedPlan = searchParams.get('plan')
  const planPrice = searchParams.get('price')
  const billingCycle = searchParams.get('billing') || 'monthly'
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (!isLoaded && !isSignedIn) {
      router.push(`/sign-up?plan=${selectedPlan}&price=${planPrice}`)
    }
  }, [isSignedIn, isLoaded, router, selectedPlan, planPrice])

  const handlePayment = async () => {
    setIsProcessing(true)
    
    try {
      // Here you would integrate with Stripe
      // For now, we'll simulate the payment process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // After successful payment, redirect to dashboard
      router.push('/dashboard?welcome=true')
    } catch (error) {
      console.error('Payment failed:', error)
      setIsProcessing(false)
    }
  }

  if (isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isSignedIn) {
    return null // Will redirect
  }

  const planDetails = {
    'scouts': {
      name: 'Scouts',
      price: { monthly: 29.99, annual: 287.90 },
      features: [
        'Access to 25+ micro-communities',
        'Monthly trend reports',
        'Community growth tracking',
        'Basic cultural insights',
        'Email support'
      ]
    },
    'curators': {
      name: 'Curators',
      price: { monthly: 69.00, annual: 662.40 },
      features: [
        'Full 100+ micro-community access',
        'Real-time trend alerts',
        'Predictive cultural analysis',
        'Weekly subcultural briefings',
        'Priority support',
        '10 Personas',
        'Interactive Personas',
        'Hyperlocal Maps'
      ]
    },
    'insiders': {
      name: 'Insiders',
      price: { monthly: 249.00, annual: 2390.40 },
      features: [
        'Everything in Curators',
        'Multi-brand community analysis',
        'Team collaboration features',
        'Custom trend tracking',
        'Dedicated cultural analyst',
        'Custom community reports',
        'API access',
        'White-label options',
        'SLA guarantees'
      ]
    }
  }

  const currentPlan = planDetails[selectedPlan as keyof typeof planDetails]

  if (!currentPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-primary-300 mb-4">Invalid plan selected</div>
          <Link href="/pricing">
            <Button>Return to Pricing</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-bold gradient-text">CultrCode™</div>
            </Link>
            
            <div className="flex items-center justify-center space-x-2 text-primary-400 mb-4">
              <Link href="/pricing" className="hover:text-accent-400 transition-colors">
                <ArrowLeft className="w-4 h-4 inline mr-1" />
                Back to Pricing
              </Link>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-2">
              Complete Your Subscription
            </h1>
            <p className="text-primary-300">
              Welcome {user?.firstName || 'there'}! You&apos;re just one step away from unlocking cultural intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Plan Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-accent-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-50">{currentPlan.name} Plan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-primary-50">
                      ${billingCycle === 'monthly' 
                        ? currentPlan.price.monthly.toFixed(2)
                        : (currentPlan.price.annual / 12).toFixed(2)
                      }
                    </span>
                    <span className="text-primary-400">/month</span>
                    {billingCycle === 'annual' && (
                      <span className="text-sm text-primary-500 line-through ml-2">
                        ${currentPlan.price.monthly.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <div className="inline-flex items-center px-3 py-1 bg-success-500/20 text-success-300 rounded-full text-sm font-semibold">
                      Save ${(currentPlan.price.monthly * 12 - currentPlan.price.annual).toFixed(2)}/year with annual billing
                    </div>
                  )}
                  
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-primary-400 mt-1">
                      ${currentPlan.price.annual.toFixed(2)} billed annually
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary-300 uppercase tracking-wide">
                      What&apos;s Included:
                    </div>
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-success-400 flex-shrink-0" />
                        <span className="text-primary-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-sm text-primary-400">
                      <Shield className="w-4 h-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-50">Payment Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Mock Stripe Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Card Number
                      </label>
                      <div className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500">
                        **** **** **** 4242
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-300 mb-2">
                          Expiry
                        </label>
                        <div className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200">
                          12/28
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-300 mb-2">
                          CVC
                        </label>
                        <div className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200">
                          ***
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Billing Email
                      </label>
                      <div className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200">
                        {user?.emailAddresses[0]?.emailAddress}
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-800/30 rounded-lg p-4">
                    <div className="text-sm text-primary-300 mb-2">Order Summary:</div>
                    <div className="flex justify-between items-center text-primary-200">
                      <span>{currentPlan.name} Plan ({billingCycle})</span>
                      <span>
                        ${billingCycle === 'monthly' 
                          ? currentPlan.price.monthly.toFixed(2)
                          : (currentPlan.price.annual / 12).toFixed(2)
                        }/month
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="flex justify-between items-center text-primary-300 text-sm mt-1">
                        <span>Annual total:</span>
                        <span>${currentPlan.price.annual.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <div className="flex justify-between items-center font-semibold text-primary-50">
                        <span>Total</span>
                        <span>
                          ${billingCycle === 'monthly' 
                            ? currentPlan.price.monthly.toFixed(2)
                            : (currentPlan.price.annual / 12).toFixed(2)
                          }/month
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4"
                    size="lg"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Lock className="w-4 h-4" />
                        <span>
                          Complete Payment • ${billingCycle === 'monthly' 
                            ? currentPlan.price.monthly.toFixed(2)
                            : (currentPlan.price.annual / 12).toFixed(2)
                          }/month
                        </span>
                      </div>
                    )}
                  </Button>

                  <div className="text-xs text-primary-500 text-center">
                    <p className="flex items-center justify-center space-x-1">
                      <Lock className="w-3 h-3" />
                      <span>Secure payment powered by Stripe</span>
                    </p>
                    <p className="mt-1">
                      By clicking &quot;Complete Payment&quot;, you agree to our Terms of Service and Privacy Policy. 
                      You can cancel anytime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CheckoutPageContent />
    </Suspense>
  )
}