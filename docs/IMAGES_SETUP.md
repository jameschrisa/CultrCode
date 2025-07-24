# 🖼️ Image Setup Guide for LaunchLens

## 🚨 Current Status: Images Fixed & Active

**✅ FIXED**: Updated Next.js config to allow external image domains  
**✅ TESTING**: One local test image created at `/public/images/test-image.svg`  
**✅ DOMAINS**: Added `picsum.photos` and `images.unsplash.com` to Next.js config

The images should now be working on:
- `/` main page (hero + testimonials)
- `/pricing` page (testimonials) 
- `/how-it-works` page (hero + process steps)

## 🔄 How to Replace with Real Images

### Option 1: Use Local Images (Recommended)

1. **Create the directory structure** (already done):
   ```
   public/images/
   ├── testimonials/
   ├── hero/
   ├── how-it-works/
   ├── creators/
   └── team/
   ```

2. **Add your images** to the folders:
   ```
   public/images/testimonials/sarah-chen.jpg      (400x400px)
   public/images/testimonials/marcus-rodriguez.jpg (400x400px)
   public/images/testimonials/emma-johnson.jpg    (400x400px)
   public/images/hero/professional-woman-laptop.jpg (800x600px)
   public/images/how-it-works/team-planning.jpg   (600x400px)
   public/images/how-it-works/data-analysis.jpg   (600x400px)
   public/images/how-it-works/success-celebration.jpg (600x400px)
   ```

3. **Update the URLs** in `/src/lib/imageConfig.ts`:
   ```typescript
   // Change from:
   url: "https://picsum.photos/400/400?random=10"
   
   // To:
   url: "/images/testimonials/sarah-chen.jpg"
   ```

### Option 2: Use Better Stock Photos

Replace the URLs in `/src/lib/imageConfig.ts` with:

**Free Options:**
- **Pexels**: `https://images.pexels.com/photos/[photo-id]/pexels-photo-[photo-id].jpeg`
- **Pixabay**: `https://pixabay.com/get/[image-url]`

**Professional Options:**
- **Getty Images**: (requires licensing)
- **Shutterstock**: (requires licensing)
- **Adobe Stock**: (requires licensing)

## 📸 Image Requirements

### Testimonial Images (400x400px)
- **Diverse representation** - Different ethnicities, ages, genders
- **Professional headshots** - Clear faces, good lighting
- **Business casual attire** - Approachable but professional
- **High resolution** - Crisp, clear images

### Hero Images (800x600px)  
- **Professional working environment** - Office, laptop, planning
- **Confident posture** - Success-oriented, determined
- **Modern aesthetic** - Contemporary, clean backgrounds
- **Action-oriented** - Working, planning, strategizing

### Process Images (600x400px)
- **Step 1**: Team planning, brainstorming, whiteboards
- **Step 2**: Data analysis, charts, computers, AI/tech
- **Step 4**: Celebration, success, high-fives, achievement

## 🛠️ Quick Replacement Script

To quickly replace all placeholder images with local ones, use this pattern in `/src/lib/imageConfig.ts`:

```typescript
// Replace all URLs at once
export const imageConfig = {
  testimonials: {
    sarah: {
      url: "/images/testimonials/sarah-chen.jpg",
      alt: "Sarah Chen, Founder of Glow Naturals",
      photographer: "Your Photographer Name",
      source: "Local"
    },
    // ... repeat for marcus and emma
  },
  // ... continue for all sections
}
```

## ✅ Testing Images

1. **Start dev server**: `npm run dev`
2. **Visit pages**:
   - `http://localhost:3000/` (main page with hero + testimonials)
   - `http://localhost:3000/pricing` (testimonials)
   - `http://localhost:3000/how-it-works` (hero + steps)
3. **Check browser dev tools** for any 404 errors
4. **Verify loading** - images should appear with smooth transitions
5. **Test image**: Sarah's testimonial should show a local test image (dark blue with "Test Image" text)

## 🐛 If Images Still Don't Load

1. **Check browser console** for errors
2. **Verify domains in `next.config.js`** - should include `picsum.photos`
3. **Try refreshing** the page or hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. **Check network tab** in dev tools to see if images are being requested
5. **Test with local image**: Visit `/images/test-image.svg` directly in browser

## 🎯 Recommended Image Sources

### For Testimonials:
- **This Person Does Not Exist** (AI-generated faces): `https://thispersondoesnotexist.com/`
- **Generated Photos**: `https://generated.photos/`
- **UI Faces**: `https://uifaces.co/`

### For Business/Professional:
- **Pexels Business**: `https://www.pexels.com/search/business/`
- **Unsplash Business**: `https://unsplash.com/s/photos/business`
- **StockVault**: `https://www.stockvault.net/`

## 🚨 Important Notes

1. **Copyright**: Ensure you have rights to use any images
2. **Attribution**: Update photographer credits appropriately  
3. **Size**: Larger originals are better - Next.js will optimize automatically
4. **Format**: JPEG for photos, PNG for graphics, WebP for modern browsers
5. **Performance**: The OptimizedImage component handles loading and optimization

## 🔧 Current Placeholder URLs (Active)

The system is currently using these working placeholder URLs:
- Testimonials: `https://picsum.photos/400/400?random=[10-12]`
- Hero: `https://picsum.photos/800/600?random=[1-2]`  
- Process: `https://picsum.photos/600/400?random=[20-22]`

These will show beautiful, random images while you prepare your final image assets.