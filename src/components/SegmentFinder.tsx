'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Target, Sparkles, ChevronRight, Zap, MapPin, Star, Video, Camera, Mic, FileText, BarChart3, Users, Flame, Wrench, Crown, TrendingUp, Heart, Rocket, DollarSign, Crosshair, Shield, Timer, UserCheck, Palette, Dumbbell, Monitor, Shirt, Utensils, Leaf, Smartphone, Target as TargetIcon, Home, Briefcase, PawPrint, Baby, Car, Plane, Clock, Globe, User, UserPlus, Building, Building2, MessageCircle, Share2, Mail, Calendar, Phone, Coins, CreditCard, Banknote, Landmark, Lightbulb, Award, TrendingDown, BookOpen, Users2, GraduationCap } from 'lucide-react'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { UserInputs, TargetCity } from '@/types/segments'
import { cn } from '@/lib/utils'
import { useAuth, useUser } from '@clerk/nextjs'
import { canAccessFeature } from '@/lib/subscription'
import { CitySelector } from '@/components/CitySelector'
import { AudioTextArea } from '@/components/ui/AudioTextArea'

interface SegmentFinderProps {
  onResults?: (userInputs: UserInputs) => void
  isPremiumMode?: boolean
}

export function SegmentFinder({ onResults, isPremiumMode = false }: SegmentFinderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
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
      title: 'Enhanced audience intelligence',
      description: 'Optional detailed insights for better accuracy',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Business & go-to-market profile',
      description: 'Help us understand your business strategy',
      icon: <Briefcase className="w-5 h-5" />
    }
  ]
  
  const hyperlocalStep = {
    title: 'Hyperlocal targeting',
    description: 'Select specific cities for local insights',
    icon: <MapPin className="w-5 h-5" />
  }

  let steps = [...baseSteps]
  if (hasHyperlocalAccess()) {
    steps = [...steps, hyperlocalStep]
  }

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

  // Behavioral & Temporal Factors
  const timeOfDayOptions = [
    { value: '', label: 'Skip / Not Applicable' },
    { value: 'daytime', label: 'Daytime (6AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 6PM)' },
    { value: 'evening', label: 'Evening (6PM - 11PM)' },
    { value: 'night', label: 'Night (11PM - 6AM)' },
    { value: 'anytime', label: 'Anytime / No specific pattern' },
    { value: 'sporadically', label: 'Sporadically / Irregular' }
  ]

  const lifecycleStageOptions = [
    { value: '', label: 'Skip / Not Applicable' },
    { value: 'awareness', label: 'Awareness - Just discovering the problem' },
    { value: 'consideration', label: 'Consideration - Researching solutions' },
    { value: 'decision', label: 'Decision - Ready to purchase' },
    { value: 'retention', label: 'Retention - Existing customers' },
    { value: 'advocacy', label: 'Advocacy - Brand promoters' },
    { value: 'mixed', label: 'Mixed - Multiple stages' }
  ]

  // Technology & Device Factors
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
    { value: '', label: 'Skip / Not Applicable' },
    { value: 'early-adopter', label: 'Early Adopter - First to try new tech' },
    { value: 'early-majority', label: 'Early Majority - Quick to adopt proven tech' },
    { value: 'late-majority', label: 'Late Majority - Adopts when mainstream' },
    { value: 'laggard', label: 'Laggard - Resistant to new technology' },
    { value: 'tech-enthusiast', label: 'Tech Enthusiast - Loves cutting-edge' }
  ]

  // Cultural & Social Factors
  const culturalInfluencesOptions = [
    { value: 'traditional-values', label: 'Traditional Values Focused' },
    { value: 'progressive-values', label: 'Progressive Values Focused' },
    { value: 'religious-influenced', label: 'Religious/Spiritual Influenced' },
    { value: 'family-oriented', label: 'Family-oriented Culture' },
    { value: 'individualistic', label: 'Individualistic Culture' },
    { value: 'community-focused', label: 'Community-focused Culture' },
    { value: 'multicultural', label: 'Multicultural Environment' }
  ]

  // Economic & Geographic Factors
  const economicConditionsOptions = [
    { value: '', label: 'Skip / Not Applicable' },
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

  // Business stage options for Step 3
  const businessStageOptions = [
    { 
      value: 'pre-revenue', 
      label: 'Pre-revenue Startup', 
      description: 'Idea/MVP stage, validating market fit', 
      icon: <Rocket className="w-5 h-5" /> 
    },
    { 
      value: 'venture-funded', 
      label: 'Venture Funded Startup', 
      description: 'Seed to Series A+ with investor backing', 
      icon: <TrendingUp className="w-5 h-5" /> 
    },
    { 
      value: 'revenue-generating', 
      label: 'Revenue Generating Startup', 
      description: 'Profitable or break-even operations', 
      icon: <DollarSign className="w-5 h-5" /> 
    },
    { 
      value: 'established-business', 
      label: 'Established Business', 
      description: 'Stable operations, looking to expand', 
      icon: <Building className="w-5 h-5" /> 
    },
    { 
      value: 'enterprise', 
      label: 'Enterprise/Corporation', 
      description: 'Large organization with dedicated teams', 
      icon: <Crown className="w-5 h-5" /> 
    }
  ]

  const teamSizeOptions = [
    { 
      value: 'solo', 
      label: 'Solo Founder/Creator', 
      description: 'Just you handling everything', 
      icon: <User className="w-5 h-5" /> 
    },
    { 
      value: 'small-team', 
      label: 'Small Team (2-5)', 
      description: 'Core team with diverse skills', 
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      value: 'growing-team', 
      label: 'Growing Team (6-15)', 
      description: 'Specialized roles and departments', 
      icon: <UserPlus className="w-5 h-5" /> 
    },
    { 
      value: 'large-team', 
      label: 'Large Team (16+)', 
      description: 'Multiple departments and managers', 
      icon: <Building2 className="w-5 h-5" /> 
    }
  ]

  const customerAcquisitionOptions = [
    { 
      value: 'word-of-mouth', 
      label: 'Word of Mouth/Referrals', 
      description: 'Customer recommendations and organic growth', 
      icon: <MessageCircle className="w-5 h-5" /> 
    },
    { 
      value: 'social-media', 
      label: 'Social Media Marketing', 
      description: 'Instagram, TikTok, LinkedIn content strategy', 
      icon: <Share2 className="w-5 h-5" /> 
    },
    { 
      value: 'content-marketing', 
      label: 'Content Marketing/SEO', 
      description: 'Blog posts, videos, search optimization', 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      value: 'paid-advertising', 
      label: 'Paid Advertising', 
      description: 'Google Ads, Facebook Ads, sponsored content', 
      icon: <Target className="w-5 h-5" /> 
    },
    { 
      value: 'partnerships', 
      label: 'Partnerships/Collaborations', 
      description: 'Influencer partnerships, brand collaborations', 
      icon: <Users2 className="w-5 h-5" /> 
    },
    { 
      value: 'email-marketing', 
      label: 'Email Marketing', 
      description: 'Newsletter, email campaigns, automation', 
      icon: <Mail className="w-5 h-5" /> 
    },
    { 
      value: 'events-networking', 
      label: 'Events & Networking', 
      description: 'Trade shows, conferences, local events', 
      icon: <Calendar className="w-5 h-5" /> 
    },
    { 
      value: 'direct-sales', 
      label: 'Direct Sales/Outreach', 
      description: 'Cold calls, direct messages, sales team', 
      icon: <Phone className="w-5 h-5" /> 
    }
  ]

  const marketingBudgetOptions = [
    { 
      value: 'bootstrap', 
      label: 'Bootstrap/Minimal ($0-500/month)', 
      description: 'Organic growth, sweat equity focus', 
      icon: <Coins className="w-5 h-5" /> 
    },
    { 
      value: 'small-budget', 
      label: 'Small Budget ($500-2K/month)', 
      description: 'Basic paid ads, content tools', 
      icon: <DollarSign className="w-5 h-5" /> 
    },
    { 
      value: 'moderate-budget', 
      label: 'Moderate Budget ($2K-10K/month)', 
      description: 'Multi-channel approach, influencer partnerships', 
      icon: <CreditCard className="w-5 h-5" /> 
    },
    { 
      value: 'substantial-budget', 
      label: 'Substantial Budget ($10K-50K/month)', 
      description: 'Comprehensive campaigns, premium tools', 
      icon: <Banknote className="w-5 h-5" /> 
    },
    { 
      value: 'large-budget', 
      label: 'Large Budget ($50K+/month)', 
      description: 'Enterprise-level marketing operations', 
      icon: <Landmark className="w-5 h-5" /> 
    }
  ]

  const competitiveAdvantageOptions = [
    { 
      value: 'unique-product', 
      label: 'Unique Product/Innovation', 
      description: 'First-to-market or patent-protected offering', 
      icon: <Lightbulb className="w-5 h-5" /> 
    },
    { 
      value: 'superior-quality', 
      label: 'Superior Quality/Craftsmanship', 
      description: 'Premium materials, attention to detail', 
      icon: <Award className="w-5 h-5" /> 
    },
    { 
      value: 'price-value', 
      label: 'Better Price/Value Proposition', 
      description: 'More affordable or better value for money', 
      icon: <TrendingDown className="w-5 h-5" /> 
    },
    { 
      value: 'customer-service', 
      label: 'Exceptional Customer Service', 
      description: 'Personal touch, rapid response, support', 
      icon: <Heart className="w-5 h-5" /> 
    },
    { 
      value: 'brand-story', 
      label: 'Compelling Brand Story/Mission', 
      description: 'Authentic narrative, strong values alignment', 
      icon: <BookOpen className="w-5 h-5" /> 
    },
    { 
      value: 'community-access', 
      label: 'Exclusive Community/Access', 
      description: 'VIP experiences, insider knowledge', 
      icon: <Users2 className="w-5 h-5" /> 
    },
    { 
      value: 'speed-convenience', 
      label: 'Speed/Convenience', 
      description: 'Faster delivery, easier process, simplicity', 
      icon: <Zap className="w-5 h-5" /> 
    },
    { 
      value: 'expertise-authority', 
      label: 'Industry Expertise/Authority', 
      description: 'Deep knowledge, thought leadership, credentials', 
      icon: <GraduationCap className="w-5 h-5" /> 
    }
  ]

  const watchedValues = watch()

  const onSubmit = async (data: UserInputs) => {
    // Check if user can generate a report
    if (!canGenerateReport()) {
      alert('Report generation limit reached.')
      return
    }

    setLoading(true)
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Track form submission for usage limits
    incrementReportGeneration()
    
    onResults?.(data)
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
        // Enhanced Audience Intelligence - all optional
        return true
      case 3:
        return watchedValues.primaryPlatform && watchedValues.followingSize && watchedValues.launchBudget
      default:
        // Hyperlocal step
        if (hasHyperlocalAccess() && currentStep === steps.length - 1) {
          return !watchedValues.hyperlocalEnabled || (watchedValues.targetCities?.length || 0) > 0
        }
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


              {/* Step 2: Enhanced Audience Intelligence */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-accent-500/10 to-brand-500/10 border border-accent-500/20 rounded-xl p-6 space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-primary-50 mb-2">
                        🎯 Enhanced Audience Intelligence (Optional)
                      </h3>
                      <p className="text-primary-300 text-sm leading-relaxed">
                        The more details you provide, the more accurate your segmentation and persona insights will be. 
                        All fields are optional - skip any that don't apply or select "Not Applicable".
                        <span className="text-accent-400 font-medium ml-1">
                          Upgrade to Scout, Curator, or Insider accounts for AI-powered personas based on this data!
                        </span>
                      </p>
                    </div>

                    {/* Behavioral & Temporal Factors */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary-100 mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-accent-400" />
                        Behavioral & Temporal Factors
                      </h4>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            When do your customers typically engage?
                          </label>
                          <select
                            {...register('timeOfDay')}
                            className="custom-select w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                          >
                            {timeOfDayOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Where are your customers in their buying journey?
                          </label>
                          <select
                            {...register('lifecycleStage')}
                            className="custom-select w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                          >
                            {lifecycleStageOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Technology & Platform Factors */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary-100 mb-4 flex items-center">
                        <Smartphone className="w-5 h-5 mr-2 text-brand-400" />
                        Technology & Platform Preferences
                      </h4>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Primary device usage pattern
                          </label>
                          <select
                            {...register('deviceUsage')}
                            className="custom-select w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                          >
                            <option value="">Skip / Not Applicable</option>
                            {deviceUsageOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Social media engagement style (Select multiple if needed)
                          </label>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                            {socialMediaEngagementOptions.map((option) => (
                              <label
                                key={option.value}
                                className={cn(
                                  "flex items-center p-2 border rounded-lg cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5 text-xs",
                                  watchedValues.socialMediaEngagement?.includes(option.value as any)
                                    ? "border-accent-500 bg-accent-500/10"
                                    : "border-primary-700 bg-primary-900/30"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  checked={watchedValues.socialMediaEngagement?.includes(option.value as any) || false}
                                  onChange={(e) => {
                                    const currentEngagement = watchedValues.socialMediaEngagement || [];
                                    if (e.target.checked) {
                                      setValue('socialMediaEngagement', [...currentEngagement, option.value as any]);
                                    } else {
                                      setValue('socialMediaEngagement', currentEngagement.filter(e => e !== option.value));
                                    }
                                  }}
                                  className="sr-only"
                                />
                                <span className="text-primary-200">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Technology adoption style
                          </label>
                          <select
                            {...register('technologyAdoption')}
                            className="custom-select w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                          >
                            {technologyAdoptionOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Cultural & Economic Factors */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary-100 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-success-400" />
                        Cultural & Economic Context
                      </h4>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Cultural influences (Select multiple if needed)
                          </label>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                            {culturalInfluencesOptions.map((option) => (
                              <label
                                key={option.value}
                                className={cn(
                                  "flex items-center p-2 border rounded-lg cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5 text-xs",
                                  watchedValues.culturalInfluences?.includes(option.value as any)
                                    ? "border-accent-500 bg-accent-500/10"
                                    : "border-primary-700 bg-primary-900/30"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  checked={watchedValues.culturalInfluences?.includes(option.value as any) || false}
                                  onChange={(e) => {
                                    const currentCultural = watchedValues.culturalInfluences || [];
                                    if (e.target.checked) {
                                      setValue('culturalInfluences', [...currentCultural, option.value as any]);
                                    } else {
                                      setValue('culturalInfluences', currentCultural.filter(c => c !== option.value));
                                    }
                                  }}
                                  className="sr-only"
                                />
                                <span className="text-primary-200">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Economic conditions affecting purchasing
                          </label>
                          <select
                            {...register('economicConditions')}
                            className="custom-select w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm"
                          >
                            {economicConditionsOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary-200 mb-2">
                            Geographic context (Select multiple if applicable)
                          </label>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 max-h-32 overflow-y-auto custom-scrollbar">
                            {geographicVariabilityOptions.map((option) => (
                              <label
                                key={option.value}
                                className={cn(
                                  "flex items-center p-2 border rounded-lg cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5 text-xs",
                                  watchedValues.geographicVariability?.includes(option.value as any)
                                    ? "border-accent-500 bg-accent-500/10"
                                    : "border-primary-700 bg-primary-900/30"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  checked={watchedValues.geographicVariability?.includes(option.value as any) || false}
                                  onChange={(e) => {
                                    const currentGeo = watchedValues.geographicVariability || [];
                                    if (e.target.checked) {
                                      setValue('geographicVariability', [...currentGeo, option.value as any]);
                                    } else {
                                      setValue('geographicVariability', currentGeo.filter(g => g !== option.value));
                                    }
                                  }}
                                  className="sr-only"
                                />
                                <span className="text-primary-200">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Business & Go-to-Market Profile */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What stage is your business currently in?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {businessStageOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-start p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.businessStage === option.value
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('businessStage')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <div>
                              <span className="text-base font-semibold text-primary-100 block">
                                {option.label}
                              </span>
                              <span className="text-sm text-primary-400">
                                {option.description}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What's your current team size?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {teamSizeOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.teamSize === option.value
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('teamSize')}
                            value={option.value}
                            className="sr-only"
                          />
                          <span className="text-base font-semibold text-primary-100">
                            {option.label}
                          </span>
                          <span className="text-sm text-primary-400">
                            {option.description}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      How do you currently acquire customers? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {customerAcquisitionOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-start p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.customerAcquisition?.includes(option.value as any)
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="checkbox"
                            {...register('customerAcquisition')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <div>
                              <span className="text-base font-semibold text-primary-100 block">
                                {option.label}
                              </span>
                              <span className="text-sm text-primary-400">
                                {option.description}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What's your monthly marketing budget range?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {marketingBudgetOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-start p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.marketingBudget === option.value
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="radio"
                            {...register('marketingBudget')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <div>
                              <span className="text-base font-semibold text-primary-100 block">
                                {option.label}
                              </span>
                              <span className="text-sm text-primary-400">
                                {option.description}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-primary-100 mb-4">
                      What are your key competitive advantages? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {competitiveAdvantageOptions.map((option) => (
                        <label
                          key={option.value}
                          className={cn(
                            "flex items-start p-4 border-2 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                            watchedValues.competitiveAdvantage?.includes(option.value as any)
                              ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                              : "border-primary-700 bg-primary-900/30"
                          )}
                        >
                          <input
                            type="checkbox"
                            {...register('competitiveAdvantage')}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="text-accent-400">
                              {option.icon}
                            </div>
                            <div>
                              <span className="text-base font-semibold text-primary-100 block">
                                {option.label}
                              </span>
                              <span className="text-sm text-primary-400">
                                {option.description}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Hyperlocal Targeting (Premium Users Only) */}
              {currentStep === 4 && hasHyperlocalAccess() && (
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