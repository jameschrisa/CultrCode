# LaunchLens™ Design System

## 🎨 Visual Identity & Design Philosophy

LaunchLens employs a sophisticated dark theme with glassmorphism elements, designed specifically for the creator economy. The design system emphasizes premium feel, accessibility, and mobile-first responsiveness.

---

## 🌈 Color System

### Primary Colors (Dark Theme Base)
```css
:root {
  --primary-50: #f8fafc;   /* Lightest text */
  --primary-100: #f1f5f9;  /* Primary text */
  --primary-200: #e2e8f0;  /* Secondary text */
  --primary-300: #cbd5e1;  /* Muted text */
  --primary-400: #94a3b8;  /* Placeholder text */
  --primary-500: #64748b;  /* Icons, borders */
  --primary-600: #475569;  /* Subtle borders */
  --primary-700: #334155;  /* Card borders */
  --primary-800: #1e293b;  /* Card backgrounds */
  --primary-900: #0f172a;  /* Dark backgrounds */
  --primary-950: #020617;  /* Darkest background */
}
```

### Accent Colors (Warm Amber)
```css
:root {
  --accent-300: #fcd34d;   /* Light accent */
  --accent-400: #fbbf24;   /* Icons, highlights */
  --accent-500: #f59e0b;   /* Primary accent */
  --accent-600: #d97706;   /* Hover states */
}
```

### Brand Colors (Cool Blue)
```css
:root {
  --brand-400: #60a5fa;    /* Secondary accent */
  --brand-500: #3b82f6;    /* Brand primary */
  --brand-600: #2563eb;    /* Brand hover */
}
```

### Semantic Colors
```css
:root {
  --success-400: #4ade80;  /* Success states */
  --success-500: #22c55e;  /* Success primary */
  
  --error-400: #f87171;    /* Error states */
  --error-500: #ef4444;    /* Error primary */
  
  --warning-400: #facc15;  /* Warning states */
  --warning-500: #eab308;  /* Warning primary */
}
```

### Color Usage Guidelines

| Color | Use Case | Example |
|-------|----------|---------|
| **Primary 50-100** | Main text, headings | User-facing content |
| **Primary 200-300** | Secondary text, descriptions | Supporting information |
| **Primary 400-500** | Muted text, placeholders | Form placeholders, disabled text |
| **Primary 700-800** | Borders, card backgrounds | Component boundaries |
| **Primary 900-950** | Page backgrounds | App background, modal overlays |
| **Accent 400-500** | Interactive elements, CTAs | Buttons, links, highlights |
| **Brand 400-500** | Brand elements, secondary CTAs | Logo accents, secondary buttons |

---

## 🔤 Typography System

### Font Stack
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", 
             sans-serif, "Apple Color Emoji", "Segoe UI Emoji", 
             "Segoe UI Symbol", "Noto Color Emoji";
```

### Type Scale
```css
/* Headings */
.text-5xl { font-size: 3rem; line-height: 1; }      /* 48px - Hero headlines */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px - Page titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px - Section headers */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }    /* 24px - Card titles */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* 20px - Subheadings */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px - Large body */

/* Body Text */
.text-base { font-size: 1rem; line-height: 1.5rem; }    /* 16px - Default body */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px - Small text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }     /* 12px - Captions */

/* Font Weights */
.font-light { font-weight: 300; }    /* Light text */
.font-normal { font-weight: 400; }   /* Regular body text */
.font-medium { font-weight: 500; }   /* Medium emphasis */
.font-semibold { font-weight: 600; } /* Subheadings */
.font-bold { font-weight: 700; }     /* Headings */
.font-black { font-weight: 900; }    /* Hero text */
```

### Typography Usage

```html
<!-- Hero Headline -->
<h1 className="text-5xl lg:text-7xl font-black text-primary-50 leading-[0.9] tracking-tight">
  Discover Your Perfect Audience
</h1>

<!-- Section Header -->
<h2 className="text-3xl font-bold text-primary-50 mb-6">
  Your Customer Segments
</h2>

<!-- Card Title -->
<h3 className="text-xl font-bold text-primary-100 mb-3">
  Impact Investors
