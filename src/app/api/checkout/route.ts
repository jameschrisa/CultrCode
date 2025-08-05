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
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { priceId, planName } = await req.json()

    // Validate the plan
    if (!priceId || !PRODUCTS[planName as keyof typeof PRODUCTS]) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    const product = PRODUCTS[planName as keyof typeof PRODUCTS]

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