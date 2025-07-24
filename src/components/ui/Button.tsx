'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 disabled:pointer-events-none disabled:opacity-50 active:scale-95 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 text-primary-950 shadow-lg hover:shadow-xl hover:shadow-accent-500/25 hover:scale-105 font-bold tracking-wide",
        glass: "glass-button text-primary-100 hover:text-white shadow-lg backdrop-blur-xl",
        outline: "border-2 border-brand-300 bg-transparent text-primary-100 hover:border-accent-400 hover:bg-accent-400/10 hover:text-accent-300",
        ghost: "text-primary-300 hover:bg-primary-800/50 hover:text-primary-100",
        success: "bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-400 hover:to-success-500 shadow-lg hover:shadow-success-500/25",
        danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 shadow-lg hover:shadow-red-500/25"
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-xl",
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-12 text-xl rounded-3xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }