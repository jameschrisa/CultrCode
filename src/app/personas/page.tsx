'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, Users, Target, TrendingUp, Plus, Sparkles, Eye, Download, Edit2, Trash2, ArrowRight, BookOpen, Star, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Tag } from '@/components/ui/Tag'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'
import { expandedSegments } from '@/data/expanded_segments'
import { emergingTrends } from '@/data/emergingTrends'
import { canAccessFeature } from '@/lib/subscription'
import Link from 'next/link'

interface SavedPersona {
  id: string
  name: string
  description: string
  category: string
  source: 'segment' | 'community' | 'trend' | 'custom'
  sourceData: {
    id: string
    name: string
  }
  confidence: number
  createdAt: string
  lastModified: string
  values: string[]
  personality: string[]
  interests: string[]
  painPoints: string[]
  goals: string[]
  demographics: {
    ageRange: string
    location: string
    income: string
  }
  psychographics: {
    [key: string]: number
  }
}

interface SamplePersona {
  id: string
  name: string
  description: string
  category: string
  source: 'segment' | 'community' | 'trend'
  sourceData: {
    id: string
    name: string
  }
  confidence: number
  values: string[]
  personality: string[]
  demographics: {
    ageRange: string
  }
  preview: boolean
}

function PersonasContent() {
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return canAccessFeature(user, 'canAccessPersonas')
  }
  const [savedPersonas, setSavedPersonas] = useState<SavedPersona[]>([])
  const [samplePersonas, setSamplePersonas] = useState<SamplePersona[]>([])
  const [selectedPersona, setSelectedPersona] = useState<SavedPersona | null>(null)
  const [showSamplePersonas, setShowSamplePersonas] = useState(true)

  // Mock communities data (since we can't access the database directly)
  const mockCommunities = [
    { id: 'pixel-pushers', name: 'Pixel Pushers United', description: 'Digital artists using specific software and techniques' },
    { id: 'cold-plunge', name: 'Cold Plunge Club', description: 'Cold exposure therapy enthusiasts' },
    { id: 'clean-eating', name: 'Clean Eating Crusaders', description: 'Whole food nutrition advocates' },
    { id: 'crypto-builders', name: 'Crypto Builders Network', description: 'DeFi protocol developers and builders' },
    { id: 'mindful-parents', name: 'Mindful Parenting Circle', description: 'Conscious parenting practices' },
    { id: 'sustainable-fashion', name: 'Sustainable Fashion Collective', description: 'Ethical and eco-friendly fashion enthusiasts' },
    { id: 'indie-makers', name: 'Indie Makers Hub', description: 'Solo entrepreneurs building digital products' },
    { id: 'urban-gardeners', name: 'Urban Garden Collective', description: 'City-based growing enthusiasts' }
  ]

  useEffect(() => {
    loadSavedPersonas()
    generateSamplePersonas()
  }, [])

  const loadSavedPersonas = () => {
    // Mock saved personas - in production this would come from API
    const mockSaved: SavedPersona[] = [
      {
        id: 'saved-1',
        name: 'Eco-Conscious Emma',
        description: 'Environmentally-minded professional who prioritizes sustainability in all purchasing decisions',
        category: 'Sustainability',
        source: 'segment',
        sourceData: { id: 'LE2', name: 'Eco-Conscious Creators' },
        confidence: 94,
        createdAt: '2024-01-15',
        lastModified: '2024-01-20',
        values: ['Environmental responsibility', 'Quality over quantity', 'Authentic brands'],
        personality: ['Conscientious', 'Research-oriented', 'Community-focused'],
        interests: ['Zero waste lifestyle', 'Organic products', 'Climate action'],
        painPoints: ['Greenwashing confusion', 'Premium pricing barriers', 'Limited sustainable options'],
        goals: ['Reduce environmental footprint', 'Influence others positively', 'Live authentically'],
        demographics: {
          ageRange: '28-35',
          location: 'Urban/Suburban',
          income: '$65K-$85K'
        },
        psychographics: {
          sustainabilityImportance: 5,
          qualityFocus: 4,
          priceConsciousness: 3
        }
      }
    ]
    setSavedPersonas(mockSaved)
  }

  const generateSamplePersonas = () => {
    // Generate 3 sample personas from random segments, communities, and trends
    const randomSegments = getRandomItems(expandedSegments, 1)
    const randomCommunities = getRandomItems(mockCommunities, 1) 
    const randomTrends = getRandomItems(emergingTrends, 1)

    const samples: SamplePersona[] = [
      // Segment-based persona
      {
        id: 'sample-segment',
        name: generatePersonaNameFromSegment(randomSegments[0]),
        description: `Generated from ${randomSegments[0].name} segment characteristics`,
        category: randomSegments[0].tier === 'TIER1' ? 'Brand Evangelists' : randomSegments[0].tier === 'TIER2' ? 'Early Believers' : 'Quality Seekers',
        source: 'segment',
        sourceData: { id: randomSegments[0].id, name: randomSegments[0].name },
        confidence: 88,
        values: generateValuesFromSegment(randomSegments[0]),
        personality: generatePersonalityFromSegment(randomSegments[0]),
        demographics: {
          ageRange: `${randomSegments[0].ageMin}-${randomSegments[0].ageMax}`
        },
        preview: true
      },
      // Community-based persona
      {
        id: 'sample-community',
        name: generatePersonaNameFromCommunity(randomCommunities[0]),
        description: `Generated from ${randomCommunities[0].name} community insights`,
        category: 'Community Leader',
        source: 'community',
        sourceData: { id: randomCommunities[0].id, name: randomCommunities[0].name },
        confidence: 85,
        values: generateValuesFromCommunity(randomCommunities[0]),
        personality: generatePersonalityFromCommunity(randomCommunities[0]),
        demographics: {
          ageRange: '25-40'
        },
        preview: true
      },
      // Trend-based persona
      {
        id: 'sample-trend', 
        name: generatePersonaNameFromTrend(randomTrends[0]),
        description: `Generated from ${randomTrends[0].name} emerging trend`,
        category: 'Trend Pioneer',
        source: 'trend',
        sourceData: { id: randomTrends[0].id, name: randomTrends[0].name },
        confidence: 82,
        values: generateValuesFromTrend(randomTrends[0]),
        personality: generatePersonalityFromTrend(randomTrends[0]),
        demographics: {
          ageRange: '22-35'
        },
        preview: true
      }
    ]

    setSamplePersonas(samples)
  }

  // Helper functions for generating persona data
  const getRandomItems = <T,>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const generatePersonaNameFromSegment = (segment: any) => {
    const names = ['Creative Maya', 'Tech-Savvy Alex', 'Mindful Sam', 'Trendy Jordan', 'Quality-Focused Riley']
    return names[Math.floor(Math.random() * names.length)]
  }

  const generatePersonaNameFromCommunity = (community: any) => {
    const names = ['Community Connor', 'Engaged Elena', 'Active Adam', 'Social Sofia', 'Connected Chris']
    return names[Math.floor(Math.random() * names.length)]
  }

  const generatePersonaNameFromTrend = (trend: any) => {
    const names = ['Trendy Taylor', 'Pioneer Parker', 'Early Emma', 'Forward Felix', 'Innovative Ivy']
    return names[Math.floor(Math.random() * names.length)]
  }

  const generateValuesFromSegment = (segment: any) => {
    const valueMap = {
      'TIER1': ['Innovation', 'Authenticity', 'Community'],
      'TIER2': ['Quality', 'Trust', 'Reliability'],
      'TIER3': ['Value', 'Practicality', 'Efficiency']
    }
    return valueMap[segment.tier as keyof typeof valueMap] || ['Personal growth', 'Balance', 'Achievement']
  }

  const generatePersonalityFromSegment = (segment: any) => {
    return ['Enthusiastic', 'Detail-oriented', 'Forward-thinking']
  }

  const generateValuesFromCommunity = (community: any) => {
    if (community.name.includes('Sustainable')) return ['Environmental responsibility', 'Ethical consumption', 'Future generations']
    if (community.name.includes('Tech') || community.name.includes('Digital')) return ['Innovation', 'Efficiency', 'Progress']
    return ['Community', 'Shared interests', 'Collaboration']
  }

  const generatePersonalityFromCommunity = (community: any) => {
    return ['Community-minded', 'Engaged', 'Passionate']
  }

  const generateValuesFromTrend = (trend: any) => {
    const categoryValues = {
      'tech': ['Innovation', 'Efficiency', 'Future-focused'],
      'wellness': ['Health', 'Balance', 'Self-care'],
      'aesthetic': ['Beauty', 'Expression', 'Creativity'],
      'sustainability': ['Environmental responsibility', 'Ethical living', 'Impact']
    }
    return categoryValues[trend.category as keyof typeof categoryValues] || ['Discovery', 'Novelty', 'Growth']
  }

  const generatePersonalityFromTrend = (trend: any) => {
    return ['Trend-conscious', 'Early adopter', 'Curious']
  }

  const handleDeletePersona = (personaId: string) => {
    // Show confirmation dialog
    if (window.confirm('Are you sure you want to delete this persona? This action cannot be undone.')) {
      // Remove persona from the list
      setSavedPersonas(prev => prev.filter(persona => persona.id !== personaId))
      
      // Close modal if the deleted persona is currently selected
      if (selectedPersona && selectedPersona.id === personaId) {
        setSelectedPersona(null)
      }
      
      // In a real app, this would also make an API call to delete from the database
      console.log(`Deleted persona with ID: ${personaId}`)
    }
  }

  const handleViewSamplePersona = (samplePersona: SamplePersona) => {
    // Generate realistic goals and pain points based on persona source
    const generateGoalsAndPainPoints = (persona: SamplePersona) => {
      const goalSets = {
        segment: [
          'Achieve professional recognition',
          'Build a successful career',
          'Maintain work-life balance',
          'Develop expertise in their field'
        ],
        community: [
          'Connect with like-minded individuals',
          'Share knowledge and experiences',
          'Build meaningful relationships',
          'Contribute to community growth'
        ],
        trend: [
          'Stay ahead of emerging trends',
          'Influence others in their network',
          'Discover new opportunities',
          'Be recognized as an early adopter'
        ]
      }

      const painPointSets = {
        segment: [
          'Information overload from multiple sources',
          'Difficulty finding reliable recommendations',
          'Time constraints affecting decisions',
          'Balancing quality with budget limitations'
        ],
        community: [
          'Finding authentic community connections',
          'Managing time across multiple interests',
          'Avoiding overwhelming social commitments',
          'Maintaining privacy while being social'
        ],
        trend: [
          'Fear of missing out on opportunities',
          'Difficulty validating new trends',
          'Information fatigue from constant updates',
          'Pressure to maintain trendsetter reputation'
        ]
      }

      const interestSets = {
        segment: [
          'Professional development',
          'Industry insights',
          'Quality products and services',
          'Networking opportunities'
        ],
        community: [
          'Community events and meetups',
          'Collaborative projects',
          'Shared hobbies and interests',
          'Social causes and volunteering'
        ],
        trend: [
          'Emerging technologies',
          'Cultural movements',
          'Innovation and startups',
          'Future predictions and forecasting'
        ]
      }

      return {
        goals: goalSets[persona.source] || goalSets.segment,
        painPoints: painPointSets[persona.source] || painPointSets.segment,
        interests: interestSets[persona.source] || interestSets.segment
      }
    }

    const { goals, painPoints, interests } = generateGoalsAndPainPoints(samplePersona)

    // Convert sample persona to saved persona format for the modal
    const convertedPersona: SavedPersona = {
      id: samplePersona.id,
      name: samplePersona.name,
      description: samplePersona.description,
      category: samplePersona.category,
      source: samplePersona.source,
      sourceData: samplePersona.sourceData,
      confidence: samplePersona.confidence,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      values: samplePersona.values,
      personality: samplePersona.personality,
      interests: interests,
      painPoints: painPoints,
      goals: goals,
      demographics: {
        ageRange: samplePersona.demographics.ageRange,
        location: samplePersona.source === 'trend' ? 'Urban centers' : samplePersona.source === 'community' ? 'Community-focused areas' : 'Mixed urban/suburban',
        income: samplePersona.source === 'trend' ? '$30K-$120K' : samplePersona.source === 'community' ? '$35K-$90K' : '$40K-$100K'
      },
      psychographics: {
        sampleFactor: 3
      }
    }
    setSelectedPersona(convertedPersona)
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
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="h-6 w-px bg-primary-700" />
          <nav className="flex items-center space-x-2 text-sm text-primary-400">
            <Link href="/dashboard" className="hover:text-primary-200 transition-colors">
              Dashboard
            </Link>
            <span>→</span>
            <span className="text-primary-200">Personas</span>
          </nav>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-accent-400" />
            </div>
            <h1 className="text-4xl font-bold text-primary-100">
              AI-Generated Personas
            </h1>
          </div>
          <p className="text-primary-300 max-w-3xl mx-auto">
            Create detailed psychographic personas from your audience segments, community insights, and emerging trends. 
            Understand the values, motivations, and decision-making patterns that drive your ideal customers.
          </p>
          
          {/* Generate Persona CTA */}
          <div className="flex items-center justify-center">
            {canAccessPremium() ? (
              <Link href="/personas/generate">
                <Button size="lg" className="px-8 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                  <Plus className="w-5 h-5 mr-2" />
                  Generate New Persona
                </Button>
              </Link>
            ) : (
              <Link href="/pricing">
                <Button size="lg" className="px-8 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                  <Star className="w-5 h-5 mr-2" />
                  Upgrade to Generate Personas
                </Button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Show Sample Personas Button (when hidden) */}
        {!showSamplePersonas && canAccessPremium() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-8"
          >
            <Button
              variant="outline"
              onClick={() => setShowSamplePersonas(true)}
              className="px-6 py-3 border-accent-500/30 text-accent-400 hover:text-accent-300 hover:border-accent-400 rounded-xl transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Show Sample Personas
            </Button>
          </motion.div>
        )}

        {/* Sample Personas Section */}
        {showSamplePersonas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary-100">Sample Personas</h2>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-primary-400">Generated from random data sources</div>
                {canAccessPremium() && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSamplePersonas(false)}
                    className="text-primary-400 hover:text-primary-200 border-primary-600 hover:border-primary-400 rounded-xl transition-all duration-300"
                    title="Hide sample personas"
                  >
                    Hide Samples
                  </Button>
                )}
              </div>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePersonas.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:border-accent-500/50 transition-all duration-300 h-full relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center">
                          {persona.source === 'segment' && <Target className="w-6 h-6 text-accent-400" />}
                          {persona.source === 'community' && <Users className="w-6 h-6 text-brand-400" />}
                          {persona.source === 'trend' && <TrendingUp className="w-6 h-6 text-success-400" />}
                        </div>
                        <div className="text-left flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <CardTitle className="text-lg text-primary-100 text-left">{persona.name}</CardTitle>
                            <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-sm">
                              SAMPLE
                            </span>
                          </div>
                          <div className="text-sm text-primary-400 text-left">{persona.category}</div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="px-2 py-1 bg-success-500/20 text-success-400 rounded text-xs font-medium">
                          {persona.confidence}% match
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-primary-300">{persona.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold text-primary-200 mb-2">Source</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            persona.source === 'segment' ? 'bg-accent-500/20 text-accent-400' :
                            persona.source === 'community' ? 'bg-brand-500/20 text-brand-400' :
                            'bg-success-500/20 text-success-400'
                          }`}>
                            {persona.source}
                          </span>
                          <span className="text-xs text-primary-400">{persona.sourceData.name}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-primary-200 mb-1">Top Values</h4>
                        <div className="flex flex-wrap gap-1">
                          {persona.values.slice(0, 2).map((value, i) => (
                            <span key={i} className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded text-xs">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-primary-200 mb-1">Demographics</h4>
                        <div className="text-xs text-primary-400">Age: {persona.demographics.ageRange}</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-primary-700/50">
                      <Button variant="outline" size="sm" className="w-full rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300" onClick={() => handleViewSamplePersona(persona)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Persona
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}

        {/* Saved Personas Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary-100">Your Saved Personas</h2>
            <div className="text-sm text-primary-400">
              {savedPersonas.length} persona{savedPersonas.length !== 1 ? 's' : ''} saved
            </div>
          </div>
          
          {savedPersonas.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="text-center py-12">
                <Brain className="w-16 h-16 mx-auto text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-primary-100 mb-2">No Saved Personas</h3>
                <p className="text-primary-300 mb-6">
                  Generate your first persona to start building customer insights
                </p>
                {canAccessPremium() ? (
                  <Link href="/personas/generate">
                    <Button className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                      <Plus className="w-4 h-4 mr-2" />
                      Generate Your First Persona
                    </Button>
                  </Link>
                ) : (
                  <Link href="/pricing">
                    <Button className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                      <Star className="w-4 h-4 mr-2" />
                      Upgrade to Generate Personas
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedPersonas.map((persona, index) => (
                <motion.div
                  key={persona.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:border-accent-500/50 transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center">
                            <Brain className="w-6 h-6 text-accent-400" />
                          </div>
                          <div className="text-left flex-1">
                            <CardTitle className="text-lg text-primary-100 text-left">{persona.name}</CardTitle>
                            <div className="text-sm text-primary-400 text-left">{persona.category}</div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <Tag variant="success" size="sm">
                            {persona.confidence}% match
                          </Tag>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-primary-300">{persona.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-primary-200 mb-2">Source</h4>
                          <div className="flex flex-col space-y-2">
                            <Tag 
                              variant={
                                persona.source === 'segment' ? 'accent' :
                                persona.source === 'community' ? 'primary' :
                                persona.source === 'trend' ? 'success' :
                                'secondary'
                              }
                              size="sm"
                            >
                              {persona.source}
                            </Tag>
                            <span className="text-xs text-primary-400">{persona.sourceData.name}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-semibold text-primary-200 mb-1">Created</h4>
                          <div className="text-xs text-primary-400">{new Date(persona.createdAt).toLocaleDateString()}</div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-primary-700/50 flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300" onClick={() => setSelectedPersona(persona)}>
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 rounded-xl hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300 text-brand-400 hover:text-brand-300 border-brand-400/50"
                          onClick={() => window.location.href = `/personas/chat/${persona.id}`}
                          title="Chat with persona"
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Chat
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-400 hover:text-red-300 border-red-400/50 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                          onClick={() => handleDeletePersona(persona.id)}
                          title="Delete persona"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <Card className="glass-card border-accent-500/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Sparkles className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-primary-100 mb-4">How Persona Generation Works</h2>
                <p className="text-primary-300 max-w-2xl mx-auto">
                  Create personas from three different foundation types, each offering unique insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-100 mb-2">From Segments</h3>
                  <p className="text-sm text-primary-300">
                    Use our 48 precision segments as the foundation for detailed psychographic personas
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-100 mb-2">From Communities</h3>
                  <p className="text-sm text-primary-300">
                    Generate personas based on specific micro-community behaviors and preferences
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-success-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-100 mb-2">From Trends</h3>
                  <p className="text-sm text-primary-300">
                    Create personas around emerging trends and cultural movements
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-primary-400 mb-4">
                  Can&apos;t find the right foundation? Create a custom persona with detailed inputs and prompts.
                </p>
                {canAccessPremium() ? (
                  <Link href="/personas/generate">
                    <Button variant="outline" className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Generating
                    </Button>
                  </Link>
                ) : (
                  <Link href="/pricing">
                    <Button variant="outline" className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                      <Star className="w-4 h-4 mr-2" />
                      View Pricing
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Persona Detail Modal */}
      {selectedPersona && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-xl border border-primary-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-accent-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-50">{selectedPersona.name}</h2>
                    <p className="text-primary-300">{selectedPersona.description}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPersona(null)}
                  className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Values</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPersona.values.map((value, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Personality</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPersona.personality.map((trait, idx) => (
                        <span key={idx} className="px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-sm">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Demographics</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-primary-400">Age:</span> <span className="text-primary-200">{selectedPersona.demographics.ageRange}</span></div>
                      <div><span className="text-primary-400">Location:</span> <span className="text-primary-200">{selectedPersona.demographics.location}</span></div>
                      <div><span className="text-primary-400">Income:</span> <span className="text-primary-200">{selectedPersona.demographics.income}</span></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPersona.interests.map((interest, idx) => (
                        <span key={idx} className="px-3 py-1 bg-success-500/20 text-success-300 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Pain Points</h3>
                    <div className="space-y-2">
                      {selectedPersona.painPoints.map((pain, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-primary-300">{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary-50 mb-3">Goals</h3>
                    <div className="space-y-2">
                      {selectedPersona.goals.map((goal, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-primary-300">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                    onClick={() => {
                      const personaId = selectedPersona.id
                      setSelectedPersona(null)
                      window.location.href = `/personas/edit/${personaId}`
                    }}
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Persona
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300 text-brand-400 hover:text-brand-300 border-brand-400/50"
                    onClick={() => {
                      setSelectedPersona(null)
                      window.location.href = `/personas/chat/${selectedPersona.id}`
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Persona
                  </Button>
                  <Button className="flex-1 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Export Persona
                  </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
                    onClick={() => setSelectedPersona(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default function PersonasPage() {
  return (
    <ProtectedRoute requiredPermission="view_premium_reports">
      <PersonasContent />
    </ProtectedRoute>
  )
}