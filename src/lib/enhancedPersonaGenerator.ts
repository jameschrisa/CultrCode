/**
 * Enhanced Persona Generation Engine
 * Maps attributes from segments, microcommunities, and trends to create reliable chatbot personalities
 */

import { PersonaData, PersonaChatProfile, PersonaDBRecord } from '@/types/personas'

export interface SourceData {
  type: 'segment' | 'community' | 'trend'
  id: string
  data: any
}

export interface AttributeMapping {
  sourceType: string
  sourceId: string
  attributeType: string
  attributeValue: string
  influenceWeight: number
  confidence: number
}

export class EnhancedPersonaGenerator {
  
  /**
   * Generate a comprehensive persona from selected sources and user inputs
   */
  static async generatePersona(
    sources: SourceData[],
    userInputs: {
      name?: string
      description?: string
      targetAudience?: string
      industry?: string
      behaviorPrompt?: string
      customAttributes?: any
    },
    psychographicOverrides?: { [key: string]: number }
  ): Promise<PersonaDBRecord> {
    
    // Step 1: Extract and merge attributes from all sources
    const sourceAttributes = await this.extractSourceAttributes(sources)
    
    // Step 2: Generate base psychographics from sources
    const basePsychographics = this.generatePsychographicsFromSources(sourceAttributes)
    
    // Step 3: Apply user overrides
    const finalPsychographics = { ...basePsychographics, ...psychographicOverrides }
    
    // Step 4: Generate persona insights
    const insights = this.generateInsightsFromAttributes(sourceAttributes, finalPsychographics)
    
    // Step 5: Create chat personality profile
    const chatPersonality = this.generateChatPersonality(finalPsychographics, insights, sourceAttributes)
    
    // Step 6: Generate demographics from sources
    const demographics = this.generateDemographics(sourceAttributes)
    
    // Step 7: Calculate confidence score
    const confidence = this.calculateConfidenceScore(sources, sourceAttributes)
    
    // Step 8: Create attribute mappings for tracking
    const attributeMappings = this.createAttributeMappings(sources, insights)
    
    return {
      id: '', // Will be set by database
      userId: '', // Will be set by caller
      name: userInputs.name || this.generatePersonaName(insights),
      description: userInputs.description || this.generateDescription(insights),
      baseType: sources[0]?.type || 'custom',
      sourceId: sources[0]?.id,
      sourceName: sources[0]?.data?.name,
      demographics,
      psychographics: finalPsychographics,
      values: insights.values,
      personality: insights.personality,
      interests: insights.interests,
      painPoints: insights.painPoints,
      goals: insights.goals,
      communicationChannels: insights.communication,
      buyingMotivations: insights.buyingMotivations,
      chatPersonality,
      confidence,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      isActive: true,
      chatEnabled: true
    }
  }
  
  /**
   * Extract attributes from segment, community, or trend data
   */
  private static async extractSourceAttributes(sources: SourceData[]): Promise<{ [key: string]: any[] }> {
    const attributes: { [key: string]: any[] } = {
      values: [],
      interests: [],
      personality: [],
      demographics: [],
      behaviors: [],
      painPoints: [],
      goals: [],
      communication: [],
      platforms: []
    }
    
    for (const source of sources) {
      switch (source.type) {
        case 'segment':
          this.extractSegmentAttributes(source.data, attributes)
          break
        case 'community':
          this.extractCommunityAttributes(source.data, attributes)
          break
        case 'trend':
          this.extractTrendAttributes(source.data, attributes)
          break
      }
    }
    
    return attributes
  }
  
  /**
   * Extract attributes from audience segment data
   */
  private static extractSegmentAttributes(segment: any, attributes: { [key: string]: any[] }) {
    // Extract from segment psychographics
    if (segment.psychographics) {
      const psych = segment.psychographics
      if (psych.values) attributes.values.push(...psych.values)
      if (psych.interests) attributes.interests.push(...psych.interests)
    }
    
    // Extract from segment demographics
    if (segment.demographics) {
      attributes.demographics.push(segment.demographics)
    }
    
    // Extract behavioral patterns
    if (segment.behavioral_patterns) {
      attributes.behaviors.push(segment.behavioral_patterns)
    }
    
    // Extract pain points and goals from description analysis
    if (segment.description) {
      const analyzedTraits = this.analyzeDescriptionForTraits(segment.description)
      attributes.painPoints.push(...analyzedTraits.painPoints)
      attributes.goals.push(...analyzedTraits.goals)
      attributes.personality.push(...analyzedTraits.personality)
    }
    
    // Extract from segment name for personality inference
    const nameTraits = this.inferTraitsFromName(segment.name)
    attributes.personality.push(...nameTraits.personality)
    attributes.values.push(...nameTraits.values)
  }
  
