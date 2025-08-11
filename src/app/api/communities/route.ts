// API Route for Community Data
// GET /api/communities - Fetch communities with optional filtering

import { NextRequest, NextResponse } from 'next/server'
import { getCommunityDatabase } from '@/lib/database'

// Mark this route as dynamic to prevent static generation
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('category')
    const search = searchParams.get('search')
    const trending = searchParams.get('trending')
    
    const db = await getCommunityDatabase()
    
    let communities
    
    if (trending === 'true') {
      communities = await db.getTrendingCommunities()
    } else if (search) {
      communities = await db.searchCommunities(search)
    } else if (categoryId) {
      communities = await db.getCommunitiesByCategory(parseInt(categoryId))
    } else {
      communities = await db.getAllCommunities()
    }
    
    return NextResponse.json({
      success: true,
      data: communities,
      count: communities.length
    })
    
  } catch (error) {
    console.error('Error fetching communities:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch communities',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_inputs, session_id } = body
    
    if (!user_inputs || !session_id) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: user_inputs and session_id' },
        { status: 400 }
      )
    }
    
    const db = await getCommunityDatabase()
    
    // Save user inputs
    const inputId = await db.saveUserInput(session_id, user_inputs)
    
    // Find best community matches
    const matches = await db.findBestCommunityMatches(inputId)
    
    return NextResponse.json({
      success: true,
      data: {
        input_id: inputId,
        matches: matches,
        count: matches.length
      }
    })
    
  } catch (error) {
    console.error('Error processing community matching:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process community matching',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}