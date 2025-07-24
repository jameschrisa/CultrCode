'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'getting-started', name: 'Getting Started', count: 6 },
    { id: 'features', name: 'Features & Tools', count: 8 },
    { id: 'billing', name: 'Billing & Plans', count: 5 },
    { id: 'technical', name: 'Technical', count: 3 },
    { id: 'data', name: 'Data & Privacy', count: 2 }
  ]

  const faqs = [
    {
      category: 'getting-started',
      question: 'What is CultrCode and how does it work?',
      answer: 'CultrCode is an AI-powered cultural intelligence platform that helps creator brands and challenger startups identify their perfect micro-audiences. Our platform analyzes 500M+ cultural data points to predict trends, discover emerging communities, and generate detailed psychographic personas before your competitors.'
    },
    {
      category: 'getting-started',
      question: 'How quickly can I get started?',
      answer: 'You can start using CultrCode immediately with our free plan. Simply create an account, and you&apos;ll have access to basic audience discovery tools within minutes. Premium features are available instantly upon subscription.'
    },
    {
      category: 'getting-started',
      question: 'Do I need technical knowledge to use CultrCode?',
      answer: 'Not at all! CultrCode is designed for creators and brands, not developers. Our mobile-first interface is intuitive and requires no technical expertise. We provide step-by-step guidance for all features.'
    },
    {
      category: 'getting-started',
      question: 'What makes CultrCode different from other market research tools?',
      answer: 'Unlike traditional tools that analyze the past, CultrCode predicts cultural trends 2-6 weeks before mainstream adoption. We focus specifically on micro-communities (500-5K members) and the creator economy, with 87% accuracy in audience prediction.'
    },
    {
      category: 'getting-started',
      question: 'Can CultrCode help with any type of creator brand?',
      answer: 'Yes! Whether you&apos;re in beauty, wellness, tech, fashion, or any other category, our cultural intelligence works across all verticals. We&apos;ve helped 1,000+ creator brands in diverse industries discover their ideal audiences.'
    },
    {
      category: 'getting-started',
      question: 'Is there a free trial available?',
      answer: 'We offer a free plan (not a trial) that gives you permanent access to basic audience discovery features. You can explore top customer segments and get a feel for our cultural intelligence without any time limits.'
    },
    {
      category: 'features',
      question: 'How accurate is your audience segmentation?',
      answer: 'Our AI delivers 87% accuracy in audience prediction, compared to the 65% industry standard. This accuracy comes from analyzing cultural context, not just demographics, and continuously learning from creator brand launches.'
    },
    {
      category: 'features',
      question: 'What is micro-community discovery?',
      answer: 'Micro-community discovery identifies emerging communities of 500-5K members before they scale to mainstream. These communities often have higher engagement rates and authentic connections, making them perfect for creator brand launches.'
    },
    {
      category: 'features',
      question: 'How does trend prediction work?',
      answer: 'Our AI analyzes cultural signals across 50+ platforms to identify trends 2-6 weeks before they go viral. We track sentiment, engagement patterns, and cultural context to predict which trends will scale and which will fade.'
    },
    {
      category: 'features',
      question: 'What are Generated Personas?',
      answer: 'Generated Personas are AI-powered psychographic profiles created from your audience data. They reveal deep insights about customer values, motivations, personality traits, and decision-making patterns to help you understand and connect with your ideal customers.'
    },
    {
      category: 'features',
      question: 'Can I track competitors using CultrCode?',
      answer: 'Yes! Our platform shows you which brands your ideal customers already follow, helping you identify positioning opportunities and understand the competitive landscape in your micro-communities.'
    },
    {
      category: 'features',
      question: 'How often is your data updated?',
      answer: 'Our cultural intelligence data is updated in real-time. Trend alerts and community growth metrics refresh continuously, while comprehensive reports are generated weekly for premium users.'
    },
    {
      category: 'features',
      question: 'Can I export data and insights?',
      answer: 'Premium users can export audience insights, trend reports, and community data in multiple formats (PDF, CSV, PowerPoint). This makes it easy to share insights with your team or integrate with other tools.'
    },
    {
      category: 'features',
      question: 'Do you offer API access?',
      answer: 'API access is available for Enterprise customers. This allows you to integrate CultrCode\'s cultural intelligence directly into your existing tools and workflows.'
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via bank transfer or purchase orders.'
    },
    {
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. You&apos;ll continue to have access to premium features until the end of your billing period.'
    },
    {
      category: 'billing',
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Annual subscribers save 20% compared to monthly billing. We also offer special pricing for students, nonprofits, and early-stage startups - contact us for details.'
    },
    {
      category: 'billing',
      question: 'Is there a money-back guarantee?',
      answer: 'We offer a 30-day money-back guarantee on all paid plans. If you&apos;re not satisfied with your results, we&apos;ll provide a full refund, no questions asked.'
    },
    {
      category: 'billing',
      question: 'What happens if I exceed my plan limits?',
      answer: 'We&apos;ll notify you when you&apos;re approaching your limits. You can upgrade your plan anytime, or we&apos;ll pause additional usage until your next billing cycle. We never charge surprise overage fees.'
    },
    {
      category: 'technical',
      question: 'Is CultrCode mobile-friendly?',
      answer: 'Yes! CultrCode is designed mobile-first. You can access all features, pin insights, and make decisions on-the-go through our responsive web platform. Native mobile apps are coming soon.'
    },
    {
      category: 'technical',
      question: 'What browsers do you support?',
      answer: 'CultrCode works on all modern browsers including Chrome, Safari, Firefox, and Edge. We recommend keeping your browser updated for the best experience.'
    },
    {
      category: 'technical',
      question: 'Do you have system status updates?',
      answer: 'Yes! You can check our system status at status.cultrcode.com. We also send notifications about planned maintenance or any service disruptions.'
    },
    {
      category: 'data',
      question: 'How do you protect my data?',
      answer: 'Your data is encrypted in transit and at rest using bank-level security. We never sell your information and follow strict privacy policies. All data processing complies with GDPR and CCPA regulations.'
    },
    {
      category: 'data',
      question: 'Where is my data stored?',
      answer: 'Your data is stored in secure, encrypted databases in the United States. We use enterprise-grade cloud infrastructure with multiple backup systems and 99.9% uptime guarantees.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Frequently Asked
              <span className="gradient-text block">Questions</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about CultrCode&apos;s cultural intelligence platform, features, and pricing.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative z-10 py-8 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-800/50 text-primary-300 hover:bg-primary-700/50 hover:text-primary-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary-50 mb-4">
                No questions found
              </h3>
              <p className="text-primary-300 mb-8">
                Try adjusting your search or category filter.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="glass-card overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full text-left p-6 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-primary-50 pr-4">
                          {faq.question}
                        </h3>
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-accent-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-primary-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-primary-300 mb-12 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help you get the most out of CultrCode.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-50 mb-4">
                    Live Chat Support
                  </h3>
                  <p className="text-primary-300 mb-6">
                    Chat with our team for instant answers to your questions.
                  </p>
                  <Button className="w-full">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-50 mb-4">
                    Contact Support
                  </h3>
                  <p className="text-primary-300 mb-6">
                    Send us a detailed message and we&apos;ll get back to you within 24 hours.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}