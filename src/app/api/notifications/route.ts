import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getCommunityDatabase } from '@/lib/database'
import { getSubscriptionAccess } from '@/lib/subscription'

// GET /api/notifications - Get notifications for current user
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const db = await getCommunityDatabase()
    
    // Get user's subscription info to determine tier
    const user = { id: userId } // This would normally come from Clerk
    const subscriptionAccess = getSubscriptionAccess(user as any)
    const userTier = subscriptionAccess?.displayName || 'Free'
    
    // Only show notifications to paid users
    if (userTier === 'Free') {
      return NextResponse.json([])
    }

    const notifications = await db.getNotificationsForUser(userId, userTier)
    
    return NextResponse.json(notifications)
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/notifications - Create new notification (admin only)
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin (you'd implement proper admin check here)
    const isAdmin = await checkIfUserIsAdmin(userId)
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const body = await request.json()
    const { title, message, type, target_audience, priority, expires_at, metadata } = body

    if (!title || !message || !type || !target_audience) {
      return NextResponse.json({ 
        error: 'Missing required fields: title, message, type, target_audience' 
      }, { status: 400 })
    }

    const db = await getCommunityDatabase()
    
    const notificationId = await db.createNotification({
      title,
      message,
      type,
      target_audience,
      priority: priority || 'medium',
      is_active: true,
      created_by: userId,
      expires_at,
      metadata
    })

    return NextResponse.json({ 
      id: notificationId, 
      message: 'Notification created successfully' 
    })
  } catch (error) {
    console.error('Error creating notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Helper function to check admin status
async function checkIfUserIsAdmin(userId: string): Promise<boolean> {
  // Implementation depends on your admin management system
  // This could check a database table, environment variables, or external service
  const adminUsers = process.env.ADMIN_USER_IDS?.split(',') || []
  return adminUsers.includes(userId)
}