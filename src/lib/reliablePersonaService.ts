/**
 * Reliable Persona Service
 * Handles storage and retrieval of personas with source attribution and quality tracking
 */

import { PersonaDBRecord, PersonaChatSession, PersonaChatMessage } from '@/types/personas'
import { AttributeMapping } from './enhancedPersonaGenerator'

export class ReliablePersonaService {
  
  /**
   * Save persona to database with full source attribution
   */
  static async savePersona(
    userId: string, 
    persona: Omit<PersonaDBRecord, 'id' | 'userId'>,
    attributeMappings: AttributeMapping[]
  ): Promise<string> {
    try {
      const response = await fetch('/api/personas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...persona,
          userId,
          attributeMappings
        })
      })
      
      if (!response.ok) {
        throw new Error(`Failed to save persona: ${response.statusText}`)
      }
      
      const { personaId } = await response.json()
      return personaId
    } catch (error) {
      console.error('Error saving persona:', error)
      throw error
    }
  }
  
  /**
   * Get persona with full details and source attribution
   */
  static async getPersona(personaId: string): Promise<PersonaDBRecord | null> {
    try {
      const response = await fetch(`/api/personas/${personaId}`)
      
      if (!response.ok) {
        if (response.status === 404) return null
        throw new Error(`Failed to get persona: ${response.statusText}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error getting persona:', error)
      throw error
    }
  }
  
  /**
   * Update persona quality metrics based on chat interactions
   */
  static async updateQualityMetrics(
    personaId: string,
    metrics: {
      consistencyScore?: number
      authenticityScore?: number
      engagementScore?: number
      accuracyScore?: number
      userSatisfactionScore?: number
    }
  ): Promise<void> {
    try {
      const response = await fetch(`/api/personas/${personaId}/quality`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics)
      })
      
      if (!response.ok) {
        throw new Error(`Failed to update quality metrics: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error updating quality metrics:', error)
      throw error
    }
  }
  
  /**
   * Validate persona consistency and reliability
   */
  static async validatePersona(personaId: string): Promise<{
    isValid: boolean
    issues: string[]
    recommendations: string[]
    reliabilityScore: number
  }> {
    try {
      const response = await fetch(`/api/personas/${personaId}/validate`)
      
      if (!response.ok) {
        throw new Error(`Failed to validate persona: ${response.statusText}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error validating persona:', error)
      throw error
    }
  }
}