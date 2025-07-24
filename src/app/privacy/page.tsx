'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Users, Database, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2024"

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Information You Provide",
          text: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This includes your name, email address, company information, and any content you submit through our platform."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about how you use our services, including your interactions with cultural trends, micro-communities, and segmentation tools. This helps us improve our AI recommendations and platform performance."
        },
        {
          subtitle: "Device Information",
          text: "We collect information about the devices you use to access CultrCode, including IP addresses, browser type, mobile device identifiers, and operating system information."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our cultural intelligence platform, including delivering personalized audience insights and trend predictions."
        },
        {
          subtitle: "AI Training",
          text: "Your usage patterns help train our AI models to better understand cultural trends and micro-communities. All data used for AI training is anonymized and aggregated."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to send you service-related communications, including security alerts, product updates, and insights newsletters (which you can opt out of at any time)."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Users,
      content: [
        {
          subtitle: "We Do Not Sell Your Data",
          text: "CultrCode does not sell, rent, or trade your personal information to third parties. Your cultural intelligence data remains confidential and is used solely to improve your experience."
        },
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted service providers who help us operate our platform, such as cloud hosting providers, analytics services, and customer support tools. These providers are bound by strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, property, or safety."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmitted to and from CultrCode is encrypted using industry-standard TLS encryption. Your data is stored in encrypted databases with multiple layers of security."
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls to ensure only authorized personnel can access your data. All access is logged and monitored for security purposes."
        },
        {
          subtitle: "Regular Audits",
          text: "Our security practices are regularly audited by independent third parties to ensure we maintain the highest standards of data protection."
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        {
          subtitle: "Access and Portability",
          text: "You can access, update, or export your personal information at any time through your account settings or by contacting our support team."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request deletion of your account and associated data at any time. We will delete your information within 30 days of your request, except where required to retain it by law."
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or updating your preferences in your account settings."
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: Eye,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to provide basic functionality, such as remembering your login status and preferences. These cookies are necessary for the platform to function properly."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics cookies to understand how users interact with our platform, helping us improve the user experience and optimize our cultural intelligence algorithms."
        },
        {
          subtitle: "Cookie Control",
          text: "You can control cookie settings through your browser preferences. However, disabling certain cookies may limit some functionality of our platform."
        }
      ]
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
              Privacy
              <span className="gradient-text block">Policy</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is fundamental to how we build and operate CultrCode. This policy explains how we collect, use, and protect your information.
            </p>
            
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Privacy at a Glance
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Here&apos;s what you need to know about how CultrCode handles your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "We Don't Sell Your Data",
                description: "Your information is never sold or traded to third parties. Your cultural intelligence insights remain confidential."
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "All data is encrypted in transit and at rest. We use enterprise-grade security measures to protect your information."
              },
              {
                icon: Users,
                title: "You're in Control",
                description: "Access, update, or delete your data anytime. Full transparency and control over your privacy settings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-50 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-primary-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                        <section.icon className="w-4 h-4 text-accent-400" />
                      </div>
                      <span className="text-2xl text-primary-50">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <h4 className="text-lg font-semibold text-primary-50">
                          {item.subtitle}
                        </h4>
                        <p className="text-primary-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-primary-50 mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-primary-300 mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  we&apos;re here to help. Contact our privacy team directly.
                </p>
                <div className="space-y-2">
                  <div className="text-accent-400 font-medium">
                    privacy@cultrcode.com
                  </div>
                  <div className="text-primary-400 text-sm">
                    We typically respond within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}