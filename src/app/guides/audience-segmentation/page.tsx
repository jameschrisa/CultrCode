'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Users, Target, Brain, TrendingUp, Eye, Heart, DollarSign, ArrowLeft, BookOpen } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Link from 'next/link'

const TableOfContents = () => {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({})
  
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const sections = [
    {
      title: "Understanding Your Audience",
      subsections: ["Why Audience Segmentation Matters", "The Creator's Dilemma", "ROI of Proper Segmentation"]
    },
    {
      title: "Foundation: Demographic Segmentation",
      subsections: ["Age and Generation Cohorts", "Geographic Considerations", "Income and Lifestyle Factors"]
    },
    {
      title: "Advanced: Psychographic Segmentation", 
      subsections: ["Values and Beliefs", "Interests and Hobbies", "Personality Traits", "Lifestyle Choices"]
    },
    {
      title: "Behavioral Segmentation",
      subsections: ["Engagement Patterns", "Content Consumption Habits", "Purchase Behavior", "Platform Preferences"]
    },
    {
      title: "Tools and Frameworks",
      subsections: ["Analytics Setup", "Survey Methods", "Social Listening", "AI-Powered Insights"]
    },
    {
      title: "Implementation Strategy",
      subsections: ["Content Personalization", "Platform Strategy", "Community Building", "Monetization Optimization"]
    },
    {
      title: "Case Studies and Examples",
      subsections: ["Successful Creator Campaigns", "Common Pitfalls", "Industry Benchmarks"]
    }
  ]

  return (
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          {sections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleSection(`section-${index}`)}
                className="flex items-center justify-between w-full text-left p-2 hover:bg-primary-800/50 rounded-lg transition-colors"
              >
                <span className="font-medium text-primary-200">{section.title}</span>
                {openSections[`section-${index}`] ? 
                  <ChevronDown className="h-4 w-4 text-primary-400" /> : 
                  <ChevronRight className="h-4 w-4 text-primary-400" />
                }
              </button>
              {openSections[`section-${index}`] && (
                <div className="ml-4 mt-1 space-y-1">
                  {section.subsections.map((subsection, subIndex) => (
                    <a
                      key={subIndex}
                      href={`#${subsection.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block py-1 px-2 text-sm text-primary-300 hover:text-accent-400 hover:bg-accent-500/10 rounded transition-colors"
                    >
                      {subsection}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
          <h3 className="font-bold text-accent-400 mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-2" />
            Quick Access Templates
          </h3>
          <p className="text-sm text-primary-300 mb-3">Download worksheets and implementation guides.</p>
          <Button 
            size="sm" 
            className="w-full bg-accent-500 hover:bg-accent-600"
          >
            Access Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ metric, value, description, icon: Icon, trend }: {
  metric: string
  value: string
  description: string
  icon: any
  trend?: string
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-accent-400" />
        <div className="text-3xl font-bold text-primary-50">{value}</div>
      </div>
      <h3 className="font-bold text-primary-50 mb-2">{metric}</h3>
      <p className="text-primary-300 text-sm">{description}</p>
      {trend && (
        <div className="mt-2 text-xs text-accent-400 font-medium">
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
)

const FrameworkStep = ({ number, title, description, tools, outputs, icon: Icon }: {
  number: string
  title: string
  description: string
  tools: string[]
  outputs: string[]
  icon: any
}) => (
  <Card className="glass-card mb-8">
    <CardContent className="p-8">
      <div className="flex items-start mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-accent-500 text-white rounded-full mr-6 flex-shrink-0">
          <span className="text-2xl font-bold">{number}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <Icon className="h-6 w-6 text-accent-400 mr-2" />
            <h3 className="text-2xl font-bold text-primary-50">{title}</h3>
          </div>
          <p className="text-primary-300 text-lg">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-primary-200 mb-3">Tools & Methods:</h4>
          <ul className="space-y-2">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-primary-300">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-200 mb-3">Expected Outputs:</h4>
          <ul className="space-y-2">
            {outputs.map((output, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-primary-300">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function AudienceSegmentationGuide() {
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

      {/* Navigation Bar */}
      <div className="relative z-10 bg-primary-900/80 backdrop-blur-sm border-b border-primary-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/resources">
              <Button variant="outline" size="sm" className="text-accent-400 border-accent-400/50 hover:border-accent-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Button>
            </Link>
            <div className="text-sm text-primary-400">
              Creator Economy Guide
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              The Complete Guide to
              <span className="gradient-text block">Audience Segmentation</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Master audience segmentation with proven frameworks, tools, and strategies that increase engagement by 127% and revenue by 3.5x for creators.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Audience Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Revenue Optimization</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Proven Framework</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                metric="Engagement Increase"
                value="127%"
                description="Average improvement with proper segmentation"
                icon={Heart}
                trend="↑ 23% vs last year"
              />
              <StatCard 
                metric="Revenue Growth" 
                value="3.5x"
                description="Monetization improvement potential"
                icon={DollarSign}
                trend="↑ Compound growth"
              />
              <StatCard 
                metric="Conversion Rate"
                value="2.8x"
                description="Better targeted content performance"
                icon={Target}
                trend="↑ 41% efficiency gain"
              />
            </div>

            {/* Framework Overview */}
            <Card className="glass-card bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-brand-500/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary-50 mb-4 flex items-center">
                  <Brain className="h-8 w-8 mr-3 text-accent-400" />
                  The S.E.G.M.E.N.T Framework
                </h2>
                <p className="text-lg text-primary-300 mb-6">
                  A systematic 7-step approach to audience segmentation that transforms generic content into highly-targeted, engaging experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">7 Steps</div>
                    <div className="text-sm text-primary-400">Systematic Process</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">4 Types</div>
                    <div className="text-sm text-primary-400">Segmentation Methods</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">12+ Tools</div>
                    <div className="text-sm text-primary-400">Analytics & Research</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">30 Days</div>
                    <div className="text-sm text-primary-400">Implementation Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Framework Steps */}
            <section id="understanding-your-audience">
              <h2 className="text-3xl font-bold text-primary-50 mb-8 flex items-center">
                <Users className="h-8 w-8 mr-3 text-accent-400" />
                Understanding Your Audience: The Foundation
              </h2>

              <FrameworkStep
                number="1"
                title="Survey Your Current Audience"
                description="Establish baseline understanding of who currently follows and engages with your content."
                tools={[
                  "Google Forms for audience surveys",
                  "Instagram Story polls and questions",
                  "YouTube Community posts",
                  "Direct message interviews"
                ]}
                outputs={[
                  "Audience demographic profile",
                  "Interest and preference mapping",
                  "Content consumption patterns",
                  "Platform usage behaviors"
                ]}
                icon={Users}
              />

              <FrameworkStep
                number="2"
                title="Analyze Engagement Patterns"
                description="Deep dive into your analytics to identify which content resonates with different audience segments."
                tools={[
                  "Platform native analytics",
                  "Google Analytics 4",
                  "Social media management tools",
                  "Heat mapping software"
                ]}
                outputs={[
                  "High-performing content analysis",
                  "Engagement timing patterns",
                  "Platform preference insights",
                  "Content format effectiveness"
                ]}
                icon={TrendingUp}
              />
            </section>

            {/* Implementation Roadmap */}
            <Card className="glass-card bg-gradient-to-r from-brand-600/20 to-accent-600/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary-50 mb-6">Your 30-Day Implementation Roadmap</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Week 1: Research</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Set up analytics tracking</li>
                      <li>• Launch audience survey</li>
                      <li>• Collect existing data</li>
                      <li>• Define success metrics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Week 2: Analysis</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Process survey results</li>
                      <li>• Analyze engagement data</li>
                      <li>• Identify segment patterns</li>
                      <li>• Create personas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Week 3: Strategy</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Develop content themes</li>
                      <li>• Plan segment-specific content</li>
                      <li>• Create testing framework</li>
                      <li>• Set up tracking systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Week 4: Execute</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Launch segmented content</li>
                      <li>• Monitor performance</li>
                      <li>• Collect feedback</li>
                      <li>• Optimize and iterate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent-500/20 rounded-lg p-6 inline-block">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Expected Results After 30 Days:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-accent-400">40%</div>
                        <div className="text-sm text-primary-300">Engagement Increase</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">25%</div>
                        <div className="text-sm text-primary-300">Better CTR</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">60%</div>
                        <div className="text-sm text-primary-300">More Qualified Leads</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">2x</div>
                        <div className="text-sm text-primary-300">Revenue Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <Footer />

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Complete Guide to Audience Segmentation for Creators",
            "description": "Master audience segmentation with proven frameworks, tools, and strategies that increase engagement by 127% and revenue by 3.5x for creators.",
            "author": {
              "@type": "Organization",
              "name": "CultrCode"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "CultrCode"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cultrcode.com/guides/audience-segmentation"
            },
            "keywords": "audience segmentation, creator economy, content strategy, audience analysis, creator marketing, engagement optimization, revenue growth"
          })
        }}
      />
    </div>
  )
}