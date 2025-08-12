import { useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { getStripe } from '@/lib/stripe'

interface CheckoutOptions {
  planName: string
  priceId: string
}

export const useCheckout = () => {
  const [loading, setLoading] = useState(false)
  const { isSignedIn } = useAuth()

  const createCheckoutSession = async ({ planName, priceId }: CheckoutOptions) => {
    if (!isSignedIn) {
      // Redirect to sign up with plan info
      window.location.href = `/sign-up?plan=${planName}&redirectTo=checkout`
      return
    }

    try {
      setLoading(true)
      
      console.log('Starting checkout with:', { priceId, planName })

      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      })

      const responseData = await response.json()
      console.log('Checkout response:', responseData)
      
      const { sessionId, url, error, debug, details } = responseData

      if (!response.ok) {
        console.error('Checkout API error:', { 
          status: response.status, 
          error, 
          debug, 
          details,
          fullResponse: responseData 
        })
        
        // Show detailed error to user for debugging
        let userMessage = error || `Server error: ${response.status}`
        if (details?.message) {
          userMessage += `\n\nDetails: ${details.message}`
          if (details.type) userMessage += `\nType: ${details.type}`
          if (details.code) userMessage += `\nCode: ${details.code}`
        }
        
        throw new Error(userMessage)
      }

      if (error) {
        throw new Error(error)
      }

      if (url) {
        // Redirect to Stripe checkout
        window.location.href = url
      } else {
        // Fallback: redirect to Stripe checkout using sessionId
        const stripe = await getStripe()
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId })
          if (error) {
            throw new Error(error.message)
          }
        }
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return {
    createCheckoutSession,
    loading
  }
}