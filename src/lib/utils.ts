import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

export function getTierColor(tier: string): string {
  switch (tier) {
    case 'TIER1':
      return 'bg-gradient-to-r from-yellow-400 to-orange-500'
    case 'TIER2':
      return 'bg-gradient-to-r from-blue-400 to-purple-500'
    case 'TIER3':
      return 'bg-gradient-to-r from-green-400 to-teal-500'
    default:
      return 'bg-gradient-to-r from-gray-400 to-gray-500'
  }
}

export function getMatchScoreColor(score: number): string {
  if (score >= 90) return 'text-green-600 bg-green-50'
  if (score >= 80) return 'text-blue-600 bg-blue-50'
  if (score >= 70) return 'text-yellow-600 bg-yellow-50'
  if (score >= 60) return 'text-orange-600 bg-orange-50'
  return 'text-red-600 bg-red-50'
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}