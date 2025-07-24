import { UserInputs, SegmentMatch, PremiumInsights, CustomerPersona, ZipCodeData, CompetitorInsights, DetailedLaunchStrategy, Platform } from '@/types/segments'

export class PremiumInsightsGenerator {
  
  static generatePremiumInsights(userInputs: UserInputs, segmentMatch: SegmentMatch): PremiumInsights {
    return {
      detailedPersona: this.generateCustomerPersona(userInputs, segmentMatch),
      zipCodeAnalysis: this.generateZipCodeAnalysis(userInputs, segmentMatch),
      competitorAnalysis: this.generateCompetitorAnalysis(userInputs),
      launchStrategy: this.generateDetailedLaunchStrategy(userInputs, segmentMatch)
    }
  }

  private static generateCustomerPersona(userInputs: UserInputs, segmentMatch: SegmentMatch): CustomerPersona {
    const segment = segmentMatch.segment
    const names = ['Sarah Chen', 'Marcus Johnson', 'Emily Rodriguez', 'Alex Kim', 'Jordan Williams']
    const randomName = names[Math.floor(Math.random() * names.length)]
    
    const ageRanges = {
      '18-25': 22,
      '25-35': 29,
      '35-45': 39,
      '45-55': 49,
      'over-55': 58
    }
    
    const income = Math.floor((segment.incomeMin + segment.incomeMax) / 2)
    const age = ageRanges[userInputs.targetAge as keyof typeof ageRanges] || 30
    
    return {
      name: randomName,
      age,
      income,
      location: this.getLocationBySegment(segment.code),
      demographics: {
        gender: userInputs.targetGender,
        education: this.getEducationBySegment(segment.code),
        occupation: this.getOccupationByCategory(userInputs.category),
        householdSize: Math.floor(Math.random() * 3) + 2,
        maritalStatus: age > 28 ? 'Married' : 'Single',
        hasChildren: age > 30 && Math.random() > 0.4
      },
      psychographics: {
        values: userInputs.values.slice(0, 5),
        interests: this.getInterestsByCategory(userInputs.category),
        lifestyle: segment.lifestyle,
        personality: this.getPersonalityBySegment(segment.code),
        motivations: this.getMotivationsByValues(userInputs.values),
        painPoints: this.getPainPointsByCategory(userInputs.category)
      },
      behaviorPatterns: this.generateBehaviorPatterns(userInputs.primaryPlatform),
      preferredChannels: [userInputs.primaryPlatform, ...this.getSecondaryChannels(userInputs.primaryPlatform)] as Platform[],
      spendingHabits: this.generateSpendingHabits(userInputs.priceRange, userInputs.category)
    }
  }

  private static generateZipCodeAnalysis(userInputs: UserInputs, segmentMatch: SegmentMatch): ZipCodeData[] {
    const segment = segmentMatch.segment
    const targetStates = this.getTargetStatesBySegment(segment.code)
    const zipCodes: ZipCodeData[] = []
    
    targetStates.forEach(state => {
      const stateZips = this.getZipCodesByState(state)
      stateZips.forEach(zip => {
        zipCodes.push({
          ...zip,
          segmentPenetration: Math.floor(segmentMatch.matchScore * (0.8 + Math.random() * 0.4)),
          marketOpportunity: this.calculateMarketOpportunity(zip.population, zip.medianIncome),
          recommendedChannels: this.getChannelsByDemographics(zip.ageDistribution) as Platform[]
        })
      })
    })
    
    return zipCodes.sort((a, b) => b.segmentPenetration - a.segmentPenetration).slice(0, 15)
  }

  private static generateCompetitorAnalysis(userInputs: UserInputs): CompetitorInsights {
    const competitorName = userInputs.closestCompetitor || this.getDefaultCompetitor(userInputs.category)
    
    return {
      competitorName,
      sharedAudience: Math.floor(60 + Math.random() * 30),
      differentiationOpportunities: this.getDifferentiationOpportunities(userInputs.category, userInputs.values),
      competitiveAdvantages: this.getCompetitiveAdvantages(userInputs.category, userInputs.values),
      marketGaps: this.getMarketGaps(userInputs.category),
      recommendedPositioning: this.getRecommendedPositioning(userInputs.category, userInputs.values)
    }
  }

