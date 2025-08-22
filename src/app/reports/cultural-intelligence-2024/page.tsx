'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, TrendingUp, BarChart3, Users, Globe, Brain, Target, Calendar, Award, DollarSign, Zap, Eye, ArrowRight, Heart, ArrowLeft } from 'lucide-react'
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
      title: "Executive Summary",
      subsections: ["Key Findings", "Industry Overview", "Market Size & Growth"]
    },
    {
      title: "Cultural Intelligence Landscape",
      subsections: ["Market Maturity", "Technology Adoption", "Investment Trends", "Geographic Distribution"]
    },
    {
      title: "Creator Economy Analysis",
      subsections: ["Revenue Models", "Platform Evolution", "Audience Behavior", "Monetization Trends"]
    },
    {
      title: "Micro-Community Insights",
      subsections: ["Growth Patterns", "Engagement Metrics", "Community Dynamics", "Platform Migration"]
    },
    {
      title: "Technology & Tools",
      subsections: ["AI Integration", "Analytics Evolution", "Emerging Platforms", "Tool Consolidation"]
    },
    {
      title: "Future Predictions",
      subsections: ["2025 Forecasts", "Emerging Opportunities", "Risk Factors", "Strategic Recommendations"]
    },
    {
      title: "Methodology & Data",
      subsections: ["Research Approach", "Data Sources", "Survey Demographics", "Limitations"]
    }
  ]

  return (
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Report Contents</h2>
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
      </CardContent>
    </Card>
  )
}

