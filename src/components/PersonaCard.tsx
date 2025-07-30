'use client'

import { useState, useEffect } from 'react'
import { User, RefreshCw, Download, Sparkles, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/HeroButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/HeroCard'
import ProfilePictureGenerator, { ProfilePictureOptions } from '@/lib/profilePictureGenerator'
import MidjourneyGenerator, { MidjourneyOptions } from '@/lib/midjourneyGenerator'
import ImageProcessor from '@/lib/imageProcessor'
import { PersonaData } from '@/types/personas'

interface PersonaCardProps {
  persona: PersonaData
  showGenerateButton?: boolean
  onImageGenerated?: (imageUrl: string) => void
  className?: string
  preferredService?: 'dalle' | 'midjourney'
}

export default function PersonaCard({ 
  persona, 
  showGenerateButton = true, 
  onImageGenerated,
  className = '',
  preferredService = 'midjourney' 
}: PersonaCardProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null)
  const [imageError, setImageError] = useState<string | null>(null)
  const [processingImage, setProcessingImage] = useState(false)

  const profileGenerator = new ProfilePictureGenerator()
  const midjourneyGenerator = new MidjourneyGenerator('imagine') // or 'piapi', 'userapi'
  const imageProcessor = new ImageProcessor()

  // Initialize with existing profile picture if available
  useEffect(() => {
    if (persona.profilePicture?.url) {
      setProfileImageUrl(persona.profilePicture.url)
    }
  }, [persona.profilePicture])

  /**
   * Generate a new profile picture for the persona
   */
  const handleGenerateProfilePicture = async () => {
    const requiredKey = preferredService === 'dalle' 
      ? process.env.NEXT_PUBLIC_OPENAI_API_KEY 
      : process.env.NEXT_PUBLIC_MIDJOURNEY_API_KEY

    if (!requiredKey) {
      setImageError(`${preferredService.toUpperCase()} API key not configured`)
      return
    }

    setIsGenerating(true)
    setImageError(null)

    try {
      let generatedImage: { url: string; prompt: string; metadata: any }

      if (preferredService === 'midjourney') {
        // Generate with Midjourney
        const options: MidjourneyOptions = {
          quality: 'high',
          stylize: 200, // Higher stylization for more artistic results
          version: '6.1',
          aspectRatio: '1:1',
          chaos: 15, // Slight variation
          model: 'standard'
        }

        const mjResult = await midjourneyGenerator.generateProfilePicture(persona, options)
        generatedImage = {
          url: mjResult.url,
          prompt: mjResult.prompt,
          metadata: mjResult.metadata
        }
      } else {
        // Generate with DALL-E
        const options: ProfilePictureOptions = {
          size: '1024x1024',
          quality: 'standard',
          style: 'photorealistic',
          demographics: {
            age: extractAgeFromRange(persona.generatedInsights.demographics.ageRange),
          }
        }

        generatedImage = await profileGenerator.generateProfilePicture(persona, options)
      }
      
      // Process the image (resize and apply rounded mask)
      setProcessingImage(true)
      const processedImage = await imageProcessor.processProfilePicture(generatedImage.url, {
        size: 400,
        borderRadius: 50, // Full circle
        quality: 0.9,
        format: 'jpeg',
        backgroundColor: '#f3f4f6'
      })

      // Use the processed image
      setProfileImageUrl(processedImage.dataUrl)
      
      // Cache the original URL for potential reprocessing
      if (onImageGenerated) {
        onImageGenerated(processedImage.dataUrl)
      }

      // Update persona data with the new profile picture
      persona.profilePicture = {
        url: processedImage.dataUrl,
        prompt: generatedImage.prompt,
        generatedAt: generatedImage.metadata.generatedAt,
        cached: true
      }

    } catch (error) {
      console.error(`Error generating profile picture with ${preferredService}:`, error)
      setImageError(error instanceof Error ? error.message : 'Failed to generate profile picture')
    } finally {
      setIsGenerating(false)
      setProcessingImage(false)
    }
  }

  /**
   * Extract a single age from age range for API prompt
   */
  const extractAgeFromRange = (ageRange: string): string => {
    const match = ageRange.match(/(\d+)-(\d+)/)
    if (match) {
      const min = parseInt(match[1])
      const max = parseInt(match[2])
      const avg = Math.round((min + max) / 2)
      return avg.toString()
    }
    return '30' // Default fallback
  }

  /**
   * Generate placeholder initials from persona name
   */
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
  }

  /**
   * Download the profile picture
   */
  const handleDownloadImage = () => {
    if (!profileImageUrl) return

    const link = document.createElement('a')
    link.href = profileImageUrl
    link.download = `${persona.name.replace(/\s+/g, '_')}_profile.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className={`glass-card ${className}`}>
      <CardHeader>
        <div className="flex items-start space-x-4">
          {/* Profile Picture Section */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-accent-500/20 to-brand-500/20 flex items-center justify-center">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={`${persona.name} profile picture`}
                  className="w-full h-full object-cover"
                  onError={() => {
                    setProfileImageUrl(null)
                    setImageError('Failed to load image')
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent-500/30 to-brand-500/30 flex items-center justify-center">
                  {isGenerating || processingImage ? (
                    <div className="animate-spin w-8 h-8 border-2 border-accent-400 border-t-transparent rounded-full" />
                  ) : (
                    <span className="text-accent-400 text-lg font-bold">
                      {getInitials(persona.name)}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {/* Generation Status Indicator */}
            {(isGenerating || processingImage) && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white animate-pulse" />
              </div>
            )}
          </div>

          {/* Persona Info */}
          <div className="flex-1">
            <CardTitle className="flex items-center space-x-2 mb-2">
              <span className="text-primary-50">{persona.name}</span>
            </CardTitle>
            <div className="text-sm text-primary-400 mb-2">
              Generated from {persona.baseSelection.type} • {new Date().toLocaleDateString()}
            </div>
            
            {/* Demographics */}
            <div className="text-xs text-primary-500 space-y-1">
              <div>Age: {persona.generatedInsights.demographics.ageRange}</div>
              <div>Location: {persona.generatedInsights.demographics.location}</div>
              <div>Income: {persona.generatedInsights.demographics.income}</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Error Display */}
        {imageError && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span className="text-red-300 text-sm">{imageError}</span>
          </div>
        )}

        {/* Persona Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h5 className="font-semibold text-primary-50 mb-2">Values</h5>
            <div className="flex flex-wrap gap-2">
              {persona.generatedInsights.values.slice(0, 3).map((value, index) => (
                <span key={index} className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs">
                  {value}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-primary-50 mb-2">Personality</h5>
            <div className="flex flex-wrap gap-2">
              {persona.generatedInsights.personality.slice(0, 3).map((trait, index) => (
                <span key={index} className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h5 className="font-semibold text-primary-50 mb-2">Communication</h5>
            <div className="flex flex-wrap gap-2">
              {persona.generatedInsights.communication.slice(0, 3).map((channel, index) => (
                <span key={index} className="px-2 py-1 bg-success-500/20 text-success-300 rounded-full text-xs">
                  {channel}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-primary-50 mb-2">Buying Motivations</h5>
            <div className="flex flex-wrap gap-2">
              {persona.generatedInsights.buyingMotivations.slice(0, 3).map((motivation, index) => (
                <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  {motivation}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 pt-4 border-t border-primary-700/50">
          {showGenerateButton && (
            <Button
              size="sm"
              onClick={handleGenerateProfilePicture}
              disabled={isGenerating || processingImage}
              className="bg-accent-500 hover:bg-accent-600 text-white"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Generating...
                </>
              ) : processingImage ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : profileImageUrl ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate with {preferredService === 'midjourney' ? 'Midjourney' : 'DALL-E'}
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate with {preferredService === 'midjourney' ? 'Midjourney' : 'DALL-E'}
                </>
              )}
            </Button>
          )}
          
          {profileImageUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadImage}
              className="border-primary-600 hover:border-accent-400"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          )}
        </div>

        {/* Generation Info */}
        {persona.profilePicture && (
          <div className="mt-3 pt-3 border-t border-primary-700/30">
            <div className="text-xs text-primary-500">
              Photo generated: {new Date(persona.profilePicture.generatedAt).toLocaleString()}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export { PersonaCard }