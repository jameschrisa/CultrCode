import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'

// Mark this route as dynamic
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { userId: currentUserId } = await auth()
    
    if (!currentUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get request body
    const { adminKey } = await req.json()
    
    // Simple admin key check (you can replace with proper admin auth)
    if (adminKey !== process.env.ADMIN_MIGRATION_KEY) {
      return NextResponse.json({ error: 'Invalid admin key' }, { status: 403 })
    }

    const client = await clerkClient()
    
    // Legacy to new tier name mapping
    const tierMapping: { [key: string]: string } = {
      'premium': 'curators',
      'enterprise': 'insiders',
      'community-explorer': 'scouts',
      'trend-navigator': 'curators'
    }

    // Get all users with legacy subscription tiers
    const userList = await client.users.getUserList()
    
    let migratedCount = 0
    const migrations: any[] = []

    for (const user of userList.data) {
      const metadata = user.publicMetadata as any
      const currentTier = metadata?.subscriptionTier

      if (currentTier && tierMapping[currentTier]) {
        const newTier = tierMapping[currentTier]
        
        // Update user metadata
        await client.users.updateUser(user.id, {
          publicMetadata: {
            ...metadata,
            subscriptionTier: newTier
          }
        })

        migratedCount++
        migrations.push({
          userId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          oldTier: currentTier,
          newTier: newTier
        })
        
        console.log(`Migrated user ${user.id} from ${currentTier} to ${newTier}`)
      }
    }

    return NextResponse.json({
      success: true,
      migratedCount,
      migrations
    })

  } catch (error: any) {
    console.error('Migration error:', error)
    return NextResponse.json({
      error: 'Migration failed',
      details: error.message
    }, { status: 500 })
  }
}