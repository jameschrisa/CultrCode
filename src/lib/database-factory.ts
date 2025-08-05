// Database Factory - Automatically chooses PostgreSQL or SQLite based on environment
// Provides seamless development to production transition

import { getCommunityDatabase as getSQLiteDatabase } from './database'
import { getCommunityDatabase as getPostgresDatabase } from './database-postgres'

// Type definitions for database interface
export interface DatabaseInterface {
  getAllCommunities(): Promise<any[]>
  getCommunitiesByCategory(categoryId: number): Promise<any[]>
  getCommunityById(id: number): Promise<any | null>
  searchCommunities(query: string): Promise<any[]>
  getAllCategories(): Promise<any[]>
  getCategoryById(id: number): Promise<any | null>
  getAllSegments(): Promise<any[]>
  getSegmentById(id: number): Promise<any | null>
  getCommunitiesForSegment(segmentId: number): Promise<any[]>
  getSegmentsForCommunity(communityId: number): Promise<any[]>
  getBestMatches(segmentId: number, limit?: number): Promise<any[]>
  getTrendingTopics(status?: string): Promise<any[]>
  getTrendingCommunities(): Promise<any[]>
  getCommunityStats(): Promise<any>
  getSegmentStats(): Promise<any>
  saveUserInput(sessionId: string, inputs: any, userId?: string): Promise<number>
  findBestCommunityMatches(inputId: number): Promise<any[]>
  close(): Promise<void>
}

/**
 * Factory function that returns the appropriate database implementation
 * Based on environment variables and availability
 */
export async function getCommunityDatabase(): Promise<DatabaseInterface> {
  const isProduction = process.env.NODE_ENV === 'production'
  const hasPostgresUrl = !!(process.env.POSTGRES_URL || process.env.DATABASE_URL)
  
  // Use PostgreSQL if:
  // 1. We're in production, OR
  // 2. We have a PostgreSQL connection string configured
  if (isProduction || hasPostgresUrl) {
    try {
      console.log('🐘 Using PostgreSQL database')
      return await getPostgresDatabase()
    } catch (error) {
      console.warn('⚠️  PostgreSQL connection failed, falling back to SQLite:', error instanceof Error ? error.message : String(error))
      
      // Fallback to SQLite in development if PostgreSQL fails
      if (!isProduction) {
        return await getSQLiteDatabase()
      }
      
      // In production, we must use PostgreSQL
      throw new Error('PostgreSQL database required in production environment')
    }
  }
  
  // Default to SQLite for development
  console.log('📁 Using SQLite database (development)')
  return await getSQLiteDatabase()
}

/**
 * Health check function to verify database connectivity
 */
export async function checkDatabaseHealth(): Promise<{
  type: 'postgresql' | 'sqlite'
  connected: boolean
  error?: string
}> {
  try {
    const db = await getCommunityDatabase()
    
    // Try to perform a simple query
    const categories = await db.getAllCategories()
    
    // Determine database type based on environment
    const isPostgres = !!(process.env.POSTGRES_URL || process.env.DATABASE_URL)
    
    return {
      type: isPostgres ? 'postgresql' : 'sqlite',
      connected: true
    }
  } catch (error) {
    return {
      type: 'unknown' as any,
      connected: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

export default getCommunityDatabase