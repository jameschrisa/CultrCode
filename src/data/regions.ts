import { Region, RegionalEconomics, RegionalCreatorProfile, RegionalSegmentData } from '@/types/segments'

export const northAmericanRegions: Region[] = [
  // United States - Northeast
  {
    id: 'region-northeast-us',
    name: 'Northeast US',
    code: 'northeast-us',
    country: 'United States',
    description: 'Historic, educated, and financially sophisticated region with high creator economy adoption',
    culturalCharacteristics: [
      'Fast-paced urban lifestyle',
      'High educational attainment',
      'Cultural sophistication',
      'Early technology adoption',
      'Financial/business oriented',
      'Arts and media hub',
      'Historic consciousness',
      'Quality over quantity mindset'
    ],
    economicProfile: {
      averageIncome: 75000,
      costOfLiving: 125, // index, 100 = national average
      unemploymentRate: 4.2,
      gdpPerCapita: 85000,
      mainIndustries: ['Finance', 'Technology', 'Media', 'Education', 'Healthcare'],
      emergingMarkets: ['Fintech', 'EdTech', 'Digital Media', 'Sustainable Fashion']
    },
    creatorEconomyProfile: {
      creatorDensity: 2400, // creators per 100k population
      averageFollowerSize: 45000,
      topPlatforms: ['instagram', 'linkedin', 'twitter', 'substack'],
      contentCategories: ['professional-services', 'fashion-accessories', 'tech-apps', 'coaching-consulting'],
      seasonalTrends: [
        {
          season: 'fall',
          peakCategories: ['fashion-accessories', 'professional-services', 'coaching-consulting'],
          engagementMultiplier: 1.3,
          topHashtags: ['#NYFashionWeek', '#BackToWork', '#FallVibes', '#Productivity']
        },
        {
          season: 'winter',
          peakCategories: ['health-fitness', 'home-lifestyle', 'digital-products'],
          engagementMultiplier: 1.1,
          topHashtags: ['#NewYearGoals', '#WorkFromHome', '#WinterWellness']
        }
      ],
      influencerTiers: [
        { tier: 'nano', range: '1K-10K', count: 125000, averageEngagement: 4.8, averageRate: 250 },
        { tier: 'micro', range: '10K-100K', count: 45000, averageEngagement: 3.2, averageRate: 1500 },
        { tier: 'macro', range: '100K-1M', count: 8500, averageEngagement: 2.1, averageRate: 8500 }
      ]
    },
    microCommunities: [
      'mc-finance-bros',
      'mc-coastal-grandma',
      'mc-academia-aesthetic',
      'mc-brooklyn-minimalists',
      'mc-wall-street-wellness'
    ],
    cities: [
      'us-nyc',
      'us-boston',
      'us-philadelphia'
    ],
    segments: [
      { segmentId: 'segment-urban-professionals', penetration: 32, growth: 8.5, seasonality: 15, competitiveness: 85 },
      { segmentId: 'segment-creative-elites', penetration: 28, growth: 12.3, seasonality: 22, competitiveness: 90 },
      { segmentId: 'segment-tech-savvy-millennials', penetration: 25, growth: 15.7, seasonality: 8, competitiveness: 75 }
    ]
  },

  // United States - West Coast
  {
    id: 'region-west-coast-us',
    name: 'West Coast US',
    code: 'west-coast-us',
    country: 'United States',
    description: 'Innovation hub with the highest creator economy penetration and tech-forward culture',
    culturalCharacteristics: [
      'Innovation and disruption mindset',
      'Wellness and sustainability focused',
      'Early adopter culture',
      'Outdoor lifestyle integration',
      'Progressive values',
      'Content creation native',
      'Entrepreneurial spirit',
      'Aesthetic consciousness'
    ],
    economicProfile: {
      averageIncome: 95000,
      costOfLiving: 150,
      unemploymentRate: 5.1,
      gdpPerCapita: 105000,
      mainIndustries: ['Technology', 'Entertainment', 'Biotech', 'Clean Energy', 'Creative Services'],
      emergingMarkets: ['Creator Economy Tools', 'Wellness Tech', 'Sustainable Products', 'AR/VR Content']
    },
    creatorEconomyProfile: {
      creatorDensity: 3200,
      averageFollowerSize: 65000,
      topPlatforms: ['instagram', 'tiktok', 'youtube', 'twitter'],
      contentCategories: ['tech-apps', 'health-fitness', 'sustainable-products', 'beauty-skincare'],
      seasonalTrends: [
        {
          season: 'summer',
          peakCategories: ['health-fitness', 'travel-experiences', 'sustainable-products'],
          engagementMultiplier: 1.4,
          topHashtags: ['#SummerVibes', '#Wellness', '#SustainableLiving', '#OutdoorLife']
        },
        {
          season: 'spring',
          peakCategories: ['beauty-skincare', 'tech-apps', 'sustainable-products'],
          engagementMultiplier: 1.2,
          topHashtags: ['#CleanBeauty', '#TechLaunch', '#SpringCleaning', '#Innovation']
        }
      ],
      influencerTiers: [
        { tier: 'nano', range: '1K-10K', count: 180000, averageEngagement: 5.2, averageRate: 350 },
        { tier: 'micro', range: '10K-100K', count: 75000, averageEngagement: 3.8, averageRate: 2200 },
        { tier: 'macro', range: '100K-1M', count: 15000, averageEngagement: 2.5, averageRate: 12000 }
      ]
    },
    microCommunities: [
      'mc-tech-bros',
      'mc-wellness-girlies',
      'mc-sustainable-minimalists',
      'mc-silicon-valley-founders',
      'mc-california-surfers',
      'mc-biohackers',
      'mc-clean-girl-aesthetic'
    ],
    cities: [
      'us-los-angeles',
      'us-san-francisco',
      'us-seattle',
      'us-portland',
      'us-san-diego'
    ],
    segments: [
      { segmentId: 'segment-tech-innovators', penetration: 35, growth: 18.2, seasonality: 12, competitiveness: 95 },
      { segmentId: 'segment-wellness-enthusiasts', penetration: 42, growth: 22.1, seasonality: 25, competitiveness: 80 },
      { segmentId: 'segment-creative-professionals', penetration: 38, growth: 16.8, seasonality: 18, competitiveness: 85 }
    ]
  },

  // United States - Southeast
  {
    id: 'region-southeast-us',
    name: 'Southeast US',
    code: 'southeast-us',
    country: 'United States',
    description: 'Rapidly growing creator economy with strong cultural identity and emerging tech hubs',
    culturalCharacteristics: [
      'Strong cultural identity',
      'Community-oriented',
      'Music and entertainment culture',
      'Hospitality and warmth',
      'Traditional values with modern twist',
      'Rising entrepreneurship',
      'Food culture emphasis',
      'Authentic storytelling'
    ],
    economicProfile: {
      averageIncome: 58000,
      costOfLiving: 95,
      unemploymentRate: 3.8,
      gdpPerCapita: 65000,
      mainIndustries: ['Entertainment', 'Tourism', 'Agriculture', 'Manufacturing', 'Emerging Tech'],
      emergingMarkets: ['Music/Audio Content', 'Food & Beverage', 'Tourism Tech', 'Authentic Brands']
    },
    creatorEconomyProfile: {
      creatorDensity: 1800,
      averageFollowerSize: 35000,
      topPlatforms: ['tiktok', 'instagram', 'youtube', 'twitter'],
      contentCategories: ['food-beverage', 'travel-experiences', 'home-lifestyle', 'beauty-skincare'],
      seasonalTrends: [
        {
          season: 'spring',
          peakCategories: ['travel-experiences', 'food-beverage', 'home-lifestyle'],
          engagementMultiplier: 1.3,
          topHashtags: ['#SouthernCharm', '#FoodieLife', '#TravelSouth', '#HomeDecor']
        },
        {
          season: 'fall',
          peakCategories: ['fashion-accessories', 'home-lifestyle', 'food-beverage'],
          engagementMultiplier: 1.2,
          topHashtags: ['#FallFashion', '#ComfortFood', '#CozyHome', '#SouthernStyle']
        }
      ],
      influencerTiers: [
        { tier: 'nano', range: '1K-10K', count: 95000, averageEngagement: 5.8, averageRate: 180 },
        { tier: 'micro', range: '10K-100K', count: 35000, averageEngagement: 4.1, averageRate: 1200 },
        { tier: 'macro', range: '100K-1M', count: 6500, averageEngagement: 2.8, averageRate: 7500 }
      ]
    },
    microCommunities: [
      'mc-southern-belles',
      'mc-music-city-creators',
      'mc-beach-house-aesthetic',
      'mc-southern-foodies',
      'mc-country-lifestyle',
      'mc-coastal-grandma-south'
    ],
    cities: [
      'us-miami',
      'us-atlanta',
      'us-nashville'
    ],
    segments: [
      { segmentId: 'segment-authentic-storytellers', penetration: 28, growth: 25.4, seasonality: 20, competitiveness: 60 },
      { segmentId: 'segment-community-builders', penetration: 35, growth: 19.8, seasonality: 15, competitiveness: 55 },
      { segmentId: 'segment-lifestyle-aspirationalists', penetration: 32, growth: 21.2, seasonality: 30, competitiveness: 65 }
    ]
  },

  // Canada - Eastern
  {
    id: 'region-eastern-canada',
    name: 'Eastern Canada',
    code: 'eastern-canada',
    country: 'Canada',
    description: 'Bilingual, culturally diverse region with sophisticated creator economy and strong community values',
    culturalCharacteristics: [
      'Bilingual culture (English/French)',
      'Multiculturalism',
      'Community-oriented',
      'Environmental consciousness',
      'Arts and culture focus',
      'Politeness and inclusivity',
      'Healthcare and wellness priority',
      'Quality of life emphasis'
    ],
    economicProfile: {
      averageIncome: 65000, // CAD
      costOfLiving: 110,
      unemploymentRate: 5.2,
      gdpPerCapita: 72000,
      mainIndustries: ['Healthcare', 'Finance', 'Technology', 'Media', 'Government'],
      emergingMarkets: ['HealthTech', 'Clean Energy', 'Digital Content', 'Social Impact']
    },
    creatorEconomyProfile: {
      creatorDensity: 2100,
      averageFollowerSize: 38000,
      topPlatforms: ['instagram', 'tiktok', 'youtube', 'linkedin'],
      contentCategories: ['health-fitness', 'sustainable-products', 'home-lifestyle', 'professional-services'],
      seasonalTrends: [
        {
          season: 'winter',
          peakCategories: ['home-lifestyle', 'health-fitness', 'digital-products'],
          engagementMultiplier: 1.4,
          topHashtags: ['#CanadianWinter', '#CozyVibes', '#WinterWellness', '#HealthyLiving']
        },
        {
          season: 'summer',
          peakCategories: ['travel-experiences', 'sustainable-products', 'health-fitness'],
          engagementMultiplier: 1.2,
          topHashtags: ['#CanadianSummer', '#EcoFriendly', '#OutdoorLife', '#SustainableLiving']
        }
      ],
      influencerTiers: [
        { tier: 'nano', range: '1K-10K', count: 85000, averageEngagement: 6.2, averageRate: 200 },
        { tier: 'micro', range: '10K-100K', count: 28000, averageEngagement: 4.5, averageRate: 1400 },
        { tier: 'macro', range: '100K-1M', count: 4500, averageEngagement: 3.1, averageRate: 8000 }
      ]
    },
    microCommunities: [
      'mc-canadian-wellness',
      'mc-toronto-creatives',
      'mc-bilingual-creators',
      'mc-sustainable-canadians',
      'mc-winter-enthusiasts',
      'mc-maple-aesthetic'
    ],
    cities: [
      'ca-toronto',
      'ca-montreal',
      'ca-ottawa'
    ],
    segments: [
      { segmentId: 'segment-conscious-consumers', penetration: 38, growth: 16.7, seasonality: 25, competitiveness: 70 },
      { segmentId: 'segment-multicultural-millennials', penetration: 32, growth: 14.2, seasonality: 12, competitiveness: 65 },
      { segmentId: 'segment-wellness-advocates', penetration: 45, growth: 20.1, seasonality: 30, competitiveness: 75 }
    ]
  }
]

// Helper functions for regional data
export const getRegionById = (id: string): Region | undefined => {
  return northAmericanRegions.find(region => region.id === id)
}

export const getRegionByCode = (code: string): Region | undefined => {
  return northAmericanRegions.find(region => region.code === code)
}

export const getRegionsByCountry = (country: string): Region[] => {
  return northAmericanRegions.filter(region => region.country === country)
}

export const getRegionsWithHighCreatorDensity = (threshold: number = 2000): Region[] => {
  return northAmericanRegions.filter(region => region.creatorEconomyProfile.creatorDensity >= threshold)
}

export const getRegionsBySegmentPenetration = (segmentId: string, minPenetration: number = 30): Region[] => {
  return northAmericanRegions.filter(region => 
    region.segments.some(seg => seg.segmentId === segmentId && seg.penetration >= minPenetration)
  )
}

export const getTopPlatformsByRegion = (regionId: string): string[] => {
  const region = getRegionById(regionId)
  return region?.creatorEconomyProfile.topPlatforms || []
}

export const getSeasonalTrendsByRegion = (regionId: string, season: string) => {
  const region = getRegionById(regionId)
  return region?.creatorEconomyProfile.seasonalTrends.find(trend => trend.season === season)
}