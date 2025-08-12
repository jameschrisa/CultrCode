/**
 * Subscription tier utilities for CultrCode
 * Centralizes access control logic across the application
 */

export type SubscriptionTier = 'free' | 'community-explorer' | 'trend-navigator' | 'enterprise'

export interface SubscriptionAccess {
  hasBasicFeatures: boolean
  hasAdvancedFeatures: boolean
  hasEnterpriseFeatures: boolean
  canAccessAdvancedSegmentation: boolean
  canAccessPersonas: boolean
  canAccessMicrocommunities: boolean
  canAccessTrendAnalysis: boolean
  canAccessAnalytics: boolean
  displayName: string
}

/**
 * Get subscription tier from Clerk user metadata
 */
export function getSubscriptionTier(user: any): SubscriptionTier {
  if (!user?.publicMetadata?.subscriptionTier) {
    return 'free'
  }
  
  const tier = user.publicMetadata.subscriptionTier as string
  
  // Handle legacy tier names
  switch (tier) {
    case 'premium':
      return 'trend-navigator' // Map legacy 'premium' to 'trend-navigator'
    case 'pro':
      return 'trend-navigator' // Map legacy 'pro' to 'trend-navigator'
    case 'community-explorer':
    case 'trend-navigator':
    case 'enterprise':
      return tier as SubscriptionTier
    default:
      return 'free'
  }
}

/**
 * Get subscription access permissions
 */
export function getSubscriptionAccess(user: any): SubscriptionAccess {
  const tier = getSubscriptionTier(user)
  
  switch (tier) {
    case 'community-explorer':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: false,
        hasEnterpriseFeatures: false,
        canAccessAdvancedSegmentation: false,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: false,
        canAccessAnalytics: true,
        displayName: 'Community Explorer'
      }
    
    case 'trend-navigator':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: true,
        hasEnterpriseFeatures: false,
        canAccessAdvancedSegmentation: true,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: true,
        canAccessAnalytics: true,
        displayName: 'Trend Navigator'
      }
    
    case 'enterprise':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: true,
        hasEnterpriseFeatures: true,
        canAccessAdvancedSegmentation: true,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: true,
        canAccessAnalytics: true,
        displayName: 'Enterprise'
      }
    
    case 'free':
    default:
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: false,
        hasEnterpriseFeatures: false,
        canAccessAdvancedSegmentation: false,
        canAccessPersonas: false,
        canAccessMicrocommunities: false,
        canAccessTrendAnalysis: false,
        canAccessAnalytics: false,
        displayName: 'Free'
      }
  }
}

/**
 * Check if user can access premium features (trend-navigator or enterprise)
 */
export function canAccessPremiumFeatures(user: any): boolean {
  const access = getSubscriptionAccess(user)
  return access.hasAdvancedFeatures
}

/**
 * Check if user can access enterprise features
 */
export function canAccessEnterpriseFeatures(user: any): boolean {
  const access = getSubscriptionAccess(user)
  return access.hasEnterpriseFeatures
}

/**
 * Check if user can access specific feature
 */
export function canAccessFeature(user: any, feature: keyof Omit<SubscriptionAccess, 'displayName'>): boolean {
  const access = getSubscriptionAccess(user)
  return access[feature] as boolean
}