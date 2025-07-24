# LaunchLens™ Technical Documentation

## 📚 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Data Models & Types](#data-models--types)
5. [Algorithms & Intelligence](#algorithms--intelligence)
6. [UI System & Design](#ui-system--design)
7. [State Management](#state-management)
8. [Premium Services](#premium-services)
9. [Development Workflow](#development-workflow)
10. [Deployment](#deployment)

---

## 🏗️ Architecture Overview

LaunchLens is built as a modern, mobile-first React application using Next.js 14 with the App Router pattern. The architecture prioritizes performance, type safety, and scalable component design.

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14 (App Router) | SSR, routing, performance optimization |
| **Language** | TypeScript | Type safety, developer experience |
| **Styling** | Tailwind CSS | Utility-first styling, responsive design |
| **Animation** | Framer Motion | Advanced animations, micro-interactions |
| **Forms** | React Hook Form | Form state management, validation |
| **Icons** | Lucide, React Icons, Phosphor Icons | Professional iconography |

### Key Design Principles

1. **Mobile-First**: Every component designed for mobile, enhanced for desktop
2. **Type Safety**: Comprehensive TypeScript coverage with strict mode
3. **Component Composition**: Reusable UI components with consistent API
4. **Performance**: Optimized bundle size, lazy loading, efficient re-renders
5. **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles and CSS custom properties
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main application entry point
├── components/                   # React components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx           # Reusable button with variants
│   │   └── Card.tsx             # Glass-morphism card component
│   ├── SegmentFinder.tsx        # Multi-step form for user input
│   ├── SegmentResults.tsx       # Results display with premium upgrades
│   ├── PremiumUpgrade.tsx       # Premium service upgrade modal
│   └── LaunchStrategyReport.tsx # Comprehensive PDF-ready report
├── lib/                         # Business logic and utilities
│   ├── segmentMatcher.ts        # Core matching algorithm
│   ├── premiumInsightsGenerator.ts # Premium data generation
│   └── utils.ts                 # Utility functions and helpers
├── types/                       # TypeScript type definitions
│   └── segments.ts              # Core data models and interfaces
└── data/                        # Static data and configurations
    └── segments.ts              # Segment definitions and mappings
```

### File Organization Patterns

- **Barrel Exports**: Each directory exports through `index.ts` for clean imports
- **Co-location**: Related files grouped together (components + styles + tests)
- **Separation of Concerns**: Business logic in `/lib`, UI in `/components`, types in `/types`

---

## 🧩 Core Components

### 1. Main Application Flow (`/src/app/page.tsx`)

```typescript
export default function Home() {
  const [currentView, setCurrentView] = useState<'hero' | 'finder' | 'results'>('hero')
  const [segmentMatches, setSegmentMatches] = useState<SegmentMatch[]>([])
  const [userInputs, setUserInputs] = useState<UserInputs | null>(null)
  
  // Navigation between application states
  const handleResults = (matches: SegmentMatch[], inputs: UserInputs) => {
    setSegmentMatches(matches)
    setUserInputs(inputs)
    setCurrentView('results')
  }
}
```

**Key Features:**
- State-based routing between hero, finder, and results views
- User input persistence across navigation
- Mobile-responsive header with back navigation

### 2. SegmentFinder Component (`/src/components/SegmentFinder.tsx`)

Multi-step form with progressive disclosure and real-time validation.

```typescript
interface SegmentFinderProps {
  onResults?: (matches: SegmentMatch[], userInputs: UserInputs) => void
}

export function SegmentFinder({ onResults }: SegmentFinderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserInputs>()
  
  // Step validation logic
  const isStepValid = () => {
    switch (currentStep) {
      case 0: return watchedValues.brandDescription?.length > 10 && watchedValues.category
      case 1: return watchedValues.priceRange && watchedValues.targetAge && watchedValues.values?.length > 0
      case 2: return watchedValues.primaryPlatform && watchedValues.followingSize
    }
  }
}
```

**Step Breakdown:**
- **Step 0**: Brand description, category selection, competitor input
- **Step 1**: Target demographics, values selection, seasonality, pet-related options
- **Step 2**: Creator profile, platform preference, following size, launch budget

**Form Features:**
- Real-time validation with visual feedback
- Progress indicator with completed steps
- Mobile-optimized input components
- Accessibility features (ARIA labels, keyboard navigation)

### 3. SegmentResults Component (`/src/components/SegmentResults.tsx`)

Results display with premium upgrade integration and detailed segment analysis.

```typescript
interface SegmentResultsProps {
  matches: SegmentMatch[]
  userInputs?: UserInputs
  onSegmentSelect?: (match: SegmentMatch) => void
}

export function SegmentResults({ matches, userInputs, onSegmentSelect }: SegmentResultsProps) {
  const [showPremiumUpgrade, setShowPremiumUpgrade] = useState(false)
  const [showPremiumReport, setShowPremiumReport] = useState(false)
  
  // Premium upgrade flow
  const handlePremiumUpgrade = (match: SegmentMatch) => {
    setSelectedMatch(match)
    setShowPremiumUpgrade(true)
  }
}
```

**Features:**
- Top 5 segment matches with confidence scores
- Detailed segment analysis cards
- Premium upgrade buttons and modals
- Print-ready report generation

### 4. Premium Components

#### PremiumUpgrade Modal (`/src/components/PremiumUpgrade.tsx`)
- Three-tier pricing structure
- Feature comparison matrix
- Secure payment integration ready
- Trust indicators and guarantees

#### LaunchStrategyReport (`/src/components/LaunchStrategyReport.tsx`)
- 15-page comprehensive report
- Print-optimized CSS with page breaks
- Customer personas with detailed demographics
- Geographic intelligence with ZIP code analysis
- 90-day launch strategy with phase breakdown

---

## 📊 Data Models & Types

### Core Type Definitions (`/src/types/segments.ts`)

```typescript
// Base segment classification system
export type DigitalBehavior = 'DB1' | 'DB2' | 'DB3' | 'DB4'
export type ValuesDriver = 'VD1' | 'VD2' | 'VD3' | 'VD4'
export type SpendingPower = 'SP1' | 'SP2' | 'SP3'
export type CreatorAffinity = 'CA1' | 'CA2' | 'CA3'

// User input interface with comprehensive parameters
export interface UserInputs {
  brandDescription: string
  category: BrandCategory
  priceRange: PriceRange
  targetAge: AgeRange
  targetGender: Gender              // Enhanced: Male, Female, Unisex, Other
  values: string[]                  // Enhanced: 24 value options
  seasonality: Seasonality          // New: Seasonal, Perennial, N/A
  isPetRelated: boolean            // New: Pet-related product detection
  launchBudget: LaunchBudget
  followingSize: FollowingSize
  primaryPlatform: Platform
  closestCompetitor?: string       // New: Competitor analysis input
}

// Premium insights for advanced reports
export interface PremiumInsights {
  detailedPersona: CustomerPersona
  zipCodeAnalysis: ZipCodeData[]
  competitorAnalysis: CompetitorInsights
  launchStrategy: DetailedLaunchStrategy
}
```

### Segment Data Structure

```typescript
export interface Segment {
  id: string
  code: string                     // Format: LE1, EB2, QS3 (Tier + Number)
  name: string                     // Human-readable name
  tier: 'TIER1' | 'TIER2' | 'TIER3'
  digitalBehavior: DigitalBehavior
  valuesDriver: ValuesDriver
  spendingPower: SpendingPower
  creatorAffinity: CreatorAffinity
  ageMin: number
  ageMax: number
  incomeMin: number
  incomeMax: number
  lifestyle: string               // Descriptive lifestyle summary
  description: string             // Detailed segment description
  launchStrategy: string          // Recommended launch approach
}
```

### Enhanced Type Safety Features

- **Strict Union Types**: All enums use literal string unions for type safety
- **Optional Properties**: Clearly marked with `?` for optional fields
- **Nested Interfaces**: Complex objects properly typed with sub-interfaces
- **Generic Constraints**: Utility types for flexible but type-safe operations

---

## 🧠 Algorithms & Intelligence

### 1. Segment Matching Algorithm (`/src/lib/segmentMatcher.ts`)

The core intelligence engine that analyzes user inputs and returns ranked segment matches.

```typescript
export class SegmentMatcher {
  static matchSegments(inputs: UserInputs): SegmentMatch[] {
    const matches: SegmentMatch[] = []
    
    for (const segment of segments) {
      const score = this.calculateMatchScore(inputs, segment)
      const reasons = this.getMatchReasons(inputs, segment)
      const confidence = this.calculateConfidence(score, reasons.length)
      
      matches.push({ segment, matchScore: score, reasons, confidence })
    }
    
    return matches.sort((a, b) => b.matchScore - a.matchScore)
  }
}
```

#### Weighted Scoring System

```typescript
private static calculateMatchScore(inputs: UserInputs, segment: Segment): number {
  let score = 0
  let maxScore = 0
  
  // Digital Behavior scoring (25% weight)
  const digitalBehaviorScore = this.scoreDigitalBehavior(inputs, segment.digitalBehavior)
  score += digitalBehaviorScore * 0.25
  
  // Values Driver scoring (30% weight)  
  const valuesScore = this.scoreValues(inputs, segment.valuesDriver)
  score += valuesScore * 0.30
  
  // Spending Power scoring (20% weight)
  const spendingScore = this.scoreSpendingPower(inputs, segment.spendingPower)
  score += spendingScore * 0.20
  
  // Creator Affinity scoring (20% weight)
  const affinityScore = this.scoreCreatorAffinity(inputs, segment.creatorAffinity)
  score += affinityScore * 0.20
  
  // Enhanced factors (5% each)
  score += this.scoreGenderAlignment(inputs, segment) * 0.05
  score += this.scoreSpecialtyFactors(inputs, segment) * 0.05
  
  return Math.round((score / maxScore) * 100)
}
```

#### Enhanced Scoring Factors

1. **Gender Alignment Scoring**: Segment-specific preferences for different genders
2. **Competitor Analysis**: Differentiation scoring based on competitor overlap
3. **Pet-Related Bonuses**: Special scoring for pet-friendly segments
4. **Seasonality Alignment**: Matching seasonal products with trend-responsive segments

### 2. Premium Insights Generator (`/src/lib/premiumInsightsGenerator.ts`)

Generates realistic premium data for detailed reports and personas.

```typescript
export class PremiumInsightsGenerator {
  static generatePremiumInsights(userInputs: UserInputs, segmentMatch: SegmentMatch): PremiumInsights {
    return {
      detailedPersona: this.generateCustomerPersona(userInputs, segmentMatch),
      zipCodeAnalysis: this.generateZipCodeAnalysis(userInputs, segmentMatch),
      competitorAnalysis: this.generateCompetitorAnalysis(userInputs),
      launchStrategy: this.generateDetailedLaunchStrategy(userInputs, segmentMatch)
    }
  }
}
```

#### Customer Persona Generation

```typescript
private static generateCustomerPersona(userInputs: UserInputs, segmentMatch: SegmentMatch): CustomerPersona {
  return {
    name: this.generateRealisticName(),
    age: this.calculateAgeFromRange(userInputs.targetAge),
    income: this.calculateIncomeFromSegment(segmentMatch.segment),
    location: this.getLocationBySegment(segmentMatch.segment.code),
    demographics: {
      gender: userInputs.targetGender,
      education: this.getEducationBySegment(segmentMatch.segment.code),
      occupation: this.getOccupationByCategory(userInputs.category),
      // ... additional demographic fields
    },
    psychographics: {
      values: userInputs.values.slice(0, 5),
      interests: this.getInterestsByCategory(userInputs.category),
      // ... behavioral and lifestyle data
    }
  }
}
```

---

## 🎨 UI System & Design

### Design System Architecture

LaunchLens uses a sophisticated design system built on glassmorphism principles with dark theme optimization.

#### Color System (`/src/app/globals.css`)

```css
:root {
  /* Primary colors - Dark theme base */
  --primary-50: #f8fafc;
  --primary-100: #f1f5f9;
  --primary-200: #e2e8f0;
  --primary-300: #cbd5e1;
  --primary-400: #94a3b8;
  --primary-500: #64748b;
  --primary-600: #475569;
  --primary-700: #334155;
  --primary-800: #1e293b;
  --primary-900: #0f172a;
  --primary-950: #020617;

  /* Accent colors - Warm amber */
  --accent-300: #fcd34d;
  --accent-400: #fbbf24;
  --accent-500: #f59e0b;
  --accent-600: #d97706;

  /* Brand colors - Cool blue */
  --brand-400: #60a5fa;
  --brand-500: #3b82f6;
  --brand-600: #2563eb;
}
```

#### Glassmorphism Components

```css
.glass-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s ease-in-out infinite;
  pointer-events: none;
}
```

### Component Architecture

#### Base UI Components (`/src/components/ui/`)

```typescript
// Button component with variant system
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
}

export function Button({ variant = 'primary', size = 'default', loading, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-2xl font-semibold transition-all",
        // Variant styles
        variant === 'primary' && "bg-accent-500 text-primary-950 hover:bg-accent-600",
        variant === 'glass' && "glass-card text-primary-100 hover:border-accent-500/30",
        // Size styles
        size === 'sm' && "px-4 py-2 text-sm",
        size === 'xl' && "px-8 py-4 text-xl",
        // Loading state
        loading && "opacity-50 cursor-not-allowed"
      )}
      disabled={loading}
      {...props}
    />
  )
}
```

#### Advanced Animation System

```typescript
// Framer Motion variants for consistent animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

// Usage in components
<motion.div
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
  className="glass-card"
>
  {content}
</motion.div>
```

### Mobile-First Responsive Design

```css
/* Mobile-first breakpoint system */
.container {
  @apply px-4 mx-auto;
}

@screen sm {
  .container {
    @apply px-6;
  }
}

@screen lg {
  .container {
    @apply px-8 max-w-7xl;
  }
}

/* Touch-optimized interactions */
.touch-target {
  @apply min-h-[44px] min-w-[44px] p-2;
}
```

---

## 🔄 State Management

LaunchLens uses React's built-in state management with strategic lifting and prop drilling for simplicity and performance.

### Application State Flow

```typescript
// Main app state (page.tsx)
const [currentView, setCurrentView] = useState<'hero' | 'finder' | 'results'>('hero')
const [segmentMatches, setSegmentMatches] = useState<SegmentMatch[]>([])
const [userInputs, setUserInputs] = useState<UserInputs | null>(null)

// Data flows down through props
<SegmentResults 
  matches={segmentMatches}
  userInputs={userInputs}
  onSegmentSelect={handleSegmentSelect}
/>
```

### Form State Management

```typescript
// SegmentFinder uses React Hook Form for complex form state
const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<UserInputs>({
  defaultValues: {
    brandDescription: '',
    category: 'beauty-skincare',
    targetGender: 'unisex',
    values: [],
    seasonality: 'perennial',
    isPetRelated: false,
    closestCompetitor: ''
  }
})

// Real-time validation and step management
const watchedValues = watch()
const isStepValid = () => {
  // Validation logic based on current step
}
```

### Premium Modal State

```typescript
// Premium upgrade flow state management
const [showPremiumUpgrade, setShowPremiumUpgrade] = useState(false)
const [showPremiumReport, setShowPremiumReport] = useState(false)
const [selectedMatch, setSelectedMatch] = useState<SegmentMatch | null>(null)

// State transitions
const handlePremiumUpgrade = (match: SegmentMatch) => {
  setSelectedMatch(match)
  setShowPremiumUpgrade(true)
}

const handleUpgradeComplete = () => {
  setShowPremiumUpgrade(false)
  if (selectedMatch) {
    // Generate premium insights and show report
    const premiumInsights = PremiumInsightsGenerator.generatePremiumInsights(userInputs, selectedMatch)
    selectedMatch.premiumInsights = premiumInsights
    setShowPremiumReport(true)
  }
}
```

---

## 💎 Premium Services

### Premium Architecture Overview

The premium service system is designed for seamless upgrade experiences and comprehensive reporting capabilities.

#### Premium Data Flow

```
User Input → Segment Matching → Premium Upgrade → Insights Generation → Report Display
```

### Premium Insights Generation

```typescript
interface PremiumInsights {
  detailedPersona: CustomerPersona        // AI-generated realistic personas
  zipCodeAnalysis: ZipCodeData[]         // GIS-powered geographic intelligence
  competitorAnalysis: CompetitorInsights  // Market positioning recommendations
  launchStrategy: DetailedLaunchStrategy // 90-day execution plan
}
```

#### Customer Persona Generation Algorithm

```typescript
private static generateCustomerPersona(userInputs: UserInputs, segmentMatch: SegmentMatch): CustomerPersona {
  const segment = segmentMatch.segment
  const income = Math.floor((segment.incomeMin + segment.incomeMax) / 2)
  const age = this.calculateAgeFromRange(userInputs.targetAge)
  
  return {
    name: this.generateRealisticName(),
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
    preferredChannels: [userInputs.primaryPlatform, ...this.getSecondaryChannels(userInputs.primaryPlatform)],
    spendingHabits: this.generateSpendingHabits(userInputs.priceRange, userInputs.category)
  }
}
```

### Report Generation System

#### Print-Optimized CSS

```css
/* Print-specific styles for professional PDF generation */
@media print {
  .print\\:hidden {
    display: none !important;
  }
  
  .print\\:text-black {
    color: #000 !important;
  }
  
  .print\\:border-gray-300 {
    border-color: #d1d5db !important;
  }
  
  .print\\:break-inside-avoid {
    break-inside: avoid;
  }
  
  .print\\:shadow-none {
    box-shadow: none !important;
  }
}
```

#### Report Component Structure

```typescript
export function LaunchStrategyReport({ segmentMatch, premiumInsights }: LaunchStrategyReportProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 print:space-y-4">
      {/* Report Header - Executive Summary */}
      <ReportHeader segment={segmentMatch.segment} matchScore={segmentMatch.matchScore} />
      
      {/* Customer Persona Section */}
      <PersonaCard persona={premiumInsights.detailedPersona} />
      
      {/* Geographic Intelligence */}
      <ZipCodeAnalysis zipCodes={premiumInsights.zipCodeAnalysis} />
      
      {/* 90-Day Launch Strategy */}
      <LaunchPhases strategy={premiumInsights.launchStrategy} />
      
      {/* Competitive Intelligence */}
      <CompetitorInsights analysis={premiumInsights.competitorAnalysis} />
      
      {/* Budget Allocation */}
      <BudgetBreakdown allocation={premiumInsights.launchStrategy.budget_allocation} />
    </div>
  )
}
```

---

## 🔧 Development Workflow

### Environment Setup

```bash
# Prerequisites
node >= 18.0.0
npm >= 9.0.0

# Clone and setup
git clone <repository-url>
cd LaunchLens
npm install

# Development commands
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build with optimization
npm run start        # Start production server
npm run lint         # ESLint with Next.js rules
npm run type-check   # TypeScript type checking
```

### Code Quality & Standards

#### ESLint Configuration (`.eslintrc.json`)

```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react/no-unescaped-entities": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

#### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Component Development Guidelines

#### 1. Component File Structure

```typescript
// ComponentName.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  // Props interface with clear documentation
  required: string
  optional?: boolean
  onAction?: (data: SomeType) => void
}

export function ComponentName({ required, optional = false, onAction }: ComponentNameProps) {
  // Component implementation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card"
    >
      {/* Component content */}
    </motion.div>
  )
}
```

#### 2. Styling Conventions

- Use Tailwind utility classes for styling
- Create reusable CSS classes for complex patterns (glass-card, floating-orb)
- Follow mobile-first responsive design
- Use semantic HTML elements with proper ARIA labels

#### 3. State Management Patterns

- Use `useState` for local component state
- Lift state up when sharing between components
- Use React Hook Form for complex form state
- Pass data down through props, events up through callbacks

### Testing Strategy

While not currently implemented, the recommended testing approach:

```typescript
// Example test structure
import { render, screen, fireEvent } from '@testing-library/react'
import { SegmentFinder } from '@/components/SegmentFinder'

describe('SegmentFinder', () => {
  it('should validate form inputs correctly', () => {
    render(<SegmentFinder onResults={jest.fn()} />)
    
    const brandInput = screen.getByPlaceholderText(/describe your brand/i)
    fireEvent.change(brandInput, { target: { value: 'Test brand' } })
    
    expect(brandInput).toHaveValue('Test brand')
  })
})
```

---

## 🚀 Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Analyze bundle size
npx @next/bundle-analyzer
```

### Environment Configuration

```bash
# .env.local (development)
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.production (production)
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_API_URL=https://api.launchlens.com
```

### Performance Optimizations

1. **Bundle Size**: Optimized to ~161KB first load JS
2. **Image Optimization**: Next.js automatic image optimization
3. **Code Splitting**: Automatic route-based splitting
4. **Static Generation**: Pre-rendered pages for better performance
5. **Compression**: Gzip compression enabled by default

### Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] Test all user flows in production build
- [ ] Verify mobile responsiveness
- [ ] Test print functionality for PDF reports
- [ ] Validate premium upgrade flows
- [ ] Check loading states and error handling

---

## 📋 Additional Resources

### Helpful Commands

```bash
# Development
npm run dev                    # Start development server
npm run build                  # Production build
npm run lint                   # Run ESLint
npm run lint:fix              # Fix ESLint errors

# Debugging
npm run build && npm run start # Test production build locally
npx next info                 # Display Next.js environment info
```

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.0.0 | React framework with App Router |
| react | ^18.2.0 | UI library |
| typescript | ^5.2.0 | Type safety |
| tailwindcss | ^3.3.0 | Utility-first CSS framework |
| framer-motion | ^10.16.0 | Animation library |
| react-hook-form | ^7.47.0 | Form state management |
| lucide-react | ^0.294.0 | Icon library |
| class-variance-authority | ^0.7.0 | Component variant management |

### Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: ES2017, CSS Grid, Flexbox, CSS Custom Properties

---

This technical documentation provides a comprehensive overview of the LaunchLens codebase. For specific implementation questions or contribution guidelines, please refer to the relevant component files and their inline documentation.