</h3>

<!-- Body Text -->
<p className="text-base text-primary-300 leading-relaxed">
  Mission-driven consumers who prioritize sustainability and ethical practices.
</p>

<!-- Small Text -->
<span className="text-sm text-primary-400">
  95% match confidence
</span>
```

---

## 🎭 Glassmorphism System

### Core Glass Card
The foundation of the LaunchLens visual system.

```css
.glass-card {
  background: rgba(15, 23, 42, 0.8);          /* Semi-transparent primary-900 */
  backdrop-filter: blur(16px);                 /* Glassmorphism blur effect */
  -webkit-backdrop-filter: blur(16px);        /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle white border */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);  /* Depth shadow */
  border-radius: 1.5rem;                      /* 24px rounded corners */
}
```

### Glass Variants

```css
/* Hover Glass Effect */
.glass-card:hover {
  border-color: rgba(251, 191, 36, 0.3);      /* Accent border on hover */
  background: rgba(15, 23, 42, 0.9);          /* Slightly more opaque */
  transition: all 0.3s ease;
}

/* Interactive Glass (for buttons) */
.glass-interactive {
  background: rgba(251, 191, 36, 0.1);        /* Accent tint */
  border: 1px solid rgba(251, 191, 36, 0.2);  /* Accent border */
  backdrop-filter: blur(12px);
}

/* Glass Modal Background */
.glass-modal {
  background: rgba(0, 0, 0, 0.8);             /* Dark overlay */
  backdrop-filter: blur(8px);                 /* Background blur */
}
```

### Floating Orbs System
Ambient background elements for visual depth.

```css
.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-15px) rotate(270deg); }
}

/* Orb Variants */
.orb-accent { background: rgba(251, 191, 36, 0.2); }  /* Warm accent */
.orb-brand { background: rgba(59, 130, 246, 0.15); }  /* Cool brand */
.orb-success { background: rgba(34, 197, 94, 0.1); }  /* Success green */
```

---

## 🧩 Component Library

### Button System

#### Primary Button
```html
<button className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-primary-950 font-semibold rounded-2xl hover:bg-accent-600 transition-all shadow-lg hover:shadow-accent-500/50">
  Get Started
</button>
```

#### Glass Button
```html
<button className="inline-flex items-center justify-center px-6 py-3 glass-card text-primary-100 font-medium rounded-2xl hover:border-accent-500/30 transition-all">
  Learn More
</button>
```

#### Outline Button
```html
<button className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-700 text-primary-200 font-medium rounded-2xl hover:border-accent-500 hover:text-accent-300 transition-all">
  Cancel
</button>
```

### Button Sizes
```css
/* Small */
.btn-sm { padding: 0.5rem 1rem; font-size: 0.875rem; }      /* 8px 16px, 14px */

/* Default */
.btn-default { padding: 0.75rem 1.5rem; font-size: 1rem; }  /* 12px 24px, 16px */

/* Large */
.btn-lg { padding: 1rem 2rem; font-size: 1.125rem; }        /* 16px 32px, 18px */

/* Extra Large */
.btn-xl { padding: 1.5rem 3rem; font-size: 1.25rem; }       /* 24px 48px, 20px */
```

### Card System

#### Basic Glass Card
```html
<div className="glass-card p-6">
  <h3 className="text-xl font-bold text-primary-100 mb-3">Card Title</h3>
  <p className="text-primary-300 leading-relaxed">Card content goes here.</p>
</div>
```

#### Interactive Card (Hover Effects)
```html
<div className="glass-card p-6 hover:border-accent-500/30 transition-all duration-500 group cursor-pointer">
  <div className="group-hover:text-accent-300 transition-colors">
    Card content with hover effects
  </div>
</div>
```

#### Premium Card (Gradient Border)
```html
<div className="relative glass-card p-6">
  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-brand-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="relative z-10">Premium card content</div>
</div>
```

### Form Elements

#### Text Input
```html
<input 
  type="text"
  className="w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-50 placeholder-primary-400 backdrop-blur-sm"
  placeholder="Enter your brand description..."
