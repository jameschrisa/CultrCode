'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, AlertTriangle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Permission } from '@/types/auth'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requiredPermission?: Permission;
  fallbackUrl?: string;
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  requiredPermission,
  fallbackUrl = '/login' 
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, hasPermission, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && requireAuth && !isAuthenticated) {
      router.push(fallbackUrl)
    }
  }, [isLoading, requireAuth, isAuthenticated, router, fallbackUrl])

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-primary-300">Loading...</p>
        </div>
      </div>
    )
  }

  // Check if authentication is required
  if (requireAuth && !isAuthenticated) {
    return null // Will redirect via useEffect
  }

  // Check if specific permission is required
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto text-center space-y-6"
        >
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary-50">Access Denied</h1>
            <p className="text-primary-300">
              You don&apos;t have permission to access this feature.
            </p>
            {requiredPermission === 'view_premium_reports' && (
              <p className="text-sm text-primary-400">
                Upgrade to a premium plan to unlock this functionality.
              </p>
            )}
            {requiredPermission === 'admin_access' && (
              <p className="text-sm text-primary-400">
                This area is restricted to administrators only.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="outline">
                Go Home
              </Button>
            </Link>
            {requiredPermission === 'view_premium_reports' && (
              <Link href="/pricing">
                <Button variant="primary">
                  View Pricing
                </Button>
              </Link>
            )}
          </div>

          {user && (
            <div className="pt-4 border-t border-primary-700/50">
              <p className="text-sm text-primary-400">
                Logged in as: <span className="text-primary-300">{user.email}</span>
              </p>
              <p className="text-xs text-primary-500">
                Current plan: {user.subscriptionTier}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    )
  }

  // Show admin badge for admin users
  const showAdminBadge = requiredPermission === 'admin_access' && hasPermission('admin_access')

  return (
    <div className="relative">
      {showAdminBadge && (
        <div className="fixed top-4 right-4 z-50">
          <div className="flex items-center px-3 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Admin Mode
          </div>
        </div>
      )}
      {children}
    </div>
  )
}