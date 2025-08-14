import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'

// Mark this route as dynamic
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clerkClient()
    
    // Get current user metadata
    const user = await client.users.getUser(userId)
    const metadata = user.publicMetadata as any
    const currentTier = metadata?.subscriptionTier

    console.log('Current user subscription tier:', currentTier)

    // Legacy to new tier name mapping
    const tierMapping: { [key: string]: string } = {
      'premium': 'curators',
      'enterprise': 'insiders',
      'community-explorer': 'scouts',
      'trend-navigator': 'curators'
    }

    if (currentTier && tierMapping[currentTier]) {
      const newTier = tierMapping[currentTier]
      
      // Update user metadata
      await client.users.updateUser(userId, {
        publicMetadata: {
          ...metadata,
          subscriptionTier: newTier
        }
      })

      console.log(`Updated user ${userId} from ${currentTier} to ${newTier}`)
      
      return NextResponse.json({
        success: true,
        updated: true,
        oldTier: currentTier,
        newTier: newTier,
        message: `Successfully updated subscription tier from ${currentTier} to ${newTier}`
      })
    } else {
      return NextResponse.json({
        success: true,
        updated: false,
        currentTier: currentTier,
        message: 'No migration needed - tier is already up to date'
      })
    }

  } catch (error: any) {
    console.error('Fix subscription error:', error)
    return NextResponse.json({
      error: 'Failed to fix subscription',
      details: error.message
    }, { status: 500 })
  }
}