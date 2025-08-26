'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      contact: 'hello@cultrcode.com',
      href: 'mailto:hello@cultrcode.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 9am-6pm PST',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a demo call',
      contact: 'cultrcode.com/demo',
      href: '/demo'
    }
  ]

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Creator Lane\nSan Francisco, CA 94102',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'New York',
      address: '456 Culture Ave\nNew York, NY 10001',
      timezone: 'EST (UTC-5)'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can start using CultrCode immediately with our free plan. Premium features are available within minutes of signup.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes, we provide custom cultural intelligence solutions for agencies and large brands. Contact our sales team for details.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer email support for all users, priority support for premium users, and dedicated account management for enterprise clients.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees or penalties.'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Header />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <Card className="glass-card max-w-md text-center">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-success-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-success-400" />
                </div>
                <h2 className="text-2xl font-bold text-primary-50">
                  Message Sent!
                </h2>
                <p className="text-primary-300">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
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
              Contact
              <span className="gradient-text block">Our Team</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about cultural intelligence? Want to see CultrCode in action? Our team is here to help you discover your perfect micro-audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card text-center h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-4">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-50 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-primary-300 text-sm mb-4">
                      {method.description}
                    </p>
                    <a
                      href={method.href}
                      className="text-accent-400 hover:text-accent-300 font-medium text-sm transition-colors"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-50">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="custom-select w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request Demo</option>
                        <option value="enterprise">Enterprise Sales</option>
                        <option value="support">Technical Support</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent resize-none"
                        placeholder="Tell us more about your needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full shadow-xl hover:shadow-accent-500/30"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Locations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-accent-400" />
                    <span className="text-primary-50">Our Offices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-primary-50">{office.city}</h4>
                      <p className="text-primary-300 text-sm whitespace-pre-line">
                        {office.address}
                      </p>
                      <p className="text-primary-400 text-xs">{office.timezone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-accent-400" />
                    <h4 className="font-semibold text-primary-50">Response Time</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-primary-300">General Inquiries:</span>
                      <span className="text-primary-200">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-300">Enterprise Sales:</span>
                      <span className="text-primary-200">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-300">Technical Support:</span>
                      <span className="text-primary-200">Within 2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary-50">Quick Answers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="font-medium text-primary-50 text-sm">
                        {faq.question}
                      </h5>
                      <p className="text-primary-300 text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}