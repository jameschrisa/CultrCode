'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SimpleImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function SimpleImage({ src, alt, className, width, height }: SimpleImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-primary-800 text-primary-400 rounded-lg',
        className
      )} style={{ width, height }}>
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
    <div className={cn('relative overflow-hidden', className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-primary-800 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover rounded-lg transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => {
          setIsLoaded(true)
        }}
        onError={(e) => {
          setIsLoaded(true)
          setHasError(true)
          console.error(`❌ Image failed: ${src}`, e)
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  )
}