import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// In a real app, this would be a database
// For now, we'll simulate with file storage or database
interface SavedReport {
  id: string
  userId: string
  segmentMatch: any
  userInputs?: any
  reportType: 'basic' | 'premium'
  createdAt: string
  title: string
  description: string
}

// GET /api/reports - Get all reports for authenticated user
export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const userCookie = cookieStore.get('auth_user')
    
    if (!userCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const user = JSON.parse(userCookie.value)
    const userId = user.id

    // For now, we'll still use localStorage approach but with proper user filtering
    // In production, replace this with actual database queries
    const searchParams = request.nextUrl.searchParams
    const includeStats = searchParams.get('include_stats') === 'true'

    // Return empty array for now - client will handle localStorage
    // This endpoint provides structure for future database integration
    const reports: SavedReport[] = []
    
    const response = {
      reports,
      stats: includeStats ? {
        totalReports: 0,
        premiumReports: 0,
        avgMatchScore: 0
      } : undefined
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 })
  }
}

// POST /api/reports - Save a new report
export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const userCookie = cookieStore.get('auth_user')
    
    if (!userCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const user = JSON.parse(userCookie.value)
    const userId = user.id

    const reportData = await request.json()

    // Validate required fields
    if (!reportData.segmentMatch || !reportData.reportType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create report object
    const savedReport: SavedReport = {
      id: Date.now().toString(),
      userId,
      segmentMatch: reportData.segmentMatch,
      userInputs: reportData.userInputs,
      reportType: reportData.reportType,
      createdAt: new Date().toISOString(),
      title: reportData.title || `${reportData.segmentMatch.segment.name} Analysis`,
      description: reportData.description || `Analysis report for ${reportData.segmentMatch.segment.name} segment`
    }

    // In production, save to database
    // For now, return the report object for client-side storage
    return NextResponse.json({ 
      success: true, 
      report: savedReport,
      message: 'Report saved successfully' 
    })

  } catch (error) {
    console.error('Error saving report:', error)
    return NextResponse.json({ error: 'Failed to save report' }, { status: 500 })
  }
}

// DELETE /api/reports/[id] - Delete a specific report
export async function DELETE(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const userCookie = cookieStore.get('auth_user')
    
    if (!userCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const user = JSON.parse(userCookie.value)
    const userId = user.id

    const url = new URL(request.url)
    const reportId = url.pathname.split('/').pop()

    if (!reportId) {
      return NextResponse.json({ error: 'Report ID required' }, { status: 400 })
    }

    // In production, delete from database with user ownership check
    // For now, return success for client-side handling
    return NextResponse.json({ 
      success: true, 
      message: 'Report deleted successfully' 
    })

  } catch (error) {
    console.error('Error deleting report:', error)
    return NextResponse.json({ error: 'Failed to delete report' }, { status: 500 })
  }
}