  private static generateDetailedLaunchStrategy(userInputs: UserInputs, segmentMatch: SegmentMatch): DetailedLaunchStrategy {
    const budgetNum = this.getBudgetNumber(userInputs.launchBudget)
    
    return {
      phaseOne: {
        name: 'Foundation & Awareness (Weeks 1-4)',
        duration: '4 weeks',
        objectives: [
          'Establish brand presence and credibility',
          'Build initial audience base of 1,000+ engaged followers',
          'Create foundational content library',
          'Set up analytics and tracking systems'
        ],
        tactics: this.getPhaseTactics('foundation', userInputs.primaryPlatform, budgetNum * 0.3),
        expectedOutcomes: [
          '1,000+ new followers',
          '5% engagement rate',
          '100+ email subscribers'
        ],
        budget: budgetNum * 0.3
      },
      phaseTwo: {
        name: 'Growth & Engagement (Weeks 5-8)',
        duration: '4 weeks',
        objectives: [
          'Scale content production and distribution',
          'Launch influencer partnership program',
          'Begin paid advertising campaigns',
          'Develop customer feedback loops'
        ],
        tactics: this.getPhaseTactics('growth', userInputs.primaryPlatform, budgetNum * 0.4),
        expectedOutcomes: [
          '5,000+ total followers',
          '10% engagement rate',
          '500+ email subscribers',
          'First sales conversions'
        ],
        budget: budgetNum * 0.4
      },
      phaseThree: {
        name: 'Launch & Scale (Weeks 9-12)',
        duration: '4 weeks',
        objectives: [
          'Execute full product/service launch',
          'Maximize reach through all channels',
          'Optimize conversion funnels',
          'Scale successful campaigns'
        ],
        tactics: this.getPhaseTactics('launch', userInputs.primaryPlatform, budgetNum * 0.3),
        expectedOutcomes: [
          '10,000+ total followers',
          '15% engagement rate',
          '1,000+ customers acquired',
          'Break-even or profitability'
        ],
        budget: budgetNum * 0.3
      },
      budget_allocation: {
        contentCreation: 30,
        paidAdvertising: 25,
        influencerPartnerships: 20,
        platformFees: 10,
        analytics: 10,
        contingency: 5
      },
      timeline: this.generateTimeline(),
      kpis: this.generateKPIs(userInputs.category),
      riskMitigation: this.getRiskMitigation(userInputs.category)
    }
  }

  // Helper methods
  private static getLocationBySegment(segmentCode: string): string {
    const locations = {
      'LE1': 'Los Angeles, CA',
      'LE2': 'Portland, OR',
      'LE3': 'Austin, TX',
      'EB1': 'Denver, CO',
      'EB2': 'Seattle, WA',
      'EB3': 'Miami, FL',
      'QS1': 'New York, NY',
      'QS2': 'Chicago, IL',
      'QS3': 'San Francisco, CA'
    }
    return locations[segmentCode as keyof typeof locations] || 'New York, NY'
  }

  private static getEducationBySegment(segmentCode: string): string {
    const education = {
      'LE1': 'Bachelor\'s Degree',
      'LE2': 'Master\'s Degree',
      'LE3': 'Bachelor\'s Degree',
      'EB1': 'Master\'s Degree',
      'EB2': 'Bachelor\'s Degree',
      'EB3': 'Some College',
      'QS1': 'Master\'s Degree',
      'QS2': 'Bachelor\'s Degree',
      'QS3': 'PhD/Professional Degree'
    }
    return education[segmentCode as keyof typeof education] || 'Bachelor\'s Degree'
  }

  private static getOccupationByCategory(category: string): string {
    const occupations = {
      'beauty-skincare': 'Marketing Manager',
      'health-fitness': 'Wellness Coach',
      'digital-products': 'Software Developer',
      'fashion-accessories': 'Creative Director',
      'food-beverage': 'Food Blogger',
      'sustainable-products': 'Environmental Consultant',
      'tech-apps': 'Product Manager',
      'coaching-consulting': 'Business Consultant',
      'home-lifestyle': 'Interior Designer',
      'professional-services': 'Account Executive'
    }
    return occupations[category as keyof typeof occupations] || 'Professional'
  }

  private static getInterestsByCategory(category: string): string[] {
    const interests = {
      'beauty-skincare': ['Skincare routines', 'Beauty trends', 'Self-care', 'Wellness'],
      'health-fitness': ['Yoga', 'Nutrition', 'Meditation', 'Outdoor activities'],
      'digital-products': ['Technology', 'Productivity', 'Online learning', 'Innovation'],
      'fashion-accessories': ['Fashion trends', 'Style inspiration', 'Shopping', 'Design'],
      'food-beverage': ['Cooking', 'Food photography', 'Restaurants', 'Nutrition']
    }
    return interests[category as keyof typeof interests] || ['Lifestyle', 'Shopping', 'Social media']
  }

