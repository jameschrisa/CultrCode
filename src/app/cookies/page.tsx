'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart3, Shield, Eye, Users, CheckCircle, XCircle, Info } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState } from 'react'

export default function CookiePolicyPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false
  })

  const lastUpdated = "January 15, 2024"

  const cookieTypes = [
    {
      name: "Essential Cookies",
      icon: Shield,
      required: true,
      description: "These cookies are necessary for the website to function properly. They cannot be disabled as they are essential for core functionality.",
      examples: [
        "User authentication and session management",
        "Shopping cart and checkout processes", 
        "Security and fraud prevention",
        "Load balancing and performance"
      ],
      retention: "Session or up to 12 months",
      canDisable: false
    },
    {
      name: "Analytics Cookies", 
      icon: BarChart3,
      required: false,
      description: "These cookies help us understand how visitors interact with our website by collecting anonymous information about usage patterns.",
      examples: [
        "Page views and popular content",
        "User journey and navigation patterns",
        "Performance metrics and load times",
        "Feature usage and engagement data"
      ],
      retention: "Up to 24 months",
      canDisable: true,
      setting: "analytics"
    },
    {
      name: "Marketing Cookies",
      icon: Users, 
      required: false,
      description: "These cookies track visitors across websites to build profiles and display relevant advertisements and content.",
      examples: [
        "Targeted advertising campaigns",
        "Social media integration",
        "Cross-site tracking for remarketing",
        "Conversion tracking and attribution"
      ],
      retention: "Up to 12 months",
      canDisable: true,
      setting: "marketing"
    },
    {
      name: "Preference Cookies",
      icon: Settings,
      required: false, 
      description: "These cookies remember your choices and preferences to provide a more personalized experience.",
      examples: [
        "Language and region preferences",
        "Dashboard layout and customizations",
        "Theme and display settings",
        "Saved filters and search preferences"
      ],
      retention: "Up to 12 months", 
      canDisable: true,
      setting: "preferences"
    }
  ]

  const thirdPartyCookies = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      cookies: ["_ga", "_ga_*", "_gid"],
      retention: "Up to 24 months",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Stripe",
      purpose: "Payment processing and fraud prevention", 
      cookies: ["__stripe_mid", "__stripe_sid"],
      retention: "Up to 12 months",
      privacy: "https://stripe.com/privacy"
    },
    {
      service: "Intercom",
      purpose: "Customer support and messaging",
      cookies: ["intercom-*"],
      retention: "Up to 12 months", 
      privacy: "https://www.intercom.com/legal/privacy"
    }
  ]

  const handleCookieSettings = (setting: string, enabled: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [setting]: enabled
    }))
  }

  const acceptAllCookies = () => {
    setCookieSettings({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    })
  }

  const acceptEssentialOnly = () => {
    setCookieSettings({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10" style={{ animationDelay: '6s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Cookie
              <span className="gradient-text block">Policy</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Learn about how CultrCode uses cookies and similar technologies to enhance your experience and provide our cultural intelligence services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300">
                <Cookie className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-300">
                <CheckCircle className="w-4 h-4 mr-2" />
                GDPR Compliant
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              What Are Cookies?
            </h2>
          </motion.div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-6">
                    <Info className="w-8 h-8 text-accent-400" />
                  </div>
                  <p className="text-primary-300 leading-relaxed mb-4">
                    Cookies are small text files that websites store on your device when you visit them. They help websites remember information about your visit, making your next visit easier and the site more useful to you.
                  </p>
                  <p className="text-primary-300 leading-relaxed">
                    CultrCode uses cookies to provide essential functionality, improve performance, understand user behavior, and deliver personalized experiences within our cultural intelligence platform.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-200">Improve website functionality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-200">Remember your preferences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-200">Analyze website performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-200">Provide relevant content</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes. You can control most of these through your preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                          <type.icon className="w-4 h-4 text-accent-400" />
                        </div>
                        <span className="text-primary-50">{type.name}</span>
                      </div>
                      {type.required ? (
                        <span className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded text-xs font-medium">
                          Required
                        </span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleCookieSettings(type.setting!, !cookieSettings[type.setting as keyof typeof cookieSettings])}
                            className={`w-10 h-6 rounded-full transition-colors ${
                              cookieSettings[type.setting as keyof typeof cookieSettings]
                                ? 'bg-accent-500'
                                : 'bg-gray-600'
                            }`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                              cookieSettings[type.setting as keyof typeof cookieSettings]
                                ? 'translate-x-5'
                                : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-300 text-sm leading-relaxed mb-4">
                      {type.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-primary-50 font-medium text-sm mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-accent-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-primary-400 text-xs">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-3 border-t border-primary-700">
                        <p className="text-primary-400 text-xs">
                          <strong>Retention:</strong> {type.retention}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Third-Party Services
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              We work with trusted third-party services that may also set cookies to provide their functionality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thirdPartyCookies.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-50">{service.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-300 text-sm leading-relaxed mb-4">
                      {service.purpose}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-primary-50 font-medium text-sm mb-2">Cookie Names:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.cookies.map((cookie, cookieIndex) => (
                            <span key={cookieIndex} className="px-2 py-1 bg-primary-800/50 text-primary-300 rounded text-xs font-mono">
                              {cookie}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-primary-700 space-y-2">
                        <p className="text-primary-400 text-xs">
                          <strong>Retention:</strong> {service.retention}
                        </p>
                        <a 
                          href={service.privacy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-400 hover:text-accent-300 text-xs underline"
                        >
                          View Privacy Policy
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Controls */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              You have control over which cookies you accept. Update your preferences anytime.
            </p>
          </motion.div>

          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-50 mb-4">
                    Current Cookie Settings
                  </h3>
                  <p className="text-primary-300 mb-6">
                    Choose which types of cookies you&apos;re comfortable with us using.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-primary-800/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <type.icon className="w-5 h-5 text-accent-400" />
                        <span className="text-primary-50 font-medium">{type.name}</span>
                        {type.required && (
                          <span className="px-2 py-1 bg-accent-500/20 text-accent-300 rounded text-xs">
                            Required
                          </span>
                        )}
                      </div>
                      {type.canDisable ? (
                        cookieSettings[type.setting as keyof typeof cookieSettings] ? (
                          <CheckCircle className="w-5 h-5 text-success-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-error-400" />
                        )
                      ) : (
                        <CheckCircle className="w-5 h-5 text-success-400" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    onClick={acceptAllCookies}
                    className="px-8 py-3 bg-accent-500 hover:bg-accent-600"
                  >
                    Accept All Cookies
                  </Button>
                  <Button
                    onClick={acceptEssentialOnly}
                    variant="outline"
                    className="px-8 py-3 border-accent-400/50 hover:border-accent-400 text-accent-400 hover:text-accent-300"
                  >
                    Essential Only
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-primary-700">
                  <p className="text-primary-400 text-sm">
                    You can change these settings anytime by revisiting this page or through your browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Browser Controls */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Browser Cookie Controls
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Most browsers allow you to control cookies through their settings. Here&apos;s how to manage cookies in popular browsers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary-50">Desktop Browsers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Chrome:</h4>
                  <p className="text-primary-300 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Firefox:</h4>
                  <p className="text-primary-300 text-sm">Settings → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Safari:</h4>
                  <p className="text-primary-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Edge:</h4>
                  <p className="text-primary-300 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary-50">Mobile Browsers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Chrome Mobile:</h4>
                  <p className="text-primary-300 text-sm">Menu → Settings → Site Settings → Cookies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Safari Mobile:</h4>
                  <p className="text-primary-300 text-sm">Settings → Safari → Privacy & Security</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary-50 font-medium">Firefox Mobile:</h4>
                  <p className="text-primary-300 text-sm">Menu → Settings → Data Management</p>
                </div>
                <div className="pt-3 border-t border-primary-700">
                  <p className="text-primary-400 text-xs">
                    Note: Disabling certain cookies may limit website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}