import { NextRequest, NextResponse } from 'next/server'

// Mark this route as dynamic to prevent build-time execution
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    // Dynamically import to prevent build-time execution
    const { auth } = await import('@clerk/nextjs/server')
    const { stripe, STRIPE_PRICE_IDS, PRODUCTS } = await import('@/lib/stripe')
    
    const { userId } = await auth()
    
    if (!userId) {
      console.error('Checkout error: No userId found')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { priceId, planName } = await req.json()
    
    console.log('Checkout request:', { userId, priceId, planName, availableProducts: Object.keys(PRODUCTS) })

    // Validate the plan exists
    if (!planName || !PRODUCTS[planName as keyof typeof PRODUCTS]) {
      console.error('Checkout error: Invalid plan name:', planName, 'Available:', Object.keys(PRODUCTS))
      return NextResponse.json({ 
        error: 'Invalid plan selected',
        debug: { planName, availableProducts: Object.keys(PRODUCTS) }
      }, { status: 400 })
    }
    
    // Validate the price ID
    if (!priceId) {
      console.error('Checkout error: No price ID provided')
      return NextResponse.json({ error: 'No price ID provided' }, { status: 400 })
    }

    const product = PRODUCTS[planName as keyof typeof PRODUCTS]
    console.log('Using product:', product)

    // Check environment variables
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      console.error('Checkout error: NEXT_PUBLIC_APP_URL not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }
    
    console.log('Creating Stripe session with:', {
      priceId,
      planName,
      appUrl: process.env.NEXT_PUBLIC_APP_URL,
      stripeConfigured: !!stripe
    })

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: undefined, // Let Stripe collect email
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success&plan=${planName}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?payment=cancelled`,
      metadata: {
        userId,
        planName,
        productName: product.name
      },
      subscription_data: {
        metadata: {
          userId,
          planName,
          productName: product.name
        }
      },
      allow_promotion_codes: true, // Enable discount codes
      billing_address_collection: 'required',
      payment_method_types: ['card'],
      invoice_creation: {
        enabled: true
      }
    })
    
    console.log('Stripe session created successfully:', { sessionId: session.id, url: session.url })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })

  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}