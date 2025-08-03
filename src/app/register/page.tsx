'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function RegisterPageContent() {
  const { isSignedIn, isLoaded } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const selectedPlan = searchParams.get('plan')
  const planPrice = searchParams.get('price')
  const isPremiumPlan = selectedPlan && selectedPlan !== 'free-discovery'

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const redirect = searchParams.get('redirect')
      if (redirect === 'segmentation') {
        router.push('/?finder=true')
      } else if (isPremiumPlan) {
        // Redirect to payment flow after authentication
        router.push(`/checkout?plan=${selectedPlan}&price=${planPrice}`)
      } else {
        router.push('/')
      }
    }
  }, [isSignedIn, isLoaded, router, searchParams, isPremiumPlan, selectedPlan, planPrice])

  if (isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isSignedIn) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-block">
              <div className="text-3xl font-bold gradient-text mb-2">CultrCode™</div>
              <div className="text-sm text-primary-400 tracking-wide">Creator Economy Intelligence</div>
            </Link>
            
            {isPremiumPlan && (
              <div className="mt-4 p-4 bg-accent-500/10 border border-accent-500/20 rounded-lg">
                <div className="text-lg font-semibold text-accent-400 mb-1">
                  {selectedPlan?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Plan
                </div>
                <div className="text-primary-300 text-sm">
                  ${planPrice}/month • Complete registration to continue to payment
                </div>
              </div>
            )}
          </motion.div>

          {/* Register Form */}
          <RegisterForm onSuccess={() => {
            const redirect = searchParams.get('redirect')
            if (redirect === 'segmentation') {
              router.push('/?finder=true')
            } else if (isPremiumPlan) {
              router.push(`/checkout?plan=${selectedPlan}&price=${planPrice}`)
            } else {
              router.push('/')
            }
          }} />
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <RegisterPageContent />
    </Suspense>
  )
}