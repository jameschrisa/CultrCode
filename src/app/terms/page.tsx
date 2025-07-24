'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, AlertTriangle, CheckCircle, Scale, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  const lastUpdated = "January 15, 2024"
  const effectiveDate = "January 15, 2024"

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        {
          text: "By accessing or using CultrCode's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          text: "These terms apply to all users of CultrCode, including creators, brands, agencies, and enterprise customers. Different subscription tiers may have additional terms as outlined in your specific plan."
        }
      ]
    },
    {
      id: "service-description",
      title: "Service Description",
      icon: FileText,
      content: [
        {
          text: "CultrCode provides AI-powered cultural intelligence services, including audience segmentation, trend analysis, micro-community discovery, and nano-influencer insights. Our platform is designed specifically for creator brands and challenger startups."
        },
        {
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We are not liable for any modification, suspension, or discontinuation of our services."
        }
      ]
    },
    {
      id: "user-accounts",
      title: "User Accounts and Responsibilities",
      icon: Users,
      content: [
        {
          subtitle: "Account Creation",
          text: "You must provide accurate, current, and complete information when creating your account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use CultrCode only for lawful purposes and in accordance with these terms. You may not use our services to harm, harass, or infringe upon the rights of others, or to engage in any illegal activities."
        },
        {
          subtitle: "Data Accuracy",
          text: "While we strive to provide accurate cultural intelligence data, you acknowledge that insights are based on AI analysis and should be used as guidance rather than absolute truth. You are responsible for validating insights before making business decisions."
        }
      ]
    },
    {
      id: "subscription-billing",
      title: "Subscription and Billing",
      icon: Scale,
      content: [
        {
          subtitle: "Free and Paid Plans",
          text: "CultrCode offers both free and paid subscription plans. Free plans have limited features and usage. Paid plans provide full access to our cultural intelligence platform with different tiers of features and support."
        },
        {
          subtitle: "Billing Terms",
          text: "Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as outlined in our refund policy. You authorize us to charge your payment method for all applicable fees."
        },
        {
          subtitle: "Cancellation",
          text: "You may cancel your subscription at any time. Cancellations take effect at the end of your current billing period. You will continue to have access to paid features until the end of your billing period."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: [
        {
          subtitle: "CultrCode IP",
          text: "The CultrCode platform, including its software, algorithms, data, and content, is protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of our services without explicit written permission."
        },
        {
          subtitle: "Your Content",
          text: "You retain ownership of any content you submit to CultrCode. By using our services, you grant us a limited license to process and analyze your content to provide our services and improve our algorithms."
        },
        {
          subtitle: "Third-Party Content",
          text: "Our platform may include content from third-party sources. This content is provided for informational purposes only and does not constitute endorsement by CultrCode."
        }
      ]
    },
    {
      id: "limitations",
      title: "Limitations and Disclaimers",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Availability",
          text: "While we strive for 99.9% uptime, we do not guarantee that our services will be available at all times. We may experience downtime for maintenance, updates, or due to factors beyond our control."
        },
        {
          subtitle: "Data Accuracy",
          text: "Cultural intelligence insights are based on AI analysis of available data. While we use advanced algorithms, we do not guarantee the accuracy, completeness, or reliability of any insights or predictions."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, CultrCode shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination",
      icon: AlertTriangle,
      content: [
        {
          text: "Either party may terminate these terms at any time. We reserve the right to suspend or terminate your account if you violate these terms or engage in activities that may harm our services or other users."
        },
        {
          text: "Upon termination, your right to use our services will cease immediately. We may delete your account and data, subject to our data retention policies and applicable laws."
        }
      ]
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: FileText,
      content: [
        {
          text: "We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms."
        },
        {
          text: "If you disagree with any changes, you may terminate your account and discontinue use of our services."
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
              Terms of
              <span className="gradient-text block">Service</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of CultrCode&apos;s cultural intelligence platform. 
              Please read them carefully before using our services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300">
                <FileText className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-300">
                <CheckCircle className="w-4 h-4 mr-2" />
                Effective: {effectiveDate}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Key Terms Summary
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Here are the most important points about using CultrCode.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Fair Use Policy",
                description: "Use CultrCode for lawful business purposes. Don't abuse our systems or harm other users."
              },
              {
                icon: Scale,
                title: "Transparent Billing",
                description: "Clear pricing with no hidden fees. Cancel anytime. Free plan available with basic features."
              },
              {
                icon: Shield,
                title: "IP Protection",
                description: "We respect your content ownership. You retain rights to your data while we protect our algorithms."
              },
              {
                icon: AlertTriangle,
                title: "Service Limits",
                description: "AI insights are guidance, not guarantees. Validate insights before making major business decisions."
              },
              {
                icon: Users,
                title: "Account Security",
                description: "You're responsible for account security. Keep credentials safe and report suspicious activity."
              },
              {
                icon: FileText,
                title: "Terms Updates",
                description: "We may update terms occasionally. We'll notify you of significant changes via email."
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
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-50 mb-3">
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

      {/* Detailed Terms */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-50 text-center mb-6">
              Complete Terms and Conditions
            </h2>
            <p className="text-primary-300 text-center">
              Please read the full terms below for complete details about using CultrCode.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                        <section.icon className="w-4 h-4 text-accent-400" />
                      </div>
                      <span className="text-xl text-primary-50">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        {'subtitle' in item && item.subtitle && (
                          <h4 className="text-lg font-semibold text-primary-50">
                            {'subtitle' in item ? item.subtitle : ''}
                          </h4>
                        )}
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-50 mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-primary-300 mb-6 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <div className="space-y-2">
                  <div className="text-accent-400 font-medium">
                    legal@cultrcode.com
                  </div>
                  <div className="text-primary-400 text-sm">
                    CultrCode Inc. • San Francisco, CA
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