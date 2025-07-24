import { 
  MicroCommunity, 
  CommunityCategory, 
  CommunitySize, 
  Platform,
  AgeRange,
  Gender,
  NorthAmericanRegion 
} from '@/types/segments'

export const northAmericanMicroCommunities: MicroCommunity[] = [
  // Tech & Professional Communities
  {
    id: 'mc-tech-bros',
    name: 'Tech Bros',
    description: 'Silicon Valley tech workers and entrepreneurs who embrace startup culture, productivity optimization, and tech innovation',
    category: 'tech',
    size: 'established',
    platform: 'twitter',
    characteristics: {
      values: ['innovation', 'efficiency', 'disruption', 'growth', 'optimization'],
      interests: ['startups', 'AI/ML', 'crypto', 'productivity tools', 'venture capital'],
      behaviors: ['early tech adoption', 'networking events', 'angel investing', 'side projects'],
      language: ['growth hacking', 'MVP', 'unicorn', 'disrupt', 'scale', 'pivot'],
      visualAesthetics: ['minimalist', 'clean lines', 'tech product screenshots', 'data visualizations'],
      contentTypes: ['thought leadership', 'product launches', 'industry analysis', 'startup advice'],
      engagementPatterns: [
        {
          type: 'peak_hours',
          description: 'Most active during PST business hours and late evenings',
          data: { morning: 85, afternoon: 95, evening: 78, night: 45 }
        },
        {
          type: 'content_preference',
          description: 'Highly engages with data-driven content and contrarian takes',
          data: { charts: 95, opinions: 88, news: 75, personal: 45 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 15, '25-35': 65, '35-45': 18, '45-55': 2, 'over-55': 0 },
      genderDistribution: { male: 78, female: 20, unisex: 2, other: 0 },
      incomeDistribution: { 'under-50k': 5, '50k-100k': 25, '100k-200k': 45, 'over-200k': 25 },
      educationLevel: 'Very High',
      occupationTypes: ['Software Engineer', 'Product Manager', 'Founder', 'Data Scientist', 'Designer']
    },
    geography: {
      globalReach: true,
      primaryRegions: ['west-coast-us', 'northeast-us'],
      cityConcentrations: [
        { cityId: 'us-san-francisco', concentration: 35, localVariations: ['venture capital focus', 'hardware startups'] },
        { cityId: 'us-seattle', concentration: 15, localVariations: ['gaming industry', 'cloud computing'] },
        { cityId: 'us-austin', concentration: 12, localVariations: ['SXSW culture', 'music tech'] }
      ],
      ruralUrbanSplit: 95
    },
    segments: ['segment-tech-innovators', 'segment-urban-professionals'],
    trends: [
      {
        id: 'trend-ai-tools',
        name: 'AI Productivity Tools',
        description: 'Obsession with AI-powered productivity and automation tools',
        startDate: '2023-01-01',
        peakDate: '2024-06-01',
        status: 'peaked',
        virality: 85,
        linkedHashtags: ['#AI', '#productivity', '#automation', '#ChatGPT'],
        contentExamples: ['AI tool reviews', 'productivity workflows', 'automation demos']
      }
    ],
    influencers: [
      {
        id: 'inf-tech-1',
        handle: '@techleader',
        platform: 'twitter',
        followers: 125000,
        tier: 'macro',
        engagement: 3.2,
        niche: ['startups', 'AI', 'venture capital'],
        authenticity: 85,
        collaboration: {
          averageRate: 15000,
          responseRate: 65,
          previousBrands: ['Notion', 'Linear', 'Vercel'],
          contentQuality: 90,
          audienceMatch: 95
        }
      }
    ],
    brands: [
      {
        name: 'Notion',
        category: 'tech-apps',
        penetration: 85,
        sentiment: 90,
        partnerships: [
          { type: 'sponsorship', success: 95, duration: '12 months', reach: 2500000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 3.2,
      seasonalPatterns: { spring: 110, summer: 95, fall: 105, winter: 90 },
      platformMigration: [
        { fromPlatform: 'twitter', toPlatform: 'linkedin', percentage: 15, reason: 'professional networking' }
      ],
      futureProjection: { sixMonth: 8, oneYear: 15, twoYear: 25, confidence: 80 }
    }
  },

  // Wellness & Lifestyle Communities
  {
    id: 'mc-wellness-girlies',
    name: 'Wellness Girlies',
    description: 'Health-conscious women focused on holistic wellness, self-care, and mindful living',
    category: 'wellness',
    size: 'massive',
    platform: 'instagram',
    characteristics: {
      values: ['self-care', 'mindfulness', 'authenticity', 'balance', 'natural living'],
      interests: ['pilates', 'matcha', 'skincare', 'meditation', 'clean eating'],
      behaviors: ['morning routines', 'wellness tracking', 'supplement stacking', 'mindful shopping'],
      language: ['self-care Sunday', 'clean girl', 'that girl', 'wellness journey', 'mindful'],
      visualAesthetics: ['soft lighting', 'neutral tones', 'plants', 'minimal spaces', 'golden hour'],
      contentTypes: ['morning routines', 'product reviews', 'wellness tips', 'lifestyle vlogs'],
      engagementPatterns: [
        {
          type: 'peak_hours',
          description: 'High engagement during morning and evening self-care routines',
          data: { morning: 95, afternoon: 65, evening: 88, night: 45 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 35, '25-35': 45, '35-45': 18, '45-55': 2, 'over-55': 0 },
      genderDistribution: { male: 5, female: 92, unisex: 3, other: 0 },
      incomeDistribution: { 'under-50k': 20, '50k-100k': 45, '100k-200k': 30, 'over-200k': 5 },
      educationLevel: 'High',
      occupationTypes: ['Marketing', 'Healthcare', 'Education', 'Creative', 'Wellness Coach']
    },
    geography: {
      globalReach: true,
      primaryRegions: ['west-coast-us', 'northeast-us', 'eastern-canada'],
      cityConcentrations: [
        { cityId: 'us-los-angeles', concentration: 25, localVariations: ['juice cleanses', 'yoga studios'] },
        { cityId: 'us-nyc', concentration: 20, localVariations: ['boutique fitness', 'wellness events'] },
        { cityId: 'us-austin', concentration: 12, localVariations: ['outdoor wellness', 'holistic practices'] }
      ],
      ruralUrbanSplit: 80
    },
    segments: ['segment-wellness-enthusiasts', 'segment-conscious-consumers'],
    trends: [
      {
        id: 'trend-clean-girl',
        name: 'Clean Girl Aesthetic',
        description: 'Minimal makeup look emphasizing natural beauty and healthy skin',
        startDate: '2022-06-01',
        peakDate: '2023-08-01',
        status: 'peaked',
        virality: 95,
        linkedHashtags: ['#cleangirl', '#natural', '#skincare', '#minimal'],
        contentExamples: ['no-makeup looks', 'skincare routines', 'natural hair tutorials']
      }
    ],
    influencers: [
      {
        id: 'inf-wellness-1',
        handle: '@wellnessguru',
        platform: 'instagram',
        followers: 85000,
        tier: 'micro',
        engagement: 6.8,
        niche: ['skincare', 'wellness', 'self-care'],
        authenticity: 95,
        collaboration: {
          averageRate: 3500,
          responseRate: 85,
          previousBrands: ['The Ordinary', 'Herbivore', 'Glow Recipe'],
          contentQuality: 92,
          audienceMatch: 98
        }
      }
    ],
    brands: [
      {
        name: 'Glossier',
        category: 'beauty-skincare',
        penetration: 90,
        sentiment: 88,
        partnerships: [
          { type: 'ugc', success: 92, duration: 'ongoing', reach: 5500000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 5.8,
      seasonalPatterns: { spring: 120, summer: 110, fall: 95, winter: 85 },
      platformMigration: [
        { fromPlatform: 'instagram', toPlatform: 'tiktok', percentage: 25, reason: 'younger audience reach' }
      ],
      futureProjection: { sixMonth: 12, oneYear: 25, twoYear: 40, confidence: 85 }
    }
  },

  // Aesthetic & Cultural Communities
  {
    id: 'mc-coastal-grandma',
    name: 'Coastal Grandma',
    description: 'Relaxed, effortless style inspired by seaside living and Nancy Meyers films',
    category: 'aesthetic',
    size: 'established',
    platform: 'instagram',
    characteristics: {
      values: ['simplicity', 'comfort', 'quality', 'timelessness', 'serenity'],
      interests: ['interior design', 'linen clothing', 'farmers markets', 'cooking', 'reading'],
      behaviors: ['thrifting', 'gardening', 'hosting dinner parties', 'home decorating'],
      language: ['effortless', 'timeless', 'cozy', 'lived-in', 'organic'],
      visualAesthetics: ['neutral palettes', 'natural textures', 'soft lighting', 'vintage pieces'],
      contentTypes: ['home tours', 'outfit styling', 'recipe sharing', 'lifestyle content'],
      engagementPatterns: [
        {
          type: 'content_preference',
          description: 'High engagement with aspirational yet attainable lifestyle content',
          data: { lifestyle: 95, fashion: 85, home: 90, food: 80 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 15, '25-35': 35, '35-45': 35, '45-55': 15, 'over-55': 0 },
      genderDistribution: { male: 10, female: 85, unisex: 5, other: 0 },
      incomeDistribution: { 'under-50k': 15, '50k-100k': 35, '100k-200k': 40, 'over-200k': 10 },
      educationLevel: 'High',
      occupationTypes: ['Creative Professional', 'Marketing', 'Education', 'Interior Design', 'Retail']
    },
    geography: {
      globalReach: false,
      primaryRegions: ['northeast-us', 'west-coast-us'],
      cityConcentrations: [
        { cityId: 'us-nyc', concentration: 20, localVariations: ['Hampton house aesthetic', 'brownstone living'] },
        { cityId: 'us-san-francisco', concentration: 18, localVariations: ['Marin County vibe', 'wine country'] },
        { cityId: 'us-boston', concentration: 15, localVariations: ['Cape Cod influence', 'New England charm'] }
      ],
      ruralUrbanSplit: 70
    },
    segments: ['segment-lifestyle-aspirationalists', 'segment-creative-elites'],
    trends: [
      {
        id: 'trend-linen-everything',
        name: 'Linen Everything',
        description: 'Obsession with linen clothing and home textiles for effortless style',
        startDate: '2023-03-01',
        status: 'growing',
        virality: 75,
        linkedHashtags: ['#linen', '#coastalgrandma', '#effortless', '#sustainable'],
        contentExamples: ['linen outfit styling', 'linen bedding reviews', 'care instructions']
      }
    ],
    influencers: [
      {
        id: 'inf-coastal-1',
        handle: '@coastalliving',
        platform: 'instagram',
        followers: 65000,
        tier: 'micro',
        engagement: 7.2,
        niche: ['lifestyle', 'home decor', 'fashion'],
        authenticity: 90,
        collaboration: {
          averageRate: 2800,
          responseRate: 75,
          previousBrands: ['Everlane', 'West Elm', 'Parachute'],
          contentQuality: 88,
          audienceMatch: 92
        }
      }
    ],
    brands: [
      {
        name: 'Everlane',
        category: 'fashion-accessories',
        penetration: 75,
        sentiment: 85,
        partnerships: [
          { type: 'collaboration', success: 88, duration: '6 months', reach: 1200000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 4.1,
      seasonalPatterns: { spring: 115, summer: 125, fall: 100, winter: 85 },
      platformMigration: [],
      futureProjection: { sixMonth: 6, oneYear: 15, twoYear: 28, confidence: 75 }
    }
  },

  // Professional & Cultural Communities
  {
    id: 'mc-finance-bros',
    name: 'Finance Bros',
    description: 'Wall Street and finance professionals obsessed with markets, wealth building, and status symbols',
    category: 'professional',
    size: 'growing',
    platform: 'twitter',
    characteristics: {
      values: ['wealth', 'status', 'competition', 'networking', 'performance'],
      interests: ['stock market', 'crypto', 'luxury watches', 'expensive cars', 'exclusive events'],
      behaviors: ['day trading', 'networking events', 'luxury shopping', 'status posting'],
      language: ['diamond hands', 'to the moon', 'alpha', 'beta', 'leverage'],
      visualAesthetics: ['suits', 'watches', 'cars', 'city skylines', 'trading screens'],
      contentTypes: ['market analysis', 'trading tips', 'lifestyle flex', 'networking'],
      engagementPatterns: [
        {
          type: 'peak_hours',
          description: 'Active during market hours and late nights',
          data: { morning: 95, afternoon: 100, evening: 80, night: 60 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 25, '25-35': 55, '35-45': 18, '45-55': 2, 'over-55': 0 },
      genderDistribution: { male: 85, female: 13, unisex: 2, other: 0 },
      incomeDistribution: { 'under-50k': 10, '50k-100k': 20, '100k-200k': 35, 'over-200k': 35 },
      educationLevel: 'Very High',
      occupationTypes: ['Investment Banking', 'Trading', 'Financial Advisory', 'Private Equity', 'Hedge Fund']
    },
    geography: {
      globalReach: true,
      primaryRegions: ['northeast-us'],
      cityConcentrations: [
        { cityId: 'us-nyc', concentration: 60, localVariations: ['Wall Street culture', 'banker lifestyle'] },
        { cityId: 'us-chicago', concentration: 15, localVariations: ['commodities trading', 'futures markets'] },
        { cityId: 'ca-toronto', concentration: 10, localVariations: ['Bay Street culture', 'mining finance'] }
      ],
      ruralUrbanSplit: 98
    },
    segments: ['segment-urban-professionals', 'segment-luxury-consumers'],
    trends: [
      {
        id: 'trend-crypto-trading',
        name: 'Crypto Day Trading',
        description: 'Obsession with cryptocurrency trading and DeFi protocols',
        startDate: '2020-12-01',
        peakDate: '2021-11-01',
        status: 'declining',
        virality: 90,
        linkedHashtags: ['#crypto', '#bitcoin', '#trading', '#defi'],
        contentExamples: ['trading setups', 'portfolio updates', 'market analysis']
      }
    ],
    influencers: [
      {
        id: 'inf-finance-1',
        handle: '@wallstreetguru',
        platform: 'twitter',
        followers: 185000,
        tier: 'macro',
        engagement: 2.8,
        niche: ['trading', 'markets', 'finance'],
        authenticity: 70,
        collaboration: {
          averageRate: 8500,
          responseRate: 45,
          previousBrands: ['TD Ameritrade', 'Rolex', 'Tesla'],
          contentQuality: 75,
          audienceMatch: 85
        }
      }
    ],
    brands: [
      {
        name: 'Robinhood',
        category: 'tech-apps',
        penetration: 80,
        sentiment: 60,
        partnerships: [
          { type: 'sponsorship', success: 70, duration: '3 months', reach: 850000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 2.1,
      seasonalPatterns: { spring: 105, summer: 95, fall: 110, winter: 100 },
      platformMigration: [
        { fromPlatform: 'twitter', toPlatform: 'linkedin', percentage: 20, reason: 'professional credibility' }
      ],
      futureProjection: { sixMonth: 3, oneYear: 8, twoYear: 12, confidence: 65 }
    }
  },

  // Creative & Artistic Communities
  {
    id: 'mc-academia-aesthetic',
    name: 'Academia Aesthetic',
    description: 'Students and intellectuals romanticizing academic life, studying, and scholarly pursuits',
    category: 'aesthetic',
    size: 'established',
    platform: 'tiktok',
    characteristics: {
      values: ['knowledge', 'intellectual growth', 'tradition', 'aesthetics', 'self-improvement'],
      interests: ['studying', 'libraries', 'books', 'coffee', 'vintage fashion'],
      behaviors: ['aesthetic study sessions', 'book collecting', 'coffee shop studying', 'note-taking'],
      language: ['studyblr', 'dark academia', 'study with me', 'book recommendations'],
      visualAesthetics: ['vintage books', 'libraries', 'coffee', 'handwritten notes', 'warm lighting'],
      contentTypes: ['study vlogs', 'book reviews', 'note-taking methods', 'aesthetic content'],
      engagementPatterns: [
        {
          type: 'peak_hours',
          description: 'High engagement during study sessions and late night',
          data: { morning: 70, afternoon: 85, evening: 95, night: 80 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 70, '25-35': 25, '35-45': 5, '45-55': 0, 'over-55': 0 },
      genderDistribution: { male: 20, female: 75, unisex: 5, other: 0 },
      incomeDistribution: { 'under-50k': 80, '50k-100k': 15, '100k-200k': 5, 'over-200k': 0 },
      educationLevel: 'High',
      occupationTypes: ['Student', 'Academic', 'Teacher', 'Researcher', 'Graduate Student']
    },
    geography: {
      globalReach: true,
      primaryRegions: ['northeast-us', 'eastern-canada'],
      cityConcentrations: [
        { cityId: 'us-boston', concentration: 25, localVariations: ['Harvard/MIT culture', 'historic libraries'] },
        { cityId: 'us-nyc', concentration: 20, localVariations: ['university life', 'bookstore culture'] },
        { cityId: 'ca-toronto', concentration: 15, localVariations: ['UofT culture', 'academic community'] }
      ],
      ruralUrbanSplit: 85
    },
    segments: ['segment-knowledge-seekers', 'segment-creative-elites'],
    trends: [
      {
        id: 'trend-study-with-me',
        name: 'Study With Me',
        description: 'Live streaming study sessions for accountability and community',
        startDate: '2022-09-01',
        status: 'growing',
        virality: 85,
        linkedHashtags: ['#studywithme', '#productivity', '#studytok', '#academia'],
        contentExamples: ['live study sessions', 'study tips', 'note-taking tutorials']
      }
    ],
    influencers: [
      {
        id: 'inf-academia-1',
        handle: '@studyaesthetic',
        platform: 'tiktok',
        followers: 45000,
        tier: 'micro',
        engagement: 8.5,
        niche: ['studying', 'productivity', 'books'],
        authenticity: 95,
        collaboration: {
          averageRate: 1200,
          responseRate: 90,
          previousBrands: ['Notion', 'Moleskine', 'Blue Bottle Coffee'],
          contentQuality: 92,
          audienceMatch: 98
        }
      }
    ],
    brands: [
      {
        name: 'Moleskine',
        category: 'professional-services',
        penetration: 70,
        sentiment: 90,
        partnerships: [
          { type: 'collaboration', success: 95, duration: '4 months', reach: 650000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 6.2,
      seasonalPatterns: { spring: 95, summer: 80, fall: 125, winter: 110 },
      platformMigration: [
        { fromPlatform: 'tiktok', toPlatform: 'youtube', percentage: 15, reason: 'longer form content' }
      ],
      futureProjection: { sixMonth: 10, oneYear: 22, twoYear: 35, confidence: 80 }
    }
  },

  // Regional/Cultural Communities
  {
    id: 'mc-southern-belles',
    name: 'Southern Belles',
    description: 'Southern US women embracing traditional Southern culture with modern twists',
    category: 'cultural',
    size: 'established',
    platform: 'instagram',
    characteristics: {
      values: ['tradition', 'hospitality', 'family', 'community', 'elegance'],
      interests: ['fashion', 'cooking', 'entertaining', 'home decor', 'SEC football'],
      behaviors: ['hosting parties', 'family traditions', 'church activities', 'charity work'],
      language: ['bless your heart', 'y\'all', 'sweet tea', 'game day', 'hospitality'],
      visualAesthetics: ['pearls', 'pastels', 'monograms', 'florals', 'southern homes'],
      contentTypes: ['outfit posts', 'entertaining tips', 'family recipes', 'home tours'],
      engagementPatterns: [
        {
          type: 'peak_hours',
          description: 'Active during evening family time and weekend events',
          data: { morning: 65, afternoon: 70, evening: 95, night: 55 }
        }
      ]
    },
    demographics: {
      ageDistribution: { '18-25': 30, '25-35': 40, '35-45': 25, '45-55': 5, 'over-55': 0 },
      genderDistribution: { male: 5, female: 92, unisex: 3, other: 0 },
      incomeDistribution: { 'under-50k': 25, '50k-100k': 45, '100k-200k': 25, 'over-200k': 5 },
      educationLevel: 'High',
      occupationTypes: ['Teacher', 'Healthcare', 'Marketing', 'Homemaker', 'Non-profit']
    },
    geography: {
      globalReach: false,
      primaryRegions: ['southeast-us'],
      cityConcentrations: [
        { cityId: 'us-atlanta', concentration: 30, localVariations: ['modern southern', 'city southern charm'] },
        { cityId: 'us-nashville', concentration: 25, localVariations: ['music city culture', 'country influence'] },
        { cityId: 'us-miami', concentration: 15, localVariations: ['southern meets latin', 'coastal southern'] }
      ],
      ruralUrbanSplit: 60
    },
    segments: ['segment-authentic-storytellers', 'segment-community-builders'],
    trends: [
      {
        id: 'trend-gameday-fashion',
        name: 'Game Day Fashion',
        description: 'Elaborate outfits for college football games and tailgating',
        startDate: '2023-08-01',
        status: 'growing',
        virality: 80,
        linkedHashtags: ['#gameday', '#southernfashion', '#collegefootball', '#tailgate'],
        contentExamples: ['game day outfits', 'tailgate recipes', 'team spirit content']
      }
    ],
    influencers: [
      {
        id: 'inf-southern-1',
        handle: '@southerncharm',
        platform: 'instagram',
        followers: 75000,
        tier: 'micro',
        engagement: 7.8,
        niche: ['southern lifestyle', 'fashion', 'entertaining'],
        authenticity: 92,
        collaboration: {
          averageRate: 3200,
          responseRate: 80,
          previousBrands: ['Lilly Pulitzer', 'Vineyard Vines', 'Kendra Scott'],
          contentQuality: 88,
          audienceMatch: 95
        }
      }
    ],
    brands: [
      {
        name: 'Lilly Pulitzer',
        category: 'fashion-accessories',
        penetration: 85,
        sentiment: 92,
        partnerships: [
          { type: 'ambassador', success: 90, duration: '12 months', reach: 1800000 }
        ]
      }
    ],
    growth: {
      monthlyGrowthRate: 3.8,
      seasonalPatterns: { spring: 110, summer: 105, fall: 125, winter: 85 },
      platformMigration: [],
      futureProjection: { sixMonth: 5, oneYear: 12, twoYear: 20, confidence: 75 }
    }
  }
]

// Helper functions for micro-community data
export const getMicroCommunityById = (id: string): MicroCommunity | undefined => {
  return northAmericanMicroCommunities.find(community => community.id === id)
}

export const getMicroCommunitiesByCategory = (category: CommunityCategory): MicroCommunity[] => {
  return northAmericanMicroCommunities.filter(community => community.category === category)
}

export const getMicroCommunitiesBySize = (size: CommunitySize): MicroCommunity[] => {
  return northAmericanMicroCommunities.filter(community => community.size === size)
}

export const getMicroCommunitiesByPlatform = (platform: Platform): MicroCommunity[] => {
  return northAmericanMicroCommunities.filter(community => community.platform === platform)
}

export const getMicroCommunitiesByRegion = (region: NorthAmericanRegion): MicroCommunity[] => {
  return northAmericanMicroCommunities.filter(community => 
    community.geography.primaryRegions.includes(region)
  )
}

export const searchMicroCommunities = (query: string): MicroCommunity[] => {
  const lowerQuery = query.toLowerCase()
  return northAmericanMicroCommunities.filter(community => 
    community.name.toLowerCase().includes(lowerQuery) ||
    community.description.toLowerCase().includes(lowerQuery) ||
    community.characteristics.values.some(value => value.toLowerCase().includes(lowerQuery)) ||
    community.characteristics.interests.some(interest => interest.toLowerCase().includes(lowerQuery))
  )
}

export const getFastestGrowingCommunities = (limit: number = 5): MicroCommunity[] => {
  return northAmericanMicroCommunities
    .sort((a, b) => b.growth.monthlyGrowthRate - a.growth.monthlyGrowthRate)
    .slice(0, limit)
}

export const getCommunityTrends = (): Array<{ communityId: string; trends: any[] }> => {
  return northAmericanMicroCommunities.map(community => ({
    communityId: community.id,
    trends: community.trends
  }))
}

export const getCommunityInfluencers = (communityId: string) => {
  const community = getMicroCommunityById(communityId)
  return community?.influencers || []
}

export const getCommunityBrands = (communityId: string) => {
  const community = getMicroCommunityById(communityId)
  return community?.brands || []
}

// Category labels for UI
export const communityCategories: Record<CommunityCategory, string> = {
  'aesthetic': 'Aesthetic',
  'lifestyle': 'Lifestyle', 
  'professional': 'Professional',
  'hobby': 'Hobby',
  'cultural': 'Cultural',
  'wellness': 'Wellness',
  'tech': 'Technology',
  'creative': 'Creative',
  'social-cause': 'Social Cause',
  'sports': 'Sports',
  'food': 'Food & Beverage',
  'travel': 'Travel',
  'parenting': 'Parenting',
  'finance': 'Finance',
  'education': 'Education'
}

export const communitySizes: Record<CommunitySize, string> = {
  'emerging': 'Emerging (< 10K)',
  'growing': 'Growing (10K - 100K)',
  'established': 'Established (100K - 1M)',
  'massive': 'Massive (1M+)'
}