const StatCard = ({ title, value, change, description, icon: Icon }: {
  title: string
  value: string | number
  change?: string
  description: string
  icon: any
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-accent-400" />
        {change && (
          <span className={`text-sm font-medium px-2 py-1 rounded ${
            change.startsWith('+') ? 'bg-accent-500/20 text-accent-400' : 'bg-brand-500/20 text-brand-400'
          }`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="font-bold text-primary-50 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-primary-50 mb-2">{value}</div>
      <p className="text-primary-300 text-sm">{description}</p>
    </CardContent>
  </Card>
)

const TrendCard = ({ trend, impact, timeline, description, examples }: {
  trend: string
  impact: 'High' | 'Medium' | 'Low'
  timeline: string
  description: string
  examples: string[]
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-primary-50">{trend}</h3>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            impact === 'High' ? 'bg-brand-500/20 text-brand-400' :
            impact === 'Medium' ? 'bg-accent-500/20 text-accent-400' :
            'bg-primary-700/50 text-primary-300'
          }`}>
            {impact} Impact
          </span>
          <span className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-sm">
            {timeline}
          </span>
        </div>
      </div>
      <p className="text-primary-300 mb-4">{description}</p>
      <div>
        <h4 className="font-semibold text-primary-200 mb-2">Examples:</h4>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-primary-300 flex items-start">
              <ArrowRight className="h-3 w-3 mt-1 mr-2 text-accent-500 flex-shrink-0" />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

export default function CulturalIntelligence2024Report() {
  const [activeSection, setActiveSection] = useState('overview')

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
              Industry Report
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
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2 text-accent-400" />
              2024 Annual Report
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary-50 leading-tight">
              State of Cultural
              <span className="gradient-text block">Intelligence 2024</span>
            </h1>
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of cultural trends, micro-communities, and creator economy insights. The definitive report on how brands and creators are leveraging cultural intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Market Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Economy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Cultural Trends</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Industry Research</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          <div className="lg:col-span-3">
            <article className="space-y-16">
              
              {/* Executive Summary */}
              <section id="executive-summary" className="mb-16">
                <Card className="glass-card bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-brand-500/10 mb-12">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary-50 mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2 text-accent-400" />
                      Executive Summary
                    </h2>
                    <p className="text-lg text-primary-300 mb-6">
                      The cultural intelligence market has reached a tipping point in 2024. With $47.2 billion in creator economy value and 68% of brands investing in cultural trend analysis, understanding micro-communities and cultural dynamics has become essential for business success.
                    </p>
                    
                    <h3 id="key-findings" className="text-xl font-semibold text-primary-200 mb-4">Key Findings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-accent-500/20">
                        <h4 className="font-bold text-accent-400 mb-2">Market Growth</h4>
                        <p className="text-sm text-primary-300">Cultural intelligence tools market grew 156% YoY, reaching $3.2B in 2024</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-accent-500/20">
                        <h4 className="font-bold text-accent-400 mb-2">Creator Economy</h4>
                        <p className="text-sm text-primary-300">Creator-brand partnerships leveraging cultural insights show 3.7x higher ROI</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-accent-500/20">
                        <h4 className="font-bold text-accent-400 mb-2">Micro-Communities</h4>
                        <p className="text-sm text-primary-300">Average engagement rates in niche communities are 12.4x higher than mainstream platforms</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-accent-500/20">
                        <h4 className="font-bold text-accent-400 mb-2">AI Integration</h4>
                        <p className="text-sm text-primary-300">87% of cultural intelligence platforms now incorporate predictive AI capabilities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 id="market-size-growth" className="text-2xl font-semibold text-primary-200 mb-6">Market Size & Growth Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard
                    title="Global Market Value"
                    value="$47.2B"
                    change="+156%"
                    description="Total creator economy market value, up from $18.6B in 2023"
                    icon={DollarSign}
                  />
                  <StatCard
                    title="Active Creators"
                    value="67.8M"
                    change="+34%"
                    description="Creators actively monetizing cultural insights across platforms"
                    icon={Users}
                  />
                  <StatCard
                    title="Brand Investment"
                    value="$12.4B"
                    change="+89%"
                    description="Total brand spending on cultural intelligence and creator partnerships"
                    icon={TrendingUp}
                  />
                </div>
              </section>

              {/* Remaining sections with updated styling */}
              <section id="future-predictions" className="mb-16">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">2025 Predictions & Strategic Outlook</h2>

                <h3 id="2025-forecasts" className="text-2xl font-semibold text-primary-200 mb-6">Key Trend Forecasts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <TrendCard
                    trend="AI-Native Cultural Analysis"
                    impact="High"
                    timeline="Q1-Q2 2025"
                    description="Fully automated cultural trend detection and prediction using advanced AI models trained on real-time cultural data."
                    examples={[
                      "24/7 global trend monitoring",
                      "Predictive cultural sentiment analysis",
                      "Automated content opportunity identification"
                    ]}
                  />
                  <TrendCard
                    trend="Micro-Community Consolidation"
                    impact="Medium"
                    timeline="H2 2025"
                    description="Platform consolidation as successful micro-communities migrate to creator-owned platforms and ecosystems."
                    examples={[
                      "Creator-owned community platforms",
                      "Cross-platform community management",
                      "Integrated monetization tools"
                    ]}
                  />
                  <TrendCard
                    trend="Cultural Intelligence APIs"
                    impact="High"
                    timeline="Q2-Q3 2025"
                    description="Standardized APIs for cultural data integration across marketing and content creation tools."
                    examples={[
                      "CRM cultural data integration",
                      "Content management cultural scoring",
                      "Real-time campaign optimization"
                    ]}
                  />
                  <TrendCard
                    trend="Regulatory Framework Development"
                    impact="Medium"
                    timeline="H2 2025"
                    description="Government and industry development of guidelines for cultural data usage and creator economy practices."
                    examples={[
                      "Cultural data privacy standards",
                      "Creator economy taxation frameworks",
                      "Platform accountability measures"
                    ]}
                  />
                </div>

                <h3 id="strategic-recommendations" className="text-2xl font-semibold text-primary-200 mb-4">Strategic Recommendations</h3>
                <Card className="glass-card bg-gradient-to-r from-accent-500/10 to-brand-500/10 mb-8">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-primary-50 mb-6">For Brands & Marketers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-primary-200 mb-3">Immediate Actions (0-6 months)</h5>
                        <ul className="space-y-2 text-primary-300">
                          <li>• Invest in cultural intelligence tooling</li>
                          <li>• Identify key micro-communities in your sector</li>
                          <li>• Develop cultural trend monitoring processes</li>
                          <li>• Train teams on cultural intelligence principles</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-primary-200 mb-3">Strategic Initiatives (6-18 months)</h5>
                        <ul className="space-y-2 text-primary-300">
                          <li>• Build dedicated cultural intelligence team</li>
                          <li>• Develop long-term creator partnerships</li>
                          <li>• Integrate cultural data into product development</li>
                          <li>• Create community-first marketing strategies</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

            </article>
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
            "@type": "ResearchReport",
            "headline": "State of Cultural Intelligence 2024",
            "description": "Comprehensive analysis of cultural trends, micro-communities, and creator economy insights. The definitive report on how brands and creators are leveraging cultural intelligence.",
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
              "@id": "https://cultrcode.com/reports/cultural-intelligence-2024"
            },
            "keywords": "cultural intelligence, creator economy, market research, industry report, cultural trends, micro-communities, brand strategy, creator marketing"
          })
        }}
      />
    </div>
  )
}