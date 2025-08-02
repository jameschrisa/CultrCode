import { PersonaData, PersonaDBRecord, PersonaChatMessage, PersonaChatSession } from '@/types/personas'
import { PersonaChatProfileGenerator } from './personaChatProfileGenerator'
import { mockDB } from './mockDatabase'

/**
 * Database service for persona management with chat functionality
 * This would integrate with your actual database (Supabase, PostgreSQL, etc.)
 */
export class PersonaDatabase {
  
  /**
   * Save a persona to the database with all attributes needed for chat interaction
   */
  static async savePersona(userId: string, personaData: PersonaData): Promise<string> {
    try {
      // Generate chat personality profile from psychographic data
      const chatPersonality = PersonaChatProfileGenerator.generateChatProfile(personaData)
      
      // Create database record
      const dbRecord: PersonaDBRecord = {
        id: personaData.id || this.generateId(),
        userId,
        name: personaData.name,
        description: personaData.customInputs.description || `Generated from ${personaData.baseSelection.type}`,
        
        // Base generation data
        baseType: personaData.baseSelection.type || 'custom',
        sourceId: personaData.baseSelection.data?.id,
        sourceName: personaData.baseSelection.data?.name,
        
        // Demographics
        demographics: {
          ageRange: personaData.generatedInsights.demographics.ageRange,
          location: personaData.generatedInsights.demographics.location,
          incomeRange: personaData.generatedInsights.demographics.income,
          education: this.inferEducation(personaData),
          occupation: this.inferOccupation(personaData)
        },
        
        // Complete psychographic profile
        psychographics: {
          sustainabilityImportance: personaData.psychographics.sustainabilityImportance || 3,
          convenienceOrientation: personaData.psychographics.convenienceOrientation || 3,
          luxuryAffinity: personaData.psychographics.luxuryAffinity || 3,
          adventurousness: personaData.psychographics.adventurousness || 3,
          brandLoyalty: personaData.psychographics.brandLoyalty || 3,
          prestigeSeeking: personaData.psychographics.prestigeSeeking || 3,
          belongingNeed: personaData.psychographics.belongingNeed || 3,
          riskTolerance: personaData.psychographics.riskTolerance || 3,
          innovationAdoption: personaData.psychographics.innovationAdoption || 3,
          emotionalDriver: personaData.psychographics.emotionalDriver || 3,
          nostalgiaInfluence: personaData.psychographics.nostalgiaInfluence || 3,
          priceSensitivity: personaData.psychographics.priceSensitivity || 3,
          researchDepth: personaData.psychographics.researchDepth || 3,
          socialMediaInfluence: personaData.psychographics.socialMediaInfluence || 3,
          expertOpinionValue: personaData.psychographics.expertOpinionValue || 3
        },
        
        // Generated insights
        values: personaData.generatedInsights.values,
        personality: personaData.generatedInsights.personality,
        interests: personaData.generatedInsights.interests,
        painPoints: personaData.generatedInsights.painPoints,
        goals: personaData.generatedInsights.goals,
        communicationChannels: personaData.generatedInsights.communication,
        buyingMotivations: personaData.generatedInsights.buyingMotivations,
        
        // Chat personality profile for interactive conversations
        chatPersonality,
        
        // Profile picture
        profilePicture: personaData.profilePicture ? {
          url: personaData.profilePicture.url,
          prompt: personaData.profilePicture.prompt,
          model: 'dalle', // or determine from metadata
          generatedAt: personaData.profilePicture.generatedAt
        } : undefined,
        
        // Metadata
        confidence: this.calculateConfidence(personaData),
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        isActive: true,
        chatEnabled: true
      }
      
      // Save to mock database (replace with real database in production)
      const success = await mockDB.savePersona(dbRecord)
      if (!success) {
        throw new Error('Failed to save persona to database')
      }
      
      console.log('Saved persona to database:', dbRecord.id)
      return dbRecord.id
    } catch (error) {
      console.error('Error saving persona:', error)
      throw new Error('Failed to save persona')
    }
  }
  
