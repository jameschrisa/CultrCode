'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = 'default', size = 'sm', children, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return 'bg-primary-500/20 text-primary-300 border-primary-500/30'
        case 'secondary':
          return 'bg-primary-700/20 text-primary-400 border-primary-600/30'
        case 'success':
          return 'bg-success-500/20 text-success-300 border-success-500/30'
        case 'warning':
          return 'bg-warning-500/20 text-warning-300 border-warning-500/30'
        case 'danger':
          return 'bg-danger-500/20 text-danger-300 border-danger-500/30'
        case 'accent':
          return 'bg-accent-500/20 text-accent-300 border-accent-500/30'
        default:
          return 'bg-primary-800/30 text-primary-300 border-primary-700/30'
      }
    }

    const getSizeStyles = () => {
      switch (size) {
        case 'lg':
          return 'px-3 py-1.5 text-sm'
        case 'md':
          return 'px-2.5 py-1 text-xs'
        case 'sm':
        default:
          return 'px-2 py-0.5 text-xs'
      }
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'font-medium rounded-md border',
          'transition-colors duration-200',
          'break-inside-avoid', // Prevent breaking inside tags
          getVariantStyles(),
          getSizeStyles(),
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Tag.displayName = "Tag"

export { Tag }