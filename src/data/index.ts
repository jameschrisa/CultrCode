// Main data exports
export * from './cities'
export * from './regions'
export * from './microCommunities'
export * from './crossReferences'

// Import all data for comprehensive analysis
import { northAmericanCities, getCityById } from './cities'
import { northAmericanRegions, getRegionById } from './regions'
import { northAmericanMicroCommunities, getMicroCommunityById } from './microCommunities'
import { 
  crossReferences, 
  getCrossReferencesByEntity, 
  getRelatedEntities,
  getCommunityInsights,
  getMarketOpportunities 
} from './crossReferences'

import type { 
  TargetCity, 
  Region, 
  MicroCommunity, 
  CrossReference,
  NorthAmericanRegion,
  CommunityCategory,
  Platform
} from '@/types/segments'

// Comprehensive analysis functions
export const getComprehensiveMarketAnalysis = (segmentId: string, cityId?: string) => {
  const segmentReferences = getCrossReferencesByEntity(segmentId)
  
  // Get all communities related to this segment
  const relatedCommunities = segmentReferences
    .filter(ref => ref.type === 'segment-community')
    .map(ref => {
      const communityId = ref.entity1.id === segmentId ? ref.entity2.id : ref.entity1.id
      const community = getMicroCommunityById(communityId)
      return {
        community,
        strength: ref.strength,
        relationship: ref.relationship
      }
    })
    .filter(item => item.community)
    .sort((a, b) => b.strength - a.strength)

  // Get regional distribution
  const regionalDistribution = new Map<string, number>()
  relatedCommunities.forEach(({ community, strength }) => {
    if (community) {
      community.geography.primaryRegions.forEach(region => {
        const current = regionalDistribution.get(region) || 0
        regionalDistribution.set(region, current + strength)
      })
    }
  })

  // Get platform distribution
  const platformDistribution = new Map<Platform, number>()
  relatedCommunities.forEach(({ community, strength }) => {
    if (community) {
      const current = platformDistribution.get(community.platform) || 0
      platformDistribution.set(community.platform, current + strength)
    }
  })

  // City-specific analysis if provided
  let cityAnalysis = null
  if (cityId) {
    const city = getCityById(cityId)
    const opportunities = getMarketOpportunities(segmentId, cityId)
    const cityReferences = getCrossReferencesByEntity(cityId)
    
    cityAnalysis = {
      city,
      marketOpportunities: opportunities,
      localCommunities: cityReferences
        .filter(ref => ref.type === 'community-city')
        .map(ref => {
          const communityId = ref.entity1.id === cityId ? ref.entity2.id : ref.entity1.id
          return {
            community: getMicroCommunityById(communityId),
            strength: ref.strength
          }
        })
        .filter(item => item.community)
    }
  }

  return {
    segmentId,
    relatedCommunities: relatedCommunities.slice(0, 10), // Top 10
    regionalDistribution: Array.from(regionalDistribution.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5),
    platformDistribution: Array.from(platformDistribution.entries())
      .sort((a, b) => b[1] - a[1]),
    cityAnalysis,
    totalCommunities: relatedCommunities.length,
    averageStrength: relatedCommunities.reduce((sum, item) => sum + item.strength, 0) / relatedCommunities.length
  }
}

