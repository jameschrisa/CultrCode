# LaunchLens™ API Reference

## 📚 Component Interfaces & Data Models

This document provides a comprehensive reference for all TypeScript interfaces, component props, and data models used in LaunchLens.

---

## 🧩 Core Data Models

### User Input Types

#### `UserInputs` Interface
Complete user input data collected through the SegmentFinder form.

```typescript
interface UserInputs {
  brandDescription: string          // Brand description (min 10 chars)
  category: BrandCategory          // Product/service category
  priceRange: PriceRange          // Target price range
  targetAge: AgeRange             // Target age demographic
  targetGender: Gender            // Target gender (enhanced)
  values: string[]                // Brand values (max 24 options)
  seasonality: Seasonality        // Product seasonality (new)
  isPetRelated: boolean          // Pet-related product flag (new)
  launchBudget: LaunchBudget     // Marketing budget range
  followingSize: FollowingSize   // Creator following size
  primaryPlatform: Platform      // Primary social platform
  closestCompetitor?: string     // Competitor name (optional, new)
}
```

#### Enum Types

```typescript
type BrandCategory = 
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
  | 'pet-care'              // New
  | 'baby-kids'             // New
  | 'automotive'            // New
  | 'travel-experiences'    // New

type Gender = 
  | 'male'
  | 'female'
  | 'unisex'
  | 'other'                 // Enhanced options

type Seasonality = 
  | 'seasonal'              // Holiday, summer, winter specific
  | 'perennial'             // Year-round demand
  | 'non-applicable'        // Not applicable to product

type PriceRange = 
  | 'under-25'
  | '25-75'
  | '75-200'
  | '200-500'
  | 'over-500'

type AgeRange = 
  | '18-25'
  | '25-35'
  | '35-45'
  | '45-55'
  | 'over-55'

type LaunchBudget = 
  | 'under-5k'
  | '5k-25k'
  | '25k-50k'
  | '50k-100k'
  | 'over-100k'

type FollowingSize = 
  | 'under-1k'
  | '1k-10k'
  | '10k-100k'
  | '100k-1m'
  | 'over-1m'

type Platform = 
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'linkedin'
  | 'twitter'
  | 'substack'
  | 'discord'
```

### Segment Classification System

#### `Segment` Interface
Core segment definition with AI-powered classification.

```typescript
interface Segment {
  id: string                       // Unique identifier
  code: string                     // Format: LE1, EB2, QS3
  name: string                     // Human-readable name
  tier: 'TIER1' | 'TIER2' | 'TIER3'  // Segment tier classification
  digitalBehavior: DigitalBehavior    // DB1-DB4 classification
  valuesDriver: ValuesDriver          // VD1-VD4 classification
  spendingPower: SpendingPower        // SP1-SP3 classification
  creatorAffinity: CreatorAffinity    // CA1-CA3 classification
  ageMin: number                      // Minimum age
  ageMax: number                      // Maximum age
  incomeMin: number                   // Minimum income ($)
  incomeMax: number                   // Maximum income ($)
  lifestyle: string                   // Lifestyle description
  description: string                 // Detailed segment description
  launchStrategy: string              // Recommended launch approach
  matchScore?: number                 // Calculated match score (0-100)
}

// Segment classification dimensions
type DigitalBehavior = 'DB1' | 'DB2' | 'DB3' | 'DB4'
type ValuesDriver = 'VD1' | 'VD2' | 'VD3' | 'VD4'
type SpendingPower = 'SP1' | 'SP2' | 'SP3'
type CreatorAffinity = 'CA1' | 'CA2' | 'CA3'
```

#### `SegmentMatch` Interface
Result of segment matching algorithm with confidence metrics.

```typescript
interface SegmentMatch {
  segment: Segment                    // Matched segment
  matchScore: number                  // Match score (0-100)
  reasons: string[]                   // Match reasoning
  confidence: number                  // Confidence level (0-1)
  premiumInsights?: PremiumInsights   // Premium data (if unlocked)
}
```

---

## 💎 Premium Data Models

### `PremiumInsights` Interface
Comprehensive premium intelligence data.

```typescript
interface PremiumInsights {
  detailedPersona: CustomerPersona        // AI-generated persona
  zipCodeAnalysis: ZipCodeData[]         // Geographic intelligence
  competitorAnalysis: CompetitorInsights  // Competitive analysis
  launchStrategy: DetailedLaunchStrategy // Execution plan
}
```