  /**
   * Extract attributes from microcommunity data
   */
  private static extractCommunityAttributes(community: any, attributes: { [key: string]: any[] }) {
    // Extract from community characteristics
    if (community.characteristics) {
      const chars = community.characteristics
      if (chars.values) attributes.values.push(...chars.values)
      if (chars.interests) attributes.interests.push(...chars.interests)
      if (chars.behaviors) attributes.behaviors.push(...chars.behaviors)
    }
    
    // Extract platform preferences
    if (community.platform_presence) {
      attributes.platforms.push(...community.platform_presence)
    }
    
    // Extract from community category for interests
    if (community.category) {
      const categoryInterests = this.mapCategoryToInterests(community.category)
      attributes.interests.push(...categoryInterests)
    }
    
    // Extract communication style from platform and size
    const commStyle = this.inferCommunicationFromCommunity(community)
    attributes.communication.push(commStyle)
    
    // Extract demographics if available
    if (community.demographics) {
      attributes.demographics.push(community.demographics)
    }
  }
  
  /**
   * Extract attributes from trending topic data
   */
  private static extractTrendAttributes(trend: any, attributes: { [key: string]: any[] }) {
    // Extract interests from trend keywords
    if (trend.keywords) {
      attributes.interests.push(...trend.keywords)
    }
    
    // Extract platform preferences
    if (trend.platforms) {
      attributes.platforms.push(...trend.platforms)
    }
    
    // Extract personality traits from trend category
    const trendPersonality = this.mapTrendCategoryToPersonality(trend.category)
    attributes.personality.push(...trendPersonality)
    
    // Extract values from trend type
    const trendValues = this.mapTrendToValues(trend)
    attributes.values.push(...trendValues)
    
    // Early adopter traits for emerging trends
    if (trend.status === 'emerging' || trend.status === 'growing') {
      attributes.personality.push('innovative', 'early-adopter', 'trendsetting')
      attributes.values.push('innovation', 'discovery', 'being-first')
    }
  }
  
  /**
   * Generate psychographic scores based on source attributes
   */
  private static generatePsychographicsFromSources(attributes: { [key: string]: any[] }): { [key: string]: number } {
    const psychographics: { [key: string]: number } = {
      sustainabilityImportance: 3,
      convenienceOrientation: 3,
      luxuryAffinity: 3,
      adventurousness: 3,
      brandLoyalty: 3,
      prestigeSeeking: 3,
      belongingNeed: 3,
      riskTolerance: 3,
      innovationAdoption: 3,
      emotionalDriver: 3,
      nostalgiaInfluence: 3,
      priceSensitivity: 3,
      researchDepth: 3,
      socialMediaInfluence: 3,
      expertOpinionValue: 3
    }
    
    // Adjust based on values
    if (attributes.values.some(v => v.includes('sustain') || v.includes('eco') || v.includes('green'))) {
      psychographics.sustainabilityImportance = 4
    }
    
    if (attributes.values.some(v => v.includes('innov') || v.includes('cutting-edge') || v.includes('new'))) {
      psychographics.innovationAdoption = 4
      psychographics.adventurousness = 4
    }
    
    if (attributes.values.some(v => v.includes('community') || v.includes('belong') || v.includes('social'))) {
      psychographics.belongingNeed = 4
      psychographics.socialMediaInfluence = 4
    }
    
    if (attributes.values.some(v => v.includes('quality') || v.includes('premium') || v.includes('luxury'))) {
      psychographics.luxuryAffinity = 4
      psychographics.prestigeSeeking = 4
    }
    
    // Adjust based on behaviors
    if (attributes.behaviors.some(b => b.spendingPower === 'high')) {
      psychographics.luxuryAffinity = 4
      psychographics.priceSensitivity = 2
    }
    
    if (attributes.behaviors.some(b => b.digitalBehavior === 'heavy')) {
      psychographics.socialMediaInfluence = 4
      psychographics.convenienceOrientation = 4
    }
    
    // Adjust based on platform preferences
    if (attributes.platforms.includes('discord')) {
      psychographics.belongingNeed = 4
      psychographics.researchDepth = 4
    }
    
    if (attributes.platforms.includes('tiktok')) {
      psychographics.adventurousness = 4
      psychographics.innovationAdoption = 4
    }
    
    return psychographics
  }
  
