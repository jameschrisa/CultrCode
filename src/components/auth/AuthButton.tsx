'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { LogIn, LogOut, User, Crown, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export function AuthButton() {
  const { isSignedIn, user, logout, isAdmin, canAccessPremium } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (showDropdown && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.right - 256 // 256px is w-64
        })
      }
    }

    updatePosition()

    if (showDropdown) {
      window.addEventListener('scroll', updatePosition, { passive: true })
      window.addEventListener('resize', updatePosition, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', updatePosition)
        window.removeEventListener('resize', updatePosition)
      }
    }
  }, [showDropdown])

  if (!isSignedIn) {
    return (
      <div className="flex items-center bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <Link href="/sign-in">
          <Button variant="ghost" size="sm" className="rounded-none border-0 hover:bg-white/10">
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </Link>
        <div className="w-px h-8 bg-white/10" />
        <Link href="/sign-up">
          <Button variant="primary" size="sm" className="rounded-none border-0">
            Get Started
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="sm"
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2"
      >
        <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-primary-900" />
        </div>
        <div className="hidden md:block">
          <div className="text-sm font-medium text-primary-100">{user?.name}</div>
          <div className="text-xs text-primary-400 flex items-center">
            {isAdmin() && <Crown className="w-3 h-3 mr-1 text-accent-400" />}
            {user?.subscriptionTier === 'enterprise' ? 'Enterprise' :
             user?.subscriptionTier === 'pro' ? 'Pro' :
             user?.subscriptionTier === 'standard' ? 'Standard' : 'Free'}
          </div>
        </div>
      </Button>

      {/* Portal-based dropdown */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed w-64 bg-primary-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-[9999]"
              style={{ 
                top: dropdownPosition.top,
                left: dropdownPosition.left
              }}
              onMouseLeave={() => setShowDropdown(false)}
            >
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-900" />
                </div>
                <div>
                  <div className="font-medium text-primary-100">{user?.name}</div>
                  <div className="text-sm text-primary-400">{user?.email}</div>
                  <div className="text-xs text-accent-400 flex items-center mt-1">
                    {isAdmin() && <Crown className="w-3 h-3 mr-1" />}
                    {user?.subscriptionTier ? user.subscriptionTier.charAt(0).toUpperCase() + user.subscriptionTier.slice(1) : 'Free'} Plan
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2">
              {canAccessPremium() && (
                <div className="px-3 py-2 mb-2 bg-accent-500/10 rounded-lg border border-accent-500/20">
                  <div className="flex items-center text-accent-300 text-sm font-medium">
                    <Crown className="w-4 h-4 mr-2" />
                    Premium Access Active
                  </div>
                </div>
              )}

              {isAdmin() && (
                <Button variant="ghost" size="sm" className="w-full justify-start mb-1">
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Panel
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  logout()
                  setShowDropdown(false)
                }}
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}