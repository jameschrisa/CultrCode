'use client'

import { Card as HeroCard, CardHeader as HeroCardHeader, CardBody as HeroCardBody, CardFooter as HeroCardFooter, CardProps as HeroCardProps } from '@heroui/react'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CustomCardProps {
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card = forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, children, onClick, ...props }, ref) => {
    if (onClick) {
      return (
        <div
          ref={ref}
          className={cn(
            'glass-card transition-all duration-500',
            'hover:bg-white/[0.05] hover:border-white/20',
            'group backdrop-blur-xl cursor-pointer',
            'rounded-xl p-4 md:p-6', // Consistent padding and rounded corners
            'overflow-hidden', // Ensure content doesn't overflow
            className
          )}
          onClick={onClick}
          {...(props as any)}
        >
          <HeroCard
            className="bg-transparent border-none shadow-none h-full p-0"
            radius="none"
          >
            {children}
          </HeroCard>
        </div>
      )
    }

    return (
      <HeroCard
        ref={ref}
        className={cn(
          'glass-card transition-all duration-500',
          'hover:bg-white/[0.05] hover:border-white/20',
          'group backdrop-blur-xl',
          'rounded-xl p-4 md:p-6', // Consistent padding and rounded corners
          'overflow-hidden', // Ensure content doesn't overflow
          className
        )}
        radius="none"
        shadow="sm"
        {...props}
      >
        {children}
      </HeroCard>
    )
  }
)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroCardHeader
      className={cn("flex flex-col space-y-2 pb-4", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-bold leading-tight tracking-tight text-primary-50",
        "break-words hyphens-auto", // Better text wrapping
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-sm text-primary-300 leading-relaxed",
        "break-words hyphens-auto", // Better text wrapping
        className
      )}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroCardBody 
      className={cn("pt-0 space-y-3", className)} 
      {...props} 
    />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroCardFooter
      className={cn("flex items-center gap-2 pt-4 mt-auto", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }