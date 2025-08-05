import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { clerkClient } from '@clerk/nextjs/server'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const headersList = headers()
    const signature = headersList.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId
        const planName = session.metadata?.planName

        if (userId && planName) {
          // Update Clerk user metadata with subscription info
          const client = await clerkClient()
          await client.users.updateUser(userId, {
            publicMetadata: {
              subscriptionTier: planName,
              subscriptionStatus: 'active',
              stripeCustomerId: session.customer,
              subscriptionId: session.subscription
            }
          })
          console.log(`✅ User ${userId} upgraded to ${planName}`)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        if (userId) {
          const status = subscription.status
          const client = await clerkClient()
          await client.users.updateUser(userId, {
            publicMetadata: {
              subscriptionStatus: status,
              subscriptionId: subscription.id
            }
          })
          console.log(`📝 Subscription updated for user ${userId}: ${status}`)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        if (userId) {
          // Downgrade user to free tier
          const client = await clerkClient()
          await client.users.updateUser(userId, {
            publicMetadata: {
              subscriptionTier: 'free',
              subscriptionStatus: 'cancelled',
              subscriptionId: null
            }
          })
          console.log(`❌ User ${userId} subscription cancelled`)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as any // Use any to bypass type checking
        const subscriptionId = invoice.subscription
        
        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(
            typeof subscriptionId === 'string' ? subscriptionId : subscriptionId.id
          )
          const userId = subscription.metadata?.userId

          if (userId) {
            // Mark as past due but don't immediately cancel
            const client = await clerkClient()
            await client.users.updateUser(userId, {
              publicMetadata: {
                subscriptionStatus: 'past_due'
              }
            })
            console.log(`⚠️ Payment failed for user ${userId}`)
          }
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Stripe webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}