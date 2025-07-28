'use client'

import { Chip as HeroChip, ChipProps as HeroChipProps } from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ChipProps extends Omit<HeroChipProps, 'variant' | 'color'> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    
    const getHeroUIProps = () => {
      switch (variant) {
        case 'primary':
          return {
            color: 'primary' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-primary-500/20 text-primary-300 border-primary-500/30',
              className
            )
          }
        case 'secondary':
          return {
            color: 'secondary' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-secondary-500/20 text-secondary-300 border-secondary-500/30',
              className
            )
          }
        case 'success':
          return {
            color: 'success' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-success-500/20 text-success-300 border-success-500/30',
              className
            )
          }
        case 'warning':
          return {
            color: 'warning' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-warning-500/20 text-warning-300 border-warning-500/30',
              className
            )
          }
        case 'danger':
          return {
            color: 'danger' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-danger-500/20 text-danger-300 border-danger-500/30',
              className
            )
          }
        default:
          return {
            color: 'default' as const,
            variant: 'flat' as const,
            className: cn(
              'bg-primary-700/50 text-primary-300',
              className
            )
          }
      }
    }

    const heroUIProps = getHeroUIProps()

    return (
      <HeroChip
        ref={ref}
        radius="md"
        size="sm"
        {...heroUIProps}
        {...props}
      />
    )
  }
)

Chip.displayName = "Chip"

export { Chip }