/>
```

#### Select Dropdown
```html
<select className="w-full p-4 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-100 backdrop-blur-sm">
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
</select>
```

#### Radio Button Group
```html
<div className="grid grid-cols-2 gap-3">
  <label className="flex items-center p-4 border-2 border-primary-700 rounded-2xl cursor-pointer transition-all hover:border-accent-400/50 hover:bg-accent-500/5 peer-checked:border-accent-500 peer-checked:bg-accent-500/10">
    <input type="radio" name="group" className="sr-only peer" />
    <span className="text-primary-100 font-medium">Option 1</span>
  </label>
</div>
```

---

## 📱 Responsive Design System

### Breakpoint System
```css
/* Mobile First Approach */
/* xs: 0px - default, no prefix needed */
/* sm: 640px and up */
@media (min-width: 640px) { /* sm: */ }

/* md: 768px and up */
@media (min-width: 768px) { /* md: */ }

/* lg: 1024px and up */
@media (min-width: 1024px) { /* lg: */ }

/* xl: 1280px and up */
@media (min-width: 1280px) { /* xl: */ }

/* 2xl: 1536px and up */
@media (min-width: 1536px) { /* 2xl: */ }
```

### Responsive Typography
```html
<!-- Mobile: text-4xl, Desktop: text-6xl -->
<h1 className="text-4xl lg:text-6xl font-black">Responsive Headline</h1>

<!-- Mobile: text-base, Desktop: text-lg -->
<p className="text-base lg:text-lg text-primary-300">Responsive body text</p>
```

### Responsive Layout
```html
<!-- Mobile: single column, Desktop: 3 columns -->
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Mobile: stack vertically, Desktop: side by side -->
<div className="flex flex-col lg:flex-row gap-6">
  <div className="lg:w-2/3">Main content</div>
  <div className="lg:w-1/3">Sidebar</div>
</div>
```

### Touch Target Optimization
```css
/* Minimum touch target size for mobile */
.touch-target {
  min-height: 44px;  /* iOS recommendation */
  min-width: 44px;
  padding: 0.5rem;
}

/* Button touch optimization */
.btn-touch {
  padding: 0.75rem 1.5rem;
  margin: 0.25rem;
}
```

---

## ✨ Animation System

### Framer Motion Variants

#### Page Transitions
```typescript
const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.4 }
  }
}
```

#### Card Animations
```typescript
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
```

#### Button Interactions
```typescript
const buttonVariants = {
  tap: { scale: 0.95 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}
```

### CSS Animations

#### Loading States
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### Floating Elements
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

---

## 🎯 Interactive States

### Button States
```css
/* Default State */
.btn-primary {
  background: var(--accent-500);
  color: var(--primary-950);
  transition: all 0.2s ease;
}

/* Hover State */
.btn-primary:hover {
  background: var(--accent-600);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
}

/* Active State */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
}

