import { PersonaChatProfile, PersonaData } from '@/types/personas'

/**
 * Generates a comprehensive chat personality profile from persona psychographic data
 * This enables dynamic conversation behavior based on personality traits
 */
export class PersonaChatProfileGenerator {
  
  /**
   * Generate chat personality profile from persona data
   */
  static generateChatProfile(persona: PersonaData): PersonaChatProfile {
    const psychographics = persona.psychographics
    const insights = persona.generatedInsights
    
    return {
      communicationStyle: this.generateCommunicationStyle(psychographics),
      decisionMaking: this.generateDecisionMaking(psychographics),
      socialBehavior: this.generateSocialBehavior(psychographics, insights),
      conversationPreferences: this.generateConversationPreferences(psychographics, insights),
      emotionalProfile: this.generateEmotionalProfile(psychographics, insights),
      buyingBehavior: this.generateBuyingBehavior(psychographics, insights),
      contextualBehavior: this.generateContextualBehavior(psychographics)
    }
  }
  
  /**
   * Generate communication style based on psychographic scores
   */
  private static generateCommunicationStyle(psychographics: { [key: string]: number }) {
    const prestigeSeeking = psychographics.prestigeSeeking || 3
    const belongingNeed = psychographics.belongingNeed || 3
    const adventurousness = psychographics.adventurousness || 3
    const expertOpinionValue = psychographics.expertOpinionValue || 3
    
    return {
      formality: this.mapToScale(prestigeSeeking, {
        1: 'very-casual',
        2: 'casual', 
        3: 'balanced',
        4: 'formal',
        5: 'very-formal'
      }),
      enthusiasm: this.mapToScale(adventurousness, {
        1: 'low',
        2: 'moderate',
        3: 'moderate',
        4: 'high',
        5: 'very-high'
      }),
      directness: this.mapToScale(5 - belongingNeed + 1, { // Inverse relationship
        1: 'indirect',
        2: 'indirect',
        3: 'balanced',
        4: 'direct',
        5: 'very-direct'
      }),
      empathy: this.mapToScale(belongingNeed, {
        1: 'analytical',
        2: 'balanced',
        3: 'balanced',
        4: 'empathetic',
        5: 'very-empathetic'
      })
    }
  }
  
  /**
   * Generate decision making patterns
   */
  private static generateDecisionMaking(psychographics: { [key: string]: number }) {
    const riskTolerance = psychographics.riskTolerance || 3
    const researchDepth = psychographics.researchDepth || 3
    const innovationAdoption = psychographics.innovationAdoption || 3
    
    return {
      speed: this.mapToScale(6 - researchDepth, {
        1: 'very-deliberate',
        2: 'deliberate',
        3: 'deliberate',
        4: 'quick',
        5: 'impulsive'
      }),
      riskTolerance: this.mapToScale(riskTolerance, {
        1: 'risk-averse',
        2: 'cautious',
        3: 'balanced',
        4: 'risk-taking',
        5: 'risk-taking'
      }),
      informationNeed: this.mapToScale(researchDepth, {
        1: 'minimal',
        2: 'moderate',
        3: 'moderate',
        4: 'detailed',
        5: 'exhaustive'
      })
    }
  }
  
  /**
   * Generate social behavior patterns
   */
  private static generateSocialBehavior(psychographics: { [key: string]: number }, insights: any) {
    const belongingNeed = psychographics.belongingNeed || 3
    const socialMediaInfluence = psychographics.socialMediaInfluence || 3
    const expertOpinionValue = psychographics.expertOpinionValue || 3
    
    return {
      groupOrientation: this.mapToScale(belongingNeed, {
        1: 'individual',
        2: 'small-group',
        3: 'small-group', 
        4: 'community',
        5: 'large-group'
      }),
      influenceReceptivity: this.determineInfluenceReceptivity(socialMediaInfluence, expertOpinionValue),
      sharingTendency: this.mapToScale(belongingNeed, {
        1: 'private',
        2: 'selective',
        3: 'selective',
        4: 'open',
        5: 'very-open'
      })
    }
  }
  
