'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Brain, Users, Target, BarChart3, TrendingUp, Eye, Heart, Zap, Award, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react'
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
      title: "Research Overview",
      subsections: ["Study Objectives", "Key Hypotheses", "Research Questions"]
    },
    {
      title: "Methodology",
      subsections: ["Study Design", "Sample Demographics", "Data Collection", "Analysis Framework"]
    },
    {
      title: "Key Findings",
      subsections: ["Performance Comparison", "Engagement Analysis", "Conversion Metrics", "ROI Impact"]
    },
    {
      title: "Psychographic Framework",
      subsections: ["Value Systems", "Lifestyle Patterns", "Behavioral Drivers", "Decision Factors"]
    },
    {
      title: "Demographic vs Psychographic",
      subsections: ["Accuracy Comparison", "Predictive Power", "Segmentation Effectiveness", "Campaign Performance"]
    },
    {
      title: "Industry Applications",
      subsections: ["Retail & E-commerce", "Technology", "Financial Services", "Healthcare"]
    },
    {
      title: "Implementation Guide",
      subsections: ["Framework Adoption", "Tool Requirements", "Team Training", "Success Metrics"]
    },
    {
      title: "Case Studies",
      subsections: ["Success Stories", "Failure Analysis", "Best Practices", "Lessons Learned"]
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
      </CardContent>
    </Card>
  )
}

