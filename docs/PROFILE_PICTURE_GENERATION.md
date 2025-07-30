# Profile Picture Generation System

This document explains the AI-powered profile picture generation system for personas in CultrCode.

## Overview

The system automatically generates photorealistic profile pictures for AI personas using **DALL-E 3** from OpenAI. Generated images are processed, resized to 400x400 pixels, and have rounded masks applied for a professional appearance.

## Features

- 🎨 **Photorealistic Generation**: Uses DALL-E 3 for high-quality human portraits
- 🧠 **Smart Prompting**: Generates detailed prompts based on persona psychographics and demographics
- 🎯 **Persona-Aware**: Considers personality traits, values, and behavioral characteristics
- 🖼️ **Image Processing**: Automatic resizing, cropping, and rounded mask application
- 💾 **Caching**: Generated images are processed and cached locally
- 🔄 **Regeneration**: Users can regenerate images with new variations
- 📥 **Export**: Download generated profile pictures

## API Providers Supported

### Primary: DALL-E 3 (OpenAI)
- **Cost**: $0.04 per standard 1024x1024 image, $0.08 for HD
- **Quality**: Excellent photorealistic results with great prompt understanding
- **Integration**: Full JavaScript/TypeScript support

### Alternative Options (Future)
- **GPT-4o Image Generation**: Latest model with superior photorealism
- **Stable Diffusion 3.5**: Maximum customization and control
- **Replicate API**: Cost-effective alternative with multiple models

## Setup Instructions

### 1. API Key Configuration

Add your OpenAI API key to your environment variables:

```bash
# Copy the example file
cp .env.example .env.local

# Add your API key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

**⚠️ Security Note**: The current implementation uses client-side API calls for development. For production, implement a server-side API route to protect your API key.

### 2. Cost Considerations

- Standard quality (1024x1024): **$0.04 per image**
- HD quality (1024x1024): **$0.08 per image**
- Estimated cost per persona: **$0.04 - $0.08**

Monitor your OpenAI usage and set up billing alerts.

## How It Works

### 1. Prompt Generation

The system creates detailed prompts based on:

```typescript
// Demographics
- Age range from persona insights
- Location context
- Optional gender/ethnicity specification

// Personality Traits
- Professional vs Creative appearance
- Adventurous vs Thoughtful expressions
- Brand loyalty reflected in styling choices

// Psychographic Factors
- Luxury affinity → High-end fashion and accessories
- Sustainability importance → Natural, eco-friendly styling
- Innovation adoption → Modern, tech-forward appearance

// Values Integration
- Environmental responsibility → Sustainable fashion choices
- Premium quality → Sophisticated appearance
- Authenticity → Genuine, natural expressions
```

### 2. Image Processing Pipeline

```typescript
1. Generate 1024x1024 image via DALL-E 3 API
2. Download and process the image:
   - Resize to 400x400 pixels
   - Crop to perfect square from center
   - Apply 50% border radius (full circle mask)
   - Optimize for web display
3. Cache processed image locally
4. Display in persona card
```

### 3. Component Integration

```tsx
import { PersonaCard } from '@/components/PersonaCard'

<PersonaCard 
  persona={personaData}
  showGenerateButton={true}
  onImageGenerated={(imageUrl) => {
    // Handle generated image
    updatePersonaWithImage(imageUrl)
  }}
/>
```

## Usage Examples

### Basic Profile Picture Generation

```typescript
import ProfilePictureGenerator from '@/lib/profilePictureGenerator'

const generator = new ProfilePictureGenerator()

const result = await generator.generateProfilePicture(personaData, {
  size: '1024x1024',
  quality: 'standard',
  style: 'photorealistic',
  demographics: {
    age: '30',
    gender: 'any', // Optional
    ethnicity: 'diverse' // Optional
  }
})

console.log('Generated image URL:', result.url)
console.log('Cost:', result.metadata.cost)
```

### Image Processing

```typescript
import ImageProcessor from '@/lib/imageProcessor'

const processor = new ImageProcessor()

const processedImage = await processor.processProfilePicture(imageUrl, {
  size: 400,
  borderRadius: 50, // Full circle
  quality: 0.9,
  format: 'jpeg'
})

// Use processedImage.dataUrl in your component
```

### Multiple Variations

```typescript
// Generate 3 variations of the same persona
const variations = await generator.generateVariations(personaData, 3, {
  size: '1024x1024',
  quality: 'standard'
})

variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.url)
})
```

## Prompt Engineering

The system uses sophisticated prompt engineering to create realistic portraits:

### Professional Persona Example
```
"Professional headshot portrait of a person, 32 years old, confident and professional demeanor, business attire, intelligent and contemplative expression, high-end fashion, luxury accessories, polished appearance, professional business attire, corporate headshot style, clean background, excellent lighting, high resolution, professional photography, perfect focus, studio lighting, photorealistic, 8K quality"
```

### Creative Persona Example
```
"Professional headshot portrait of a person, 28 years old, creative and expressive appearance, stylish clothing, adventurous spirit, energetic and optimistic expression, modern and tech-forward appearance, contemporary styling, sustainable fashion choices, casual clothing, relaxed and approachable expression, photorealistic, 8K quality"
```

## File Structure

```
src/
├── lib/
│   ├── profilePictureGenerator.ts  # Main generation logic
│   └── imageProcessor.ts           # Image processing utilities
├── components/
│   └── PersonaCard.tsx            # Integrated persona card with image generation
└── types/
    └── personas.ts                # TypeScript interfaces
```

## API Reference

### ProfilePictureGenerator

```typescript
class ProfilePictureGenerator {
  // Generate a single profile picture
  generateProfilePicture(
    personaData: PersonaData,
    options?: ProfilePictureOptions
  ): Promise<GeneratedProfilePicture>

  // Generate multiple variations
  generateVariations(
    personaData: PersonaData,
    count: number,
    options?: Partial<ProfilePictureOptions>
  ): Promise<GeneratedProfilePicture[]>
}
```

### ImageProcessor

```typescript
class ImageProcessor {
  // Process image with resizing and masking
  processProfilePicture(
    imageUrl: string,
    options?: ImageProcessingOptions
  ): Promise<ProcessedImage>

  // Create multiple responsive sizes
  createResponsiveSizes(
    imageUrl: string,
    sizes: number[]
  ): Promise<{ [key: number]: ProcessedImage }>

  // Generate placeholder while loading
  generatePlaceholder(
    size: number,
    initials: string,
    backgroundColor?: string
  ): string
}
```

## Best Practices

### 1. Error Handling
```typescript
try {
  const result = await generator.generateProfilePicture(personaData)
  setProfileImage(result.url)
} catch (error) {
  console.error('Generation failed:', error)
  // Show fallback or error message
  setImageError('Failed to generate profile picture')
}
```

### 2. Loading States
```typescript
const [isGenerating, setIsGenerating] = useState(false)

const handleGenerate = async () => {
  setIsGenerating(true)
  try {
    const result = await generator.generateProfilePicture(personaData)
    setProfileImage(result.url)
  } finally {
    setIsGenerating(false)
  }
}
```

### 3. Cost Monitoring
```typescript
// Track generation costs
const [totalCost, setTotalCost] = useState(0)

const result = await generator.generateProfilePicture(personaData)
setTotalCost(prev => prev + result.metadata.cost)
```

## Troubleshooting

### Common Issues

1. **API Key Not Set**
   - Error: "OpenAI API key is required"
   - Solution: Add `NEXT_PUBLIC_OPENAI_API_KEY` to your `.env.local`

2. **CORS Issues**
   - Error: "Failed to load image"
   - Solution: Ensure proper CORS headers or use server-side processing

3. **High Costs**
   - Issue: Unexpected API charges
   - Solution: Implement rate limiting and user quotas

4. **Poor Image Quality**
   - Issue: Generated images don't match persona
   - Solution: Refine prompt generation logic for specific persona types

### Performance Optimization

1. **Image Caching**
   ```typescript
   // Cache processed images to avoid re-processing
   const cachedImage = localStorage.getItem(`persona_${personaId}_image`)
   if (cachedImage) {
     setProfileImage(cachedImage)
     return
   }
   ```

2. **Lazy Loading**
   ```typescript
   // Only generate images when needed
   const [shouldGenerate, setShouldGenerate] = useState(false)
   
   useEffect(() => {
     if (shouldGenerate && !profileImage) {
       generateProfilePicture()
     }
   }, [shouldGenerate])
   ```

## Security Considerations

### Production Deployment

1. **Server-Side API Route**
   ```typescript
   // pages/api/generate-profile-picture.ts
   export default async function handler(req, res) {
     const { personaData } = req.body
     
     // Validate user authentication
     // Apply rate limiting
     // Generate image server-side
     // Return processed image URL
   }
   ```

2. **Rate Limiting**
   - Implement per-user generation limits
   - Add cooldown periods between generations
   - Monitor and alert on unusual usage patterns

3. **Content Filtering**
   - Validate persona data inputs
   - Filter inappropriate content
   - Implement abuse detection

## Future Enhancements

1. **Multiple AI Providers**
   - Add Stable Diffusion support
   - Implement Midjourney integration
   - Support for custom models

2. **Advanced Features**
   - Style transfer options
   - Background customization
   - Clothing/accessory variations

3. **Performance Improvements**
   - CDN integration for image storage
   - Real-time image streaming
   - Progressive image enhancement

## Support

For issues or questions about the profile picture generation system:

1. Check this documentation
2. Review error logs in browser console
3. Verify API key configuration
4. Monitor OpenAI usage dashboard
5. Contact the development team

---

**Last Updated**: January 2025  
**Version**: 1.0.0