'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Eye, EyeOff, UserPlus, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useAuth } from '@/contexts/AuthContext'
import { RegisterData } from '@/types/auth'
import Link from 'next/link'

interface RegisterFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

export function RegisterForm({ onSuccess, redirectTo }: RegisterFormProps) {
  const { register, isLoading } = useAuth()
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!formData.password) return 'Password is required'
    if (formData.password.length < 6) return 'Password must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email'
    
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    const success = await register(formData)
    
    if (success) {
      onSuccess?.()
      if (redirectTo) {
        window.location.href = redirectTo
      }
    } else {
      setError('Registration failed. Email may already be in use.')
    }
  }

  const handleChange = (field: keyof RegisterData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    if (error) setError(null)
  }

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: '', color: '' }
    if (password.length < 6) return { strength: 1, label: 'Weak', color: 'text-red-400' }
    if (password.length < 10) return { strength: 2, label: 'Medium', color: 'text-orange-400' }
    return { strength: 3, label: 'Strong', color: 'text-success-400' }
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-0 backdrop-blur-xl bg-primary-900/90">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-primary-50 mb-2">
            Create Account
          </CardTitle>
          <p className="text-primary-300">
            Join CultrCode to unlock market intelligence
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
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
                <label className="text-sm font-medium text-primary-200">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-700/50 rounded-xl text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-200">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="email"
                    value={formData.email}
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
                    value={formData.password}
                    onChange={handleChange('password')}
                    className="w-full pl-10 pr-12 py-3 bg-primary-800/50 border border-primary-700/50 rounded-xl text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Create a password"
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
                {formData.password && (
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-6 h-1 rounded-full ${
                            level <= passwordStrength.strength
                              ? passwordStrength.strength === 1
                                ? 'bg-red-400'
                                : passwordStrength.strength === 2
                                ? 'bg-orange-400'
                                : 'bg-success-400'
                              : 'bg-primary-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={passwordStrength.color}>{passwordStrength.label}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-200">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    className="w-full pl-10 pr-12 py-3 bg-primary-800/50 border border-primary-700/50 rounded-xl text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && (
                  <div className="flex items-center space-x-2 text-sm">
                    {passwordsMatch ? (
                      <div className="flex items-center text-success-400">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Passwords match
                      </div>
                    ) : (
                      <div className="flex items-center text-red-400">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Passwords do not match
                      </div>
                    )}
                  </div>
                )}
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
                  Creating account...
                </div>
              ) : (
                <div className="flex items-center">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create Account
                </div>
              )}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-primary-700/50">
            <p className="text-primary-400">
              Already have an account?{' '}
              <Link href="/login" className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}