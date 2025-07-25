'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Target, Users, TrendingUp, Sparkles, ChevronRight, ChevronLeft, Save, Download, RefreshCw, Eye, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PsychographicSlider } from '@/components/ui/PsychographicSlider'

interface PersonaData {
  name: string
  demographic: {
    ageRange: string
    location: string
    income: string
  }
  psychographics: {
    [key: string]: number
  }
  selectedSegments: string[]
  selectedCommunities: string[]
  generatedInsights: {
    values: string[]
    personality: string[]
    interests: string[]
    painPoints: string[]
    goals: string[]
    communication: string[]
    buyingMotivations: string[]
  }
}

interface PsychographicFactor {
  id: string
  label: string
  description: string
  tickLabels: string[]
  category: 'behavioral' | 'social' | 'lifestyle' | 'values'
}

export function PersonaGenerator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personaData, setPersonaData] = useState<PersonaData>({
    name: '',
    demographic: {
      ageRange: '25-34',
      location: 'Urban',
      income: 'Middle'
    },
    psychographics: {},
    selectedSegments: [],
    selectedCommunities: [],
    generatedInsights: {
      values: [],
      personality: [],
      interests: [],
      painPoints: [],
      goals: [],
      communication: [],
      buyingMotivations: []
    }
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [segmentSearchTerm, setSegmentSearchTerm] = useState('')
  const [communitySearchTerm, setCommunitySearchTerm] = useState('')

  // Define psychographic factors with detailed configurations
  const psychographicFactors: PsychographicFactor[] = [
    // Behavioral Factors
    {
      id: 'priceSensitivity',
      label: 'Price Sensitivity',
      description: 'How much does price influence their purchasing decisions?',
      tickLabels: ['Price First', 'Value Conscious', 'Balanced', 'Quality Focus', 'Premium Only'],
      category: 'behavioral'
    },
    {
      id: 'impulseBuying',
      label: 'Impulse Buying',
      description: 'Tendency to make spontaneous purchase decisions',
      tickLabels: ['Very Planned', 'Mostly Planned', 'Mixed', 'Somewhat Impulsive', 'Very Impulsive'],
      category: 'behavioral'
    },
    {
      id: 'brandLoyalty',
      label: 'Brand Loyalty',
      description: 'How likely they are to stick with familiar brands',
      tickLabels: ['Always Switch', 'Often Switch', 'Neutral', 'Usually Loyal', 'Extremely Loyal'],
      category: 'behavioral'
    },
    {
      id: 'researchDepth',
      label: 'Research Depth',
      description: 'How thoroughly they research before making decisions',
      tickLabels: ['No Research', 'Basic Check', 'Moderate', 'Thorough', 'Exhaustive'],
      category: 'behavioral'
    },
    
    // Social Factors
    {
      id: 'socialMediaUsage',
      label: 'Social Media Usage',
      description: 'How actively they engage with social media platforms',
      tickLabels: ['Minimal', 'Casual', 'Regular', 'Active', 'Heavy User'],
      category: 'social'
    },
    {
      id: 'influenceReceptivity',
      label: 'Influence Receptivity',
      description: 'How open they are to recommendations from others',
      tickLabels: ['Very Resistant', 'Skeptical', 'Neutral', 'Open', 'Highly Receptive'],
      category: 'social'
    },
    {
      id: 'communityEngagement',
      label: 'Community Engagement',
      description: 'Level of participation in online/offline communities',
      tickLabels: ['Lurker', 'Observer', 'Occasional', 'Active', 'Leader'],
      category: 'social'
    },
    {
      id: 'shareability',
      label: 'Content Sharing',
      description: 'Likelihood to share content or experiences with others',
      tickLabels: ['Never Share', 'Rarely', 'Sometimes', 'Often', 'Always Share'],
      category: 'social'
    },
    
    // Lifestyle Factors
    {
      id: 'innovationAdoption',
      label: 'Innovation Adoption',
      description: 'How quickly they adopt new products or technologies',
      tickLabels: ['Laggard', 'Late Majority', 'Early Majority', 'Early Adopter', 'Innovator'],
      category: 'lifestyle'
    },
    {
      id: 'timeAvailability',
      label: 'Time Availability',
      description: 'How much time they typically have for new experiences',
      tickLabels: ['Very Limited', 'Limited', 'Moderate', 'Flexible', 'Abundant'],
      category: 'lifestyle'
    },
    {
      id: 'riskTolerance',
      label: 'Risk Tolerance',
      description: 'Comfort level with trying new or unfamiliar things',
      tickLabels: ['Risk Averse', 'Cautious', 'Neutral', 'Risk Taking', 'Risk Seeking'],
      category: 'lifestyle'
    },
    {
      id: 'personalityType',
      label: 'Personality Type',
      description: 'Overall personality orientation and energy source',
      tickLabels: ['Very Introverted', 'Introverted', 'Balanced', 'Extroverted', 'Very Extroverted'],
      category: 'lifestyle'
    },
    
    // Values Factors
    {
      id: 'sustainabilityImportance',
      label: 'Sustainability Importance',
      description: 'How much environmental and social responsibility matters',
      tickLabels: ['Not Important', 'Slightly', 'Moderate', 'Important', 'Critical'],
      category: 'values'
    },
    {
      id: 'authenticityValue',
      label: 'Authenticity Value',
      description: 'Importance placed on genuine, authentic experiences',
      tickLabels: ['Indifferent', 'Somewhat', 'Moderate', 'Important', 'Essential'],
      category: 'values'
    },
    {
      id: 'statusOriented',
      label: 'Status Orientation',
      description: 'How important social status and prestige are to them',
      tickLabels: ['Status Blind', 'Low Priority', 'Neutral', 'Status Aware', 'Status Driven'],
      category: 'values'
    },
    {
      id: 'qualityFocus',
      label: 'Quality Focus',
      description: 'Emphasis on product/service quality over other factors',
      tickLabels: ['Quantity Focus', 'Cost Focus', 'Balanced', 'Quality Priority', 'Quality Only'],
      category: 'values'
    }
  ]

  // Mock segments and communities data (expanded for search)
  const allSegments = [
    { id: 'eco-conscious', name: 'Eco-Conscious Millennials', description: 'Environmentally aware 25-35 year olds' },
    { id: 'tech-early-adopters', name: 'Tech Early Adopters', description: 'Innovation-focused digital natives' },
    { id: 'wellness-seekers', name: 'Wellness Seekers', description: 'Health and mindfulness focused individuals' },
    { id: 'creative-entrepreneurs', name: 'Creative Entrepreneurs', description: 'Artistic individuals building creative businesses' },
    { id: 'conscious-parents', name: 'Conscious Parents', description: 'Mindful parents prioritizing family values' },
    { id: 'luxury-minimalists', name: 'Luxury Minimalists', description: 'High-income consumers who value quality over quantity' },
    { id: 'remote-professionals', name: 'Remote Professionals', description: 'Digital nomads and remote-first workers' },
    { id: 'gen-z-activists', name: 'Gen Z Activists', description: 'Social justice focused young adults' },
    { id: 'fitness-enthusiasts', name: 'Fitness Enthusiasts', description: 'Active lifestyle and health optimization focused' },
    { id: 'urban-gardeners', name: 'Urban Gardeners', description: 'City dwellers growing their own food' },
    { id: 'crypto-investors', name: 'Crypto Investors', description: 'Digital asset and blockchain enthusiasts' },
    { id: 'pet-parents', name: 'Pet Parents', description: 'Pet owners who treat pets as family members' },
    { id: 'book-club-members', name: 'Book Club Members', description: 'Avid readers and literary discussion enthusiasts' },
    { id: 'foodie-explorers', name: 'Foodie Explorers', description: 'Culinary adventurers seeking new dining experiences' },
    { id: 'vintage-collectors', name: 'Vintage Collectors', description: 'Enthusiasts of retro and antique items' }
  ]

  const allCommunities = [
    { id: 'zero-waste', name: 'Zero Waste Living', size: '2.3K', engagement: 'High' },
    { id: 'ai-productivity', name: 'AI Productivity', size: '1.8K', engagement: 'Very High' },
    { id: 'meditation-mindfulness', name: 'Meditation & Mindfulness', size: '3.1K', engagement: 'High' },
    { id: 'indie-makers', name: 'Indie Makers', size: '1.5K', engagement: 'Very High' },
    { id: 'montessori-parenting', name: 'Montessori Parenting', size: '2.7K', engagement: 'High' },
    { id: 'plant-based-cooking', name: 'Plant-Based Cooking', size: '4.2K', engagement: 'High' },
    { id: 'digital-minimalism', name: 'Digital Minimalism', size: '1.9K', engagement: 'Medium' },
    { id: 'sustainable-fashion', name: 'Sustainable Fashion', size: '3.7K', engagement: 'Very High' },
    { id: 'crypto-trading', name: 'Crypto Trading', size: '5.1K', engagement: 'Very High' },
    { id: 'urban-farming', name: 'Urban Farming', size: '2.8K', engagement: 'High' },
    { id: 'diy-home-improvement', name: 'DIY Home Improvement', size: '6.3K', engagement: 'High' },
    { id: 'vintage-fashion', name: 'Vintage Fashion', size: '2.1K', engagement: 'Medium' },
    { id: 'book-reviews', name: 'Book Reviews', size: '3.4K', engagement: 'High' },
    { id: 'coffee-culture', name: 'Coffee Culture', size: '4.8K', engagement: 'High' },
    { id: 'photography-tips', name: 'Photography Tips', size: '7.2K', engagement: 'Very High' },
    { id: 'travel-hacking', name: 'Travel Hacking', size: '3.9K', engagement: 'High' },
    { id: 'home-brewing', name: 'Home Brewing', size: '2.6K', engagement: 'Medium' },
    { id: 'language-learning', name: 'Language Learning', size: '5.5K', engagement: 'High' }
  ]

  // Filter segments and communities based on search
  const filteredSegments = allSegments.filter(segment => 
    segment.name.toLowerCase().includes(segmentSearchTerm.toLowerCase()) ||
    segment.description.toLowerCase().includes(segmentSearchTerm.toLowerCase())
  )

  const filteredCommunities = allCommunities.filter(community => 
    community.name.toLowerCase().includes(communitySearchTerm.toLowerCase())
  )

  // Initialize psychographic values
  useEffect(() => {
    const initialPsychographics: { [key: string]: number } = {}
    psychographicFactors.forEach(factor => {
      initialPsychographics[factor.id] = 3 // Default to middle value
    })
    setPersonaData(prev => ({ ...prev, psychographics: initialPsychographics }))
  }, []) // psychographicFactors is static, so we can safely omit it

  const steps = [
    { id: 'audience', title: 'Select Audience', description: 'Choose segments & micro-communities' },
    { id: 'behavioral', title: 'Behavioral Factors', description: 'Set behavioral psychographics' },
    { id: 'social', title: 'Social Factors', description: 'Configure social preferences' },
    { id: 'lifestyle', title: 'Lifestyle Factors', description: 'Define lifestyle attributes' },
    { id: 'values', title: 'Values & Beliefs', description: 'Set core values and beliefs' },
    { id: 'generate', title: 'Generate Persona', description: 'Create your AI persona' }
  ]

  const updatePsychographic = (factorId: string, value: number) => {
    setPersonaData(prev => ({
      ...prev,
      psychographics: {
        ...prev.psychographics,
        [factorId]: value
      }
    }))
  }

  const toggleSegment = (segmentId: string) => {
    setPersonaData(prev => ({
      ...prev,
      selectedSegments: prev.selectedSegments.includes(segmentId)
        ? prev.selectedSegments.filter(id => id !== segmentId)
        : [...prev.selectedSegments, segmentId]
    }))
  }

  const toggleCommunity = (communityId: string) => {
    setPersonaData(prev => ({
      ...prev,
      selectedCommunities: prev.selectedCommunities.includes(communityId)
        ? prev.selectedCommunities.filter(id => id !== communityId)
        : [...prev.selectedCommunities, communityId]
    }))
  }

  const generatePersona = async () => {
    setIsGenerating(true)
    
    // Simulate AI generation process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Generate insights based on psychographic inputs
    const insights = {
      values: generateValues(),
      personality: generatePersonality(),
      interests: generateInterests(),
      painPoints: generatePainPoints(),
      goals: generateGoals(),
      communication: generateCommunication(),
      buyingMotivations: generateBuyingMotivations()
    }
    
    setPersonaData(prev => ({
      ...prev,
      name: generatePersonaName(),
      generatedInsights: insights
    }))
    
    setIsGenerating(false)
    setShowPreview(true)
  }

  // AI generation helper functions (simplified for demo)
  const generatePersonaName = () => {
    const names = ['Sustainable Sarah', 'Tech-Savvy Marcus', 'Mindful Maya', 'Creative Alex', 'Conscious Carlos']
    return names[Math.floor(Math.random() * names.length)]
  }

  const generateValues = () => {
    const { sustainabilityImportance, authenticityValue, qualityFocus } = personaData.psychographics
    const values = []
    
    if (sustainabilityImportance >= 4) values.push('Environmental responsibility')
    if (authenticityValue >= 4) values.push('Genuine experiences')
    if (qualityFocus >= 4) values.push('Premium quality')
    
    return values.length > 0 ? values : ['Personal growth', 'Family values', 'Work-life balance']
  }

  const generatePersonality = () => {
    const { personalityType, riskTolerance, innovationAdoption } = personaData.psychographics
    const traits = []
    
    if (personalityType >= 4) traits.push('Extroverted')
    else if (personalityType <= 2) traits.push('Introverted')
    
    if (riskTolerance >= 4) traits.push('Adventurous')
    if (innovationAdoption >= 4) traits.push('Forward-thinking')
    
    return traits.length > 0 ? traits : ['Thoughtful', 'Balanced', 'Practical']
  }

  const generateInterests = () => {
    const interests = ['Digital trends', 'Sustainable living', 'Personal development']
    if (personaData.selectedCommunities.includes('zero-waste')) interests.push('Zero waste lifestyle')
    if (personaData.selectedCommunities.includes('ai-productivity')) interests.push('AI and productivity')
    return interests.slice(0, 4)
  }

  const generatePainPoints = () => {
    const { timeAvailability, priceSensitivity } = personaData.psychographics
    const painPoints = []
    
    if (timeAvailability <= 2) painPoints.push('Limited time for research')
    if (priceSensitivity >= 4) painPoints.push('Budget constraints')
    
    return painPoints.length > 0 ? painPoints : ['Information overload', 'Decision fatigue']
  }

  const generateGoals = () => {
    return ['Personal growth', 'Efficient decision-making', 'Authentic lifestyle choices']
  }

  const generateCommunication = () => {
    const { socialMediaUsage } = personaData.psychographics
    if (socialMediaUsage >= 4) return ['Instagram', 'TikTok', 'Social communities']
    if (socialMediaUsage <= 2) return ['Email', 'Traditional media', 'Word of mouth']
    return ['Email newsletters', 'Social media', 'Blog content']
  }

  const generateBuyingMotivations = () => {
    const { qualityFocus, priceSensitivity, sustainabilityImportance } = personaData.psychographics
    const motivations = []
    
    if (qualityFocus >= 4) motivations.push('Premium quality')
    if (priceSensitivity >= 4) motivations.push('Value for money')
    if (sustainabilityImportance >= 4) motivations.push('Environmental impact')
    
    return motivations.length > 0 ? motivations : ['Convenience', 'Reliability', 'Brand reputation']
  }

  const renderStepContent = () => {
    const currentStepData = steps[currentStep]
    
    switch (currentStepData.id) {
      case 'audience':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-50 mb-2">Select Your Audience</h3>
              <p className="text-primary-300">Choose segments and micro-communities that best represent your target audience</p>
            </div>
            
            {/* Segments Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-accent-400" />
                </div>
                <h4 className="text-lg font-semibold text-primary-50">Audience Segments</h4>
                <span className="text-sm text-primary-400">({personaData.selectedSegments.length} selected)</span>
              </div>
              
              {/* Search Input */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search segments..."
                  value={segmentSearchTerm}
                  onChange={(e) => setSegmentSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                {filteredSegments.map(segment => (
                  <Card 
                    key={segment.id}
                    className={`glass-card cursor-pointer transition-all duration-200 ${
                      personaData.selectedSegments.includes(segment.id)
                        ? 'border-accent-400 bg-accent-500/10'
                        : 'hover:border-accent-500/50'
                    }`}
                    onClick={() => toggleSegment(segment.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-sm font-semibold text-primary-50 mb-1">{segment.name}</h5>
                          <p className="text-primary-300 text-xs">{segment.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          personaData.selectedSegments.includes(segment.id)
                            ? 'border-accent-400 bg-accent-400'
                            : 'border-primary-400'
                        }`}>
                          {personaData.selectedSegments.includes(segment.id) && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Communities Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-brand-400" />
                </div>
                <h4 className="text-lg font-semibold text-primary-50">Micro-Communities</h4>
                <span className="text-sm text-primary-400">({personaData.selectedCommunities.length} selected)</span>
              </div>
              
              {/* Search Input */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={communitySearchTerm}
                  onChange={(e) => setCommunitySearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                {filteredCommunities.map(community => (
                  <Card 
                    key={community.id}
                    className={`glass-card cursor-pointer transition-all duration-200 ${
                      personaData.selectedCommunities.includes(community.id)
                        ? 'border-brand-400 bg-brand-500/10'
                        : 'hover:border-brand-500/50'
                    }`}
                    onClick={() => toggleCommunity(community.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-sm font-semibold text-primary-50 mb-1">{community.name}</h5>
                          <div className="flex items-center space-x-3 text-xs text-primary-400">
                            <span>{community.size} members</span>
                            <span>{community.engagement} engagement</span>
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          personaData.selectedCommunities.includes(community.id)
                            ? 'border-brand-400 bg-brand-400'
                            : 'border-primary-400'
                        }`}>
                          {personaData.selectedCommunities.includes(community.id) && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )
        
      case 'behavioral':
      case 'social':
      case 'lifestyle':
      case 'values':
        const categoryFactors = psychographicFactors.filter(factor => factor.category === currentStepData.id)
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-50 mb-2">
                {currentStepData.title}
              </h3>
              <p className="text-primary-300">{currentStepData.description}</p>
            </div>
            
            <div className="space-y-16 md:space-y-12 pb-8">
              {categoryFactors.map(factor => (
                <PsychographicSlider
                  key={factor.id}
                  label={factor.label}
                  description={factor.description}
                  value={personaData.psychographics[factor.id] || 3}
                  onChange={(value) => updatePsychographic(factor.id, value)}
                  tickLabels={factor.tickLabels}
                  className="p-6 md:p-4 bg-primary-900/20 rounded-xl border border-primary-700/50"
                />
              ))}
            </div>
          </div>
        )
        
      case 'generate':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-50 mb-2">Generate Your Persona</h3>
              <p className="text-primary-300">Ready to create an AI-powered persona from your inputs</p>
            </div>
            
            {!isGenerating && !showPreview && (
              <div className="text-center">
                <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20 max-w-2xl mx-auto">
                  <CardContent className="p-12">
                    <Brain className="w-16 h-16 text-accent-400 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-primary-50 mb-4">Your Configuration</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                      <div>
                        <span className="text-primary-400">Segments:</span>
                        <span className="text-primary-200 ml-2">{personaData.selectedSegments.length}</span>
                      </div>
                      <div>
                        <span className="text-primary-400">Communities:</span>
                        <span className="text-primary-200 ml-2">{personaData.selectedCommunities.length}</span>
                      </div>
                      <div>
                        <span className="text-primary-400">Behavioral:</span>
                        <span className="text-primary-200 ml-2">4 factors</span>
                      </div>
                      <div>
                        <span className="text-primary-400">Social:</span>
                        <span className="text-primary-200 ml-2">4 factors</span>
                      </div>
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
            
            {showPreview && (
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
                      <div>
                        <h5 className="font-semibold text-primary-50 mb-2">Values</h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {personaData.generatedInsights.values.map((value, index) => (
                            <span key={index} className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm">
                              {value}
                            </span>
                          ))}
                        </div>
                        
                        <h5 className="font-semibold text-primary-50 mb-2">Personality</h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {personaData.generatedInsights.personality.map((trait, index) => (
                            <span key={index} className="px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-sm">
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-primary-50 mb-2">Communication</h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {personaData.generatedInsights.communication.map((channel, index) => (
                            <span key={index} className="px-3 py-1 bg-success-500/20 text-success-300 rounded-full text-sm">
                              {channel}
                            </span>
                          ))}
                        </div>
                        
                        <h5 className="font-semibold text-primary-50 mb-2">Buying Motivations</h5>
                        <div className="flex flex-wrap gap-2">
                          {personaData.generatedInsights.buyingMotivations.map((motivation, index) => (
                            <span key={index} className="px-3 py-1 bg-warning-500/20 text-warning-300 rounded-full text-sm">
                              {motivation}
                            </span>
                          ))}
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
                      <Button variant="outline" size="sm" onClick={() => setShowPreview(false)}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate
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

  return (
    <div className="space-y-8">
      {/* Progress Header */}
      <div className="space-y-4">
        {/* Mobile-Optimized Current Step Display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-500/20 border-2 border-accent-400 rounded-full flex items-center justify-center">
              <span className="text-accent-400 font-bold text-sm">{currentStep + 1}</span>
            </div>
            <div>
              <h3 className="text-primary-50 font-semibold text-lg md:text-xl">
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
            <div className="text-accent-400 text-xs">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-primary-800 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-accent-500 to-accent-400 h-3 rounded-full transition-all duration-500 relative"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm" />
          </div>
        </div>
        
        {/* Desktop Step Overview (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center justify-between pt-2">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex flex-col items-center space-y-1 flex-1 ${
                index <= currentStep ? 'text-accent-400' : 'text-primary-500'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index < currentStep ? 'bg-accent-400 text-white' :
                index === currentStep ? 'bg-accent-500/20 border border-accent-400 text-accent-400' :
                'bg-primary-700 text-primary-400'
              }`}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className="text-xs font-medium text-center max-w-[80px] leading-tight">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
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
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1 || (currentStep === steps.length - 1 && showPreview)}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}