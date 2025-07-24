# LaunchLens Architecture Overview

## Project Structure

### Core Application Architecture
```
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with global providers
│   ├── page.tsx                 # Landing page (creator intelligence suite)
│   ├── solutions/               # Solution pages directory
│   │   ├── segmentation/        # AI Audience Segmentation (Free)
│   │   ├── trends/              # Cultural Trend Intelligence (Premium)
│   │   ├── communities/         # Micro-Community Discovery (Premium)
│   │   ├── hyperlocal/          # Hyperlocal Targeting (Premium)
│   │   └── influencers/         # Nano Influencer Registry (Coming Q2 2025)
│   ├── dashboard/               # User dashboard
│   ├── explore/                 # Premium exploration tools
│   ├── pricing/                 # Pricing and plans
│   ├── login/ & register/       # Authentication pages
│   └── how-it-works/            # Product information
├── components/                   # Reusable React components
│   ├── Header.tsx               # Main navigation with Solutions dropdown
│   ├── ui/                      # UI component library
│   ├── auth/                    # Authentication components
│   └── SegmentFinder.tsx        # Core audience discovery tool
├── contexts/                     # React context providers
│   └── AuthContext.tsx          # Authentication state management
├── lib/                         # Utility libraries
│   ├── imageConfig.ts           # Image handling and optimization
│   └── utils.ts                 # General utilities
└── types/                       # TypeScript type definitions
    └── segments.ts              # Audience segment types
```

## Component Architecture

### Navigation System
```typescript
Header Component Structure:
├── Mobile Header (lg:hidden)
│   ├── Brand logo + back button
│   ├── Mobile menu toggle
│   └── Collapsible Solutions menu
└── Desktop Header (hidden lg:block)
    ├── Brand logo + tagline
    ├── Solutions dropdown (hover)
    ├── How it works link
    ├── Pricing link
    └── Auth buttons
```

### Solutions Configuration
```typescript
// Central configuration in Header.tsx
const solutions = [
  {
    name: 'Segmentation Analysis',
    description: 'AI-powered audience segmentation for creator brands',
    icon: <Target className="w-5 h-5" />,
    href: '/solutions/segmentation',
    badge: 'Free'
  },
  {
    name: 'Trend Tracking', 
    description: 'Real-time cultural movement and trend intelligence',
    icon: <TrendingUp className="w-5 h-5" />,
    href: '/solutions/trends',
    badge: 'Premium'
  },
  {
    name: 'Micro-Communities',
    description: 'Discover 100+ emerging subcultural movements',
    icon: <HiSparkles className="w-5 h-5" />,
    href: '/solutions/communities',
    badge: 'Premium'
  },
  {
    name: 'Hyperlocal Analysis',
    description: 'Geographic targeting with ZIP code precision',
    icon: <MapPin className="w-5 h-5" />,
    href: '/solutions/hyperlocal',
    badge: 'Premium'
  },
  {
    name: 'Nano Influencer Registry',
    description: 'Connect with authentic micro and nano influencers',
    icon: <Star className="w-5 h-5" />,
    href: '/solutions/influencers',
    badge: 'Coming Soon'
  }
]
```

## State Management

### Authentication Context
```typescript
// AuthContext.tsx provides:
interface AuthContextType {
  isAuthenticated: boolean;
  canAccessPremium: () => boolean;
  // ... other auth methods
}
```

### Local State Patterns
```typescript
// Header navigation state
const [solutionsOpen, setSolutionsOpen] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// Landing page view state  
const [currentView, setCurrentView] = useState<'hero' | 'finder' | 'results'>('hero')
```

## Styling Architecture

