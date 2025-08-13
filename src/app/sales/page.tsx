'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, ArrowLeft, Building, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import Link from 'next/link'

export default function SalesRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    useCase: '',
    timeline: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = `Insiders Plan Inquiry - ${formData.company || formData.name}`
    const body = `
Hi CultrCode Sales Team,

I'm interested in the Insiders plan. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Team Size: ${formData.teamSize}
Use Case: ${formData.useCase}
Timeline: ${formData.timeline}

Message:
${formData.message}

Best regards,
${formData.name}
    `.trim()
    
    // Open mailto
    window.location.href = `mailto:sales@cultrcode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Show success state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Header />
        
        <section className="relative z-10 pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-success-500/20 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-success-400" />
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-50">
                Thank You!
              </h1>
              
              <p className="text-xl text-primary-300">
                Your sales inquiry has been sent to our team. We'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Pricing
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button>
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20 mb-6">
              <Building className="w-5 h-5 mr-2" />
              Insiders Sales
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-primary-50 leading-tight mb-6">
              Let's Talk About Your
              <span className="gradient-text block">Insiders Needs</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Get a custom quote for Insiders features including dedicated support, 
              custom integrations, and white-label solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="glass-card text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-50 mb-2">Dedicated Support</h3>
                  <p className="text-primary-300 text-sm">24/7 premium support with dedicated account manager</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-50 mb-2">Custom Solutions</h3>
                  <p className="text-primary-300 text-sm">Tailored features and integrations for your business</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass-card text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-success-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-success-400" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-50 mb-2">White-Label</h3>
                  <p className="text-primary-300 text-sm">Branded solutions that integrate seamlessly</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary-50 text-2xl font-bold text-center">
                  Insiders Sales Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="Chief Marketing Officer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Team Size
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                      >
                        <option value="">Select team size</option>
                        <option value="1-10">1-10 people</option>
                        <option value="11-50">11-50 people</option>
                        <option value="51-200">51-200 people</option>
                        <option value="201-1000">201-1000 people</option>
                        <option value="1000+">1000+ people</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-primary-200 text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate">Immediate (this week)</option>
                        <option value="This month">This month</option>
                        <option value="Next quarter">Next quarter</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary-200 text-sm font-medium mb-2">
                      Primary Use Case
                    </label>
                    <input
                      type="text"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                      placeholder="e.g., Brand strategy, Product launches, Market research"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-200 text-sm font-medium mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                      placeholder="Tell us more about your specific needs, integration requirements, or any questions you have..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pricing">
                      <Button variant="outline" type="button">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Pricing
                      </Button>
                    </Link>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-accent-500 hover:bg-accent-600"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}