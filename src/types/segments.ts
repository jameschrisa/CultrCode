export type DigitalBehavior = 'DB1' | 'DB2' | 'DB3' | 'DB4';
export type ValuesDriver = 'VD1' | 'VD2' | 'VD3' | 'VD4';
export type SpendingPower = 'SP1' | 'SP2' | 'SP3';
export type CreatorAffinity = 'CA1' | 'CA2' | 'CA3';

export interface Segment {
  id: string;
  code: string;
  name: string;
  tier: 'TIER1' | 'TIER2' | 'TIER3';
  digitalBehavior: DigitalBehavior;
  valuesDriver: ValuesDriver;
  spendingPower: SpendingPower;
  creatorAffinity: CreatorAffinity;
  ageMin: number;
  ageMax: number;
  incomeMin: number;
  incomeMax: number;
  lifestyle: string;
  description: string;
  launchStrategy: string;
  matchScore?: number;
}

export interface UserInputs {
  // Core inputs (available to all users)
  brandDescription: string;
  category: BrandCategory;
  priceRange: PriceRange;
  targetAge: AgeRange;
  targetGender: Gender;
  values: string[];
  seasonality: Seasonality;
  launchBudget: LaunchBudget;
  followingSize: FollowingSize;
  primaryPlatform: Platform;
  closestCompetitor?: string;
  
  // Standard+ inputs (basic premium features)
  contentFormats?: ContentFormat[];
  launchTimeline?: LaunchTimeline;
  
  // Premium inputs (advanced microcommunity & trend analysis)
  purchaseMotivation?: PurchaseMotivation[];
  engagementStyle?: EngagementStyle;
  interestIntensity?: IntensityLevel;
  brandPersonality?: BrandPersonality[];
  trendAdoption?: TrendAdoption;
  socialBehavior?: SocialBehavior[];
  communitySizePreference?: CommunitySizePreference;
  
  // Hyperlocal inputs (Pro+ only)
  targetCities?: TargetCity[];
  hyperlocalEnabled?: boolean;
  geographicFocus?: GeographicFocus;
  regionType?: RegionType[];
}

export type BrandCategory = 
  | 'beauty-skincare'
  | 'health-fitness'
  | 'digital-products'
  | 'fashion-accessories'
  | 'food-beverage'
  | 'professional-services'
  | 'coaching-consulting'
  | 'home-lifestyle'
  | 'tech-apps'
  | 'sustainable-products'
  | 'pet-care'
  | 'baby-kids'
  | 'automotive'
  | 'travel-experiences';

export type Gender = 
  | 'male'
  | 'female'
  | 'unisex'
  | 'other';

export type Seasonality = 
  | 'seasonal'
  | 'perennial'
  | 'non-applicable';

export type PriceRange = 
  | 'under-25'
  | '25-75'
  | '75-200'
  | '200-500'
  | 'over-500';

export type AgeRange = 
  | '18-25'
  | '25-35'
  | '35-45'
  | '45-55'
  | 'over-55';

export type LaunchBudget = 
  | 'under-5k'
  | '5k-25k'
  | '25k-50k'
  | '50k-100k'
  | 'over-100k';

export type FollowingSize = 
  | 'under-1k'
  | '1k-10k'
  | '10k-100k'
  | '100k-1m'
  | 'over-1m';

export type Platform = 
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'linkedin'
  | 'twitter'
  | 'substack'
  | 'discord';

// Premium parameter types for enhanced segmentation
export type ContentFormat = 
  | 'short-form-video'
  | 'long-form-video'
  | 'image-posts'
  | 'live-streams'
  | 'podcasts'
  | 'written-content'
  | 'polls-quizzes'
  | 'user-generated-content';

export type LaunchTimeline = 
  | 'asap'
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | 'exploring-options';

export type PurchaseMotivation = 
  | 'trending-now'
  | 'solve-problem'
  | 'status-symbol'
  | 'self-improvement'
  | 'community-belonging'
  | 'early-adopter'
  | 'value-conscious';

export type EngagementStyle = 
  | 'lurker'
  | 'casual-commenter'
  | 'active-poster'
  | 'community-leader'
  | 'trend-setter';

export type IntensityLevel = 
  | 'casual-interest'
  | 'hobby-enthusiast'
  | 'passionate-advocate'
  | 'expert-level'
  | 'obsessive-collector';

export type BrandPersonality = 
  | 'authentic-raw'
  | 'polished-professional'
  | 'playful-fun'
  | 'educational-expert'
  | 'inspirational-motivational'
  | 'edgy-controversial'
  | 'wholesome-family-friendly';

export type TrendAdoption = 
  | 'trend-creator'
  | 'early-adopter'
  | 'early-majority'
  | 'late-majority'
  | 'trend-resistant';

export type SocialBehavior = 
  | 'hashtag-follower'
  | 'direct-searcher'
  | 'discovery-browser'
  | 'influencer-follower'
  | 'community-group-member'
  | 'algorithm-dependent';

export type CommunitySizePreference = 
  | 'micro-niche'
  | 'niche-enthusiast'
  | 'growing-community'
  | 'established-large'
  | 'mainstream-mass';

