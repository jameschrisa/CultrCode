// CultrCode PostgreSQL Database Connection
// Production-ready database layer for Vercel Postgres

import { Pool, PoolClient } from 'pg'

// Database interfaces (keeping the same structure as SQLite version)
export interface Community {
  id: number
  uuid: string
  category_id: number
  name: string
  description: string
  examples: string[] // JSON parsed
  size_estimate: number
  engagement_level: 'low' | 'medium' | 'high' | 'very_high'
  growth_trend: 'declining' | 'stable' | 'growing' | 'exploding'
  platform_presence: string[] // JSON parsed
  metadata: any
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  uuid: string
  name: string
  description: string
  roman_numeral: string
  created_at: string
  updated_at: string
}

export interface AudienceSegment {
  id: number
  uuid: string
  name: string
  description: string
  demographics: any // JSON parsed
  psychographics: any // JSON parsed
  behavioral_patterns: any // JSON parsed
  size_percentage: number
  metadata: any
  created_at: string
  updated_at: string
}

export interface CommunitySegmentMapping {
  id: number
  uuid: string
  community_id: number
  segment_id: number
  affinity_score: number
  overlap_percentage: number
  confidence_level: 'low' | 'medium' | 'high'
  last_calculated: string
  created_at: string
}

export interface TrendingTopic {
  id: number
  uuid: string
  topic_name: string
  related_community_id?: number
  trend_score: number
  platforms: string[] // JSON parsed
  keywords: string[] // JSON parsed
  estimated_reach: number
  trend_start_date: string
  status: 'emerging' | 'growing' | 'peak' | 'declining'
  metadata: any
  created_at: string
  updated_at: string
}

export interface CommunityOverview {
  id: number
  uuid: string
  name: string
  description: string
  category_name: string
  size_estimate: number
  engagement_level: string
  growth_trend: string
  related_segments: number
  active_platforms: number
  brand_affinities: number
  created_at: string
  updated_at: string
}

export interface SegmentCommunityMatch {
  segment_name: string
  community_name: string
  category_name: string
  affinity_score: number
  overlap_percentage: number
  engagement_level: string
  growth_trend: string
  confidence_level: string
  last_calculated: string
}

export interface Persona {
  id: number
  uuid: string
  user_id: string
  name: string
  description: string
  demographics: any
  psychographics: any
  interests: string[]
  goals: string[]
  challenges: string[]
  preferred_communities: number[]
  avatar_url?: string
  is_active: boolean
  metadata: any
  created_at: string
  updated_at: string
}

class PostgresCommunityDatabase {
  private pool: Pool | null = null
  private isInitialized = false

  constructor() {
    this.initializePool()
  }

