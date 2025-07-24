'use client'

import Image from 'next/image'
import { Users } from 'lucide-react'

interface ProfileAvatarProps {
  src?: string
  alt: string
  initials: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function ProfileAvatar({ 
  src, 
  alt, 
  initials, 
  size = 'md', 
  className = '' 
}: ProfileAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16',
    xl: 'w-32 h-32'
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6', 
    xl: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center border-2 border-accent-400/30 overflow-hidden`}>
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            onError={(e) => {
              // Hide image and show fallback
              e.currentTarget.style.display = 'none'
              const fallback = e.currentTarget.nextElementSibling
              if (fallback) {
                fallback.classList.remove('hidden')
              }
            }}
          />
          <div className="hidden flex-col items-center justify-center text-accent-400">
            <Users className={iconSizes[size]} />
            <span className={`${textSizes[size]} font-medium`}>{initials}</span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-accent-400">
          <Users className={iconSizes[size]} />
          <span className={`${textSizes[size]} font-medium`}>{initials}</span>
        </div>
      )}
    </div>
  )
}