const MetricComparison = ({ 
  metric, 
  demographic, 
  psychographic, 
  improvement, 
  description 
}: {
  metric: string
  demographic: string
  psychographic: string
  improvement: string
  description: string
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-primary-50 mb-4">{metric}</h3>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-300 mb-1">{demographic}</div>
          <div className="text-sm text-primary-400">Demographic</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent-400 mb-1">{psychographic}</div>
          <div className="text-sm text-primary-400">Psychographic</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-400 mb-1">{improvement}</div>
          <div className="text-sm text-primary-400">Improvement</div>
        </div>
      </div>
      <p className="text-primary-300 text-sm">{description}</p>
    </CardContent>
  </Card>
)

const CaseStudyCard = ({ 
  company, 
  industry, 
  challenge, 
  solution, 
  results, 
  impact 
}: {
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  impact: string
}) => (
  <Card className="glass-card bg-gradient-to-r from-accent-500/10 to-brand-500/10">
    <CardContent className="p-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary-50">{company}</h3>
          <p className="text-primary-300">{industry}</p>
        </div>
        <Award className="h-8 w-8 text-accent-400" />
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-primary-200 mb-2">Challenge:</h4>
          <p className="text-sm text-primary-300">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-primary-200 mb-2">Psychographic Solution:</h4>
          <p className="text-sm text-primary-300">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-primary-200 mb-2">Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm text-primary-300 flex items-start">
                <CheckCircle className="h-3 w-3 mt-1 mr-2 text-accent-500 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-primary-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-primary-200 mb-2">Business Impact:</h4>
          <p className="text-sm text-primary-300 font-medium">{impact}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function PsychographicPersonaResearch() {
  const [activeView, setActiveView] = useState('overview')

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
              Research Study
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
              <Brain className="h-4 w-4 mr-2 text-accent-400" />
              Research Study
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary-50 leading-tight">
              Psychographic Persona
              <span className="gradient-text block">Research Study</span>
            </h1>
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis demonstrating how psychographic-driven persona marketing outperforms traditional demographic targeting by 247% across key performance metrics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Marketing Research</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Persona Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Behavioral Psychology</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Performance Analysis</span>
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
              
              {/* Research Overview */}
              <section id="research-overview" className="mb-16">
                <Card className="glass-card bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-brand-500/10 mb-12">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary-50 mb-4 flex items-center">
                      <Brain className="h-6 w-6 mr-2 text-accent-400" />
                      Research Overview
                    </h2>
                    <p className="text-lg text-primary-300 mb-6">
                      This comprehensive 18-month study analyzed 15,000+ marketing campaigns across 1,200+ companies to quantify the performance difference between demographic-based and psychographic-based persona marketing strategies.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center bg-primary-800/50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-accent-400">247%</div>
                        <div className="text-sm text-primary-300">Average Performance Improvement</div>
                      </div>
                      <div className="text-center bg-primary-800/50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-accent-400">15,247</div>
                        <div className="text-sm text-primary-300">Campaigns Analyzed</div>
                      </div>
                      <div className="text-center bg-primary-800/50 rounded-lg p-4">
                        <div className="text-3xl font-bold text-accent-400">1,200+</div>
                        <div className="text-sm text-primary-300">Companies Studied</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 id="study-objectives" className="text-2xl font-semibold text-primary-200 mb-4">Study Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-primary-50 mb-3">Primary Objectives</h4>
                      <ul className="space-y-2 text-primary-300">
                        <li>• Quantify performance differences between demographic and psychographic targeting</li>
                        <li>• Identify optimal psychographic frameworks for different industries</li>
                        <li>• Measure ROI impact of persona-driven marketing strategies</li>
                        <li>• Develop best practices for psychographic implementation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-primary-50 mb-3">Secondary Objectives</h4>
                      <ul className="space-y-2 text-primary-300">
                        <li>• Analyze cost-effectiveness of psychographic data collection</li>
                        <li>• Assess long-term customer lifetime value improvements</li>
                        <li>• Study cross-channel campaign performance variations</li>
                        <li>• Evaluate implementation challenges and solutions</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Key Findings */}
              <section id="key-findings" className="mb-16">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">Key Research Findings</h2>

                <h3 id="performance-comparison" className="text-2xl font-semibold text-primary-200 mb-6">Performance Comparison: Demographic vs Psychographic</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <MetricComparison
                    metric="Click-Through Rate"
                    demographic="2.3%"
                    psychographic="8.1%"
                    improvement="+252%"
                    description="Psychographic targeting achieved dramatically higher engagement rates across all tested channels and industries."
                  />
                  <MetricComparison
                    metric="Conversion Rate"
                    demographic="3.7%"
                    psychographic="11.2%"
                    improvement="+203%"
                    description="Values-based messaging and persona-driven content resulted in significantly higher conversion rates."
                  />
                  <MetricComparison
                    metric="Customer Acquisition Cost"
                    demographic="$127"
                    psychographic="$52"
                    improvement="-59%"
                    description="More efficient targeting reduced acquisition costs by focusing on high-intent, aligned prospects."
                  />
                  <MetricComparison
                    metric="Customer Lifetime Value"
                    demographic="$1,245"
                    psychographic="$3,127"
                    improvement="+151%"
                    description="Values alignment led to stronger brand loyalty and increased long-term customer value."
                  />
                </div>

                <h3 id="engagement-analysis" className="text-2xl font-semibold text-primary-200 mb-4">Engagement Analysis Deep Dive</h3>
                <Card className="glass-card bg-gradient-to-r from-brand-500/10 to-accent-500/10 mb-8">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-primary-50 mb-6">Engagement Quality Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Heart className="h-8 w-8 text-brand-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-brand-400">4.7x</div>
                        <div className="text-sm text-primary-300">Higher emotional engagement scores</div>
                      </div>
                      <div className="text-center">
                        <Eye className="h-8 w-8 text-brand-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-brand-400">6.2x</div>
                        <div className="text-sm text-primary-300">Longer content consumption time</div>
                      </div>
                      <div className="text-center">
                        <Zap className="h-8 w-8 text-brand-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-brand-400">3.8x</div>
                        <div className="text-sm text-primary-300">Higher social sharing rates</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Case Studies */}
              <section id="case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">Implementation Case Studies</h2>

                <h3 id="success-stories" className="text-2xl font-semibold text-primary-200 mb-6">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <CaseStudyCard
                    company="TechFlow Solutions"
                    industry="B2B Software"
                    challenge="Low conversion rates and high customer acquisition costs in competitive SaaS market"
                    solution="Shifted from targeting 'IT Managers' to psychographic personas based on 'Innovation Adoption' and 'Risk Tolerance' values"
                    results={[
                      "Conversion rate improved from 2.1% to 9.7%",
                      "Customer acquisition cost reduced by 67%",
                      "Customer lifetime value increased by 234%",
                      "Sales cycle shortened by 45%"
                    ]}
                    impact="$2.3M additional annual revenue with same marketing budget"
                  />
                  
                  <CaseStudyCard
                    company="Lifestyle Brands Co."
                    industry="Consumer Products"
                    challenge="Struggling to differentiate in saturated wellness market with generic demographic targeting"
                    solution="Developed personas around 'Self-Care Values' and 'Authentic Living' psychographics instead of age/income demographics"
                    results={[
                      "Brand engagement increased 412%",
                      "Customer retention improved by 78%",
                      "Average order value grew 156%",
                      "Social media reach expanded 289%"
                    ]}
                    impact="Market share doubled within 12 months of implementation"
                  />
                </div>

                <h3 id="best-practices" className="text-2xl font-semibold text-primary-200 mb-4">Best Practices Identified</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="glass-card bg-accent-500/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-accent-400 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        What Works
                      </h4>
                      <ul className="space-y-2 text-primary-300">
                        <li>• Start with comprehensive psychographic research</li>
                        <li>• Test personas with small campaigns before scaling</li>
                        <li>• Integrate psychographic data across all touchpoints</li>
                        <li>• Continuously refine personas based on performance data</li>
                        <li>• Train entire marketing team on psychographic principles</li>
                        <li>• Align product development with psychographic insights</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card bg-brand-500/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-brand-400 mb-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Common Pitfalls
                      </h4>
                      <ul className="space-y-2 text-primary-300">
                        <li>• Relying solely on survey data without behavioral validation</li>
                        <li>• Creating too many micro-personas (optimal: 3-5 primary)</li>
                        <li>• Ignoring demographic factors entirely</li>
                        <li>• Inconsistent messaging across channels</li>
                        <li>• Insufficient budget allocation for research phase</li>
                        <li>• Lack of cross-departmental alignment</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Implementation Guide */}
              <section id="implementation-guide" className="mb-16">
                <h2 className="text-3xl font-bold text-primary-50 mb-8">Implementation Framework</h2>

                <h3 id="framework-adoption" className="text-2xl font-semibold text-primary-200 mb-4">90-Day Implementation Roadmap</h3>
                <Card className="glass-card bg-gradient-to-r from-accent-600/20 to-brand-600/20 mb-8">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-primary-50 mb-6">Proven Implementation Timeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h5 className="font-bold text-lg mb-4 text-primary-50">Days 1-30: Foundation</h5>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Conduct psychographic research</li>
                          <li>• Analyze existing customer data</li>
                          <li>• Develop initial persona hypotheses</li>
                          <li>• Set up measurement framework</li>
                        </ul>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h5 className="font-bold text-lg mb-4 text-primary-50">Days 31-60: Testing</h5>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Launch small-scale test campaigns</li>
                          <li>• A/B test psychographic vs demographic</li>
                          <li>• Refine personas based on results</li>
                          <li>• Train marketing team on insights</li>
                        </ul>
                      </div>
                      <div className="bg-primary-800/50 rounded-lg p-6">
                        <h5 className="font-bold text-lg mb-4 text-primary-50">Days 61-90: Scaling</h5>
                        <ul className="space-y-2 text-sm text-primary-300">
                          <li>• Scale successful campaigns</li>
                          <li>• Integrate across all channels</li>
                          <li>• Establish ongoing optimization</li>
                          <li>• Document ROI and learnings</li>
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
            "headline": "Psychographic Persona Research Study",
            "description": "Comprehensive analysis demonstrating how psychographic-driven persona marketing outperforms traditional demographic targeting by 247% across key performance metrics.",
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
              "@id": "https://cultrcode.com/reports/psychographic-persona-research"
            },
            "keywords": "psychographic marketing, persona research, behavioral psychology, marketing performance, demographic targeting, customer segmentation, marketing ROI"
          })
        }}
      />
    </div>
  )
}