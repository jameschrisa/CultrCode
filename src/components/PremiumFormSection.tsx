'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Sparkles, TrendingUp, Users, Target, Zap, Lock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'

interface PremiumFormSectionProps {
  title: string
  description: string
  tier: 'standard' | 'premium' | 'pro'
  benefits: string[]
  children?: React.ReactNode
  isEnabled?: boolean
  onUpgrade?: () => void
}

const tierConfig = {
  standard: {
    icon: <Sparkles className="w-5 h-5" />,
    color: 'accent',
    gradientFrom: 'from-accent-500/20',
    gradientTo: 'to-brand-500/20',
    borderColor: 'border-accent-500/30',
    textColor: 'text-accent-300',
    buttonText: 'Upgrade to Standard'
  },
  premium: {
    icon: <Crown className="w-5 h-5" />,
    color: 'accent',
    gradientFrom: 'from-accent-500/30',
    gradientTo: 'to-brand-500/30',
    borderColor: 'border-accent-500/40',
    textColor: 'text-accent-300',
    buttonText: 'Upgrade to Premium'
  },
  pro: {
    icon: <Zap className="w-5 h-5" />,
    color: 'brand',
    gradientFrom: 'from-brand-500/30',
    gradientTo: 'to-accent-500/30',
    borderColor: 'border-brand-500/40',
    textColor: 'text-brand-300',
    buttonText: 'Upgrade to Pro'
  }
}

export function PremiumFormSection({
  title,
  description,
  tier,
  benefits,
  children,
  isEnabled = false,
  onUpgrade
}: PremiumFormSectionProps) {
  const { user, canAccessPremium } = useAuth()
  const [showDetails, setShowDetails] = useState(false)
  const config = tierConfig[tier]

  // If user has access to this tier, show the actual form content
  if (isEnabled) {
    return (
      <div className="space-y-6">
        {/* Premium Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`flex items-center px-3 py-1 bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} border ${config.borderColor} rounded-full`}>
              {config.icon}
              <span className={`ml-2 text-sm font-semibold ${config.textColor}`}>
                {tier.charAt(0).toUpperCase() + tier.slice(1)} Feature
              </span>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    )
  }

  // Show upgrade prompt for users without access
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <Card className={`border-0 bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} backdrop-blur-xl ${config.borderColor} border-2`}>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-primary-50">
              {config.icon}
              <span className="ml-2">{title}</span>
              <Lock className="w-4 h-4 ml-2 text-primary-400" />
            </CardTitle>
            <div className={`px-3 py-1 bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} border ${config.borderColor} rounded-full`}>
              <span className={`text-xs font-bold ${config.textColor}`}>
                {tier.toUpperCase()} ONLY
              </span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-primary-300 leading-relaxed">
            {description}
          </p>

          {/* Benefits Preview */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary-100 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              What you&apos;ll unlock:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-primary-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Preview - Blurred */}
          <div className="relative mt-6">
            <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Lock className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <p className="text-sm text-primary-300 font-medium">Unlock to access these controls</p>
              </div>
            </div>
            
            {/* Blurred form preview */}
            <div className="opacity-40 pointer-events-none">
              <div className="space-y-4">
                <div>
                  <div className="block text-sm font-semibold text-primary-100 mb-2">
                    Advanced {tier} Controls
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-primary-800/50 rounded-lg border border-primary-700/50">
                      <div className="h-4 bg-primary-600 rounded animate-pulse"></div>
                    </div>
                    <div className="p-3 bg-primary-800/50 rounded-lg border border-primary-700/50">
                      <div className="h-4 bg-primary-600 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-primary-800/30 rounded-lg border border-primary-700/30">
                  <div className="space-y-2">
                    <div className="h-3 bg-primary-600 rounded animate-pulse w-3/4"></div>
                    <div className="h-3 bg-primary-600 rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-4">
            <Button
              variant="primary"
              onClick={onUpgrade}
              className="flex-1"
            >
              {config.buttonText}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Less Info' : 'Learn More'}
            </Button>
          </div>

          {/* Detailed Benefits */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-primary-700/50 space-y-3"
            >
              <h4 className="font-semibold text-primary-100 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Advanced Insights Include:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Target className="w-3 h-3 text-success-400" />
                    <span className="text-primary-300">Nano-influencer identification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-accent-400" />
                    <span className="text-primary-300">Real-time trend analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-3 h-3 text-brand-400" />
                    <span className="text-primary-300">Microcommunity deep-dive</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-3 h-3 text-accent-400" />
                    <span className="text-primary-300">Behavioral segmentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="w-3 h-3 text-brand-400" />
                    <span className="text-primary-300">Premium analytics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-success-400" />
                    <span className="text-primary-300">Priority support & insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}