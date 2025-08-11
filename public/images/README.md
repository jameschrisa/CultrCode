# Image Assets Directory

## 📁 Directory Structure

```
public/images/
├── testimonials/          # Customer testimonial photos
│   ├── sarah-chen.jpg     # Sarah Chen - Beauty founder
│   ├── marcus-rodriguez.jpg # Marcus Rodriguez - Fitness creator  
│   └── emma-johnson.jpg   # Emma Johnson - Sustainable fashion CEO
├── hero/                  # Hero section images
│   ├── professional-woman-laptop.jpg # Main hero image
│   └── entrepreneur-planning.jpg     # Secondary hero image
├── how-it-works/         # Process explanation images
│   ├── team-planning.jpg # Step 1: Planning phase
│   ├── data-analysis.jpg # Step 2: AI processing
│   └── success-celebration.jpg # Step 4: Launch success
├── creators/             # Success story images
│   ├── beauty-creator.jpg
│   ├── fitness-creator.jpg
│   └── tech-creator.jpg
└── team/                 # Team/about page images
    ├── ai-researcher.jpg
    └── gis-specialist.jpg
```

## 🖼️ Image Specifications

### Recommended Formats
- **JPEG** for photos with many colors
- **WebP** for modern browsers (Next.js auto-converts)
- **PNG** for images with transparency

### Size Guidelines
- **Testimonials**: 400x400px (square, optimized for faces)
- **Hero Images**: 800x600px (landscape orientation)
- **How It Works**: 600x400px (wide format for process steps)
- **Creator Stories**: 400x500px (portrait orientation)

### Quality Settings
- **High quality originals** (90-95% JPEG quality)
- Next.js will automatically optimize and serve appropriate sizes
- Include 2x versions for Retina displays if possible

## 🔄 How to Switch to Local Images

### Option 1: Replace Unsplash URLs (Quick)
Edit `/src/lib/imageConfig.ts` and change the URLs:

```typescript
// Change from:
url: "https://images.unsplash.com/photo-1494790108755-2616b612b786"

// To:
url: "/images/testimonials/sarah-chen.jpg"
```

### Option 2: Use Local Config File (Clean)
1. Copy `/src/lib/imageConfig.local.ts` to `/src/lib/imageConfig.ts`
2. Place your images in the corresponding directories
3. Update photographer attribution as needed

## 📝 Image Attribution

If using purchased or licensed images:
- Update `photographer` field with actual photographer name
- Update `source` field (e.g., "Getty Images", "Shutterstock", "Local")
- Ensure you have proper licensing for commercial use

## 🚀 Current Status

**Currently using**: Unsplash CDN URLs (no local images needed)
**To switch**: Follow instructions above and place images in the directories

## 💡 Pro Tips

1. **Optimization**: Next.js automatically optimizes images - upload high quality originals
2. **Alt Text**: Keep descriptive alt text for accessibility
3. **Loading**: OptimizedImage component handles loading states automatically
4. **Fallbacks**: Component includes error handling for missing images