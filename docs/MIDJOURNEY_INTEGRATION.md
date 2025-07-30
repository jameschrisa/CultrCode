# Midjourney Integration Guide

This guide explains how to integrate Midjourney with your existing Midjourney subscription for generating photorealistic persona profile pictures.

## ⚠️ Important Considerations

### No Official API
- **Midjourney doesn't have an official public API** as of 2025
- All integrations use **third-party services** that automate Discord interactions
- These services may violate Midjourney's Terms of Service
- **Risk of account suspension** if detected

### Alternative Approaches
Given these risks, here are your integration options ranked by safety:

## 🔄 Integration Options

### **Option 1: Third-Party API Services (Most Automated)**

**Recommended Services:**
- **ImagineAPI** - Unified API for multiple AI services
- **PiAPI** - Stable Midjourney API with comprehensive features
- **UserAPI** - Full Midjourney feature access

**Setup:**
1. Choose a service and sign up
2. Add your API key to `.env.local`:
   ```bash
   NEXT_PUBLIC_MIDJOURNEY_API_KEY=your_api_key_here
   ```
3. Configure the service in `midjourneyGenerator.ts`:
   ```typescript
   const midjourneyGenerator = new MidjourneyGenerator('imagine') // or 'piapi', 'userapi'
   ```

**Pricing:** $6-15/month + your Midjourney subscription
**Risk:** Medium (Terms of Service violation possible)

### **Option 2: Manual Generation + Upload (Safest)**

**How it works:**
1. Generate personas normally in your app
2. Manually create Midjourney prompts from persona data
3. Generate images in Midjourney Discord
4. Upload images to your app

**Implementation:**
```typescript
// Generate optimized Midjourney prompts
const prompt = midjourneyGenerator.generateMidjourneyPrompt(personaData, options)
console.log('Use this prompt in Midjourney:', prompt)
```

**Risk:** None (follows Midjourney ToS)
**Downside:** Manual process, not automated

### **Option 3: Hybrid Approach (Recommended)**

**Best of both worlds:**
1. Use the app to generate optimized Midjourney prompts
2. Copy prompts to Midjourney Discord for generation
3. Use the image processing system to format results
4. Upload processed images back to personas

## 🛠️ Technical Implementation

### Current System Integration

The system is already integrated and ready to use:

```tsx
<PersonaCard 
  persona={personaData} 
  preferredService="midjourney"  // Set to use Midjourney
  showGenerateButton={true}
/>
```

### Service Configuration

```typescript
// In midjourneyGenerator.ts - choose your service
const midjourneyGenerator = new MidjourneyGenerator(
  'imagine', // or 'piapi', 'userapi'
  process.env.NEXT_PUBLIC_MIDJOURNEY_API_KEY
)
```

### Prompt Engineering for Midjourney

The system generates prompts optimized for Midjourney's style:

```typescript
// Example generated prompt:
"professional headshot portrait, 32 years old, business professional, 
confident expression, corporate attire, luxury fashion, high-end 
accessories, premium styling, studio lighting, professional photography, 
clean background, sharp focus, photorealistic, highly detailed, 8k 
resolution, commercial quality --ar 1:1 --stylize 200 --v 6.1"
```

### Midjourney-Specific Parameters

```typescript
const options: MidjourneyOptions = {
  quality: 'high',
  stylize: 200,      // Artistic interpretation (0-1000)
  version: '6.1',    // Midjourney version
  aspectRatio: '1:1', // Square for profile pictures
  chaos: 15,         // Variation amount (0-100)
  model: 'standard'  // or 'raw' for less processing
}
```

## 🔧 Setup Instructions

### Method 1: Third-Party API (Automated)

1. **Choose a Service:**
   - **ImagineAPI** - General purpose, good for beginners
   - **PiAPI** - Most stable, professional features
   - **UserAPI** - Full Midjourney feature set

2. **Sign Up and Get API Key:**
   - Visit your chosen service
   - Create account and get API key
   - Note: Usually requires $6-15/month subscription