  /**
   * Generate conversation preferences
   */
  private static generateConversationPreferences(psychographics: { [key: string]: number }, insights: any) {
    const adventurousness = psychographics.adventurousness || 3
    const innovationAdoption = psychographics.innovationAdoption || 3
    const researchDepth = psychographics.researchDepth || 3
    
    return {
      preferredTopics: this.generatePreferredTopics(insights),
      avoidedTopics: this.generateAvoidedTopics(psychographics),
      curiosityLevel: this.mapToScale(adventurousness, {
        1: 'low',
        2: 'moderate',
        3: 'moderate',
        4: 'high',
        5: 'very-high'
      }),
      questioningStyle: this.mapToScale(researchDepth, {
        1: 'accepting',
        2: 'accepting',
        3: 'clarifying',
        4: 'probing',
        5: 'challenging'
      })
    }
  }
  
  /**
   * Generate emotional profile
   */
  private static generateEmotionalProfile(psychographics: { [key: string]: number }, insights: any) {
    const emotionalDriver = psychographics.emotionalDriver || 3
    const nostalgiaInfluence = psychographics.nostalgiaInfluence || 3
    const sustainabilityImportance = psychographics.sustainabilityImportance || 3
    
    return {
      primaryEmotions: this.generatePrimaryEmotions(emotionalDriver, insights),
      stressTriggers: insights.painPoints || [],
      motivators: insights.goals || [],
      satisfactionSources: this.generateSatisfactionSources(psychographics, insights)
    }
  }
  
  /**
   * Generate buying behavior patterns
   */
  private static generateBuyingBehavior(psychographics: { [key: string]: number }, insights: any) {
    const priceSensitivity = psychographics.priceSensitivity || 3
    const brandLoyalty = psychographics.brandLoyalty || 3
    const socialMediaInfluence = psychographics.socialMediaInfluence || 3
    
    return {
      priceDiscussionComfort: this.mapToScale(6 - priceSensitivity, {
        1: 'avoids',
        2: 'cautious',
        3: 'cautious',
        4: 'open',
        5: 'direct'
      }),
      brandLoyaltyExpression: this.mapToScale(brandLoyalty, {
        1: 'low',
        2: 'moderate',
        3: 'moderate',
        4: 'high',
        5: 'very-high'
      }),
      recommendationTendency: this.mapToScale(socialMediaInfluence, {
        1: 'reluctant',
        2: 'selective',
        3: 'selective',
        4: 'willing',
        5: 'enthusiastic'
      })
    }
  }
  
  /**
   * Generate contextual behavior patterns
   */
  private static generateContextualBehavior(psychographics: { [key: string]: number }) {
    const convenienceOrientation = psychographics.convenienceOrientation || 3
    const researchDepth = psychographics.researchDepth || 3
    const expertOpinionValue = psychographics.expertOpinionValue || 3
    
    return {
      timePreference: this.mapToScale(convenienceOrientation, {
        1: 'extended',
        2: 'detailed',
        3: 'normal',
        4: 'normal',
        5: 'quick-chat'
      }),
      helpSeekingStyle: this.mapToScale(expertOpinionValue, {
        1: 'self-reliant',
        2: 'guided',
        3: 'guided',
        4: 'collaborative',
        5: 'dependent'
      }),
      feedbackStyle: this.mapToScale(researchDepth, {
        1: 'brief',
        2: 'balanced',
        3: 'balanced',
        4: 'detailed',
        5: 'comprehensive'
      })
    }
  }
  
  // Helper methods
  
  private static mapToScale<T>(value: number, mapping: { [key: number]: T }): T {
    const clampedValue = Math.max(1, Math.min(5, Math.round(value)))
    return mapping[clampedValue]
  }
  
  private static determineInfluenceReceptivity(socialMedia: number, expert: number): string {
    if (expert >= 4) return 'authority-driven'
    if (socialMedia >= 4) return 'social-proof'
    if (expert >= 3 || socialMedia >= 3) return 'selective'
    return 'independent'
  }
  
  private static generatePreferredTopics(insights: any): string[] {
    const topics = []
    
    if (insights.interests) topics.push(...insights.interests.slice(0, 3))
    if (insights.values) topics.push(...insights.values.slice(0, 2))
    
    return topics.slice(0, 5)
  }
  
  private static generateAvoidedTopics(psychographics: { [key: string]: number }): string[] {
    const avoided = []
    
    if (psychographics.priceSensitivity >= 4) avoided.push('expensive products', 'luxury items')
    if (psychographics.sustainabilityImportance <= 2) avoided.push('environmental issues')
    if (psychographics.riskTolerance <= 2) avoided.push('risky investments', 'unproven technologies')
    
    return avoided
  }
  
