# LaunchLens Quick Start Guide

## Project Status Summary
**Current State**: Production-ready creator intelligence suite with 5 integrated solutions
**Last Major Update**: 2025-01-18 (Offerings → Solutions migration)
**Build Status**: ✅ All 15 pages compiling successfully

## Immediate Development Setup

### Prerequisites
```bash
Node.js 18+
npm or yarn
Git access to repository
```

### Quick Start Commands
```bash
# Clone and start
git clone [repository-url]
cd LaunchLens
npm install
npm run dev

# Production build test
npm run build
npm run start
```

### Environment Setup
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Current Application State

### Navigation Structure
```
Header Component (Solutions Dropdown):
├── Segmentation Analysis (Free) - /solutions/segmentation
├── Trend Tracking (Premium) - /solutions/trends  
├── Micro-Communities (Premium) - /solutions/communities
├── Hyperlocal Analysis (Premium) - /solutions/hyperlocal
└── Nano Influencer Registry (Coming Soon) - /solutions/influencers
```

### Page Hierarchy
```
/ (Landing - Creator Intelligence Suite)
├── /solutions/ (5 solution pages)
├── /dashboard (User dashboard)
├── /explore (Premium features)
├── /pricing (Plans and pricing)
├── /how-it-works (Product info)
├── /login & /register (Auth)
└── /test-users (Development)
```

## Key Files to Know

### Critical Components
```typescript
/src/components/Header.tsx
- Central navigation with Solutions dropdown
- Mobile/desktop responsive design
- Authentication integration
- SINGLE SOURCE OF TRUTH for navigation

/src/app/page.tsx  
- Landing page showcasing 5-tool suite
- Uses Header component (shows Solutions dropdown)
- Creator-focused messaging throughout

/src/contexts/AuthContext.tsx
- Authentication state management
- Premium access control
- User tier management
```

### Solution Pages (All in `/src/app/solutions/`)
```typescript
segmentation/page.tsx    - Free tool (entry point)
trends/page.tsx         - Premium cultural intelligence  
communities/page.tsx    - Premium community discovery
hyperlocal/page.tsx     - Premium geographic targeting
influencers/page.tsx    - Coming Soon (Q2 2025)
```

## Making Changes

### Adding New Solution
1. **Create page structure**:
   ```bash
   mkdir src/app/solutions/new-solution
   touch src/app/solutions/new-solution/page.tsx
   ```

2. **Update Header navigation**:
   ```typescript
   // In src/components/Header.tsx
   const solutions = [
     // ... existing solutions
     {
       name: 'New Solution',
       description: 'Solution description for creators',
       icon: <IconComponent className="w-5 h-5" />,
       href: '/solutions/new-solution',
       badge: 'Premium' // or 'Free' or 'Coming Soon'
     }
   ]
   ```

3. **Build and test**:
   ```bash
   npm run build
   # Check for compilation errors
   # Test navigation in browser
   ```

### Updating Navigation Text
```typescript
// In src/components/Header.tsx - Line ~184
<button className="flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium">
  Solutions  // Change this text
  <ChevronDown className="w-4 h-4 ml-1" />
</button>
```

### Modifying Landing Page Content
```typescript
// In src/app/page.tsx
// Key sections to edit:
- Hero headline (line ~151)
- Value proposition (line ~159) 
- Solutions showcase (line ~225)
- Success stories (line ~354)
```

## Common Tasks

### Content Updates
```typescript
// Update solution descriptions
// File: src/components/Header.tsx
solutions[index].description = "New description"

// Update landing page stats
// File: src/app/page.tsx  
{ icon: Target, value: "5", label: "Creator Tools", color: "accent" }

// Update testimonials
// File: src/app/page.tsx (line ~354)
{ name: "Name", role: "Role", content: "Quote", metric: "Result" }
```

### Styling Changes
```typescript
// Global styles: src/app/globals.css
// Component styles: Tailwind classes in components
// Theme colors: Tailwind config

// Key design patterns:
glass-card           - Glassmorphism containers
gradient-text        - Purple gradient text
floating-orb         - Background animations
```

