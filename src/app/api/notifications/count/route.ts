import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { getCommunityDatabase } from '@/lib/database'
import { getSubscriptionAccess } from '@/lib/subscription'

// GET /api/notifications/count - Get unread notification count
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth()
    
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
      return NextResponse.json({ count: 0 })
    }

    const count = await db.getUnreadNotificationCount(userId, userTier)
    
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error fetching notification count:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}