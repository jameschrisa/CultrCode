'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Target, Sparkles, ChevronRight, Zap, MapPin, Star, Video, Camera, Mic, FileText, BarChart3, Users, Flame, Wrench, Crown, TrendingUp, Heart, Rocket, DollarSign, Crosshair, Shield, Timer, UserCheck, Palette, Dumbbell, Monitor, Shirt, Utensils, Leaf, Smartphone, Target as TargetIcon, Home, Briefcase, PawPrint, Baby, Car, Plane } from 'lucide-react'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { UserInputs, SegmentMatch, TargetCity } from '@/types/segments'
import { SegmentMatcher } from '@/lib/segmentMatcher'
import { cn } from '@/lib/utils'
import { useAuth, useUser } from '@clerk/nextjs'
import { canAccessFeature } from '@/lib/subscription'
import { CitySelector } from '@/components/CitySelector'
import { PremiumFormSection } from '@/components/PremiumFormSection'
import { AudioTextArea } from '@/components/ui/AudioTextArea'

interface SegmentFinderProps {
  onResults?: (matches: SegmentMatch[], userInputs: UserInputs) => void
  isPremiumMode?: boolean
}

export function SegmentFinder({ onResults, isPremiumMode = false }: SegmentFinderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<SegmentMatch[]>([])
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  
  // Helper functions for usage tracking (simplified for now)
  const canGenerateReport = () => true // For now, all users can generate reports
  const incrementReportGeneration = () => {} // No-op for now
  const getUsageStats = () => ({ reportsGenerated: 0, savedReports: 0 }) // Placeholder
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<UserInputs>({
    defaultValues: {
      brandDescription: '',
      category: 'beauty-skincare',
      priceRange: '25-75',
      targetAge: '25-35',
      targetGender: 'unisex',
      values: [],
      seasonality: 'perennial',
      launchBudget: '5k-25k',
      followingSize: '1k-10k',
      primaryPlatform: 'instagram',
      closestCompetitor: '',
      targetCities: [],
      hyperlocalEnabled: false,
      
      // Premium parameter defaults
      contentFormats: [],
      launchTimeline: undefined,
      purchaseMotivation: [],
      engagementStyle: undefined,
      interestIntensity: undefined,
      brandPersonality: [],
      trendAdoption: undefined,
      socialBehavior: [],
      communitySizePreference: undefined,
      geographicFocus: undefined,
      regionType: []
    }
  })

  // Determine if user has access to hyperlocal features
  const hasHyperlocalAccess = () => {
    if (isPremiumMode) return true
    if (!user) return false
    return canAccessFeature(user, 'hasAdvancedFeatures')
  }

  // Require authentication for segmentation tool access
  if (!isSignedIn) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserCheck className="w-8 h-8 text-accent-400" />
          </div>
          <h3 className="text-2xl font-bold text-primary-50 mb-4">
            Registration Required
          </h3>
          <p className="text-primary-300 mb-6 leading-relaxed">
            Please create a free account to access our AI-powered audience segmentation tool. 
            This helps us provide better insights and prevents misuse of our free resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => window.location.href = '/register?redirect=segmentation'}
              className="px-8"
            >
              <Target className="w-4 h-4 mr-2" />
              Create Free Account
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/login?redirect=segmentation'}
              className="px-8"
            >
              Sign In
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  const baseSteps = [
    {
      title: 'Tell us about your brand',
      description: 'Help us understand what you\'re building',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: 'Your audience details',
      description: 'Who are you trying to reach?',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Your creator profile',
      description: 'Tell us about your platform and reach',
      icon: <Search className="w-5 h-5" />
    }
  ]

  const hyperlocalStep = {
    title: 'Hyperlocal targeting',
    description: 'Select specific cities for local insights',
    icon: <MapPin className="w-5 h-5" />
  }

  const steps = hasHyperlocalAccess() ? [...baseSteps, hyperlocalStep] : baseSteps

  const categoryOptions = [
    { value: 'beauty-skincare', label: 'Beauty & Skincare', icon: <Palette className="w-4 h-4" /> },
    { value: 'health-fitness', label: 'Health & Fitness', icon: <Dumbbell className="w-4 h-4" /> },
    { value: 'digital-products', label: 'Digital Products', icon: <Monitor className="w-4 h-4" /> },
    { value: 'fashion-accessories', label: 'Fashion & Accessories', icon: <Shirt className="w-4 h-4" /> },
    { value: 'food-beverage', label: 'Food & Beverage', icon: <Utensils className="w-4 h-4" /> },
    { value: 'sustainable-products', label: 'Sustainable Products', icon: <Leaf className="w-4 h-4" /> },
    { value: 'tech-apps', label: 'Tech & Apps', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'coaching-consulting', label: 'Coaching & Consulting', icon: <TargetIcon className="w-4 h-4" /> },
    { value: 'home-lifestyle', label: 'Home & Lifestyle', icon: <Home className="w-4 h-4" /> },
    { value: 'professional-services', label: 'Professional Services', icon: <Briefcase className="w-4 h-4" /> },
    { value: 'pet-care', label: 'Pet Care & Products', icon: <PawPrint className="w-4 h-4" /> },
    { value: 'baby-kids', label: 'Baby & Kids', icon: <Baby className="w-4 h-4" /> },
    { value: 'automotive', label: 'Automotive', icon: <Car className="w-4 h-4" /> },
    { value: 'travel-experiences', label: 'Travel & Experiences', icon: <Plane className="w-4 h-4" /> }
  ]

  const platformOptions = [
    { value: 'instagram', label: 'Instagram', icon: <FaInstagram className="w-4 h-4" />, color: 'from-pink-500 to-orange-500' },
    { value: 'tiktok', label: 'TikTok', icon: <FaTiktok className="w-4 h-4" />, color: 'from-gray-800 to-gray-600' },
    { value: 'youtube', label: 'YouTube', icon: <FaYoutube className="w-4 h-4" />, color: 'from-red-500 to-red-600' },
    { value: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin className="w-4 h-4" />, color: 'from-blue-600 to-blue-700' },
    { value: 'twitter', label: 'Twitter', icon: <FaTwitter className="w-4 h-4" />, color: 'from-blue-400 to-blue-500' }
  ]

  const priceRangeOptions = [
    { value: 'under-25', label: 'Under $25' },
    { value: '25-75', label: '$25 - $75' },
    { value: '75-200', label: '$75 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: 'over-500', label: 'Over $500' }
  ]

  const followingSizeOptions = [
    { value: 'under-1k', label: 'Under 1K' },
    { value: '1k-10k', label: '1K - 10K' },
    { value: '10k-100k', label: '10K - 100K' },
    { value: '100k-1m', label: '100K - 1M' },
    { value: 'over-1m', label: 'Over 1M' }
  ]

  const valuesOptions = [
    'sustainability', 'quality', 'community', 'innovation', 
    'luxury', 'affordability', 'convenience', 'health',
    'authenticity', 'transparency', 'social impact', 'inclusivity',
    'customization', 'simplicity', 'premium experience', 'value for money',
    'ethical sourcing', 'local production', 'organic', 'cruelty-free',
    'minimalist', 'artisan-made', 'technology', 'tradition'
  ]

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unisex', label: 'Unisex/All Genders' },
    { value: 'other', label: 'Other/Non-Binary' }
  ]

  const seasonalityOptions = [
    { value: 'seasonal', label: 'Seasonal (holiday, summer, winter, etc.)' },
    { value: 'perennial', label: 'Perennial (year-round demand)' },
    { value: 'non-applicable', label: 'Non-applicable' }
  ]

  const timeOfDayOptions = [
    { value: 'daytime', label: 'Daytime (6AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 6PM)' },
    { value: 'evening', label: 'Evening (6PM - 11PM)' },
    { value: 'night', label: 'Night (11PM - 6AM)' },
    { value: 'anytime', label: 'Anytime' },
    { value: 'sporadically', label: 'Sporadically' }
  ]

  const lifecycleStageOptions = [
    { value: 'awareness', label: 'Awareness - Just discovering the problem' },
    { value: 'consideration', label: 'Consideration - Researching solutions' },
    { value: 'decision', label: 'Decision - Ready to purchase' },
    { value: 'retention', label: 'Retention - Existing customers' },
    { value: 'advocacy', label: 'Advocacy - Brand promoters' }
  ]

  const deviceUsageOptions = [
    { value: 'mobile-primary', label: 'Mobile Primary' },
    { value: 'desktop-primary', label: 'Desktop Primary' },
    { value: 'tablet-primary', label: 'Tablet Primary' },
    { value: 'multi-device', label: 'Multi-device Users' },
    { value: 'mobile-only', label: 'Mobile Only' }
  ]

  const socialMediaEngagementOptions = [
    { value: 'instagram-heavy', label: 'Instagram Heavy Users' },
    { value: 'tiktok-heavy', label: 'TikTok Heavy Users' },
    { value: 'twitter-heavy', label: 'Twitter/X Heavy Users' },
    { value: 'facebook-heavy', label: 'Facebook Heavy Users' },
    { value: 'linkedin-heavy', label: 'LinkedIn Heavy Users' },
    { value: 'youtube-heavy', label: 'YouTube Heavy Users' },
    { value: 'multi-platform', label: 'Multi-platform Active' },
    { value: 'low-engagement', label: 'Low Social Media Engagement' }
  ]

  const technologyAdoptionOptions = [
    { value: 'early-adopter', label: 'Early Adopter - First to try new tech' },
    { value: 'early-majority', label: 'Early Majority - Quick to adopt proven tech' },
    { value: 'late-majority', label: 'Late Majority - Adopts when mainstream' },
    { value: 'laggard', label: 'Laggard - Resistant to new technology' },
    { value: 'tech-enthusiast', label: 'Tech Enthusiast - Loves cutting-edge' }
  ]

  const culturalInfluencesOptions = [
    { value: 'traditional-values', label: 'Traditional Values Focused' },
    { value: 'progressive-values', label: 'Progressive Values Focused' },
    { value: 'religious-influenced', label: 'Religious/Spiritual Influenced' },
    { value: 'family-oriented', label: 'Family-oriented Culture' },
    { value: 'individualistic', label: 'Individualistic Culture' },
    { value: 'community-focused', label: 'Community-focused Culture' },
    { value: 'multicultural', label: 'Multicultural Environment' }
  ]

  const economicConditionsOptions = [
    { value: 'high-disposable-income', label: 'High Disposable Income' },
    { value: 'moderate-disposable-income', label: 'Moderate Disposable Income' },
    { value: 'budget-conscious', label: 'Budget Conscious' },
    { value: 'recession-resistant', label: 'Recession Resistant Spending' },
    { value: 'luxury-focused', label: 'Luxury Focused' },
    { value: 'value-oriented', label: 'Value-oriented Purchasing' }
  ]

  const geographicVariabilityOptions = [
    { value: 'urban-metropolitan', label: 'Urban/Metropolitan Areas' },
    { value: 'suburban', label: 'Suburban Areas' },
    { value: 'rural-small-town', label: 'Rural/Small Town' },
    { value: 'coastal-regions', label: 'Coastal Regions' },
    { value: 'inland-regions', label: 'Inland Regions' },
    { value: 'climate-specific', label: 'Climate-specific (hot/cold/humid)' },
    { value: 'seasonal-variation', label: 'Strong Seasonal Variation' }
  ]

  const watchedValues = watch()

  const onSubmit = async (data: UserInputs) => {
    // Check if user can generate a report
    if (!canGenerateReport()) {
      alert('Report generation limit reached.')
      return
    }

    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const matches = SegmentMatcher.matchSegments(data)
    setResults(matches)
    
    // Track report generation for usage limits
    incrementReportGeneration()
    
    onResults?.(matches, data)
    setLoading(false)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit(onSubmit)()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return watchedValues.brandDescription?.length > 10 && watchedValues.category
      case 1:
        return watchedValues.priceRange && watchedValues.targetAge && watchedValues.targetGender && watchedValues.values?.length > 0
      case 2:
        return watchedValues.primaryPlatform && watchedValues.followingSize && watchedValues.launchBudget
      case 3:
        // Hyperlocal step - optional but if enabled, must have at least 1 city
        if (hasHyperlocalAccess()) {
          return !watchedValues.hyperlocalEnabled || (watchedValues.targetCities?.length || 0) > 0
        }
        return true
      default:
        return true
    }
  }

  const handleCityToggle = (city: TargetCity) => {
    const currentCities = watchedValues.targetCities || []
    const isSelected = currentCities.some(c => c.id === city.id)
    
    if (isSelected) {
      // Remove city
      const newCities = currentCities.filter(c => c.id !== city.id)
      setValue('targetCities', newCities, { shouldValidate: true })
    } else {
      // Add city (max 5)
      if (currentCities.length < 5) {
        setValue('targetCities', [...currentCities, city], { shouldValidate: true })
      }
    }
  }

  const handleHyperlocalToggle = (enabled: boolean) => {
    setValue('hyperlocalEnabled', enabled, { shouldValidate: true })
    if (!enabled) {
      setValue('targetCities', [], { shouldValidate: true })
    }
  }

  const usageStats = getUsageStats()

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Usage Warning for Standard Users */}
      {user && (user.publicMetadata as any)?.subscriptionTier === 'standard' && (
        <div className="mb-6 p-4 bg-accent-500/10 border border-accent-500/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-accent-400" />
              <span className="text-accent-300 font-medium">
                Standard Plan: {usageStats.reportsGenerated}/1 report used
              </span>
            </div>
            {usageStats.reportsGenerated >= 1 && (
              <span className="text-sm text-red-400">Report limit reached</span>
            )}
          </div>
        </div>
      )}


      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-2xl text-sm font-bold transition-all border-2 relative",
                  index <= currentStep 
                    ? "bg-accent-500 text-primary-950 border-accent-400 shadow-xl shadow-accent-500/25" 
                    : "bg-primary-800/50 text-primary-400 border-primary-700/50"
                )}
                animate={{ 
                  scale: index === currentStep ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {index < currentStep ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-lg"
                  >
                    ✓
                  </motion.span>
                ) : (
                  <span className="text-base">{index + 1}</span>
                )}
                {index === currentStep && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-accent-400/20 animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <div className="relative w-20 h-2 mx-4">
                  <div className="absolute inset-0 bg-primary-700/50 rounded-full" />
                  <motion.div 
                    className="absolute inset-0 bg-accent-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: index < currentStep ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary-50 mb-3">
            {steps[currentStep].title}
          </h2>
          <p className="text-primary-300 text-lg">
            {steps[currentStep].description}
          </p>
        </motion.div>
      </div>

      <Card className="border-0 glass-card">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Step 0: Brand Description */}
              {currentStep === 0 && (
                <div className="space-y-8">
                  <div>
                    <AudioTextArea
                      label="Describe your brand in a few words"
                      value={watchedValues.brandDescription || ''}
                      onChange={(value) => setValue('brandDescription', value, { shouldValidate: true })}
                      placeholder="e.g., Sustainable skincare for busy professionals who care about clean ingredients and want a simple routine that actually works..."
                      rows={5}
                      required={true}
                      maxLength={1000}
                      showCharCount={true}
                      audioMaxDuration={120}
                      error={errors.brandDescription ? 'Please describe your brand (minimum 10 characters)' : undefined}
                      className="text-lg"
                      id="brandDescription"
                      name="brandDescription"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What category best describes your brand?
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                      {categoryOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5 group",
                            watchedValues.category === option.value
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('category')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <span className="text-base font-medium text-primary-100 group-hover:text-accent-300">
                              {option.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      Closest competitor (optional)
                    </label>
                    <input
                      {...register('closestCompetitor')}
                      placeholder="e.g., Glossier, Fenty Beauty, The Ordinary..."
                      className="w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-50 placeholder-primary-400 backdrop-blur-sm"
                    />
                    <p className="text-sm text-primary-400 mt-2">
                      Help us understand your competitive landscape for better positioning insights
                    </p>
                  </div>
                </div>
              )}

              {/* Step 1: Audience Details */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Target price range
                      </label>
                      <select
                        {...register('priceRange')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {priceRangeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Target gender
                      </label>
                      <select
                        {...register('targetGender')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {genderOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Target age group
                      </label>
                      <select
                        {...register('targetAge')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        <option value="18-25">18-25 years old</option>
                        <option value="25-35">25-35 years old</option>
                        <option value="35-45">35-45 years old</option>
                        <option value="45-55">45-55 years old</option>
                        <option value="over-55">Over 55 years old</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Product seasonality
                      </label>
                      <select
                        {...register('seasonality')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {seasonalityOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Temporal and Behavioral Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Time of day usage
                      </label>
                      <select
                        {...register('timeOfDay')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {timeOfDayOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Lifecycle stage
                      </label>
                      <select
                        {...register('lifecycleStage')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {lifecycleStageOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Device and Technology Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Device usage
                      </label>
                      <select
                        {...register('deviceUsage')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {deviceUsageOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Social media engagement
                      </label>
                      <select
                        {...register('socialMediaEngagement')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {socialMediaEngagementOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Technology and Cultural Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Technology adoption
                      </label>
                      <select
                        {...register('technologyAdoption')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {technologyAdoptionOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Cultural influences
                      </label>
                      <select
                        {...register('culturalInfluences')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {culturalInfluencesOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Economic and Geographic Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Economic conditions
                      </label>
                      <select
                        {...register('economicConditions')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {economicConditionsOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Geographic variability
                      </label>
                      <select
                        {...register('geographicVariability')}
                        className="custom-select w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        {geographicVariabilityOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What values matter most to your brand? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto custom-scrollbar">
                      {valuesOptions.map((value) => (
                        <label
                          key={value}
                          className={cn(
                            "flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.values?.includes(value)
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="checkbox"
                            value={value}
                            checked={watchedValues.values?.includes(value) || false}
                            onChange={(e) => {
                              const currentValues = watchedValues.values || [];
                              if (e.target.checked) {
                                setValue('values', [...currentValues, value]);
                              } else {
                                setValue('values', currentValues.filter(v => v !== value));
                              }
                            }}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-primary-100 capitalize">
                            {value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Standard+ Features (Step 1.5) */}
              {currentStep === 1 && (
                <div className="mt-8 space-y-6">
                  {/* Content Preferences - Standard+ */}
                  <PremiumFormSection
                    title="Content Format Preferences"
                    description="Identify communities based on their preferred content formats to find the perfect audience for your content style."
                    tier="standard"
                    benefits={[
                      "Match to content-specific communities (e.g., TikTok dancers, podcast listeners)",
                      "Optimize content strategy for community preferences",
                      "Discover emerging format trends in your niche"
                    ]}
                    isEnabled={((user?.publicMetadata as any)?.subscriptionTier || 'free') !== 'free'}
                    onUpgrade={() => window.location.href = '/pricing'}
                  >
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
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
                  </PremiumFormSection>

                  {/* Premium Advanced Segmentation */}
                  <PremiumFormSection
                    title="Advanced Behavioral Analysis"
                    description="Unlock deep insights into purchase motivations, community engagement patterns, and trend adoption behaviors for precise microcommunity targeting."
                    tier="premium"
                    benefits={[
                      "Identify nano-influencers in your exact niche",
                      "Track real-time trend adoption in communities",
                      "Match to highly engaged micro-communities (500-5K members)",
                      "Discover emerging trends before they go mainstream",
                      "Advanced personality-community fit analysis"
                    ]}
                    isEnabled={canAccessFeature(user, 'canAccessAdvancedSegmentation')}
                    onUpgrade={() => window.location.href = '/pricing'}
                  >
                    <div className="space-y-6">
                      {/* Purchase Motivation */}
                      <div>
                        <label className="block text-lg font-semibold text-primary-100 mb-4">
                          What motivates your customers to buy?
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
                                "flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                                watchedValues.purchaseMotivation?.includes(motivation.value as any)
                                  ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
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
                                <div className="text-accent-400">
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
                        <label className="block text-lg font-semibold text-primary-100 mb-4">
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
                                "flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                                watchedValues.trendAdoption === adoption.value
                                  ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
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
                                <div className="text-accent-400">
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
                  </PremiumFormSection>
                </div>
              )}

              {/* Step 2: Creator Profile */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What&apos;s your primary platform?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {platformOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.primaryPlatform === option.value
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('primaryPlatform')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <span className="text-base font-semibold text-primary-100">
                              {option.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Current following size
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {followingSizeOptions.map((option) => (
                          <label
                            key={option.value}
                            className={cn(
                              "flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                              watchedValues.followingSize === option.value
                                ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                                : "border-primary-700 bg-primary-900/30"
                            )}
                          >
                            <input
                              type="radio"
                              {...register('followingSize')}
                              value={option.value}
                              className="sr-only"
                            />
                            <span className="text-base font-semibold text-primary-100">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-primary-100 mb-4">
                        Launch budget
                      </label>
                      <select
                        {...register('launchBudget')}
                        className="w-full p-5 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                      >
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-25k">$5,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Hyperlocal Targeting (Premium Users Only) */}
              {currentStep === 3 && hasHyperlocalAccess() && (
                <div className="space-y-8">
                  {/* Premium Feature Badge */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center px-6 py-3 bg-gradient-to-r from-accent-500/20 to-brand-500/20 border border-accent-500/30 rounded-full">
                      <Star className="w-5 h-5 mr-2 text-accent-400" />
                      <span className="text-accent-300 font-semibold">
                        {((user?.publicMetadata as any)?.subscriptionTier === 'standard') ? 'Standard' : 'Premium'} Feature
                      </span>
                    </div>
                  </div>

                  {/* Hyperlocal Toggle */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-primary-100">
                      Enable Hyperlocal Targeting
                    </h3>
                    <p className="text-primary-300 max-w-2xl mx-auto">
                      Get detailed insights about local communities, influencers, and market opportunities in specific North American cities. 
                      Perfect for location-based brands or testing new markets.
                    </p>
                    
                    <div className="flex items-center justify-center space-x-6 mt-6">
                      <label className={cn(
                        "flex items-center justify-center px-8 py-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                        !watchedValues.hyperlocalEnabled
                          ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                          : "border-primary-700 bg-primary-900/30"
                      )}>
                        <input
                          type="radio"
                          checked={!watchedValues.hyperlocalEnabled}
                          onChange={() => handleHyperlocalToggle(false)}
                          className="sr-only"
                        />
                        <span className="text-base font-semibold text-primary-100">Skip for now</span>
                      </label>
                      
                      <label className={cn(
                        "flex items-center justify-center px-8 py-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                        watchedValues.hyperlocalEnabled
                          ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                          : "border-primary-700 bg-primary-900/30"
                      )}>
                        <input
                          type="radio"
                          checked={watchedValues.hyperlocalEnabled}
                          onChange={() => handleHyperlocalToggle(true)}
                          className="sr-only"
                        />
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="text-base font-semibold text-primary-100">Enable hyperlocal targeting</span>
                      </label>
                    </div>
                  </div>

                  {/* City Selection */}
                  <AnimatePresence>
                    {watchedValues.hyperlocalEnabled && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-primary-900/30 border border-primary-700/50 rounded-2xl p-6">
                          <div className="mb-6 text-center">
                            <h4 className="text-lg font-bold text-primary-100 mb-2">
                              Select Target Cities
                            </h4>
                            <p className="text-primary-400 text-sm">
                              Choose up to 5 cities where you want to focus your hyperlocal marketing efforts
                            </p>
                          </div>
                          
                          <CitySelector
                            selectedCities={watchedValues.targetCities || []}
                            onCityToggle={handleCityToggle}
                            maxSelections={5}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Benefits Preview */}
                  {watchedValues.hyperlocalEnabled && (watchedValues.targetCities?.length || 0) > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-accent-500/10 to-brand-500/10 border border-accent-500/20 rounded-2xl p-6"
                    >
                      <h5 className="font-bold text-accent-300 mb-3">
                        🎯 What you&apos;ll get with hyperlocal targeting:
                      </h5>
                      <ul className="space-y-2 text-sm text-primary-300">
                        <li>• Local community insights and cultural movements</li>
                        <li>• City-specific influencer recommendations (1K-10K followers)</li>
                        <li>• Demographic overlays and market opportunity analysis</li>
                        <li>• ZIP code precision targeting strategies</li>
                        <li>• Local competitor analysis and positioning opportunities</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-primary-700/50">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-8"
            >
              Back
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!isStepValid()}
              loading={loading && currentStep === steps.length - 1}
              className="px-10"
              size="lg"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <Zap className="mr-2 w-5 h-5" />
                  Discover My Segments
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}