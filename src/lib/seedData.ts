import { PersonaDBRecord } from '@/types/personas'
import { PersonaChatProfileGenerator } from './personaChatProfileGenerator'

/**
 * Seed data for development and demo purposes
 */
export const seedPersonas: PersonaDBRecord[] = [
  {
    id: 'saved-1',
    userId: 'demo-user',
    name: 'Eco-Conscious Emma',
    description: 'Environmentally-minded professional who prioritizes sustainability in all purchasing decisions',
    baseType: 'segment',
    sourceId: 'LE2',
    sourceName: 'Eco-Conscious Creators',
    demographics: {
      ageRange: '28-35',
      location: 'Urban/Suburban',
      incomeRange: '$65K-$85K',
      education: 'Bachelor\'s or higher',
      occupation: 'Environmental professional'
    },
    psychographics: {
      sustainabilityImportance: 5,
      convenienceOrientation: 2,
      luxuryAffinity: 2,
      adventurousness: 3,
      brandLoyalty: 4,
      prestigeSeeking: 2,
      belongingNeed: 4,
      riskTolerance: 3,
      innovationAdoption: 4,
      emotionalDriver: 4,
      nostalgiaInfluence: 2,
      priceSensitivity: 3,
      researchDepth: 4,
      socialMediaInfluence: 3,
      expertOpinionValue: 4
    },
    values: ['Environmental responsibility', 'Quality over quantity', 'Authentic brands'],
    personality: ['Conscientious', 'Research-oriented', 'Community-focused'],
    interests: ['Zero waste lifestyle', 'Organic products', 'Climate action'],
    painPoints: ['Greenwashing confusion', 'Premium pricing barriers', 'Limited sustainable options'],
    goals: ['Reduce environmental footprint', 'Influence others positively', 'Live authentically'],
    communicationChannels: ['Environmental blogs', 'Sustainable brands', 'Community forums'],
    buyingMotivations: ['Environmental impact', 'Brand authenticity', 'Product quality'],
    chatPersonality: PersonaChatProfileGenerator.generateChatProfile({
      id: 'saved-1',
      name: 'Eco-Conscious Emma',
      baseSelection: { type: 'segment', data: { id: 'LE2', name: 'Eco-Conscious Creators' } },
      customInputs: { description: '', targetAudience: '', industry: '', behaviorPrompt: '' },
      psychographics: {
        sustainabilityImportance: 5,
        convenienceOrientation: 2,
        luxuryAffinity: 2,
        adventurousness: 3,
        brandLoyalty: 4,
        prestigeSeeking: 2,
        belongingNeed: 4,
        riskTolerance: 3,
        innovationAdoption: 4,
        emotionalDriver: 4,
        nostalgiaInfluence: 2,
        priceSensitivity: 3,
        researchDepth: 4,
        socialMediaInfluence: 3,
        expertOpinionValue: 4
      },
      generatedInsights: {
        values: ['Environmental responsibility', 'Quality over quantity', 'Authentic brands'],
        personality: ['Conscientious', 'Research-oriented', 'Community-focused'],
        interests: ['Zero waste lifestyle', 'Organic products', 'Climate action'],
        painPoints: ['Greenwashing confusion', 'Premium pricing barriers', 'Limited sustainable options'],
        goals: ['Reduce environmental footprint', 'Influence others positively', 'Live authentically'],
        communication: ['Environmental blogs', 'Sustainable brands', 'Community forums'],
        buyingMotivations: ['Environmental impact', 'Brand authenticity', 'Product quality'],
        demographics: {
          ageRange: '28-35',
          location: 'Urban/Suburban',
          income: '$65K-$85K'
        }
      }
    }),
    confidence: 94,
    createdAt: '2024-01-15T00:00:00Z',
    lastModified: '2024-01-20T00:00:00Z',
    isActive: true,
    chatEnabled: true
  },
  {
    id: 'saved-2',
    userId: 'demo-user',
    name: 'Tech-Savvy Alex',
    description: 'Early adopter professional passionate about innovation and emerging technologies',
    baseType: 'segment',
    sourceId: 'LE1',
    sourceName: 'Tech Enthusiasts',
    demographics: {
      ageRange: '25-32',
      location: 'Urban',
      incomeRange: '$75K-$120K',
      education: 'Bachelor\'s or higher',
      occupation: 'Technology professional'
    },
    psychographics: {
      sustainabilityImportance: 3,
      convenienceOrientation: 5,
      luxuryAffinity: 3,
      adventurousness: 5,
      brandLoyalty: 2,
      prestigeSeeking: 3,
      belongingNeed: 3,
      riskTolerance: 4,
      innovationAdoption: 5,
      emotionalDriver: 3,
      nostalgiaInfluence: 2,
      priceSensitivity: 2,
      researchDepth: 5,
      socialMediaInfluence: 4,
      expertOpinionValue: 4
    },
    values: ['Innovation', 'Efficiency', 'Future-focused'],
    personality: ['Analytical', 'Curious', 'Goal-oriented'],
    interests: ['Emerging tech', 'AI/ML', 'Productivity tools'],
    painPoints: ['Feature gaps', 'Compatibility issues', 'Learning curves'],
    goals: ['Stay ahead of trends', 'Optimize workflows', 'Build expertise'],
    communicationChannels: ['Tech blogs', 'Developer communities', 'Product Hunt'],
    buyingMotivations: ['Innovation potential', 'Performance gains', 'Community reviews'],
    chatPersonality: PersonaChatProfileGenerator.generateChatProfile({
      id: 'saved-2',
      name: 'Tech-Savvy Alex',
      baseSelection: { type: 'segment', data: { id: 'LE1', name: 'Tech Enthusiasts' } },
      customInputs: { description: '', targetAudience: '', industry: '', behaviorPrompt: '' },
      psychographics: {
        sustainabilityImportance: 3,
        convenienceOrientation: 5,
        luxuryAffinity: 3,
        adventurousness: 5,
        brandLoyalty: 2,
        prestigeSeeking: 3,
        belongingNeed: 3,
        riskTolerance: 4,
        innovationAdoption: 5,
        emotionalDriver: 3,
        nostalgiaInfluence: 2,
        priceSensitivity: 2,
        researchDepth: 5,
        socialMediaInfluence: 4,
        expertOpinionValue: 4
      },
      generatedInsights: {
        values: ['Innovation', 'Efficiency', 'Future-focused'],
        personality: ['Analytical', 'Curious', 'Goal-oriented'],
        interests: ['Emerging tech', 'AI/ML', 'Productivity tools'],
        painPoints: ['Feature gaps', 'Compatibility issues', 'Learning curves'],
        goals: ['Stay ahead of trends', 'Optimize workflows', 'Build expertise'],
        communication: ['Tech blogs', 'Developer communities', 'Product Hunt'],
        buyingMotivations: ['Innovation potential', 'Performance gains', 'Community reviews'],
        demographics: {
          ageRange: '25-32',
          location: 'Urban',
          income: '$75K-$120K'
        }
      }
    }),
    confidence: 91,
    createdAt: '2024-01-12T00:00:00Z',
    lastModified: '2024-01-18T00:00:00Z',
    isActive: true,
    chatEnabled: true
  }
]

/**
 * Initialize seed data in mock database
 */
export async function initializeSeedData() {
  const { mockDB } = await import('./mockDatabase')
  
  // Check if data already exists
  const existingPersonas = await mockDB.getPersonas()
  if (existingPersonas.length > 0) {
    console.log('Seed data already exists, skipping initialization')
    return
  }
  
  // Seed personas
  for (const persona of seedPersonas) {
    await mockDB.savePersona(persona)
  }
  
  console.log(`Seeded ${seedPersonas.length} personas`)
}