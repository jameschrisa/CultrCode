import { Variants, Transition } from 'framer-motion'

// Common easing functions optimized for mobile
export const easing = {
  smooth: [0.16, 1, 0.3, 1] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
}

// Optimized transitions for mobile performance
export const transitions: Record<string, Transition> = {
  smooth: {
    duration: 0.4,
    ease: easing.smooth,
  },
  snappy: {
    duration: 0.3,
    ease: easing.snappy,
  },
  slow: {
    duration: 0.6,
    ease: easing.smooth,
  },
  spring: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
  springBounce: {
    type: 'spring',
    damping: 15,
    stiffness: 400,
  },
}

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: transitions.snappy,
  },
}

// Hero section animations
export const heroVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.smooth,
    },
  },
}

// Glass card animation variants
export const glassCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...transitions.smooth,
      delay: 0.1,
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: transitions.spring,
  },
  tap: {
    scale: 0.98,
    transition: transitions.snappy,
  },
}

// Staggered container for lists
export const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Individual list item variants
export const itemVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
}

// Button animation variants
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: transitions.spring,
  },
  tap: {
    scale: 0.95,
    transition: transitions.snappy,
  },
}

// Icon animation variants
export const iconVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 5,
    scale: 1.1,
    transition: transitions.spring,
  },
  tap: {
    rotate: -5,
    scale: 0.9,
    transition: transitions.snappy,
  },
}

// Fade in from different directions
export const fadeInVariants = {
  fromLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: transitions.smooth },
  },
  fromRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: transitions.smooth },
  },
  fromTop: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: transitions.smooth },
  },
  fromBottom: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: transitions.smooth },
  },
}

// Floating animation for background elements
export const floatingVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  animate: {
    y: [-8, 8, -8],
    rotate: [-2, 2, -2],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      rotate: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
}

// Shimmer effect for loading states
export const shimmerVariants: Variants = {
  initial: {
    backgroundPosition: '-200% 0',
  },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Modal/overlay animations
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.spring,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: transitions.snappy,
  },
}

// Mobile-optimized gesture animations
export const gestureVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  swipeRight: {
    x: 100,
    opacity: 0,
    transition: transitions.snappy,
  },
  swipeLeft: {
    x: -100,
    opacity: 0,
    transition: transitions.snappy,
  },
  tap: {
    scale: 0.95,
    transition: transitions.snappy,
  },
}

// Reveal animation for text/content
export const revealVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transitions.smooth,
      delay: custom * 0.1,
    },
  }),
}

// Glass morphism specific animations
export const glassMorphismVariants: Variants = {
  initial: {
    backdropFilter: 'blur(0px)',
    background: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  animate: {
    backdropFilter: 'blur(20px)',
    background: 'rgba(255, 255, 255, 0.03)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
  hover: {
    backdropFilter: 'blur(25px)',
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    transition: transitions.smooth,
  },
}

// Viewport-based animations (for useInView)
export const viewportVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
}

// Mobile performance optimizations
export const reduceMotionVariants = (variants: Variants): Variants => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return Object.keys(variants).reduce((acc, key) => {
      acc[key] = {
        ...variants[key],
        transition: { duration: 0.01 },
      }
      return acc
    }, {} as Variants)
  }
  return variants
}

// Utility function to create staggered animations
export const createStaggeredVariants = (
  baseVariants: Variants,
  staggerDelay: number = 0.1
): { container: Variants; item: Variants } => ({
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  },
  item: baseVariants,
})

// Performance-optimized layout animations
export const layoutVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
}

// CTA button animations
export const ctaButtonVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 20px 50px rgba(124, 58, 237, 0.3)',
    transition: transitions.spring,
  },
  tap: {
    scale: 0.95,
    transition: transitions.snappy,
  },
}

// Feature card animations
export const featureCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: transitions.spring,
  },
}

// Testimonial animations
export const testimonialVariants: Variants = {
  initial: {
    opacity: 0,
    x: -30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions.smooth,
  },
  hover: {
    scale: 1.02,
    x: 5,
    transition: transitions.spring,
  },
}

// Stats counter animations
export const statsVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
}

// Background orb animations
export const orbVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0.5,
  },
  animate: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.5, 0.8, 0.5],
    x: [-10, 10, -10],
    y: [-15, 15, -15],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Glass morphism enhanced animations
export const glassVariants: Variants = {
  initial: {
    backdropFilter: 'blur(0px)',
    background: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(255, 255, 255, 0)',
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    backdropFilter: 'blur(20px)',
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
  hover: {
    backdropFilter: 'blur(25px)',
    background: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
    scale: 1.02,
    transition: transitions.spring,
  },
}

// Problem/solution section animations
export const problemSolutionVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
}

// Benefits list animations
export const benefitVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions.smooth,
  },
  hover: {
    x: 5,
    scale: 1.02,
    transition: transitions.spring,
  },
}

// How it works step animations
export const stepVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smooth,
  },
  hover: {
    y: -5,
    scale: 1.05,
    transition: transitions.spring,
  },
}

// Navigation animations
export const navVariants: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transitions.smooth,
  },
}

// Scroll-triggered animations
export const scrollVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
}

// Performance optimized viewport animations
export const viewportConfig = {
  once: true,
  margin: '-100px',
  amount: 0.3,
}