  private static generatePrimaryEmotions(emotionalDriver: number, insights: any): string[] {
    const emotionMap = {
      1: ['security', 'stability', 'caution'],
      2: ['practicality', 'reliability', 'contentment'],
      3: ['balance', 'satisfaction', 'moderate optimism'],
      4: ['excitement', 'enthusiasm', 'curiosity'],
      5: ['aspiration', 'pride', 'achievement']
    }
    
    return emotionMap[Math.round(emotionalDriver) as keyof typeof emotionMap] || emotionMap[3]
  }
  
  private static generateSatisfactionSources(psychographics: { [key: string]: number }, insights: any): string[] {
    const sources = []
    
    if (psychographics.luxuryAffinity >= 4) sources.push('premium experiences', 'quality products')
    if (psychographics.belongingNeed >= 4) sources.push('community recognition', 'social connections')
    if (psychographics.sustainabilityImportance >= 4) sources.push('environmental impact', 'ethical choices')
    if (psychographics.innovationAdoption >= 4) sources.push('new discoveries', 'being first')
    
    return sources.length > 0 ? sources : ['personal achievement', 'quality outcomes']
  }
}

/**
 * Utility class for generating persona-specific conversation prompts
 */
export class PersonaConversationEngine {
  
  /**
   * Generate system prompt for AI chat based on persona profile
   */
  static generateSystemPrompt(persona: PersonaData, chatProfile: PersonaChatProfile): string {
    const { name, generatedInsights } = persona
    const { communicationStyle, decisionMaking, socialBehavior, conversationPreferences, emotionalProfile } = chatProfile
    
    return `You are ${name}, a persona representing a specific customer archetype with the following characteristics:

PERSONALITY OVERVIEW:
- Values: ${generatedInsights.values.join(', ')}
- Personality traits: ${generatedInsights.personality.join(', ')}
- Key interests: ${generatedInsights.interests.join(', ')}
- Main goals: ${generatedInsights.goals.join(', ')}
- Pain points: ${generatedInsights.painPoints.join(', ')}

COMMUNICATION STYLE:
- Formality level: ${communicationStyle.formality}
- Enthusiasm: ${communicationStyle.enthusiasm}
- Directness: ${communicationStyle.directness}
- Empathy level: ${communicationStyle.empathy}

DECISION MAKING:
- Decision speed: ${decisionMaking.speed}
- Risk tolerance: ${decisionMaking.riskTolerance}
- Information need: ${decisionMaking.informationNeed}

SOCIAL BEHAVIOR:
- Group orientation: ${socialBehavior.groupOrientation}
- Influence receptivity: ${socialBehavior.influenceReceptivity}
- Sharing tendency: ${socialBehavior.sharingTendency}

CONVERSATION PREFERENCES:
- Preferred topics: ${conversationPreferences.preferredTopics.join(', ')}
- Curiosity level: ${conversationPreferences.curiosityLevel}
- Questioning style: ${conversationPreferences.questioningStyle}

EMOTIONAL PROFILE:
- Primary emotions: ${emotionalProfile.primaryEmotions.join(', ')}
- Key motivators: ${emotionalProfile.motivators.join(', ')}

INSTRUCTIONS:
1. Respond as this persona would, reflecting their personality traits, communication style, and preferences
2. Show appropriate levels of enthusiasm, formality, and directness based on the profile
3. Express opinions and make decisions consistent with the risk tolerance and information needs
4. Demonstrate the specified emotional tendencies and social behaviors
5. Stay interested in preferred topics and show appropriate reactions to avoided topics
6. Maintain consistency with the persona's values, goals, and pain points throughout the conversation
7. Adapt your response length and detail level based on the contextual behavior preferences

Remember: You ARE this persona. Think, respond, and behave exactly as they would in real life.`
  }
  
  /**
   * Generate conversation starter suggestions based on persona interests
   */
  static generateConversationStarters(persona: PersonaData, chatProfile: PersonaChatProfile): string[] {
    const interests = chatProfile.conversationPreferences.preferredTopics
    const goals = persona.generatedInsights.goals
    const painPoints = persona.generatedInsights.painPoints
    
    const starters = [
      `What's your opinion on ${interests[0]}?`,
      `How do you usually approach ${goals[0]?.toLowerCase()}?`,
      `What's been your biggest challenge with ${painPoints[0]?.toLowerCase()}?`,
      `Tell me about your experience with ${interests[1]}.`,
      `What would you like to know about our products/services?`
    ]
    
    return starters.slice(0, 3)
  }
}