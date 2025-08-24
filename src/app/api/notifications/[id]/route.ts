import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { getCommunityDatabase } from '@/lib/database'

// PATCH /api/notifications/[id] - Update notification (admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isAdmin = await checkIfUserIsAdmin(userId)
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const notificationId = parseInt(params.id)
    if (isNaN(notificationId)) {
      return NextResponse.json({ error: 'Invalid notification ID' }, { status: 400 })
    }

    const body = await request.json()
    const db = await getCommunityDatabase()
    
    await db.updateNotification(notificationId, body)

    return NextResponse.json({ message: 'Notification updated successfully' })
  } catch (error) {
    console.error('Error updating notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/notifications/[id] - Delete notification (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isAdmin = await checkIfUserIsAdmin(userId)
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const notificationId = parseInt(params.id)
    if (isNaN(notificationId)) {
      return NextResponse.json({ error: 'Invalid notification ID' }, { status: 400 })
    }

    const db = await getCommunityDatabase()
    await db.deleteNotification(notificationId)

    return NextResponse.json({ message: 'Notification deleted successfully' })
  } catch (error) {
    console.error('Error deleting notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function checkIfUserIsAdmin(userId: string): Promise<boolean> {
  const adminUsers = process.env.ADMIN_USER_IDS?.split(',') || []
  return adminUsers.includes(userId)
}