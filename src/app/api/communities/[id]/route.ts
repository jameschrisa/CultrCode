// API Route for Individual Community Data
// GET /api/communities/[id] - Fetch specific community details

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
    const communityId = parseInt(params.id)
    
    if (isNaN(communityId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid community ID' },
        { status: 400 }
      )
    }
    
    const db = await getCommunityDatabase()
    
    // Get community details
    const community = await db.getCommunityById(communityId)
    
    if (!community) {
      return NextResponse.json(
        { success: false, error: 'Community not found' },
        { status: 404 }
      )
    }
    
    // Get related segments
    const relatedSegments = await db.getSegmentsForCommunity(communityId)
    
    return NextResponse.json({
      success: true,
      data: {
        community,
        related_segments: relatedSegments
      }
    })
    
  } catch (error) {
    console.error('Error fetching community details:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch community details',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}