  /**
   * Generate comprehensive insights from attributes
   */
  private static generateInsightsFromAttributes(
    attributes: { [key: string]: any[] }, 
    psychographics: { [key: string]: number }
  ) {
    // Deduplicate and prioritize attributes
    const values = this.deduplicateAndPrioritize(attributes.values).slice(0, 5)
    const interests = this.deduplicateAndPrioritize(attributes.interests).slice(0, 6)
    const personality = this.deduplicateAndPrioritize(attributes.personality).slice(0, 5)
    const painPoints = this.deduplicateAndPrioritize(attributes.painPoints).slice(0, 4)
    const goals = this.deduplicateAndPrioritize(attributes.goals).slice(0, 4)
    
    // Generate communication preferences
    const communication = this.generateCommunicationChannels(attributes.platforms, psychographics)
    
    // Generate buying motivations
    const buyingMotivations = this.generateBuyingMotivations(values, personality, psychographics)
    
    return {
      values: values.length ? values : ['Quality', 'Innovation', 'Community', 'Authenticity'],
      personality: personality.length ? personality : ['Curious', 'Engaged', 'Thoughtful', 'Social'],
      interests: interests.length ? interests : ['Technology', 'Design', 'Trends', 'Community'],
      painPoints: painPoints.length ? painPoints : ['Time constraints', 'Information overload', 'Decision fatigue'],
      goals: goals.length ? goals : ['Stay informed', 'Make good decisions', 'Connect with others'],
      communication,
      buyingMotivations
    }
  }
  
  /**
   * Generate chat personality that maps to psychographics and attributes
   */
  private static generateChatPersonality(
    psychographics: { [key: string]: number },
    insights: any,
    attributes: { [key: string]: any[] }
  ): PersonaChatProfile {
    return {
      communicationStyle: {
        formality: this.mapToFormality(psychographics.prestigeSeeking),
        enthusiasm: this.mapToEnthusiasm(psychographics.emotionalDriver),
        directness: this.mapToDirectness(psychographics.researchDepth),
        empathy: this.mapToEmpathy(psychographics.belongingNeed)
      },
      decisionMaking: {
        speed: this.mapToDecisionSpeed(psychographics.researchDepth),
        riskTolerance: this.mapToRiskTolerance(psychographics.riskTolerance),
        informationNeed: this.mapToInformationNeed(psychographics.researchDepth)
      },
      socialBehavior: {
        groupOrientation: this.mapToGroupOrientation(psychographics.belongingNeed),
        influenceReceptivity: this.mapToInfluenceReceptivity(psychographics.socialMediaInfluence, psychographics.expertOpinionValue),
        sharingTendency: this.mapToSharingTendency(psychographics.socialMediaInfluence)
      },
      conversationPreferences: {
        preferredTopics: insights.interests.slice(0, 5),
        avoidedTopics: this.generateAvoidedTopics(psychographics),
        curiosityLevel: this.mapToCuriosity(psychographics.adventurousness),
        questioningStyle: this.mapToQuestioningStyle(psychographics.researchDepth)
      },
      emotionalProfile: {
        primaryEmotions: this.mapToEmotions(psychographics.emotionalDriver),
        stressTriggers: insights.painPoints,
        motivators: insights.goals,
        satisfactionSources: this.generateSatisfactionSources(psychographics, insights.values)
      },
      buyingBehavior: {
        priceDiscussionComfort: this.mapToPriceComfort(psychographics.priceSensitivity),
        brandLoyaltyExpression: this.mapToBrandLoyalty(psychographics.brandLoyalty),
        recommendationTendency: this.mapToRecommendationTendency(psychographics.socialMediaInfluence)
      },
      contextualBehavior: {
        timePreference: this.mapToTimePreference(psychographics.convenienceOrientation),
        helpSeekingStyle: this.mapToHelpSeeking(psychographics.expertOpinionValue),
        feedbackStyle: this.mapToFeedbackStyle(psychographics.researchDepth)
      }
    }
  }
  