### Customer Persona Models

#### `CustomerPersona` Interface
Detailed customer profile with demographics and psychographics.

```typescript
interface CustomerPersona {
  name: string                        // Generated realistic name
  age: number                         // Specific age
  income: number                      // Annual income ($)
  location: string                    // Primary location
  demographics: Demographics          // Demographic data
  psychographics: Psychographics      // Psychological profile
  behaviorPatterns: BehaviorPattern[] // Behavior analysis
  preferredChannels: Platform[]       // Preferred platforms
  spendingHabits: SpendingHabit[]    // Spending behavior
}

interface Demographics {
  gender: Gender                      // Gender identity
  education: string                   // Education level
  occupation: string                  // Job title/field
  householdSize: number              // Number in household
  maritalStatus: string              // Relationship status
  hasChildren: boolean               // Parent status
}

interface Psychographics {
  values: string[]                    // Core values
  interests: string[]                 // Interest areas
  lifestyle: string                   // Lifestyle summary
  personality: string[]               // Personality traits
  motivations: string[]               // Key motivators
  painPoints: string[]                // Pain points/challenges
}

interface BehaviorPattern {
  activity: string                    // Activity type
  frequency: string                   // How often
  timeOfDay: string                  // When active
  platform: Platform                 // Where active
  engagementType: string             // How they engage
}

interface SpendingHabit {
  category: string                    // Spending category
  averageSpend: number               // Average amount
  frequency: string                   // Purchase frequency
  decisionFactors: string[]          // Decision influences
}
```

### Geographic Intelligence

#### `ZipCodeData` Interface
GIS-powered geographic analysis data.

```typescript
interface ZipCodeData {
  zipCode: string                     // ZIP code
  city: string                        // City name
  state: string                       // State abbreviation
  population: number                  // Total population
  medianIncome: number               // Median household income
  ageDistribution: Record<string, number>  // Age breakdown percentages
  segmentPenetration: number         // Segment match percentage
  marketOpportunity: string          // Opportunity level (High/Medium/Low)
  recommendedChannels: Platform[]    // Recommended marketing channels
}
```

### Competitive Intelligence

#### `CompetitorInsights` Interface
AI-powered competitive analysis.

```typescript
interface CompetitorInsights {
  competitorName: string              // Competitor name
  sharedAudience: number             // Audience overlap percentage
  differentiationOpportunities: string[]  // Market gaps
  competitiveAdvantages: string[]    // Your advantages
  marketGaps: string[]               // Unexploited opportunities
  recommendedPositioning: string     // Positioning strategy
}
```

### Launch Strategy Models

#### `DetailedLaunchStrategy` Interface
Comprehensive 90-day execution plan.

```typescript
interface DetailedLaunchStrategy {
  phaseOne: LaunchPhase              // Foundation phase (weeks 1-4)
  phaseTwo: LaunchPhase              // Growth phase (weeks 5-8)
  phaseThree: LaunchPhase            // Launch phase (weeks 9-12)
  budget_allocation: BudgetAllocation // Budget breakdown
  timeline: TimelineItem[]           // Weekly milestones
  kpis: KPI[]                        // Key performance indicators
  riskMitigation: string[]           // Risk management
}

interface LaunchPhase {
  name: string                        // Phase name
  duration: string                    // Time duration
  objectives: string[]                // Phase objectives
  tactics: Tactic[]                   // Execution tactics
  expectedOutcomes: string[]          // Expected results
  budget: number                      // Phase budget
}

interface Tactic {
  name: string                        // Tactic name
  description: string                 // Detailed description
  platform: Platform                 // Target platform
  cost: number                        // Estimated cost
  expectedReach: number              // Projected reach
  priority: 'high' | 'medium' | 'low'  // Priority level
}

interface BudgetAllocation {
  contentCreation: number            // Content budget %
  paidAdvertising: number            // Ads budget %
  influencerPartnerships: number     // Influencer budget %
  platformFees: number               // Platform costs %
  analytics: number                  // Analytics tools %
  contingency: number                // Backup budget %
}

interface TimelineItem {
  week: number                       // Week number
  milestones: string[]               // Weekly milestones
  deliverables: string[]             // Week deliverables
  budget: number                     // Week budget
}

interface KPI {
  metric: string                     // KPI name
  target: number                     // Target value
  measurement: string                // How measured
  frequency: string                  // Measurement frequency
}
```

---

## 🧩 Component Interfaces

