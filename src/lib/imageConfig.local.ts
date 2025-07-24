// Example: Local image configuration for LaunchLens
// Copy this to imageConfig.ts if you want to use local images instead of Unsplash

export const imageConfig = {
  // Hero section images
  hero: {
    main: {
      url: "/images/hero/professional-woman-laptop.jpg", // Place your image here
      alt: "Professional woman working on laptop with confidence",
      photographer: "Your Photographer", // Update attribution
      source: "Local"
    },
    secondary: {
      url: "/images/hero/entrepreneur-planning.jpg",
      alt: "Creative entrepreneur planning brand strategy",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // Testimonial images - diverse representation
  testimonials: {
    sarah: {
      url: "/images/testimonials/sarah-chen.jpg", // Place your image here
      alt: "Sarah Chen, Founder of Glow Naturals",
      photographer: "Your Photographer",
      source: "Local"
    },
    marcus: {
      url: "/images/testimonials/marcus-rodriguez.jpg",
      alt: "Marcus Rodriguez, Creator of FitLife App", 
      photographer: "Your Photographer",
      source: "Local"
    },
    emma: {
      url: "/images/testimonials/emma-johnson.jpg",
      alt: "Emma Johnson, CEO of Sustainable Style",
      photographer: "Your Photographer", 
      source: "Local"
    }
  },

  // How it works section
  howItWorks: {
    planning: {
      url: "/images/how-it-works/team-planning.jpg",
      alt: "Team planning brand strategy with data",
      photographer: "Your Photographer",
      source: "Local"
    },
    analysis: {
      url: "/images/how-it-works/data-analysis.jpg", 
      alt: "Data analysis and AI processing visualization",
      photographer: "Your Photographer",
      source: "Local"
    },
    success: {
      url: "/images/how-it-works/success-celebration.jpg",
      alt: "Successful product launch celebration",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // Success stories and case studies
  creators: {
    beauty: {
      url: "/images/creators/beauty-creator.jpg",
      alt: "Beauty creator with skincare products",
      photographer: "Your Photographer",
      source: "Local"
    },
    fitness: {
      url: "/images/creators/fitness-creator.jpg",
      alt: "Fitness creator with workout equipment", 
      photographer: "Your Photographer",
      source: "Local"
    },
    tech: {
      url: "/images/creators/tech-creator.jpg",
      alt: "Tech creator working on app development",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // Team or about section (for future use)
  team: {
    ai_researcher: {
      url: "/images/team/ai-researcher.jpg",
      alt: "AI researcher and data scientist",
      photographer: "Your Photographer",
      source: "Local"
    },
    gis_specialist: {
      url: "/images/team/gis-specialist.jpg",
      alt: "GIS specialist analyzing geographic data",
      photographer: "Your Photographer", 
      source: "Local"
    }
  }
}

// Helper function to get image with proper attribution
export function getImageWithAttribution(imageKey: string) {
  const keys = imageKey.split('.')
  let image = imageConfig as any
  
  for (const key of keys) {
    image = image[key]
  }
  
  return image
}

// Attribution text for footer or about page
export const imageAttributions = [
  "Photos provided by local photography team",
  "All images used with proper licensing and permissions",
  "Contact us for image usage rights and attribution"
]