  /**
   * Retrieve a persona with full chat capabilities
   */
  static async getPersona(personaId: string): Promise<PersonaDBRecord | null> {
    try {
      // Fetch from mock database (replace with real database in production)
      const persona = await mockDB.getPersona(personaId)
      console.log('Fetched persona:', personaId, persona ? 'found' : 'not found')
      return persona
    } catch (error) {
      console.error('Error fetching persona:', error)
      return null
    }
  }
  
  /**
   * Get all personas for a user
   */
  static async getUserPersonas(userId: string): Promise<PersonaDBRecord[]> {
    try {
      // Fetch from mock database (replace with real database in production)
      const personas = await mockDB.getUserPersonas(userId)
      console.log('Fetched personas for user:', userId, `${personas.length} found`)
      return personas
    } catch (error) {
      console.error('Error fetching user personas:', error)
      return []
    }
  }
  
  /**
   * Update persona data
   */
  static async updatePersona(personaId: string, updates: Partial<PersonaDBRecord>): Promise<boolean> {
    try {
      const updateData = {
        ...updates,
        lastModified: new Date().toISOString()
      }
      
      // Update in mock database (replace with real database in production)
      const success = await mockDB.updatePersona(personaId, updateData)
      
      console.log('Updated persona:', personaId, success ? 'success' : 'failed')
      return success
    } catch (error) {
      console.error('Error updating persona:', error)
      return false
    }
  }
  
  /**
   * Delete a persona
   */
  static async deletePersona(personaId: string): Promise<boolean> {
    try {
      // Delete from mock database (replace with real database in production)
      const success = await mockDB.deletePersona(personaId)
      
      console.log('Deleted persona:', personaId, success ? 'success' : 'failed')
      return success
    } catch (error) {
      console.error('Error deleting persona:', error)
      return false
    }
  }
  
  /**
   * Save a chat message
   */
  static async saveChatMessage(message: PersonaChatMessage): Promise<string> {
    try {
      // In a real implementation, save to database
      // await database.chatMessages.insert(message)
      
      console.log('Saving chat message:', message)
      return message.id
    } catch (error) {
      console.error('Error saving chat message:', error)
      throw new Error('Failed to save message')
    }
  }
  
  /**
   * Get chat session with messages
   */
  static async getChatSession(sessionId: string): Promise<PersonaChatSession | null> {
    try {
      // In a real implementation, fetch from database with messages
      // const session = await database.chatSessions.findById(sessionId).include('messages')
      
      console.log('Fetching chat session:', sessionId)
      return null
    } catch (error) {
      console.error('Error fetching chat session:', error)
      return null
    }
  }
  
  /**
   * Create new chat session
   */
  static async createChatSession(userId: string, personaId: string, title?: string): Promise<string> {
    try {
      const session: PersonaChatSession = {
        id: this.generateId(),
        personaId,
        userId,
        title: title || `Chat with ${personaId}`,
        messages: [],
        startedAt: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        isActive: true,
        context: {}
      }
      
      // In a real implementation, save to database
      // await database.chatSessions.insert(session)
      
      console.log('Creating chat session:', session)
      return session.id
    } catch (error) {
      console.error('Error creating chat session:', error)
      throw new Error('Failed to create chat session')
    }
  }
  
  /**
   * Get user's chat sessions
   */
  static async getUserChatSessions(userId: string): Promise<PersonaChatSession[]> {
    try {
      // In a real implementation, fetch from database
      // const sessions = await database.chatSessions.findByUserId(userId)
      
      console.log('Fetching chat sessions for user:', userId)
      return []
    } catch (error) {
      console.error('Error fetching chat sessions:', error)
      return []
    }
  }
  
  // Helper methods
  
