'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, TrendingUp, Brain, Zap, Globe, Search, BarChart3, ArrowLeft, BookOpen } from 'lucide-react'
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
      title: "Understanding Cultural Trends",
      subsections: ["What Are Cultural Trends?", "Why Trends Matter for Creators", "The Creator's Advantage"]
    },
    {
      title: "The PULSE Framework",
      subsections: ["Pattern Recognition", "User Behavior Analysis", "Language Evolution", "Social Dynamics", "Economic Indicators"]
    },
    {
      title: "Trend Discovery Methods",
      subsections: ["Social Listening Tools", "Platform Analytics", "Community Monitoring", "Influencer Tracking"]
    },
    {
      title: "Trend Validation & Timing",
      subsections: ["Signal vs Noise", "Lifecycle Stages", "Geographic Spread", "Demographics Analysis"]
    },
    {
      title: "Content Strategy Development",
      subsections: ["Trend Integration", "Authentic Storytelling", "Platform Optimization", "Community Building"]
    },
    {
      title: "Monetization Opportunities",
      subsections: ["Trend-Based Products", "Partnership Strategies", "Content Licensing", "Community Monetization"]
    },
    {
      title: "Case Studies & Templates",
      subsections: ["Success Stories", "Common Mistakes", "Implementation Toolkit", "Tracking Templates"]
    }
  ]

  return (
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Framework Contents</h2>
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
            PULSE Framework Kit
          </h3>
          <p className="text-sm text-primary-300 mb-3">Complete trend prediction toolkit and templates.</p>
          <Button 
            size="sm" 
            className="w-full bg-accent-500 hover:bg-accent-600"
          >
            Download Toolkit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const PulseCard = ({ letter, word, description, tools, icon: Icon }: {
  letter: string
  word: string
  description: string
  tools: string[]
  icon: any
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center mr-4">
          <span className="text-xl font-bold">{letter}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-50">{word}</h3>
          <Icon className="h-5 w-5 text-accent-400 mt-1" />
        </div>
      </div>
      <p className="text-primary-300 mb-4">{description}</p>
      <div>
        <h4 className="font-semibold text-primary-200 text-sm mb-2">Key Tools:</h4>
        <ul className="space-y-1">
          {tools.map((tool, index) => (
            <li key={index} className="text-xs text-primary-400 flex items-center">
              <div className="w-1 h-1 bg-accent-400 rounded-full mr-2"></div>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

const TrendStage = ({ stage, title, description, duration, signals }: {
  stage: number
  title: string
  description: string
  duration: string
  signals: string[]
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center mr-4">
          <span className="font-bold">{stage}</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-50">{title}</h3>
          <div className="text-xs text-brand-400 font-medium">{duration}</div>
        </div>
      </div>
      <p className="text-primary-300 text-sm mb-4">{description}</p>
      <div>
        <h4 className="font-semibold text-primary-200 text-sm mb-2">Key Signals:</h4>
        <ul className="space-y-1">
          {signals.map((signal, index) => (
            <li key={index} className="text-xs text-primary-400 flex items-center">
              <div className="w-1 h-1 bg-brand-400 rounded-full mr-2"></div>
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

export default function CulturalTrendsPredictionHandbook() {
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
              Creator's Handbook
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
              Cultural Trend Prediction:
              <span className="gradient-text block">A Creator's Handbook</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with the PULSE framework to identify and capitalize on cultural trends 3-6 months before they peak.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Trend Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Cultural Intelligence</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">PULSE Framework</span>
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
            
            {/* Framework Overview */}
            <Card className="glass-card bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-brand-500/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary-50 mb-4 flex items-center">
                  <Brain className="h-8 w-8 mr-3 text-accent-400" />
                  The PULSE Framework Overview
                </h2>
                <p className="text-lg text-primary-300 mb-6">
                  A systematic 5-component approach to cultural trend prediction that helps creators identify opportunities 3-6 months before mainstream adoption.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">5 Components</div>
                    <div className="text-sm text-primary-400">PULSE Elements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">3-6 Months</div>
                    <div className="text-sm text-primary-400">Prediction Window</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">15+ Tools</div>
                    <div className="text-sm text-primary-400">Analysis Methods</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">90 Days</div>
                    <div className="text-sm text-primary-400">Implementation Plan</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PULSE Framework Components */}
            <section id="pulse-framework">
              <h2 className="text-3xl font-bold text-primary-50 mb-8 flex items-center">
                <Zap className="h-8 w-8 mr-3 text-accent-400" />
                The PULSE Framework Components
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <PulseCard
                  letter="P"
                  word="Pattern"
                  description="Identify recurring behavioral and content patterns across platforms and communities."
                  tools={["Google Trends", "Social media analytics", "Search volume data", "Platform insights"]}
                  icon={BarChart3}
                />

                <PulseCard
                  letter="U"
                  word="User Behavior"
                  description="Analyze how audiences interact, engage, and consume content across different demographics."
                  tools={["User journey mapping", "Engagement analytics", "Demographic analysis", "Behavioral tracking"]}
                  icon={TrendingUp}
                />

                <PulseCard
                  letter="L"
                  word="Language"
                  description="Track evolution of slang, hashtags, and communication styles in target communities."
                  tools={["Hashtag analysis", "Language tracking", "Sentiment analysis", "Slang monitoring"]}
                  icon={Globe}
                />

                <PulseCard
                  letter="S"
                  word="Social Dynamics"
                  description="Monitor influence networks, community structures, and viral content pathways."
                  tools={["Influencer mapping", "Network analysis", "Viral content tracking", "Community monitoring"]}
                  icon={Search}
                />

                <PulseCard
                  letter="E"
                  word="Economic Signals"
                  description="Track spending patterns, market shifts, and monetization opportunities."
                  tools={["Market research", "Spending analysis", "Economic indicators", "Industry reports"]}
                  icon={TrendingUp}
                />
              </div>
            </section>

            {/* Trend Lifecycle */}
            <section id="trend-lifecycle">
              <h2 className="text-3xl font-bold text-primary-50 mb-8">
                Understanding the Trend Lifecycle
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <TrendStage
                  stage={1}
                  title="Emergence"
                  description="Early signals appear in niche communities and among early adopters."
                  duration="0-30 days"
                  signals={["Niche community chatter", "Early adopter content", "Micro-influencer posts", "Platform algorithm hints"]}
                />

                <TrendStage
                  stage={2}
                  title="Growth"
                  description="Trend gains traction among broader audiences and content creators."
                  duration="1-3 months"
                  signals={["Increased mentions", "Creator adoption", "Platform features", "Media coverage"]}
                />

                <TrendStage
                  stage={3}
                  title="Peak"
                  description="Maximum visibility and engagement across all major platforms."
                  duration="3-6 months"
                  signals={["Mainstream media", "Brand adoption", "Saturation content", "Peak engagement"]}
                />

                <TrendStage
                  stage={4}
                  title="Decline"
                  description="Interest wanes as the trend becomes oversaturated or replaced."
                  duration="6+ months"
                  signals={["Declining engagement", "Audience fatigue", "New trends emerging", "Content saturation"]}
                />
              </div>
            </section>

            {/* Implementation Roadmap */}
            <Card className="glass-card bg-gradient-to-r from-brand-600/20 to-accent-600/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary-50 mb-6">Your 90-Day Trend Mastery Plan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Month 1: Foundation</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Set up monitoring tools</li>
                      <li>• Define target communities</li>
                      <li>• Establish baseline metrics</li>
                      <li>• Create tracking templates</li>
                      <li>• Identify key influencers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Month 2: Analysis</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Apply PULSE framework</li>
                      <li>• Identify emerging trends</li>
                      <li>• Validate trend signals</li>
                      <li>• Plan content strategy</li>
                      <li>• Begin early adoption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-4">Month 3: Execution</h3>
                    <ul className="space-y-2 text-sm text-primary-300">
                      <li>• Launch trend-based content</li>
                      <li>• Monitor performance</li>
                      <li>• Optimize and iterate</li>
                      <li>• Scale successful approaches</li>
                      <li>• Prepare for next trends</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent-500/20 rounded-lg p-6 inline-block">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Expected Outcomes After 90 Days:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-accent-400">2-3</div>
                        <div className="text-sm text-primary-300">Predicted Trends</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">150%</div>
                        <div className="text-sm text-primary-300">Content Performance</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">5x</div>
                        <div className="text-sm text-primary-300">Early Mover Advantage</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-400">$5K+</div>
                        <div className="text-sm text-primary-300">Revenue Opportunities</div>
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
            "headline": "Cultural Trend Prediction: A Creator's Handbook",
            "description": "Stay ahead of the curve with the PULSE framework to identify and capitalize on cultural trends 3-6 months before they peak.",
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
              "@id": "https://cultrcode.com/guides/cultural-trends"
            },
            "keywords": "cultural trends, trend prediction, creator strategy, PULSE framework, cultural intelligence, content strategy, trend analysis"
          })
        }}
      />
    </div>
  )
}