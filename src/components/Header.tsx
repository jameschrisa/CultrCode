'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { ChevronLeft, Menu, X, ChevronDown, Target, TrendingUp, Users, Star, Bell, Zap } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth, useUser, UserButton } from '@clerk/nextjs'
import { Crown, ArrowUpRight } from 'lucide-react'
import { getSubscriptionAccess } from '@/lib/subscription'

interface HeaderProps {
  showBackButton?: boolean
  onBack?: () => void
}

export function Header({ showBackButton = false, onBack }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const [notificationPosition, setNotificationPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const notificationRef = useRef<HTMLButtonElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  
  // Get subscription access information
  const subscriptionAccess = user ? getSubscriptionAccess(user) : null
  
  // Helper function to check if user can access premium features
  const canAccessPremium = () => {
    return subscriptionAccess?.hasAdvancedFeatures || false
  }
  
  // Check if user has any paid subscription (Community Explorer or higher)
  const hasPaidSubscription = () => {
    return subscriptionAccess && subscriptionAccess.displayName !== 'Free'
  }

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setSolutionsOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false)
    }, 150) // Small delay to allow mouse to move to dropdown
  }

  const handleNotificationMouseEnter = () => {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current)
      notificationTimeoutRef.current = null
    }
    setNotificationsOpen(true)
  }

  const handleNotificationMouseLeave = () => {
    notificationTimeoutRef.current = setTimeout(() => {
      setNotificationsOpen(false)
    }, 150)
  }

  useEffect(() => {
    const updatePosition = () => {
      if (solutionsOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left
        })
      }
      if (notificationsOpen && notificationRef.current) {
        const rect = notificationRef.current.getBoundingClientRect()
        setNotificationPosition({
          top: rect.bottom + 8,
          left: rect.right - 320 // Align dropdown to right edge
        })
      }
    }

    updatePosition()

    if (solutionsOpen || notificationsOpen) {
      window.addEventListener('scroll', updatePosition, { passive: true })
      window.addEventListener('resize', updatePosition, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', updatePosition)
        window.removeEventListener('resize', updatePosition)
      }
    }
  }, [solutionsOpen, notificationsOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current)
      }
    }
  }, [])

  const isPremiumUser = hasPaidSubscription()
  
  // State for notifications
  const [notifications, setNotifications] = useState<any[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  
  // Fetch notifications for premium users
  useEffect(() => {
    if (isPremiumUser && isSignedIn) {
      fetchNotifications()
      fetchUnreadCount()
    }
  }, [isPremiumUser, isSignedIn])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications')
      if (response.ok) {
        const data = await response.json()
        const formattedNotifications = data.map((notification: any) => ({
          id: notification.id,
          type: notification.type,
          title: notification.title,
          message: notification.message,
          time: formatRelativeTime(notification.created_at),
          unread: !notification.is_read,
          icon: getNotificationIcon(notification.type)
        }))
        setNotifications(formattedNotifications)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  const fetchUnreadCount = async () => {
    try {
      const response = await fetch('/api/notifications/count')
      if (response.ok) {
        const data = await response.json()
        setUnreadCount(data.count)
      }
    } catch (error) {
      console.error('Error fetching unread count:', error)
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'trend':
        return <TrendingUp className="w-4 h-4" />
      case 'community':
        return <Users className="w-4 h-4" />
      case 'segment':
        return <Target className="w-4 h-4" />
      default:
        return <Zap className="w-4 h-4" />
    }
  }

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hours ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return '1 day ago'
    if (diffInDays < 7) return `${diffInDays} days ago`
    
    return date.toLocaleDateString()
  }

  const handleNotificationClick = async (notificationId: number, isUnread: boolean) => {
    if (isUnread) {
      try {
        await fetch('/api/notifications/mark-read', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ notificationId })
        })
        
        // Update local state
        setNotifications(prev => prev.map(n => 
          n.id === notificationId ? { ...n, unread: false } : n
        ))
        setUnreadCount(prev => Math.max(0, prev - 1))
      } catch (error) {
        console.error('Error marking notification as read:', error)
      }
    }
  }
  
  const solutions = [
    {
      name: 'CultrCode Segments',
      description: '48 precision audience segments for creator brands',
      icon: <Target className="w-5 h-5" />,
      href: isPremiumUser ? '/segments' : '/solutions',
      badge: isPremiumUser ? 'Active' : 'Free'
    },
    {
      name: 'Micro-Communities',
      description: 'Discover 135+ niche communities across 8 categories',
      icon: <Users className="w-5 h-5" />,
      href: isPremiumUser ? '/communities' : '/solutions',
      badge: isPremiumUser ? 'Active' : 'Premium'
    },
    {
      name: 'Generated Personas',
      description: 'AI-powered psychographic personas from your audience data',
      icon: <Star className="w-5 h-5" />,
      href: isPremiumUser ? '/personas' : '/solutions',
      badge: isPremiumUser ? 'Active' : 'Premium'
    },
    {
      name: 'Emerging Trends Tracker',
      description: 'Real-time cultural movement and trend intelligence',
      icon: <TrendingUp className="w-5 h-5" />,
      href: isPremiumUser ? '/trends' : '/solutions',
      badge: isPremiumUser ? 'Active' : 'Premium'
    }
  ]

  const handleGetStarted = () => {
    router.push('/')
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.back()
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isPremiumUser) {
      // For premium users, set flag to stay on main page and navigate there
      sessionStorage.setItem('stay_on_main', 'true')
      router.push('/')
    } else {
      // For non-premium users, use default behavior
      router.push('/')
    }
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-[100] glass-card border-b border-white/10 lg:hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
            )}
            <a href="/" onClick={handleLogoClick} className="text-xl font-bold gradient-text cursor-pointer">CultrCode™</a>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card border-t border-white/10 p-4 space-y-3"
            >
              {/* Mobile Discover and Dashboard for Premium Users */}
              {isPremiumUser && (
                <>
                  <Link href="/" onClick={(e) => {
                    e.preventDefault()
                    sessionStorage.setItem('stay_on_main', 'true')
                    router.push('/')
                    setMobileMenuOpen(false)
                  }}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Discover
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Dashboard
                    </Button>
                  </Link>
                </>
              )}
              
              {/* Mobile Solutions/Tools */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary-300 px-3 py-2">
                  {isPremiumUser ? 'Tools' : 'Solutions'}
                </div>
                {solutions.map((solution, index) => (
                  <Link key={index} href={solution.href}>
                    <Button variant="ghost" size="sm" className="w-full justify-start pl-6">
                      <div className="flex items-center space-x-2">
                        {solution.icon}
                        <span>{solution.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          solution.badge === 'Free' ? 'bg-success-500/20 text-success-400' :
                          solution.badge === 'Active' ? 'bg-green-500/20 text-green-400' :
                          solution.badge === 'Premium' ? 'bg-accent-500/20 text-accent-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          {solution.badge}
                        </span>
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
              
              {!isPremiumUser && (
                <div className="border-t border-white/10 pt-3">
                  <Link href="/how-it-works">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      How it works
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Pricing
                    </Button>
                  </Link>
                </div>
              )}
              {!isSignedIn && (
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <Link href="/sign-in">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button variant="primary" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
              {isSignedIn && (
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-4">
                    {/* Mobile Notification Bell for Paid Users */}
                    {isPremiumUser && (
                      <button className="relative p-2 text-primary-300 hover:text-accent-300 transition-colors">
                        <Bell className="w-5 h-5" />
                        {unreadCount > 0 && (
                          <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                            {unreadCount}
                          </span>
                        )}
                      </button>
                    )}
                    
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10",
                          userButtonPopoverCard: "bg-primary-800 border-primary-600",
                          userButtonPopoverActionButton: "text-primary-200 hover:bg-primary-700"
                        }
                      }}
                    >
                      <UserButton.MenuItems>
                        <UserButton.Action 
                          label={`Plan: ${subscriptionAccess?.displayName || 'Free'}`}
                          labelIcon={<Crown size={16} />}
                          onClick={() => {}}
                        />
                        {subscriptionAccess && !subscriptionAccess.hasAdvancedFeatures && (
                          <UserButton.Action 
                            label="Upgrade Account"
                            labelIcon={<ArrowUpRight size={16} />}
                            onClick={() => router.push('/pricing')}
                          />
                        )}
                      </UserButton.MenuItems>
                    </UserButton>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block sticky top-0 z-[100] glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {showBackButton && (
                <Button variant="ghost" size="sm" onClick={handleBack}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              )}
              <div className="flex items-center space-x-3">
                <a href="/" onClick={handleLogoClick} className="text-2xl font-bold gradient-text cursor-pointer">CultrCode™</a>
                <div className="text-sm text-primary-400 tracking-wide">Precision Audience Intelligence</div>
              </div>
            </div>
            <nav className="flex items-center space-x-8">
              {/* Discover and Dashboard Links for Premium Users */}
              {isPremiumUser && (
                <>
                  <Link href="/" onClick={(e) => {
                    e.preventDefault()
                    sessionStorage.setItem('stay_on_main', 'true')
                    router.push('/')
                  }} className="text-primary-300 hover:text-accent-300 transition-colors font-medium">
                    Discover
                  </Link>
                  <Link href="/dashboard" className="text-primary-300 hover:text-accent-300 transition-colors font-medium">
                    Dashboard
                  </Link>
                </>
              )}
              
              {/* Solutions/Tools Dropdown */}
              <div className="relative"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>
                <button 
                  ref={buttonRef}
                  className="flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium"
                >
                  {isPremiumUser ? 'Tools' : 'Solutions'}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              {/* Portal-based dropdown */}
              {typeof window !== 'undefined' && createPortal(
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed w-80 bg-primary-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-[9999]"
                      style={{ 
                        top: dropdownPosition.top,
                        left: dropdownPosition.left
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                        <div className="p-4 space-y-2">
                          {solutions.map((solution, index) => (
                            <Link key={index} href={solution.href}>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="p-2 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors">
                                  {solution.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-primary-100 group-hover:text-white transition-colors">
                                      {solution.name}
                                    </h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      solution.badge === 'Free' ? 'bg-success-500/20 text-success-400' :
                                      solution.badge === 'Active' ? 'bg-green-500/20 text-green-400' :
                                      solution.badge === 'Premium' ? 'bg-accent-500/20 text-accent-400' :
                                      'bg-orange-500/20 text-orange-400'
                                    }`}>
                                      {solution.badge}
                                    </span>
                                  </div>
                                  <p className="text-sm text-primary-400 group-hover:text-primary-300 transition-colors">
                                    {solution.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                  )}
                </AnimatePresence>,
                document.body
              )}

              {/* Notification Dropdown Portal */}
              {typeof window !== 'undefined' && createPortal(
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed w-80 bg-primary-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-[9999]"
                      style={{ 
                        top: notificationPosition.top,
                        left: notificationPosition.left
                      }}
                      onMouseEnter={handleNotificationMouseEnter}
                      onMouseLeave={handleNotificationMouseLeave}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-primary-100">Notifications</h3>
                          {unreadCount > 0 && (
                            <span className="text-xs text-primary-400">
                              {unreadCount} unread
                            </span>
                          )}
                        </div>
                        
                        {notifications.length > 0 ? (
                          <div className="space-y-3 max-h-96 overflow-y-auto">
                            {notifications.map((notification) => (
                              <div 
                                key={notification.id} 
                                className={`p-3 rounded-lg border transition-colors hover:bg-white/5 cursor-pointer ${
                                  notification.unread 
                                    ? 'bg-accent-500/10 border-accent-500/20' 
                                    : 'bg-primary-700/50 border-primary-600/50'
                                }`}
                                onClick={() => handleNotificationClick(notification.id, notification.unread)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`p-1.5 rounded-full ${
                                    notification.type === 'trend' ? 'bg-blue-500/20 text-blue-400' :
                                    notification.type === 'community' ? 'bg-green-500/20 text-green-400' :
                                    notification.type === 'segment' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-orange-500/20 text-orange-400'
                                  }`}>
                                    {notification.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h4 className="font-medium text-primary-100 text-sm truncate">
                                        {notification.title}
                                      </h4>
                                      {notification.unread && (
                                        <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 ml-2" />
                                      )}
                                    </div>
                                    <p className="text-sm text-primary-300 leading-relaxed mb-2">
                                      {notification.message}
                                    </p>
                                    <span className="text-xs text-primary-400">
                                      {notification.time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-6">
                            <Bell className="w-8 h-8 text-primary-400 mx-auto mb-2 opacity-50" />
                            <p className="text-sm text-primary-400">No notifications</p>
                          </div>
                        )}
                        
                        {notifications.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <button className="w-full text-center text-sm text-accent-400 hover:text-accent-300 transition-colors">
                              View All Notifications
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>,
                document.body
              )}
              
              {!isPremiumUser && (
                <>
                  <Link href="/how-it-works" className="text-primary-300 hover:text-accent-300 transition-colors font-medium">How it works</Link>
                  <Link href="/pricing" className="text-primary-300 hover:text-accent-300 transition-colors font-medium">Pricing</Link>
                </>
              )}
              {isSignedIn ? (
                <div className="flex items-center space-x-3">
                  {/* Notification Bell for Paid Users */}
                  {isPremiumUser && (
                    <div className="relative"
                         onMouseEnter={handleNotificationMouseEnter}
                         onMouseLeave={handleNotificationMouseLeave}>
                      <button 
                        ref={notificationRef}
                        className="relative p-2 text-primary-300 hover:text-accent-300 transition-colors"
                      >
                        <Bell className="w-5 h-5" />
                        {unreadCount > 0 && (
                          <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                            {unreadCount}
                          </span>
                        )}
                      </button>
                    </div>
                  )}
                  
                  <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                      userButtonPopoverCard: "bg-primary-800/95 backdrop-blur-xl border-primary-600",
                      userButtonPopoverActionButton: "text-primary-200 hover:bg-primary-700",
                      userButtonPopoverActionButtonText: "text-primary-200"
                    }
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action 
                      label={`Plan: ${subscriptionAccess?.displayName || 'Free'}`}
                      labelIcon={<Crown size={16} />}
                      onClick={() => {}}
                    />
                    {subscriptionAccess && !subscriptionAccess.hasAdvancedFeatures && (
                      <UserButton.Action 
                        label="Upgrade Account"
                        labelIcon={<ArrowUpRight size={16} />}
                        onClick={() => router.push('/pricing')}
                      />
                    )}
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <div className="flex items-center bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <Link href="/sign-in">
                    <Button variant="ghost" size="sm" className="rounded-none border-0 hover:bg-white/10">
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
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}