  private static generateId(): string {
    return 'persona_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }
  
  private static calculateConfidence(personaData: PersonaData): number {
    // Calculate confidence based on data completeness and psychographic specificity
    let confidence = 70 // Base confidence
    
    // Bonus for specific base selection
    if (personaData.baseSelection.data) confidence += 10
    
    // Bonus for custom inputs
    if (personaData.customInputs.description) confidence += 5
    if (personaData.customInputs.behaviorPrompt) confidence += 5
    
    // Bonus for psychographic diversity (not all 3s)
    const psychoValues = Object.values(personaData.psychographics)
    const variance = this.calculateVariance(psychoValues)
    if (variance > 0.5) confidence += 10
    
    return Math.min(95, confidence)
  }
  
  private static calculateVariance(values: number[]): number {
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length
    const squaredDiffs = values.map(val => Math.pow(val - mean, 2))
    return squaredDiffs.reduce((sum, diff) => sum + diff, 0) / values.length
  }
  
  private static inferEducation(personaData: PersonaData): string {
    const income = personaData.generatedInsights.demographics.income
    const values = personaData.generatedInsights.values
    
    if (income.includes('$100K') || values.includes('Innovation')) return 'Bachelor\'s or higher'
    if (income.includes('$75K') || values.includes('Quality')) return 'Some college'
    return 'High school or equivalent'
  }
  
  private static inferOccupation(personaData: PersonaData): string {
    const interests = personaData.generatedInsights.interests
    const values = personaData.generatedInsights.values
    
    if (interests.some(i => i.includes('technology') || i.includes('innovation'))) return 'Technology professional'
    if (interests.some(i => i.includes('business') || i.includes('management'))) return 'Business professional'
    if (values.includes('Creativity') || interests.some(i => i.includes('design'))) return 'Creative professional'
    if (values.includes('Community') || interests.some(i => i.includes('social'))) return 'Community/Social worker'
    
    return 'Professional'
  }
}

/**
 * SQL schema definitions for database setup
 */
export const PersonaDatabaseSchema = {
  personas: `
    CREATE TABLE personas (
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      base_type VARCHAR(50) NOT NULL,
      source_id VARCHAR(255),
      source_name VARCHAR(255),
      demographics JSONB NOT NULL,
      psychographics JSONB NOT NULL,
      values TEXT[] NOT NULL,
      personality TEXT[] NOT NULL,
      interests TEXT[] NOT NULL,
      pain_points TEXT[] NOT NULL,
      goals TEXT[] NOT NULL,
      communication_channels TEXT[] NOT NULL,
      buying_motivations TEXT[] NOT NULL,
      chat_personality JSONB NOT NULL,
      profile_picture JSONB,
      confidence INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      last_modified TIMESTAMP DEFAULT NOW(),
      is_active BOOLEAN DEFAULT TRUE,
      chat_enabled BOOLEAN DEFAULT TRUE,
      
      INDEX(user_id),
      INDEX(base_type),
      INDEX(created_at)
    );
  `,
  
  chatSessions: `
    CREATE TABLE chat_sessions (
      id VARCHAR(255) PRIMARY KEY,
      persona_id VARCHAR(255) NOT NULL,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      started_at TIMESTAMP DEFAULT NOW(),
      last_activity TIMESTAMP DEFAULT NOW(),
      is_active BOOLEAN DEFAULT TRUE,
      context JSONB,
      
      FOREIGN KEY (persona_id) REFERENCES personas(id) ON DELETE CASCADE,
      INDEX(user_id),
      INDEX(persona_id),
      INDEX(last_activity)
    );
  `,
  
  chatMessages: `
    CREATE TABLE chat_messages (
      id VARCHAR(255) PRIMARY KEY,
      session_id VARCHAR(255) NOT NULL,
      persona_id VARCHAR(255) NOT NULL,
      user_id VARCHAR(255) NOT NULL,
      role ENUM('user', 'persona') NOT NULL,
      content TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT NOW(),
      context JSONB,
      
      FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE,
      FOREIGN KEY (persona_id) REFERENCES personas(id) ON DELETE CASCADE,
      INDEX(session_id),
      INDEX(timestamp)
    );
  `
}