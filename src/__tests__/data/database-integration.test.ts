import {
  getComprehensiveMarketAnalysis,
  getCommunityMarketProfile,
  getRegionalCreatorEconomySnapshot,
  findCrossMarketOpportunities,
  validateDataIntegrity,
  getDataSummary
} from '@/data/index'

import {
  northAmericanCities,
  getCityById,
  getTopCreatorEconomyCities
} from '@/data/cities'

import {
  northAmericanRegions,
  getRegionById
} from '@/data/regions'

import {
  northAmericanMicroCommunities,
  getMicroCommunityById,
  getFastestGrowingCommunities
} from '@/data/microCommunities'

import {
  crossReferences,
  getCrossReferencesByEntity,
  getMarketOpportunities
} from '@/data/crossReferences'

describe('Database Integration Tests', () => {
  describe('Data Integrity', () => {
    test('should have valid data structure', () => {
      const validation = validateDataIntegrity()
      
      expect(validation.isValid).toBe(true)
      expect(validation.issues).toHaveLength(0)
      expect(validation.totalCities).toBeGreaterThan(0)
      expect(validation.totalRegions).toBeGreaterThan(0)
      expect(validation.totalCommunities).toBeGreaterThan(0)
      expect(validation.totalCrossReferences).toBeGreaterThan(0)
    })

    test('should have consistent city-region mappings', () => {
      northAmericanCities.forEach(city => {
        const region = getRegionById(`region-${city.region}`)
        expect(region).toBeDefined()
        expect(region?.cities).toContain(city.id)
      })
    })

    test('should have valid cross-references', () => {
      crossReferences.forEach(ref => {
        expect(ref.strength).toBeGreaterThanOrEqual(0)
        expect(ref.strength).toBeLessThanOrEqual(100)
        expect(ref.metadata.confidence).toBeGreaterThanOrEqual(0)
        expect(ref.metadata.confidence).toBeLessThanOrEqual(100)
        expect(ref.entity1.id).not.toBe(ref.entity2.id)
      })
    })

    test('should have communities referenced in regions', () => {
      northAmericanRegions.forEach(region => {
        region.microCommunities.forEach(communityId => {
          const community = getMicroCommunityById(communityId)
          expect(community).toBeDefined()
          expect(community?.geography.primaryRegions).toContain(region.code)
        })
      })
    })
  })

  describe('City Data', () => {
    test('should retrieve city by ID', () => {
      const nyc = getCityById('us-nyc')
      
      expect(nyc).toBeDefined()
      expect(nyc?.name).toBe('New York City')
      expect(nyc?.state).toBe('New York')
      expect(nyc?.country).toBe('United States')
      expect(nyc?.region).toBe('northeast-us')
      expect(nyc?.demographics.creatorEconomyPenetration).toBeGreaterThan(0)
    })

    test('should return top creator economy cities', () => {
      const topCities = getTopCreatorEconomyCities(5)
      
      expect(topCities).toHaveLength(5)
      expect(topCities[0].demographics.creatorEconomyPenetration).toBeGreaterThanOrEqual(
        topCities[4].demographics.creatorEconomyPenetration
      )
    })

    test('should have valid demographic data', () => {
      northAmericanCities.forEach(city => {
        expect(city.demographics.medianAge).toBeGreaterThan(0)
        expect(city.demographics.medianIncome).toBeGreaterThan(0)
        expect(city.demographics.creatorEconomyPenetration).toBeGreaterThanOrEqual(0)
        expect(city.demographics.creatorEconomyPenetration).toBeLessThanOrEqual(100)
        expect(city.demographics.techSavviness).toBeGreaterThanOrEqual(0)
        expect(city.demographics.techSavviness).toBeLessThanOrEqual(100)
      })
    })
  })

  describe('Region Data', () => {
    test('should retrieve region by ID', () => {
      const westCoast = getRegionById('region-west-coast-us')
      
      expect(westCoast).toBeDefined()
      expect(westCoast?.name).toBe('West Coast US')
      expect(westCoast?.code).toBe('west-coast-us')
      expect(westCoast?.creatorEconomyProfile.creatorDensity).toBeGreaterThan(0)
      expect(westCoast?.economicProfile.averageIncome).toBeGreaterThan(0)
    })

    test('should have valid economic profiles', () => {
      northAmericanRegions.forEach(region => {
        expect(region.economicProfile.averageIncome).toBeGreaterThan(0)
        expect(region.economicProfile.costOfLiving).toBeGreaterThan(0)
        expect(region.economicProfile.unemploymentRate).toBeGreaterThanOrEqual(0)
        expect(region.economicProfile.gdpPerCapita).toBeGreaterThan(0)
        expect(region.economicProfile.mainIndustries.length).toBeGreaterThan(0)
      })
    })

    test('should have valid creator economy profiles', () => {
      northAmericanRegions.forEach(region => {
        expect(region.creatorEconomyProfile.creatorDensity).toBeGreaterThan(0)
        expect(region.creatorEconomyProfile.averageFollowerSize).toBeGreaterThan(0)
        expect(region.creatorEconomyProfile.topPlatforms.length).toBeGreaterThan(0)
        expect(region.creatorEconomyProfile.influencerTiers.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Micro-Community Data', () => {
    test('should retrieve community by ID', () => {
      const techBros = getMicroCommunityById('mc-tech-bros')
      
      expect(techBros).toBeDefined()
      expect(techBros?.name).toBe('Tech Bros')
      expect(techBros?.category).toBe('tech')
      expect(techBros?.platform).toBe('twitter')
      expect(techBros?.characteristics.values).toContain('innovation')
    })

    test('should have valid community characteristics', () => {
      northAmericanMicroCommunities.forEach(community => {
        expect(community.characteristics.values.length).toBeGreaterThan(0)
        expect(community.characteristics.interests.length).toBeGreaterThan(0)
        expect(community.characteristics.behaviors.length).toBeGreaterThan(0)
        expect(community.demographics.ageDistribution).toBeDefined()
        expect(community.demographics.genderDistribution).toBeDefined()
      })
    })

    test('should have valid growth metrics', () => {
      northAmericanMicroCommunities.forEach(community => {
        expect(community.growth.monthlyGrowthRate).toBeGreaterThanOrEqual(0)
        expect(community.growth.futureProjection.confidence).toBeGreaterThanOrEqual(0)
        expect(community.growth.futureProjection.confidence).toBeLessThanOrEqual(100)
      })
    })

    test('should return fastest growing communities', () => {
      const fastestGrowing = getFastestGrowingCommunities(3)
      
      expect(fastestGrowing).toHaveLength(3)
      expect(fastestGrowing[0].growth.monthlyGrowthRate).toBeGreaterThanOrEqual(
        fastestGrowing[2].growth.monthlyGrowthRate
      )
    })
  })

  describe('Cross-Reference System', () => {
    test('should find cross-references by entity', () => {
      const refs = getCrossReferencesByEntity('mc-tech-bros')
      
      expect(refs.length).toBeGreaterThan(0)
      refs.forEach(ref => {
        expect(
          ref.entity1.id === 'mc-tech-bros' || ref.entity2.id === 'mc-tech-bros'
        ).toBe(true)
      })
    })

    test('should find market opportunities', () => {
      const opportunities = getMarketOpportunities('segment-tech-innovators', 'us-san-francisco')
      
      expect(Array.isArray(opportunities)).toBe(true)
      opportunities.forEach(opportunityId => {
        const community = getMicroCommunityById(opportunityId)
        expect(community).toBeDefined()
      })
    })

    test('should have valid relationship strengths', () => {
      crossReferences.forEach(ref => {
        expect(typeof ref.strength).toBe('number')
        expect(ref.strength).toBeGreaterThanOrEqual(0)
        expect(ref.strength).toBeLessThanOrEqual(100)
      })
    })
  })

  describe('Comprehensive Market Analysis', () => {
    test('should generate market analysis for segment', () => {
      const analysis = getComprehensiveMarketAnalysis('segment-tech-innovators')
      
      expect(analysis).toBeDefined()
      expect(analysis.segmentId).toBe('segment-tech-innovators')
      expect(analysis.relatedCommunities.length).toBeGreaterThan(0)
      expect(analysis.regionalDistribution.length).toBeGreaterThan(0)
      expect(analysis.platformDistribution.length).toBeGreaterThan(0)
      expect(analysis.totalCommunities).toBeGreaterThan(0)
      expect(analysis.averageStrength).toBeGreaterThan(0)
    })

    test('should generate market analysis with city', () => {
      const analysis = getComprehensiveMarketAnalysis('segment-tech-innovators', 'us-san-francisco')
      
      expect(analysis).toBeDefined()
      expect(analysis.cityAnalysis).toBeDefined()
      expect(analysis.cityAnalysis?.city).toBeDefined()
      expect(analysis.cityAnalysis?.city?.id).toBe('us-san-francisco')
      expect(analysis.cityAnalysis?.marketOpportunities).toBeDefined()
      expect(analysis.cityAnalysis?.localCommunities).toBeDefined()
    })

    test('should sort communities by strength', () => {
      const analysis = getComprehensiveMarketAnalysis('segment-wellness-enthusiasts')
      
      const strengths = analysis.relatedCommunities.map(item => item.strength)
      for (let i = 1; i < strengths.length; i++) {
        expect(strengths[i-1]).toBeGreaterThanOrEqual(strengths[i])
      }
    })
  })

  describe('Community Market Profile', () => {
    test('should generate community profile', () => {
      const profile = getCommunityMarketProfile('mc-wellness-girlies')
      
      expect(profile).toBeDefined()
      expect(profile?.community.id).toBe('mc-wellness-girlies')
      expect(profile?.marketPotential).toBeGreaterThan(0)
      expect(profile?.marketPotential).toBeLessThanOrEqual(100)
      expect(profile?.insights).toBeDefined()
      expect(profile?.topCities).toBeDefined()
      expect(profile?.competingCommunities).toBeDefined()
      expect(profile?.brandOpportunities).toBeDefined()
      expect(profile?.influencerTiers).toBeDefined()
    })

    test('should calculate market potential correctly', () => {
      const profile = getCommunityMarketProfile('mc-tech-bros')
      
      expect(profile?.marketPotential).toBeGreaterThan(0)
      expect(profile?.marketPotential).toBeLessThanOrEqual(100)
    })

    test('should return null for invalid community', () => {
      const profile = getCommunityMarketProfile('invalid-community-id')
      
      expect(profile).toBeNull()
    })
  })

  describe('Regional Creator Economy Snapshot', () => {
    test('should generate regional snapshot', () => {
      const snapshot = getRegionalCreatorEconomySnapshot('region-west-coast-us')
      
      expect(snapshot).toBeDefined()
      expect(snapshot?.region.id).toBe('region-west-coast-us')
      expect(snapshot?.metrics.totalPopulation).toBeGreaterThan(0)
      expect(snapshot?.metrics.cityCount).toBeGreaterThan(0)
      expect(snapshot?.metrics.communityCount).toBeGreaterThan(0)
      expect(snapshot?.cities).toBeDefined()
      expect(snapshot?.communities).toBeDefined()
      expect(snapshot?.communityDistribution).toBeDefined()
      expect(snapshot?.platformPreferences).toBeDefined()
      expect(snapshot?.growthOpportunities).toBeDefined()
    })

    test('should return null for invalid region', () => {
      const snapshot = getRegionalCreatorEconomySnapshot('invalid-region-id')
      
      expect(snapshot).toBeNull()
    })

    test('should sort cities by creator economy penetration', () => {
      const snapshot = getRegionalCreatorEconomySnapshot('region-west-coast-us')
      
      const penetrationRates = snapshot?.cities.map(city => city.demographics.creatorEconomyPenetration) || []
      for (let i = 1; i < penetrationRates.length; i++) {
        expect(penetrationRates[i-1]).toBeGreaterThanOrEqual(penetrationRates[i])
      }
    })
  })

  describe('Cross-Market Opportunities', () => {
    test('should find cross-market opportunities', () => {
      const opportunities = findCrossMarketOpportunities('us-san-francisco', 'segment-tech-innovators')
      
      expect(opportunities).toBeDefined()
      expect(opportunities?.primaryCity.id).toBe('us-san-francisco')
      expect(opportunities?.opportunities).toBeDefined()
      
      opportunities?.opportunities.forEach(opp => {
        expect(opp.city).toBeDefined()
        expect(opp.sharedCommunities.length).toBeGreaterThanOrEqual(2)
        expect(opp.communities).toBeDefined()
        expect(opp.averageStrength).toBeGreaterThan(0)
        expect(opp.marketSimilarity).toBeGreaterThanOrEqual(0)
        expect(opp.marketSimilarity).toBeLessThanOrEqual(100)
      })
    })

    test('should return null for invalid city', () => {
      const opportunities = findCrossMarketOpportunities('invalid-city', 'segment-tech-innovators')
      
      expect(opportunities).toBeNull()
    })

    test('should calculate market similarity', () => {
      const opportunities = findCrossMarketOpportunities('us-nyc', 'segment-urban-professionals')
      
      opportunities?.opportunities.forEach(opp => {
        expect(typeof opp.marketSimilarity).toBe('number')
        expect(opp.marketSimilarity).toBeGreaterThanOrEqual(0)
        expect(opp.marketSimilarity).toBeLessThanOrEqual(100)
      })
    })
  })

  describe('Data Summary', () => {
    test('should generate comprehensive data summary', () => {
      const summary = getDataSummary()
      
      expect(summary).toBeDefined()
      expect(summary.validation).toBeDefined()
      expect(summary.counts).toBeDefined()
      expect(summary.coverage).toBeDefined()
      expect(summary.topMetrics).toBeDefined()

      // Check counts
      expect(summary.counts.cities).toBeGreaterThan(0)
      expect(summary.counts.regions).toBeGreaterThan(0)
      expect(summary.counts.communities).toBeGreaterThan(0)
      expect(summary.counts.crossReferences).toBeGreaterThan(0)

      // Check coverage
      expect(summary.coverage.countriesCovered).toContain('United States')
      expect(summary.coverage.countriesCovered).toContain('Canada')
      expect(summary.coverage.regionsCovered.length).toBeGreaterThan(0)
      expect(summary.coverage.platformsCovered.length).toBeGreaterThan(0)
      expect(summary.coverage.categoriesCovered.length).toBeGreaterThan(0)

      // Check top metrics
      expect(summary.topMetrics.highestCreatorPenetrationCity).toBeDefined()
      expect(summary.topMetrics.fastestGrowingCommunity).toBeDefined()
      expect(summary.topMetrics.mostPopulousCity).toBeDefined()
      expect(summary.topMetrics.strongestCrossReference).toBeDefined()
    })
  })

  describe('Performance Tests', () => {
    test('should handle large-scale data queries efficiently', () => {
      const startTime = performance.now()
      
      // Run multiple queries
      getComprehensiveMarketAnalysis('segment-tech-innovators')
      getCommunityMarketProfile('mc-wellness-girlies')
      getRegionalCreatorEconomySnapshot('region-west-coast-us')
      findCrossMarketOpportunities('us-san-francisco', 'segment-tech-innovators')
      
      const endTime = performance.now()
      const executionTime = endTime - startTime
      
      // Should complete within reasonable time (adjust threshold as needed)
      expect(executionTime).toBeLessThan(1000) // 1 second
    })

    test('should handle concurrent queries', async () => {
      const promises = [
        Promise.resolve(getComprehensiveMarketAnalysis('segment-tech-innovators')),
        Promise.resolve(getCommunityMarketProfile('mc-wellness-girlies')),
        Promise.resolve(getRegionalCreatorEconomySnapshot('region-west-coast-us')),
        Promise.resolve(findCrossMarketOpportunities('us-nyc', 'segment-urban-professionals'))
      ]
      
      const results = await Promise.all(promises)
      
      expect(results).toHaveLength(4)
      results.forEach(result => {
        expect(result).toBeDefined()
      })
    })
  })
})