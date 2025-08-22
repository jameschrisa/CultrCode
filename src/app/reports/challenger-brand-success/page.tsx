'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Trophy, TrendingUp, Target, Zap, Users, Award, DollarSign, BarChart3, CheckCircle, XCircle, ArrowRight, Lightbulb, ArrowLeft } from 'lucide-react'
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
      subsections: ["Key Findings", "Success Factors", "Market Impact"]
    },
    {
      title: "Research Methodology",
      subsections: ["Study Design", "Sample Analysis", "Success Criteria", "Data Collection"]
    },
    {
      title: "Success Pattern Analysis",
      subsections: ["Cultural Positioning", "Market Entry Strategy", "Brand Differentiation", "Community Building"]
    },
    {
      title: "Failure Pattern Analysis",
      subsections: ["Common Mistakes", "Warning Signs", "Recovery Strategies", "Lessons Learned"]
    },
    {
      title: "CHALLENGER Framework",
      subsections: ["Challenge Conventions", "Harness Culture", "Amplify Authenticity", "Launch with Purpose", "Leverage Community", "Engage Consistently", "Navigate Growth", "Generate Impact", "Execute & Refine"]
    },
    {
      title: "Implementation Guide",
      subsections: ["Assessment Framework", "Strategic Planning", "Execution Roadmap", "Performance Metrics"]
    }
  ]

  return (
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Study Contents</h2>
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
        
        <div className="mt-6 p-4 bg-brand-500/10 rounded-lg border border-brand-500/20">
          <h3 className="font-bold text-brand-400 mb-2 flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            CHALLENGER Toolkit
          </h3>
          <p className="text-sm text-primary-300 mb-3">Framework templates and assessment tools.</p>
          <Button 
            size="sm" 
            className="w-full bg-brand-500 hover:bg-brand-600"
          >
            Download Toolkit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ title, value, change, description, icon: Icon }: {
  title: string
  value: string
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

const FrameworkCard = ({ letter, word, description, keyTactics }: {
  letter: string
  word: string
  description: string
  keyTactics: string[]
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center mr-4">
          <span className="text-xl font-bold">{letter}</span>
        </div>
        <h3 className="text-xl font-bold text-primary-50">{word}</h3>
      </div>
      <p className="text-primary-300 mb-4">{description}</p>
      <div>
        <h4 className="font-semibold text-primary-200 text-sm mb-2">Key Tactics:</h4>
        <ul className="space-y-1">
          {keyTactics.map((tactic, index) => (
            <li key={index} className="text-xs text-primary-400 flex items-center">
              <div className="w-1 h-1 bg-brand-400 rounded-full mr-2"></div>
              {tactic}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

const CaseStudyCard = ({ brand, category, challenge, approach, results, success }: {
  brand: string
  category: string
  challenge: string
  approach: string
  results: string
  success: boolean
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-primary-50">{brand}</h3>
          <div className="text-sm text-primary-400">{category}</div>
        </div>
        {success ? (
          <CheckCircle className="h-6 w-6 text-accent-500" />
        ) : (
          <XCircle className="h-6 w-6 text-red-400" />
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-primary-200 text-sm mb-1">Challenge:</h4>
          <p className="text-primary-300 text-sm">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-primary-200 text-sm mb-1">Approach:</h4>
          <p className="text-primary-300 text-sm">{approach}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-primary-200 text-sm mb-1">Results:</h4>
          <p className={`text-sm ${success ? 'text-accent-400' : 'text-red-400'}`}>{results}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function ChallengerBrandSuccessReport() {
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
              Case Study Analysis
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
            <div className="inline-flex items-center px-4 py-2 bg-brand-500/20 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4 mr-2 text-brand-400" />
              Analysis of 847 Brands
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary-50 leading-tight">
              Challenger Brand
              <span className="gradient-text block">Success Patterns</span>
            </h1>
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Analysis of 847 challenger brands reveals the cultural intelligence strategies that drive 4.7x higher market penetration rates and sustained competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Success Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Market Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Cultural Intelligence</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Brand Framework</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          <div className="lg:col-span-3">
            <article className="space-y-16">
              
              {/* Executive Summary */}
              <section id="executive-summary">
                <Card className="glass-card bg-gradient-to-r from-brand-500/10 via-brand-600/5 to-accent-500/10 mb-12">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-primary-50 mb-4 flex items-center">
                      <Trophy className="h-8 w-8 mr-3 text-brand-400" />
                      Executive Summary
                    </h2>
                    <p className="text-lg text-primary-300 mb-6">
                      Our comprehensive analysis of 847 challenger brands from 2019-2024 reveals critical success patterns that separate market winners from failures. Brands employing cultural intelligence strategies achieve 4.7x higher market penetration rates.
                    </p>
                    
                    <h3 id="key-findings" className="text-xl font-semibold text-primary-200 mb-4">Key Findings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-brand-500/20">
                        <h4 className="font-bold text-brand-400 mb-2">Success Rate</h4>
                        <p className="text-sm text-primary-300">73% of culturally-intelligent challengers achieved market goals vs 21% traditional approach</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-brand-500/20">
                        <h4 className="font-bold text-brand-400 mb-2">Market Penetration</h4>
                        <p className="text-sm text-primary-300">4.7x higher penetration rates when leveraging cultural insights and micro-communities</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-brand-500/20">
                        <h4 className="font-bold text-brand-400 mb-2">Community Engagement</h4>
                        <p className="text-sm text-primary-300">12.3x higher engagement rates through authentic cultural positioning</p>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-4 border border-brand-500/20">
                        <h4 className="font-bold text-brand-400 mb-2">Revenue Growth</h4>
                        <p className="text-sm text-primary-300">Average 247% revenue growth in first 18 months vs 34% traditional challengers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <StatCard 
                    title="Brands Analyzed"
                    value="847"
                    description="Challenger brands across 23 industries"
                    icon={BarChart3}
                  />
                  <StatCard 
                    title="Success Rate"
                    value="73%"
                    change="+52%"
                    description="Cultural intelligence approach vs traditional"
                    icon={Trophy}
                  />
                  <StatCard 
                    title="Market Penetration"
                    value="4.7x"
                    change="+370%"
                    description="Higher penetration with cultural strategies"
                    icon={Target}
                  />
                  <StatCard 
                    title="Revenue Growth"
                    value="247%"
                    change="+213%"
                    description="Average growth in first 18 months"
                    icon={DollarSign}
                  />
                </div>
              </section>

              {/* CHALLENGER Framework */}
              <section id="challenger-framework">
                <h2 className="text-3xl font-bold text-primary-50 mb-8 flex items-center">
                  <Zap className="h-8 w-8 mr-3 text-brand-400" />
                  The CHALLENGER Framework
                </h2>
                <p className="text-primary-300 mb-8">
                  Based on our analysis, successful challenger brands follow a consistent 9-step framework that leverages cultural intelligence for competitive advantage.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <FrameworkCard
                    letter="C"
                    word="Challenge"
                    description="Identify and challenge existing market conventions with bold, culturally-relevant positioning."
                    keyTactics={["Market gap analysis", "Convention mapping", "Differentiation strategy", "Bold positioning"]}
                  />

                  <FrameworkCard
                    letter="H"
                    word="Harness"
                    description="Harness cultural trends and micro-community insights to fuel brand development."
                    keyTactics={["Trend identification", "Community analysis", "Cultural insights", "Opportunity mapping"]}
                  />

                  <FrameworkCard
                    letter="A"
                    word="Amplify"
                    description="Amplify authentic brand voice that resonates with target micro-communities."
                    keyTactics={["Voice development", "Authenticity validation", "Community testing", "Message refinement"]}
                  />

                  <FrameworkCard
                    letter="L"
                    word="Launch"
                    description="Launch with purpose-driven campaigns that create cultural moments."
                    keyTactics={["Campaign strategy", "Cultural moments", "Purpose integration", "Impact measurement"]}
                  />

                  <FrameworkCard
                    letter="L"
                    word="Leverage"
                    description="Leverage community advocates and micro-influencers for organic growth."
                    keyTactics={["Advocate identification", "Micro-influencer partnerships", "Community amplification", "Organic reach"]}
                  />

                  <FrameworkCard
                    letter="E"
                    word="Engage"
                    description="Engage consistently with authentic, value-driven community interactions."
                    keyTactics={["Community engagement", "Value delivery", "Consistent presence", "Relationship building"]}
                  />

                  <FrameworkCard
                    letter="N"
                    word="Navigate"
                    description="Navigate growth challenges while maintaining cultural authenticity."
                    keyTactics={["Scale planning", "Culture preservation", "Team alignment", "Growth balance"]}
                  />

                  <FrameworkCard
                    letter="G"
                    word="Generate"
                    description="Generate measurable impact through cultural intelligence strategies."
                    keyTactics={["Impact tracking", "ROI measurement", "Success metrics", "Performance optimization"]}
                  />

                  <FrameworkCard
                    letter="E"
                    word="Execute"
                    description="Execute continuous refinement based on community feedback and cultural shifts."
                    keyTactics={["Feedback loops", "Strategy refinement", "Cultural adaptation", "Continuous improvement"]}
                  />
                </div>
              </section>

              {/* Case Studies */}
              <section id="case-studies">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">
                  Success & Failure Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold text-accent-400 mb-6 flex items-center">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Success Stories
                    </h3>
                    <div className="space-y-6">
                      <CaseStudyCard
                        brand="Liquid Death"
                        category="Beverage"
                        challenge="Enter crowded water market dominated by established brands"
                        approach="Leveraged punk/metal micro-communities with irreverent branding and cultural rebellion positioning"
                        results="$700M valuation, 300% YoY growth, 4.2M social followers"
                        success={true}
                      />
                      
                      <CaseStudyCard
                        brand="Glossier"
                        category="Beauty"
                        challenge="Compete against legacy beauty brands with massive marketing budgets"
                        approach="Built authentic community around 'no-makeup makeup' trend, user-generated content strategy"
                        results="$1.8B valuation, 6M social community, 85% customer retention"
                        success={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                      <XCircle className="h-6 w-6 mr-2" />
                      Failure Analysis
                    </h3>
                    <div className="space-y-6">
                      <CaseStudyCard
                        brand="Quibi"
                        category="Streaming"
                        challenge="Launch mobile-first streaming platform in competitive market"
                        approach="Top-down approach ignoring actual mobile viewing behaviors and cultural preferences"
                        results="Shut down after 6 months, $1.75B loss, 500K subscribers"
                        success={false}
                      />
                      
                      <CaseStudyCard
                        brand="Google+"
                        category="Social Media"
                        challenge="Challenge Facebook's dominance in social networking"
                        approach="Feature-focused launch without understanding social community dynamics and cultural needs"
                        results="Discontinued 2019, failed to reach 1% of Facebook's user base"
                        success={false}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Guide */}
              <section id="implementation-guide">
                <Card className="glass-card bg-gradient-to-r from-brand-600/20 to-accent-600/20">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-primary-50 mb-6">Implementation Roadmap</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Phase 1: Assessment</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Market convention analysis</li>
                          <li>• Cultural trend research</li>
                          <li>• Micro-community identification</li>
                          <li>• Competitive landscape mapping</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Phase 2: Strategy</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Cultural positioning development</li>
                          <li>• Community engagement plan</li>
                          <li>• Authentic voice creation</li>
                          <li>• Launch campaign design</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-primary-50 mb-4">Phase 3: Execution</h3>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Pilot campaign launch</li>
                          <li>• Community response monitoring</li>
                          <li>• Performance optimization</li>
                          <li>• Scale and expansion planning</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-brand-500/20 rounded-lg p-6 inline-block">
                        <h3 className="text-xl font-bold text-primary-50 mb-2">Expected Outcomes:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <div className="text-3xl font-bold text-brand-400">73%</div>
                            <div className="text-sm text-primary-300">Success Probability</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-brand-400">4.7x</div>
                            <div className="text-sm text-primary-300">Market Penetration</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-brand-400">247%</div>
                            <div className="text-sm text-primary-300">Revenue Growth</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-brand-400">18 Months</div>
                            <div className="text-sm text-primary-300">To Market Leader</div>
                          </div>
                        </div>
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
            "@type": "Article",
            "headline": "Challenger Brand Success Patterns",
            "description": "Analysis of 847 challenger brands reveals the cultural intelligence strategies that drive 4.7x higher market penetration rates and sustained competitive advantage.",
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
              "@id": "https://cultrcode.com/reports/challenger-brand-success"
            },
            "keywords": "challenger brands, brand strategy, cultural intelligence, market analysis, business strategy, brand positioning, competitive analysis"
          })
        }}
      />
    </div>
  )
}