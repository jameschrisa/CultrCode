/**
 * Persona Validation Service
 * Ensures persona reliability and consistency for chatbot interactions
 */

import { PersonaDBRecord, PersonaChatProfile } from '@/types/personas'

export interface ValidationResult {
  isValid: boolean
  reliabilityScore: number
  issues: ValidationIssue[]
  recommendations: string[]
  consistencyMetrics: ConsistencyMetrics
}

export interface ValidationIssue {
  severity: 'low' | 'medium' | 'high' | 'critical'
  category: 'attributes' | 'personality' | 'consistency' | 'completeness'
  message: string
  field?: string
}

export interface ConsistencyMetrics {
  attributeCompleteness: number
  personalityCoherence: number
  sourceAlignment: number
  chatReadiness: number
  overallScore: number
}

export class PersonaValidationService {
  
  /**
   * Comprehensive validation of persona for chatbot reliability
   */
  static validatePersona(persona: PersonaDBRecord): ValidationResult {
    const issues: ValidationIssue[] = []
    const recommendations: string[] = []
    
    // 1. Validate attribute completeness
    const completenessResults = this.validateAttributeCompleteness(persona)
    issues.push(...completenessResults.issues)
    
    // 2. Validate personality coherence
    const coherenceResults = this.validatePersonalityCoherence(persona)
    issues.push(...coherenceResults.issues)
    
    // 3. Validate chat personality profile
    const chatResults = this.validateChatPersonality(persona.chatPersonality)
    issues.push(...chatResults.issues)
    
    // 4. Validate psychographic consistency
    const psychResults = this.validatePsychographics(persona.psychographics)
    issues.push(...psychResults.issues)
    
    // 5. Validate source alignment
    const sourceResults = this.validateSourceAlignment(persona)
    issues.push(...sourceResults.issues)
    
    // Calculate metrics
    const consistencyMetrics: ConsistencyMetrics = {
      attributeCompleteness: completenessResults.score,
      personalityCoherence: coherenceResults.score,
      sourceAlignment: sourceResults.score,
      chatReadiness: chatResults.score,
      overallScore: this.calculateOverallScore([
        completenessResults.score,
        coherenceResults.score,
        sourceResults.score,
        chatResults.score
      ])
    }
    
    // Generate recommendations
    recommendations.push(...this.generateRecommendations(issues, consistencyMetrics))
    
    // Determine if persona is valid for use
    const isValid = this.determineValidity(issues, consistencyMetrics)
    
    return {
      isValid,
      reliabilityScore: consistencyMetrics.overallScore,
      issues,
      recommendations,
      consistencyMetrics
    }
  }
  
