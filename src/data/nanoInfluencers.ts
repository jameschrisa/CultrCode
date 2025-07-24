export interface NanoInfluencer {
  id: string
  handle: string
  name: string
  platform: string
  followers: number
  engagementRate: number
  niche: string[]
  location: string
  authenticity: number // 1-100 scale
  audience: {
    ageGroup: string
    genderSplit: { male: number; female: number; other: number }
    topLocations: string[]
    interests: string[]
  }
  content: {
    types: string[]
    frequency: string
    avgViews: number
    topPerformingContent: string[]
  }
  collaboration: {
    averageRate: number
    responseRate: number
    previousBrands: string[]
    contentQuality: number
    audienceMatch: number
    availability: 'available' | 'busy' | 'selective'
  }
  recentMetrics: {
    monthlyGrowth: number
    engagementTrend: 'rising' | 'stable' | 'declining'
    viralPosts: number
    brandMentions: number
  }
  specialties: string[]
  languages: string[]
  verified: boolean
  lastUpdated: string
}

export const nanoInfluencers: NanoInfluencer[] = [
  {
    id: 'nano-sarah-sustainable',
    handle: '@sarahsustainablelife',
    name: 'Sarah Chen',
    platform: 'instagram',
    followers: 3200,
    engagementRate: 8.4,
    niche: ['sustainable living', 'zero waste', 'eco-friendly products'],
    location: 'Portland, OR',
    authenticity: 94,
    audience: {
      ageGroup: '25-35',
      genderSplit: { male: 15, female: 82, other: 3 },
      topLocations: ['Portland', 'Seattle', 'San Francisco'],
      interests: ['sustainability', 'minimalism', 'organic food', 'climate change']
    },
    content: {
      types: ['lifestyle posts', 'product reviews', 'educational content'],
      frequency: '4-5 posts/week',
      avgViews: 1850,
      topPerformingContent: ['zero waste kitchen tour', 'sustainable swaps guide', 'thrift flip tutorials']
    },
    collaboration: {
      averageRate: 150,
      responseRate: 89,
      previousBrands: ['Package Free', 'Grove Collaborative', 'Earthhero'],
      contentQuality: 92,
      audienceMatch: 96,
      availability: 'available'
    },
    recentMetrics: {
      monthlyGrowth: 12.3,
      engagementTrend: 'rising',
      viralPosts: 2,
      brandMentions: 8
    },
    specialties: ['product photography', 'storytelling', 'community building'],
    languages: ['English', 'Mandarin'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-marcus-fitness',
    handle: '@marcusmicroworkouts',
    name: 'Marcus Johnson',
    platform: 'tiktok',
    followers: 7800,
    engagementRate: 12.1,
    niche: ['fitness', 'quick workouts', 'busy professionals'],
    location: 'Chicago, IL',
    authenticity: 91,
    audience: {
      ageGroup: '28-40',
      genderSplit: { male: 68, female: 30, other: 2 },
      topLocations: ['Chicago', 'New York', 'Los Angeles'],
      interests: ['fitness', 'productivity', 'work-life balance', 'health']
    },
    content: {
      types: ['workout videos', 'motivational content', 'office exercises'],
      frequency: '1-2 videos/day',
      avgViews: 4200,
      topPerformingContent: ['5-minute desk workout', 'morning routine for busy dads', 'gym vs home workouts']
    },
    collaboration: {
      averageRate: 280,
      responseRate: 76,
      previousBrands: ['Under Armour', 'MyFitnessPal', 'Protein World'],
      contentQuality: 88,
      audienceMatch: 94,
      availability: 'selective'
    },
    recentMetrics: {
      monthlyGrowth: 18.7,
      engagementTrend: 'rising',
      viralPosts: 4,
      brandMentions: 12
    },
    specialties: ['video editing', 'fitness coaching', 'motivational speaking'],
    languages: ['English'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-lily-aesthetic',
    handle: '@lilyscozyspace',
    name: 'Lily Park',
    platform: 'instagram',
    followers: 4650,
    engagementRate: 9.8,
    niche: ['home decor', 'cozy aesthetics', 'apartment living'],
    location: 'Brooklyn, NY',
    authenticity: 96,
    audience: {
      ageGroup: '22-32',
      genderSplit: { male: 8, female: 90, other: 2 },
      topLocations: ['New York', 'Los Angeles', 'Toronto'],
      interests: ['interior design', 'plants', 'minimalism', 'photography']
    },
    content: {
      types: ['room tours', 'decor tips', 'DIY projects'],
      frequency: '3-4 posts/week',
      avgViews: 2100,
      topPerformingContent: ['small space organization', 'budget decor hauls', 'plant care tips']
    },
    collaboration: {
      averageRate: 200,
      responseRate: 92,
      previousBrands: ['West Elm', 'Urban Outfitters', 'The Sill'],
      contentQuality: 95,
      audienceMatch: 98,
      availability: 'available'
    },
    recentMetrics: {
      monthlyGrowth: 15.2,
      engagementTrend: 'stable',
      viralPosts: 1,
      brandMentions: 6
    },
    specialties: ['photography', 'styling', 'content planning'],
    languages: ['English', 'Korean'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-alex-tech',
    handle: '@alexcodesimple',
    name: 'Alex Rivera',
    platform: 'youtube',
    followers: 9200,
    engagementRate: 7.3,
    niche: ['programming', 'tech tutorials', 'career advice'],
    location: 'Austin, TX',
    authenticity: 89,
    audience: {
      ageGroup: '20-30',
      genderSplit: { male: 74, female: 24, other: 2 },
      topLocations: ['Austin', 'San Francisco', 'Seattle'],
      interests: ['programming', 'technology', 'career development', 'startups']
    },
    content: {
      types: ['coding tutorials', 'tech reviews', 'career advice'],
      frequency: '2-3 videos/week',
      avgViews: 3400,
      topPerformingContent: ['beginner JavaScript course', 'day in life of programmer', 'salary negotiation tips']
    },
    collaboration: {
      averageRate: 350,
      responseRate: 68,
      previousBrands: ['Skillshare', 'Coursera', 'GitHub'],
      contentQuality: 91,
      audienceMatch: 92,
      availability: 'busy'
    },
    recentMetrics: {
      monthlyGrowth: 22.1,
      engagementTrend: 'rising',
      viralPosts: 3,
      brandMentions: 15
    },
    specialties: ['technical education', 'video production', 'community engagement'],
    languages: ['English', 'Spanish'],
    verified: true,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-emma-food',
    handle: '@emmasplantbowls',
    name: 'Emma Thompson',
    platform: 'instagram',
    followers: 5400,
    engagementRate: 11.2,
    niche: ['plant-based cooking', 'meal prep', 'nutrition'],
    location: 'Denver, CO',
    authenticity: 93,
    audience: {
      ageGroup: '25-40',
      genderSplit: { male: 22, female: 76, other: 2 },
      topLocations: ['Denver', 'Portland', 'Boulder'],
      interests: ['plant-based diet', 'healthy eating', 'meal prep', 'fitness']
    },
    content: {
      types: ['recipe videos', 'meal prep guides', 'nutrition tips'],
      frequency: '5-6 posts/week',
      avgViews: 2800,
      topPerformingContent: ['5-day meal prep', 'protein-rich vegan meals', 'budget plant-based shopping']
    },
    collaboration: {
      averageRate: 220,
      responseRate: 84,
      previousBrands: ['Thrive Market', 'Vitamix', 'Daily Harvest'],
      contentQuality: 89,
      audienceMatch: 95,
      availability: 'available'
    },
    recentMetrics: {
      monthlyGrowth: 14.8,
      engagementTrend: 'stable',
      viralPosts: 2,
      brandMentions: 9
    },
    specialties: ['recipe development', 'food styling', 'nutrition education'],
    languages: ['English'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-david-finance',
    handle: '@daviddebtfree',
    name: 'David Kim',
    platform: 'tiktok',
    followers: 6700,
    engagementRate: 13.5,
    niche: ['personal finance', 'debt payoff', 'budgeting'],
    location: 'Phoenix, AZ',
    authenticity: 92,
    audience: {
      ageGroup: '22-35',
      genderSplit: { male: 45, female: 53, other: 2 },
      topLocations: ['Phoenix', 'Dallas', 'Atlanta'],
      interests: ['personal finance', 'saving money', 'investing', 'side hustles']
    },
    content: {
      types: ['finance tips', 'debt payoff journey', 'budgeting hacks'],
      frequency: '1-2 videos/day',
      avgViews: 5100,
      topPerformingContent: ['paid off $50k debt', 'zero-based budgeting', 'side hustle ideas']
    },
    collaboration: {
      averageRate: 240,
      responseRate: 78,
      previousBrands: ['Mint', 'YNAB', 'Credit Karma'],
      contentQuality: 87,
      audienceMatch: 93,
      availability: 'selective'
    },
    recentMetrics: {
      monthlyGrowth: 19.3,
      engagementTrend: 'rising',
      viralPosts: 5,
      brandMentions: 11
    },
    specialties: ['financial education', 'storytelling', 'community motivation'],
    languages: ['English', 'Korean'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-maya-travel',
    handle: '@mayasustainabletravel',
    name: 'Maya Patel',
    platform: 'instagram',
    followers: 4900,
    engagementRate: 10.7,
    niche: ['sustainable travel', 'solo female travel', 'budget travel'],
    location: 'San Diego, CA',
    authenticity: 95,
    audience: {
      ageGroup: '24-35',
      genderSplit: { male: 28, female: 70, other: 2 },
      topLocations: ['San Diego', 'Los Angeles', 'San Francisco'],
      interests: ['travel', 'sustainability', 'photography', 'culture']
    },
    content: {
      types: ['travel guides', 'destination photography', 'travel tips'],
      frequency: '4-5 posts/week',
      avgViews: 2600,
      topPerformingContent: ['solo travel safety tips', 'sustainable packing guide', 'hidden gems in California']
    },
    collaboration: {
      averageRate: 180,
      responseRate: 88,
      previousBrands: ['Patagonia', 'Lonely Planet', 'Airbnb'],
      contentQuality: 94,
      audienceMatch: 97,
      availability: 'available'
    },
    recentMetrics: {
      monthlyGrowth: 16.5,
      engagementTrend: 'rising',
      viralPosts: 2,
      brandMentions: 7
    },
    specialties: ['travel photography', 'destination research', 'cultural sensitivity'],
    languages: ['English', 'Hindi', 'Spanish'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-ryan-parenting',
    handle: '@ryandadlife',
    name: 'Ryan Mitchell',
    platform: 'youtube',
    followers: 8100,
    engagementRate: 8.9,
    niche: ['fatherhood', 'work-life balance', 'family activities'],
    location: 'Minneapolis, MN',
    authenticity: 88,
    audience: {
      ageGroup: '28-45',
      genderSplit: { male: 58, female: 40, other: 2 },
      topLocations: ['Minneapolis', 'Chicago', 'Milwaukee'],
      interests: ['parenting', 'family time', 'outdoor activities', 'work-life balance']
    },
    content: {
      types: ['family vlogs', 'parenting tips', 'activity ideas'],
      frequency: '2-3 videos/week',
      avgViews: 3800,
      topPerformingContent: ['working dad morning routine', 'indoor activities for kids', 'father-son camping trip']
    },
    collaboration: {
      averageRate: 320,
      responseRate: 72,
      previousBrands: ['Fisher-Price', 'REI', 'Target'],
      contentQuality: 86,
      audienceMatch: 91,
      availability: 'busy'
    },
    recentMetrics: {
      monthlyGrowth: 11.7,
      engagementTrend: 'stable',
      viralPosts: 1,
      brandMentions: 8
    },
    specialties: ['family content', 'video editing', 'authentic storytelling'],
    languages: ['English'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-zoe-creative',
    handle: '@zoecreates',
    name: 'Zoe Williams',
    platform: 'tiktok',
    followers: 5800,
    engagementRate: 14.2,
    niche: ['digital art', 'creative process', 'art tutorials'],
    location: 'Nashville, TN',
    authenticity: 97,
    audience: {
      ageGroup: '18-28',
      genderSplit: { male: 35, female: 63, other: 2 },
      topLocations: ['Nashville', 'Atlanta', 'Austin'],
      interests: ['digital art', 'creativity', 'design', 'illustration']
    },
    content: {
      types: ['art tutorials', 'time-lapse videos', 'creative challenges'],
      frequency: '1-2 videos/day',
      avgViews: 6200,
      topPerformingContent: ['digital portrait tutorial', '10-minute art challenge', 'art supplies review']
    },
    collaboration: {
      averageRate: 190,
      responseRate: 91,
      previousBrands: ['Procreate', 'Adobe', 'Wacom'],
      contentQuality: 96,
      audienceMatch: 98,
      availability: 'available'
    },
    recentMetrics: {
      monthlyGrowth: 21.4,
      engagementTrend: 'rising',
      viralPosts: 6,
      brandMentions: 4
    },
    specialties: ['digital illustration', 'tutorial creation', 'creative inspiration'],
    languages: ['English'],
    verified: false,
    lastUpdated: '2023-12-01'
  },
  {
    id: 'nano-carlos-business',
    handle: '@carlosside hustle',
    name: 'Carlos Rodriguez',
    platform: 'linkedin',
    followers: 7200,
    engagementRate: 6.8,
    niche: ['entrepreneurship', 'side hustles', 'professional development'],
    location: 'Miami, FL',
    authenticity: 90,
    audience: {
      ageGroup: '25-40',
      genderSplit: { male: 62, female: 36, other: 2 },
      topLocations: ['Miami', 'Orlando', 'Tampa'],
      interests: ['entrepreneurship', 'business', 'networking', 'professional growth']
    },
    content: {
      types: ['business tips', 'success stories', 'networking advice'],
      frequency: '4-5 posts/week',
      avgViews: 2400,
      topPerformingContent: ['from employee to entrepreneur', 'networking strategies', 'side hustle ideas']
    },
    collaboration: {
      averageRate: 280,
      responseRate: 75,
      previousBrands: ['LinkedIn Learning', 'Shopify', 'QuickBooks'],
      contentQuality: 88,
      audienceMatch: 89,
      availability: 'selective'
    },
    recentMetrics: {
      monthlyGrowth: 13.6,
      engagementTrend: 'stable',
      viralPosts: 2,
      brandMentions: 10
    },
    specialties: ['business consulting', 'professional content', 'networking'],
    languages: ['English', 'Spanish'],
    verified: true,
    lastUpdated: '2023-12-01'
  }
]

export const getInfluencerById = (id: string): NanoInfluencer | undefined => {
  return nanoInfluencers.find(influencer => influencer.id === id)
}

export const getInfluencersByPlatform = (platform: string): NanoInfluencer[] => {
  return nanoInfluencers.filter(influencer => influencer.platform === platform)
}

export const getInfluencersByNiche = (niche: string): NanoInfluencer[] => {
  return nanoInfluencers.filter(influencer => 
    influencer.niche.some(n => n.toLowerCase().includes(niche.toLowerCase()))
  )
}

export const getInfluencersByLocation = (location: string): NanoInfluencer[] => {
  return nanoInfluencers.filter(influencer => 
    influencer.location.toLowerCase().includes(location.toLowerCase())
  )
}

export const getInfluencersByEngagement = (minRate: number): NanoInfluencer[] => {
  return nanoInfluencers.filter(influencer => influencer.engagementRate >= minRate)
}

export const getTopInfluencers = (limit: number = 10): NanoInfluencer[] => {
  return nanoInfluencers
    .sort((a, b) => b.engagementRate - a.engagementRate)
    .slice(0, limit)
}