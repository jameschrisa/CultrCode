import { PersonaData } from '@/types/personas'

export interface MidjourneyOptions {
  quality?: 'low' | 'medium' | 'high'
  stylize?: number // 0-1000, controls artistic interpretation
  version?: '6.1' | '7' // Midjourney version
  aspectRatio?: '1:1' | '16:9' | '9:16' | '4:3'
  chaos?: number // 0-100, controls variety
  model?: 'standard' | 'raw' // Processing style
}

export interface MidjourneyResult {
  url: string
  prompt: string
  taskId: string
  metadata: {
    generatedAt: string
    service: string
    cost?: number
    processingTime?: number
  }
}

// Configuration for different third-party services
interface ServiceConfig {
  name: string
  apiUrl: string
  headers: Record<string, string>
}

class MidjourneyGenerator {
  private service: ServiceConfig
  private apiKey: string

  constructor(serviceProvider: 'imagine' | 'piapi' | 'userapi' = 'imagine', apiKey?: string) {
    this.apiKey = apiKey || process.env.NEXT_PUBLIC_MIDJOURNEY_API_KEY || ''
    
    // Configure service endpoints
    switch (serviceProvider) {
      case 'imagine':
        this.service = {
          name: 'ImagineAPI',
          apiUrl: 'https://api.imagineapi.dev/items/images/',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
        break
      case 'piapi':
        this.service = {
          name: 'PiAPI',
          apiUrl: 'https://api.piapi.ai/mj/v2/generate',
          headers: {
            'X-API-Key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
        break
      case 'userapi':
        this.service = {
          name: 'UserAPI',
          apiUrl: 'https://api.userapi.ai/midjourney/v1/imagine',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
        break
    }
  }

  /**
   * Generate a Midjourney-style prompt optimized for photorealistic portraits
   */
  private generateMidjourneyPrompt(personaData: PersonaData, options: MidjourneyOptions): string {
    const { generatedInsights, psychographics } = personaData
    
    // Base prompt for professional portrait
    let prompt = "professional headshot portrait, "
    
    // Add demographic information
    if (generatedInsights.demographics?.ageRange) {
      const avgAge = this.extractAverageAge(generatedInsights.demographics.ageRange)
      prompt += `${avgAge} years old, `
    }
    
    // Add personality-based styling
    if (generatedInsights.personality) {
      if (generatedInsights.personality.includes('Professional') || generatedInsights.personality.includes('Goal-oriented')) {
        prompt += "business professional, confident expression, corporate attire, "
      }
      if (generatedInsights.personality.includes('Creative') || generatedInsights.personality.includes('Artistic')) {
        prompt += "creative professional, artistic styling, expressive eyes, "
      }
      if (generatedInsights.personality.includes('Adventurous')) {
        prompt += "adventurous spirit, dynamic expression, outdoor lifestyle, "
      }
    }
    
    // Add psychographic-based styling
    if (psychographics) {
      if (psychographics.luxuryAffinity >= 4) {
        prompt += "luxury fashion, high-end accessories, premium styling, "
      }
      if (psychographics.sustainabilityImportance >= 4) {
        prompt += "sustainable fashion, natural materials, eco-conscious styling, "
      }
      if (psychographics.innovationAdoption >= 4) {
        prompt += "modern tech aesthetic, contemporary styling, forward-thinking, "
      }
    }
    
    // Add values-based appearance
    if (generatedInsights.values) {
      if (generatedInsights.values.includes('Environmental responsibility')) {
        prompt += "natural organic look, earth tones, "
      }
      if (generatedInsights.values.includes('Premium quality')) {
        prompt += "sophisticated refined appearance, "
      }
      if (generatedInsights.values.includes('Authenticity')) {
        prompt += "genuine authentic expression, natural beauty, "
      }
    }
    
    // Midjourney-specific technical parameters
    prompt += "studio lighting, professional photography, clean background, sharp focus, "
    prompt += "photorealistic, highly detailed, 8k resolution, commercial quality"
    
    // Add Midjourney parameters
    const mjParams = []
    
    if (options.aspectRatio && options.aspectRatio !== '1:1') {
      mjParams.push(`--ar ${options.aspectRatio}`)
    }
    
    if (options.stylize && options.stylize !== 100) {
      mjParams.push(`--stylize ${options.stylize}`)
    }
    
    if (options.chaos && options.chaos > 0) {
      mjParams.push(`--chaos ${options.chaos}`)
    }
    
    if (options.version) {
      mjParams.push(`--v ${options.version}`)
    }
    
    if (options.model === 'raw') {
      mjParams.push(`--style raw`)
    }
    
    // Add parameters to prompt
    if (mjParams.length > 0) {
      prompt += ' ' + mjParams.join(' ')
    }
    
    return prompt
  }
  
  /**
   * Extract average age from age range
   */
  private extractAverageAge(ageRange: string): number {
    const match = ageRange.match(/(\d+)-(\d+)/)
    if (match) {
      const min = parseInt(match[1])
      const max = parseInt(match[2])
      return Math.round((min + max) / 2)
    }
    return 30
  }
  
  /**
   * Generate profile picture using Midjourney via third-party API
   */
  async generateProfilePicture(
    personaData: PersonaData,
    options: MidjourneyOptions = {
      quality: 'high',
      stylize: 150,
      version: '6.1',
      aspectRatio: '1:1',
      chaos: 10,
      model: 'standard'
    }
  ): Promise<MidjourneyResult> {
    if (!this.apiKey) {
      throw new Error(`${this.service.name} API key is required`)
    }
    
    const prompt = this.generateMidjourneyPrompt(personaData, options)
    const startTime = Date.now()
    
    try {
      // Generic API call structure (adapt based on chosen service)
      const requestBody = this.buildRequestBody(prompt, options)
      
      const response = await fetch(this.service.apiUrl, {
        method: 'POST',
        headers: this.service.headers,
        body: JSON.stringify(requestBody)
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`${this.service.name} API error: ${response.status} - ${errorData.message || 'Unknown error'}`)
      }
      
      const data = await response.json()
      
      // Poll for completion if needed (some services require polling)
      const finalResult = await this.pollForCompletion(data.taskId || data.id)
      
      const processingTime = Date.now() - startTime
      
      return {
        url: finalResult.imageUrl || finalResult.url,
        prompt: prompt,
        taskId: finalResult.taskId || finalResult.id,
        metadata: {
          generatedAt: new Date().toISOString(),
          service: this.service.name,
          processingTime,
          cost: this.estimateCost(options)
        }
      }
      
    } catch (error) {
      console.error(`${this.service.name} generation error:`, error)
      throw new Error(`Failed to generate Midjourney image: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }
  
  /**
   * Build request body based on service provider
   */
  private buildRequestBody(prompt: string, options: MidjourneyOptions): any {
    // Adapt this based on your chosen service's API format
    switch (this.service.name) {
      case 'ImagineAPI':
        return {
          prompt: prompt,
          width: 1024,
          height: 1024,
          model: 'midjourney'
        }
      case 'PiAPI':
        return {
          prompt: prompt,
          aspect_ratio: options.aspectRatio || '1:1',
          model: options.version || '6.1'
        }
      case 'UserAPI':
        return {
          prompt: prompt,
          aspect_ratio: options.aspectRatio || '1:1',
          version: options.version || '6.1',
          quality: options.quality || 'high'
        }
      default:
        return { prompt }
    }
  }
  
  /**
   * Poll for task completion (required for some services)
   */
  private async pollForCompletion(taskId: string, maxAttempts: number = 30): Promise<any> {
    let attempts = 0
    
    while (attempts < maxAttempts) {
      try {
        const response = await fetch(`${this.service.apiUrl}/${taskId}`, {
          headers: this.service.headers
        })
        
        if (response.ok) {
          const data = await response.json()
          
          if (data.status === 'completed' || data.status === 'success') {
            return data
          } else if (data.status === 'failed' || data.status === 'error') {
            throw new Error(`Generation failed: ${data.error || 'Unknown error'}`)
          }
        }
        
        // Wait 2 seconds before next poll
        await new Promise(resolve => setTimeout(resolve, 2000))
        attempts++
        
      } catch (error) {
        console.error('Polling error:', error)
        attempts++
      }
    }
    
    throw new Error('Generation timeout - please try again')
  }
  
  /**
   * Estimate cost based on service and options
   */
  private estimateCost(options: MidjourneyOptions): number {
    // Rough estimates - adjust based on actual service pricing
    switch (this.service.name) {
      case 'ImagineAPI':
        return options.quality === 'high' ? 0.08 : 0.04
      case 'PiAPI':
        return 0.06
      case 'UserAPI':
        return 0.05
      default:
        return 0.05
    }
  }
  
  /**
   * Generate multiple variations
   */
  async generateVariations(
    personaData: PersonaData,
    count: number = 3,
    options: Partial<MidjourneyOptions> = {}
  ): Promise<MidjourneyResult[]> {
    const baseOptions: MidjourneyOptions = {
      quality: 'high',
      stylize: 150,
      version: '6.1',
      aspectRatio: '1:1',
      model: 'standard',
      ...options
    }
    
    const promises = []
    for (let i = 0; i < count; i++) {
      // Add slight chaos variation for each image
      const variationOptions = {
        ...baseOptions,
        chaos: (baseOptions.chaos || 10) + (i * 5)
      }
      promises.push(this.generateProfilePicture(personaData, variationOptions))
    }
    
    return Promise.all(promises)
  }
  
  /**
   * Check service status
   */
  async checkServiceStatus(): Promise<{ available: boolean; message: string }> {
    try {
      const response = await fetch(`${this.service.apiUrl}/status`, {
        headers: this.service.headers
      })
      
      return {
        available: response.ok,
        message: response.ok ? `${this.service.name} is available` : `${this.service.name} is unavailable`
      }
    } catch {
      return {
        available: false,
        message: `Cannot reach ${this.service.name}`
      }
    }
  }
}

export default MidjourneyGenerator