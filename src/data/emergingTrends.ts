export interface EmergingTrend {
  id: string
  name: string
  description: string
  category: string
  platform: string
  virality: number // 1-100 scale
  growth: number // percentage growth
  status: 'emerging' | 'rising' | 'peaked' | 'declining'
  hashtags: string[]
  relatedCommunities: string[]
  startDate: string
  peakDate?: string
  currentEngagement: number
  predictedReach: number
  sentiment: 'positive' | 'neutral' | 'negative'
  commercialPotential: number // 1-100 scale
  influencerAdoption: {
    nano: number
    micro: number
    macro: number
  }
  contentExamples: string[]
  riskFactors: string[]
  opportunities: string[]
}

export const emergingTrends: EmergingTrend[] = [
  {
    id: 'trend-sustainable-tech',
    name: 'Sustainable Tech Living',
    description: 'Growing movement combining technology adoption with environmental consciousness, featuring eco-friendly gadgets and green tech lifestyle content.',
    category: 'tech',
    platform: 'youtube',
    virality: 85,
    growth: 127,
    status: 'rising',
    hashtags: ['#sustainabletech', '#ecotech', '#greengadgets', '#climatetech'],
    relatedCommunities: ['mc-tech-bros', 'mc-eco-conscious'],
    startDate: '2023-08-15',
    currentEngagement: 2.3,
    predictedReach: 850000,
    sentiment: 'positive',
    commercialPotential: 92,
    influencerAdoption: {
      nano: 78,
      micro: 65,
      macro: 32
    },
    contentExamples: [
      'Solar panel installation vlogs',
      'Smart home energy efficiency tutorials',
      'Sustainable tech product reviews'
    ],
    riskFactors: [
      'Greenwashing concerns',
      'High product costs may limit adoption'
    ],
    opportunities: [
      'Partnership with green tech brands',
      'Educational content monetization',
      'Sustainable product affiliate marketing'
    ]
  },
  {
    id: 'trend-micro-workouts',
    name: 'Micro-Workout Movement',
    description: '5-15 minute high-intensity workout routines designed for busy professionals and content creators. Gained massive traction post-pandemic.',
    category: 'wellness',
    platform: 'tiktok',
    virality: 94,
    growth: 89,
    status: 'peaked',
    hashtags: ['#microworkout', '#5minworkout', '#busyfitness', '#deskworkout'],
    relatedCommunities: ['mc-fitness-enthusiasts', 'mc-remote-workers'],
    startDate: '2023-06-20',
    peakDate: '2023-11-15',
    currentEngagement: 4.7,
    predictedReach: 1200000,
    sentiment: 'positive',
    commercialPotential: 88,
    influencerAdoption: {
      nano: 92,
      micro: 87,
      macro: 45
    },
    contentExamples: [
      'Office chair yoga sequences',
      '10-minute morning routines',
      'Equipment-free HIIT workouts'
    ],
    riskFactors: [
      'Market saturation',
      'Limited monetization per video due to short length'
    ],
    opportunities: [
      'Corporate wellness partnerships',
      'Fitness app integrations',
      'Wearable device collaborations'
    ]
  },
  {
    id: 'trend-aesthetic-productivity',
    name: 'Aesthetic Productivity',
    description: 'Beautifully curated productivity setups combining functional tools with aesthetic appeal. Popular among students and remote workers.',
    category: 'aesthetic',
    platform: 'instagram',
    virality: 76,
    growth: 156,
    status: 'rising',
    hashtags: ['#aestheticproductivity', '#studyaesthetic', '#productivitysetup', '#desksetup'],
    relatedCommunities: ['mc-dark-academia', 'mc-minimalist-living'],
    startDate: '2023-09-01',
    currentEngagement: 3.2,
    predictedReach: 650000,
    sentiment: 'positive',
    commercialPotential: 85,
    influencerAdoption: {
      nano: 89,
      micro: 72,
      macro: 28
    },
    contentExamples: [
      'Minimalist desk organization',
      'Color-coordinated planner spreads',
      'Aesthetic study space tours'
    ],
    riskFactors: [
      'Trend may prioritize aesthetics over functionality',
      'Expensive setup requirements'
    ],
    opportunities: [
      'Stationery brand partnerships',
      'Home office furniture collaborations',
      'Productivity app sponsorships'
    ]
  },
  {
    id: 'trend-food-transparency',
    name: 'Radical Food Transparency',
    description: 'Consumers demanding complete transparency about food sourcing, processing, and nutritional content. Driving authentic food content.',
    category: 'food',
    platform: 'reddit',
    virality: 71,
    growth: 203,
    status: 'emerging',
    hashtags: ['#foodtransparency', '#knowyourfood', '#realingredients', '#foodtruth'],
    relatedCommunities: ['mc-plant-based-eaters', 'mc-organic-food'],
    startDate: '2023-10-12',
    currentEngagement: 1.8,
    predictedReach: 420000,
    sentiment: 'positive',
    commercialPotential: 79,
    influencerAdoption: {
      nano: 67,
      micro: 54,
      macro: 23
    },
    contentExamples: [
      'Farm-to-table journey documentation',
      'Ingredient sourcing investigations',
      'Brand transparency report cards'
    ],
    riskFactors: [
      'May expose uncomfortable industry practices',
      'Complex supply chains difficult to trace'
    ],
    opportunities: [
      'Transparent food brand partnerships',
      'Educational content monetization',
      'Advocacy organization collaborations'
    ]
  },
  {
    id: 'trend-creative-ai-tools',
    name: 'Creative AI Adoption',
    description: 'Artists and creators embracing AI tools while maintaining artistic integrity. Focus on AI as a creative partner rather than replacement.',
    category: 'creative',
    platform: 'discord',
    virality: 82,
    growth: 167,
    status: 'rising',
    hashtags: ['#aiart', '#creativeai', '#aipartner', '#futureofart'],
    relatedCommunities: ['mc-digital-artists', 'mc-ai-enthusiasts'],
    startDate: '2023-07-30',
    currentEngagement: 2.9,
    predictedReach: 780000,
    sentiment: 'neutral',
    commercialPotential: 91,
    influencerAdoption: {
      nano: 71,
      micro: 83,
      macro: 67
    },
    contentExamples: [
      'AI-assisted design process tutorials',
      'Ethical AI usage discussions',
      'Human-AI collaboration showcases'
    ],
    riskFactors: [
      'Copyright and ownership concerns',
      'Artist community backlash potential'
    ],
    opportunities: [
      'AI tool partnerships',
      'Educational platform collaborations',
      'Creative software sponsorships'
    ]
  },
  {
    id: 'trend-financial-literacy-gen-z',
    name: 'Gen Z Financial Awakening',
    description: 'Young adults taking control of their financial futures through education, investing, and alternative income streams.',
    category: 'finance',
    platform: 'tiktok',
    virality: 88,
    growth: 134,
    status: 'rising',
    hashtags: ['#financialliteracy', '#genzinvesting', '#sidehustle', '#financialfreedom'],
    relatedCommunities: ['mc-personal-finance', 'mc-side-hustlers'],
    startDate: '2023-05-18',
    currentEngagement: 4.1,
    predictedReach: 950000,
    sentiment: 'positive',
    commercialPotential: 94,
    influencerAdoption: {
      nano: 85,
      micro: 91,
      macro: 56
    },
    contentExamples: [
      'Budget-friendly investing tutorials',
      'Side hustle success stories',
      'Debt payoff journeys'
    ],
    riskFactors: [
      'Regulatory concerns with financial advice',
      'Market volatility impact on content'
    ],
    opportunities: [
      'Fintech app partnerships',
      'Educational platform collaborations',
      'Financial services sponsorships'
    ]
  },
  {
    id: 'trend-local-community-revival',
    name: 'Hyperlocal Community Building',
    description: 'Focus on building strong local connections and supporting neighborhood businesses. Reaction to digital overwhelm.',
    category: 'social-cause',
    platform: 'instagram',
    virality: 73,
    growth: 98,
    status: 'emerging',
    hashtags: ['#shoplocal', '#communitybuilding', '#neighborhoodlove', '#localbusiness'],
    relatedCommunities: ['mc-community-organizers', 'mc-local-business'],
    startDate: '2023-09-25',
    currentEngagement: 2.1,
    predictedReach: 580000,
    sentiment: 'positive',
    commercialPotential: 76,
    influencerAdoption: {
      nano: 94,
      micro: 68,
      macro: 31
    },
    contentExamples: [
      'Local business spotlight features',
      'Community event organization',
      'Neighborhood walking tours'
    ],
    riskFactors: [
      'Limited scalability beyond local area',
      'Seasonal variations in engagement'
    ],
    opportunities: [
      'Local business partnerships',
      'Community organization collaborations',
      'Tourism board sponsorships'
    ]
  },
  {
    id: 'trend-skill-stacking',
    name: 'Skill Stacking Revolution',
    description: 'Professionals combining multiple skills to create unique value propositions. Popular among freelancers and career changers.',
    category: 'professional',
    platform: 'linkedin',
    virality: 79,
    growth: 145,
    status: 'rising',
    hashtags: ['#skillstacking', '#careerchange', '#multipotentialite', '#futureofwork'],
    relatedCommunities: ['mc-freelance-writers', 'mc-career-coaches'],
    startDate: '2023-08-08',
    currentEngagement: 3.4,
    predictedReach: 720000,
    sentiment: 'positive',
    commercialPotential: 87,
    influencerAdoption: {
      nano: 76,
      micro: 82,
      macro: 59
    },
    contentExamples: [
      'Career transition success stories',
      'Skill combination strategies',
      'Freelance portfolio building'
    ],
    riskFactors: [
      'Jack-of-all-trades perception',
      'Difficulty in niche market positioning'
    ],
    opportunities: [
      'Online learning platform partnerships',
      'Career coaching service collaborations',
      'Professional development tool sponsorships'
    ]
  },
  {
    id: 'trend-mindful-parenting',
    name: 'Mindful Parenting Movement',
    description: 'Parents adopting mindfulness practices in child-rearing, focusing on emotional intelligence and conscious parenting techniques.',
    category: 'parenting',
    platform: 'youtube',
    virality: 74,
    growth: 112,
    status: 'emerging',
    hashtags: ['#mindfulparenting', '#consciousparenting', '#emotionalintelligence', '#parentingjourney'],
    relatedCommunities: ['mc-new-parents', 'mc-gentle-parenting'],
    startDate: '2023-09-10',
    currentEngagement: 2.6,
    predictedReach: 640000,
    sentiment: 'positive',
    commercialPotential: 83,
    influencerAdoption: {
      nano: 81,
      micro: 75,
      macro: 42
    },
    contentExamples: [
      'Mindfulness exercises for families',
      'Emotional regulation techniques',
      'Screen time balance strategies'
    ],
    riskFactors: [
      'Parenting advice liability concerns',
      'Cultural differences in approach'
    ],
    opportunities: [
      'Mindfulness app partnerships',
      'Educational toy collaborations',
      'Parenting book promotions'
    ]
  },
  {
    id: 'trend-travel-sustainability',
    name: 'Conscious Travel Movement',
    description: 'Travelers prioritizing environmental and social impact, choosing sustainable accommodations and supporting local communities.',
    category: 'travel',
    platform: 'instagram',
    virality: 81,
    growth: 119,
    status: 'rising',
    hashtags: ['#sustainabletravel', '#conscioustravel', '#ecotourism', '#responsibletravel'],
    relatedCommunities: ['mc-eco-travelers', 'mc-cultural-travelers'],
    startDate: '2023-07-15',
    currentEngagement: 3.7,
    predictedReach: 890000,
    sentiment: 'positive',
    commercialPotential: 89,
    influencerAdoption: {
      nano: 87,
      micro: 79,
      macro: 51
    },
    contentExamples: [
      'Eco-lodge reviews and tours',
      'Local community impact stories',
      'Sustainable packing guides'
    ],
    riskFactors: [
      'Higher costs may limit accessibility',
      'Greenwashing by tourism companies'
    ],
    opportunities: [
      'Sustainable tourism board partnerships',
      'Eco-friendly travel gear collaborations',
      'Conservation organization sponsorships'
    ]
  }
]

export const getTrendById = (id: string): EmergingTrend | undefined => {
  return emergingTrends.find(trend => trend.id === id)
}

export const getTrendsByCategory = (category: string): EmergingTrend[] => {
  return emergingTrends.filter(trend => trend.category === category)
}

export const getTrendsByPlatform = (platform: string): EmergingTrend[] => {
  return emergingTrends.filter(trend => trend.platform === platform)
}

export const getTrendsByStatus = (status: string): EmergingTrend[] => {
  return emergingTrends.filter(trend => trend.status === status)
}

export const getTopTrends = (limit: number = 5): EmergingTrend[] => {
  return emergingTrends
    .sort((a, b) => b.virality - a.virality)
    .slice(0, limit)
}