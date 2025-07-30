export interface PersonaData {
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

export interface PersonaCardProps {
  persona: PersonaData
  showProfilePicture?: boolean
  onRegenerateImage?: () => void
  onSelectImage?: (imageUrl: string) => void
}