### Main Application Components

#### `SegmentFinder` Props
Multi-step form component for collecting user inputs.

```typescript
interface SegmentFinderProps {
  onResults?: (matches: SegmentMatch[], userInputs: UserInputs) => void
}

// Usage example
<SegmentFinder onResults={(matches, inputs) => {
  setSegmentMatches(matches)
  setUserInputs(inputs)
  setCurrentView('results')
}} />
```

#### `SegmentResults` Props
Results display with premium upgrade integration.

```typescript
interface SegmentResultsProps {
  matches: SegmentMatch[]             // Segment matches to display
  userInputs?: UserInputs            // Original user inputs
  onSegmentSelect?: (match: SegmentMatch) => void  // Segment selection handler
}

// Usage example
<SegmentResults 
  matches={segmentMatches}
  userInputs={userInputs}
  onSegmentSelect={(match) => console.log('Selected:', match)}
/>
```

### Premium Components

#### `PremiumUpgrade` Props
Premium service upgrade modal.

```typescript
interface PremiumUpgradeProps {
  onUpgrade?: () => void              // Upgrade completion handler
  onClose?: () => void                // Modal close handler
  matchScore?: number                 // Display match score
  segmentName?: string                // Segment name for context
}

// Usage example
<PremiumUpgrade
  matchScore={92}
  segmentName="Impact Investors"
  onUpgrade={() => {
    // Handle upgrade completion
    generatePremiumInsights()
    showPremiumReport()
  }}
  onClose={() => setShowUpgrade(false)}
/>
```

#### `LaunchStrategyReport` Props
Comprehensive PDF-ready report component.

```typescript
interface LaunchStrategyReportProps {
  segmentMatch: SegmentMatch          // Primary segment match
  premiumInsights: PremiumInsights    // Premium analysis data
  onDownloadPDF?: () => void          // PDF download handler
  onPrint?: () => void                // Print handler
}

// Usage example
<LaunchStrategyReport
  segmentMatch={selectedMatch}
  premiumInsights={premiumInsights}
  onDownloadPDF={() => window.print()}
  onPrint={() => window.print()}
/>
```

### UI Components

#### `Button` Props
Reusable button component with variant system.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
  children: React.ReactNode
}

// Usage examples
<Button variant="primary" size="lg">Get Started</Button>
<Button variant="glass" loading={isLoading}>Processing...</Button>
<Button variant="outline" onClick={handleClick}>Cancel</Button>
```

#### `Card` Props
Glassmorphism card component.

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

// Usage example
<Card className="glass-card">
  <CardHeader>
    <CardTitle>Segment Analysis</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

---

## 🔧 Algorithm Interfaces

### `SegmentMatcher` Class
Core matching algorithm with static methods.

```typescript
class SegmentMatcher {
  // Main matching function
  static matchSegments(inputs: UserInputs): SegmentMatch[]
  
  // Private scoring methods
  private static calculateMatchScore(inputs: UserInputs, segment: Segment): number
  private static scoreDigitalBehavior(inputs: UserInputs, behavior: DigitalBehavior): number
  private static scoreValues(inputs: UserInputs, driver: ValuesDriver): number
  private static scoreSpendingPower(inputs: UserInputs, power: SpendingPower): number
  private static scoreCreatorAffinity(inputs: UserInputs, affinity: CreatorAffinity): number
  private static scoreGenderAlignment(inputs: UserInputs, segment: Segment): number
  private static scoreSpecialtyFactors(inputs: UserInputs, segment: Segment): number
  
  // Analysis methods
  private static getMatchReasons(inputs: UserInputs, segment: Segment): string[]
  private static calculateConfidence(score: number, reasonCount: number): number
  
  // Competitor analysis
  private static analyzeCompetitorOverlap(competitor: string, segment: Segment): {
    differentiationScore: number
    overlap: number
  }
  
  // Utility methods
  private static isPetFriendlySegment(segmentCode: string): boolean
  private static isSeasonalFriendlySegment(segmentCode: string): boolean
}

// Usage example
const matches = SegmentMatcher.matchSegments(userInputs)
const topMatch = matches[0] // Highest scoring match
```

### `PremiumInsightsGenerator` Class
Premium data generation system.

```typescript
class PremiumInsightsGenerator {
  // Main generation function
  static generatePremiumInsights(
    userInputs: UserInputs, 
    segmentMatch: SegmentMatch
  ): PremiumInsights
  