  private static getPersonalityBySegment(segmentCode: string): string[] {
    const personalities = {
      'LE1': ['Ambitious', 'Trend-conscious', 'Social', 'Creative'],
      'LE2': ['Conscious', 'Thoughtful', 'Authentic', 'Values-driven'],
      'LE3': ['Stylish', 'Curated', 'Aesthetic', 'Influential'],
      'EB1': ['Community-focused', 'Collaborative', 'Supportive', 'Inclusive'],
      'EB2': ['Mindful', 'Sustainable', 'Intentional', 'Quality-focused'],
      'EB3': ['Trend-following', 'Social', 'Impulse-driven', 'Fashion-forward']
    }
    return personalities[segmentCode as keyof typeof personalities] || ['Curious', 'Engaged', 'Social']
  }

  private static getMotivationsByValues(values: string[]): string[] {
    const motivations = []
    if (values.includes('sustainability')) motivations.push('Making environmentally conscious choices')
    if (values.includes('quality')) motivations.push('Investing in long-lasting products')
    if (values.includes('community')) motivations.push('Connecting with like-minded people')
    if (values.includes('innovation')) motivations.push('Staying ahead of trends')
    return motivations.length ? motivations : ['Personal growth', 'Authentic experiences']
  }

  private static getPainPointsByCategory(category: string): string[] {
    const painPoints = {
      'beauty-skincare': ['Finding products for sensitive skin', 'Information overload', 'Price vs quality concerns'],
      'health-fitness': ['Lack of time', 'Motivation consistency', 'Conflicting advice'],
      'digital-products': ['Feature complexity', 'Security concerns', 'Integration challenges'],
      'fashion-accessories': ['Finding authentic style', 'Sustainable options', 'Size/fit issues']
    }
    return painPoints[category as keyof typeof painPoints] || ['Limited budget', 'Too many choices', 'Trust concerns']
  }

  private static generateBehaviorPatterns(primaryPlatform: string): any[] {
    return [
      {
        activity: 'Content consumption',
        frequency: 'Daily',
        timeOfDay: 'Evening (7-9 PM)',
        platform: primaryPlatform,
        engagementType: 'Likes, comments, shares'
      },
      {
        activity: 'Product research',
        frequency: 'Weekly',
        timeOfDay: 'Weekend mornings',
        platform: primaryPlatform,
        engagementType: 'Saves, clicks, direct messages'
      }
    ]
  }

  private static getSecondaryChannels(primary: string): string[] {
    const channels = {
      'instagram': ['tiktok', 'youtube'],
      'tiktok': ['instagram', 'youtube'],
      'youtube': ['instagram', 'linkedin'],
      'linkedin': ['twitter', 'youtube']
    }
    return channels[primary as keyof typeof channels] || ['instagram', 'youtube']
  }

  private static generateSpendingHabits(priceRange: string, category: string): any[] {
    const ranges = {
      'under-25': 20,
      '25-75': 50,
      '75-200': 125,
      '200-500': 350,
      'over-500': 750
    }
    
    const avgSpend = ranges[priceRange as keyof typeof ranges] || 50
    
    return [
      {
        category: category,
        averageSpend: avgSpend,
        frequency: 'Monthly',
        decisionFactors: ['Quality', 'Reviews', 'Brand reputation', 'Price']
      }
    ]
  }

  private static getTargetStatesBySegment(segmentCode: string): string[] {
    const states = {
      'LE1': ['CA', 'NY', 'FL'],
      'LE2': ['OR', 'WA', 'CO'],
      'LE3': ['TX', 'CA', 'FL'],
      'EB1': ['CO', 'OR', 'VT'],
      'EB2': ['WA', 'CA', 'MA'],
      'EB3': ['FL', 'CA', 'TX']
    }
    return states[segmentCode as keyof typeof states] || ['CA', 'NY', 'TX']
  }

  private static getZipCodesByState(state: string): Omit<ZipCodeData, 'segmentPenetration' | 'marketOpportunity' | 'recommendedChannels'>[] {
    const zipData = {
      'CA': [
        { zipCode: '90210', city: 'Beverly Hills', state: 'CA', population: 34290, medianIncome: 85000, ageDistribution: { '25-35': 30, '35-45': 25 } },
        { zipCode: '94102', city: 'San Francisco', state: 'CA', population: 42000, medianIncome: 95000, ageDistribution: { '25-35': 35, '35-45': 20 } }
      ],
      'NY': [
        { zipCode: '10001', city: 'New York', state: 'NY', population: 52000, medianIncome: 75000, ageDistribution: { '25-35': 40, '35-45': 25 } }
      ],
      'TX': [
        { zipCode: '78701', city: 'Austin', state: 'TX', population: 48000, medianIncome: 65000, ageDistribution: { '25-35': 45, '35-45': 20 } }
      ]
    }
    return zipData[state as keyof typeof zipData] || []
  }

  private static calculateMarketOpportunity(population: number, income: number): string {
    if (population > 45000 && income > 80000) return 'High'
    if (population > 35000 && income > 60000) return 'Medium'
    return 'Low'
  }