### Authentication Flow
```typescript
// Check auth status
const { isAuthenticated, canAccessPremium } = useAuth()

// Conditional content
{canAccessPremium() ? <PremiumContent /> : <UpgradePrompt />}

// Protected routes
{isAuthenticated ? <Dashboard /> : <Login />}
```

## Build & Deployment

### Development Workflow
```bash
npm run dev         # Development server (localhost:3000)
npm run build       # Production build
npm run start       # Production server
npm run lint        # Code quality check
```

### Pre-Deployment Checklist
- [ ] `npm run build` succeeds
- [ ] All routes accessible
- [ ] Mobile responsive
- [ ] Solutions dropdown works
- [ ] Authentication flows tested
- [ ] Premium content gated properly

### Production Build Output
```
Route (app)                              Size     First Load JS
┌ ○ /                                    4.35 kB         185 kB
├ ○ /solutions/segmentation              3.77 kB         147 kB
├ ○ /solutions/trends                    4.51 kB         148 kB
├ ○ /solutions/communities               4.98 kB         149 kB
├ ○ /solutions/hyperlocal                5.59 kB         149 kB
├ ○ /solutions/influencers               6.02 kB         150 kB
└ ○ [other pages]                        [sizes]         [sizes]
```

## Troubleshooting

### Common Issues

#### Solutions Dropdown Not Showing
**Problem**: Dropdown missing on certain pages
**Solution**: Ensure page uses `<Header />` component
```typescript
// Import and use Header component
import { Header } from '@/components/Header'
// In component JSX:
<Header showBackButton={false} />
```

#### Build Failures
**Problem**: ESLint quote errors
**Solution**: Escape quotes in JSX content
```typescript
// Wrong
"Don't miss out"

// Correct  
"Don&apos;t miss out"
```

#### Navigation Links Broken
**Problem**: 404 on solution pages
**Solution**: Verify folder structure matches URLs
```bash
# Should exist:
src/app/solutions/segmentation/page.tsx
src/app/solutions/trends/page.tsx
# etc.
```

#### Premium Content Not Gated
**Problem**: Premium content showing for free users
**Solution**: Check auth context usage
```typescript
// Verify auth import and usage
import { useAuth } from '@/contexts/AuthContext'
const { canAccessPremium } = useAuth()
```

### Debug Commands
```bash
# Check build output
npm run build 2>&1 | grep -i error

# Check TypeScript errors
npx tsc --noEmit

# Check ESLint issues  
npm run lint

# Verify route structure
find src/app -name "page.tsx" | sort
```

## Development Standards

### Code Style
- **TypeScript**: Required for all new components
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Automated code quality
- **Prettier**: Code formatting

### Component Patterns
```typescript
// Standard component structure
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'

export default function ComponentName() {
  const { isAuthenticated } = useAuth()
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      {/* Content */}
    </div>
  )
}
```

### File Naming
- Components: PascalCase (`Header.tsx`)
- Pages: lowercase (`page.tsx`) 
- Utilities: camelCase (`imageConfig.ts`)
- Constants: UPPER_SNAKE_CASE

## Next Steps & Roadmap

### Immediate Priorities
1. **Mapbox Integration**: Enable interactive maps for hyperlocal solution
2. **Influencer Registry**: Complete Q2 2025 implementation
3. **API Integration**: Connect to real data sources
4. **Analytics**: Implement user behavior tracking

### Enhancement Opportunities
- A/B testing for conversion optimization
- Interactive solution demos
- Video testimonials
- Real-time data feeds
- Advanced filtering options

## Support & Resources

### Documentation Files
- `RECENT_CHANGES.md` - Latest modifications
- `ARCHITECTURE_OVERVIEW.md` - Technical architecture  
- `SOLUTION_PAGES_GUIDE.md` - Content and page details
- `README.md` - General project information

### Key Contacts
- Development Team: [Contact info]
- Content Team: [Contact info]
- Product Owner: [Contact info]

### External Resources
- Next.js 14 Documentation
- Tailwind CSS Documentation  
- Framer Motion Documentation
- TypeScript Handbook

---

**Quick Start Version**: 2.0
**Last Updated**: 2025-01-18
**Next Review**: 2025-02-01
**Status**: ✅ Ready for Development