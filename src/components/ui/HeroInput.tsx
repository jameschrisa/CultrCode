'use client'

import { Input as HeroInput, Textarea as HeroTextarea, InputProps as HeroInputProps } from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends Omit<HeroInputProps, 'variant' | 'color'> {
  variant?: 'default' | 'glass' | 'outline'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    
    const getHeroUIProps = () => {
      switch (variant) {
        case 'glass':
          return {
            variant: 'bordered' as const,
            className: cn(
              'bg-primary-800/50 border-primary-600',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400 focus:bg-primary-800/70',
              'backdrop-blur-sm',
              className
            )
          }
        case 'outline':
          return {
            variant: 'bordered' as const,
            className: cn(
              'border-primary-600 bg-transparent',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400',
              className
            )
          }
        default:
          return {
            variant: 'flat' as const,
            className: cn(
              'bg-primary-800/50 border-primary-600',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400',
              className
            )
          }
      }
    }

    const heroUIProps = getHeroUIProps()

    return (
      <HeroInput
        ref={ref}
        radius="lg"
        {...heroUIProps}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export interface TextareaProps extends Omit<React.ComponentProps<typeof HeroTextarea>, 'variant' | 'color'> {
  variant?: 'default' | 'glass' | 'outline'
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    
    const getHeroUIProps = () => {
      switch (variant) {
        case 'glass':
          return {
            variant: 'bordered' as const,
            className: cn(
              'bg-primary-800/50 border-primary-600',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400 focus:bg-primary-800/70',
              'backdrop-blur-sm',
              className
            )
          }
        case 'outline':
          return {
            variant: 'bordered' as const,
            className: cn(
              'border-primary-600 bg-transparent',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400',
              className
            )
          }
        default:
          return {
            variant: 'flat' as const,
            className: cn(
              'bg-primary-800/50 border-primary-600',
              'text-primary-200 placeholder-primary-500',
              'focus:border-primary-400',
              className
            )
          }
      }
    }

    const heroUIProps = getHeroUIProps()

    return (
      <HeroTextarea
        ref={ref}
        radius="lg"
        {...heroUIProps}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Input, Textarea }