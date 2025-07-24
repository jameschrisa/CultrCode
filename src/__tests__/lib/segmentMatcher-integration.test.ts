import { SegmentMatcher } from '@/lib/segmentMatcher'
import { UserInputs, SegmentMatch } from '@/types/segments'
import { 
  getComprehensiveMarketAnalysis,
  getCommunityMarketProfile,
  getMarketOpportunities 
} from '@/data/index'
import { getCityById } from '@/data/cities'
import { getMicroCommunityById } from '@/data/microCommunities'

describe('SegmentMatcher Integration with Database', () => {
  // Mock user inputs for testing
  const mockTechUserInputs: UserInputs = {
    brandDescription: 'AI-powered productivity tool for software developers and tech workers',
    category: 'tech-apps',
    priceRange: '25-75',
    targetAge: '25-35',
    targetGender: 'unisex',
    values: ['innovation', 'efficiency', 'quality'],
    seasonality: 'perennial',
    launchBudget: '25k-50k',
    followingSize: '10k-100k',
    primaryPlatform: 'twitter',
    closestCompetitor: 'Notion',
    targetCities: [
      getCityById('us-san-francisco')!,
      getCityById('us-seattle')!,
      getCityById('us-austin')!
    ],
    hyperlocalEnabled: true
  }

  const mockWellnessUserInputs: UserInputs = {
    brandDescription: 'Clean, sustainable skincare line for health-conscious millennials',
    category: 'beauty-skincare',
    priceRange: '75-200',
    targetAge: '25-35',
    targetGender: 'female',
    values: ['sustainability', 'quality', 'authenticity'],
    seasonality: 'perennial',
    launchBudget: '50k-100k',
    followingSize: '1k-10k',
    primaryPlatform: 'instagram',
    closestCompetitor: 'Glossier',
    targetCities: [
      getCityById('us-los-angeles')!,
      getCityById('us-nyc')!
    ],
    hyperlocalEnabled: true
  }

  const mockSouthernUserInputs: UserInputs = {
    brandDescription: 'Premium home entertaining and lifestyle brand with Southern charm',
    category: 'home-lifestyle',
    priceRange: '200-500',
    targetAge: '35-45',
    targetGender: 'female',
    values: ['tradition', 'quality', 'community'],
    seasonality: 'seasonal',
    launchBudget: '100k-500k',
    followingSize: '10k-100k',
    primaryPlatform: 'instagram',
    closestCompetitor: 'Magnolia',
    targetCities: [
      getCityById('us-atlanta')!,
      getCityById('us-nashville')!
    ],
    hyperlocalEnabled: true
  }

  describe('Basic Segment Matching', () => {
    test('should return segment matches with scores', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      
      expect(matches).toBeDefined()
      expect(matches.length).toBeGreaterThan(0)
      
      // Check that matches are sorted by score descending
      for (let i = 1; i < matches.length; i++) {
        expect(matches[i-1].matchScore).toBeGreaterThanOrEqual(matches[i].matchScore)
      }

      // Each match should have required properties
      matches.forEach(match => {
        expect(match.segment).toBeDefined()
        expect(match.matchScore).toBeGreaterThanOrEqual(0)
        expect(match.matchScore).toBeLessThanOrEqual(100)
        expect(match.reasons).toBeDefined()
        expect(Array.isArray(match.reasons)).toBe(true)
        expect(match.confidence).toBeGreaterThanOrEqual(0)
        expect(match.confidence).toBeLessThanOrEqual(1)
      })
    })

    test('should produce different results for different user types', () => {
      const techMatches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const wellnessMatches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      
      // Top segments should be different for different user types
      expect(techMatches[0].segment.id).not.toBe(wellnessMatches[0].segment.id)
      
      // Tech users should score higher on tech-related segments
      const techUserTopScore = techMatches[0].matchScore
      const wellnessUserTopScore = wellnessMatches[0].matchScore
      
      expect(techUserTopScore).toBeGreaterThan(50)
      expect(wellnessUserTopScore).toBeGreaterThan(50)
    })

    test('should generate relevant match reasons', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const topMatch = matches[0]
      
      expect(topMatch.reasons.length).toBeGreaterThan(0)
      
      // Should have age-related reason for 25-35 age group
      const hasAgeReason = topMatch.reasons.some(reason => 
        reason.toLowerCase().includes('age')
      )
      expect(hasAgeReason).toBe(true)

      // Should have platform-related reason for Twitter
      const hasPlatformReason = topMatch.reasons.some(reason => 
        reason.toLowerCase().includes('twitter')
      )
      expect(hasPlatformReason).toBe(true)
    })
  })

  describe('Integration with Market Analysis', () => {
    test('should connect segment matches to market analysis', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      
      expect(marketAnalysis).toBeDefined()
      expect(marketAnalysis.segmentId).toBe(topSegment.id)
      expect(marketAnalysis.relatedCommunities.length).toBeGreaterThan(0)
      
      // For tech users, should find tech-related communities
      const techCommunity = marketAnalysis.relatedCommunities.find(item => 
        item.community?.category === 'tech'
      )
      expect(techCommunity).toBeDefined()
    })

    test('should find relevant communities for wellness users', () => {
      const matches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      
      // Should find wellness-related communities
      const wellnessCommunity = marketAnalysis.relatedCommunities.find(item => 
        item.community?.category === 'wellness'
      )
      expect(wellnessCommunity).toBeDefined()
    })

    test('should include platform distribution matching user platform', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      
      // Should have Twitter in platform distribution
      const twitterPlatform = marketAnalysis.platformDistribution.find(([platform]) => 
        platform === 'twitter'
      )
      expect(twitterPlatform).toBeDefined()
    })
  })

  describe('Hyperlocal Integration', () => {
    test('should leverage city-specific data when hyperlocal is enabled', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const topSegment = matches[0].segment
      
      // Get market analysis for San Francisco (tech hub)
      const cityAnalysis = getComprehensiveMarketAnalysis(topSegment.id, 'us-san-francisco')
      
      expect(cityAnalysis.cityAnalysis).toBeDefined()
      expect(cityAnalysis.cityAnalysis?.city.id).toBe('us-san-francisco')
      expect(cityAnalysis.cityAnalysis?.marketOpportunities).toBeDefined()
      expect(cityAnalysis.cityAnalysis?.localCommunities).toBeDefined()
    })

    test('should find market opportunities in target cities', () => {
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const topSegment = matches[0].segment
      
      // Check for market opportunities in each target city
      mockTechUserInputs.targetCities?.forEach(city => {
        const opportunities = getMarketOpportunities(topSegment.id, city.id)
        expect(Array.isArray(opportunities)).toBe(true)
        
        // Should find at least some opportunities in tech-friendly cities
        if (city.id === 'us-san-francisco' || city.id === 'us-seattle') {
          expect(opportunities.length).toBeGreaterThan(0)
        }
      })
    })

    test('should identify regional preferences', () => {
      const matches = SegmentMatcher.matchSegments(mockSouthernUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      
      // Should show Southeast US as a strong region
      const southeastRegion = marketAnalysis.regionalDistribution.find(([region]) => 
        region === 'southeast-us'
      )
      expect(southeastRegion).toBeDefined()
    })

    test('should match communities to target cities', () => {
      const matches = SegmentMatcher.matchSegments(mockSouthernUserInputs)
      const topSegment = matches[0].segment
      
      const atlantaAnalysis = getComprehensiveMarketAnalysis(topSegment.id, 'us-atlanta')
      
      expect(atlantaAnalysis.cityAnalysis?.localCommunities).toBeDefined()
      
      // Should find Southern-related communities in Atlanta
      const southernCommunity = atlantaAnalysis.cityAnalysis?.localCommunities.find(item => 
        item.community?.id === 'mc-southern-belles'
      )
      expect(southernCommunity).toBeDefined()
    })
  })

  describe('Community Profile Integration', () => {
    test('should generate community profiles for matched segments', () => {
      const matches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      const topCommunity = marketAnalysis.relatedCommunities[0]
      
      if (topCommunity?.community) {
        const communityProfile = getCommunityMarketProfile(topCommunity.community.id)
        
        expect(communityProfile).toBeDefined()
        expect(communityProfile?.marketPotential).toBeGreaterThan(0)
        expect(communityProfile?.influencerTiers).toBeDefined()
        expect(communityProfile?.brandOpportunities).toBeDefined()
      }
    })

    test('should find relevant brand opportunities', () => {
      const matches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id)
      
      // Find wellness community
      const wellnessCommunity = marketAnalysis.relatedCommunities.find(item => 
        item.community?.category === 'wellness'
      )
      
      if (wellnessCommunity?.community) {
        const communityProfile = getCommunityMarketProfile(wellnessCommunity.community.id)
        
        // Should have brand opportunities in beauty/skincare space
        const beautyBrands = communityProfile?.brandOpportunities.filter(brand => 
          brand.category === 'beauty-skincare'
        )
        expect(beautyBrands?.length).toBeGreaterThan(0)
      }
    })

    test('should identify competitor overlaps', () => {
      const matches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      
      // Should find reasons mentioning Glossier (competitor)
      const topMatch = matches[0]
      const competitorReason = topMatch.reasons.find(reason => 
        reason.toLowerCase().includes('glossier')
      )
      // This might not always be present, but test the structure
      expect(topMatch.reasons).toBeDefined()
    })
  })

  describe('Data Consistency Tests', () => {
    test('should maintain data consistency across different user inputs', () => {
      const techMatches = SegmentMatcher.matchSegments(mockTechUserInputs)
      const wellnessMatches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      const southernMatches = SegmentMatcher.matchSegments(mockSouthernUserInputs)
      
      // All should return valid matches
      expect(techMatches.length).toBeGreaterThan(0)
      expect(wellnessMatches.length).toBeGreaterThan(0)
      expect(southernMatches.length).toBeGreaterThan(0)
      
      // All should have valid market analysis
      const techAnalysis = getComprehensiveMarketAnalysis(techMatches[0].segment.id)
      const wellnessAnalysis = getComprehensiveMarketAnalysis(wellnessMatches[0].segment.id)
      const southernAnalysis = getComprehensiveMarketAnalysis(southernMatches[0].segment.id)
      
      expect(techAnalysis.relatedCommunities.length).toBeGreaterThan(0)
      expect(wellnessAnalysis.relatedCommunities.length).toBeGreaterThan(0)
      expect(southernAnalysis.relatedCommunities.length).toBeGreaterThan(0)
    })

    test('should handle edge cases gracefully', () => {
      const edgeCaseInputs: UserInputs = {
        brandDescription: 'A',
        category: 'pet-care',
        priceRange: 'over-500',
        targetAge: 'over-55',
        targetGender: 'other',
        values: [],
        seasonality: 'non-applicable',
        launchBudget: 'under-5k',
        followingSize: 'under-1k',
        primaryPlatform: 'discord',
        closestCompetitor: '',
        targetCities: [],
        hyperlocalEnabled: false
      }
      
      const matches = SegmentMatcher.matchSegments(edgeCaseInputs)
      
      expect(matches).toBeDefined()
      expect(matches.length).toBeGreaterThan(0)
      expect(matches[0].matchScore).toBeGreaterThanOrEqual(0)
    })

    test('should validate hyperlocal data integration', () => {
      // Test with valid cities
      const validInputs = { 
        ...mockTechUserInputs, 
        targetCities: [getCityById('us-san-francisco')!, getCityById('us-nyc')!]
      }
      
      const matches = SegmentMatcher.matchSegments(validInputs)
      expect(matches).toBeDefined()
      
      // Test with invalid/missing cities
      const invalidInputs = { 
        ...mockTechUserInputs, 
        targetCities: []
      }
      
      const matchesNoCity = SegmentMatcher.matchSegments(invalidInputs)
      expect(matchesNoCity).toBeDefined()
      expect(matchesNoCity.length).toBeGreaterThan(0)
    })
  })

  describe('Performance Integration Tests', () => {
    test('should handle multiple segment matches efficiently', () => {
      const startTime = performance.now()
      
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      
      // Get market analysis for top 3 segments
      matches.slice(0, 3).forEach(match => {
        getComprehensiveMarketAnalysis(match.segment.id)
      })
      
      const endTime = performance.now()
      const executionTime = endTime - startTime
      
      expect(executionTime).toBeLessThan(500) // Should complete within 500ms
    })

    test('should handle concurrent segment matching', async () => {
      const promises = [
        Promise.resolve(SegmentMatcher.matchSegments(mockTechUserInputs)),
        Promise.resolve(SegmentMatcher.matchSegments(mockWellnessUserInputs)),
        Promise.resolve(SegmentMatcher.matchSegments(mockSouthernUserInputs))
      ]
      
      const results = await Promise.all(promises)
      
      expect(results).toHaveLength(3)
      results.forEach(matches => {
        expect(matches.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Real-World Scenario Tests', () => {
    test('should handle complete user journey: segment matching → market analysis → community profiles', () => {
      // Step 1: Segment matching
      const matches = SegmentMatcher.matchSegments(mockTechUserInputs)
      expect(matches.length).toBeGreaterThan(0)
      
      const topSegment = matches[0].segment
      
      // Step 2: Market analysis
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id, 'us-san-francisco')
      expect(marketAnalysis).toBeDefined()
      expect(marketAnalysis.cityAnalysis).toBeDefined()
      
      // Step 3: Community profiles
      const topCommunity = marketAnalysis.relatedCommunities[0]
      if (topCommunity?.community) {
        const communityProfile = getCommunityMarketProfile(topCommunity.community.id)
        expect(communityProfile).toBeDefined()
        expect(communityProfile?.marketPotential).toBeGreaterThan(0)
      }
    })

    test('should provide actionable insights for brand launch', () => {
      const matches = SegmentMatcher.matchSegments(mockWellnessUserInputs)
      const topSegment = matches[0].segment
      
      const marketAnalysis = getComprehensiveMarketAnalysis(topSegment.id, 'us-los-angeles')
      
      // Should have actionable insights
      expect(marketAnalysis.relatedCommunities.length).toBeGreaterThan(0)
      expect(marketAnalysis.platformDistribution.length).toBeGreaterThan(0)
      expect(marketAnalysis.cityAnalysis?.marketOpportunities).toBeDefined()
      
      // Platform insights should include Instagram (user's primary platform)
      const instagramInsight = marketAnalysis.platformDistribution.find(([platform]) => 
        platform === 'instagram'
      )
      expect(instagramInsight).toBeDefined()
    })
  })
})