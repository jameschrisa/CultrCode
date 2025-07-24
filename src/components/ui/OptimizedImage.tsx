'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  photographer?: string
  source?: string
  className?: string
  width?: number
  height?: number
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  priority?: boolean
  showAttribution?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  photographer,
  source,
  className,
  width = 600,
  height = 400,
  aspectRatio = 'landscape',
  priority = false,
  showAttribution = false,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]'
  }

  // Generate blur data URL for better loading experience
  const generateBlurDataURL = () => {
    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <circle cx="50%" cy="50%" r="20%" fill="#1e293b" opacity="0.5"/>
    </svg>`
    
    // Use btoa instead of Buffer for browser compatibility
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-primary-800 text-primary-400 rounded-lg',
        aspectRatioClasses[aspectRatio],
        className
      )}>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 opacity-50">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden rounded-lg', className)}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className={cn(
          'absolute inset-0 bg-primary-800 animate-pulse',
          aspectRatioClasses[aspectRatio]
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 animate-pulse" />
        </div>
      )}

      {/* Main image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={aspectRatioClasses[aspectRatio]}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL || generateBlurDataURL()}
          className="object-cover w-full h-full"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(true)
            setHasError(true)
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Attribution overlay (optional) */}
      {showAttribution && photographer && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <p className="text-xs text-white/80">
            Photo by {photographer}
            {source && ` on ${source}`}
          </p>
        </div>
      )}
    </div>
  )
}

// Preset configurations for common use cases
export const ImagePresets = {
  testimonial: {
    aspectRatio: 'square' as const,
    width: 400,
    height: 400,
    className: 'w-16 h-16 md:w-20 md:h-20'
  },
  hero: {
    aspectRatio: 'landscape' as const,
    width: 800,
    height: 600,
    priority: true,
    className: 'w-full max-w-md mx-auto'
  },
  feature: {
    aspectRatio: 'wide' as const,
    width: 600,
    height: 400,
    className: 'w-full'
  },
  creator: {
    aspectRatio: 'portrait' as const,
    width: 400,
    height: 500,
    className: 'w-full max-w-sm'
  }
} as const