export type GeographicFocus = 
  | 'local-city'
  | 'regional'
  | 'national'
  | 'international';

export type RegionType = 
  | 'urban'
  | 'suburban'
  | 'rural'
  | 'college-towns'
  | 'tech-hubs';

export interface SegmentMatch {
  segment: Segment;
  matchScore: number;
  reasons: string[];
  confidence: number;
  premiumInsights?: PremiumInsights;
}

export interface PremiumInsights {
  detailedPersona: CustomerPersona;
  zipCodeAnalysis: ZipCodeData[];
  competitorAnalysis: CompetitorInsights;
  launchStrategy: DetailedLaunchStrategy;
}

export interface CustomerPersona {
  name: string;
  age: number;
  income: number;
  location: string;
  demographics: Demographics;
  psychographics: Psychographics;
  behaviorPatterns: BehaviorPattern[];
  preferredChannels: Platform[];
  spendingHabits: SpendingHabit[];
}

export interface Demographics {
  gender: Gender;
  education: string;
  occupation: string;
  householdSize: number;
  maritalStatus: string;
  hasChildren: boolean;
}

export interface Psychographics {
  values: string[];
  interests: string[];
  lifestyle: string;
  personality: string[];
  motivations: string[];
  painPoints: string[];
}

export interface BehaviorPattern {
  activity: string;
  frequency: string;
  timeOfDay: string;
  platform: Platform;
  engagementType: string;
}

export interface SpendingHabit {
  category: string;
  averageSpend: number;
  frequency: string;
  decisionFactors: string[];
}

export interface ZipCodeData {
  zipCode: string;
  city: string;
  state: string;
  population: number;
  medianIncome: number;
  ageDistribution: Record<string, number>;
  segmentPenetration: number;
  marketOpportunity: string;
  recommendedChannels: Platform[];
}

export interface CompetitorInsights {
  competitorName: string;
  sharedAudience: number;
  differentiationOpportunities: string[];
  competitiveAdvantages: string[];
  marketGaps: string[];
  recommendedPositioning: string;
}

export interface DetailedLaunchStrategy {
  phaseOne: LaunchPhase;
  phaseTwo: LaunchPhase;
  phaseThree: LaunchPhase;
  budget_allocation: BudgetAllocation;
  timeline: TimelineItem[];
  kpis: KPI[];
  riskMitigation: string[];
}

export interface LaunchPhase {
  name: string;
  duration: string;
  objectives: string[];
  tactics: Tactic[];
  expectedOutcomes: string[];
  budget: number;
}

export interface Tactic {
  name: string;
  description: string;
  platform: Platform;
  cost: number;
  expectedReach: number;
  priority: 'high' | 'medium' | 'low';
}

export interface BudgetAllocation {
  contentCreation: number;
  paidAdvertising: number;
  influencerPartnerships: number;
  platformFees: number;
  analytics: number;
  contingency: number;
}

export interface TimelineItem {
  week: number;
  milestones: string[];
  deliverables: string[];
  budget: number;
}

export interface KPI {
  metric: string;
  target: number;
  measurement: string;
  frequency: string;
}

export interface TargetCity {
  id: string;
  name: string;
  state: string;
  country: string;
  population: number;
  region: NorthAmericanRegion;
  marketSize: MarketSize;
  demographics: CityDemographics;
}

export interface CityDemographics {
  medianAge: number;
  medianIncome: number;
  educationLevel: string;
  diversityIndex: number;
  techSavviness: number;
  creatorEconomyPenetration: number;
}

export type NorthAmericanRegion = 
  | 'northeast-us'
  | 'southeast-us'
  | 'midwest-us'
  | 'southwest-us'
  | 'west-coast-us'
  | 'mountain-west-us'
  | 'eastern-canada'
  | 'western-canada'
  | 'central-canada'
  | 'mexico-north'
  | 'mexico-central';

export type MarketSize = 
  | 'small'
  | 'medium'
  | 'large'
  | 'mega';

// Enhanced Regional System
export interface Region {
  id: string;
  name: string;
  code: NorthAmericanRegion;
  country: string;
  description: string;
  culturalCharacteristics: string[];
  economicProfile: RegionalEconomics;
  creatorEconomyProfile: RegionalCreatorProfile;
  microCommunities: string[]; // References to MicroCommunity IDs
  cities: string[]; // References to TargetCity IDs
  segments: RegionalSegmentData[];
}

export interface RegionalEconomics {
  averageIncome: number;
  costOfLiving: number;
  unemploymentRate: number;
  gdpPerCapita: number;
  mainIndustries: string[];
  emergingMarkets: string[];
}

export interface RegionalCreatorProfile {
  creatorDensity: number; // creators per 100k population
  averageFollowerSize: number;
  topPlatforms: Platform[];
  contentCategories: BrandCategory[];
  seasonalTrends: SeasonalTrend[];
  influencerTiers: InfluencerTierData[];
}

export interface SeasonalTrend {
  season: 'spring' | 'summer' | 'fall' | 'winter';
  peakCategories: BrandCategory[];
  engagementMultiplier: number;
  topHashtags: string[];
}