3. **Configure Your App:**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_MIDJOURNEY_API_KEY=your_api_key_here
   ```

4. **Update Service Provider:**
   ```typescript
   // In PersonaCard.tsx, line 33
   const midjourneyGenerator = new MidjourneyGenerator('imagine') // Change to your service
   ```

5. **Test Generation:**
   - Create a persona
   - Click "Generate with Midjourney"
   - Wait 30-60 seconds for processing

### Method 2: Manual Process (Safe)

1. **Generate Prompt:**
   ```typescript
   import MidjourneyGenerator from '@/lib/midjourneyGenerator'
   
   const generator = new MidjourneyGenerator()
   const prompt = generator.generateMidjourneyPrompt(personaData, options)
   console.log('Midjourney prompt:', prompt)
   ```

2. **Use in Midjourney Discord:**
   - Copy the generated prompt
   - Paste in Midjourney Discord: `/imagine [prompt]`
   - Wait for generation (1-2 minutes)
   - Download the result

3. **Process and Upload:**
   ```typescript
   // Use image processor to format for your app
   const processedImage = await imageProcessor.processProfilePicture(downloadedImageUrl, {
     size: 400,
     borderRadius: 50,
     quality: 0.9
   })
   ```

## 📊 Service Comparison

| Service | Pricing | Features | Reliability | Risk Level |
|---------|---------|----------|-------------|------------|
| **ImagineAPI** | $8/month | Basic MJ features | Good | Medium |
| **PiAPI** | $12/month | Full MJ features | Excellent | Medium |
| **UserAPI** | $6/month | Standard features | Good | Medium |
| **Manual Process** | Free | All MJ features | Perfect | None |

## 🎨 Prompt Optimization

The system generates persona-aware prompts:

### Professional Persona Example:
```
professional headshot portrait, 32 years old, business professional, 
confident expression, corporate attire, luxury fashion, high-end accessories, 
polished appearance, studio lighting, professional photography, 
photorealistic --ar 1:1 --stylize 200 --v 6.1
```

### Creative Persona Example:
```
professional headshot portrait, 28 years old, creative professional, 
artistic styling, expressive eyes, sustainable fashion, natural materials, 
modern tech aesthetic, contemporary styling, photorealistic 
--ar 1:1 --stylize 250 --chaos 20 --v 6.1
```

## ⚠️ Risk Assessment

### Terms of Service Risks
- **Midjourney ToS** may prohibit automation
- **Account suspension** possible if detected
- **API services** may be shut down without notice

### Mitigation Strategies
1. **Use sparingly** - Don't generate hundreds of images
2. **Monitor usage** - Watch for any account warnings
3. **Have fallbacks** - Keep DALL-E as backup option
4. **Stay updated** - Monitor Midjourney policy changes

### Recommended Approach
For production use, consider the **hybrid approach**:
1. Generate optimized prompts automatically
2. Use prompts manually in Midjourney Discord
3. Process and upload results through your system

## 🚀 Getting Started

### Quick Start (Manual Method - Safest)
1. Create a persona in your app
2. Open browser console
3. Run this code to get optimized prompt:
   ```javascript
   // This will be available in your app
   const prompt = generateMidjourneyPrompt(personaData)
   console.log('Use this in Midjourney:', prompt)
   ```
4. Copy prompt to Midjourney Discord
5. Generate and download image
6. Upload to your persona

### Full Integration (API Method)
1. Choose a service (recommend PiAPI for reliability)
2. Sign up and get API key
3. Add key to `.env.local`
4. Update service provider in code
5. Test with a persona generation

## 🔧 Troubleshooting

### Common Issues

1. **"Midjourney API key not configured"**
   - Add `NEXT_PUBLIC_MIDJOURNEY_API_KEY` to `.env.local`
   - Restart your development server

2. **"Generation timeout"**
   - Midjourney can take 30-120 seconds
   - Third-party services may have delays
   - Try again or check service status

3. **"Service unavailable"**
   - Third-party service may be down
   - Midjourney may have changed their system
   - Switch to DALL-E as fallback

4. **Poor image quality**
   - Adjust stylization settings
   - Try different chaos values
   - Refine prompt generation logic

### Quality Optimization

```typescript
// For more photorealistic results
const options: MidjourneyOptions = {
  stylize: 150,    // Lower for more realistic
  chaos: 10,       // Lower for consistency
  version: '6.1',  // Latest version
  model: 'raw'     // Less artistic processing
}

// For more artistic results
const options: MidjourneyOptions = {
  stylize: 300,    // Higher for more artistic
  chaos: 25,       // Higher for variety
  version: '6.1',
  model: 'standard' // More artistic processing
}
```

## 📈 Cost Analysis

### Third-Party API Costs
- **Service subscription**: $6-15/month
- **Your Midjourney subscription**: $10-30/month
- **Per image cost**: Usually included in subscription
- **Total monthly**: $16-45/month

### Manual Process Costs
- **Your Midjourney subscription**: $10-30/month
- **Labor time**: 2-3 minutes per image
- **Total cost**: Just your Midjourney subscription

## 🔮 Future Considerations

### Official API
- Monitor Midjourney announcements for official API
- Be ready to migrate when available
- Official API will be safer and more reliable

### Alternative Services
- Keep DALL-E integration as fallback
- Consider Stable Diffusion for open-source option
- Monitor new AI image generation services

## 📞 Support

For Midjourney integration issues:
1. Check service provider documentation
2. Monitor Midjourney Discord announcements
3. Test with manual generation first
4. Have DALL-E fallback ready

---

**Recommendation**: Start with the **manual/hybrid approach** to avoid ToS risks, then consider API integration only if you need high-volume automated generation.

**Last Updated**: January 2025