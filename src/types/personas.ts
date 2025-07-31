export interface PersonaData {
  id?: string
  name: string
  baseSelection: {
    type: 'segment' | 'community' | 'trend' | 'custom' | null
    data: any | null
  }
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
  profilePicture?: {
    url: string
    prompt: string
    generatedAt: string
    cached?: boolean
  }
  // Enhanced attributes for interactive chat
  chatPersonality?: PersonaChatProfile
  createdAt?: string
  lastModified?: string
  isActive?: boolean
}

export interface PersonaProfilePicture {
  id: string
  personaId: string
  originalUrl: string
  processedUrl: string
  thumbnailUrl: string
  prompt: string
  generatedAt: string
  model: string
  cost: number
  isActive: boolean
}

// Enhanced chat personality profile for interactive conversations
export interface PersonaChatProfile {
  // Core personality traits for chat behavior
  communicationStyle: {
    formality: 'very-casual' | 'casual' | 'balanced' | 'formal' | 'very-formal'
    enthusiasm: 'low' | 'moderate' | 'high' | 'very-high'
    directness: 'indirect' | 'balanced' | 'direct' | 'very-direct'
    empathy: 'analytical' | 'balanced' | 'empathetic' | 'very-empathetic'
  }
  
  // Response patterns based on psychographics
  decisionMaking: {
    speed: 'impulsive' | 'quick' | 'deliberate' | 'very-deliberate'
    riskTolerance: 'risk-averse' | 'cautious' | 'balanced' | 'risk-taking'
    informationNeed: 'minimal' | 'moderate' | 'detailed' | 'exhaustive'
  }
  
  // Social interaction preferences
  socialBehavior: {
    groupOrientation: 'individual' | 'small-group' | 'community' | 'large-group'
    influenceReceptivity: 'independent' | 'selective' | 'social-proof' | 'authority-driven'
    sharingTendency: 'private' | 'selective' | 'open' | 'very-open'
  }
  
  // Topic interests and conversation drivers
  conversationPreferences: {
    preferredTopics: string[]
    avoidedTopics: string[]
    curiosityLevel: 'low' | 'moderate' | 'high' | 'very-high'
    questioningStyle: 'accepting' | 'clarifying' | 'probing' | 'challenging'
  }
  
  // Emotional and motivational drivers
  emotionalProfile: {
    primaryEmotions: string[]
    stressTriggers: string[]
    motivators: string[]
    satisfactionSources: string[]
  }
  
  // Purchase and decision behavior in conversations
  buyingBehavior: {
    priceDiscussionComfort: 'avoids' | 'cautious' | 'open' | 'direct'
    brandLoyaltyExpression: 'low' | 'moderate' | 'high' | 'very-high'
    recommendationTendency: 'reluctant' | 'selective' | 'willing' | 'enthusiastic'
  }
  
  // Context-aware responses
  contextualBehavior: {
    timePreference: 'quick-chat' | 'normal' | 'detailed' | 'extended'
    helpSeekingStyle: 'self-reliant' | 'guided' | 'collaborative' | 'dependent'
    feedbackStyle: 'brief' | 'balanced' | 'detailed' | 'comprehensive'
  }
}

// Database schema for storing personas
export interface PersonaDBRecord {
  id: string
  userId: string
  name: string
  description: string
  
  // Base generation data
  baseType: 'segment' | 'community' | 'trend' | 'custom'
  sourceId?: string
  sourceName?: string
  
  // Core persona attributes
  demographics: {
    ageRange: string
    location: string
    incomeRange: string
    education?: string
    occupation?: string
  }
  
  // Psychographic scores (1-5 scale)
  psychographics: {
    sustainabilityImportance: number
    convenienceOrientation: number
    luxuryAffinity: number
    adventurousness: number
    brandLoyalty: number
    prestigeSeeking: number
    belongingNeed: number
    riskTolerance: number
    innovationAdoption: number
    emotionalDriver: number
    nostalgiaInfluence: number
    priceSensitivity: number
    researchDepth: number
    socialMediaInfluence: number
    expertOpinionValue: number
  }
  
  // Generated insights
  values: string[]
  personality: string[]
  interests: string[]
  painPoints: string[]
  goals: string[]
  communicationChannels: string[]
  buyingMotivations: string[]
  
  // Chat personality profile
  chatPersonality: PersonaChatProfile
  
  // Profile image data
  profilePicture?: {
    url: string
    prompt: string
    model: 'dalle' | 'midjourney'
    generatedAt: string
  }
  
  // Metadata
  confidence: number
  createdAt: string
  lastModified: string
  isActive: boolean
  chatEnabled: boolean
}

// Chat message interface for persona conversations
export interface PersonaChatMessage {
  id: string
  personaId: string
  userId: string
  role: 'user' | 'persona'
  content: string
  timestamp: string
  context?: {
    topic?: string
    emotion?: string
    intent?: string
  }
}

// Chat session interface
export interface PersonaChatSession {
  id: string
  personaId: string
  userId: string
  title: string
  messages: PersonaChatMessage[]
  startedAt: string
  lastActivity: string
  isActive: boolean
  context: {
    currentTopic?: string
    conversationGoal?: string
    userMood?: string
  }
}

export interface PersonaCardProps {
  persona: PersonaData
  showProfilePicture?: boolean
  onRegenerateImage?: () => void
  onSelectImage?: (imageUrl: string) => void
  onStartChat?: (persona: PersonaData) => void
}