// CultrCode Database Connection and Utilities
// SQLite database integration for micro-communities registry

import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import path from 'path'
import fs from 'fs'

export interface Community {
  id: number
  category_id: number
  name: string
  description: string
  examples: string[] // JSON parsed
  size_estimate: number
  engagement_level: 'low' | 'medium' | 'high' | 'very_high'
  growth_trend: 'declining' | 'stable' | 'growing' | 'exploding'
  platform_presence: string[] // JSON parsed
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  description: string
  roman_numeral: string
  created_at: string
  updated_at: string
}

export interface AudienceSegment {
  id: number
  name: string
  description: string
  demographics: any // JSON parsed
  psychographics: any // JSON parsed
  behavioral_patterns: any // JSON parsed
  size_percentage: number
  created_at: string
  updated_at: string
}

export interface CommunitySegmentMapping {
  id: number
  community_id: number
  segment_id: number
  affinity_score: number
  overlap_percentage: number
  created_at: string
}

export interface TrendingTopic {
  id: number
  topic_name: string
  related_community_id?: number
  trend_score: number
  platforms: string[] // JSON parsed
  keywords: string[] // JSON parsed
  estimated_reach: number
  trend_start_date: string
  status: 'emerging' | 'growing' | 'peak' | 'declining'
  created_at: string
  updated_at: string
}

export interface CommunityOverview {
  id: number
  name: string
  description: string
  category_name: string
  size_estimate: number
  engagement_level: string
  growth_trend: string
  related_segments: number
  active_platforms: number
  brand_affinities: number
}

export interface Notification {
  id: number
  title: string
  message: string
  type: 'trend' | 'community' | 'segment' | 'system'
  target_audience: 'all' | 'free' | 'community_explorer' | 'cultural_analyst' | 'enterprise'
  priority: 'low' | 'medium' | 'high'
  is_active: boolean
  created_by: string // Admin user ID
  created_at: string
  expires_at?: string
  metadata?: any // JSON parsed - additional context data
}

export interface UserNotification {
  id: number
  notification_id: number
  user_id: string
  is_read: boolean
  read_at?: string
  created_at: string
}

export interface SegmentCommunityMatch {
  segment_name: string
  community_name: string
  category_name: string
  affinity_score: number
  overlap_percentage: number
  engagement_level: string
  growth_trend: string
}

class CommunityDatabase {
  private db: Database | null = null
  private dbPath: string

  constructor() {
    this.dbPath = path.join(process.cwd(), 'database', 'communities.db')
  }

