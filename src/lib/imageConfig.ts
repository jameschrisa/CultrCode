// Image configuration for LaunchLens
// Using simple PNG filenames - just drop your images in /public/images/

export const imageConfig = {
  // Hero section images
  hero: {
    main: {
      url: "/images/hero.png",
      alt: "Professional woman working on laptop with confidence",
      photographer: "Your Photographer",
      source: "Local"
    },
    secondary: {
      url: "/images/hero.png",
      alt: "Creative entrepreneur planning brand strategy",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // Testimonial images - diverse representation
  testimonials: {
    sarah: {
      url: "/images/sarah.png",
      alt: "Sarah Chen, Founder of Glow Naturals",
      photographer: "Your Photographer",
      source: "Local"
    },
    marcus: {
      url: "/images/marcus.png",
      alt: "Marcus Rodriguez, Creator of FitLife App",
      photographer: "Your Photographer",
      source: "Local"
    },
    emma: {
      url: "/images/emma.png",
      alt: "Emma Johnson, CEO of Sustainable Style",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // How it works section
  howItWorks: {
    planning: {
      url: "/images/planning.png",
      alt: "Team planning brand strategy with data",
      photographer: "Your Photographer",
      source: "Local"
    },
    analysis: {
      url: "/images/analysis.png",
      alt: "Data analysis and AI processing visualization",
      photographer: "Your Photographer",
      source: "Local"
    },
    success: {
      url: "/images/success.png",
      alt: "Successful product launch celebration",
      photographer: "Your Photographer",
      source: "Local"
    }
  },

  // Success stories and case studies
  creators: {
    beauty: {
      url: "https://picsum.photos/600/500?random=30",
      alt: "Beauty creator with skincare products",
      photographer: "Lorem Picsum",
      source: "Placeholder"
    },
    fitness: {
      url: "https://picsum.photos/600/500?random=31",
      alt: "Fitness creator with workout equipment",
      photographer: "Lorem Picsum",
      source: "Placeholder"
    },
    tech: {
      url: "https://picsum.photos/600/500?random=32",
      alt: "Tech creator working on app development",
      photographer: "Lorem Picsum",
      source: "Placeholder"
    }
  },

  // Team or about section (for future use)
  team: {
    ai_researcher: {
      url: "https://picsum.photos/400/400?random=40",
      alt: "AI researcher and data scientist",
      photographer: "Lorem Picsum",
      source: "Placeholder"
    },
    gis_specialist: {
      url: "https://picsum.photos/400/400?random=41",
      alt: "GIS specialist analyzing geographic data",
      photographer: "Lorem Picsum",
      source: "Placeholder"
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
  "Photos by Unsplash contributors: Christina @ wocintechchat.com, Michael Dam, Joseph Gonzalez, Christopher Campbell, Dylan Gillis, Campaign Creators, Alexis Brown, Jeremiah Lawrence, Danielle Cerullo, Linkedin Sales Solutions, Bethany Legg",
  "Additional photos from Pexels contributors (when applicable)",
  "All images used under respective Creative Commons or platform licenses"
]