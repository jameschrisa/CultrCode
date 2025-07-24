'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useAuth } from '@/contexts/AuthContext'
import { LoginCredentials } from '@/types/auth'
import Link from 'next/link'

interface LoginFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

export function LoginForm({ onSuccess, redirectTo }: LoginFormProps) {
  const { login, isLoading, getPostLoginRedirect } = useAuth()
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields')
      return
    }

    const result = await login(credentials)
    
    if (result.success) {
      onSuccess?.()
      // Use provided redirectTo or the one from login result
      const targetUrl = redirectTo || result.redirectUrl || '/'
      window.location.href = targetUrl
    } else {
      setError('Invalid email or password')
    }
  }

  const handleChange = (field: keyof LoginCredentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    if (error) setError(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-0 backdrop-blur-xl bg-primary-900/90">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-primary-50 mb-2">
            Welcome Back
          </CardTitle>
          <p className="text-primary-300">
            Sign in to access your CultrCode dashboard
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Demo Credentials */}
          <div className="p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
            <h4 className="font-semibold text-accent-300 mb-2">Demo Credentials</h4>
            <div className="text-sm text-primary-300 space-y-1">
              <div><strong>Admin:</strong> admin@cultrcode.com / admin123</div>
              <div><strong>Free User:</strong> user@cultrcode.com / user123</div>
              <div><strong>Standard:</strong> standard@cultrcode.com / standard123</div>
              <div><strong>Premium:</strong> premium@cultrcode.com / premium123</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-200">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="email"
                    value={credentials.email}
                    onChange={handleChange('email')}
                    className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-700/50 rounded-xl text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-200">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={handleChange('password')}
                    className="w-full pl-10 pr-12 py-3 bg-primary-800/50 border border-primary-700/50 rounded-xl text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-primary-200 border-t-transparent rounded-full animate-spin mr-2" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center">
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </div>
              )}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-primary-700/50">
            <p className="text-primary-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}