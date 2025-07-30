/**
 * Image processing utilities for profile pictures
 * Handles resizing, cropping, and applying rounded masks
 */

export interface ImageProcessingOptions {
  size: number // Target size in pixels (for square images)
  borderRadius?: number // Border radius as percentage (0-50, where 50 = full circle)
  quality?: number // JPEG quality (0-1)
  format?: 'jpeg' | 'png' | 'webp'
  backgroundColor?: string // Background color for transparent areas
}

export interface ProcessedImage {
  dataUrl: string
  blob: Blob
  dimensions: {
    width: number
    height: number
  }
}

class ImageProcessor {
  /**
   * Process a profile picture: resize, crop to square, and apply rounded mask
   */
  async processProfilePicture(
    imageUrl: string,
    options: ImageProcessingOptions = {
      size: 400,
      borderRadius: 50, // Full circle by default
      quality: 0.9,
      format: 'jpeg',
      backgroundColor: '#ffffff'
    }
  ): Promise<ProcessedImage> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous' // Handle CORS for external images
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          if (!ctx) {
            throw new Error('Unable to get canvas context')
          }
          
          // Set canvas dimensions
          canvas.width = options.size
          canvas.height = options.size
          
          // Calculate crop dimensions to get a square from the center
          const sourceSize = Math.min(img.width, img.height)
          const sourceX = (img.width - sourceSize) / 2
          const sourceY = (img.height - sourceSize) / 2
          
          // Create clipping path for rounded corners
          this.createRoundedClipPath(ctx, options.size, options.borderRadius || 0)
          
          // Fill background color
          if (options.backgroundColor && options.format !== 'png') {
            ctx.fillStyle = options.backgroundColor
            ctx.fill()
          }
          
          // Draw the image
          ctx.drawImage(
            img,
            sourceX, sourceY, sourceSize, sourceSize, // Source rectangle
            0, 0, options.size, options.size // Destination rectangle
          )
          
          // Convert to desired format
          const mimeType = `image/${options.format}`
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to create blob'))
                return
              }
              
              const dataUrl = canvas.toDataURL(mimeType, options.quality)
              
              resolve({
                dataUrl,
                blob,
                dimensions: {
                  width: options.size,
                  height: options.size
                }
              })
            },
            mimeType,
            options.quality
          )
          
        } catch (error) {
          reject(error)
        }
      }
      
      img.onerror = () => {
        reject(new Error('Failed to load image'))
      }
      
      img.src = imageUrl
    })
  }
  
  /**
   * Create a rounded rectangle clipping path
   */
  private createRoundedClipPath(
    ctx: CanvasRenderingContext2D,
    size: number,
    borderRadiusPercent: number
  ): void {
    const radius = (size * borderRadiusPercent) / 100
    
    ctx.beginPath()
    ctx.moveTo(radius, 0)
    ctx.lineTo(size - radius, 0)
    ctx.quadraticCurveTo(size, 0, size, radius)
    ctx.lineTo(size, size - radius)
    ctx.quadraticCurveTo(size, size, size - radius, size)
    ctx.lineTo(radius, size)
    ctx.quadraticCurveTo(0, size, 0, size - radius)
    ctx.lineTo(0, radius)
    ctx.quadraticCurveTo(0, 0, radius, 0)
    ctx.closePath()
    ctx.clip()
  }
  
  /**
   * Create multiple sizes of the same image (for responsive design)
   */
  async createResponsiveSizes(
    imageUrl: string,
    sizes: number[] = [100, 200, 400, 800],
    options: Omit<ImageProcessingOptions, 'size'> = {}
  ): Promise<{ [key: number]: ProcessedImage }> {
    const results: { [key: number]: ProcessedImage } = {}
    
    for (const size of sizes) {
      try {
        results[size] = await this.processProfilePicture(imageUrl, {
          ...options,
          size
        })
      } catch (error) {
        console.error(`Failed to create ${size}px version:`, error)
      }
    }
    
    return results
  }
  
  /**
   * Validate image URL and check if it's accessible
   */
  async validateImageUrl(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      return response.ok && response.headers.get('content-type')?.startsWith('image/')
    } catch {
      return false
    }
  }
  
  /**
   * Download and cache an image locally (useful for storing generated images)
   */
  async downloadAndCacheImage(url: string, filename: string): Promise<string> {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const blob = await response.blob()
      
      // In a real application, you would upload this to your storage service
      // For now, we'll create a local object URL
      const objectUrl = URL.createObjectURL(blob)
      
      // Store metadata for cleanup later
      this.storeCachedImageMetadata(filename, objectUrl, blob.size)
      
      return objectUrl
    } catch (error) {
      console.error('Error downloading image:', error)
      throw error
    }
  }
  
  /**
   * Store cached image metadata (in a real app, this would be in a database)
   */
  private storeCachedImageMetadata(filename: string, url: string, size: number): void {
    const metadata = {
      filename,
      url,
      size,
      cachedAt: new Date().toISOString()
    }
    
    // In a real application, store this in your database
    localStorage.setItem(`cached_image_${filename}`, JSON.stringify(metadata))
  }
  
  /**
   * Clean up cached images to prevent memory leaks
   */
  cleanupCachedImages(): void {
    // In a real application, you would clean up your storage service
    const keys = Object.keys(localStorage).filter(key => key.startsWith('cached_image_'))
    
    keys.forEach(key => {
      try {
        const metadata = JSON.parse(localStorage.getItem(key) || '{}')
        if (metadata.url && metadata.url.startsWith('blob:')) {
          URL.revokeObjectURL(metadata.url)
        }
        localStorage.removeItem(key)
      } catch (error) {
        console.error('Error cleaning up cached image:', error)
      }
    })
  }
  
  /**
   * Generate a placeholder image while the real image is loading
   */
  generatePlaceholder(
    size: number,
    initials: string,
    backgroundColor: string = '#6366f1',
    textColor: string = '#ffffff'
  ): string {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      throw new Error('Unable to get canvas context')
    }
    
    canvas.width = size
    canvas.height = size
    
    // Create circular clipping path
    this.createRoundedClipPath(ctx, size, 50)
    
    // Fill background
    ctx.fillStyle = backgroundColor
    ctx.fill()
    
    // Draw initials
    ctx.fillStyle = textColor
    ctx.font = `bold ${size * 0.4}px Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(initials.substring(0, 2).toUpperCase(), size / 2, size / 2)
    
    return canvas.toDataURL('image/png')
  }
}

export default ImageProcessor