// API Route for Audience Segments
// GET /api/segments - Fetch audience segments and related communities

import { NextRequest, NextResponse } from 'next/server'
import { getCommunityDatabase } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeStats = searchParams.get('stats') === 'true'
    
    const db = await getCommunityDatabase()
    
    const segments = await db.getAllSegments()
    
    let response: any = {
      success: true,
      data: segments,
      count: segments.length
    }
    
    if (includeStats) {
      const stats = await db.getSegmentStats()
      response.stats = stats
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('Error fetching segments:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch segments',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}