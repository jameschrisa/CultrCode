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
  'scouts-monthly': 'price_1Rv7V8AhoMB1H3i83iN3dm0G', // $29.99/month
  'scouts-annual': 'price_1Rv7V8AhoMB1H3i83iN3dm0G', // $287.90/year (will need new price ID)
  'curators-monthly': 'price_1Rv7W4AhoMB1H3i8VlejcIyQ', // $69.00/month  
  'curators-annual': 'price_1Rv7W4AhoMB1H3i8VlejcIyQ', // $662.40/year (will need new price ID)
  'insiders-monthly': 'price_1Rv7WlAhoMB1H3i8xQBFS9vK', // $249.00/month (price updated)
  'insiders-annual': 'price_1Rv7WlAhoMB1H3i8xQBFS9vK' // $2390.40/year (will need new price ID)
}

// Product configurations matching your pricing page
export const PRODUCTS = {
  'scouts': {
    name: 'Scouts',
    monthlyPrice: 29.99,
    annualPrice: 287.90,
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
  'curators': {
    name: 'Curators', 
    monthlyPrice: 69.00,
    annualPrice: 662.40,
    description: 'Advanced trend prediction and cultural movement tracking',
    features: [
      'Everything in Scouts',
      'Predictive trend analysis',
      'Cultural movement tracking',
      'Advanced audience segmentation',
      '10 Personas',
      'Interactive Personas',
      'Hyperlocal Maps',
      'Priority API access',
      'Phone & chat support'
    ]
  },
  'insiders': {
    name: 'Insiders',
    monthlyPrice: 249.00,
    annualPrice: 2390.40,
    description: 'Complete cultural intelligence platform with custom solutions',
    features: [
      'Everything in Curators',
      'Custom trend analysis',
      'Dedicated cultural analyst',
      'Advanced API access',
      'White-label solutions',
      'Custom community reports',
      '24/7 premium support'
    ]
  }
}