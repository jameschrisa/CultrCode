export type Industry = 
  | 'fashion'
  | 'health'
  | 'technology'
  | 'consumer-electronics'
  | 'household-goods'
  | 'food-beverage'
  | 'automotive'
  | 'beauty-cosmetics'
  | 'finance'
  | 'entertainment'
  | 'sports-fitness'
  | 'travel-hospitality'
  | 'real-estate'
  | 'education'
  | 'sustainability'

export interface TrendHunter {
  id: string
  name: string
  profileImage?: string // URL to uploaded image, placeholder if not provided
  focusArea: Industry
  industry: string // Human readable industry name
  socialHandle: string // Their primary social media handle (e.g., @username)
  socialPlatform: 'twitter' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube'
  country: string // Representative country
  countryCode: string // ISO country code for flag display
  bio: string
  expertise: string[]
  yearsOfExperience: number
  followersCount?: number
  verificationStatus: 'verified' | 'pending' | 'unverified'
  joinedDate: string
  recentTrends: string[] // Array of recent trend predictions/discoveries
}

export interface TrendHunterFilters {
  industry?: Industry
  country?: string
  verificationStatus?: TrendHunter['verificationStatus']
  sortBy?: 'name' | 'experience' | 'followers' | 'recent'
}