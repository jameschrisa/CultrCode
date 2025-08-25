import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getCommunityDatabase } from '@/lib/database'

// GET /api/admin/notifications - Get all notifications (admin only)
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isAdmin = await checkIfUserIsAdmin(userId)
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const db = await getCommunityDatabase()
    const notifications = await db.getAllNotifications()
    
    return NextResponse.json(notifications)
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function checkIfUserIsAdmin(userId: string): Promise<boolean> {
  const adminUsers = process.env.ADMIN_USER_IDS?.split(',') || []
  return adminUsers.includes(userId)
}