  /**
   * Validate attribute completeness
   */
  private static validateAttributeCompleteness(persona: PersonaDBRecord) {
    const issues: ValidationIssue[] = []
    let score = 1.0
    
    // Check required arrays
    const requiredArrays = ['values', 'personality', 'interests', 'painPoints', 'goals']
    for (const field of requiredArrays) {
      const value = persona[field as keyof PersonaDBRecord] as string[]
      if (!value || !Array.isArray(value) || value.length === 0) {
        issues.push({
          severity: 'high',
          category: 'completeness',
          message: `Missing or empty ${field}`,
          field
        })
        score -= 0.15
      } else if (value.length < 2) {
        issues.push({
          severity: 'medium',
          category: 'completeness',
          message: `${field} should have at least 2 items for better personality depth`,
          field
        })
        score -= 0.05
      }
    }
    
    // Check demographics
    if (!persona.demographics || Object.keys(persona.demographics).length === 0) {
      issues.push({
        severity: 'medium',
        category: 'completeness',
        message: 'Demographics information is missing',
        field: 'demographics'
      })
      score -= 0.1
    }
    
    // Check communication channels
    if (!persona.communicationChannels || persona.communicationChannels.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'completeness',
        message: 'Communication channels not specified',
        field: 'communicationChannels'
      })
      score -= 0.1
    }
    
    return { issues, score: Math.max(0, score) }
  }
  
  /**
   * Validate personality coherence
   */
  private static validatePersonalityCoherence(persona: PersonaDBRecord) {
    const issues: ValidationIssue[] = []
    let score = 1.0
    
    // Check for conflicting personality traits
    const conflicts = this.detectPersonalityConflicts(persona.personality, persona.values)
    for (const conflict of conflicts) {
      issues.push({
        severity: 'medium',
        category: 'personality',
        message: `Potential conflict: ${conflict}`,
        field: 'personality'
      })
      score -= 0.1
    }
    
    // Check trait diversity (not too similar)
    const similarity = this.calculateTraitSimilarity(persona.personality)
    if (similarity > 0.8) {
      issues.push({
        severity: 'low',
        category: 'personality',
        message: 'Personality traits are very similar - consider adding more diversity',
        field: 'personality'
      })
      score -= 0.05
    }
    
    // Check values-personality alignment
    const alignment = this.checkValuesPersonalityAlignment(persona.values, persona.personality)
    if (alignment < 0.6) {
      issues.push({
        severity: 'medium',
        category: 'personality',
        message: 'Values and personality traits seem misaligned',
        field: 'personality'
      })
      score -= 0.15
    }
    
    return { issues, score: Math.max(0, score) }
  }
  
  /**
   * Validate chat personality profile
   */
  private static validateChatPersonality(chatProfile: PersonaChatProfile) {
    const issues: ValidationIssue[] = []
    let score = 1.0
    
    if (!chatProfile) {
      issues.push({
        severity: 'critical',
        category: 'personality',
        message: 'Chat personality profile is missing',
        field: 'chatPersonality'
      })
      return { issues, score: 0 }
    }
    
    // Validate communication style
    if (!chatProfile.communicationStyle) {
      issues.push({
        severity: 'high',
        category: 'personality',
        message: 'Communication style not defined',
        field: 'chatPersonality.communicationStyle'
      })
      score -= 0.2
    } else {
      // Check for extreme combinations that might be problematic
      const style = chatProfile.communicationStyle
      if (style.formality === 'very-formal' && style.enthusiasm === 'very-high') {
        issues.push({
          severity: 'medium',
          category: 'personality',
          message: 'Very formal + very enthusiastic communication might be inconsistent',
          field: 'communicationStyle'
        })
        score -= 0.05
      }
    }
    
    // Validate decision making
    if (!chatProfile.decisionMaking) {
      issues.push({
        severity: 'high',
        category: 'personality',
        message: 'Decision making patterns not defined',
        field: 'chatPersonality.decisionMaking'
      })
      score -= 0.2
    }
    
    // Validate conversation preferences
    if (!chatProfile.conversationPreferences?.preferredTopics || 
        chatProfile.conversationPreferences.preferredTopics.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'personality',
        message: 'No preferred conversation topics defined',
        field: 'conversationPreferences'
      })
      score -= 0.1
    }
    
    return { issues, score: Math.max(0, score) }
  }
  
  /**
   * Validate psychographic scores
   */
  private static validatePsychographics(psychographics: any) {
    const issues: ValidationIssue[] = []
    let score = 1.0
    
    if (!psychographics || Object.keys(psychographics).length === 0) {
      issues.push({
        severity: 'high',
        category: 'attributes',
        message: 'Psychographic scores are missing',
        field: 'psychographics'
      })
      return { issues, score: 0.2 }
    }
    
    // Check for required psychographic dimensions
    const requiredDimensions = [
      'sustainabilityImportance', 'convenienceOrientation', 'luxuryAffinity',
      'adventurousness', 'brandLoyalty', 'prestigeSeeking', 'belongingNeed',
      'riskTolerance', 'innovationAdoption', 'emotionalDriver'
    ]
    
    for (const dimension of requiredDimensions) {
      const value = psychographics[dimension]
      if (value === undefined || value === null) {
        issues.push({
          severity: 'medium',
          category: 'attributes',
          message: `Missing psychographic dimension: ${dimension}`,
          field: 'psychographics'
        })
        score -= 0.05
      } else if (value < 1 || value > 5) {
        issues.push({
          severity: 'high',
          category: 'attributes',
          message: `Invalid psychographic score for ${dimension}: ${value} (should be 1-5)`,
          field: 'psychographics'
        })
        score -= 0.1
      }
    }
    
    // Check for extreme patterns that might indicate issues
    const extremeCount = Object.values(psychographics).filter(v => v === 1 || v === 5).length
    if (extremeCount > Object.keys(psychographics).length * 0.7) {
      issues.push({
        severity: 'low',
        category: 'attributes',
        message: 'Many extreme psychographic scores - persona might be too polarized',
        field: 'psychographics'
      })
      score -= 0.05
    }
    
    return { issues, score: Math.max(0, score) }
  }
  
  /**
   * Validate alignment with source data
   */
  private static validateSourceAlignment(persona: PersonaDBRecord) {
    const issues: ValidationIssue[] = []
    let score = 1.0
    
    // Check if persona has source attribution
    if (!persona.baseType || !persona.sourceId) {
      issues.push({
        severity: 'medium',
        category: 'consistency',
        message: 'Source attribution is missing',
        field: 'source'
      })
      score -= 0.2
    }
    
    // Check confidence score
    if (persona.confidence < 0.5) {
      issues.push({
        severity: 'high',
        category: 'consistency',
        message: `Low confidence score: ${persona.confidence}`,
        field: 'confidence'
      })
      score -= 0.3
    } else if (persona.confidence < 0.7) {
      issues.push({
        severity: 'medium',
        category: 'consistency',
        message: `Moderate confidence score: ${persona.confidence}`,
        field: 'confidence'
      })
      score -= 0.1
    }
    
    return { issues, score: Math.max(0, score) }
  }
  
  /**
   * Detect personality conflicts
   */
  private static detectPersonalityConflicts(personality: string[], values: string[]): string[] {
    const conflicts: string[] = []
    
    // Define conflicting trait pairs
    const conflictMap = new Map([
      ['introverted', ['extroverted', 'social', 'outgoing']],
      ['conservative', ['innovative', 'adventurous', 'experimental']],
      ['cautious', ['risk-taking', 'spontaneous', 'impulsive']],
      ['logical', ['emotional', 'intuitive']],
      ['independent', ['collaborative', 'team-oriented']]
    ])
    
    const allTraits = [...personality, ...values].map(t => t.toLowerCase())
    
    for (const [trait, conflictingTraits] of conflictMap) {
      if (allTraits.includes(trait)) {
        for (const conflicting of conflictingTraits) {
          if (allTraits.includes(conflicting)) {
            conflicts.push(`${trait} vs ${conflicting}`)
          }
        }
      }
    }
    
    return conflicts
  }
  
  /**
   * Calculate trait similarity (to detect redundancy)
   */
  private static calculateTraitSimilarity(traits: string[]): number {
    if (traits.length < 2) return 0
    
    // Simple similarity based on common words
    const words = traits.map(t => t.toLowerCase().split(/[\s-_]+/)).flat()
    const uniqueWords = new Set(words)
    
    return 1 - (uniqueWords.size / words.length)
  }
  
  /**
   * Check alignment between values and personality
   */
  private static checkValuesPersonalityAlignment(values: string[], personality: string[]): number {
    if (!values?.length || !personality?.length) return 0
    
    // Define value-personality alignments
    const alignmentMap = new Map([
      ['innovation', ['creative', 'curious', 'adventurous', 'forward-thinking']],
      ['quality', ['meticulous', 'perfectionist', 'detail-oriented', 'discerning']],
      ['community', ['social', 'collaborative', 'empathetic', 'supportive']],
      ['authenticity', ['genuine', 'honest', 'transparent', 'authentic']],
      ['sustainability', ['conscious', 'responsible', 'ethical', 'mindful']]
    ])
    
    let alignmentScore = 0
    let totalChecks = 0
    
    for (const value of values) {
      const expectedTraits = alignmentMap.get(value.toLowerCase())
      if (expectedTraits) {
        totalChecks++
        const hasAlignedTrait = personality.some(trait => 
          expectedTraits.some(expected => 
            trait.toLowerCase().includes(expected) || expected.includes(trait.toLowerCase())
          )
        )
        if (hasAlignedTrait) alignmentScore++
      }
    }
    
    return totalChecks > 0 ? alignmentScore / totalChecks : 0.8 // Default if no specific alignments
  }
  
  /**
   * Calculate overall score from component scores
   */
  private static calculateOverallScore(scores: number[]): number {
    const weights = [0.25, 0.30, 0.20, 0.25] // completeness, coherence, source, chat
    let weightedSum = 0
    
    for (let i = 0; i < scores.length; i++) {
      weightedSum += scores[i] * (weights[i] || 1 / scores.length)
    }
    
    return Math.max(0, Math.min(1, weightedSum))
  }
  
  /**
   * Generate recommendations based on issues
   */
  private static generateRecommendations(issues: ValidationIssue[], metrics: ConsistencyMetrics): string[] {
    const recommendations: string[] = []
    
    // Completeness recommendations
    if (metrics.attributeCompleteness < 0.7) {
      recommendations.push('Add more personality traits and values to improve depth')
      recommendations.push('Ensure all core attributes (values, interests, goals) are populated')
    }
    
    // Personality recommendations
    if (metrics.personalityCoherence < 0.7) {
      recommendations.push('Review personality traits for conflicts or inconsistencies')
      recommendations.push('Ensure values align with personality traits')
    }
    
    // Chat readiness recommendations
    if (metrics.chatReadiness < 0.8) {
      recommendations.push('Complete the chat personality profile for better conversations')
      recommendations.push('Define communication style and preferences')
    }
    
    // Source alignment recommendations
    if (metrics.sourceAlignment < 0.6) {
      recommendations.push('Verify persona attributes match the selected source data')
      recommendations.push('Consider regenerating from higher-quality sources')
    }
    
    // Critical issue recommendations
    const criticalIssues = issues.filter(i => i.severity === 'critical')
    if (criticalIssues.length > 0) {
      recommendations.push('Address critical issues before using persona for chat interactions')
    }
    
    return recommendations
  }
  
  /**
   * Determine if persona is valid for use
   */
  private static determineValidity(issues: ValidationIssue[], metrics: ConsistencyMetrics): boolean {
    // Must not have critical issues
    const hasCriticalIssues = issues.some(i => i.severity === 'critical')
    if (hasCriticalIssues) return false
    
    // Must meet minimum score thresholds
    if (metrics.overallScore < 0.6) return false
    if (metrics.chatReadiness < 0.5) return false
    
    // Must not have too many high-severity issues
    const highSeverityCount = issues.filter(i => i.severity === 'high').length
    if (highSeverityCount > 3) return false
    
    return true
  }
  
  /**
   * Quick validation for real-time feedback
   */
  static quickValidate(persona: Partial<PersonaDBRecord>): {
    isReady: boolean
    missingFields: string[]
    warnings: string[]
  } {
    const missingFields: string[] = []
    const warnings: string[] = []
    
    // Check essential fields
    if (!persona.name) missingFields.push('name')
    if (!persona.values?.length) missingFields.push('values')
    if (!persona.personality?.length) missingFields.push('personality')
    if (!persona.interests?.length) missingFields.push('interests')
    if (!persona.chatPersonality) missingFields.push('chatPersonality')
    
    // Check for warnings
    if (persona.confidence && persona.confidence < 0.7) {
      warnings.push('Low confidence score - consider improving source data')
    }
    
    if (persona.values && persona.values.length < 2) {
      warnings.push('Add more values for better personality depth')
    }
    
    return {
      isReady: missingFields.length === 0,
      missingFields,
      warnings
    }
  }
}