  /**
   * Calculate confidence score based on source quality and completeness
   */
  private static calculateConfidenceScore(sources: SourceData[], attributes: { [key: string]: any[] }): number {
    let score = 0.5 // Base score
    
    // Boost for multiple sources
    score += sources.length * 0.1
    
    // Boost for attribute completeness
    const attributeTypes = Object.keys(attributes)
    const filledAttributes = attributeTypes.filter(key => attributes[key].length > 0)
    score += (filledAttributes.length / attributeTypes.length) * 0.3
    
    // Boost for high-quality sources
    sources.forEach(source => {
      if (source.type === 'segment') score += 0.1
      if (source.type === 'community') score += 0.15
      if (source.type === 'trend') score += 0.05
    })
    
    return Math.min(1.0, Math.max(0.1, score))
  }
  
  /**
   * Create attribute mappings for database tracking
   */
  private static createAttributeMappings(sources: SourceData[], insights: any): AttributeMapping[] {
    const mappings: AttributeMapping[] = []
    
    sources.forEach(source => {
      // Map values
      insights.values.forEach((value: string) => {
        mappings.push({
          sourceType: source.type,
          sourceId: source.id,
          attributeType: 'value',
          attributeValue: value,
          influenceWeight: 1.0 / sources.length,
          confidence: 0.8
        })
      })
      
      // Map interests
      insights.interests.forEach((interest: string) => {
        mappings.push({
          sourceType: source.type,
          sourceId: source.id,
          attributeType: 'interest',
          attributeValue: interest,
          influenceWeight: 1.0 / sources.length,
          confidence: 0.9
        })
      })
      
      // Map personality traits
      insights.personality.forEach((trait: string) => {
        mappings.push({
          sourceType: source.type,
          sourceId: source.id,
          attributeType: 'personality',
          attributeValue: trait,
          influenceWeight: 1.0 / sources.length,
          confidence: 0.7
        })
      })
    })
    
    return mappings
  }
  
  // Helper mapping functions
  private static mapToFormality(prestigeSeeking: number): 'very-casual' | 'casual' | 'balanced' | 'formal' | 'very-formal' {
    if (prestigeSeeking <= 2) return 'casual'
    if (prestigeSeeking <= 3) return 'balanced'
    if (prestigeSeeking <= 4) return 'formal'
    return 'very-formal'
  }
  
  private static mapToEnthusiasm(emotionalDriver: number): 'low' | 'moderate' | 'high' | 'very-high' {
    if (emotionalDriver <= 2) return 'low'
    if (emotionalDriver <= 3) return 'moderate'
    if (emotionalDriver <= 4) return 'high'
    return 'very-high'
  }
  
  private static mapToDirectness(researchDepth: number): 'indirect' | 'balanced' | 'direct' | 'very-direct' {
    if (researchDepth <= 2) return 'direct' // Less research = more direct
    if (researchDepth <= 3) return 'balanced'
    if (researchDepth <= 4) return 'indirect'
    return 'indirect'
  }
  
  private static mapToEmpathy(belongingNeed: number): 'analytical' | 'balanced' | 'empathetic' | 'very-empathetic' {
    if (belongingNeed <= 2) return 'analytical'
    if (belongingNeed <= 3) return 'balanced'
    if (belongingNeed <= 4) return 'empathetic'
    return 'very-empathetic'
  }
  
  // Additional helper methods for other mappings...
  private static mapToDecisionSpeed(researchDepth: number): 'impulsive' | 'quick' | 'deliberate' | 'very-deliberate' {
    if (researchDepth <= 2) return 'quick'
    if (researchDepth <= 3) return 'deliberate'
    return 'very-deliberate'
  }
  