export const getCommunityMarketProfile = (communityId: string) => {
  const community = getMicroCommunityById(communityId)
  if (!community) return null

  const insights = getCommunityInsights(communityId)
  
  // Calculate market potential score
  const sizeMultiplier = {
    'emerging': 1,
    'growing': 2,
    'established': 3,
    'massive': 4
  }[community.size]

  const engagementScore = community.influencers.reduce((sum, inf) => sum + inf.engagement, 0) / community.influencers.length || 0
  const authenticityScore = community.influencers.reduce((sum, inf) => sum + inf.authenticity, 0) / community.influencers.length || 0
  
  const marketPotential = (
    (sizeMultiplier * 25) + 
    (community.growth.monthlyGrowthRate * 10) +
    (engagementScore * 5) +
    (authenticityScore * 0.3)
  )

  // Get top cities for this community
  const topCities = insights.geographicStrongholds
    .map(ref => ({
      city: getCityById(ref.entity2.id),
      strength: ref.strength,
      metadata: ref.metadata
    }))
    .filter(item => item.city)
    .sort((a, b) => b.strength - a.strength)

  // Get competing communities (same category, similar platform)
  const competingCommunities = northAmericanMicroCommunities
    .filter(c => 
      c.id !== communityId && 
      c.category === community.category &&
      (c.platform === community.platform || 
       c.geography.primaryRegions.some(r => community.geography.primaryRegions.includes(r)))
    )
    .map(c => ({
      community: c,
      overlap: calculateCommunityOverlap(community, c)
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 5)

  return {
    community,
    marketPotential: Math.min(100, marketPotential),
    insights,
    topCities: topCities.slice(0, 5),
    competingCommunities,
    brandOpportunities: community.brands.filter(b => b.sentiment > 70),
    influencerTiers: community.influencers.reduce((acc, inf) => {
      acc[inf.tier] = (acc[inf.tier] || 0) + 1
      return acc
    }, {} as Record<string, number>),
    seasonalPeaks: community.growth.seasonalPatterns,
    growthProjection: community.growth.futureProjection
  }
}

export const getRegionalCreatorEconomySnapshot = (regionId: string) => {
  const region = getRegionById(regionId)
  if (!region) return null

  // Get all cities in this region
  const regionCities = northAmericanCities.filter(city => city.region === region.code)
  
  // Get all communities with primary presence in this region
  const regionCommunities = northAmericanMicroCommunities.filter(community =>
    community.geography.primaryRegions.includes(region.code)
  )

  // Calculate aggregate metrics
  const totalCreatorEconomyPenetration = regionCities.reduce(
    (sum, city) => sum + city.demographics.creatorEconomyPenetration, 0
  ) / regionCities.length

  const averageIncome = regionCities.reduce(
    (sum, city) => sum + city.demographics.medianIncome, 0
  ) / regionCities.length

  const totalPopulation = regionCities.reduce((sum, city) => sum + city.population, 0)

  // Community distribution by category
  const communityDistribution = regionCommunities.reduce((acc, community) => {
    acc[community.category] = (acc[community.category] || 0) + 1
    return acc
  }, {} as Record<CommunityCategory, number>)

  // Platform preference analysis
  const platformPreferences = regionCommunities.reduce((acc, community) => {
    acc[community.platform] = (acc[community.platform] || 0) + 1
    return acc
  }, {} as Record<Platform, number>)

  // Growth opportunities (fast-growing communities)
  const growthOpportunities = regionCommunities
    .filter(community => community.growth.monthlyGrowthRate > 3)
    .sort((a, b) => b.growth.monthlyGrowthRate - a.growth.monthlyGrowthRate)
    .slice(0, 5)

  return {
    region,
    metrics: {
      totalPopulation,
      totalCreatorEconomyPenetration,
      averageIncome,
      cityCount: regionCities.length,
      communityCount: regionCommunities.length
    },
    cities: regionCities.sort((a, b) => b.demographics.creatorEconomyPenetration - a.demographics.creatorEconomyPenetration),
    communities: regionCommunities.sort((a, b) => b.growth.monthlyGrowthRate - a.growth.monthlyGrowthRate),
    communityDistribution: Object.entries(communityDistribution)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5),
    platformPreferences: Object.entries(platformPreferences)
      .sort((a, b) => b[1] - a[1]),
    growthOpportunities,
    seasonalTrends: region.creatorEconomyProfile.seasonalTrends,
    influencerTiers: region.creatorEconomyProfile.influencerTiers
  }
}

export const findCrossMarketOpportunities = (primaryCityId: string, targetSegment: string) => {
  const primaryCity = getCityById(primaryCityId)
  if (!primaryCity) return null

  // Get communities strong in the primary city
  const cityReferences = getCrossReferencesByEntity(primaryCityId)
  const primaryCommunities = cityReferences
    .filter(ref => ref.type === 'community-city' && ref.strength >= 70)
    .map(ref => ref.entity1.id === primaryCityId ? ref.entity2.id : ref.entity1.id)

  // Find other cities where these communities are also strong
  const crossMarketOpportunities = new Map<string, { city: TargetCity; sharedCommunities: string[]; totalStrength: number }>()

  primaryCommunities.forEach(communityId => {
    const communityReferences = getCrossReferencesByEntity(communityId)
    communityReferences
      .filter(ref => 
        ref.type === 'community-city' && 
        ref.strength >= 60 &&
        ref.entity2.id !== primaryCityId
      )
      .forEach(ref => {
        const cityId = ref.entity2.id
        const city = getCityById(cityId)
        if (city) {
          const existing = crossMarketOpportunities.get(cityId)
          if (existing) {
            existing.sharedCommunities.push(communityId)
            existing.totalStrength += ref.strength
          } else {
            crossMarketOpportunities.set(cityId, {
              city,
              sharedCommunities: [communityId],
              totalStrength: ref.strength
            })
          }
        }
      })
  })

  // Sort by total strength and shared community count
  const opportunities = Array.from(crossMarketOpportunities.values())
    .filter(opp => opp.sharedCommunities.length >= 2) // At least 2 shared communities
    .sort((a, b) => {
      const aScore = a.totalStrength + (a.sharedCommunities.length * 10)
      const bScore = b.totalStrength + (b.sharedCommunities.length * 10)
      return bScore - aScore
    })
    .slice(0, 10)

  return {
    primaryCity,
    targetSegment,
    opportunities: opportunities.map(opp => ({
      ...opp,
      communities: opp.sharedCommunities.map(id => getMicroCommunityById(id)).filter(Boolean),
      averageStrength: opp.totalStrength / opp.sharedCommunities.length,
      marketSimilarity: calculateMarketSimilarity(primaryCity, opp.city)
    }))
  }
}

// Helper function to calculate community overlap
const calculateCommunityOverlap = (community1: MicroCommunity, community2: MicroCommunity): number => {
  let overlap = 0

  // Geographic overlap
  const sharedRegions = community1.geography.primaryRegions.filter(r => 
    community2.geography.primaryRegions.includes(r)
  ).length
  overlap += sharedRegions * 20

  // Demographic overlap
  const ageDiff = Math.abs(
    Object.entries(community1.demographics.ageDistribution).reduce((sum, [age, pct]) => 
      sum + (pct * parseInt(age.split('-')[0])), 0
    ) / 100 -
    Object.entries(community2.demographics.ageDistribution).reduce((sum, [age, pct]) => 
      sum + (pct * parseInt(age.split('-')[0])), 0
    ) / 100
  )
  overlap += Math.max(0, 20 - ageDiff)

  // Interest overlap
  const sharedInterests = community1.characteristics.interests.filter(i => 
    community2.characteristics.interests.includes(i)
  ).length
  overlap += sharedInterests * 5

  // Platform similarity
  if (community1.platform === community2.platform) {
    overlap += 15
  }

  return Math.min(100, overlap)
}

// Helper function to calculate market similarity between cities
const calculateMarketSimilarity = (city1: TargetCity, city2: TargetCity): number => {
  let similarity = 0

  // Income similarity (closer incomes = higher similarity)
  const incomeDiff = Math.abs(city1.demographics.medianIncome - city2.demographics.medianIncome)
  similarity += Math.max(0, 30 - (incomeDiff / 2000))

  // Creator economy penetration similarity
  const creatorDiff = Math.abs(city1.demographics.creatorEconomyPenetration - city2.demographics.creatorEconomyPenetration)
  similarity += Math.max(0, 25 - creatorDiff)

  // Market size similarity
  if (city1.marketSize === city2.marketSize) {
    similarity += 20
  }

  // Tech savviness similarity
  const techDiff = Math.abs(city1.demographics.techSavviness - city2.demographics.techSavviness)
  similarity += Math.max(0, 15 - (techDiff / 2))

  // Diversity similarity
  const diversityDiff = Math.abs(city1.demographics.diversityIndex - city2.demographics.diversityIndex)
  similarity += Math.max(0, 10 - (diversityDiff / 3))

  return Math.min(100, similarity)
}

// Data validation and health checks
export const validateDataIntegrity = () => {
  const issues: string[] = []

  // Check for orphaned references
  crossReferences.forEach(ref => {
    const entity1Exists = checkEntityExists(ref.entity1)
    const entity2Exists = checkEntityExists(ref.entity2)
    
    if (!entity1Exists) {
      issues.push(`Cross-reference ${ref.id}: Entity1 ${ref.entity1.id} not found`)
    }
    if (!entity2Exists) {
      issues.push(`Cross-reference ${ref.id}: Entity2 ${ref.entity2.id} not found`)
    }
  })

  // Check for duplicate community IDs in regions
  northAmericanRegions.forEach(region => {
    const duplicates = region.microCommunities.filter((id, index) => 
      region.microCommunities.indexOf(id) !== index
    )
    if (duplicates.length > 0) {
      issues.push(`Region ${region.id}: Duplicate community IDs: ${duplicates.join(', ')}`)
    }
  })

  // Check for missing city references in regions
  northAmericanRegions.forEach(region => {
    region.cities.forEach(cityId => {
      const city = getCityById(cityId)
      if (!city) {
        issues.push(`Region ${region.id}: City ${cityId} not found`)
      } else if (city.region !== region.code) {
        issues.push(`Region ${region.id}: City ${cityId} region mismatch`)
      }
    })
  })

  return {
    isValid: issues.length === 0,
    issues,
    totalCities: northAmericanCities.length,
    totalRegions: northAmericanRegions.length,
    totalCommunities: northAmericanMicroCommunities.length,
    totalCrossReferences: crossReferences.length
  }
}

const checkEntityExists = (entity: { id: string; type: string }): boolean => {
  switch (entity.type) {
    case 'city':
      return !!getCityById(entity.id)
    case 'region':
      return !!getRegionById(entity.id)
    case 'community':
      return !!getMicroCommunityById(entity.id)
    case 'segment':
      // Segment validation would need to check against segments data
      return true // Placeholder
    default:
      return false
  }
}

// Export summary statistics
export const getDataSummary = () => {
  const validation = validateDataIntegrity()
  
  return {
    validation,
    counts: {
      cities: northAmericanCities.length,
      regions: northAmericanRegions.length,
      communities: northAmericanMicroCommunities.length,
      crossReferences: crossReferences.length
    },
    coverage: {
      countriesCovered: Array.from(new Set(northAmericanCities.map(c => c.country))),
      regionsCovered: Array.from(new Set(northAmericanCities.map(c => c.region))),
      platformsCovered: Array.from(new Set(northAmericanMicroCommunities.map(c => c.platform))),
      categoriesCovered: Array.from(new Set(northAmericanMicroCommunities.map(c => c.category)))
    },
    topMetrics: {
      highestCreatorPenetrationCity: northAmericanCities
        .sort((a, b) => b.demographics.creatorEconomyPenetration - a.demographics.creatorEconomyPenetration)[0],
      fastestGrowingCommunity: northAmericanMicroCommunities
        .sort((a, b) => b.growth.monthlyGrowthRate - a.growth.monthlyGrowthRate)[0],
      mostPopulousCity: northAmericanCities
        .sort((a, b) => b.population - a.population)[0],
      strongestCrossReference: crossReferences
        .sort((a, b) => b.strength - a.strength)[0]
    }
  }
}