'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Target, Users, TrendingUp, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Search, Sparkles, Save, Download, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { PsychographicSlider } from '@/components/ui/PsychographicSlider'
import { expandedSegments } from '@/data/expanded_segments'
import { emergingTrends } from '@/data/emergingTrends'
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

  // Key psychographic factors for custom personas
  const psychographicFactors: PsychographicFactor[] = [
    {
      id: 'priceSensitivity',
      label: 'Price Sensitivity',
      description: 'How much does price influence their purchasing decisions?',
      tickLabels: ['Price First', 'Value Conscious', 'Balanced', 'Quality Focus', 'Premium Only']
    },
    {
      id: 'innovationAdoption',
      label: 'Innovation Adoption',
      description: 'How quickly they adopt new products or technologies',
      tickLabels: ['Laggard', 'Late Majority', 'Early Majority', 'Early Adopter', 'Innovator']
    },
    {
      id: 'socialInfluence',
      label: 'Social Influence',
      description: 'How much they are influenced by others opinions and recommendations',
      tickLabels: ['Very Independent', 'Mostly Independent', 'Balanced', 'Socially Aware', 'Highly Influenced']
    },
    {
      id: 'riskTolerance',
      label: 'Risk Tolerance',
      description: 'Comfort level with trying new or unfamiliar things',
      tickLabels: ['Risk Averse', 'Cautious', 'Neutral', 'Risk Taking', 'Risk Seeking']
    },
    {
      id: 'sustainabilityFocus',
      label: 'Sustainability Focus',
      description: 'Importance of environmental and social responsibility',
      tickLabels: ['Not Important', 'Slightly Important', 'Moderate', 'Important', 'Critical Priority']
    }
  ]

  useEffect(() => {
    // Initialize psychographic values
    const initialPsychographics: { [key: string]: number } = {}
    psychographicFactors.forEach(factor => {
      initialPsychographics[factor.id] = 3
    })
    setPersonaData(prev => ({ ...prev, psychographics: initialPsychographics }))
  }, [])

  const steps = [
    { id: 'base', title: 'Select Foundation', description: 'Choose your persona base' },
    { id: 'details', title: 'Add Details', description: 'Configure persona specifics' },
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
        insights = generateFromSegment(baseSelection.data)
        break
      case 'community':
        insights = generateFromCommunity(baseSelection.data)
        break
      case 'trend':
        insights = generateFromTrend(baseSelection.data)
        break
      case 'custom':
        insights = generateFromCustom(customInputs, psychographics)
        break
    }

    return insights
  }

  const generateFromSegment = (segment: any) => ({
    values: ['Innovation', 'Quality', 'Authenticity'].slice(0, 3),
    personality: ['Goal-oriented', 'Detail-focused', 'Analytical'],
    interests: ['Industry trends', 'Professional development', 'Quality products'],
    painPoints: ['Information overload', 'Decision fatigue', 'Time constraints'],
    goals: ['Professional growth', 'Efficient solutions', 'Quality outcomes'],
    communication: ['Email newsletters', 'Professional networks', 'Industry publications'],
    buyingMotivations: ['Quality assurance', 'Professional reputation', 'Long-term value'],
    demographics: {
      ageRange: `${segment.ageMin}-${segment.ageMax}`,
      location: 'Urban/Suburban',
      income: segment.incomeMin ? `$${Math.round(segment.incomeMin/1000)}K-$${Math.round(segment.incomeMax/1000)}K` : '$50K-$80K'
    }
  })

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
    const buyingMotivations = []

    // Generate based on psychographic inputs
    if (psychographics.sustainabilityFocus >= 4) {
      values.push('Environmental responsibility')
      buyingMotivations.push('Sustainability impact')
    }
    if (psychographics.innovationAdoption >= 4) {
      values.push('Innovation')
      personality.push('Early adopter')
    }
    if (psychographics.priceSensitivity >= 4) {
      buyingMotivations.push('Value for money')
    }

    return {
      values: values.length > 0 ? values : ['Personal growth', 'Quality', 'Authenticity'],
      personality: personality.length > 0 ? personality : ['Thoughtful', 'Practical', 'Balanced'],
      interests: inputs.targetAudience ? [inputs.targetAudience, inputs.industry] : ['Personal development', 'Quality products'],
      painPoints: ['Decision complexity', 'Information overload', 'Time constraints'],
      goals: ['Achieve personal objectives', 'Make informed decisions', 'Optimize outcomes'],
      communication: ['Email', 'Social media', 'Word of mouth'],
      buyingMotivations: buyingMotivations.length > 0 ? buyingMotivations : ['Quality', 'Value', 'Convenience'],
      demographics: {
        ageRange: '25-45',
        location: 'Mixed',
        income: '$45K-$85K'
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
                    ? 'border-accent-400 bg-accent-500/10' 
                    : 'hover:border-accent-500/50'
                }`}
                onClick={() => selectBase('segment')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Audience Segment</h4>
                  <p className="text-sm text-primary-300">Build from our 48 precision segments</p>
                </CardContent>
              </Card>

              {/* Community Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'community' 
                    ? 'border-brand-400 bg-brand-500/10' 
                    : 'hover:border-brand-500/50'
                }`}
                onClick={() => selectBase('community')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-brand-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Micro-Community</h4>
                  <p className="text-sm text-primary-300">Base on specific community behaviors</p>
                </CardContent>
              </Card>

              {/* Trend Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'trend' 
                    ? 'border-success-400 bg-success-500/10' 
                    : 'hover:border-success-500/50'
                }`}
                onClick={() => selectBase('trend')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-success-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Emerging Trend</h4>
                  <p className="text-sm text-primary-300">Build around cultural movements</p>
                </CardContent>
              </Card>

              {/* Custom Option */}
              <Card 
                className={`glass-card cursor-pointer transition-all duration-200 ${
                  personaData.baseSelection.type === 'custom' 
                    ? 'border-purple-400 bg-purple-500/10' 
                    : 'hover:border-purple-500/50'
                }`}
                onClick={() => selectBase('custom')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-100 mb-2">Custom Persona</h4>
                  <p className="text-sm text-primary-300">Create with detailed inputs</p>
                </CardContent>
              </Card>
            </div>

            {/* Selection Details */}
            {personaData.baseSelection.type && personaData.baseSelection.type !== 'custom' && (
              <div className="space-y-4">
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
                      className={`glass-card cursor-pointer transition-all duration-200 ${
                        personaData.baseSelection.data?.id === segment.id
                          ? 'border-accent-400 bg-accent-500/10'
                          : 'hover:border-accent-500/50'
                      }`}
                      onClick={() => selectBase('segment', segment)}
                    >
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-primary-100 mb-1">{segment.name}</h5>
                        <p className="text-sm text-primary-300 mb-2">{segment.description}</p>
                        <div className="text-xs text-primary-400">
                          {segment.tier} • Age {segment.ageMin}-{segment.ageMax}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {personaData.baseSelection.type === 'community' && filteredCommunities.map(community => (
                    <Card 
                      key={community.id}
                      className={`glass-card cursor-pointer transition-all duration-200 ${
                        personaData.baseSelection.data?.id === community.id
                          ? 'border-brand-400 bg-brand-500/10'
                          : 'hover:border-brand-500/50'
                      }`}
                      onClick={() => selectBase('community', community)}
                    >
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-primary-100 mb-1">{community.name}</h5>
                        <p className="text-sm text-primary-300 mb-2">{community.description}</p>
                        <div className="text-xs text-primary-400">
                          {community.size} members • {community.engagement} engagement
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {personaData.baseSelection.type === 'trend' && filteredTrends.map(trend => (
                    <Card 
                      key={trend.id}
                      className={`glass-card cursor-pointer transition-all duration-200 ${
                        personaData.baseSelection.data?.id === trend.id
                          ? 'border-success-400 bg-success-500/10'
                          : 'hover:border-success-500/50'
                      }`}
                      onClick={() => selectBase('trend', trend)}
                    >
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-primary-100 mb-1">{trend.name}</h5>
                        <p className="text-sm text-primary-300 mb-2">{trend.description}</p>
                        <div className="text-xs text-primary-400">
                          {trend.category} • {trend.status} • {trend.virality}% virality
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 'details':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-100 mb-2">Configure Details</h3>
              <p className="text-primary-300">
                {personaData.baseSelection.type === 'custom' 
                  ? 'Provide detailed inputs for your custom persona'
                  : 'Fine-tune your persona with additional inputs'
                }
              </p>
            </div>

            {personaData.baseSelection.type === 'custom' ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Persona Description *
                  </label>
                  <textarea
                    value={personaData.customInputs.description}
                    onChange={(e) => updateCustomInput('description', e.target.value)}
                    placeholder="Describe the persona you want to create..."
                    rows={3}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={personaData.customInputs.targetAudience}
                    onChange={(e) => updateCustomInput('targetAudience', e.target.value)}
                    placeholder="e.g., Young professionals, Parents, Students..."
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
                    placeholder="e.g., Technology, Healthcare, Fashion..."
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Behavioral Prompt
                  </label>
                  <textarea
                    value={personaData.customInputs.behaviorPrompt}
                    onChange={(e) => updateCustomInput('behaviorPrompt', e.target.value)}
                    placeholder="Describe specific behaviors, preferences, or characteristics..."
                    rows={4}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-primary-100">Psychographic Factors</h4>
                  {psychographicFactors.map(factor => (
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
            ) : (
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        personaData.baseSelection.type === 'segment' ? 'bg-accent-500/20' :
                        personaData.baseSelection.type === 'community' ? 'bg-brand-500/20' :
                        'bg-success-500/20'
                      }`}>
                        {personaData.baseSelection.type === 'segment' && <Target className="w-6 h-6 text-accent-400" />}
                        {personaData.baseSelection.type === 'community' && <Users className="w-6 h-6 text-brand-400" />}
                        {personaData.baseSelection.type === 'trend' && <TrendingUp className="w-6 h-6 text-success-400" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary-100">
                          {personaData.baseSelection.data?.name}
                        </h4>
                        <p className="text-sm text-primary-300">
                          {personaData.baseSelection.data?.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-primary-400">
                      This persona will be generated based on the characteristics and behaviors associated with this {personaData.baseSelection.type}.
                    </p>
                  </CardContent>
                </Card>

                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Additional Context (Optional)
                  </label>
                  <textarea
                    value={personaData.customInputs.behaviorPrompt}
                    onChange={(e) => updateCustomInput('behaviorPrompt', e.target.value)}
                    placeholder="Add any specific behaviors, preferences, or characteristics you want to emphasize..."
                    rows={3}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>
              </div>
            )}
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
                        <span className="text-primary-200">{personaData.baseSelection.type}</span>
                      </div>
                      {personaData.baseSelection.data && (
                        <div className="flex justify-between">
                          <span className="text-primary-400">Source:</span>
                          <span className="text-primary-200">{personaData.baseSelection.data.name}</span>
                        </div>
                      )}
                    </div>
                    <Button size="xl" onClick={generatePersona} className="px-12">
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
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-6 h-6 text-accent-400" />
                      <span className="text-primary-50">{personaData.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Values</h5>
                          <div className="flex flex-wrap gap-2">
                            {personaData.generatedInsights.values.map((value, index) => (
                              <span key={index} className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm">
                                {value}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Personality</h5>
                          <div className="flex flex-wrap gap-2">
                            {personaData.generatedInsights.personality.map((trait, index) => (
                              <span key={index} className="px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-sm">
                                {trait}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Demographics</h5>
                          <div className="space-y-1 text-sm">
                            <div><span className="text-primary-400">Age:</span> <span className="text-primary-200">{personaData.generatedInsights.demographics.ageRange}</span></div>
                            <div><span className="text-primary-400">Location:</span> <span className="text-primary-200">{personaData.generatedInsights.demographics.location}</span></div>
                            <div><span className="text-primary-400">Income:</span> <span className="text-primary-200">{personaData.generatedInsights.demographics.income}</span></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Interests</h5>
                          <div className="flex flex-wrap gap-2">
                            {personaData.generatedInsights.interests.map((interest, index) => (
                              <span key={index} className="px-3 py-1 bg-success-500/20 text-success-300 rounded-full text-sm">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Communication</h5>
                          <div className="flex flex-wrap gap-2">
                            {personaData.generatedInsights.communication.map((channel, index) => (
                              <span key={index} className="px-3 py-1 bg-warning-500/20 text-warning-300 rounded-full text-sm">
                                {channel}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-primary-50 mb-2">Buying Motivations</h5>
                          <div className="flex flex-wrap gap-2">
                            {personaData.generatedInsights.buyingMotivations.map((motivation, index) => (
                              <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                {motivation}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-8 pt-6 border-t border-primary-700">
                      <Button variant="outline" size="sm">
                        <Save className="w-4 h-4 mr-2" />
                        Save Persona
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => {
                        setShowResult(false)
                        setCurrentStep(0)
                        setPersonaData(prev => ({ ...prev, baseSelection: { type: null, data: null } }))
                      }}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Create Another
                      </Button>
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
      case 0:
        return personaData.baseSelection.type !== null && (
          personaData.baseSelection.type === 'custom' || personaData.baseSelection.data !== null
        )
      case 1:
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
            <Button variant="outline" size="sm" className="flex items-center">
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
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
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