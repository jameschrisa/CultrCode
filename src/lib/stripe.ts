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

// Subscription price IDs (you'll get these from Stripe dashboard)
export const STRIPE_PRICE_IDS = {
  'community-explorer': 'price_community_explorer', // $49/month
  'trend-navigator': 'price_trend_navigator',       // $149/month  
  'enterprise': 'price_enterprise'                  // $449/month
}

// Product configurations matching your pricing page
export const PRODUCTS = {
  'community-explorer': {
    name: 'Community Explorer',
    price: 49,
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
    price: 149,
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
    price: 449,
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