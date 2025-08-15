'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Sparkles, ChevronRight, Video, Camera, Mic, FileText, BarChart3, Users, Flame, Wrench, TrendingUp, Heart, Rocket, DollarSign, Crosshair, Shield, Timer, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { UserInputs } from '@/types/segments'
import { cn } from '@/lib/utils'
import { useAuth, useUser } from '@clerk/nextjs'
import { canAccessFeature } from '@/lib/subscription'

interface PremiumEnhancementProps {
  userInputs: UserInputs
  onEnhance: (enhancedInputs: UserInputs) => void
  onSkip: () => void
}

export function PremiumEnhancement({ userInputs, onEnhance, onSkip }: PremiumEnhancementProps) {
  const { user } = useUser()
  const [showPremiumFeatures, setShowPremiumFeatures] = useState(false)
  
  const { register, handleSubmit, watch, setValue } = useForm<UserInputs>({
    defaultValues: {
      ...userInputs,
      contentFormats: userInputs.contentFormats || [],
      purchaseMotivation: userInputs.purchaseMotivation || [],
      trendAdoption: userInputs.trendAdoption
    }
  })

  const watchedValues = watch()

  // Check user access levels
  const hasStandardAccess = ((user?.publicMetadata as any)?.subscriptionTier || 'free') !== 'free'
  const hasPremiumAccess = canAccessFeature(user, 'canAccessAdvancedSegmentation')

  const onSubmit = (data: UserInputs) => {
    onEnhance(data)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center px-6 py-3 glass-card text-accent-400 rounded-full text-sm font-semibold border border-accent-500/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Enhance Your Results
        </div>
        <h2 className="text-3xl font-bold text-primary-50">
          Make Your Segmentation Even More Powerful
        </h2>
        <p className="text-primary-300 max-w-2xl mx-auto leading-relaxed">
          Add these optional details to get deeper insights, better community matches, and more targeted recommendations in your results.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Content Format Preferences - Standard+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className={`border-0 ${hasStandardAccess ? 'bg-accent-500/5 border-accent-500/20' : 'bg-primary-800/30 border-primary-700/30'}`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-primary-50">
                  <Video className="w-5 h-5 mr-2" />
                  Content Format Preferences
                  {!hasStandardAccess && <Crown className="w-4 h-4 ml-2 text-accent-400" />}
                </CardTitle>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  hasStandardAccess ? 'bg-success-500/20 text-success-400' : 'bg-accent-500/20 text-accent-400'
                }`}>
                  {hasStandardAccess ? 'UNLOCKED' : 'SCOUT+'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-primary-300 text-sm leading-relaxed">
                Match to content-specific communities and optimize your strategy for community preferences.
              </p>

              {hasStandardAccess ? (
                <div>
                  <label className="block text-base font-semibold text-primary-100 mb-4">
                    What content formats work best for your brand? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { value: 'short-form-video', label: 'Short Videos', icon: <Video className="w-4 h-4" /> },
                      { value: 'long-form-video', label: 'Long Videos', icon: <Camera className="w-4 h-4" /> },
                      { value: 'image-posts', label: 'Image Posts', icon: <Camera className="w-4 h-4" /> },
                      { value: 'live-streams', label: 'Live Streams', icon: <Video className="w-4 h-4" /> },
                      { value: 'podcasts', label: 'Podcasts', icon: <Mic className="w-4 h-4" /> },
                      { value: 'written-content', label: 'Articles/Blogs', icon: <FileText className="w-4 h-4" /> },
                      { value: 'polls-quizzes', label: 'Interactive Content', icon: <BarChart3 className="w-4 h-4" /> },
                      { value: 'user-generated-content', label: 'UGC', icon: <Users className="w-4 h-4" /> }
                    ].map((format) => (
                      <label
                        key={format.value}
                        className={cn(
                          "flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                          watchedValues.contentFormats?.includes(format.value as any)
                            ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                            : "border-primary-700 bg-primary-900/30"
                        )}
                      >
                        <input
                          type="checkbox"
                          value={format.value}
                          checked={watchedValues.contentFormats?.includes(format.value as any) || false}
                          onChange={(e) => {
                            const currentFormats = watchedValues.contentFormats || [];
                            if (e.target.checked) {
                              setValue('contentFormats', [...currentFormats, format.value as any]);
                            } else {
                              setValue('contentFormats', currentFormats.filter(f => f !== format.value));
                            }
                          }}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-2">
                          <div className="text-accent-400">
                            {format.icon}
                          </div>
                          <span className="text-sm font-medium text-primary-100">
                            {format.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Crown className="w-8 h-8 text-accent-400" />
                  </div>
                  <p className="text-primary-300">
                    Upgrade to Scout, Curator, or Insider to unlock content format preferences and get matched to content-specific communities.
                  </p>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => window.location.href = '/pricing'}
                  >
                    Upgrade Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Advanced Behavioral Analysis - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className={`border-0 ${hasPremiumAccess ? 'bg-brand-500/5 border-brand-500/20' : 'bg-primary-800/30 border-primary-700/30'}`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-primary-50">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Advanced Behavioral Analysis
                  {!hasPremiumAccess && <Crown className="w-4 h-4 ml-2 text-brand-400" />}
                </CardTitle>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  hasPremiumAccess ? 'bg-success-500/20 text-success-400' : 'bg-brand-500/20 text-brand-400'
                }`}>
                  {hasPremiumAccess ? 'UNLOCKED' : 'CURATOR+'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-primary-300 text-sm leading-relaxed">
                Get deep insights into purchase motivations and trend adoption patterns for precision targeting.
              </p>

              {hasPremiumAccess ? (
                <div className="space-y-6">
                  {/* Purchase Motivation */}
                  <div>
                    <label className="block text-base font-semibold text-primary-100 mb-4">
                      What motivates your customers to buy? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { value: 'trending-now', label: 'What\'s Trending', icon: <Flame className="w-4 h-4" /> },
                        { value: 'solve-problem', label: 'Solve Problems', icon: <Wrench className="w-4 h-4" /> },
                        { value: 'status-symbol', label: 'Status/Image', icon: <Crown className="w-4 h-4" /> },
                        { value: 'self-improvement', label: 'Self Growth', icon: <TrendingUp className="w-4 h-4" /> },
                        { value: 'community-belonging', label: 'Fit In', icon: <Heart className="w-4 h-4" /> },
                        { value: 'early-adopter', label: 'Be First', icon: <Rocket className="w-4 h-4" /> },
                        { value: 'value-conscious', label: 'Best Value', icon: <DollarSign className="w-4 h-4" /> }
                      ].map((motivation) => (
                        <label
                          key={motivation.value}
                          className={cn(
                            "flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all hover:border-brand-400/50 hover:bg-brand-500/5",
                            watchedValues.purchaseMotivation?.includes(motivation.value as any)
                              ? "border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="checkbox"
                            value={motivation.value}
                            checked={watchedValues.purchaseMotivation?.includes(motivation.value as any) || false}
                            onChange={(e) => {
                              const currentMotivations = watchedValues.purchaseMotivation || [];
                              if (e.target.checked) {
                                setValue('purchaseMotivation', [...currentMotivations, motivation.value as any]);
                              } else {
                                setValue('purchaseMotivation', currentMotivations.filter(m => m !== motivation.value));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-2">
                            <div className="text-brand-400">
                              {motivation.icon}
                            </div>
                            <span className="text-sm font-medium text-primary-100">
                              {motivation.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Trend Adoption Speed */}
                  <div>
                    <label className="block text-base font-semibold text-primary-100 mb-4">
                      How quickly do you want to adopt trends?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {[
                        { value: 'trend-creator', label: 'Create Trends', icon: <Crosshair className="w-4 h-4" /> },
                        { value: 'early-adopter', label: 'Early Adopter', icon: <Rocket className="w-4 h-4" /> },
                        { value: 'early-majority', label: 'Early Majority', icon: <Users className="w-4 h-4" /> },
                        { value: 'late-majority', label: 'Late Majority', icon: <Timer className="w-4 h-4" /> },
                        { value: 'trend-resistant', label: 'Classic/Timeless', icon: <Shield className="w-4 h-4" /> }
                      ].map((adoption) => (
                        <label
                          key={adoption.value}
                          className={cn(
                            "flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-brand-400/50 hover:bg-brand-500/5",
                            watchedValues.trendAdoption === adoption.value
                              ? "border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('trendAdoption')}
                            value={adoption.value}
                            className="sr-only"
                          />
                          <div className="flex flex-col items-center space-y-1">
                            <div className="text-brand-400">
                              {adoption.icon}
                            </div>
                            <span className="text-sm font-medium text-primary-100 text-center">
                              {adoption.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-brand-400" />
                  </div>
                  <p className="text-primary-300">
                    Upgrade to Curator or Insider to unlock advanced behavioral analysis and get precision micro-community targeting.
                  </p>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => window.location.href = '/pricing'}
                  >
                    Upgrade Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Enhance My Results
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onSkip}
            className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-[10px]"
          >
            Skip & View Results
          </Button>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-3 pt-4"
        >
          <p className="text-sm text-primary-400">
            All fields are optional. Your basic segmentation is ready - these enhance your results.
          </p>
          {(!hasStandardAccess || !hasPremiumAccess) && (
            <p className="text-sm text-accent-400">
              <Crown className="w-4 h-4 inline mr-1" />
              Upgrade for access to all features and AI-powered persona generation
            </p>
          )}
        </motion.div>
      </form>
    </div>
  )
}