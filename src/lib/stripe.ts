import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
  appInfo: {
    name: 'CultrCode',
    version: '1.0.0',
  },
})

// Client-side Stripe instance
export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}

// Subscription price IDs from Stripe dashboard
export const STRIPE_PRICE_IDS = {
  'community-explorer': 'price_1Rv7V8AhoMB1H3i83iN3dm0G', // $29.99/month
  'trend-navigator': 'price_1Rv7W4AhoMB1H3i8VlejcIyQ',     // $69.00/month  
  'enterprise': 'price_1Rv7WlAhoMB1H3i8xQBFS9vK'           // $649.00/month
}

// Product configurations matching your pricing page
export const PRODUCTS = {
  'community-explorer': {
    name: 'Community Explorer',
    price: 29.99,
    description: 'Access to 25+ micro-communities and trend analysis',
    features: [
      'Everything in Free',
      'Access to 25+ micro-communities', 
      'Monthly trend reports',
      'Basic audience overlap analysis',
      'Community growth tracking',
      'Export capabilities',
      'Email support'
    ]
  },
  'trend-navigator': {
    name: 'Trend Navigator', 
    price: 69.00,
    description: 'Advanced trend prediction and cultural movement tracking',
    features: [
      'Everything in Community Explorer',
      'Predictive trend analysis',
      'Cultural movement tracking',
      'Advanced audience segmentation',
      'Custom trend alerts',
      'Priority API access',
      'Phone & chat support'
    ]
  },
  'enterprise': {
    name: 'Enterprise',
    price: 649.00,
    description: 'Complete cultural intelligence platform with custom solutions',
    features: [
      'Everything in Trend Navigator',
      'Custom trend analysis',
      'Dedicated account manager',
      'Advanced API access',
      'White-label solutions',
      'Custom integrations',
      '24/7 premium support'
    ]
  }
}