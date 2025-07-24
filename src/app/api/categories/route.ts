// API Route for Community Categories
// GET /api/categories - Fetch all community categories

import { NextRequest, NextResponse } from 'next/server'
import { getCommunityDatabase } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeStats = searchParams.get('stats') === 'true'
    
    const db = await getCommunityDatabase()
    
    const categories = await db.getAllCategories()
    
    let response: any = {
      success: true,
      data: categories,
      count: categories.length
    }
    
    if (includeStats) {
      const stats = await db.getCommunityStats()
      response.stats = stats
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch categories',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}