### Design System
- **Framework**: Tailwind CSS with custom configuration
- **Theme**: Purple gradient branding (#971dab primary)
- **Components**: Glass-card design language
- **Animations**: Framer Motion for transitions
- **Responsive**: Mobile-first approach

### Color Palette
```css
Primary: #971dab (purple)
Accent: Purple gradients
Success: Green variants
Brand: Purple variants
Glass effect: backdrop-blur with opacity layers
```

### Component Patterns
```typescript
// Standard glass card pattern
className="glass-card p-6 rounded-2xl hover:border-accent-500/30 transition-all duration-300"

// Gradient text pattern
className="gradient-text"

// Floating orb background pattern
className="floating-orb w-96 h-96 bg-accent-500/20"
```

## Data Flow

### Page-to-Page Navigation
```
Landing Page → Solutions Dropdown → Individual Solution Pages
├── Segmentation (Free entry point)
├── Trends (Premium gated)
├── Communities (Premium gated) 
├── Hyperlocal (Premium gated)
└── Influencers (Coming soon page)
```

### Authentication Flow
```
Public Pages: Landing, Solutions info, How it works, Pricing
Auth Required: Dashboard, Explore, Premium solution features
Premium Required: Advanced solution features, full community access
```

## Solution Page Architecture

### Consistent Page Structure
Each solution page follows this pattern:
```typescript
1. Header component (with Solutions dropdown)
2. Hero section with solution-specific messaging
3. Features/benefits showcase
4. Use cases or examples
5. Success stories/testimonials
6. Call-to-action section
```

### Content Strategy
- **Segmentation**: Free tool positioning, 95% accuracy claims
- **Trends**: 6-12 month early detection, 90% accuracy
- **Communities**: 100+ communities, cultural intelligence
- **Hyperlocal**: ZIP code precision, 2,847+ areas
- **Influencers**: 1000+ creators, Q2 2025 launch

## Technical Stack

### Frontend Framework
- **Next.js 14**: App Router with static generation
- **React 18**: Component architecture with hooks
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library

### Key Dependencies
```json
{
  "framer-motion": "Animation system",
  "lucide-react": "Icon library", 
  "react-icons": "Additional icons",
  "next": "14.2.30",
  "react": "18.x",
  "typescript": "Type safety"
}
```

### Build Configuration
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: Next.js Image component
- **Bundle Splitting**: Automatic code splitting
- **ESLint**: Code quality enforcement

## Performance Considerations

### Bundle Sizes
```
Main landing page: 4.35 kB (185 kB First Load JS)
Solution pages: 3.77-6.02 kB (147-150 kB First Load JS)
Shared chunks: 87.1 kB
```

### Optimization Strategies
- **Component lazy loading**: Dynamic imports where appropriate
- **Image optimization**: WebP format with Next.js Image
- **CSS purging**: Tailwind removes unused styles
- **Static generation**: Pre-rendered at build time

## Security & Auth

### Access Control
```typescript
// Premium content gating pattern
{canAccessPremium() ? (
  <PremiumContent />
) : (
  <UpgradePrompt />
)}

// Authentication-aware navigation
{isAuthenticated ? <Dashboard /> : <Login />}
```

### Protected Routes
- Dashboard requires authentication
- Premium features require subscription
- Solution info pages are public
- Upgrade prompts for premium content

## Integration Points

### External Services
- **Mapbox**: Planned for hyperlocal visualization
- **Analytics**: User behavior tracking
- **Payment**: Subscription management
- **Email**: User communications

### API Architecture
```
Planned API structure:
/api/
├── auth/           # Authentication endpoints
├── segments/       # Audience segmentation
├── trends/         # Trend data
├── communities/    # Community insights
├── geographic/     # Location data
└── influencers/    # Creator connections
```

## Development Guidelines

### Component Creation
1. Use TypeScript interfaces for props
2. Follow glass-card design patterns
3. Implement responsive design
4. Add proper accessibility attributes
5. Include loading and error states

### Navigation Updates
1. Update solutions array in Header.tsx
2. Create corresponding page structure
3. Update routing in navigation links
4. Test mobile and desktop views
5. Verify authentication integration

### Content Guidelines
1. Focus on creator brand messaging
2. Emphasize authentic community connection
3. Highlight early trend detection
4. Show real ROI and metrics
5. Maintain professional but approachable tone

## Testing Strategy

### Current Status
- **Build tests**: All pages compile successfully
- **ESLint**: No errors, minimal warnings
- **TypeScript**: Full type checking enabled
- **Manual testing**: Navigation and responsive design verified

### Recommended Testing
```typescript
// Unit tests for key components
describe('Header', () => {
  test('renders solutions dropdown');
  test('handles mobile menu toggle');
  test('navigation links work correctly');
});

// Integration tests for user flows
describe('Solution Discovery Flow', () => {
  test('landing page to solution page navigation');
  test('premium content gating');
  test('authentication flow');
});
```

## Deployment

### Build Process
```bash
npm run build      # Production build
npm run start      # Production server
npm run export     # Static export (if needed)
```

### Environment Variables
```bash
NEXT_PUBLIC_API_URL=           # API base URL
NEXT_PUBLIC_MAPBOX_TOKEN=      # Mapbox integration
NEXT_PUBLIC_ANALYTICS_ID=      # Analytics tracking
```

### Production Checklist
- [ ] All routes building successfully
- [ ] Mobile responsiveness verified
- [ ] Authentication flow tested
- [ ] Premium content gating working
- [ ] SEO metadata configured
- [ ] Error boundaries implemented
- [ ] Performance metrics acceptable

---

**Architecture Version**: 2.0 (Post-Solutions Migration)
**Last Updated**: 2025-01-18
**Next.js Version**: 14.2.30
**Build Status**: ✅ Production Ready