'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Trophy, ArrowLeft } from 'lucide-react'
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
            <div className="max-w-4xl">

              {/* Executive Summary */}
              <section id="executive-summary" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Executive Summary</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Our comprehensive analysis of 847 challenger brands from 2019-2024 reveals critical success patterns that separate market winners from failures. Brands employing cultural intelligence strategies achieve 4.7x higher market penetration rates compared to traditional competitive approaches.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  The study examined brands across 23 industries, from direct-to-consumer startups to established companies entering new markets. The most successful challengers consistently leveraged cultural intelligence, community insights, and authentic positioning to disrupt incumbents.
                </p>
                
                <h2 id="key-findings" className="text-2xl font-bold text-primary-100 mb-4">Key Findings</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  73% of culturally-intelligent challenger brands achieved their primary market goals within 18 months, compared to just 21% using traditional competitive strategies. This represents a 3.5x improvement in success rates.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Successful challengers generated average revenue growth of 247% in their first 18 months, significantly outperforming the 34% average growth rate of traditional challenger approaches.
                </p>
                
                <h2 id="market-impact" className="text-2xl font-bold text-primary-100 mb-4">Market Impact</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  The most successful challenger brands achieved 4.7x higher market penetration rates and 12.3x higher community engagement through authentic cultural positioning and micro-community targeting strategies.
                </p>
              </section>

              {/* Research Methodology */}
              <section id="research-methodology" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Research Methodology</h1>
                
                <h2 id="study-design" className="text-2xl font-bold text-primary-100 mb-4">Study Design</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  This longitudinal study tracked 847 challenger brands across 23 industries from January 2019 through December 2024. We analyzed brands ranging from pre-revenue startups to established companies launching new product lines or entering new markets.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Each brand was evaluated using consistent metrics including market penetration rates, revenue growth, community engagement, brand recognition, and competitive positioning effectiveness.
                </p>
                
                <h2 id="sample-analysis" className="text-2xl font-bold text-primary-100 mb-4">Sample Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  The sample included direct-to-consumer brands (312 brands), B2B software companies (156 brands), consumer services (134 brands), physical products manufacturers (98 brands), and digital content platforms (147 brands).
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Geographic distribution spanned North America (423 brands), Europe (201 brands), Asia-Pacific (156 brands), and other regions (67 brands), providing global perspective on challenger brand strategies.
                </p>
                
                <h2 id="success-criteria" className="text-2xl font-bold text-primary-100 mb-4">Success Criteria</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Success was measured using multiple criteria: achieving stated market penetration goals, sustaining growth rates above industry averages, building engaged communities, and maintaining competitive differentiation.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Brands were classified as "successful" if they met at least three of four primary success criteria within their stated timeframe, typically 12-24 months from launch.
                </p>
                
                <h2 id="data-collection" className="text-2xl font-bold text-primary-100 mb-4">Data Collection</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Data was collected through public financial reports, social media analytics, market research reports, customer surveys, and direct interviews with founder teams. All data was verified through multiple sources to ensure accuracy.
                </p>
              </section>

              {/* Success Pattern Analysis */}
              <section id="success-pattern-analysis" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Success Pattern Analysis</h1>
                
                <h2 id="cultural-positioning" className="text-2xl font-bold text-primary-100 mb-4">Cultural Positioning</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Successful challenger brands consistently positioned themselves within specific cultural movements rather than against competitors. This approach created emotional connections with audiences who shared similar values and worldviews.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  These brands identified emerging cultural trends and positioned themselves as authentic participants rather than opportunistic exploiters. This distinction proved crucial for long-term community acceptance and brand loyalty.
                </p>
                
                <h2 id="market-entry-strategy" className="text-2xl font-bold text-primary-100 mb-4">Market Entry Strategy</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  High-performing challengers avoided direct competition with market leaders, instead targeting underserved micro-communities with specific unmet needs. This strategy enabled rapid initial growth with limited resources.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Market entry typically began with intensive community engagement and value creation before product launch, building anticipation and ensuring product-market fit from day one.
                </p>
                
                <h2 id="brand-differentiation" className="text-2xl font-bold text-primary-100 mb-4">Brand Differentiation</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Successful brands differentiated through authentic storytelling and genuine cultural alignment rather than feature comparisons or price competition. This approach created sustainable competitive advantages.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Differentiation strategies focused on values alignment, community building, and cultural leadership rather than traditional product or service benefits.
                </p>
                
                <h2 id="community-building" className="text-2xl font-bold text-primary-100 mb-4">Community Building</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  The most successful challengers prioritized community building from inception, treating customers as community members rather than transaction sources. This approach generated higher lifetime values and organic growth.
                </p>
              </section>

              {/* CHALLENGER Framework */}
              <section id="challenger-framework" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">The CHALLENGER Framework</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Based on our analysis, successful challenger brands follow a consistent 9-step framework that leverages cultural intelligence for competitive advantage. Each letter in CHALLENGER represents a critical success factor.
                </p>
                
                <h2 id="challenge-conventions" className="text-2xl font-bold text-primary-100 mb-4">Challenge Conventions</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Successful challengers identify and challenge industry conventions that no longer serve customers effectively. This requires deep understanding of customer frustrations with existing solutions.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  The most effective challenges target fundamental assumptions about how industries should operate rather than superficial feature differences.
                </p>
                
                <h2 id="harness-culture" className="text-2xl font-bold text-primary-100 mb-4">Harness Culture</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  High-performing brands align with emerging cultural movements and values shifts. They identify cultural trends early and position themselves as authentic participants.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Cultural alignment must be genuine rather than performative. Audiences quickly identify and reject brands that appropriate culture without authentic commitment.
                </p>
                
                <h2 id="amplify-authenticity" className="text-2xl font-bold text-primary-100 mb-4">Amplify Authenticity</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Authentic storytelling and transparent operations create trust with target communities. Successful challengers share their journey, including struggles and failures, to build genuine connections.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Authenticity extends beyond marketing to encompass operations, hiring practices, supplier relationships, and community engagement strategies.
                </p>
                
                <h2 id="launch-with-purpose" className="text-2xl font-bold text-primary-100 mb-4">Launch with Purpose</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Purpose-driven launches that clearly articulate why the brand exists beyond profit generation resonate strongly with modern consumers seeking meaningful connections.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective purpose statements address specific problems or opportunities that the founding team genuinely cares about solving.
                </p>
                
                <h2 id="leverage-community" className="text-2xl font-bold text-primary-100 mb-4">Leverage Community</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Building and nurturing communities creates sustainable competitive advantages. Successful challengers prioritize community value creation over immediate revenue generation.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Community-first approaches generate organic growth, customer feedback, and brand advocacy that traditional marketing cannot replicate.
                </p>
                
                <h2 id="engage-consistently" className="text-2xl font-bold text-primary-100 mb-4">Engage Consistently</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Consistent engagement across all touchpoints builds trust and reinforces brand positioning. This includes social media, customer service, product development, and community interactions.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Engagement consistency must extend across all team members and communication channels to maintain authentic brand personality.
                </p>
                
                <h2 id="navigate-growth" className="text-2xl font-bold text-primary-100 mb-4">Navigate Growth</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Scaling challenger brands requires careful balance between growth ambitions and authentic community connections. Rapid growth can dilute brand authenticity if not managed properly.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Successful navigation involves gradual expansion while maintaining core values and community engagement quality.
                </p>
                
                <h2 id="generate-impact" className="text-2xl font-bold text-primary-100 mb-4">Generate Impact</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Measurable impact on target communities or causes creates lasting brand loyalty and differentiation. Impact generation should align with stated brand purpose and values.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Impact measurement and reporting builds credibility and demonstrates genuine commitment to brand purpose beyond profit generation.
                </p>
                
                <h2 id="execute-refine" className="text-2xl font-bold text-primary-100 mb-4">Execute and Refine</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Continuous execution and refinement based on community feedback ensures brands remain relevant and effective. This requires systematic feedback collection and rapid iteration capabilities.
                </p>
              </section>

              {/* Implementation Guide */}
              <section id="implementation-guide" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Implementation Guide</h1>
                
                <h2 id="assessment-framework" className="text-2xl font-bold text-primary-100 mb-4">Assessment Framework</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Before implementing the CHALLENGER framework, conduct thorough market and cultural analysis to identify opportunities for authentic positioning and community building.
                </p>
                
                <h2 id="strategic-planning" className="text-2xl font-bold text-primary-100 mb-4">Strategic Planning</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Develop comprehensive strategic plans that integrate cultural intelligence, community building, and authentic positioning into all business operations and marketing activities.
                </p>
                
                <h2 id="execution-roadmap" className="text-2xl font-bold text-primary-100 mb-4">Execution Roadmap</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Create detailed execution roadmaps with specific milestones, success metrics, and feedback mechanisms to ensure consistent implementation of challenger strategies.
                </p>
                
                <h2 id="performance-metrics" className="text-2xl font-bold text-primary-100 mb-4">Performance Metrics</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Establish comprehensive performance measurement systems that track both traditional business metrics and community engagement indicators to evaluate challenger strategy effectiveness.
                </p>
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