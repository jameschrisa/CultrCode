'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { 
  User, 
  AuthState, 
  AuthContextType, 
  LoginCredentials, 
  RegisterData, 
  Permission,
  UserRole,
  SubscriptionTier 
} from '@/types/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock storage functions (in a real app, this would be a proper backend)
const AUTH_STORAGE_KEY = 'cultrcode_auth'

const mockUsers: Record<string, { email: string; password: string; name: string; role: UserRole; subscriptionTier: SubscriptionTier }> = {
  'admin@cultrcode.com': {
    email: 'admin@cultrcode.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    subscriptionTier: 'enterprise'
  },
  'user@cultrcode.com': {
    email: 'user@cultrcode.com',
    password: 'user123',
    name: 'Test User',
    role: 'user',
    subscriptionTier: 'free'
  },
  'standard@cultrcode.com': {
    email: 'standard@cultrcode.com',
    password: 'standard123',
    name: 'Sarah Johnson',
    role: 'user',
    subscriptionTier: 'standard'
  },
  'premium@cultrcode.com': {
    email: 'premium@cultrcode.com',
    password: 'premium123',
    name: 'Marcus Chen',
    role: 'user',
    subscriptionTier: 'pro'
  }
}

const saveAuthState = (user: User | null) => {
  if (typeof window !== 'undefined') {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY)
    }
  }
}

const loadAuthState = (): User | null => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        return {
          ...parsed,
          createdAt: new Date(parsed.createdAt),
          lastLoginAt: parsed.lastLoginAt ? new Date(parsed.lastLoginAt) : undefined
        }
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY)
      }
    }
  }
  return null
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false
  })

  useEffect(() => {
    const user = loadAuthState()
    setAuthState({
      user,
      isLoading: false,
      isAuthenticated: !!user
    })
  }, [])

  const login = async (credentials: LoginCredentials): Promise<{ success: boolean; redirectUrl?: string }> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser = mockUsers[credentials.email]
      
      if (mockUser && mockUser.password === credentials.password) {
        const user: User = {
          id: Math.random().toString(36).substr(2, 9),
          email: mockUser.email,
          name: mockUser.name,
          role: mockUser.role,
          subscriptionTier: mockUser.subscriptionTier,
          createdAt: new Date(),
          lastLoginAt: new Date()
        }
        
        setAuthState({
          user,
          isLoading: false,
          isAuthenticated: true
        })
        
        saveAuthState(user)
        
        // Calculate redirect URL based on subscription tier
        let redirectUrl = '/'
        switch (user.subscriptionTier) {
          case 'standard':
            redirectUrl = '/analysis'
            break
          case 'pro':
          case 'enterprise':
            redirectUrl = '/dashboard'
            break
          case 'free':
          default:
            redirectUrl = '/'
            break
        }
        
        return { success: true, redirectUrl }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }))
        return { success: false }
      }
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return { success: false }
    }
  }

  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (data.password !== data.confirmPassword) {
        setAuthState(prev => ({ ...prev, isLoading: false }))
        return false
      }
      
      // Check if user already exists
      if (mockUsers[data.email]) {
        setAuthState(prev => ({ ...prev, isLoading: false }))
        return false
      }
      
      // Create new user
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        name: data.name,
        role: 'user',
        subscriptionTier: 'free',
        createdAt: new Date(),
        lastLoginAt: new Date()
      }
      
      // Add to mock storage
      mockUsers[data.email] = {
        email: data.email,
        password: data.password,
        name: data.name,
        role: 'user',
        subscriptionTier: 'free'
      }
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true
      })
      
      saveAuthState(user)
      return true
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }))
      return false
    }
  }

  const logout = () => {
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false
    })
    saveAuthState(null)
  }

  const hasPermission = (permission: Permission): boolean => {
    if (!authState.user) return false
    
    switch (permission) {
      case 'admin_access':
      case 'manage_users':
      case 'view_analytics':
        return authState.user.role === 'admin'
      case 'view_premium_reports':
        return authState.user.role === 'admin' || 
               authState.user.subscriptionTier === 'standard' ||
               authState.user.subscriptionTier === 'pro' ||
               authState.user.subscriptionTier === 'enterprise'
      default:
        return false
    }
  }

  const isAdmin = (): boolean => {
    return authState.user?.role === 'admin' || false
  }

  const canAccessPremium = (): boolean => {
    return hasPermission('view_premium_reports')
  }

  const getUsageStats = () => {
    if (!authState.user) return { reportsGenerated: 0, savedReports: 0 }
    
    const userId = authState.user.id
    const usageKey = `launchlens_usage_${userId}`
    const savedReportsKey = 'launchlens_saved_reports'
    
    const usage = JSON.parse(localStorage.getItem(usageKey) || '{"reportsGenerated": 0}')
    const savedReports = JSON.parse(localStorage.getItem(savedReportsKey) || '[]')
    const userSavedReports = savedReports.filter((report: any) => report.userId === userId)
    
    return {
      reportsGenerated: usage.reportsGenerated || 0,
      savedReports: userSavedReports.length
    }
  }

  const canGenerateReport = (): boolean => {
    if (!authState.user) return false
    
    const { subscriptionTier } = authState.user
    const { reportsGenerated } = getUsageStats()
    
    switch (subscriptionTier) {
      case 'free':
        return true // Unlimited free basic reports (but no saves)
      case 'standard':
        return reportsGenerated < 1 // Standard users get 1 comprehensive report
      case 'pro':
      case 'enterprise':
        return true // Unlimited reports for premium users
      default:
        return false
    }
  }

  const canSaveReport = (): boolean => {
    if (!authState.user) return false
    
    const { subscriptionTier } = authState.user
    const { savedReports } = getUsageStats()
    
    switch (subscriptionTier) {
      case 'free':
        return false // Free users cannot save reports
      case 'standard':
        return savedReports < 1 // Standard users can save 1 report
      case 'pro':
      case 'enterprise':
        return true // Unlimited saves for premium users
      default:
        return false
    }
  }

  const incrementReportGeneration = () => {
    if (!authState.user) return
    
    const userId = authState.user.id
    const usageKey = `launchlens_usage_${userId}`
    const usage = JSON.parse(localStorage.getItem(usageKey) || '{"reportsGenerated": 0}')
    
    usage.reportsGenerated = (usage.reportsGenerated || 0) + 1
    localStorage.setItem(usageKey, JSON.stringify(usage))
  }

  const getPostLoginRedirect = (): string => {
    if (!authState.user) return '/'
    
    const { subscriptionTier } = authState.user
    
    switch (subscriptionTier) {
      case 'standard':
        return '/analysis' // Standard users go to advanced form to generate their one report
      case 'pro':
      case 'enterprise':
        return '/dashboard' // Premium users go to dashboard
      case 'free':
      default:
        return '/' // Free users stay on homepage for onboarding
    }
  }

  const contextValue: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    hasPermission,
    isAdmin,
    canAccessPremium,
    getUsageStats,
    canGenerateReport,
    canSaveReport,
    incrementReportGeneration,
    getPostLoginRedirect
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}