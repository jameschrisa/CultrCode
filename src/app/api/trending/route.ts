// API Route for Trending Topics and Communities
// GET /api/trending - Fetch trending topics and communities

import { NextRequest, NextResponse } from 'next/server'
import { getCommunityDatabase } from '@/lib/database'

// Mark this route as dynamic to prevent static generation
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') // emerging, growing, peak, declining
    const type = searchParams.get('type') // topics, communities, or both
    
    const db = await getCommunityDatabase()
    
    let response: any = {
      success: true,
      data: {}
    }
    
    if (type === 'topics' || !type) {
      const topics = await db.getTrendingTopics(status || undefined)
      response.data.trending_topics = topics
    }
    
    if (type === 'communities' || !type) {
      const communities = await db.getTrendingCommunities()
      response.data.trending_communities = communities
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('Error fetching trending data:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch trending data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}