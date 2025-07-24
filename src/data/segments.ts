import { Segment } from '@/types/segments';

export const segments: Segment[] = [
  // TIER 1: THE BRAND EVANGELISTS
  {
    id: 'LE1',
    code: 'LE1',
    name: 'Creator Cult Leaders',
    tier: 'TIER1',
    digitalBehavior: 'DB1',
    valuesDriver: 'VD4',
    spendingPower: 'SP1',
    creatorAffinity: 'CA1',
    ageMin: 22,
    ageMax: 32,
    incomeMin: 70000,
    incomeMax: 200000,
    lifestyle: 'Urban Trendsetter',
    description: 'Influencers and content creators who champion other creators. First to discover new D2C brands, actively promotes favorites to audiences, willing to pay premium for unique creator products.',
    launchStrategy: 'Partner for exclusive launches, offer affiliate programs, create behind-the-scenes content access.'
  },
  {
    id: 'LE2',
    code: 'LE2',
    name: 'Impact Investors',
    tier: 'TIER1',
    digitalBehavior: 'DB3',
    valuesDriver: 'VD1',
    spendingPower: 'SP1',
    creatorAffinity: 'CA1',
    ageMin: 25,
    ageMax: 38,
    incomeMin: 80000,
    incomeMax: 180000,
    lifestyle: 'Conscious Consumer',
    description: 'Research-driven buyers who specifically seek creator brands with mission alignment. Will pay premium for sustainable, ethical creator-founded companies.',
    launchStrategy: 'Lead with mission story, provide detailed impact metrics, offer exclusive "founder\'s circle" access.'
  },
  {
    id: 'LE3',
    code: 'LE3',
    name: 'Lifestyle Curators',
    tier: 'TIER1',
    digitalBehavior: 'DB2',
    valuesDriver: 'VD2',
    spendingPower: 'SP1',
    creatorAffinity: 'CA2',
    ageMin: 24,
    ageMax: 35,
    incomeMin: 60000,
    incomeMax: 150000,
    lifestyle: 'Aesthetic-Driven',
    description: 'Build personal brand through carefully curated product choices. Love supporting creators whose lifestyle they admire, share extensively on social.',
    launchStrategy: 'Create Instagram-worthy packaging, offer early access for content creation, build affiliate community.'
  },

  // TIER 2: THE EARLY BELIEVERS
  {
    id: 'EB1',
    code: 'EB1',
    name: 'Community Builders',
    tier: 'TIER2',
    digitalBehavior: 'DB4',
    valuesDriver: 'VD4',
    spendingPower: 'SP2',
    creatorAffinity: 'CA2',
    ageMin: 20,
    ageMax: 35,
    incomeMin: 35000,
    incomeMax: 75000,
    lifestyle: 'Community-Focused',
    description: 'Value brands that help them connect with like-minded people. Drawn to creator stories of building community, willing to support emerging brands that align with their values.',
    launchStrategy: 'Build strong community features, create user-generated content campaigns, offer group discounts.'
  },
  {
    id: 'EB2',
    code: 'EB2',
    name: 'Mindful Spenders',
    tier: 'TIER2',
    digitalBehavior: 'DB3',
    valuesDriver: 'VD1',
    spendingPower: 'SP2',
    creatorAffinity: 'CA2',
    ageMin: 22,
    ageMax: 40,
    incomeMin: 30000,
    incomeMax: 70000,
    lifestyle: 'Values-Conscious',
    description: 'Research thoroughly before purchasing, but motivated by creator stories of positive impact. Budget-conscious but willing to invest in meaningful brands.',
    launchStrategy: 'Provide transparent pricing breakdown, offer payment plans, emphasize long-term value.'
  },
  {
    id: 'EB3',
    code: 'EB3',
    name: 'Trend Followers',
    tier: 'TIER2',
    digitalBehavior: 'DB2',
    valuesDriver: 'VD2',
    spendingPower: 'SP2',
    creatorAffinity: 'CA1',
    ageMin: 18,
    ageMax: 28,
    incomeMin: 25000,
    incomeMax: 60000,
    lifestyle: 'Social-First',
    description: 'Discover new brands through social feeds, excited by creator-founder stories. Limited budget but high enthusiasm for supporting creators they follow.',
    launchStrategy: 'Heavy social media presence, influencer partnerships, affordable entry-level products.'
  },

  // TIER 3: THE QUALITY SEEKERS
  {
    id: 'QS1',
    code: 'QS1',
    name: 'Premium Pragmatists',
    tier: 'TIER3',
    digitalBehavior: 'DB3',
    valuesDriver: 'VD3',
    spendingPower: 'SP1',
    creatorAffinity: 'CA3',
    ageMin: 28,
    ageMax: 45,
    incomeMin: 75000,
    incomeMax: 200000,
    lifestyle: 'Quality-Focused',
    description: 'Don\'t care about founder story if product isn\'t exceptional. High standards, willing to pay premium, but need proof of quality before purchasing.',
    launchStrategy: 'Lead with product benefits, offer generous return policy, focus on materials and craftsmanship.'
  },
  {
    id: 'QS2',
    code: 'QS2',
    name: 'Value Hunters',
    tier: 'TIER3',
    digitalBehavior: 'DB1',
    valuesDriver: 'VD3',
    spendingPower: 'SP2',
    creatorAffinity: 'CA3',
    ageMin: 25,
    ageMax: 40,
    incomeMin: 35000,
    incomeMax: 80000,
    lifestyle: 'Deal-Conscious',
    description: 'Early to discover new products but primarily motivated by value proposition. Creator story is nice bonus but not primary driver.',
    launchStrategy: 'Competitive pricing strategy, highlight cost-per-use value, offer early bird discounts.'
  },
  {
    id: 'QS3',
    code: 'QS3',
    name: 'Research Raiders',
    tier: 'TIER3',
    digitalBehavior: 'DB3',
    valuesDriver: 'VD3',
    spendingPower: 'SP3',
    creatorAffinity: 'CA3',
    ageMin: 22,
    ageMax: 50,
    incomeMin: 20000,
    incomeMax: 50000,
    lifestyle: 'Budget-Conscious',
    description: 'Extensive research before any purchase, primarily focused on getting best value. Will support creators if product meets their strict criteria.',
    launchStrategy: 'Detailed product specifications, comparison charts, money-back guarantees.'
  }
];

