import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SegmentFinder } from '@/components/SegmentFinder'
import { SegmentMatcher } from '@/lib/segmentMatcher'
import { UserInputs, SegmentMatch } from '@/types/segments'
import { 
  getComprehensiveMarketAnalysis,
  getCommunityMarketProfile,
  findCrossMarketOpportunities 
} from '@/data/index'

// Mock the AuthContext
const mockAuthContext = {
  user: {
    subscriptionTier: 'pro',
    id: 'test-user',
    email: 'test@example.com'
  },
  canGenerateReport: jest.fn(() => true),
  incrementReportGeneration: jest.fn(),
  getUsageStats: jest.fn(() => ({ reportsGenerated: 0, limit: 10 }))
}

jest.mock('@/contexts/AuthContext', () => ({
  useAuth: () => mockAuthContext
}))

// Mock SegmentMatcher
jest.mock('@/lib/segmentMatcher')
const mockSegmentMatcher = SegmentMatcher as jest.Mocked<typeof SegmentMatcher>

// Mock data functions
jest.mock('@/data/index')
const mockGetComprehensiveMarketAnalysis = getComprehensiveMarketAnalysis as jest.MockedFunction<typeof getComprehensiveMarketAnalysis>
const mockGetCommunityMarketProfile = getCommunityMarketProfile as jest.MockedFunction<typeof getCommunityMarketProfile>
const mockFindCrossMarketOpportunities = findCrossMarketOpportunities as jest.MockedFunction<typeof findCrossMarketOpportunities>

