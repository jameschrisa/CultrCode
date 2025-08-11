// API Route for Segment-Community Matching
// GET /api/segments/[id]/communities - Get communities that match a specific segment

import { NextRequest, NextResponse } from 'next/server'
import { getCommunityDatabase } from '@/lib/database'

// Mark this route as dynamic to prevent static generation
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const segmentId = parseInt(params.id)
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    
    if (isNaN(segmentId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid segment ID' },
        { status: 400 }
      )
    }
    
    const db = await getCommunityDatabase()
    
    // Get segment details
    const segment = await db.getSegmentById(segmentId)
    
    if (!segment) {
      return NextResponse.json(
        { success: false, error: 'Segment not found' },
        { status: 404 }
      )
    }
    
    // Get best matching communities
    const matches = await db.getBestMatches(segmentId, limit)
    
    return NextResponse.json({
      success: true,
      data: {
        segment,
        community_matches: matches,
        count: matches.length
      }
    })
    
  } catch (error) {
    console.error('Error fetching segment communities:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch segment communities',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}