export const digitalBehaviorMapping = {
  'DB1': {
    name: 'Trend Hunters',
    description: 'Early adopters who actively seek out new brands and products',
    icon: '🔍'
  },
  'DB2': {
    name: 'Social Browsers',
    description: 'Discover brands through curated social feeds and recommendations',
    icon: '📱'
  },
  'DB3': {
    name: 'Research-First',
    description: 'Methodical discoverers who deep-dive before purchasing',
    icon: '🔬'
  },
  'DB4': {
    name: 'Word-of-Mouth',
    description: 'Rely on personal recommendations and community endorsements',
    icon: '💬'
  }
};

export const valuesDriverMapping = {
  'VD1': {
    name: 'Impact First',
    description: 'Prioritize brands that create positive social/environmental change',
    icon: '🌱'
  },
  'VD2': {
    name: 'Experience Rich',
    description: 'Seek brands that enhance their lifestyle and personal story',
    icon: '✨'
  },
  'VD3': {
    name: 'Quality Focused',
    description: 'Value craftsmanship, durability, and long-term investment',
    icon: '🏆'
  },
  'VD4': {
    name: 'Community Connected',
    description: 'Choose brands that help them belong and express identity',
    icon: '🤝'
  }
};

export const spendingPowerMapping = {
  'SP1': {
    name: 'Premium Patrons',
    description: '$60K+ disposable income',
    range: '60000+'
  },
  'SP2': {
    name: 'Strategic Spenders',
    description: '$30K-$60K disposable income',
    range: '30000-60000'
  },
  'SP3': {
    name: 'Conscious Choosers',
    description: 'Under $30K disposable income',
    range: '0-30000'
  }
};

export const creatorAffinityMapping = {
  'CA1': {
    name: 'Creator Champions',
    description: 'Actively seek out and support creator-founded brands',
    icon: '🎯'
  },
  'CA2': {
    name: 'Story Supporters',
    description: 'Drawn to brands with compelling founder narratives',
    icon: '📚'
  },
  'CA3': {
    name: 'Product Pragmatists',
    description: 'Focus on product quality regardless of founder story',
    icon: '🛍️'
  }
};