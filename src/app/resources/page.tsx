'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Users, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    {
      category: "Creator Economy Guides",
      icon: Users,
      items: [
        {
          title: "The Complete Guide to Audience Segmentation for Creators",
          description: "Master audience segmentation with proven frameworks, tools, and strategies that increase engagement by 127% and revenue by 3.5x.",
          type: "Interactive Guide",
          downloadUrl: "/guides/audience-segmentation"
        },
        {
          title: "Cultural Trend Prediction: A Creator's Handbook",
          description: "Stay ahead of the curve with the PULSE framework to identify and capitalize on cultural trends 3-6 months before they peak.",
          type: "Comprehensive Handbook",
          downloadUrl: "/guides/cultural-trends"
        },
        {
          title: "Micro-Community Discovery Framework",
          description: "The DISCOVER methodology to find highly-engaged communities with 8.7x better engagement rates and 12.3x higher conversion potential.",
          type: "Framework Template",
          downloadUrl: "/guides/micro-community-discovery"
        }
      ]
    },
    {
      category: "Industry Reports",
      icon: TrendingUp,
      items: [
        {
          title: "State of Cultural Intelligence 2024",
          description: "Annual report on cultural trends, micro-communities, and creator economy insights.",
          type: "Report",
          downloadUrl: "#"
        },
        {
          title: "Psychographic Persona Research Study",
          description: "Analysis of how persona-driven marketing outperforms demographic targeting.",
          type: "Research",
          downloadUrl: "#"
        },
        {
          title: "Challenger Brand Success Patterns",
          description: "What makes some challenger brands succeed while others fail.",
          type: "Case Study",
          downloadUrl: "#"
        }
      ]
    },
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
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Creator
              <span className="gradient-text block">Resources</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Essential guides and research insights to help you master cultural intelligence and build authentic creator brands that resonate with your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent-400" />
                </div>
                <h2 className="text-3xl font-bold text-primary-50">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="inline-flex items-center px-2 py-1 bg-accent-500/20 text-accent-300 rounded-md text-xs font-medium">
                            {item.type}
                          </div>
                          <BookOpen className="w-4 h-4 text-primary-400 group-hover:text-accent-400 transition-colors" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-primary-50 mb-3 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-primary-300 text-sm leading-relaxed mb-6 group-hover:text-primary-200 transition-colors">
                          {item.description}
                        </p>
                        
                        <Link href={item.downloadUrl}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-accent-400 hover:text-accent-300 border-accent-400/50 hover:border-accent-400"
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Guide
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Newsletter CTA */}
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
                  <BookOpen className="w-8 h-8 text-accent-400" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Want More Resources?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Subscribe to our newsletter for weekly cultural intelligence insights, new research, and exclusive creator economy analysis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                  <Button className="px-6 bg-accent-500 hover:bg-accent-600">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-primary-500">
                  Join 5,000+ creators. Unsubscribe anytime.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}