  async initialize(): Promise<void> {
    try {
      // Ensure database directory exists
      const dbDir = path.dirname(this.dbPath)
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true })
      }

      // Open database connection
      this.db = await open({
        filename: this.dbPath,
        driver: sqlite3.Database
      })

      // Enable foreign keys
      await this.db.exec('PRAGMA foreign_keys = ON')

      // Check if database is already initialized
      const tables = await this.db.all(
        "SELECT name FROM sqlite_master WHERE type='table'"
      )

      if (tables.length === 0) {
        await this.createTables()
        await this.seedData()
      }

      console.log('Community database initialized successfully')
    } catch (error) {
      console.error('Failed to initialize community database:', error)
      throw error
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    const schemaPath = path.join(process.cwd(), 'database', 'schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    await this.db.exec(schema)
    console.log('Database tables created successfully')
  }

  private async seedData(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    const seedPath = path.join(process.cwd(), 'database', 'seed_data.sql')
    const seedData = fs.readFileSync(seedPath, 'utf8')
    
    await this.db.exec(seedData)
    console.log('Database seeded successfully')
  }

  // Community queries
  async getAllCommunities(): Promise<CommunityOverview[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all('SELECT * FROM community_overview ORDER BY name')
  }

  async getCommunitiesByCategory(categoryId: number): Promise<Community[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    const communities = await this.db.all(
      'SELECT * FROM communities WHERE category_id = ? ORDER BY name',
      [categoryId]
    )

    return communities.map(this.parseCommunityJson)
  }

  async getCommunityById(id: number): Promise<Community | null> {
    if (!this.db) throw new Error('Database not initialized')
    
    const community = await this.db.get(
      'SELECT * FROM communities WHERE id = ?',
      [id]
    )

    return community ? this.parseCommunityJson(community) : null
  }

  async searchCommunities(query: string): Promise<Community[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    const communities = await this.db.all(`
      SELECT DISTINCT c.* FROM communities c
      LEFT JOIN community_tags ct ON c.id = ct.community_id
      WHERE c.name LIKE ? 
         OR c.description LIKE ? 
         OR c.examples LIKE ?
         OR ct.tag LIKE ?
      ORDER BY c.name
    `, [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`])

    return communities.map(this.parseCommunityJson)
  }

  // Category queries
  async getAllCategories(): Promise<Category[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all('SELECT * FROM categories ORDER BY id')
  }

  async getCategoryById(id: number): Promise<Category | null> {
    if (!this.db) throw new Error('Database not initialized')
    
    const result = await this.db.get('SELECT * FROM categories WHERE id = ?', [id])
    return result || null
  }

  // Segment queries
  async getAllSegments(): Promise<AudienceSegment[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    const segments = await this.db.all('SELECT * FROM audience_segments ORDER BY name')
    return segments.map(this.parseSegmentJson)
  }

  async getSegmentById(id: number): Promise<AudienceSegment | null> {
    if (!this.db) throw new Error('Database not initialized')
    
    const segment = await this.db.get('SELECT * FROM audience_segments WHERE id = ?', [id])
    return segment ? this.parseSegmentJson(segment) : null
  }

  // Community-Segment mapping queries
  async getCommunitiesForSegment(segmentId: number): Promise<SegmentCommunityMatch[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all(`
      SELECT * FROM segment_community_matches 
      WHERE segment_name = (SELECT name FROM audience_segments WHERE id = ?)
      ORDER BY affinity_score DESC
    `, [segmentId])
  }

  async getSegmentsForCommunity(communityId: number): Promise<SegmentCommunityMatch[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all(`
      SELECT * FROM segment_community_matches 
      WHERE community_name = (SELECT name FROM communities WHERE id = ?)
      ORDER BY affinity_score DESC
    `, [communityId])
  }

  async getBestMatches(segmentId: number, limit: number = 10): Promise<SegmentCommunityMatch[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all(`
      SELECT scm.* FROM segment_community_matches scm
      JOIN audience_segments s ON scm.segment_name = s.name
      WHERE s.id = ?
      ORDER BY scm.affinity_score DESC
      LIMIT ?
    `, [segmentId, limit])
  }

  // Trending topics queries
  async getTrendingTopics(status?: string): Promise<TrendingTopic[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    let query = 'SELECT * FROM trending_topics'
    let params: any[] = []
    
    if (status) {
      query += ' WHERE status = ?'
      params.push(status)
    }
    
    query += ' ORDER BY trend_score DESC'
    
    const topics = await this.db.all(query, params)
    return topics.map(this.parseTrendingTopicJson)
  }

  async getTrendingCommunities(): Promise<CommunityOverview[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    return await this.db.all('SELECT * FROM trending_communities')
  }

  // Analytics queries
  async getCommunityStats() {
    if (!this.db) throw new Error('Database not initialized')
    
    const stats = await this.db.get(`
      SELECT 
        COUNT(*) as total_communities,
        COUNT(DISTINCT category_id) as total_categories,
        AVG(size_estimate) as avg_community_size,
        SUM(CASE WHEN growth_trend = 'exploding' THEN 1 ELSE 0 END) as exploding_communities,
        SUM(CASE WHEN growth_trend = 'growing' THEN 1 ELSE 0 END) as growing_communities,
        SUM(CASE WHEN engagement_level = 'very_high' THEN 1 ELSE 0 END) as high_engagement_communities
      FROM communities
    `)

    return stats
  }

  async getSegmentStats() {
    if (!this.db) throw new Error('Database not initialized')
    
    const stats = await this.db.get(`
      SELECT 
        COUNT(*) as total_segments,
        AVG(size_percentage) as avg_segment_size,
        SUM(size_percentage) as total_coverage
      FROM audience_segments
    `)

    return stats
  }

  // User segmentation input handling
  async saveUserInput(sessionId: string, inputs: any): Promise<number> {
    if (!this.db) throw new Error('Database not initialized')
    
    const result = await this.db.run(`
      INSERT INTO user_segmentation_inputs 
      (session_id, age_range, gender, income_range, education_level, location, 
       interests, buying_behavior, media_consumption, values, goals, challenges)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      sessionId,
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
      JSON.stringify(inputs.challenges || [])
    ])

    return result.lastID!
  }

  async findBestCommunityMatches(inputId: number): Promise<SegmentCommunityMatch[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    // This would implement the matching algorithm
    // For now, return top communities based on general popularity
    return await this.db.all(`
      SELECT scm.* FROM segment_community_matches scm
      JOIN communities c ON scm.community_name = c.name
      WHERE c.engagement_level IN ('high', 'very_high')
        AND c.growth_trend IN ('growing', 'exploding')
      ORDER BY scm.affinity_score DESC
      LIMIT 15
    `)
  }

  // Notification queries
  async createNotification(notification: Omit<Notification, 'id' | 'created_at'>): Promise<number> {
    if (!this.db) throw new Error('Database not initialized')
    
    const result = await this.db.run(`
      INSERT INTO notifications 
      (title, message, type, target_audience, priority, is_active, created_by, expires_at, metadata)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      notification.title,
      notification.message,
      notification.type,
      notification.target_audience,
      notification.priority,
      notification.is_active,
      notification.created_by,
      notification.expires_at,
      notification.metadata ? JSON.stringify(notification.metadata) : null
    ])

    return result.lastID!
  }

  async getNotificationsForUser(userId: string, userTier: string): Promise<(Notification & { is_read: boolean })[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    // Map user tiers to target audiences
    const tierMapping: Record<string, string> = {
      'Free': 'free',
      'Community Explorer': 'community_explorer', 
      'Cultural Analyst': 'cultural_analyst',
      'Enterprise': 'enterprise'
    }
    
    const targetAudience = tierMapping[userTier] || 'free'
    
    const notifications = await this.db.all(`
      SELECT 
        n.*,
        COALESCE(un.is_read, 0) as is_read,
        un.read_at
      FROM notifications n
      LEFT JOIN user_notifications un ON n.id = un.notification_id AND un.user_id = ?
      WHERE n.is_active = 1 
        AND (n.target_audience = 'all' OR n.target_audience = ?)
        AND (n.expires_at IS NULL OR n.expires_at > datetime('now'))
      ORDER BY n.priority DESC, n.created_at DESC
    `, [userId, targetAudience])

    return notifications.map(this.parseNotificationJson)
  }

  async markNotificationAsRead(userId: string, notificationId: number): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    
    await this.db.run(`
      INSERT OR REPLACE INTO user_notifications 
      (notification_id, user_id, is_read, read_at)
      VALUES (?, ?, 1, datetime('now'))
    `, [notificationId, userId])
  }

  async markAllNotificationsAsRead(userId: string): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    
    await this.db.run(`
      INSERT OR REPLACE INTO user_notifications 
      (notification_id, user_id, is_read, read_at)
      SELECT n.id, ?, 1, datetime('now')
      FROM notifications n
      LEFT JOIN user_notifications un ON n.id = un.notification_id AND un.user_id = ?
      WHERE n.is_active = 1 
        AND (n.expires_at IS NULL OR n.expires_at > datetime('now'))
        AND (un.is_read IS NULL OR un.is_read = 0)
    `, [userId, userId])
  }

  async getUnreadNotificationCount(userId: string, userTier: string): Promise<number> {
    if (!this.db) throw new Error('Database not initialized')
    
    const tierMapping: Record<string, string> = {
      'Free': 'free',
      'Community Explorer': 'community_explorer', 
      'Cultural Analyst': 'cultural_analyst',
      'Enterprise': 'enterprise'
    }
    
    const targetAudience = tierMapping[userTier] || 'free'
    
    const result = await this.db.get(`
      SELECT COUNT(*) as count
      FROM notifications n
      LEFT JOIN user_notifications un ON n.id = un.notification_id AND un.user_id = ?
      WHERE n.is_active = 1 
        AND (n.target_audience = 'all' OR n.target_audience = ?)
        AND (n.expires_at IS NULL OR n.expires_at > datetime('now'))
        AND (un.is_read IS NULL OR un.is_read = 0)
    `, [userId, targetAudience])

    return result?.count || 0
  }

  // Admin notification management
  async getAllNotifications(): Promise<Notification[]> {
    if (!this.db) throw new Error('Database not initialized')
    
    const notifications = await this.db.all(`
      SELECT * FROM notifications 
      ORDER BY created_at DESC
    `)

    return notifications.map(this.parseNotificationJson)
  }

  async updateNotification(id: number, updates: Partial<Notification>): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    
    const setClause = Object.keys(updates)
      .filter(key => key !== 'id' && key !== 'created_at')
      .map(key => `${key} = ?`)
      .join(', ')
    
    const values = Object.entries(updates)
      .filter(([key]) => key !== 'id' && key !== 'created_at')
      .map(([key, value]) => {
        if (key === 'metadata' && value) {
          return JSON.stringify(value)
        }
        return value
      })
    
    await this.db.run(`
      UPDATE notifications 
      SET ${setClause}
      WHERE id = ?
    `, [...values, id])
  }

  async deleteNotification(id: number): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    
    await this.db.run('DELETE FROM notifications WHERE id = ?', [id])
    await this.db.run('DELETE FROM user_notifications WHERE notification_id = ?', [id])
  }

  // Helper methods for JSON parsing
  private parseNotificationJson(notification: any): Notification & { is_read: boolean } {
    return {
      ...notification,
      metadata: notification.metadata ? JSON.parse(notification.metadata) : null,
      is_read: Boolean(notification.is_read)
    }
  }

  private parseCommunityJson(community: any): Community {
    return {
      ...community,
      examples: JSON.parse(community.examples || '[]'),
      platform_presence: JSON.parse(community.platform_presence || '[]')
    }
  }

  private parseSegmentJson(segment: any): AudienceSegment {
    return {
      ...segment,
      demographics: JSON.parse(segment.demographics || '{}'),
      psychographics: JSON.parse(segment.psychographics || '{}'),
      behavioral_patterns: JSON.parse(segment.behavioral_patterns || '{}')
    }
  }

  private parseTrendingTopicJson(topic: any): TrendingTopic {
    return {
      ...topic,
      platforms: JSON.parse(topic.platforms || '[]'),
      keywords: JSON.parse(topic.keywords || '[]')
    }
  }

  async close(): Promise<void> {
    if (this.db) {
      await this.db.close()
      this.db = null
    }
  }
}

// Singleton instance
let dbInstance: CommunityDatabase | null = null

export async function getCommunityDatabase(): Promise<CommunityDatabase> {
  if (!dbInstance) {
    dbInstance = new CommunityDatabase()
    await dbInstance.initialize()
  }
  return dbInstance
}

export default CommunityDatabase