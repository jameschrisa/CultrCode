'use client'

import { SignUp } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignUpPage() {
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

          {/* Clerk Sign Up Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <SignUp
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-primary-900/95 backdrop-blur-xl border border-primary-700/50 shadow-2xl",
                  headerTitle: "text-primary-50",
                  headerSubtitle: "text-primary-300",
                  socialButtonsBlockButton: "bg-primary-800/50 border-primary-600 text-primary-100 hover:bg-primary-700/50",
                  socialButtonsBlockButtonText: "text-primary-100",
                  dividerLine: "bg-primary-600",
                  dividerText: "text-primary-400",
                  formFieldLabel: "text-primary-200",
                  formFieldInput: "bg-primary-800/50 border-primary-600 text-primary-100 focus:border-accent-400",
                  formButtonPrimary: "bg-accent-500 hover:bg-accent-600 text-white",
                  footerActionLink: "text-accent-400 hover:text-accent-300",
                  identityPreviewText: "text-primary-200",
                  identityPreviewEditButton: "text-accent-400"
                },
                variables: {
                  colorPrimary: "#8B5CF6",
                  colorBackground: "#0F172A",
                  colorInputBackground: "#1E293B",
                  colorInputText: "#E2E8F0"
                }
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}