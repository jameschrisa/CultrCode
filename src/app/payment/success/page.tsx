'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user } = useUser()
  const [planName, setPlanName] = useState<string>('')

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan) {
      setPlanName(plan.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()))
    }
  }, [searchParams])

  const planFeatures = {
    'Scouts': [
      'Access to 25+ micro-communities',
      'Monthly trend reports', 
      'Basic audience overlap analysis',
      'Community growth tracking'
    ],
    'Curators': [
      'Predictive trend analysis',
      'Cultural movement tracking',
      'Advanced audience segmentation',
      'Custom trend alerts'
    ],
    'Insiders': [
      'Custom trend analysis',
      'Dedicated account manager',
      'Advanced API access',
      'White-label solutions'
    ]
  }

  const currentFeatures = planFeatures[planName as keyof typeof planFeatures] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 bg-success-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-success-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="border-0 backdrop-blur-xl bg-primary-900/90">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-primary-50 mb-2">
                  🎉 Welcome to {planName}!
                </CardTitle>
                <p className="text-primary-300">
                  Your subscription is now active. Let&apos;s unlock the power of cultural intelligence.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Plan Features */}
                {currentFeatures.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-100 flex items-center">
                      <Crown className="w-5 h-5 mr-2 text-accent-400" />
                      Your New Capabilities
                    </h3>
                    <div className="grid gap-3">
                      {currentFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-accent-500/10 rounded-lg border border-accent-500/20"
                        >
                          <Sparkles className="w-4 h-4 text-accent-400 flex-shrink-0" />
                          <span className="text-primary-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Steps */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary-100">
                    What&apos;s Next?
                  </h3>
                  <div className="grid gap-4">
                    <Link href="/dashboard">
                      <Button className="w-full shadow-xl hover:shadow-accent-500/30">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Explore Your Dashboard
                      </Button>
                    </Link>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link href="/segments">
                        <Button variant="outline" className="w-full">
                          Browse Segments
                        </Button>
                      </Link>
                      <Link href="/communities">
                        <Button variant="outline" className="w-full">
                          Discover Communities
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Support Info */}
                <div className="p-4 bg-brand-500/10 rounded-lg border border-brand-500/20">
                  <h4 className="font-semibold text-brand-300 mb-2">Need Help Getting Started?</h4>
                  <p className="text-sm text-primary-300 mb-3">
                    Our team is here to help you maximize your cultural intelligence platform.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:support@cultrcode.com'}>
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center">
        <div className="text-primary-100">Loading...</div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}