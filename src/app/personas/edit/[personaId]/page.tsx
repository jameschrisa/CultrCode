'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, X, User, Brain, MapPin, Target, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react'
import { SmartValueInput } from '@/components/ui/SmartValueInput'
import { InterestSelector } from '@/components/ui/InterestSelector'
import { PersonaOptions } from '@/data/personaOptions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'

interface EditablePersona {
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

interface FormSection {
  id: string
  title: string
  icon: React.ReactNode
  isExpanded: boolean
}

function PersonaEditContent() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    if (!user) return false
    const publicMetadata = user.publicMetadata as any
    const subscriptionTier = publicMetadata?.subscriptionTier || 'free'
    return subscriptionTier === 'premium' || subscriptionTier === 'enterprise'
  }
  const personaId = params.personaId as string
  
  const [persona, setPersona] = useState<EditablePersona | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    basic: true,
    values: false,
    demographics: false,
    goals: false
  })

  // Load persona data from API
  useEffect(() => {
    const loadPersona = async () => {
      try {
        setLoading(true)
        
        const response = await fetch(`/api/personas/${personaId}`)
        if (!response.ok) {
          throw new Error('Failed to load persona')
        }
        
        const data = await response.json()
        const dbPersona = data.persona
        
        // Convert database record to editable format
        const editablePersona: EditablePersona = {
          id: dbPersona.id,
          name: dbPersona.name,
          description: dbPersona.description,
          category: dbPersona.baseType,
          source: dbPersona.baseType,
          sourceData: { 
            id: dbPersona.sourceId || '', 
            name: dbPersona.sourceName || '' 
          },
          confidence: dbPersona.confidence,
          values: dbPersona.values,
          personality: dbPersona.personality,
          interests: dbPersona.interests,
          painPoints: dbPersona.painPoints,
          goals: dbPersona.goals,
          demographics: {
            ageRange: dbPersona.demographics.ageRange,
            location: dbPersona.demographics.location,
            income: dbPersona.demographics.incomeRange
          },
          psychographics: dbPersona.psychographics
        }
        
        setPersona(editablePersona)
      } catch (error) {
        console.error('Error loading persona:', error)
        // If persona not found or error loading, create a default one for demo
        const defaultPersona: EditablePersona = {
          id: personaId,
          name: 'New Persona',
          description: 'A newly created persona ready for customization',
          category: 'Professional',
          source: 'custom',
          sourceData: { id: '', name: '' },
          confidence: 70,
          values: ['Quality', 'Innovation'],
          personality: ['Analytical', 'Goal-oriented'],
          interests: ['Technology', 'Business'],
          painPoints: ['Time constraints', 'Information overload'],
          goals: ['Professional growth', 'Work-life balance'],
          demographics: {
            ageRange: '25-40',
            location: 'Urban',
            income: '$50K-$80K'
          },
          psychographics: {
            sustainabilityImportance: 3,
            qualityFocus: 4,
            priceSensitivity: 3
          }
        }
        setPersona(defaultPersona)
      } finally {
        setLoading(false)
      }
    }

    loadPersona()
  }, [personaId])

  const sections: FormSection[] = [
    {
      id: 'basic',
      title: 'Basic Information',
      icon: <User className="w-5 h-5" />,
      isExpanded: expandedSections.basic
    },
    {
      id: 'values',
      title: 'Values & Personality',
      icon: <Brain className="w-5 h-5" />,
      isExpanded: expandedSections.values
    },
    {
      id: 'demographics',
      title: 'Demographics',
      icon: <MapPin className="w-5 h-5" />,
      isExpanded: expandedSections.demographics
    },
    {
      id: 'goals',
      title: 'Goals & Challenges',
      icon: <Target className="w-5 h-5" />,
      isExpanded: expandedSections.goals
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const updatePersona = (field: string, value: any) => {
    if (!persona) return
    
    setPersona(prev => ({
      ...prev!,
      [field]: value
    }))
    setHasChanges(true)
  }

  const updateNestedPersona = (parent: string, field: string, value: any) => {
    if (!persona) return
    
    setPersona(prev => ({
      ...prev!,
      [parent]: {
        ...prev![parent as keyof EditablePersona] as any,
        [field]: value
      }
    }))
    setHasChanges(true)
  }

  const addListItem = (listName: string, item: string) => {
    if (!persona || !item.trim()) return
    
    const currentList = persona[listName as keyof EditablePersona] as string[]
    if (!currentList.includes(item)) {
      updatePersona(listName, [...currentList, item])
    }
  }

  const removeListItem = (listName: string, index: number) => {
    if (!persona) return
    
    const currentList = persona[listName as keyof EditablePersona] as string[]
    updatePersona(listName, currentList.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    if (!persona || !hasChanges) return
    
    try {
      setSaving(true)
      
      // Prepare data for API
      const updateData = {
        name: persona.name,
        description: persona.description,
        values: persona.values,
        personality: persona.personality,
        interests: persona.interests,
        painPoints: persona.painPoints,
        goals: persona.goals,
        demographics: {
          ageRange: persona.demographics.ageRange,
          location: persona.demographics.location,
          incomeRange: persona.demographics.income
        },
        psychographics: persona.psychographics
      }
      
      // Make API call to save persona
      const response = await fetch(`/api/personas/${persona.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to save persona')
      }
      
      const result = await response.json()
      console.log('Persona saved successfully:', result)
      
      setHasChanges(false)
      
      // Navigate back to personas page
      router.push('/personas')
    } catch (error) {
      console.error('Error saving persona:', error)
      alert(`Failed to save persona: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    if (hasChanges) {
      if (window.confirm('You have unsaved changes. Are you sure you want to leave?')) {
        router.push('/personas')
      }
    } else {
      router.push('/personas')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-accent-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-primary-300">Loading persona...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!persona) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-red-400">Persona not found</p>
            <Button onClick={() => router.push('/personas')} className="mt-4">
              Back to Personas
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      {/* Mobile-Optimized Sticky Header */}
      <div className="sticky top-0 z-40 bg-primary-900/95 backdrop-blur-sm border-b border-primary-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCancel}
              className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Cancel</span>
            </Button>
            
            <div className="text-center">
              <h1 className="font-semibold text-primary-100">Edit Persona</h1>
              {hasChanges && (
                <div className="text-xs text-accent-400">Unsaved changes</div>
              )}
            </div>
            
            <Button 
              size="sm" 
              onClick={handleSave}
              disabled={!hasChanges || saving}
              className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
            >
              {saving ? (
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              <span className="hidden sm:inline">Save</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-6 space-y-6 pb-20">
        {/* Basic Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="glass-card">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleSection('basic')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-accent-400" />
                  </div>
                  <CardTitle className="text-primary-100">Basic Information</CardTitle>
                </div>
                {expandedSections.basic ? 
                  <ChevronUp className="w-5 h-5 text-primary-400" /> : 
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                }
              </div>
            </CardHeader>
            
            {expandedSections.basic && (
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Persona Name
                  </label>
                  <input
                    type="text"
                    value={persona.name}
                    onChange={(e) => updatePersona('name', e.target.value)}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400"
                    placeholder="Enter persona name..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Description
                  </label>
                  <textarea
                    value={persona.description}
                    onChange={(e) => updatePersona('description', e.target.value)}
                    rows={3}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400 resize-none"
                    placeholder="Describe this persona..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Category
                  </label>
                  <select
                    value={persona.category}
                    onChange={(e) => updatePersona('category', e.target.value)}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100"
                  >
                    {PersonaOptions.categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Values & Personality Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-card">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleSection('values')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-brand-400" />
                  </div>
                  <CardTitle className="text-primary-100">Values & Personality</CardTitle>
                </div>
                {expandedSections.values ? 
                  <ChevronUp className="w-5 h-5 text-primary-400" /> : 
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                }
              </div>
            </CardHeader>
            
            {expandedSections.values && (
              <CardContent className="space-y-6">
                {/* Values */}
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-3">
                    Core Values
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {persona.values.map((value, index) => (
                        <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-accent-500/20 text-accent-300 rounded-full">
                          <span className="text-sm">{value}</span>
                          <button
                            onClick={() => removeListItem('values', index)}
                            className="text-accent-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <SmartValueInput 
                      onAdd={(value) => addListItem('values', value)}
                      placeholder="Add a core value..."
                      options={PersonaOptions.values}
                      existingValues={persona.values}
                      category="values"
                    />
                  </div>
                </div>

                {/* Personality */}
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-3">
                    Personality Traits
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {persona.personality.map((trait, index) => (
                        <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-brand-500/20 text-brand-300 rounded-full">
                          <span className="text-sm">{trait}</span>
                          <button
                            onClick={() => removeListItem('personality', index)}
                            className="text-brand-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <SmartValueInput 
                      onAdd={(trait) => addListItem('personality', trait)}
                      placeholder="Add a personality trait..."
                      options={PersonaOptions.personality}
                      existingValues={persona.personality}
                      category="personality traits"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-3">
                    Interests
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {persona.interests.map((interest, index) => (
                        <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-success-500/20 text-success-300 rounded-full">
                          <span className="text-sm">{interest}</span>
                          <button
                            onClick={() => removeListItem('interests', index)}
                            className="text-success-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <InterestSelector 
                      onAdd={(interest) => addListItem('interests', interest)}
                      existingInterests={persona.interests}
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Demographics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleSection('demographics')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-primary-100">Demographics</CardTitle>
                </div>
                {expandedSections.demographics ? 
                  <ChevronUp className="w-5 h-5 text-primary-400" /> : 
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                }
              </div>
            </CardHeader>
            
            {expandedSections.demographics && (
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Age Range
                  </label>
                  <input
                    type="text"
                    value={persona.demographics.ageRange}
                    onChange={(e) => updateNestedPersona('demographics', 'ageRange', e.target.value)}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400"
                    placeholder="e.g., 25-35"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Location
                  </label>
                  <select
                    value={persona.demographics.location}
                    onChange={(e) => updateNestedPersona('demographics', 'location', e.target.value)}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100"
                  >
                    {PersonaOptions.demographics.locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Income Range
                  </label>
                  <select
                    value={persona.demographics.income}
                    onChange={(e) => updateNestedPersona('demographics', 'income', e.target.value)}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl focus:border-accent-400 focus:outline-none text-primary-100"
                  >
                    {PersonaOptions.demographics.incomeRanges.map((income) => (
                      <option key={income} value={income}>{income}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Goals & Challenges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleSection('goals')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-success-400" />
                  </div>
                  <CardTitle className="text-primary-100">Goals & Challenges</CardTitle>
                </div>
                {expandedSections.goals ? 
                  <ChevronUp className="w-5 h-5 text-primary-400" /> : 
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                }
              </div>
            </CardHeader>
            
            {expandedSections.goals && (
              <CardContent className="space-y-6">
                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-3">
                    Goals & Motivations
                  </label>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {persona.goals.map((goal, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-success-500/10 border border-success-500/20 rounded-xl">
                          <div className="w-1.5 h-1.5 bg-success-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-primary-200 flex-1">{goal}</span>
                          <button
                            onClick={() => removeListItem('goals', index)}
                            className="text-success-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <SmartValueInput 
                      onAdd={(goal) => addListItem('goals', goal)}
                      placeholder="Add a goal or motivation..."
                      options={PersonaOptions.goals}
                      existingValues={persona.goals}
                      category="goals"
                    />
                  </div>
                </div>

                {/* Pain Points */}
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-3">
                    Pain Points & Challenges
                  </label>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {persona.painPoints.map((pain, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-primary-200 flex-1">{pain}</span>
                          <button
                            onClick={() => removeListItem('painPoints', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <SmartValueInput 
                      onAdd={(pain) => addListItem('painPoints', pain)}
                      placeholder="Add a pain point or challenge..."
                      options={PersonaOptions.painPoints}
                      existingValues={persona.painPoints}
                      category="pain points"
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


export default function PersonaEditPage() {
  return (
    <ProtectedRoute requiredPermission="view_premium_reports">
      <PersonaEditContent />
    </ProtectedRoute>
  )
}