/* Disabled State */
.btn-primary:disabled {
  background: var(--primary-600);
  color: var(--primary-400);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading State */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Card States
```css
/* Default Card */
.card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* Hover Card */
.card:hover {
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

/* Selected Card */
.card.selected {
  border-color: var(--accent-500);
  background: rgba(251, 191, 36, 0.05);
}
```

---

## 📐 Spacing & Layout

### Spacing Scale
```css
/* Tailwind spacing scale (in rem) */
.space-1 { margin/padding: 0.25rem; }   /* 4px */
.space-2 { margin/padding: 0.5rem; }    /* 8px */
.space-3 { margin/padding: 0.75rem; }   /* 12px */
.space-4 { margin/padding: 1rem; }      /* 16px */
.space-6 { margin/padding: 1.5rem; }    /* 24px */
.space-8 { margin/padding: 2rem; }      /* 32px */
.space-12 { margin/padding: 3rem; }     /* 48px */
.space-16 { margin/padding: 4rem; }     /* 64px */
.space-20 { margin/padding: 5rem; }     /* 80px */
```

### Layout Patterns

#### Container Widths
```css
.container {
  width: 100%;
  max-width: 1280px;  /* xl breakpoint */
  margin: 0 auto;
  padding: 0 1rem;    /* Mobile padding */
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }  /* sm: 24px */
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }    /* lg: 32px */
}
```

#### Section Spacing
```css
/* Vertical rhythm for sections */
.section {
  padding-top: 4rem;     /* 64px */
  padding-bottom: 4rem;  /* 64px */
}

@media (min-width: 1024px) {
  .section {
    padding-top: 6rem;     /* 96px */
    padding-bottom: 6rem;  /* 96px */
  }
}
```

---

## 🖨️ Print Styles

### Print-Optimized CSS
```css
@media print {
  /* Hide interactive elements */
  .print\\:hidden {
    display: none !important;
  }
  
  /* Convert colors for print */
  .print\\:text-black {
    color: #000 !important;
  }
  
  .print\\:border-gray-300 {
    border-color: #d1d5db !important;
  }
  
  /* Page break controls */
  .print\\:break-inside-avoid {
    break-inside: avoid;
  }
  
  .print\\:break-before-page {
    break-before: page;
  }
  
  /* Remove shadows and effects */
  .print\\:shadow-none {
    box-shadow: none !important;
  }
  
  /* Optimize backgrounds */
  .print\\:bg-white {
    background-color: #fff !important;
  }
}
```

### Print Layout
```html
<!-- Print-optimized report section -->
<div className="print:break-inside-avoid">
  <h2 className="text-2xl font-bold text-primary-50 print:text-black mb-4">
    Section Title
  </h2>
  <div className="glass-card print:border print:border-gray-300 print:shadow-none">
    <p className="text-primary-300 print:text-gray-700">
      Content optimized for both screen and print.
    </p>
  </div>
</div>
```

---

## ♿ Accessibility Guidelines

### Color Contrast
All text maintains WCAG AA compliance:
- **Primary 50 on Primary 950**: 19.8:1 ratio
- **Primary 100 on Primary 900**: 15.6:1 ratio  
- **Accent 400 on Primary 950**: 8.2:1 ratio

### Focus States
```css
.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring-2:focus-visible {
  box-shadow: 0 0 0 2px var(--accent-500);
}

/* Custom focus ring for glass elements */
.glass-focus:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-500), 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

### Screen Reader Support
```html
<!-- Semantic HTML structure -->
<main role="main" aria-label="Main content">
  <section aria-labelledby="results-heading">
    <h2 id="results-heading">Your Segment Results</h2>
    <!-- Content -->
  </section>
</main>

<!-- Form accessibility -->
<label htmlFor="brand-description" className="sr-only">
  Describe your brand
</label>
<input 
  id="brand-description"
  aria-describedby="brand-help"
  required
/>
<div id="brand-help" className="text-sm text-primary-400">
  Minimum 10 characters required
</div>
```

### Keyboard Navigation
```css
/* Skip link for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--accent-500);
  color: var(--primary-950);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

---

## 🎨 Icon System

### Icon Libraries Used
- **Lucide React**: Primary icon library for UI elements
- **React Icons**: Extended icon collection
- **Phosphor Icons**: Professional iconography

### Icon Usage Guidelines
```html
<!-- Standard icon size (20px) -->
<Icon className="w-5 h-5 text-accent-400" />

<!-- Small icon (16px) -->
<Icon className="w-4 h-4 text-primary-400" />

<!-- Large icon (24px) -->
<Icon className="w-6 h-6 text-primary-200" />

<!-- Icon with text -->
<div className="flex items-center space-x-2">
  <Icon className="w-5 h-5 text-accent-400" />
  <span className="text-primary-100">Icon label</span>
</div>
```

### Icon Color Guidelines
- **Primary icons**: `text-primary-200` for main UI elements
- **Accent icons**: `text-accent-400` for interactive elements  
- **Muted icons**: `text-primary-400` for secondary elements
- **Success icons**: `text-success-400` for positive states
- **Brand icons**: `text-brand-400` for brand-related elements

---

This design system ensures consistency, accessibility, and premium feel across the entire LaunchLens application. All components follow these guidelines to maintain visual harmony and optimal user experience.