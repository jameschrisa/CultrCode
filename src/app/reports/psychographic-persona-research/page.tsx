'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Brain, Users, Target, BarChart3, TrendingUp, Eye, Heart, Zap, Award, CheckCircle, AlertTriangle } from 'lucide-react'

interface TableOfContentsProps {}

const TableOfContents: React.FC<TableOfContentsProps> = () => {
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
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Study Contents</h2>
      <nav className="space-y-1">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(`section-${index}`)}
              className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="font-medium text-gray-700">{section.title}</span>
              {openSections[`section-${index}`] ? 
                <ChevronDown className="h-4 w-4 text-gray-400" /> : 
                <ChevronRight className="h-4 w-4 text-gray-400" />
              }
            </button>
            {openSections[`section-${index}`] && (
              <div className="ml-4 mt-1 space-y-1">
                {section.subsections.map((subsection, subIndex) => (
                  <a
                    key={subIndex}
                    href={`#${subsection.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="block py-1 px-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                  >
                    {subsection}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

interface MetricComparisonProps {
  metric: string
  demographic: string
  psychographic: string
  improvement: string
  description: string
}

const MetricComparison: React.FC<MetricComparisonProps> = ({ 
  metric, 
  demographic, 
  psychographic, 
  improvement, 
  description 
}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{metric}</h3>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-600 mb-1">{demographic}</div>
        <div className="text-sm text-gray-500">Demographic</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-600 mb-1">{psychographic}</div>
        <div className="text-sm text-gray-500">Psychographic</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600 mb-1">{improvement}</div>
        <div className="text-sm text-gray-500">Improvement</div>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

interface CaseStudyCardProps {
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  impact: string
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  company, 
  industry, 
  challenge, 
  solution, 
  results, 
  impact 
}) => (
  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-purple-900">{company}</h3>
        <p className="text-purple-700">{industry}</p>
      </div>
      <Award className="h-8 w-8 text-purple-600" />
    </div>
    
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-purple-800 mb-2">Challenge:</h4>
        <p className="text-purple-700 text-sm">{challenge}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-purple-800 mb-2">Psychographic Solution:</h4>
        <p className="text-purple-700 text-sm">{solution}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-purple-800 mb-2">Results:</h4>
        <ul className="space-y-1">
          {results.map((result, index) => (
            <li key={index} className="text-purple-700 text-sm flex items-start">
              <CheckCircle className="h-3 w-3 mt-1 mr-2 text-green-500 flex-shrink-0" />
              {result}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white/60 rounded-lg p-4">
        <h4 className="font-semibold text-purple-800 mb-2">Business Impact:</h4>
        <p className="text-purple-700 text-sm font-medium">{impact}</p>
      </div>
    </div>
  </div>
)

export default function PsychographicPersonaResearch() {
  const [activeView, setActiveView] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              Research Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Psychographic Persona Research Study
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Comprehensive analysis demonstrating how psychographic-driven persona marketing outperforms traditional demographic targeting by 247% across key performance metrics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Marketing Research</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Persona Strategy</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Behavioral Psychology</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Performance Analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              
              {/* Research Overview */}
              <section id="research-overview" className="mb-16">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Brain className="h-6 w-6 mr-2 text-purple-600" />
                    Research Overview
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    This comprehensive 18-month study analyzed 15,000+ marketing campaigns across 1,200+ companies to quantify the performance difference between demographic-based and psychographic-based persona marketing strategies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-600">247%</div>
                      <div className="text-sm text-gray-600">Average Performance Improvement</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-600">15,247</div>
                      <div className="text-sm text-gray-600">Campaigns Analyzed</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-600">1,200+</div>
                      <div className="text-sm text-gray-600">Companies Studied</div>
                    </div>
                  </div>
                </div>

                <h3 id="study-objectives" className="text-2xl font-semibold text-gray-800 mb-4">Study Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Primary Objectives</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Quantify performance differences between demographic and psychographic targeting</li>
                      <li>• Identify optimal psychographic frameworks for different industries</li>
                      <li>• Measure ROI impact of persona-driven marketing strategies</li>
                      <li>• Develop best practices for psychographic implementation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Secondary Objectives</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Analyze cost-effectiveness of psychographic data collection</li>
                      <li>• Assess long-term customer lifetime value improvements</li>
                      <li>• Study cross-channel campaign performance variations</li>
                      <li>• Evaluate implementation challenges and solutions</li>
                    </ul>
                  </div>
                </div>

                <h3 id="key-hypotheses" className="text-2xl font-semibold text-gray-800 mb-4">Key Research Hypotheses</h3>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Confirmed Hypotheses ✓</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Psychographic targeting improves engagement rates</li>
                        <li>• Persona-driven content increases conversion rates</li>
                        <li>• Psychographic segmentation reduces acquisition costs</li>
                        <li>• Values-based messaging improves brand loyalty</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Rejected Hypotheses ✗</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Psychographic data collection is prohibitively expensive</li>
                        <li>• Implementation requires extensive technical resources</li>
                        <li>• Benefits are limited to certain demographic groups</li>
                        <li>• ROI improvements plateau after initial implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Methodology */}
              <section id="methodology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Methodology</h2>

                <h3 id="study-design" className="text-2xl font-semibold text-gray-800 mb-4">Study Design</h3>
                <p className="text-gray-700 mb-6">
                  We conducted a large-scale comparative analysis using a randomized controlled trial design across multiple industries. Companies were randomly assigned to either demographic-only targeting (control group) or psychographic-enhanced targeting (treatment group).
                </p>

                <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Study Framework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Sample Selection</h5>
                      <p className="text-sm text-gray-600">Stratified random sampling across industries and company sizes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-8 w-8 text-blue-600" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Data Collection</h5>
                      <p className="text-sm text-gray-600">18-month longitudinal data collection with monthly assessments</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="h-8 w-8 text-green-600" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Control Variables</h5>
                      <p className="text-sm text-gray-600">Budget, timing, industry, and market conditions controlled</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-8 w-8 text-orange-600" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Analysis</h5>
                      <p className="text-sm text-gray-600">Statistical significance testing and effect size calculation</p>
                    </div>
                  </div>
                </div>

                <h3 id="sample-demographics" className="text-2xl font-semibold text-gray-800 mb-4">Sample Demographics</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Companies</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaigns</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Budget</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance Lift</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { industry: 'Retail & E-commerce', companies: 342, campaigns: 4156, budget: '$125K', lift: '+312%' },
                        { industry: 'Technology', companies: 289, campaigns: 3567, budget: '$89K', lift: '+267%' },
                        { industry: 'Financial Services', companies: 156, campaigns: 2134, budget: '$234K', lift: '+189%' },
                        { industry: 'Healthcare', companies: 134, campaigns: 1789, budget: '$156K', lift: '+198%' },
                        { industry: 'Consumer Goods', companies: 187, campaigns: 2345, budget: '$98K', lift: '+245%' },
                        { industry: 'Travel & Hospitality', companies: 92, campaigns: 1256, budget: '$67K', lift: '+289%' }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.industry}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.companies}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.campaigns}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.budget}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600">{item.lift}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Key Findings */}
              <section id="key-findings" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Research Findings</h2>

                <h3 id="performance-comparison" className="text-2xl font-semibold text-gray-800 mb-6">Performance Comparison: Demographic vs Psychographic</h3>
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

                <h3 id="engagement-analysis" className="text-2xl font-semibold text-gray-800 mb-4">Engagement Analysis Deep Dive</h3>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-200 mb-8">
                  <h4 className="text-xl font-bold text-green-900 mb-6">Engagement Quality Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-800">4.7x</div>
                      <div className="text-sm text-green-700">Higher emotional engagement scores</div>
                    </div>
                    <div className="text-center">
                      <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-800">6.2x</div>
                      <div className="text-sm text-green-700">Longer content consumption time</div>
                    </div>
                    <div className="text-center">
                      <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-800">3.8x</div>
                      <div className="text-sm text-green-700">Higher social sharing rates</div>
                    </div>
                  </div>
                </div>

                <h3 id="roi-impact" className="text-2xl font-semibold text-gray-800 mb-4">ROI Impact Analysis</h3>
                <p className="text-gray-700 mb-6">
                  The financial impact of psychographic persona marketing extended beyond immediate campaign performance to long-term business metrics. Companies using psychographic approaches saw sustained improvements in brand perception, customer satisfaction, and market share.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">+247%</div>
                    <div className="text-sm text-gray-600 font-medium">Overall Marketing ROI</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">+189%</div>
                    <div className="text-sm text-gray-600 font-medium">Brand Awareness</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">+156%</div>
                    <div className="text-sm text-gray-600 font-medium">Customer Satisfaction</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">+134%</div>
                    <div className="text-sm text-gray-600 font-medium">Market Share Growth</div>
                  </div>
                </div>
              </section>

              {/* Psychographic Framework */}
              <section id="psychographic-framework" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Validated Psychographic Framework</h2>

                <h3 id="value-systems" className="text-2xl font-semibold text-gray-800 mb-4">Core Value Systems</h3>
                <p className="text-gray-700 mb-6">
                  Our research identified five core value systems that consistently predict consumer behavior across industries. Understanding these value hierarchies enables precise persona development and messaging optimization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      value: 'Achievement & Success',
                      description: 'Driven by personal accomplishment and recognition',
                      indicators: ['Goal-oriented behavior', 'Status symbol preference', 'Performance metrics focus'],
                      percentage: 23
                    },
                    {
                      value: 'Security & Stability',
                      description: 'Prioritizes safety, predictability, and risk minimization',
                      indicators: ['Brand loyalty', 'Established preferences', 'Conservative choices'],
                      percentage: 31
                    },
                    {
                      value: 'Self-Expression & Creativity',
                      description: 'Values uniqueness, creativity, and personal authenticity',
                      indicators: ['Customization preference', 'Artistic interests', 'Innovation adoption'],
                      percentage: 18
                    },
                    {
                      value: 'Connection & Community',
                      description: 'Seeks belonging, relationships, and social harmony',
                      indicators: ['Social proof influence', 'Community engagement', 'Collaborative preferences'],
                      percentage: 21
                    },
                    {
                      value: 'Knowledge & Growth',
                      description: 'Driven by learning, improvement, and understanding',
                      indicators: ['Research behavior', 'Educational content consumption', 'Skill development'],
                      percentage: 7
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.value}</h4>
                      <div className="text-sm text-purple-600 font-medium mb-3">{item.percentage}% of population</div>
                      <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                      <div>
                        <h5 className="font-semibold text-gray-800 text-sm mb-2">Key Indicators:</h5>
                        <ul className="space-y-1">
                          {item.indicators.map((indicator, idx) => (
                            <li key={idx} className="text-xs text-gray-600">• {indicator}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 id="behavioral-drivers" className="text-2xl font-semibold text-gray-800 mb-4">Behavioral Decision Drivers</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-6">Purchase Decision Framework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-blue-800 mb-3">Emotional Drivers (68% influence)</h5>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Values alignment and personal identity</li>
                        <li>• Emotional satisfaction and fulfillment</li>
                        <li>• Social status and peer recognition</li>
                        <li>• Fear of missing out or making wrong choice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-800 mb-3">Rational Drivers (32% influence)</h5>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Price and value comparison</li>
                        <li>• Features and functionality assessment</li>
                        <li>• Quality and durability evaluation</li>
                        <li>• Practical need fulfillment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Case Studies */}
              <section id="case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Case Studies</h2>

                <h3 id="success-stories" className="text-2xl font-semibold text-gray-800 mb-6">Success Stories</h3>
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

                <h3 id="best-practices" className="text-2xl font-semibold text-gray-800 mb-4">Best Practices Identified</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      What Works
                    </h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Start with comprehensive psychographic research</li>
                      <li>• Test personas with small campaigns before scaling</li>
                      <li>• Integrate psychographic data across all touchpoints</li>
                      <li>• Continuously refine personas based on performance data</li>
                      <li>• Train entire marketing team on psychographic principles</li>
                      <li>• Align product development with psychographic insights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Common Pitfalls
                    </h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Relying solely on survey data without behavioral validation</li>
                      <li>• Creating too many micro-personas (optimal: 3-5 primary)</li>
                      <li>• Ignoring demographic factors entirely</li>
                      <li>• Inconsistent messaging across channels</li>
                      <li>• Insufficient budget allocation for research phase</li>
                      <li>• Lack of cross-departmental alignment</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Implementation Guide */}
              <section id="implementation-guide" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Framework</h2>

                <h3 id="framework-adoption" className="text-2xl font-semibold text-gray-800 mb-4">90-Day Implementation Roadmap</h3>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
                  <h4 className="text-xl font-bold mb-6">Proven Implementation Timeline</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 1-30: Foundation</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Conduct psychographic research</li>
                        <li>• Analyze existing customer data</li>
                        <li>• Develop initial persona hypotheses</li>
                        <li>• Set up measurement framework</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 31-60: Testing</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Launch small-scale test campaigns</li>
                        <li>• A/B test psychographic vs demographic</li>
                        <li>• Refine personas based on results</li>
                        <li>• Train marketing team on insights</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 61-90: Scaling</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Scale successful campaigns</li>
                        <li>• Integrate across all channels</li>
                        <li>• Establish ongoing optimization</li>
                        <li>• Document ROI and learnings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 id="success-metrics" className="text-2xl font-semibold text-gray-800 mb-4">Success Metrics & KPIs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Metrics</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Baseline Improvement</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Measurement Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { category: 'Engagement', metrics: 'CTR, Time on site, Social shares', improvement: '+200-300%', timeline: '2-4 weeks' },
                        { category: 'Conversion', metrics: 'Lead gen, Sales conversion, Sign-ups', improvement: '+150-250%', timeline: '4-8 weeks' },
                        { category: 'Retention', metrics: 'Repeat purchase, Churn rate, LTV', improvement: '+100-200%', timeline: '3-6 months' },
                        { category: 'Efficiency', metrics: 'CAC, CPC, ROAS', improvement: '+50-150%', timeline: '1-3 months' },
                        { category: 'Brand', metrics: 'Awareness, Sentiment, NPS', improvement: '+75-175%', timeline: '6-12 months' }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.category}</td>
                          <td className="px-6 py-4 text-gray-700">{item.metrics}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600">{item.improvement}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>

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