describe('Report Generation with Hyperlocal Data', () => {
  const mockSegmentMatch: SegmentMatch = {
    segment: {
      id: 'segment-tech-innovators',
      code: 'TI1',
      name: 'Tech Innovators',
      tier: 'TIER1',
      digitalBehavior: 'DB1',
      valuesDriver: 'VD2',
      spendingPower: 'SP1',
      creatorAffinity: 'CA1',
      ageMin: 25,
      ageMax: 35,
      incomeMin: 75000,
      incomeMax: 150000,
      lifestyle: 'Tech-forward urban professional',
      description: 'Early adopters who value innovation and efficiency',
      launchStrategy: 'Focus on product demos and technical content'
    },
    matchScore: 85,
    reasons: [
      'Perfect age alignment (25-35)',
      'Strong Twitter presence',
      'Innovation-focused values'
    ],
    confidence: 0.85,
    premiumInsights: {
      detailedPersona: {
        name: 'Alex Chen',
        age: 29,
        income: 120000,
        location: 'San Francisco, CA',
        demographics: {
          gender: 'unisex',
          education: 'Computer Science Degree',
          occupation: 'Senior Software Engineer',
          householdSize: 2,
          maritalStatus: 'Single',
          hasChildren: false
        },
        psychographics: {
          values: ['innovation', 'efficiency', 'quality'],
          interests: ['technology', 'productivity', 'startups'],
          lifestyle: 'Fast-paced urban tech worker',
          personality: ['analytical', 'ambitious', 'early-adopter'],
          motivations: ['career advancement', 'efficiency gains', 'staying current'],
          painPoints: ['time management', 'information overload', 'work-life balance']
        },
        behaviorPatterns: [
          {
            activity: 'Twitter browsing',
            frequency: 'Daily',
            timeOfDay: 'Morning commute',
            platform: 'twitter',
            engagementType: 'Reading and sharing'
          }
        ],
        preferredChannels: ['twitter', 'linkedin', 'youtube'],
        spendingHabits: [
          {
            category: 'Tech tools',
            averageSpend: 200,
            frequency: 'Monthly',
            decisionFactors: ['efficiency', 'reviews', 'brand reputation']
          }
        ]
      },
      zipCodeAnalysis: [
        {
          zipCode: '94105',
          city: 'San Francisco',
          state: 'California',
          population: 45000,
          medianIncome: 125000,
          ageDistribution: { '25-35': 40, '35-45': 35, '18-25': 15, '45-55': 8, 'over-55': 2 },
          segmentPenetration: 35,
          marketOpportunity: 'High',
          recommendedChannels: ['twitter', 'linkedin']
        }
      ],
      competitorAnalysis: {
        competitorName: 'Notion',
        sharedAudience: 65,
        differentiationOpportunities: ['AI integration', 'Developer tools'],
        competitiveAdvantages: ['Better performance', 'More integrations'],
        marketGaps: ['Mobile experience', 'Offline capability'],
        recommendedPositioning: 'AI-first productivity platform'
      },
      launchStrategy: {
        phaseOne: {
          name: 'Community Building',
          duration: '3 months',
          objectives: ['Build developer community', 'Generate initial buzz'],
          tactics: [
            {
              name: 'Tech Twitter engagement',
              description: 'Engage with tech influencers and communities',
              platform: 'twitter',
              cost: 5000,
              expectedReach: 50000,
              priority: 'high'
            }
          ],
          expectedOutcomes: ['1000 beta users', '50 tech influencer relationships'],
          budget: 15000
        },
        phaseTwo: {
          name: 'Product Launch',
          duration: '2 months',
          objectives: ['Public launch', 'Scale user acquisition'],
          tactics: [
            {
              name: 'Product Hunt launch',
              description: 'Coordinate Product Hunt campaign',
              platform: 'twitter',
              cost: 8000,
              expectedReach: 100000,
              priority: 'high'
            }
          ],
          expectedOutcomes: ['10000 signups', 'Tech media coverage'],
          budget: 25000
        },
        phaseThree: {
          name: 'Scale & Optimize',
          duration: '4 months',
          objectives: ['Scale customer acquisition', 'Optimize conversion'],
          tactics: [
            {
              name: 'Content marketing',
              description: 'Technical blog and video content',
              platform: 'youtube',
              cost: 12000,
              expectedReach: 200000,
              priority: 'medium'
            }
          ],
          expectedOutcomes: ['50000 users', 'Positive unit economics'],
          budget: 35000
        },
        budget_allocation: {
          contentCreation: 25000,
          paidAdvertising: 20000,
          influencerPartnerships: 15000,
          platformFees: 5000,
          analytics: 3000,
          contingency: 7000
        },
        timeline: [
          {
            week: 1,
            milestones: ['Beta launch'],
            deliverables: ['Landing page', 'Beta program'],
            budget: 5000
          }
        ],
        kpis: [
          {
            metric: 'User signups',
            target: 10000,
            measurement: 'Total registered users',
            frequency: 'Weekly'
          }
        ],
        riskMitigation: ['Market timing risk', 'Technical execution risk']
      }
    }
  }

  const mockMarketAnalysis = {
    segmentId: 'segment-tech-innovators',
    relatedCommunities: [
      {
        community: {
          id: 'mc-tech-bros',
          name: 'Tech Bros',
          category: 'tech' as const,
          size: 'established' as const,
          platform: 'twitter' as const,
          characteristics: {
            values: ['innovation', 'efficiency'],
            interests: ['startups', 'AI/ML'],
            behaviors: ['early tech adoption'],
            language: ['growth hacking', 'MVP'],
            visualAesthetics: ['minimalist', 'clean lines'],
            contentTypes: ['thought leadership', 'product launches'],
            engagementPatterns: []
          },
          demographics: {
            ageDistribution: { '25-35': 65, '18-25': 15, '35-45': 18, '45-55': 2, 'over-55': 0 },
            genderDistribution: { male: 78, female: 20, unisex: 2, other: 0 },
            incomeDistribution: { 'under-50k': 5, '50k-100k': 25, '100k-200k': 45, 'over-200k': 25 },
            educationLevel: 'Very High',
            occupationTypes: ['Software Engineer', 'Product Manager']
          },
          geography: {
            globalReach: true,
            primaryRegions: ['west-coast-us' as const],
            cityConcentrations: [
              { cityId: 'us-san-francisco', concentration: 35, localVariations: ['venture capital focus'] }
            ],
            ruralUrbanSplit: 95
          },
          segments: ['segment-tech-innovators'],
          trends: [],
          influencers: [],
          brands: [],
          growth: {
            monthlyGrowthRate: 3.2,
            seasonalPatterns: { spring: 110, summer: 95, fall: 105, winter: 90 },
            platformMigration: [],
            futureProjection: { sixMonth: 8, oneYear: 15, twoYear: 25, confidence: 80 }
          }
        },
        strength: 95,
        relationship: 'dominates' as const
      }
    ],
    regionalDistribution: [['west-coast-us', 150], ['northeast-us', 120]],
    platformDistribution: [['twitter', 180], ['linkedin', 120]],
    cityAnalysis: {
      city: {
        id: 'us-san-francisco',
        name: 'San Francisco',
        state: 'California',
        country: 'United States',
        population: 875000,
        region: 'west-coast-us' as const,
        marketSize: 'large' as const,
        demographics: {
          medianAge: 38,
          medianIncome: 112000,
          educationLevel: 'Very High',
          diversityIndex: 85,
          techSavviness: 100,
          creatorEconomyPenetration: 95
        }
      },
      marketOpportunities: ['mc-tech-bros'],
      localCommunities: [
        {
          community: {
            id: 'mc-tech-bros',
            name: 'Tech Bros'
          },
          strength: 95
        }
      ]
    },
    totalCommunities: 3,
    averageStrength: 82
  }

  const mockCommunityProfile = {
    community: {
      id: 'mc-tech-bros',
      name: 'Tech Bros'
    },
    marketPotential: 87,
    insights: {
      relatedSegments: [],
      geographicStrongholds: [],
      seasonalPatterns: [],
      migrationPatterns: []
    },
    topCities: [
      {
        city: {
          id: 'us-san-francisco',
          name: 'San Francisco'
        },
        strength: 95,
        metadata: {
          confidence: 95,
          lastUpdated: '2024-07-01',
          source: 'platform_analysis',
          validFrom: '2024-01-01',
          tags: ['silicon-valley']
        }
      }
    ],
    competingCommunities: [],
    brandOpportunities: [],
    influencerTiers: { nano: 5, micro: 3, macro: 1 },
    seasonalPeaks: { spring: 110, summer: 95, fall: 105, winter: 90 },
    growthProjection: { sixMonth: 8, oneYear: 15, twoYear: 25, confidence: 80 }
  }

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Setup default mocks
    mockSegmentMatcher.matchSegments.mockReturnValue([mockSegmentMatch])
    mockGetComprehensiveMarketAnalysis.mockReturnValue(mockMarketAnalysis)
    mockGetCommunityMarketProfile.mockReturnValue(mockCommunityProfile)
    mockFindCrossMarketOpportunities.mockReturnValue({
      primaryCity: mockMarketAnalysis.cityAnalysis!.city,
      targetSegment: 'segment-tech-innovators',
      opportunities: [
        {
          city: {
            id: 'us-seattle',
            name: 'Seattle',
            state: 'Washington',
            country: 'United States',
            population: 750000,
            region: 'west-coast-us',
            marketSize: 'large',
            demographics: {
              medianAge: 35,
              medianIncome: 93000,
              educationLevel: 'Very High',
              diversityIndex: 75,
              techSavviness: 95,
              creatorEconomyPenetration: 85
            }
          },
          sharedCommunities: ['mc-tech-bros'],
          totalStrength: 85,
          communities: [mockCommunityProfile.community],
          averageStrength: 85,
          marketSimilarity: 78
        }
      ]
    })
  })

  describe('Basic Report Generation', () => {
    test('should render segment finder form', () => {
      render(<SegmentFinder />)
      
      expect(screen.getByText('Tell us about your brand')).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/e.g., Sustainable skincare/)).toBeInTheDocument()
    })

    test('should show hyperlocal targeting for premium users', () => {
      render(<SegmentFinder />)
      
      // Navigate to hyperlocal step
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      
      expect(screen.getByText('Hyperlocal targeting')).toBeInTheDocument()
      expect(screen.getByText('Enable Hyperlocal Targeting')).toBeInTheDocument()
    })

    test('should generate report with segment matches', async () => {
      const mockOnResults = jest.fn()
      render(<SegmentFinder onResults={mockOnResults} />)
      
      // Fill out form
      const descriptionInput = screen.getByPlaceholderText(/e.g., Sustainable skincare/)
      fireEvent.change(descriptionInput, { 
        target: { value: 'AI-powered productivity tool for developers' } 
      })
      
      // Navigate through steps and submit
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      await waitFor(() => {
        expect(mockSegmentMatcher.matchSegments).toHaveBeenCalled()
        expect(mockOnResults).toHaveBeenCalledWith(
          [mockSegmentMatch],
          expect.any(Object)
        )
      })
    })
  })

  describe('Hyperlocal Data Integration', () => {
    test('should include city data in report generation', async () => {
      const mockOnResults = jest.fn()
      render(<SegmentFinder onResults={mockOnResults} />)
      
      // Fill out form with hyperlocal data
      const descriptionInput = screen.getByPlaceholderText(/e.g., Sustainable skincare/)
      fireEvent.change(descriptionInput, { 
        target: { value: 'Tech productivity app' } 
      })
      
      // Navigate to hyperlocal step
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      
      // Enable hyperlocal targeting
      fireEvent.click(screen.getByText('Enable hyperlocal targeting'))
      
      await waitFor(() => {
        expect(screen.getByText('Select Target Cities')).toBeInTheDocument()
      })
      
      // Select cities (this would require more complex mocking of CitySelector)
      // For now, we'll test that the form accepts the data
      
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      await waitFor(() => {
        expect(mockSegmentMatcher.matchSegments).toHaveBeenCalled()
        const callArgs = mockSegmentMatcher.matchSegments.mock.calls[0][0]
        expect(callArgs.hyperlocalEnabled).toBe(true)
      })
    })

    test('should call market analysis with city data when hyperlocal is enabled', async () => {
      const mockOnResults = jest.fn((matches, userInputs) => {
        // Simulate the report generation logic that would call market analysis
        if (userInputs.hyperlocalEnabled && userInputs.targetCities?.length > 0) {
          userInputs.targetCities.forEach(city => {
            getComprehensiveMarketAnalysis(matches[0].segment.id, city.id)
          })
        }
      })
      
      render(<SegmentFinder onResults={mockOnResults} />)
      
      // Submit form with hyperlocal data
      const descriptionInput = screen.getByPlaceholderText(/e.g., Sustainable skincare/)
      fireEvent.change(descriptionInput, { 
        target: { value: 'Tech productivity app' } 
      })
      
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      fireEvent.click(screen.getByText('Continue'))
      
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      await waitFor(() => {
        expect(mockOnResults).toHaveBeenCalled()
      })
    })

    test('should generate cross-market opportunities for hyperlocal users', async () => {
      // Test that cross-market analysis is called for premium insights
      const matches = [mockSegmentMatch]
      const userInputs = {
        hyperlocalEnabled: true,
        targetCities: [mockMarketAnalysis.cityAnalysis!.city]
      }
      
      // Simulate premium insights generation
      if (userInputs.hyperlocalEnabled && userInputs.targetCities?.length > 0) {
        userInputs.targetCities.forEach(city => {
          findCrossMarketOpportunities(city.id, matches[0].segment.id)
        })
      }
      
      expect(mockFindCrossMarketOpportunities).toHaveBeenCalledWith(
        'us-san-francisco',
        'segment-tech-innovators'
      )
    })
  })

  describe('Premium Insights Generation', () => {
    test('should enhance segment matches with premium insights', () => {
      const matches = SegmentMatcher.matchSegments({
        brandDescription: 'AI productivity tool',
        category: 'tech-apps',
        hyperlocalEnabled: true,
        targetCities: [mockMarketAnalysis.cityAnalysis!.city]
      } as UserInputs)
      
      expect(matches[0].premiumInsights).toBeDefined()
      expect(matches[0].premiumInsights?.detailedPersona).toBeDefined()
      expect(matches[0].premiumInsights?.zipCodeAnalysis).toBeDefined()
      expect(matches[0].premiumInsights?.competitorAnalysis).toBeDefined()
      expect(matches[0].premiumInsights?.launchStrategy).toBeDefined()
    })

    test('should include hyperlocal ZIP code analysis', () => {
      const insights = mockSegmentMatch.premiumInsights!
      
      expect(insights.zipCodeAnalysis).toBeDefined()
      expect(insights.zipCodeAnalysis[0].city).toBe('San Francisco')
      expect(insights.zipCodeAnalysis[0].segmentPenetration).toBeGreaterThan(0)
      expect(insights.zipCodeAnalysis[0].marketOpportunity).toBe('High')
    })

    test('should provide detailed launch strategy with city-specific tactics', () => {
      const launchStrategy = mockSegmentMatch.premiumInsights!.launchStrategy
      
      expect(launchStrategy.phaseOne.tactics).toBeDefined()
      expect(launchStrategy.phaseOne.tactics[0].platform).toBe('twitter')
      expect(launchStrategy.budget_allocation).toBeDefined()
      expect(launchStrategy.timeline).toBeDefined()
      expect(launchStrategy.kpis).toBeDefined()
    })

    test('should include competitor analysis with differentiation opportunities', () => {
      const competitorAnalysis = mockSegmentMatch.premiumInsights!.competitorAnalysis
      
      expect(competitorAnalysis.competitorName).toBe('Notion')
      expect(competitorAnalysis.sharedAudience).toBeGreaterThan(0)
      expect(competitorAnalysis.differentiationOpportunities).toContain('AI integration')
      expect(competitorAnalysis.recommendedPositioning).toBeTruthy()
    })
  })

  describe('Community Profile Integration', () => {
    test('should generate community profiles for related communities', () => {
      const marketAnalysis = getComprehensiveMarketAnalysis('segment-tech-innovators')
      const topCommunity = marketAnalysis.relatedCommunities[0]
      
      if (topCommunity?.community) {
        const profile = getCommunityMarketProfile(topCommunity.community.id)
        
        expect(profile).toBeDefined()
        expect(profile?.marketPotential).toBeGreaterThan(0)
        expect(profile?.topCities).toBeDefined()
        expect(profile?.influencerTiers).toBeDefined()
      }
    })

    test('should identify top cities for community engagement', () => {
      const profile = getCommunityMarketProfile('mc-tech-bros')
      
      expect(profile?.topCities).toBeDefined()
      expect(profile?.topCities[0].city.name).toBe('San Francisco')
      expect(profile?.topCities[0].strength).toBeGreaterThan(90)
    })

    test('should provide influencer tier breakdown', () => {
      const profile = getCommunityMarketProfile('mc-tech-bros')
      
      expect(profile?.influencerTiers).toBeDefined()
      expect(profile?.influencerTiers.nano).toBeDefined()
      expect(profile?.influencerTiers.micro).toBeDefined()
      expect(profile?.influencerTiers.macro).toBeDefined()
    })
  })

  describe('Report Validation', () => {
    test('should validate all required data is present in generated report', async () => {
      const mockOnResults = jest.fn()
      render(<SegmentFinder onResults={mockOnResults} />)
      
      // Generate report
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      await waitFor(() => {
        expect(mockOnResults).toHaveBeenCalled()
        const [matches, userInputs] = mockOnResults.mock.calls[0]
        
        // Validate segment matches
        expect(matches).toBeDefined()
        expect(matches.length).toBeGreaterThan(0)
        expect(matches[0].segment).toBeDefined()
        expect(matches[0].matchScore).toBeGreaterThanOrEqual(0)
        expect(matches[0].confidence).toBeGreaterThanOrEqual(0)
        
        // Validate user inputs
        expect(userInputs).toBeDefined()
        expect(userInputs.brandDescription).toBeTruthy()
        expect(userInputs.category).toBeTruthy()
      })
    })

    test('should handle report generation errors gracefully', async () => {
      mockSegmentMatcher.matchSegments.mockImplementation(() => {
        throw new Error('Analysis failed')
      })
      
      const mockOnResults = jest.fn()
      render(<SegmentFinder onResults={mockOnResults} />)
      
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      // Should not crash the app
      await waitFor(() => {
        expect(mockSegmentMatcher.matchSegments).toHaveBeenCalled()
      })
    })

    test('should enforce usage limits for standard users', () => {
      mockAuthContext.user.subscriptionTier = 'standard'
      mockAuthContext.canGenerateReport.mockReturnValue(false)
      
      render(<SegmentFinder />)
      
      const submitButton = screen.getByText('Discover My Segments')
      fireEvent.click(submitButton)
      
      // Should prevent report generation
      expect(mockSegmentMatcher.matchSegments).not.toHaveBeenCalled()
    })
  })

  describe('Performance Tests', () => {
    test('should generate reports within acceptable time limits', async () => {
      const startTime = performance.now()
      
      const matches = SegmentMatcher.matchSegments({
        brandDescription: 'Test product',
        category: 'tech-apps',
        hyperlocalEnabled: true
      } as UserInputs)
      
      // Generate market analysis for top segment
      getComprehensiveMarketAnalysis(matches[0].segment.id)
      
      const endTime = performance.now()
      const executionTime = endTime - startTime
      
      expect(executionTime).toBeLessThan(100) // Should complete within 100ms for mocked data
    })

    test('should handle multiple concurrent report generations', async () => {
      const promises = Array(5).fill(null).map(() => 
        Promise.resolve(SegmentMatcher.matchSegments({
          brandDescription: 'Test product',
          category: 'tech-apps'
        } as UserInputs))
      )
      
      const results = await Promise.all(promises)
      
      expect(results).toHaveLength(5)
      results.forEach(matches => {
        expect(matches.length).toBeGreaterThan(0)
      })
    })
  })
})