  private initializePool(): void {
    // Use Vercel Postgres connection string or fallback to environment variables
    const connectionString = process.env.POSTGRES_URL || 
      process.env.DATABASE_URL ||
      `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DATABASE}`

    if (!connectionString || connectionString.includes('undefined')) {
      console.warn('PostgreSQL connection string not properly configured, falling back to local SQLite')
      return
    }

    this.pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    })

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err)
    })
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return

    if (!this.pool) {
      throw new Error('Database pool not initialized. Check your PostgreSQL configuration.')
    }

    try {
      // Test connection
      const client = await this.pool.connect()
      
      // Check if tables exist
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'categories'
      `)

      if (tablesResult.rows.length === 0) {
        console.log('Database tables not found. Please run the migration script first.')
        console.log('Run: npm run db:migrate')
      }

      client.release()
      this.isInitialized = true
      console.log('PostgreSQL database connection established successfully')
    } catch (error) {
      console.error('Failed to initialize PostgreSQL database:', error)
      throw error
    }
  }

  private async getClient(): Promise<PoolClient> {
    if (!this.pool) {
      throw new Error('Database pool not initialized')
    }
    
    await this.initialize()
    return this.pool.connect()
  }

  // Community queries
  async getAllCommunities(): Promise<CommunityOverview[]> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM community_overview ORDER BY name')
      return result.rows
    } finally {
      client.release()
    }
  }

  async getCommunitiesByCategory(categoryId: number): Promise<Community[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(
        'SELECT * FROM communities WHERE category_id = $1 ORDER BY name',
        [categoryId]
      )
      return result.rows.map(this.parseCommunityJson)
    } finally {
      client.release()
    }
  }

  async getCommunityById(id: number): Promise<Community | null> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM communities WHERE id = $1', [id])
      return result.rows.length > 0 ? this.parseCommunityJson(result.rows[0]) : null
    } finally {
      client.release()
    }
  }

  async getCommunityByUuid(uuid: string): Promise<Community | null> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM communities WHERE uuid = $1', [uuid])
      return result.rows.length > 0 ? this.parseCommunityJson(result.rows[0]) : null
    } finally {
      client.release()
    }
  }

  async searchCommunities(query: string): Promise<Community[]> {
    const client = await this.getClient()
    try {
      const searchQuery = `%${query}%`
      const result = await client.query(`
        SELECT DISTINCT c.* FROM communities c
        LEFT JOIN community_tags ct ON c.id = ct.community_id
        WHERE c.name ILIKE $1 
           OR c.description ILIKE $1 
           OR c.examples::text ILIKE $1
           OR ct.tag ILIKE $1
        ORDER BY c.name
      `, [searchQuery])

      return result.rows.map(this.parseCommunityJson)
    } finally {
      client.release()
    }
  }

  // Category queries
  async getAllCategories(): Promise<Category[]> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM categories ORDER BY id')
      return result.rows
    } finally {
      client.release()
    }
  }

  async getCategoryById(id: number): Promise<Category | null> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM categories WHERE id = $1', [id])
      return result.rows.length > 0 ? result.rows[0] : null
    } finally {
      client.release()
    }
  }

  // Segment queries
  async getAllSegments(): Promise<AudienceSegment[]> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM audience_segments ORDER BY name')
      return result.rows.map(this.parseSegmentJson)
    } finally {
      client.release()
    }
  }

  async getSegmentById(id: number): Promise<AudienceSegment | null> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM audience_segments WHERE id = $1', [id])
      return result.rows.length > 0 ? this.parseSegmentJson(result.rows[0]) : null
    } finally {
      client.release()
    }
  }

  // Community-Segment mapping queries
  async getCommunitiesForSegment(segmentId: number): Promise<SegmentCommunityMatch[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT * FROM segment_community_matches 
        WHERE segment_name = (SELECT name FROM audience_segments WHERE id = $1)
        ORDER BY affinity_score DESC
      `, [segmentId])
      return result.rows
    } finally {
      client.release()
    }
  }

  async getSegmentsForCommunity(communityId: number): Promise<SegmentCommunityMatch[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT * FROM segment_community_matches 
        WHERE community_name = (SELECT name FROM communities WHERE id = $1)
        ORDER BY affinity_score DESC
      `, [communityId])
      return result.rows
    } finally {
      client.release()
    }
  }

  async getBestMatches(segmentId: number, limit: number = 10): Promise<SegmentCommunityMatch[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT scm.* FROM segment_community_matches scm
        JOIN audience_segments s ON scm.segment_name = s.name
        WHERE s.id = $1
        ORDER BY scm.affinity_score DESC, scm.overlap_percentage DESC
        LIMIT $2
      `, [segmentId, limit])
      return result.rows
    } finally {
      client.release()
    }
  }

  // Trending topics queries
  async getTrendingTopics(status?: string): Promise<TrendingTopic[]> {
    const client = await this.getClient()
    try {
      let query = 'SELECT * FROM trending_topics'
      let params: any[] = []
      
      if (status) {
        query += ' WHERE status = $1'
        params.push(status)
      }
      
      query += ' ORDER BY trend_score DESC'
      
      const result = await client.query(query, params)
      return result.rows.map(this.parseTrendingTopicJson)
    } finally {
      client.release()
    }
  }

  async getTrendingCommunities(): Promise<CommunityOverview[]> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM trending_communities')
      return result.rows
    } finally {
      client.release()
    }
  }

  // Persona queries
  async getPersonasByUserId(userId: string): Promise<Persona[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(
        'SELECT * FROM personas WHERE user_id = $1 AND is_active = true ORDER BY created_at DESC',
        [userId]
      )
      return result.rows.map(this.parsePersonaJson)
    } finally {
      client.release()
    }
  }

  async getPersonaById(id: number): Promise<Persona | null> {
    const client = await this.getClient()
    try {
      const result = await client.query('SELECT * FROM personas WHERE id = $1', [id])
      return result.rows.length > 0 ? this.parsePersonaJson(result.rows[0]) : null
    } finally {
      client.release()
    }
  }

  async createPersona(persona: Omit<Persona, 'id' | 'uuid' | 'created_at' | 'updated_at'>): Promise<Persona> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        INSERT INTO personas 
        (user_id, name, description, demographics, psychographics, interests, goals, challenges, preferred_communities, avatar_url, metadata)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
      `, [
        persona.user_id,
        persona.name,
        persona.description,
        JSON.stringify(persona.demographics),
        JSON.stringify(persona.psychographics),
        JSON.stringify(persona.interests),
        JSON.stringify(persona.goals),
        JSON.stringify(persona.challenges),
        JSON.stringify(persona.preferred_communities),
        persona.avatar_url,
        JSON.stringify(persona.metadata)
      ])
      return this.parsePersonaJson(result.rows[0])
    } finally {
      client.release()
    }
  }

  // Analytics queries
  async getCommunityStats() {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT 
          COUNT(*) as total_communities,
          COUNT(DISTINCT category_id) as total_categories,
          AVG(size_estimate) as avg_community_size,
          SUM(CASE WHEN growth_trend = 'exploding' THEN 1 ELSE 0 END) as exploding_communities,
          SUM(CASE WHEN growth_trend = 'growing' THEN 1 ELSE 0 END) as growing_communities,
          SUM(CASE WHEN engagement_level = 'very_high' THEN 1 ELSE 0 END) as high_engagement_communities
        FROM communities
      `)
      return result.rows[0]
    } finally {
      client.release()
    }
  }

  async getSegmentStats() {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT 
          COUNT(*) as total_segments,
          AVG(size_percentage) as avg_segment_size,
          SUM(size_percentage) as total_coverage
        FROM audience_segments
      `)
      return result.rows[0]
    } finally {
      client.release()
    }
  }

  // User segmentation input handling
  async saveUserInput(sessionId: string, inputs: any, userId?: string): Promise<number> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        INSERT INTO user_segmentation_inputs 
        (session_id, user_id, age_range, gender, income_range, education_level, location, 
         interests, buying_behavior, media_consumption, values, goals, challenges, analysis_results)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id
      `, [
        sessionId,
        userId || null,
        inputs.age_range,
        inputs.gender,
        inputs.income_range,
        inputs.education_level,
        inputs.location,
        JSON.stringify(inputs.interests || []),
        JSON.stringify(inputs.buying_behavior || {}),
        JSON.stringify(inputs.media_consumption || {}),
        JSON.stringify(inputs.values || []),
        JSON.stringify(inputs.goals || []),
        JSON.stringify(inputs.challenges || []),
        JSON.stringify(inputs.analysis_results || {})
      ])
      return result.rows[0].id
    } finally {
      client.release()
    }
  }

  async findBestCommunityMatches(inputId: number): Promise<SegmentCommunityMatch[]> {
    const client = await this.getClient()
    try {
      const result = await client.query(`
        SELECT scm.* FROM segment_community_matches scm
        JOIN communities c ON scm.community_name = c.name
        WHERE c.engagement_level IN ('high', 'very_high')
          AND c.growth_trend IN ('growing', 'exploding')
        ORDER BY scm.affinity_score DESC, scm.overlap_percentage DESC
        LIMIT 15
      `)
      return result.rows
    } finally {
      client.release()
    }
  }

  // Helper methods for JSON parsing
  private parseCommunityJson(community: any): Community {
    return {
      ...community,
      examples: community.examples || [],
      platform_presence: community.platform_presence || [],
      metadata: community.metadata || {}
    }
  }

  private parseSegmentJson(segment: any): AudienceSegment {
    return {
      ...segment,
      demographics: segment.demographics || {},
      psychographics: segment.psychographics || {},
      behavioral_patterns: segment.behavioral_patterns || {},
      metadata: segment.metadata || {}
    }
  }

  private parseTrendingTopicJson(topic: any): TrendingTopic {
    return {
      ...topic,
      platforms: topic.platforms || [],
      keywords: topic.keywords || [],
      metadata: topic.metadata || {}
    }
  }

  private parsePersonaJson(persona: any): Persona {
    return {
      ...persona,
      demographics: persona.demographics || {},
      psychographics: persona.psychographics || {},
      interests: persona.interests || [],
      goals: persona.goals || [],
      challenges: persona.challenges || [],
      preferred_communities: persona.preferred_communities || [],
      metadata: persona.metadata || {}
    }
  }

  async close(): Promise<void> {
    if (this.pool) {
      await this.pool.end()
      this.pool = null
      this.isInitialized = false
    }
  }
}

// Singleton instance
let dbInstance: PostgresCommunityDatabase | null = null

export async function getCommunityDatabase(): Promise<PostgresCommunityDatabase> {
  if (!dbInstance) {
    dbInstance = new PostgresCommunityDatabase()
    await dbInstance.initialize()
  }
  return dbInstance
}

export default PostgresCommunityDatabase