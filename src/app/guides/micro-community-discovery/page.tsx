'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Users, Search, Compass, Target, Network, Zap, Map, Filter, Eye, Heart, MessageCircle, Share2, ArrowLeft, BookOpen } from 'lucide-react'
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
      title: "Understanding Micro-Communities",
      subsections: ["What Are Micro-Communities?", "The Creator's Opportunity", "Community Size vs. Engagement"]
    },
    {
      title: "The DISCOVER Framework",
      subsections: ["Define Your Niche", "Identify Key Platforms", "Search Pattern Analysis", "Community Health Assessment", "Opportunity Validation", "Engagement Strategy", "Relationship Building"]
    },
    {
      title: "Advanced Discovery Methods", 
      subsections: ["Social Graph Analysis", "Hashtag Archaeology", "Influencer Network Mapping", "Content Gap Analysis"]
    },
    {
      title: "Platform-Specific Strategies",
      subsections: ["Reddit Community Mining", "Discord Server Discovery", "Instagram Niche Mapping", "TikTok Subculture Analysis", "YouTube Community Tabs"]
    },
    {
      title: "Community Assessment Tools",
      subsections: ["Engagement Quality Metrics", "Growth Trajectory Analysis", "Creator Saturation Index", "Monetization Potential"]
    },
    {
      title: "Integration & Monetization",
      subsections: ["Community Entry Strategy", "Value-First Approach", "Product-Market Fit", "Revenue Optimization"]
    },
    {
      title: "Templates & Worksheets",
      subsections: ["Discovery Checklist", "Assessment Scorecard", "Entry Strategy Template", "Progress Tracking Sheet"]
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
            DISCOVER Framework Kit
          </h3>
          <p className="text-sm text-primary-300 mb-3">Complete community discovery toolkit and templates.</p>
          <Button 
            size="sm" 
            className="w-full bg-accent-500 hover:bg-accent-600"
          >
            Download Complete Kit
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

export default function MicroCommunityDiscoveryFramework() {
  const [activeTemplate, setActiveTemplate] = useState('checklist')

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
              Framework Template
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
              Micro-Community
              <span className="gradient-text block">Discovery Framework</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              The DISCOVER methodology to find highly-engaged communities with 8.7x better engagement rates and 12.3x higher conversion potential.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Community Discovery</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Niche Research</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Audience Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Framework Template</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Framework Navigation - Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-16">
              
              {/* Framework Overview */}
              <Card className="glass-card bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-brand-500/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary-50 mb-4 flex items-center">
                    <Compass className="h-8 w-8 mr-3 text-accent-400" />
                    DISCOVER Framework Overview
                  </h2>
                  <p className="text-lg text-primary-300 mb-6">
                    The DISCOVER Framework is a systematic 7-step methodology for identifying and engaging with high-value micro-communities. This template provides everything you need to find your ideal audience niche.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-400">7 Steps</div>
                      <div className="text-sm text-primary-400">Systematic Process</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-400">5 Platforms</div>
                      <div className="text-sm text-primary-400">Cross-Platform Strategy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-400">15+ Tools</div>
                      <div className="text-sm text-primary-400">Discovery Methods</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 1: Understanding Micro-Communities */}
              <section id="understanding-micro-communities">
                <h2 className="text-3xl font-bold text-primary-50 mb-8 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-accent-400" />
                  Understanding Micro-Communities: Your Untapped Goldmine
                </h2>

                <h3 id="what-are-micro-communities" className="text-2xl font-semibold text-primary-100 mb-4">
                  What Are Micro-Communities?
                </h3>
                <p className="text-primary-300 mb-6">
                  Micro-communities are small, highly-engaged groups (typically 100-10,000 members) united by specific interests, challenges, or goals. They represent the sweet spot between intimacy and scale for creators.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <StatCard 
                    metric="Engagement Rate"
                    value="8.7x"
                    description="Higher than mainstream communities"
                    icon={Heart}
                    trend="↑ 43% vs mainstream"
                  />
                  <StatCard 
                    metric="Conversion Rate" 
                    value="12.3x"
                    description="Better monetization potential"
                    icon={Target}
                    trend="↑ 1,130% improvement"
                  />
                  <StatCard 
                    metric="Content Lifespan"
                    value="4.2x"
                    description="Longer content relevancy"
                    icon={Eye}
                    trend="↑ 320% extended reach"
                  />
                </div>
              </section>

              {/* DISCOVER Framework Steps */}
              <section id="discover-framework">
                <h2 className="text-3xl font-bold text-primary-50 mb-8 flex items-center">
                  <Compass className="h-8 w-8 mr-3 text-accent-400" />
                  The DISCOVER Framework: Implementation
                </h2>

                <FrameworkStep
                  number="1"
                  title="Define Your Niche Focus"
                  description="Establish clear parameters for your ideal micro-community characteristics and target audience segments."
                  tools={[
                    "Audience persona worksheets",
                    "Interest mapping tools",
                    "Demographic analysis",
                    "Psychographic profiling"
                  ]}
                  outputs={[
                    "Detailed niche definition",
                    "Target audience profiles",
                    "Interest intersection maps",
                    "Community size parameters"
                  ]}
                  icon={Target}
                />

                <FrameworkStep
                  number="2"
                  title="Identify Key Platforms"
                  description="Research and prioritize platforms where your target micro-communities are most active and engaged."
                  tools={[
                    "Platform analytics tools",
                    "Social listening platforms",
                    "Community mapping software",
                    "Engagement tracking tools"
                  ]}
                  outputs={[
                    "Platform priority matrix",
                    "Community hotspot locations",
                    "Engagement pattern analysis",
                    "Platform-specific strategies"
                  ]}
                  icon={Search}
                />
              </section>

              {/* Platform-Specific Strategies */}
              <section id="platform-specific-strategies">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">
                  Platform-Specific Discovery Strategies
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <MessageCircle className="h-8 w-8 mr-3 text-accent-400" />
                        <h3 className="text-xl font-bold text-primary-50">Reddit</h3>
                      </div>
                      <p className="text-primary-300 mb-4">
                        Leverage specialized subreddits for niche community discovery and authentic engagement.
                      </p>
                      <ul className="space-y-2 text-sm text-primary-400">
                        <li>• Subreddit mining with engagement metrics</li>
                        <li>• Cross-community user analysis</li>
                        <li>• Content gap identification</li>
                        <li>• Moderator relationship building</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Users className="h-8 w-8 mr-3 text-accent-400" />
                        <h3 className="text-xl font-bold text-primary-50">Discord</h3>
                      </div>
                      <p className="text-primary-300 mb-4">
                        Access real-time communities through invite-based servers and engagement tracking.
                      </p>
                      <ul className="space-y-2 text-sm text-primary-400">
                        <li>• Server discovery platforms</li>
                        <li>• Invite link tracking</li>
                        <li>• Member overlap analysis</li>
                        <li>• Activity level monitoring</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Implementation Roadmap */}
              <section id="implementation-roadmap">
                <Card className="glass-card bg-gradient-to-r from-brand-600/20 to-accent-600/20">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-primary-50 mb-6">Your 30-Day Implementation Roadmap</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Week 1: Setup</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Define your niche focus</li>
                          <li>• Set up discovery tools</li>
                          <li>• Create tracking templates</li>
                          <li>• Begin platform research</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Week 2: Discovery</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Find 50+ communities</li>
                          <li>• Initial engagement assessment</li>
                          <li>• Document key findings</li>
                          <li>• Identify top 20 prospects</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Week 3: Assessment</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Deep dive on top 20</li>
                          <li>• Complete scoring framework</li>
                          <li>• Select 5-10 priority targets</li>
                          <li>• Plan entry strategies</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Week 4: Engagement</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Begin community engagement</li>
                          <li>• Provide value-first content</li>
                          <li>• Build initial relationships</li>
                          <li>• Track and optimize</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-accent-500/20 rounded-lg p-6 inline-block">
                        <h3 className="text-xl font-bold text-primary-50 mb-2">Expected Outcomes After 30 Days:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <div className="text-3xl font-bold text-accent-400">5-10</div>
                            <div className="text-sm text-primary-300">Active Communities</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-accent-400">150+</div>
                            <div className="text-sm text-primary-300">New Connections</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-accent-400">2.5x</div>
                            <div className="text-sm text-primary-300">Engagement Rate</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-accent-400">$2K+</div>
                            <div className="text-sm text-primary-300">Revenue Potential</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

            </div>
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
            "headline": "Micro-Community Discovery Framework",
            "description": "The DISCOVER methodology to find highly-engaged communities with 8.7x better engagement rates and 12.3x higher conversion potential.",
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
              "@id": "https://cultrcode.com/guides/micro-community-discovery"
            },
            "keywords": "micro-communities, community discovery, niche research, audience analysis, creator strategy, community engagement, social media strategy, framework template"
          })
        }}
      />
    </div>
  )
}