  private static mapToRiskTolerance(riskTolerance: number): 'risk-averse' | 'cautious' | 'balanced' | 'risk-taking' {
    if (riskTolerance <= 2) return 'risk-averse'
    if (riskTolerance <= 3) return 'cautious'
    if (riskTolerance <= 4) return 'balanced'
    return 'risk-taking'
  }
  
  private static mapToInformationNeed(researchDepth: number): 'minimal' | 'moderate' | 'detailed' | 'exhaustive' {
    if (researchDepth <= 2) return 'minimal'
    if (researchDepth <= 3) return 'moderate'
    if (researchDepth <= 4) return 'detailed'
    return 'exhaustive'
  }
  
  // Utility methods
  private static deduplicateAndPrioritize(items: string[]): string[] {
    const counts = items.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1
      return acc
    }, {} as { [key: string]: number })
    
    return Object.entries(counts)
      .sort(([,a], [,b]) => b - a)
      .map(([item]) => item)
  }
  
  private static analyzeDescriptionForTraits(description: string): any {
    // Simple keyword-based analysis - in production, use NLP
    const painPointKeywords = ['challenge', 'difficult', 'struggle', 'problem', 'barrier', 'obstacle']
    const goalKeywords = ['goal', 'aim', 'want', 'need', 'aspire', 'achieve', 'desire']
    const personalityKeywords = {
      'creative': ['creative', 'artistic', 'innovative', 'imaginative'],
      'analytical': ['analytical', 'logical', 'data-driven', 'systematic'],
      'social': ['social', 'collaborative', 'community', 'networking']
    }
    
    const lowerDesc = description.toLowerCase()
    
    return {
      painPoints: painPointKeywords.filter(keyword => lowerDesc.includes(keyword)),
      goals: goalKeywords.filter(keyword => lowerDesc.includes(keyword)),
      personality: Object.keys(personalityKeywords).filter(trait => 
        personalityKeywords[trait as keyof typeof personalityKeywords].some(keyword => lowerDesc.includes(keyword))
      )
    }
  }
  
  private static inferTraitsFromName(name: string): any {
    const nameAnalysis = {
      'creative': ['creative', 'artist', 'designer', 'maker'],
      'tech': ['tech', 'developer', 'engineer', 'digital'],
      'leader': ['leader', 'executive', 'manager', 'ceo'],
      'entrepreneur': ['entrepreneur', 'founder', 'startup']
    }
    
    const lowerName = name.toLowerCase()
    const traits = Object.keys(nameAnalysis).filter(trait =>
      nameAnalysis[trait as keyof typeof nameAnalysis].some(keyword => lowerName.includes(keyword))
    )
    
    return {
      personality: traits,
      values: traits.includes('creative') ? ['creativity', 'innovation'] : 
              traits.includes('leader') ? ['leadership', 'achievement'] : ['quality', 'growth']
    }
  }
  
  private static mapCategoryToInterests(category: string): string[] {
    const categoryMap: { [key: string]: string[] } = {
      'tech': ['technology', 'innovation', 'gadgets', 'software'],
      'creative': ['design', 'art', 'creativity', 'aesthetics'],
      'lifestyle': ['wellness', 'personal development', 'experiences'],
      'professional': ['career development', 'networking', 'productivity'],
      'hobby': ['leisure activities', 'personal interests', 'collecting'],
      'wellness': ['health', 'fitness', 'mental wellness', 'self-care']
    }
    
    return categoryMap[category] || ['general interests']
  }
  
  private static inferCommunicationFromCommunity(community: any): string {
    if (community.engagement_level === 'very_high') return 'active forums'
    if (community.platform_presence?.includes('discord')) return 'community chat'
    if (community.platform_presence?.includes('instagram')) return 'visual content'
    if (community.platform_presence?.includes('reddit')) return 'discussion forums'
    return 'social media'
  }
  
  private static mapTrendCategoryToPersonality(category: string): string[] {
    const categoryPersonality: { [key: string]: string[] } = {
      'tech': ['innovative', 'curious', 'early-adopter'],
      'lifestyle': ['aspirational', 'trend-conscious', 'social'],
      'business': ['ambitious', 'strategic', 'goal-oriented'],
      'creative': ['creative', 'expressive', 'artistic']
    }
    
    return categoryPersonality[category] || ['engaged', 'aware']
  }
  
  private static mapTrendToValues(trend: any): string[] {
    if (trend.category === 'tech') return ['innovation', 'progress', 'efficiency']
    if (trend.category === 'lifestyle') return ['experiences', 'personal growth', 'quality of life']
    if (trend.category === 'sustainability') return ['environmental responsibility', 'ethical choices']
    return ['staying current', 'being informed']
  }
  
  private static generatePersonaName(insights: any): string {
    const adjectives = ['Creative', 'Innovative', 'Engaged', 'Thoughtful', 'Dynamic']
    const names = ['Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn']
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const name = names[Math.floor(Math.random() * names.length)]
    
    return `${adj} ${name}`
  }
  
  private static generateDescription(insights: any): string {
    return `A ${insights.personality.slice(0, 2).join(' and ').toLowerCase()} individual who values ${insights.values.slice(0, 2).join(' and ').toLowerCase()}. Interested in ${insights.interests.slice(0, 3).join(', ').toLowerCase()}.`
  }
  
  private static generateDemographics(attributes: { [key: string]: any[] }): any {
    // Aggregate demographics from sources
    const demos = attributes.demographics
    if (demos.length === 0) {
      return {
        ageRange: '25-35',
        location: 'Urban',
        incomeRange: '$45K-$75K',
        education: 'College+'
      }
    }
    
    // Use first available demographics as base
    return demos[0]
  }
  
  private static generateCommunicationChannels(platforms: string[], psychographics: any): string[] {
    const channels = []
    
    if (platforms.includes('discord')) channels.push('Community forums')
    if (platforms.includes('instagram')) channels.push('Visual social media')
    if (platforms.includes('reddit')) channels.push('Discussion platforms')
    if (platforms.includes('youtube')) channels.push('Video content')
    if (platforms.includes('tiktok')) channels.push('Short-form video')
    
    if (psychographics.socialMediaInfluence >= 4) {
      channels.push('Social media', 'Influencer content')
    }
    
    if (psychographics.expertOpinionValue >= 4) {
      channels.push('Expert reviews', 'Industry publications')
    }
    
    return channels.length ? channels : ['Social media', 'Online communities']
  }
  
  private static generateBuyingMotivations(values: string[], personality: string[], psychographics: any): string[] {
    const motivations = []
    
    if (values.includes('innovation') || values.includes('creativity')) {
      motivations.push('Latest innovations', 'Creative potential')
    }
    
    if (values.includes('quality') || values.includes('premium')) {
      motivations.push('Superior quality', 'Long-term value')
    }
    
    if (values.includes('community') || values.includes('social')) {
      motivations.push('Community recommendations', 'Social proof')
    }
    
    if (psychographics.sustainabilityImportance >= 4) {
      motivations.push('Environmental impact', 'Ethical sourcing')
    }
    
    if (psychographics.prestigeSeeking >= 4) {
      motivations.push('Status symbol', 'Premium brands')
    }
    
    return motivations.length ? motivations : ['Value for money', 'Quality products', 'Good reviews']
  }
  
  // Additional mapping methods for completeness
  private static mapToGroupOrientation(belongingNeed: number): 'individual' | 'small-group' | 'community' | 'large-group' {
    if (belongingNeed <= 2) return 'individual'
    if (belongingNeed <= 3) return 'small-group'
    if (belongingNeed <= 4) return 'community'
    return 'large-group'
  }
  
  private static mapToInfluenceReceptivity(socialMedia: number, expert: number): 'independent' | 'selective' | 'social-proof' | 'authority-driven' {
    if (expert >= 4) return 'authority-driven'
    if (socialMedia >= 4) return 'social-proof'
    if (expert >= 3 || socialMedia >= 3) return 'selective'
    return 'independent'
  }
  
  private static mapToSharingTendency(socialMedia: number): 'private' | 'selective' | 'open' | 'very-open' {
    if (socialMedia <= 2) return 'private'
    if (socialMedia <= 3) return 'selective'
    if (socialMedia <= 4) return 'open'
    return 'very-open'
  }
  
  private static mapToCuriosity(adventurousness: number): 'low' | 'moderate' | 'high' | 'very-high' {
    if (adventurousness <= 2) return 'low'
    if (adventurousness <= 3) return 'moderate'
    if (adventurousness <= 4) return 'high'
    return 'very-high'
  }
  
  private static mapToQuestioningStyle(researchDepth: number): 'accepting' | 'clarifying' | 'probing' | 'challenging' {
    if (researchDepth <= 2) return 'accepting'
    if (researchDepth <= 3) return 'clarifying'
    if (researchDepth <= 4) return 'probing'
    return 'challenging'
  }
  
  private static mapToEmotions(emotionalDriver: number): string[] {
    const emotionMap: { [key: number]: string[] } = {
      1: ['calm', 'stable', 'practical'],
      2: ['balanced', 'steady', 'reliable'],
      3: ['optimistic', 'engaged', 'friendly'],
      4: ['enthusiastic', 'passionate', 'excited'],
      5: ['intense', 'driven', 'ambitious']
    }
    
    return emotionMap[Math.round(emotionalDriver)] || emotionMap[3]
  }
  
  private static mapToPriceComfort(priceSensitivity: number): 'avoids' | 'cautious' | 'open' | 'direct' {
    if (priceSensitivity >= 4) return 'avoids'
    if (priceSensitivity >= 3) return 'cautious'
    if (priceSensitivity >= 2) return 'open'
    return 'direct'
  }
  
  private static mapToBrandLoyalty(brandLoyalty: number): 'low' | 'moderate' | 'high' | 'very-high' {
    if (brandLoyalty <= 2) return 'low'
    if (brandLoyalty <= 3) return 'moderate'
    if (brandLoyalty <= 4) return 'high'
    return 'very-high'
  }
  
  private static mapToRecommendationTendency(socialMedia: number): 'reluctant' | 'selective' | 'willing' | 'enthusiastic' {
    if (socialMedia <= 2) return 'reluctant'
    if (socialMedia <= 3) return 'selective'
    if (socialMedia <= 4) return 'willing'
    return 'enthusiastic'
  }
  
  private static mapToTimePreference(convenience: number): 'quick-chat' | 'normal' | 'detailed' | 'extended' {
    if (convenience >= 4) return 'quick-chat'
    if (convenience >= 3) return 'normal'
    if (convenience >= 2) return 'detailed'
    return 'extended'
  }
  
  private static mapToHelpSeeking(expertValue: number): 'self-reliant' | 'guided' | 'collaborative' | 'dependent' {
    if (expertValue <= 2) return 'self-reliant'
    if (expertValue <= 3) return 'guided'
    if (expertValue <= 4) return 'collaborative'
    return 'dependent'
  }
  
  private static mapToFeedbackStyle(researchDepth: number): 'brief' | 'balanced' | 'detailed' | 'comprehensive' {
    if (researchDepth <= 2) return 'brief'
    if (researchDepth <= 3) return 'balanced'
    if (researchDepth <= 4) return 'detailed'
    return 'comprehensive'
  }
  
  private static generateAvoidedTopics(psychographics: any): string[] {
    const avoided = []
    
    if (psychographics.priceSensitivity >= 4) avoided.push('expensive products', 'luxury spending')
    if (psychographics.sustainabilityImportance <= 2) avoided.push('environmental issues')
    if (psychographics.riskTolerance <= 2) avoided.push('risky investments', 'unproven technologies')
    if (psychographics.socialMediaInfluence <= 2) avoided.push('social media trends', 'viral content')
    
    return avoided
  }
  
  private static generateSatisfactionSources(psychographics: any, values: string[]): string[] {
    const sources = []
    
    if (psychographics.luxuryAffinity >= 4) sources.push('premium experiences', 'quality products')
    if (psychographics.belongingNeed >= 4) sources.push('community recognition', 'social connections')
    if (psychographics.sustainabilityImportance >= 4) sources.push('environmental impact', 'ethical choices')
    if (psychographics.innovationAdoption >= 4) sources.push('new discoveries', 'being first')
    if (values.includes('achievement')) sources.push('personal accomplishment', 'goal completion')
    
    return sources.length > 0 ? sources : ['personal growth', 'quality outcomes', 'meaningful connections']
  }
}