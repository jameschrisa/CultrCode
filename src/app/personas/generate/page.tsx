'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Target, Users, TrendingUp, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Search, Sparkles, Save, Download, RefreshCw, Check, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { PsychographicSlider } from '@/components/ui/HeroPsychographicSlider'
import { AudioTextArea } from '@/components/ui/AudioTextArea'
import { expandedSegments } from '@/data/expanded_segments'
import { emergingTrends } from '@/data/emergingTrends'
import { PersonaCard } from '@/components/PersonaCard'
import Link from 'next/link'

interface BaseSelection {
  type: 'segment' | 'community' | 'trend' | 'custom' | null
  data: any | null
}

interface PersonaData {
  name: string
  baseSelection: BaseSelection
  customInputs: {
    description: string
    targetAudience: string
    industry: string
    behaviorPrompt: string
  }
  psychographics: {
    [key: string]: number
  }
  generatedInsights: {
    values: string[]
    personality: string[]
    interests: string[]
    painPoints: string[]
    goals: string[]
    communication: string[]
    buyingMotivations: string[]
    demographics: {
      ageRange: string
      location: string
      income: string
    }
  }
}

interface PsychographicFactor {
  id: string
  label: string
  description: string
  tickLabels: string[]
}

function GeneratePersonaContent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personaData, setPersonaData] = useState<PersonaData>({
    name: '',
    baseSelection: { type: null, data: null },
    customInputs: {
      description: '',
      targetAudience: '',
      industry: '',
      behaviorPrompt: ''
    },
    psychographics: {},
    generatedInsights: {
      values: [],
      personality: [],
      interests: [],
      painPoints: [],
      goals: [],
      communication: [],
      buyingMotivations: [],
      demographics: {
        ageRange: '',
        location: '',
        income: ''
      }
    }
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Mock communities data
  const mockCommunities = [
    { id: 'pixel-pushers', name: 'Pixel Pushers United', description: 'Digital artists using specific software and techniques', size: '2.5K', engagement: 'High' },
    { id: 'cold-plunge', name: 'Cold Plunge Club', description: 'Cold exposure therapy enthusiasts', size: '1.8K', engagement: 'Very High' },
    { id: 'clean-eating', name: 'Clean Eating Crusaders', description: 'Whole food nutrition advocates', size: '4.2K', engagement: 'High' },
    { id: 'crypto-builders', name: 'Crypto Builders Network', description: 'DeFi protocol developers and builders', size: '3.1K', engagement: 'Very High' },
    { id: 'mindful-parents', name: 'Mindful Parenting Circle', description: 'Conscious parenting practices', size: '2.7K', engagement: 'High' },
    { id: 'sustainable-fashion', name: 'Sustainable Fashion Collective', description: 'Ethical and eco-friendly fashion enthusiasts', size: '3.7K', engagement: 'High' },
    { id: 'indie-makers', name: 'Indie Makers Hub', description: 'Solo entrepreneurs building digital products', size: '1.5K', engagement: 'Very High' },
    { id: 'urban-gardeners', name: 'Urban Garden Collective', description: 'City-based growing enthusiasts', size: '2.8K', engagement: 'Medium' }
  ]

  // Comprehensive psychographic factors
  const psychographicFactors: PsychographicFactor[] = useMemo(() => [
    // Values and Lifestyle
    {
      id: 'sustainabilityImportance',
      label: 'Sustainability Values',
      description: 'How important are environmental and ethical considerations?',
      tickLabels: ['Not Important', 'Slightly Important', 'Moderate', 'Important', 'Critical Priority']
    },
    {
      id: 'convenienceOrientation',
      label: 'Convenience Focus',
      description: 'How much do they prioritize ease and efficiency?',
      tickLabels: ['Process Enjoyer', 'Some Effort OK', 'Balanced', 'Convenience Preferred', 'Maximum Convenience']
    },
    {
      id: 'luxuryAffinity',
      label: 'Luxury Orientation',
      description: 'How drawn are they to premium and luxury experiences?',
      tickLabels: ['Budget Focused', 'Value Conscious', 'Balanced', 'Quality Seeker', 'Luxury Oriented']
    },
    
    // Personality Traits
    {
      id: 'adventurousness',
      label: 'Adventurous Spirit',
      description: 'How willing are they to try new experiences and take risks?',
      tickLabels: ['Very Cautious', 'Somewhat Cautious', 'Balanced', 'Adventurous', 'Thrill Seeker']
    },
    {
      id: 'brandLoyalty',
      label: 'Brand Loyalty',
      description: 'How likely are they to stick with familiar brands?',
      tickLabels: ['Always Switch', 'Often Switch', 'Neutral', 'Usually Loyal', 'Extremely Loyal']
    },
    
    // Social Status and Aspirations
    {
      id: 'prestigeSeeking',
      label: 'Prestige Seeking',
      description: 'How important is social status and recognition?',
      tickLabels: ['Status Indifferent', 'Low Priority', 'Moderate', 'Status Conscious', 'Prestige Driven']
    },
    {
      id: 'belongingNeed',
      label: 'Community Belonging',
      description: 'How important is fitting in and being part of groups?',
      tickLabels: ['Very Independent', 'Mostly Independent', 'Balanced', 'Community Minded', 'Group Oriented']
    },
    
    // Risk Tolerance and Innovation
    {
      id: 'riskTolerance',
      label: 'Risk Tolerance',
      description: 'Comfort level with trying new or unfamiliar products',
      tickLabels: ['Risk Averse', 'Cautious', 'Neutral', 'Risk Taking', 'Risk Seeking']
    },
    {
      id: 'innovationAdoption',
      label: 'Innovation Adoption',
      description: 'How quickly they adopt new products or technologies',
      tickLabels: ['Laggard', 'Late Majority', 'Early Majority', 'Early Adopter', 'Innovator']
    },
    
    // Emotional Motivations
    {
      id: 'emotionalDriver',
      label: 'Primary Emotional Driver',
      description: 'What emotions primarily drive their purchase decisions?',
      tickLabels: ['Security/Safety', 'Practicality', 'Balanced', 'Excitement/Joy', 'Aspiration/Pride']
    },
    {
      id: 'nostalgiaInfluence',
      label: 'Nostalgia Sensitivity',
      description: 'How much do past experiences and memories influence decisions?',
      tickLabels: ['Future Focused', 'Present Focused', 'Balanced', 'Memory Influenced', 'Nostalgia Driven']
    },
    
    // Purchase Behavior
    {
      id: 'priceSensitivity',
      label: 'Price Sensitivity',
      description: 'How much does price influence their purchasing decisions?',
      tickLabels: ['Price First', 'Value Conscious', 'Balanced', 'Quality Focus', 'Premium Only']
    },
    {
      id: 'researchDepth',
      label: 'Research Thoroughness',
      description: 'How much research do they do before making purchases?',
      tickLabels: ['Impulse Buyer', 'Light Research', 'Moderate', 'Thorough Research', 'Exhaustive Analysis']
    },
    
    // Social Influences
    {
      id: 'socialMediaInfluence',
      label: 'Social Media Influence',
      description: 'How much do social media and online reviews affect decisions?',
      tickLabels: ['Not Influenced', 'Minimal Impact', 'Some Influence', 'Significant Impact', 'Heavily Influenced']
    },
    {
      id: 'expertOpinionValue',
      label: 'Expert Opinion Value',
      description: 'How much do they value professional and expert recommendations?',
      tickLabels: ['Self Reliant', 'Minimal Value', 'Moderate', 'High Value', 'Expert Dependent']
    }
  ], [])

  useEffect(() => {
    // Initialize psychographic values
    const initialPsychographics: { [key: string]: number } = {}
    psychographicFactors.forEach(factor => {
      initialPsychographics[factor.id] = 3
    })
    setPersonaData(prev => ({ ...prev, psychographics: initialPsychographics }))
  }, [psychographicFactors])

  const steps = [
    { id: 'base', title: 'Select Foundation', description: 'Choose your persona base' },
    { id: 'configure', title: 'Configure Persona', description: 'Add details and psychographics' },
    { id: 'generate', title: 'Generate', description: 'Create AI persona' }
  ]

  const filteredSegments = expandedSegments.filter(segment =>
    segment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    segment.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredCommunities = mockCommunities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredTrends = emergingTrends.filter(trend =>
    trend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trend.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectBase = (type: 'segment' | 'community' | 'trend' | 'custom', data: any = null) => {
    setPersonaData(prev => ({
      ...prev,
      baseSelection: { type, data }
    }))
  }

  const updateCustomInput = (field: keyof PersonaData['customInputs'], value: string) => {
    setPersonaData(prev => ({
      ...prev,
      customInputs: {
        ...prev.customInputs,
        [field]: value
      }
    }))
  }

  const updatePsychographic = (factorId: string, value: number) => {
    setPersonaData(prev => ({
      ...prev,
      psychographics: {
        ...prev.psychographics,
        [factorId]: value
      }
    }))
  }

  const savePersona = () => {
    // In a real app, this would save to a database
    const personaToSave = {
      ...personaData,
      id: `persona-${Date.now()}`,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    }
    
    // For now, just show success message
    alert(`Persona "${personaData.name}" saved successfully!`)
    console.log('Saving persona:', personaToSave)
  }

  const exportPersona = () => {
    // Create downloadable JSON file
    const dataStr = JSON.stringify(personaData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${personaData.name || 'persona'}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const generatePersona = async () => {
    setIsGenerating(true)
    
    // Simulate AI generation process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Generate insights based on base selection and inputs
    const insights = generateInsightsFromBase()
    
    setPersonaData(prev => ({
      ...prev,
      name: generatePersonaName(),
      generatedInsights: insights
    }))
    
    setIsGenerating(false)
    setShowResult(true)
  }

  const generatePersonaName = () => {
    const { baseSelection } = personaData
    
    if (baseSelection.type === 'segment') {
      const names = ['Segment-Savvy Sarah', 'Targeted Taylor', 'Focused Felix', 'Precision Parker']
      return names[Math.floor(Math.random() * names.length)]
    } else if (baseSelection.type === 'community') {
      const names = ['Community Connor', 'Engaged Elena', 'Social Sam', 'Connected Chris']
      return names[Math.floor(Math.random() * names.length)]
    } else if (baseSelection.type === 'trend') {
      const names = ['Trendy Taylor', 'Forward Felix', 'Pioneer Parker', 'Early Emma']
      return names[Math.floor(Math.random() * names.length)]
    } else {
      const names = ['Custom Casey', 'Unique Uma', 'Individual Ivan', 'Personal Pat']
      return names[Math.floor(Math.random() * names.length)]
    }
  }

  const generateInsightsFromBase = () => {
    const { baseSelection, customInputs, psychographics } = personaData
    
    let insights = {
      values: [] as string[],
      personality: [] as string[],
      interests: [] as string[],
      painPoints: [] as string[],
      goals: [] as string[],
      communication: [] as string[],
      buyingMotivations: [] as string[],
      demographics: {
        ageRange: '25-40',
        location: 'Urban/Suburban',
        income: '$50K-$80K'
      }
    }

    // Generate based on base type
    switch (baseSelection.type) {
      case 'segment':
        insights = baseSelection.data 
          ? generateFromSegment(baseSelection.data)
          : generateGenericSegment(psychographics)
        break
      case 'community':
        insights = baseSelection.data 
          ? generateFromCommunity(baseSelection.data)
          : generateGenericCommunity(psychographics)
        break
      case 'trend':
        insights = baseSelection.data 
          ? generateFromTrend(baseSelection.data)
          : generateGenericTrend(psychographics)
        break
      case 'custom':
        insights = generateFromCustom(customInputs, psychographics)
        break
    }

    return insights
  }

  const generateFromSegment = (segment: any) => {
    // Enhance based on segment tier and psychographic adjustments
    const psychographics = personaData.psychographics
    let values = ['Innovation', 'Quality', 'Authenticity']
    let personality = ['Goal-oriented', 'Detail-focused', 'Analytical']
    let interests = ['Industry trends', 'Professional development', 'Quality products']
    let buyingMotivations = ['Quality assurance', 'Professional reputation', 'Long-term value']
    
    // Adjust based on psychographic inputs
    if (psychographics.luxuryAffinity >= 4) {
      values.unshift('Premium quality')
      buyingMotivations.unshift('Luxury experience')
    }
    if (psychographics.sustainabilityImportance >= 4) {
      values.push('Environmental responsibility')
      interests.push('Sustainable solutions')
    }
    if (psychographics.innovationAdoption >= 4) {
      personality.push('Early adopter')
      interests.unshift('Emerging technologies')
    }
    
    return {
      values: values.slice(0, 4),
      personality: personality.slice(0, 4),
      interests: interests.slice(0, 4),
      painPoints: ['Information overload', 'Decision fatigue', 'Time constraints'],
      goals: ['Professional growth', 'Efficient solutions', 'Quality outcomes'],
      communication: ['Email newsletters', 'Professional networks', 'Industry publications'],
      buyingMotivations: buyingMotivations.slice(0, 4),
      demographics: {
        ageRange: `${segment.ageMin}-${segment.ageMax}`,
        location: 'Urban/Suburban',
        income: segment.incomeMin ? `$${Math.round(segment.incomeMin/1000)}K-$${Math.round(segment.incomeMax/1000)}K` : '$50K-$80K'
      }
    }
  }

  const generateFromCommunity = (community: any) => ({
    values: ['Community', 'Shared interests', 'Collaboration'],
    personality: ['Social', 'Engaged', 'Passionate'],
    interests: [community.description, 'Community building', 'Peer learning'],
    painPoints: ['Finding quality communities', 'Time management', 'Information filtering'],
    goals: ['Connect with like-minded people', 'Learn and share knowledge', 'Build relationships'],
    communication: ['Community forums', 'Social media', 'Group messaging'],
    buyingMotivations: ['Community recommendations', 'Peer validation', 'Group benefits'],
    demographics: {
      ageRange: '22-45',
      location: 'Mixed',
      income: '$40K-$90K'
    }
  })

  const generateFromTrend = (trend: any) => ({
    values: ['Innovation', 'Early adoption', 'Trend awareness'],
    personality: ['Curious', 'Forward-thinking', 'Influential'],
    interests: [trend.name, 'Emerging technologies', 'Cultural movements'],
    painPoints: ['Keeping up with trends', 'Validation challenges', 'Mainstream adoption delays'],
    goals: ['Stay ahead of trends', 'Influence others', 'Early access to innovations'],
    communication: [trend.platform, 'Social networks', 'Trend publications'],
    buyingMotivations: ['Early access', 'Trend alignment', 'Social signaling'],
    demographics: {
      ageRange: '18-35',
      location: 'Urban',
      income: '$35K-$75K'
    }
  })

  const generateFromCustom = (inputs: any, psychographics: any) => {
    const values = []
    const personality = []
    const interests = []
    const painPoints = []
    const goals = []
    const communication = []
    const buyingMotivations = []

    // Values and Lifestyle
    if (psychographics.sustainabilityImportance >= 4) {
      values.push('Environmental responsibility')
      buyingMotivations.push('Sustainability impact')
      interests.push('Eco-friendly products')
    }
    if (psychographics.luxuryAffinity >= 4) {
      values.push('Premium quality')
      buyingMotivations.push('Luxury experience')
      goals.push('Acquire prestigious items')
    }
    if (psychographics.convenienceOrientation >= 4) {
      values.push('Efficiency')
      buyingMotivations.push('Time savings')
      painPoints.push('Complex processes')
    }

    // Personality Traits
    if (psychographics.adventurousness >= 4) {
      personality.push('Adventurous')
      interests.push('New experiences')
      goals.push('Explore opportunities')
    } else if (psychographics.adventurousness <= 2) {
      personality.push('Cautious')
      painPoints.push('Uncertainty')
    }

    if (psychographics.brandLoyalty >= 4) {
      personality.push('Brand loyal')
      buyingMotivations.push('Trusted brands')
    } else if (psychographics.brandLoyalty <= 2) {
      personality.push('Brand switcher')
      interests.push('Product comparison')
    }

    // Social Aspects
    if (psychographics.prestigeSeeking >= 4) {
      goals.push('Social recognition')
      buyingMotivations.push('Status symbols')
      interests.push('Luxury brands')
    }
    if (psychographics.belongingNeed >= 4) {
      personality.push('Community-oriented')
      communication.push('Group discussions')
      goals.push('Social connection')
    }

    // Risk and Innovation
    if (psychographics.innovationAdoption >= 4) {
      personality.push('Early adopter')
      interests.push('Latest technologies')
      goals.push('Stay ahead of trends')
    }
    if (psychographics.riskTolerance <= 2) {
      painPoints.push('Product uncertainty')
      buyingMotivations.push('Proven reliability')
    }

    // Emotional Drivers
    if (psychographics.emotionalDriver >= 4) {
      buyingMotivations.push('Emotional satisfaction')
      communication.push('Inspiring content')
    }
    if (psychographics.nostalgiaInfluence >= 4) {
      interests.push('Nostalgic brands')
      buyingMotivations.push('Familiar experiences')
    }

    // Purchase Behavior
    if (psychographics.priceSensitivity >= 4) {
      buyingMotivations.push('Value for money')
      painPoints.push('Premium pricing')
      personality.push('Budget conscious')
    }
    if (psychographics.researchDepth >= 4) {
      personality.push('Research-oriented')
      communication.push('Detailed reviews')
      painPoints.push('Information overload')
    } else if (psychographics.researchDepth <= 2) {
      personality.push('Impulse buyer')
      buyingMotivations.push('Quick decisions')
    }

    // Social Influences
    if (psychographics.socialMediaInfluence >= 4) {
      communication.push('Social media')
      buyingMotivations.push('Social proof')
      interests.push('Online communities')
    }
    if (psychographics.expertOpinionValue >= 4) {
      communication.push('Expert reviews')
      buyingMotivations.push('Professional recommendations')
      interests.push('Industry insights')
    }

    // Fallbacks for empty arrays
    const finalValues = values.length > 0 ? values.slice(0, 4) : ['Personal growth', 'Quality', 'Authenticity']
    const finalPersonality = personality.length > 0 ? personality.slice(0, 4) : ['Thoughtful', 'Practical', 'Balanced']
    const finalInterests = interests.length > 0 ? interests.slice(0, 4) : 
      inputs.targetAudience ? [inputs.targetAudience, inputs.industry, 'Personal development'] : ['Personal development', 'Quality products']
    const finalPainPoints = painPoints.length > 0 ? painPoints.slice(0, 4) : ['Decision complexity', 'Information overload', 'Time constraints']
    const finalGoals = goals.length > 0 ? goals.slice(0, 4) : ['Achieve personal objectives', 'Make informed decisions', 'Optimize outcomes']
    const finalCommunication = communication.length > 0 ? communication.slice(0, 4) : ['Email', 'Social media', 'Word of mouth']
    const finalBuyingMotivations = buyingMotivations.length > 0 ? buyingMotivations.slice(0, 4) : ['Quality', 'Value', 'Convenience']

    return {
      values: finalValues,
      personality: finalPersonality,
      interests: finalInterests,
      painPoints: finalPainPoints,
      goals: finalGoals,
      communication: finalCommunication,
      buyingMotivations: finalBuyingMotivations,
      demographics: {
        ageRange: '25-45',
        location: 'Mixed',
        income: '$45K-$85K'
      }
    }
  }

  const generateGenericSegment = (psychographics: any) => {
    return {
      values: ['Quality', 'Innovation', 'Value'],
      personality: ['Discerning', 'Goal-oriented', 'Practical'],
      interests: ['Product research', 'Brand comparisons', 'Market trends'],
      painPoints: ['Too many options', 'Price vs quality tradeoffs', 'Information overload'],
      goals: ['Find reliable products', 'Make informed purchases', 'Get good value'],
      communication: ['Online reviews', 'Social media', 'Email'],
      buyingMotivations: ['Quality assurance', 'Brand reputation', 'Peer recommendations'],
      demographics: {
        ageRange: '25-45',
        location: 'Mixed urban/suburban',
        income: '$40K-$100K'
      }
    }
  }

  const generateGenericCommunity = (psychographics: any) => {
    return {
      values: ['Community', 'Belonging', 'Shared interests'],
      personality: ['Social', 'Engaged', 'Collaborative'],
      interests: ['Community activities', 'Group discussions', 'Shared hobbies'],
      painPoints: ['Feeling isolated', 'Finding like-minded people', 'Limited local options'],
      goals: ['Connect with others', 'Share experiences', 'Build relationships'],
      communication: ['Community forums', 'Group messaging', 'Social platforms'],
      buyingMotivations: ['Community recommendations', 'Group buying', 'Shared values'],
      demographics: {
        ageRange: '22-50',
        location: 'Community-focused areas',
        income: '$35K-$90K'
      }
    }
  }

  const generateGenericTrend = (psychographics: any) => {
    return {
      values: ['Innovation', 'Staying current', 'Being first'],
      personality: ['Trendy', 'Early adopter', 'Influential'],
      interests: ['Latest trends', 'New technologies', 'Cultural movements'],
      painPoints: ['Missing out', 'Information fatigue', 'Trend oversaturation'],
      goals: ['Stay ahead of trends', 'Influence others', 'Be seen as current'],
      communication: ['Social media', 'Trend platforms', 'Influencer content'],
      buyingMotivations: ['Novelty', 'Social status', 'Early access'],
      demographics: {
        ageRange: '18-40',
        location: 'Urban centers',
        income: '$30K-$120K'
      }
    }
  }

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'base':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-100 mb-2">Choose Your Foundation</h3>
              <p className="text-primary-300">Select what you want to base your persona on</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Segment Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'segment' 
                    ? 'border-accent-400 bg-accent-500/10 ring-2 ring-accent-400/30' 
                    : 'hover:border-accent-500/50'
                }`}
                onClick={() => selectBase('segment')}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Audience Segment</h4>
                  <p className="text-sm text-primary-300">Build from our 48 precision segments</p>
                  {personaData.baseSelection.type === 'segment' && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Community Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'community' 
                    ? 'border-brand-400 bg-brand-500/10 ring-2 ring-brand-400/30' 
                    : 'hover:border-brand-500/50'
                }`}
                onClick={() => selectBase('community')}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-brand-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Micro-Community</h4>
                  <p className="text-sm text-primary-300">Base on specific community behaviors</p>
                  {personaData.baseSelection.type === 'community' && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-brand-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Trend Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'trend' 
                    ? 'border-success-400 bg-success-500/10 ring-2 ring-success-400/30' 
                    : 'hover:border-success-500/50'
                }`}
                onClick={() => selectBase('trend')}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-success-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Emerging Trend</h4>
                  <p className="text-sm text-primary-300">Build around cultural movements</p>
                  {personaData.baseSelection.type === 'trend' && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-success-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Custom Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'custom' 
                    ? 'border-purple-400 bg-purple-500/10 ring-2 ring-purple-400/30' 
                    : 'hover:border-purple-500/50'
                }`}
                onClick={() => selectBase('custom')}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Custom Persona</h4>
                  <p className="text-sm text-primary-300">Create with detailed inputs</p>
                  {personaData.baseSelection.type === 'custom' && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Selection Details */}
            {personaData.baseSelection.type && personaData.baseSelection.type !== 'custom' && (
              <div className="space-y-4">
                <div className="text-center py-4">
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">
                    Great! Now choose a specific {personaData.baseSelection.type}
                  </h4>
                  <p className="text-sm text-primary-400">
                    Select one of the options below to continue with your persona generation
                  </p>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
                  <input
                    type="text"
                    placeholder={`Search ${personaData.baseSelection.type}s...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {personaData.baseSelection.type === 'segment' && filteredSegments.map(segment => (
                    <Card 
                      key={segment.id}
                      className={`glass-card cursor-pointer transition-all duration-200 relative ${
                        personaData.baseSelection.data?.id === segment.id
                          ? 'border-accent-400 bg-accent-500/10 ring-2 ring-accent-400/30'
                          : 'hover:border-accent-500/50'
                      }`}
                      onClick={() => selectBase('segment', segment)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-primary-100 mb-1">{segment.name}</h5>
                            <p className="text-sm text-primary-300 mb-2">{segment.description}</p>
                            <div className="text-xs text-primary-400">
                              {segment.tier} • Age {segment.ageMin}-{segment.ageMax}
                            </div>
                          </div>
                          {personaData.baseSelection.data?.id === segment.id && (
                            <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center ml-3">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        {personaData.baseSelection.data?.id === segment.id && (
                          <div className="mt-2 px-2 py-1 bg-accent-500/20 text-accent-300 rounded text-xs font-medium">
                            ✓ Selected
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  {personaData.baseSelection.type === 'community' && filteredCommunities.map(community => (
                    <Card 
                      key={community.id}
                      className={`glass-card cursor-pointer transition-all duration-200 relative ${
                        personaData.baseSelection.data?.id === community.id
                          ? 'border-brand-400 bg-brand-500/10 ring-2 ring-brand-400/30'
                          : 'hover:border-brand-500/50'
                      }`}
                      onClick={() => selectBase('community', community)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-primary-100 mb-1">{community.name}</h5>
                            <p className="text-sm text-primary-300 mb-2">{community.description}</p>
                            <div className="text-xs text-primary-400">
                              {community.size} members • {community.engagement} engagement
                            </div>
                          </div>
                          {personaData.baseSelection.data?.id === community.id && (
                            <div className="w-6 h-6 bg-brand-400 rounded-full flex items-center justify-center ml-3">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        {personaData.baseSelection.data?.id === community.id && (
                          <div className="mt-2 px-2 py-1 bg-brand-500/20 text-brand-300 rounded text-xs font-medium">
                            ✓ Selected
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  {personaData.baseSelection.type === 'trend' && filteredTrends.map(trend => (
                    <Card 
                      key={trend.id}
                      className={`glass-card cursor-pointer transition-all duration-200 relative ${
                        personaData.baseSelection.data?.id === trend.id
                          ? 'border-success-400 bg-success-500/10 ring-2 ring-success-400/30'
                          : 'hover:border-success-500/50'
                      }`}
                      onClick={() => selectBase('trend', trend)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-primary-100 mb-1">{trend.name}</h5>
                            <p className="text-sm text-primary-300 mb-2">{trend.description}</p>
                            <div className="text-xs text-primary-400">
                              {trend.category} • {trend.status} • {trend.virality}% virality
                            </div>
                          </div>
                          {personaData.baseSelection.data?.id === trend.id && (
                            <div className="w-6 h-6 bg-success-400 rounded-full flex items-center justify-center ml-3">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        {personaData.baseSelection.data?.id === trend.id && (
                          <div className="mt-2 px-2 py-1 bg-success-500/20 text-success-300 rounded text-xs font-medium">
                            ✓ Selected
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 'configure':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-100 mb-2">Configure Your Persona</h3>
              <p className="text-primary-300">
                {personaData.baseSelection.type === 'custom' 
                  ? 'Provide details and fine-tune psychological characteristics'
                  : 'Add context and adjust psychographic traits for your persona'
                }
              </p>
            </div>

            {/* Summary of Selected Base */}
            {personaData.baseSelection.data && personaData.baseSelection.type !== 'custom' && (
              <Card className="glass-card border-accent-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      personaData.baseSelection.type === 'segment' ? 'bg-accent-500/20' :
                      personaData.baseSelection.type === 'community' ? 'bg-brand-500/20' :
                      'bg-success-500/20'
                    }`}>
                      {personaData.baseSelection.type === 'segment' && <Target className="w-5 h-5 text-accent-400" />}
                      {personaData.baseSelection.type === 'community' && <Users className="w-5 h-5 text-brand-400" />}
                      {personaData.baseSelection.type === 'trend' && <TrendingUp className="w-5 h-5 text-success-400" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-200">
                        Based on: {personaData.baseSelection.data.name}
                      </div>
                      <div className="text-xs text-primary-400">
                        {personaData.baseSelection.type} foundation
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Custom Persona Details Section */}
            {personaData.baseSelection.type === 'custom' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Persona Details</h4>
                </div>

                <AudioTextArea
                  label="Persona Description"
                  value={personaData.customInputs.description}
                  onChange={(value) => updateCustomInput('description', value)}
                  placeholder="Describe the persona you want to create..."
                  rows={3}
                  required={true}
                  maxLength={500}
                  showCharCount={true}
                  audioMaxDuration={90}
                  id="personaDescription"
                  name="personaDescription"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      value={personaData.customInputs.targetAudience}
                      onChange={(e) => updateCustomInput('targetAudience', e.target.value)}
                      placeholder="e.g., Young professionals, Parents..."
                      className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">
                      Industry Context
                    </label>
                    <input
                      type="text"
                      value={personaData.customInputs.industry}
                      onChange={(e) => updateCustomInput('industry', e.target.value)}
                      placeholder="e.g., Technology, Healthcare..."
                      className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Context for Non-Custom */}
            {personaData.baseSelection.type !== 'custom' && (
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">
                  Additional Context (Optional)
                </label>
                <AudioTextArea
                  value={personaData.customInputs.behaviorPrompt}
                  onChange={(value) => updateCustomInput('behaviorPrompt', value)}
                  placeholder="Add any specific behaviors, preferences, or characteristics you want to emphasize..."
                  rows={3}
                  className=""
                  audioMaxDuration={180}
                />
              </div>
            )}

            {/* Behavioral Prompt for Custom */}
            {personaData.baseSelection.type === 'custom' && (
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">
                  Behavioral Prompt (Optional)
                </label>
                <AudioTextArea
                  value={personaData.customInputs.behaviorPrompt}
                  onChange={(value) => updateCustomInput('behaviorPrompt', value)}
                  placeholder="Describe specific behaviors, preferences, or characteristics..."
                  rows={3}
                  className=""
                  audioMaxDuration={180}
                />
              </div>
            )}

            {/* Psychographic Categories */}
            <div className="space-y-8">
              {/* Values and Lifestyle */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Values &amp; Lifestyle</h4>
                </div>
                {psychographicFactors.filter(f => ['sustainabilityImportance', 'convenienceOrientation', 'luxuryAffinity'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Personality Traits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-brand-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Personality Traits</h4>
                </div>
                {psychographicFactors.filter(f => ['adventurousness', 'brandLoyalty'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Social Status & Aspirations */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-success-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Social Status &amp; Aspirations</h4>
                </div>
                {psychographicFactors.filter(f => ['prestigeSeeking', 'belongingNeed'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Risk & Innovation */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-warning-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-warning-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Risk Tolerance &amp; Innovation</h4>
                </div>
                {psychographicFactors.filter(f => ['riskTolerance', 'innovationAdoption'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Emotional Motivations */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Emotional Motivations</h4>
                </div>
                {psychographicFactors.filter(f => ['emotionalDriver', 'nostalgiaInfluence'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Purchase Behavior */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Purchase Behavior</h4>
                </div>
                {psychographicFactors.filter(f => ['priceSensitivity', 'researchDepth'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>

              {/* Social Influences */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100">Social Influences</h4>
                </div>
                {psychographicFactors.filter(f => ['socialMediaInfluence', 'expertOpinionValue'].includes(f.id)).map(factor => (
                  <PsychographicSlider
                    key={factor.id}
                    label={factor.label}
                    description={factor.description}
                    value={personaData.psychographics[factor.id] || 3}
                    onChange={(value) => updatePsychographic(factor.id, value)}
                    tickLabels={factor.tickLabels}
                    className="p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                  />
                ))}
              </div>
            </div>
          </div>
        )

      case 'generate':
        return (
          <div className="space-y-6">
            {!isGenerating && !showResult && (
              <div className="text-center">
                <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20 max-w-2xl mx-auto">
                  <CardContent className="p-12">
                    <Brain className="w-16 h-16 text-accent-400 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-primary-50 mb-4">Ready to Generate</h4>
                    <div className="space-y-2 text-sm mb-8">
                      <div className="flex justify-between">
                        <span className="text-primary-400">Foundation:</span>
                        <span className="text-primary-200 capitalize">{personaData.baseSelection.type}</span>
                      </div>
                      {personaData.baseSelection.data && (
                        <div className="flex justify-between">
                          <span className="text-primary-400">Source:</span>
                          <span className="text-primary-200">{personaData.baseSelection.data.name}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-primary-400">Psychographic Adjustments:</span>
                        <span className="text-primary-200">
                          {Object.values(personaData.psychographics).filter(val => val !== 3).length} factors modified
                        </span>
                      </div>
                      {personaData.psychographics.priceSensitivity && personaData.psychographics.priceSensitivity !== 3 && (
                        <div className="flex justify-between">
                          <span className="text-primary-400">Price Sensitivity:</span>
                          <span className="text-primary-200">{psychographicFactors.find(f => f.id === 'priceSensitivity')?.tickLabels[personaData.psychographics.priceSensitivity - 1] || 'Balanced'}</span>
                        </div>
                      )}
                      {personaData.psychographics.innovationAdoption && personaData.psychographics.innovationAdoption !== 3 && (
                        <div className="flex justify-between">
                          <span className="text-primary-400">Innovation Adoption:</span>
                          <span className="text-primary-200">{psychographicFactors.find(f => f.id === 'innovationAdoption')?.tickLabels[personaData.psychographics.innovationAdoption - 1] || 'Balanced'}</span>
                        </div>
                      )}
                    </div>
                    <Button size="xl" onClick={generatePersona} className="px-12 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Persona
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {isGenerating && (
              <div className="text-center">
                <Card className="glass-card max-w-2xl mx-auto">
                  <CardContent className="p-12">
                    <div className="animate-spin w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-primary-50 mb-4">Generating Your Persona</h4>
                    <p className="text-primary-300">Our AI is analyzing your inputs and creating a detailed psychographic profile...</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {showResult && (
              <div className="space-y-6">
                <PersonaCard 
                  persona={personaData} 
                  showGenerateButton={true}
                  onImageGenerated={(imageUrl) => {
                    // Update persona data with the generated image
                    setPersonaData(prev => ({
                      ...prev,
                      profilePicture: {
                        url: imageUrl,
                        prompt: '',
                        generatedAt: new Date().toISOString(),
                        cached: true
                      }
                    }))
                  }}
                />
                
                {/* Psychographic Adjustments Summary */}
                {Object.values(personaData.psychographics).filter(val => val !== 3).length > 0 && (
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h5 className="font-semibold text-primary-50 mb-3">Psychographic Adjustments Applied</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {Object.entries(personaData.psychographics)
                          .filter(([_, value]) => value !== 3)
                          .map(([factorId, value]) => {
                            const factor = psychographicFactors.find(f => f.id === factorId)
                            if (!factor) return null
                            return (
                              <div key={factorId} className="flex justify-between items-center">
                                <span className="text-primary-300">{factor.label}:</span>
                                <span className="text-accent-400 font-medium">
                                  {factor.tickLabels[value - 1]}
                                </span>
                              </div>
                            )
                          })}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Action Buttons */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" onClick={savePersona} className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                        <Save className="w-4 h-4 mr-2" />
                        Save Persona
                      </Button>
                      <Button variant="outline" size="sm" onClick={exportPersona} className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => {
                        setShowResult(false)
                        setCurrentStep(0)
                        setPersonaData(prev => ({ ...prev, baseSelection: { type: null, data: null } }))
                      }} className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Create Another
                      </Button>
                      <Link href="/dashboard">
                        <Button size="sm" className="bg-accent-500 hover:bg-accent-600 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Complete
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: // Base selection
        // Allow progression after selecting any foundation type
        // If they selected a specific item, great. If they just selected the type, also allow progression
        // This gives users flexibility to either choose specific items or proceed with the general type
        return personaData.baseSelection.type !== null
      case 1: // Configure (details + psychographics)
        if (personaData.baseSelection.type === 'custom') {
          return personaData.customInputs.description.trim() !== ''
        }
        return true
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Link href="/personas">
            <Button variant="outline" size="sm" className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Personas
            </Button>
          </Link>
          <div className="h-6 w-px bg-primary-700" />
          <nav className="flex items-center space-x-2 text-sm text-primary-400">
            <Link href="/dashboard" className="hover:text-primary-200 transition-colors">
              Dashboard
            </Link>
            <span>→</span>
            <Link href="/personas" className="hover:text-primary-200 transition-colors">
              Personas
            </Link>
            <span>→</span>
            <span className="text-primary-200">Generate</span>
          </nav>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary-100">Generate AI Persona</h1>
          <p className="text-primary-300 max-w-2xl mx-auto">
            Create detailed psychographic personas from segments, communities, trends, or custom inputs
          </p>
        </motion.div>

        {/* Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-500/20 border-2 border-accent-400 rounded-full flex items-center justify-center">
                <span className="text-accent-400 font-bold text-sm">{currentStep + 1}</span>
              </div>
              <div>
                <h3 className="text-primary-50 font-semibold text-lg">
                  {steps[currentStep].title}
                </h3>
                <p className="text-primary-400 text-sm">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-primary-300 text-sm font-medium">
                {currentStep + 1} of {steps.length}
              </div>
            </div>
          </div>
          
          <div className="w-full bg-primary-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-accent-500 to-accent-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <Card className="glass-card min-h-[600px]">
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Navigation */}
        {!showResult && (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className={`rounded-xl transition-all duration-300 ${
                  canProceed() 
                    ? 'bg-accent-500 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/20 text-white' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default function GeneratePersonaPage() {
  return (
    <ProtectedRoute requiredPermission="view_premium_reports">
      <GeneratePersonaContent />
    </ProtectedRoute>
  )
}