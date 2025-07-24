'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { LoginForm } from '@/components/auth/LoginForm'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

function LoginPageContent() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const redirect = searchParams.get('redirect')
      if (redirect === 'segmentation') {
        router.push('/?finder=true')
      } else {
        router.push('/')
      }
    }
  }, [isAuthenticated, isLoading, router, searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isAuthenticated) {
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
          </motion.div>

          {/* Login Form */}
          <LoginForm onSuccess={() => {
            const redirect = searchParams.get('redirect')
            if (redirect === 'segmentation') {
              router.push('/?finder=true')
            } else {
              router.push('/')
            }
          }} />
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  )
}