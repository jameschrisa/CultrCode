import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { getCommunityDatabase } from '@/lib/database'

// POST /api/notifications/mark-read - Mark notification(s) as read
export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { notificationId, markAll } = body

    const db = await getCommunityDatabase()

    if (markAll) {
      await db.markAllNotificationsAsRead(userId)
      return NextResponse.json({ message: 'All notifications marked as read' })
    }

    if (!notificationId) {
      return NextResponse.json({ 
        error: 'Either notificationId or markAll must be provided' 
      }, { status: 400 })
    }

    await db.markNotificationAsRead(userId, notificationId)
    return NextResponse.json({ message: 'Notification marked as read' })
    
  } catch (error) {
    console.error('Error marking notification as read:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}