import { PersonaData } from '@/types/personas'

export interface ProfilePictureOptions {
  size: '400x400' | '512x512' | '1024x1024'
  quality: 'standard' | 'hd'
  style: 'photorealistic' | 'professional' | 'casual'
  demographics?: {
    age?: string
    gender?: string
    ethnicity?: string
    location?: string
  }
}

export interface GeneratedProfilePicture {
  url: string
  prompt: string
  metadata: {
    generatedAt: string
    model: string
    cost: number
  }
}

class ProfilePictureGenerator {
  private openaiApiKey: string
  
  constructor(apiKey?: string) {
    this.openaiApiKey = apiKey || process.env.OPENAI_API_KEY || ''
  }

  /**
   * Generate a detailed prompt for a photorealistic profile picture based on persona data
   */
  private generatePrompt(personaData: PersonaData, options: ProfilePictureOptions): string {
    const { generatedInsights, psychographics } = personaData
    
    // Base prompt for photorealistic portrait
    let prompt = "Professional headshot portrait of a person, "
    
    // Add demographic information if available
    if (options.demographics?.age) {
      prompt += `${options.demographics.age} years old, `
    } else if (generatedInsights.demographics?.ageRange) {
      const ageRange = generatedInsights.demographics.ageRange
      const avgAge = this.extractAverageAge(ageRange)
      prompt += `${avgAge} years old, `
    }
    
    if (options.demographics?.gender) {
      prompt += `${options.demographics.gender}, `
    }
    
    if (options.demographics?.ethnicity) {
      prompt += `${options.demographics.ethnicity} ethnicity, `
    }
    
    // Add personality-based visual cues
    if (generatedInsights.personality) {
      if (generatedInsights.personality.includes('Professional') || generatedInsights.personality.includes('Goal-oriented')) {
        prompt += "confident and professional demeanor, business attire, "
      }
      if (generatedInsights.personality.includes('Creative') || generatedInsights.personality.includes('Artistic')) {
        prompt += "creative and expressive appearance, stylish clothing, "
      }
      if (generatedInsights.personality.includes('Adventurous')) {
        prompt += "energetic and optimistic expression, "
      }
      if (generatedInsights.personality.includes('Thoughtful') || generatedInsights.personality.includes('Analytical')) {
        prompt += "intelligent and contemplative expression, glasses optional, "
      }
    }
    
    // Add psychographic-based styling
    if (psychographics) {
      if (psychographics.luxuryAffinity >= 4) {
        prompt += "high-end fashion, luxury accessories, polished appearance, "
      }
      if (psychographics.sustainabilityImportance >= 4) {
        prompt += "natural and organic styling, eco-friendly fashion choices, "
      }
      if (psychographics.innovationAdoption >= 4) {
        prompt += "modern and tech-forward appearance, contemporary styling, "
      }
    }
    
    // Add values-based appearance cues
    if (generatedInsights.values) {
      if (generatedInsights.values.includes('Environmental responsibility')) {
        prompt += "natural and sustainable fashion choices, "
      }
      if (generatedInsights.values.includes('Premium quality')) {
        prompt += "sophisticated and refined appearance, "
      }
      if (generatedInsights.values.includes('Authenticity')) {
        prompt += "genuine and authentic expression, natural styling, "
      }
    }
    
    // Style-specific adjustments
    switch (options.style) {
      case 'professional':
        prompt += "professional business attire, corporate headshot style, clean background, excellent lighting, "
        break
      case 'casual':
        prompt += "casual clothing, relaxed and approachable expression, neutral background, "
        break
      case 'photorealistic':
      default:
        prompt += "realistic lighting and shadows, detailed facial features, "
        break
    }
    
    // Technical specifications for best results
    prompt += "high resolution, professional photography, perfect focus, studio lighting, clean composition, centered framing, looking directly at camera, friendly but professional expression, photorealistic, 8K quality"
    
    return prompt
  }
  
  /**
   * Extract average age from age range string (e.g., "25-35" -> 30)
   */
  private extractAverageAge(ageRange: string): number {
    const match = ageRange.match(/(\d+)-(\d+)/)
    if (match) {
      const min = parseInt(match[1])
      const max = parseInt(match[2])
      return Math.round((min + max) / 2)
    }
    return 30 // Default fallback
  }
  
  /**
   * Generate a photorealistic profile picture using DALL-E 3
   */
  async generateProfilePicture(
    personaData: PersonaData, 
    options: ProfilePictureOptions = {
      size: '1024x1024',
      quality: 'standard',
      style: 'photorealistic'
    }
  ): Promise<GeneratedProfilePicture> {
    if (!this.openaiApiKey) {
      throw new Error('OpenAI API key is required for profile picture generation')
    }
    
    const prompt = this.generatePrompt(personaData, options)
    
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: prompt,
          size: options.size,
          quality: options.quality,
          style: 'vivid', // Use vivid for more realistic results
          n: 1,
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`DALL-E API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
      }
      
      const data = await response.json()
      const imageUrl = data.data[0].url
      
      // Calculate cost based on size and quality
      const cost = this.calculateCost(options.size, options.quality)
      
      return {
        url: imageUrl,
        prompt: prompt,
        metadata: {
          generatedAt: new Date().toISOString(),
          model: 'dall-e-3',
          cost: cost
        }
      }
      
    } catch (error) {
      console.error('Error generating profile picture:', error)
      throw new Error(`Failed to generate profile picture: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }
  
  /**
   * Calculate the cost of generating an image based on DALL-E 3 pricing
   */
  private calculateCost(size: string, quality: string): number {
    const baseCosts = {
      '400x400': 0.04,
      '512x512': 0.04,
      '1024x1024': 0.04,
      '1024x1792': 0.08,
      '1792x1024': 0.08
    }
    
    const baseCost = baseCosts[size as keyof typeof baseCosts] || 0.04
    return quality === 'hd' ? baseCost * 2 : baseCost
  }
  
  /**
   * Generate multiple profile picture variations
   */
  async generateVariations(
    personaData: PersonaData,
    count: number = 3,
    options: Partial<ProfilePictureOptions> = {}
  ): Promise<GeneratedProfilePicture[]> {
    const defaultOptions: ProfilePictureOptions = {
      size: '1024x1024',
      quality: 'standard',
      style: 'photorealistic',
      ...options
    }
    
    const promises = []
    for (let i = 0; i < count; i++) {
      // Add slight variations to the demographics for diversity
      const variationOptions = {
        ...defaultOptions,
        demographics: {
          ...defaultOptions.demographics,
          // You could add logic here to vary demographics slightly
        }
      }
      promises.push(this.generateProfilePicture(personaData, variationOptions))
    }
    
    return Promise.all(promises)
  }
}

export default ProfilePictureGenerator