  private static getChannelsByDemographics(ageDistribution: Record<string, number>): string[] {
    if (ageDistribution['25-35'] > 30) return ['instagram', 'tiktok']
    if (ageDistribution['35-45'] > 25) return ['instagram', 'youtube']
    return ['instagram', 'youtube', 'linkedin']
  }

  private static getDefaultCompetitor(category: string): string {
    const competitors = {
      'beauty-skincare': 'Glossier',
      'health-fitness': 'Peloton',
      'digital-products': 'Notion',
      'fashion-accessories': 'Everlane',
      'food-beverage': 'Blue Apron'
    }
    return competitors[category as keyof typeof competitors] || 'Market Leader'
  }

  private static getDifferentiationOpportunities(category: string, values: string[]): string[] {
    const base = [
      'Focus on underserved age demographics',
      'Emphasize sustainable practices',
      'Build stronger community engagement'
    ]
    
    if (values.includes('transparency')) base.push('Increase supply chain transparency')
    if (values.includes('customization')) base.push('Offer more personalization options')
    
    return base
  }

  private static getCompetitiveAdvantages(category: string, values: string[]): string[] {
    const advantages = [
      'Better price-to-value ratio',
      'More authentic brand voice',
      'Superior customer service'
    ]
    
    if (values.includes('innovation')) advantages.push('Cutting-edge technology integration')
    if (values.includes('community')) advantages.push('Stronger community building')
    
    return advantages
  }

  private static getMarketGaps(category: string): string[] {
    const gaps = {
      'beauty-skincare': ['Products for sensitive skin', 'Affordable luxury positioning', 'Men\'s skincare focus'],
      'health-fitness': ['Beginner-friendly programs', 'Mental health integration', 'Family fitness solutions']
    }
    return gaps[category as keyof typeof gaps] || ['Underserved demographics', 'Price point gaps', 'Feature limitations']
  }

  private static getRecommendedPositioning(category: string, values: string[]): string {
    if (values.includes('sustainability')) {
      return 'Position as the eco-conscious alternative that doesn\'t compromise on quality or effectiveness.'
    }
    if (values.includes('community')) {
      return 'Build a community-first brand that prioritizes member connections and shared values.'
    }
    return 'Focus on authentic, transparent communication while delivering exceptional value.'
  }

  private static getBudgetNumber(budgetRange: string): number {
    const budgets = {
      'under-5k': 5000,
      '5k-25k': 15000,
      '25k-50k': 37500,
      '50k-100k': 75000,
      'over-100k': 150000
    }
    return budgets[budgetRange as keyof typeof budgets] || 15000
  }

  private static getPhaseTactics(phase: string, platform: string, budget: number): any[] {
    const tactics = {
      foundation: [
        { name: 'Profile optimization', description: 'Complete platform setup', platform, cost: budget * 0.1, expectedReach: 500, priority: 'high' as const },
        { name: 'Content calendar creation', description: 'Plan 30 days of content', platform, cost: budget * 0.3, expectedReach: 1000, priority: 'high' as const }
      ],
      growth: [
        { name: 'Influencer outreach', description: 'Partner with micro-influencers', platform, cost: budget * 0.4, expectedReach: 5000, priority: 'high' as const },
        { name: 'Paid promotion', description: 'Boost top-performing content', platform, cost: budget * 0.4, expectedReach: 10000, priority: 'medium' as const }
      ],
      launch: [
        { name: 'Launch campaign', description: 'Full-scale product launch', platform, cost: budget * 0.5, expectedReach: 25000, priority: 'high' as const },
        { name: 'Conversion optimization', description: 'A/B test landing pages', platform, cost: budget * 0.3, expectedReach: 15000, priority: 'high' as const }
      ]
    }
    return tactics[phase as keyof typeof tactics] || []
  }

  private static generateTimeline(): any[] {
    return [
      { week: 1, milestones: ['Platform setup complete', 'Content calendar finalized'], deliverables: ['Brand assets', 'Content bank'], budget: 5000 },
      { week: 2, milestones: ['First 500 followers', 'Engagement rate >3%'], deliverables: ['Weekly content', 'Community responses'], budget: 3000 }
    ]
  }

  private static generateKPIs(category: string): any[] {
    return [
      { metric: 'Follower Growth', target: 10000, measurement: 'Total followers', frequency: 'Weekly' },
      { metric: 'Engagement Rate', target: 15, measurement: 'Percentage', frequency: 'Daily' },
      { metric: 'Conversion Rate', target: 3, measurement: 'Percentage', frequency: 'Weekly' }
    ]
  }

  private static getRiskMitigation(category: string): string[] {
    return [
      'Diversify content platforms to reduce platform dependency',
      'Build email list as owned audience channel',
      'Monitor competitor activities and market trends',
      'Maintain content quality standards to protect brand reputation'
    ]
  }
}