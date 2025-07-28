'use client'

import { Button as HeroButton, ButtonProps as HeroButtonProps } from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HeroButtonProps, 'variant' | 'color' | 'size'> {
  variant?: 'primary' | 'glass' | 'outline' | 'ghost' | 'success' | 'danger'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', loading, children, disabled, ...props }, ref) => {
    
    // Map custom variants to Hero UI variants
    const getHeroUIProps = () => {
      switch (variant) {
        case 'primary':
          return { 
            color: 'primary' as const,
            variant: 'solid' as const,
            className: cn(
              'bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600',
              'text-white font-bold tracking-wide shadow-lg',
              'hover:shadow-xl hover:shadow-primary-500/25 hover:scale-105',
              'active:scale-95 transition-all duration-300',
              className
            )
          }
        case 'glass':
          return { 
            color: 'default' as const,
            variant: 'bordered' as const,
            className: cn(
              'glass-button text-primary-100 hover:text-white',
              'backdrop-blur-xl shadow-lg border-white/10',
              'hover:border-primary-500/30 hover:bg-primary-500/10',
              className
            )
          }
        case 'outline':
          return { 
            color: 'primary' as const,
            variant: 'bordered' as const,
            className: cn(
              'border-2 border-primary-300 bg-transparent text-primary-100',
              'hover:border-primary-400 hover:bg-primary-400/10 hover:text-primary-300',
              className
            )
          }
        case 'ghost':
          return { 
            color: 'default' as const,
            variant: 'light' as const,
            className: cn(
              'text-primary-300 hover:bg-primary-800/50 hover:text-primary-100',
              className
            )
          }
        case 'success':
          return { 
            color: 'success' as const,
            variant: 'solid' as const,
            className: cn(
              'bg-gradient-to-r from-success-500 to-success-600',
              'text-white shadow-lg hover:shadow-success-500/25',
              className
            )
          }
        case 'danger':
          return { 
            color: 'danger' as const,
            variant: 'solid' as const,
            className: cn(
              'bg-gradient-to-r from-danger-500 to-danger-600',
              'text-white shadow-lg hover:shadow-danger-500/25',
              className
            )
          }
        default:
          return { 
            color: 'primary' as const,
            variant: 'solid' as const,
            className
          }
      }
    }

    // Map size to Hero UI size
    const getHeroUISize = () => {
      switch (size) {
        case 'sm':
          return 'sm' as const
        case 'default':
          return 'md' as const
        case 'lg':
          return 'lg' as const
        case 'xl':
          return 'lg' as const // Hero UI doesn't have xl, use lg
        default:
          return 'md' as const
      }
    }

    const heroUIProps = getHeroUIProps()

    return (
      <HeroButton
        ref={ref}
        size={getHeroUISize()}
        isDisabled={disabled || loading}
        isLoading={loading}
        radius="lg"
        {...heroUIProps}
        {...props}
      >
        {children}
      </HeroButton>
    )
  }
)

Button.displayName = "Button"

export { Button }