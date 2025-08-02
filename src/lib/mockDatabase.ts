import fs from 'fs'
import path from 'path'
import { PersonaDBRecord, PersonaChatSession, PersonaChatMessage } from '@/types/personas'

/**
 * Mock database implementation using file system storage
 * This simulates database operations for development/demo purposes
 * In production, replace with actual database (PostgreSQL, MySQL, etc.)
 */
class MockDatabase {
  private dataDir: string
  private personasFile: string
  private chatSessionsFile: string
  private chatMessagesFile: string

  constructor() {
    // Use a data directory in the project root
    this.dataDir = path.join(process.cwd(), 'data')
    this.personasFile = path.join(this.dataDir, 'personas.json')
    this.chatSessionsFile = path.join(this.dataDir, 'chat_sessions.json')
    this.chatMessagesFile = path.join(this.dataDir, 'chat_messages.json')
    
    this.ensureDataDirectory()
  }

  private ensureDataDirectory() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true })
    }
    
    // Initialize files if they don't exist
    if (!fs.existsSync(this.personasFile)) {
      fs.writeFileSync(this.personasFile, JSON.stringify([]))
    }
    if (!fs.existsSync(this.chatSessionsFile)) {
      fs.writeFileSync(this.chatSessionsFile, JSON.stringify([]))
    }
    if (!fs.existsSync(this.chatMessagesFile)) {
      fs.writeFileSync(this.chatMessagesFile, JSON.stringify([]))
    }
  }

  // Persona operations
  async getPersonas(): Promise<PersonaDBRecord[]> {
    try {
      const data = fs.readFileSync(this.personasFile, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading personas:', error)
      return []
    }
  }

  async getPersona(personaId: string): Promise<PersonaDBRecord | null> {
    const personas = await this.getPersonas()
    return personas.find(p => p.id === personaId) || null
  }

  async getUserPersonas(userId: string): Promise<PersonaDBRecord[]> {
    const personas = await this.getPersonas()
    return personas.filter(p => p.userId === userId && p.isActive)
  }

  async savePersona(persona: PersonaDBRecord): Promise<boolean> {
    try {
      const personas = await this.getPersonas()
      
      // Check if persona already exists
      const existingIndex = personas.findIndex(p => p.id === persona.id)
      
      if (existingIndex >= 0) {
        // Update existing persona
        personas[existingIndex] = persona
      } else {
        // Add new persona
        personas.push(persona)
      }
      
      fs.writeFileSync(this.personasFile, JSON.stringify(personas, null, 2))
      return true
    } catch (error) {
      console.error('Error saving persona:', error)
      return false
    }
  }

  async updatePersona(personaId: string, updates: Partial<PersonaDBRecord>): Promise<boolean> {
    try {
      const personas = await this.getPersonas()
      const personaIndex = personas.findIndex(p => p.id === personaId)
      
      if (personaIndex === -1) {
        return false
      }
      
      // Update the persona
      personas[personaIndex] = {
        ...personas[personaIndex],
        ...updates,
        lastModified: new Date().toISOString()
      }
      
      fs.writeFileSync(this.personasFile, JSON.stringify(personas, null, 2))
      return true
    } catch (error) {
      console.error('Error updating persona:', error)
      return false
    }
  }

  async deletePersona(personaId: string): Promise<boolean> {
    try {
      const personas = await this.getPersonas()
      const updatedPersonas = personas.filter(p => p.id !== personaId)
      
      fs.writeFileSync(this.personasFile, JSON.stringify(updatedPersonas, null, 2))
      return true
    } catch (error) {
      console.error('Error deleting persona:', error)
      return false
    }
  }

  // Chat session operations
  async getChatSessions(): Promise<PersonaChatSession[]> {
    try {
      const data = fs.readFileSync(this.chatSessionsFile, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading chat sessions:', error)
      return []
    }
  }

  async getChatSession(sessionId: string): Promise<PersonaChatSession | null> {
    const sessions = await this.getChatSessions()
    return sessions.find(s => s.id === sessionId) || null
  }

  async getUserChatSessions(userId: string): Promise<PersonaChatSession[]> {
    const sessions = await this.getChatSessions()
    return sessions.filter(s => s.userId === userId && s.isActive)
  }

  async saveChatSession(session: PersonaChatSession): Promise<boolean> {
    try {
      const sessions = await this.getChatSessions()
      
      const existingIndex = sessions.findIndex(s => s.id === session.id)
      
      if (existingIndex >= 0) {
        sessions[existingIndex] = session
      } else {
        sessions.push(session)
      }
      
      fs.writeFileSync(this.chatSessionsFile, JSON.stringify(sessions, null, 2))
      return true
    } catch (error) {
      console.error('Error saving chat session:', error)
      return false
    }
  }

  // Chat message operations
  async getChatMessages(): Promise<PersonaChatMessage[]> {
    try {
      const data = fs.readFileSync(this.chatMessagesFile, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading chat messages:', error)
      return []
    }
  }

  async saveChatMessage(message: PersonaChatMessage): Promise<boolean> {
    try {
      const messages = await this.getChatMessages()
      messages.push(message)
      
      fs.writeFileSync(this.chatMessagesFile, JSON.stringify(messages, null, 2))
      return true
    } catch (error) {
      console.error('Error saving chat message:', error)
      return false
    }
  }

  async getSessionMessages(sessionId: string): Promise<PersonaChatMessage[]> {
    const messages = await this.getChatMessages()
    return messages.filter(m => m.sessionId === sessionId)
  }
}

// Export singleton instance
export const mockDB = new MockDatabase()

// Type definition to match session message structure
declare module '@/types/personas' {
  interface PersonaChatMessage {
    sessionId?: string
  }
}