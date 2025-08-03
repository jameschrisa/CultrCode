// Add this to your Clerk webhook to automatically make users premium
// File: src/app/api/webhooks/clerk/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Webhook } from 'svix'
import { clerkClient } from '@clerk/nextjs/server'

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  if (!webhookSecret) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get headers
  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', { status: 400 })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(webhookSecret)
  let evt

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', { status: 400 })
  }

  const eventType = evt.type
  
  switch (eventType) {
    case 'user.created':
      // Automatically make new users premium for testing
      const newUser = evt.data
      console.log('New user created:', newUser.id)
      
      try {
        await clerkClient.users.updateUser(newUser.id, {
          publicMetadata: {
            subscriptionTier: 'premium',
            // Add other metadata as needed
          }
        })
        console.log(`✅ User ${newUser.id} automatically set to premium`)
      } catch (error) {
        console.error('Error updating user metadata:', error)
      }
      
      break
      
    default:
      console.log(`Unhandled webhook event: ${eventType}`)
  }

  return NextResponse.json({ success: true })
}