  // Private generation methods
  private static generateCustomerPersona(
    userInputs: UserInputs, 
    segmentMatch: SegmentMatch
  ): CustomerPersona
  
  private static generateZipCodeAnalysis(
    userInputs: UserInputs, 
    segmentMatch: SegmentMatch
  ): ZipCodeData[]
  
  private static generateCompetitorAnalysis(userInputs: UserInputs): CompetitorInsights
  
  private static generateDetailedLaunchStrategy(
    userInputs: UserInputs, 
    segmentMatch: SegmentMatch
  ): DetailedLaunchStrategy
  
  // Utility methods for data generation
  private static getLocationBySegment(segmentCode: string): string
  private static getEducationBySegment(segmentCode: string): string
  private static getOccupationByCategory(category: string): string
  // ... additional utility methods
}

// Usage example
const premiumInsights = PremiumInsightsGenerator.generatePremiumInsights(
  userInputs, 
  selectedSegmentMatch
)
```

---

## 🎨 Style System Interfaces

### Utility Functions

#### `cn` Function
Class name utility for conditional styling.

```typescript
function cn(...inputs: ClassValue[]): string

// Usage examples
<div className={cn(
  "base-class",
  condition && "conditional-class",
  variant === 'primary' && "primary-styles"
)} />
```

#### `formatPercentage` Function
Percentage formatting utility.

```typescript
function formatPercentage(value: number): string

// Usage example
formatPercentage(85) // Returns "85%"
```

#### `formatCurrency` Function
Currency formatting utility.

```typescript
function formatCurrency(value: number): string

// Usage example
formatCurrency(50000) // Returns "$50,000"
```

---

## 📊 Data Mapping Interfaces

### Segment Mapping Objects
Static data for segment descriptions and metadata.

```typescript
// Digital Behavior Mapping
const digitalBehaviorMapping: Record<DigitalBehavior, {
  name: string
  icon: string
  description: string
}> = {
  'DB1': {
    name: 'Creator Cult Leaders',
    icon: '👑',
    description: 'Trend-setting influencers who champion other creators'
  },
  // ... additional mappings
}

// Values Driver Mapping
const valuesDriverMapping: Record<ValuesDriver, {
  name: string
  icon: string
  description: string
}> = {
  'VD1': {
    name: 'Impact Investors',
    icon: '🌱',
    description: 'Mission-driven, sustainability-focused consumers'
  },
  // ... additional mappings
}

// Similar mappings for SpendingPower and CreatorAffinity
```

---

## 🔍 Usage Examples

### Complete User Flow Example

```typescript
// 1. User fills out form
const userInputs: UserInputs = {
  brandDescription: "Sustainable skincare for busy professionals",
  category: "beauty-skincare",
  priceRange: "75-200",
  targetAge: "25-35",
  targetGender: "female",
  values: ["sustainability", "quality", "transparency"],
  seasonality: "perennial",
  isPetRelated: false,
  launchBudget: "25k-50k",
  followingSize: "10k-100k",
  primaryPlatform: "instagram",
  closestCompetitor: "The Ordinary"
}

// 2. Generate segment matches
const matches = SegmentMatcher.matchSegments(userInputs)
const topMatch = matches[0] // Best match

// 3. Generate premium insights (if user upgrades)
const premiumInsights = PremiumInsightsGenerator.generatePremiumInsights(
  userInputs, 
  topMatch
)

// 4. Display results with premium upgrade options
<SegmentResults
  matches={matches}
  userInputs={userInputs}
  onSegmentSelect={(match) => {
    // Handle segment selection or premium upgrade
  }}
/>
```

### Error Handling Patterns

```typescript
// Form validation example
const isStepValid = (step: number, values: Partial<UserInputs>): boolean => {
  switch (step) {
    case 0:
      return !!(values.brandDescription?.length && values.brandDescription.length > 10)
    case 1:
      return !!(values.priceRange && values.targetAge && values.values?.length)
    case 2:
      return !!(values.primaryPlatform && values.followingSize)
    default:
      return false
  }
}

// Component error boundaries
try {
  const matches = SegmentMatcher.matchSegments(userInputs)
  setSegmentMatches(matches)
} catch (error) {
  console.error('Segment matching failed:', error)
  // Handle error appropriately
}
```

---

This API reference provides comprehensive documentation for all interfaces and data models in LaunchLens. For implementation details and usage patterns, refer to the [Technical Documentation](./TECHNICAL_DOCS.md).