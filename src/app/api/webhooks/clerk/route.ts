import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Webhook } from 'svix'

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

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(webhookSecret)

  let evt

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', {
      status: 400,
    })
  }

  // Handle the webhook
  const eventType = (evt as any).type
  
  console.log(`Webhook received: ${eventType}`)

  switch (eventType) {
    case 'user.created':
      // Handle user creation
      const newUser = (evt as any).data
      console.log('New user created:', newUser.id)
      
      // Here you can sync user data to your database if needed
      // For example, create user preferences, initialize data, etc.
      
      break
      
    case 'user.updated':
      // Handle user updates
      const updatedUser = (evt as any).data
      console.log('User updated:', updatedUser.id)
      
      // Sync any user metadata changes to your database
      
      break
      
    case 'user.deleted':
      // Handle user deletion
      const deletedUser = (evt as any).data
      console.log('User deleted:', deletedUser.id)
      
      // Clean up user data from your database
      
      break
      
    default:
      console.log(`Unhandled webhook event: ${eventType}`)
  }

  return NextResponse.json({ success: true })
}