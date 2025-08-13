/**
 * Subscription tier utilities for CultrCode
 * Centralizes access control logic across the application
 */

export type SubscriptionTier = 'free' | 'scouts' | 'curators' | 'insiders'

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
      return 'curators' // Map legacy 'premium' to 'curators'
    case 'pro':
      return 'curators' // Map legacy 'pro' to 'curators'
    case 'community-explorer':
      return 'scouts' // Map legacy 'community-explorer' to 'scouts'
    case 'trend-navigator':
      return 'curators' // Map legacy 'trend-navigator' to 'curators'
    case 'enterprise':
      return 'insiders' // Map legacy 'enterprise' to 'insiders'
    case 'scouts':
    case 'curators':
    case 'insiders':
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
    case 'scouts':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: false,
        hasEnterpriseFeatures: false,
        canAccessAdvancedSegmentation: false,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: false,
        canAccessAnalytics: true,
        displayName: 'Scouts'
      }
    
    case 'curators':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: true,
        hasEnterpriseFeatures: false,
        canAccessAdvancedSegmentation: true,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: true,
        canAccessAnalytics: true,
        displayName: 'Curators'
      }
    
    case 'insiders':
      return {
        hasBasicFeatures: true,
        hasAdvancedFeatures: true,
        hasEnterpriseFeatures: true,
        canAccessAdvancedSegmentation: true,
        canAccessPersonas: true,
        canAccessMicrocommunities: true,
        canAccessTrendAnalysis: true,
        canAccessAnalytics: true,
        displayName: 'Insiders'
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
 * Check if user can access premium features (curators or insiders)
 */
export function canAccessPremiumFeatures(user: any): boolean {
  const access = getSubscriptionAccess(user)
  return access.hasAdvancedFeatures
}

/**
 * Check if user can access insiders features
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