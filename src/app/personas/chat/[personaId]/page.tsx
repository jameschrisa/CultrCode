'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Send, MessageCircle, User, Bot, Sparkles, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import { Button } from '@/components/ui/HeroButton'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'
import { PersonaData, PersonaChatMessage, PersonaChatSession } from '@/types/personas'
import { PersonaConversationEngine, PersonaChatProfileGenerator } from '@/lib/personaChatProfileGenerator'
import Link from 'next/link'

interface ChatMessage {
  id: string
  role: 'user' | 'persona'
  content: string
  timestamp: string
}

function PersonaChatContent() {
  const params = useParams()
  const router = useRouter()
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  const personaId = params.personaId as string
  
  const [persona, setPersona] = useState<PersonaData | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Mock persona data - in production this would come from the database
  const mockPersona: PersonaData = {
    id: personaId,
    name: 'Creative Maya',
    baseSelection: { type: 'segment', data: { name: 'Creative Professionals' } },
    customInputs: { description: '', targetAudience: '', industry: '', behaviorPrompt: '' },
    psychographics: {
      sustainabilityImportance: 4,
      convenienceOrientation: 3,
      luxuryAffinity: 3,
      adventurousness: 4,
      brandLoyalty: 2,
      prestigeSeeking: 3,
      belongingNeed: 4,
      riskTolerance: 3,
      innovationAdoption: 4,
      emotionalDriver: 4,
      nostalgiaInfluence: 2,
      priceSensitivity: 3,
      researchDepth: 3,
      socialMediaInfluence: 3,
      expertOpinionValue: 3
    },
    generatedInsights: {
      values: ['Creativity', 'Innovation', 'Authenticity', 'Quality'],
      personality: ['Creative', 'Enthusiastic', 'Open-minded', 'Collaborative'],
      interests: ['Design trends', 'Creative tools', 'Art communities', 'Innovation'],
      painPoints: ['Creative blocks', 'Time constraints', 'Budget limitations', 'Client feedback'],
      goals: ['Express creativity', 'Build portfolio', 'Connect with others', 'Stay inspired'],
      communication: ['Visual platforms', 'Creative communities', 'Social media', 'Design blogs'],
      buyingMotivations: ['Creative potential', 'Quality tools', 'Community recommendations', 'Innovation'],
      demographics: {
        ageRange: '25-35',
        location: 'Urban',
        income: '$45K-$75K'
      }
    }
  }

  useEffect(() => {
    loadPersonaAndChat()
  }, [personaId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadPersonaAndChat = async () => {
    try {
      setIsLoading(true)
      
      // In production, load from database
      // const personaData = await PersonaDatabase.getPersona(personaId)
      setPersona(mockPersona)
      
      // Generate initial conversation starters
      const chatProfile = PersonaChatProfileGenerator.generateChatProfile(mockPersona)
      const starters = PersonaConversationEngine.generateConversationStarters(mockPersona, chatProfile)
      
      // Add welcome message
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'persona',
        content: `Hi! I'm ${mockPersona.name}. I'm passionate about ${mockPersona.generatedInsights.values.slice(0, 2).join(' and ').toLowerCase()}. What would you like to chat about?`,
        timestamp: new Date().toISOString()
      }
      
      setMessages([welcomeMessage])
      
    } catch (error) {
      console.error('Error loading persona:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sendMessage = async () => {
    if (!inputMessage.trim() || isSending || !persona) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsSending(true)

    try {
      // Generate persona response based on personality
      const personaResponse = await generatePersonaResponse(inputMessage.trim())
      
      const personaMessage: ChatMessage = {
        id: `persona-${Date.now()}`,
        role: 'persona',
        content: personaResponse,
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, personaMessage])
      
    } catch (error) {
      console.error('Error generating response:', error)
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'persona',
        content: "I'm having trouble responding right now. Could you try rephrasing that?",
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsSending(false)
    }
  }

  const generatePersonaResponse = async (userInput: string): Promise<string> => {
    if (!persona) throw new Error('No persona loaded')

    // Generate chat personality profile
    const chatProfile = PersonaChatProfileGenerator.generateChatProfile(persona)
    
    // Create system prompt for AI
    const systemPrompt = PersonaConversationEngine.generateSystemPrompt(persona, chatProfile)
    
    // Simulate AI response based on personality traits
    // In production, this would call OpenAI/Claude API with the system prompt
    const responses = generateMockResponse(userInput, persona, chatProfile)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const generateMockResponse = (input: string, persona: PersonaData, chatProfile: any): string[] => {
    const { communicationStyle, conversationPreferences } = chatProfile
    const { values, interests, personality } = persona.generatedInsights
    
    const lowerInput = input.toLowerCase()
    
    // Topic-based responses
    if (lowerInput.includes('creative') || lowerInput.includes('design')) {
      return [
        `Oh, I love talking about creativity! As someone who values ${values[0]?.toLowerCase()}, I'm always looking for ways to push creative boundaries. What kind of creative work are you interested in?`,
        `Creativity is everything to me! I find inspiration in ${interests[0]?.toLowerCase()} and ${interests[1]?.toLowerCase()}. Have you tried any new creative tools lately?`,
        `That's so exciting! Being ${personality[0]?.toLowerCase()} and ${personality[1]?.toLowerCase()}, I'm always eager to explore new creative possibilities. Tell me more about your creative interests!`
      ]
    }
    
    if (lowerInput.includes('work') || lowerInput.includes('project')) {
      return [
        `Work projects can be so rewarding! I'm particularly passionate about ${interests[0]?.toLowerCase()}. The key is finding the right balance between ${values[0]?.toLowerCase()} and ${values[1]?.toLowerCase()}. What are you working on?`,
        `Projects are where the magic happens! My approach is usually ${personality[0]?.toLowerCase()} - I like to dive in and explore different angles. What's your biggest challenge right now?`,
        `I find that the best projects combine ${values[0]?.toLowerCase()} with practical solutions. Being ${personality[1]?.toLowerCase()}, I always try to bring fresh perspectives. How can I help?`
      ]
    }
    
    if (lowerInput.includes('challenge') || lowerInput.includes('problem')) {
      return [
        `Challenges can be tough! I often deal with ${persona.generatedInsights.painPoints[0]?.toLowerCase()} myself. What I've learned is that being ${personality[0]?.toLowerCase()} really helps in finding solutions.`,
        `I totally understand! ${persona.generatedInsights.painPoints[1]?.toLowerCase()} is something I struggle with too. My ${personality[1]?.toLowerCase()} nature helps me work through it though. What's your situation?`,
        `Problems are just opportunities in disguise! With my focus on ${values[0]?.toLowerCase()} and ${values[1]?.toLowerCase()}, I try to approach challenges creatively. Want to brainstorm together?`
      ]
    }
    
    // Default responses based on communication style
    const enthusiasm = communicationStyle.enthusiasm
    if (enthusiasm === 'high' || enthusiasm === 'very-high') {
      return [
        `That's fascinating! I'm really ${personality[0]?.toLowerCase()} about these kinds of topics. Tell me more!`,
        `Wow, I love where this conversation is going! Being passionate about ${values[0]?.toLowerCase()}, this really resonates with me.`,
        `This is exactly the kind of thing that gets me excited! How does this relate to your own interests?`
      ]
    } else {
      return [
        `That's interesting. I appreciate conversations that touch on ${values[0]?.toLowerCase()} and ${values[1]?.toLowerCase()}. What's your perspective?`,
        `I can relate to that. In my experience with ${interests[0]?.toLowerCase()}, I've found similar patterns. How has this been for you?`,
        `That makes sense. Given my focus on ${values[0]?.toLowerCase()}, I'm curious about your approach to this.`
      ]
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const resetChat = () => {
    setMessages([])
    loadPersonaAndChat()
  }

  if (isLoading) {
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
            <Link href="/personas">
              <Button className="mt-4">Back to Personas</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <Link href="/personas">
            <Button variant="outline" size="sm" className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Personas
            </Button>
          </Link>
          
          <Button variant="outline" size="sm" onClick={resetChat} className="flex items-center rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Chat
          </Button>
        </motion.div>

        {/* Chat Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary-100">Chat with {persona.name}</CardTitle>
                  <p className="text-sm text-primary-400">
                    {persona.generatedInsights.personality.slice(0, 2).join(', ')} • {persona.generatedInsights.demographics.ageRange} years old
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2 text-success-400">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span className="text-xs">Online</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Chat Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="glass-card mb-6">
            <CardContent className="p-6">
              <div className="h-96 overflow-y-auto space-y-4 mb-4" id="messages-container">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-accent-500 text-white'
                          : 'bg-primary-700/50 text-primary-100 border border-primary-600'
                      }`}>
                        <div className="flex items-start space-x-2">
                          {message.role === 'persona' && (
                            <User className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                          )}
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        <div className={`text-xs mt-2 ${
                          message.role === 'user' ? 'text-accent-100' : 'text-primary-400'
                        }`}>
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isSending && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-primary-700/50 border border-primary-600">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-accent-400" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input */}
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <textarea
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Message ${persona.name}...`}
                    rows={1}
                    className="w-full p-3 bg-primary-800/50 border border-primary-600 rounded-xl resize-none focus:outline-none focus:border-accent-400 text-primary-100 placeholder-primary-400 transition-all duration-300"
                    disabled={isSending}
                  />
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isSending}
                  className="px-4 py-3 bg-accent-500 hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Persona Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg text-primary-100">About {persona.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-primary-200 mb-2">Values</h5>
                <div className="flex flex-wrap gap-2">
                  {persona.generatedInsights.values.slice(0, 3).map((value, index) => (
                    <span key={index} className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-primary-200 mb-2">Interests</h5>
                <div className="flex flex-wrap gap-2">
                  {persona.generatedInsights.interests.slice(0, 3).map((interest, index) => (
                    <span key={index} className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-primary-200 mb-2">Goals</h5>
                <ul className="text-sm text-primary-300 space-y-1">
                  {persona.generatedInsights.goals.slice(0, 2).map((goal, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-success-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default function PersonaChatPage() {
  return (
    <ProtectedRoute requiredPermission="view_premium_reports">
      <PersonaChatContent />
    </ProtectedRoute>
  )
}