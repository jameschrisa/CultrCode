'use client'

import { motion } from 'framer-motion'
import { Brain, ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PersonaGenerator } from '@/components/PersonaGenerator'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function GeneratePersonaPage() {
  return (
    <ProtectedRoute requiredPermission="view_premium_reports">
      <div className="min-h-screen relative overflow-hidden">
        <Header />
        
        {/* Floating background orbs */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
          <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
          <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
          <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
        </div>

        {/* Header Section */}
        <section className="relative z-10 pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Back Navigation */}
              <Link href="/solutions/personas">
                <Button variant="outline" size="sm" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Personas
                </Button>
              </Link>
              
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-accent-400" />
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-black text-primary-50">
                    Generate
                    <span className="gradient-text ml-3">AI Persona</span>
                  </h1>
                </div>
                
                <p className="text-lg text-primary-300 max-w-3xl mx-auto leading-relaxed">
                  Create detailed psychographic personas by calibrating behavioral factors, social preferences, 
                  lifestyle attributes, and core values. Our AI will generate comprehensive insights based on your inputs.
                </p>

                <div className="flex items-center justify-center space-x-8 text-sm text-primary-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-400 rounded-full" />
                    <span>16 Psychographic Factors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-400 rounded-full" />
                    <span>Segment Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full" />
                    <span>Community Data</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Generator Section */}
        <section className="relative z-10 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PersonaGenerator />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}