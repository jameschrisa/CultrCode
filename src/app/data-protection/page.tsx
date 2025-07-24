'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users, Database, FileText, CheckCircle, AlertTriangle, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function DataProtectionPage() {
  const lastUpdated = "January 15, 2024"
  const effectiveDate = "January 15, 2024"

  const keyPrinciples = [
    {
      icon: Lock,
      title: "Data Minimization",
      description: "We only collect data that is necessary for providing our cultural intelligence services."
    },
    {
      icon: Shield,
      title: "Purpose Limitation", 
      description: "Your data is used only for the specific purposes we've clearly communicated to you."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect, how we use it, and who we share it with."
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have full control over your personal data, including access, correction, and deletion rights."
    },
    {
      icon: Database,
      title: "Data Security",
      description: "We implement industry-leading security measures to protect your information."
    },
    {
      icon: FileText,
      title: "Accountability",
      description: "We take responsibility for data protection and regularly audit our practices."
    }
  ]

  const dataTypes = [
    {
      category: "Account Information",
      items: [
        "Name and email address",
        "Company/organization name",
        "Subscription plan and billing information",
        "Account preferences and settings"
      ],
      purpose: "Account management, service delivery, billing"
    },
    {
      category: "Usage Data",
      items: [
        "Platform interactions and feature usage",
        "Search queries and filters applied",
        "Report generation and export activities",
        "Session duration and frequency"
      ],
      purpose: "Service improvement, personalization, analytics"
    },
    {
      category: "Cultural Intelligence Data",
      items: [
        "Audience segments you create or view",
        "Trends you track or analyze",
        "Communities you explore",
        "Saved reports and insights"
      ],
      purpose: "Service delivery, personalized recommendations"
    },
    {
      category: "Technical Information",
      items: [
        "IP address and device information",
        "Browser type and version",
        "Operating system",
        "Referral URLs"
      ],
      purpose: "Security, performance optimization, fraud prevention"
    }
  ]

  const userRights = [
    {
      right: "Right of Access",
      description: "Request a copy of all personal data we hold about you.",
      action: "Contact support to request your data export"
    },
    {
      right: "Right to Rectification",
      description: "Correct any inaccurate or incomplete personal data.",
      action: "Update your profile or contact support"
    },
    {
      right: "Right to Erasure",
      description: "Request deletion of your personal data (&quot;right to be forgotten&quot;).",
      action: "Delete your account or contact support"
    },
    {
      right: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format.",
      action: "Export your data from account settings"
    },
    {
      right: "Right to Object",
      description: "Object to processing of your data for specific purposes.",
      action: "Adjust privacy settings or contact support"
    },
    {
      right: "Right to Restrict Processing",
      description: "Request limitation of how we process your data.",
      action: "Contact support to discuss restrictions"
    }
  ]

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
              Data
              <span className="gradient-text block">Protection</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy and data protection are fundamental to how we operate. Learn how CultrCode collects, uses, and protects your personal information.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300">
                <FileText className="w-4 h-4 mr-2" />
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

      {/* Key Principles */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Our Data Protection Principles
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              We follow these core principles in everything we do with your personal data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-4">
                      <principle.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-50 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              What Data We Collect
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide you with our cultural intelligence platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-50">{dataType.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {dataType.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                          <span className="text-primary-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-primary-700">
                      <p className="text-primary-400 text-xs">
                        <strong>Purpose:</strong> {dataType.purpose}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Your Data Protection Rights
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Under GDPR and other privacy laws, you have several rights regarding your personal data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary-50 mb-3">
                      {right.right}
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed mb-4">
                      {right.description}
                    </p>
                    <div className="pt-4 border-t border-primary-700">
                      <p className="text-accent-400 text-xs font-medium">
                        How to exercise: {right.action}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              How We Protect Your Data
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-accent-400" />
                  <span className="text-primary-50">Technical Safeguards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">End-to-end encryption for data in transit</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">AES-256 encryption for data at rest</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Multi-factor authentication</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Regular security audits and penetration testing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-primary-50">Organizational Measures</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Staff training on data protection</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Access controls and principle of least privilege</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Data processing agreements with third parties</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5" />
                  <span className="text-primary-300 text-sm">Incident response and breach notification procedures</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-accent-400" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Questions About Data Protection?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Our Data Protection Officer is here to help you exercise your rights and answer any privacy questions.
                </p>
                
                <div className="space-y-4">
                  <div className="text-accent-400 font-medium text-lg">
                    privacy@cultrcode.com
                  </div>
                  <div className="text-primary-400 text-sm">
                    We respond to all privacy requests within 30 days
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors">
                      Contact Support
                    </button>
                  </Link>
                  <Link href="/privacy">
                    <button className="px-8 py-3 border border-accent-400/50 hover:border-accent-400 text-accent-400 hover:text-accent-300 rounded-lg font-medium transition-colors">
                      View Privacy Policy
                    </button>
                  </Link>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}