export interface InfluencerTierData {
  tier: 'nano' | 'micro' | 'macro' | 'mega';
  range: string;
  count: number;
  averageEngagement: number;
  averageRate: number;
}

export interface RegionalSegmentData {
  segmentId: string;
  penetration: number; // percentage of population
  growth: number; // year-over-year growth
  seasonality: number; // seasonal variation index
  competitiveness: number; // market saturation level
}

// Micro-Communities System
export interface MicroCommunity {
  id: string;
  name: string;
  description: string;
  category: CommunityCategory;
  size: CommunitySize;
  platform: Platform;
  characteristics: CommunityCharacteristics;
  demographics: CommunityDemographics;
  geography: CommunityGeography;
  segments: string[]; // References to Segment IDs
  trends: CommunityTrend[];
  influencers: CommunityInfluencer[];
  brands: CommunityBrand[];
  growth: CommunityGrowth;
}

export type CommunityCategory = 
  | 'aesthetic'
  | 'lifestyle'
  | 'professional'
  | 'hobby'
  | 'cultural'
  | 'wellness'
  | 'tech'
  | 'creative'
  | 'social-cause'
  | 'sports'
  | 'food'
  | 'travel'
  | 'parenting'
  | 'finance'
  | 'education';

export type CommunitySize = 
  | 'emerging' // < 10K
  | 'growing' // 10K - 100K
  | 'established' // 100K - 1M
  | 'massive'; // 1M+

export interface CommunityCharacteristics {
  values: string[];
  interests: string[];
  behaviors: string[];
  language: string[];
  visualAesthetics: string[];
  contentTypes: string[];
  engagementPatterns: EngagementPattern[];
}

export interface EngagementPattern {
  type: 'peak_hours' | 'content_preference' | 'interaction_style';
  description: string;
  data: Record<string, any>;
}

export interface CommunityDemographics {
  ageDistribution: Record<AgeRange, number>;
  genderDistribution: Record<Gender, number>;
  incomeDistribution: Record<string, number>;
  educationLevel: string;
  occupationTypes: string[];
}

export interface CommunityGeography {
  globalReach: boolean;
  primaryRegions: NorthAmericanRegion[];
  cityConcentrations: CityConcentration[];
  ruralUrbanSplit: number; // percentage urban
}

export interface CityConcentration {
  cityId: string;
  concentration: number; // percentage of community in this city
  localVariations: string[];
}

export interface CommunityTrend {
  id: string;
  name: string;
  description: string;
  startDate: string;
  peakDate?: string;
  status: 'emerging' | 'growing' | 'peaked' | 'declining';
  virality: number; // 1-100 scale
  linkedHashtags: string[];
  contentExamples: string[];
}

export interface CommunityInfluencer {
  id: string;
  handle: string;
  platform: Platform;
  followers: number;
  tier: 'nano' | 'micro' | 'macro';
  engagement: number;
  niche: string[];
  authenticity: number; // 1-100 scale
  collaboration: InfluencerCollaboration;
}

export interface InfluencerCollaboration {
  averageRate: number;
  responseRate: number;
  previousBrands: string[];
  contentQuality: number;
  audienceMatch: number;
}

export interface CommunityBrand {
  name: string;
  category: BrandCategory;
  penetration: number;
  sentiment: number; // -100 to 100
  partnerships: BrandPartnership[];
}

export interface BrandPartnership {
  type: 'sponsorship' | 'collaboration' | 'ambassador' | 'ugc';
  success: number; // 1-100 scale
  duration: string;
  reach: number;
}

export interface CommunityGrowth {
  monthlyGrowthRate: number;
  seasonalPatterns: Record<string, number>;
  platformMigration: PlatformMigration[];
  futureProjection: GrowthProjection;
}

export interface PlatformMigration {
  fromPlatform: Platform;
  toPlatform: Platform;
  percentage: number;
  reason: string;
}

export interface GrowthProjection {
  sixMonth: number;
  oneYear: number;
  twoYear: number;
  confidence: number;
}

// Cross-Reference System
export interface CrossReference {
  id: string;
  type: CrossReferenceType;
  entity1: EntityReference;
  entity2: EntityReference;
  relationship: RelationshipType;
  strength: number; // 1-100 scale
  bidirectional: boolean;
  metadata: CrossReferenceMetadata;
}

export type CrossReferenceType = 
  | 'segment-community'
  | 'community-city'
  | 'city-region'
  | 'segment-region'
  | 'community-brand'
  | 'influencer-community'
  | 'trend-community'
  | 'segment-city';

export interface EntityReference {
  id: string;
  type: 'segment' | 'community' | 'city' | 'region' | 'brand' | 'influencer' | 'trend';
  name: string;
}

export type RelationshipType = 
  | 'belongs_to'
  | 'influences'
  | 'competes_with'
  | 'complements'
  | 'migrates_to'
  | 'dominates'
  | 'emerging_in'
  | 'declining_in'
  | 'seasonal_in'
  | 'originated_from';

export interface CrossReferenceMetadata {
  confidence: number;
  lastUpdated: string;
  source: string;
  validFrom: string;
  validTo?: string;
  tags: string[];
  notes?: string;
}