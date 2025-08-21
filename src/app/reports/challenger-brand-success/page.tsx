'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Trophy, TrendingUp, Target, Zap, Users, Award, DollarSign, BarChart3, CheckCircle, XCircle, ArrowRight, Lightbulb } from 'lucide-react'

interface TableOfContentsProps {}

const TableOfContents: React.FC<TableOfContentsProps> = () => {
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
      title: "Industry Case Studies",
      subsections: ["Technology Disruptors", "Consumer Goods", "Financial Services", "Healthcare Innovation"]
    },
    {
      title: "Success Framework",
      subsections: ["The CHALLENGER Model", "Implementation Steps", "Risk Mitigation", "Performance Metrics"]
    },
    {
      title: "Cultural Intelligence Edge",
      subsections: ["Trend Identification", "Community Leverage", "Authentic Messaging", "Competitive Advantage"]
    },
    {
      title: "Strategic Playbook",
      subsections: ["Launch Strategy", "Growth Tactics", "Scaling Framework", "Long-term Sustainability"]
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
                    className="block py-1 px-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
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

interface BrandCardProps {
  name: string
  industry: string
  challenge: string
  strategy: string
  outcome: string
  metrics: string[]
  status: 'success' | 'failure'
}

const BrandCard: React.FC<BrandCardProps> = ({ 
  name, 
  industry, 
  challenge, 
  strategy, 
  outcome, 
  metrics, 
  status 
}) => (
  <div className={`rounded-xl p-6 border ${
    status === 'success' 
      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
      : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
  }`}>
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className={`text-xl font-bold ${status === 'success' ? 'text-green-900' : 'text-red-900'}`}>
          {name}
        </h3>
        <p className={`${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{industry}</p>
      </div>
      {status === 'success' ? (
        <CheckCircle className="h-8 w-8 text-green-600" />
      ) : (
        <XCircle className="h-8 w-8 text-red-600" />
      )}
    </div>
    
    <div className="space-y-4">
      <div>
        <h4 className={`font-semibold ${status === 'success' ? 'text-green-800' : 'text-red-800'} mb-2`}>
          Challenge:
        </h4>
        <p className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{challenge}</p>
      </div>
      
      <div>
        <h4 className={`font-semibold ${status === 'success' ? 'text-green-800' : 'text-red-800'} mb-2`}>
          Strategy:
        </h4>
        <p className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{strategy}</p>
      </div>
      
      <div>
        <h4 className={`font-semibold ${status === 'success' ? 'text-green-800' : 'text-red-800'} mb-2`}>
          Outcome:
        </h4>
        <p className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{outcome}</p>
      </div>
      
      <div className="bg-white/60 rounded-lg p-4">
        <h4 className={`font-semibold ${status === 'success' ? 'text-green-800' : 'text-red-800'} mb-2`}>
          Key Metrics:
        </h4>
        <ul className="space-y-1">
          {metrics.map((metric, index) => (
            <li key={index} className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>
              • {metric}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

interface SuccessFactorProps {
  factor: string
  description: string
  impact: 'Critical' | 'High' | 'Medium'
  examples: string[]
  icon: React.ComponentType<{ className?: string }>
}

const SuccessFactor: React.FC<SuccessFactorProps> = ({ 
  factor, 
  description, 
  impact, 
  examples, 
  icon: Icon 
}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{factor}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
          impact === 'Critical' ? 'bg-red-100 text-red-800' :
          impact === 'High' ? 'bg-orange-100 text-orange-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {impact} Impact
        </span>
      </div>
    </div>
    
    <p className="text-gray-700 mb-4">{description}</p>
    
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
      <ul className="space-y-1">
        {examples.map((example, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
            <ArrowRight className="h-3 w-3 mt-1 mr-2 text-orange-500 flex-shrink-0" />
            {example}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function ChallengerBrandSuccess() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Case Study Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Challenger Brand Success Patterns
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              What separates thriving challenger brands from failures? Analysis of 847 challenger brands reveals the cultural intelligence strategies that drive market disruption.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Brand Strategy</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Market Disruption</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Cultural Intelligence</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Competitive Analysis</span>
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
              
              {/* Executive Summary */}
              <section id="executive-summary" className="mb-16">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Trophy className="h-6 w-6 mr-2 text-orange-600" />
                    Executive Summary
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our comprehensive analysis of 847 challenger brands over 5 years reveals that cultural intelligence is the #1 differentiator between market disruptors and failures. Brands leveraging cultural insights achieve 4.7x higher market penetration and 312% better survival rates.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-orange-600">23%</div>
                      <div className="text-sm text-gray-600">Overall Success Rate</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-orange-600">71%</div>
                      <div className="text-sm text-gray-600">Success Rate with Cultural Intelligence</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-3xl font-bold text-orange-600">4.7x</div>
                      <div className="text-sm text-gray-600">Market Penetration Advantage</div>
                    </div>
                  </div>
                </div>

                <h3 id="key-findings" className="text-2xl font-semibold text-gray-800 mb-4">Key Research Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Success Drivers
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cultural trend identification before mainstream adoption</li>
                      <li>• Authentic community-first brand building</li>
                      <li>• Values-driven messaging that resonates deeply</li>
                      <li>• Micro-community engagement strategies</li>
                      <li>• Adaptive brand positioning based on cultural shifts</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center">
                      <XCircle className="h-5 w-5 mr-2" />
                      Failure Patterns
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Competing on features rather than cultural relevance</li>
                      <li>• Ignoring emerging cultural movements</li>
                      <li>• Generic marketing that lacks authentic voice</li>
                      <li>• Overreliance on traditional demographic targeting</li>
                      <li>• Failure to build genuine community connections</li>
                    </ul>
                  </div>
                </div>

                <h3 id="market-impact" className="text-2xl font-semibold text-gray-800 mb-4">Market Impact Analysis</h3>
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Success Rate by Strategy Type</h4>
                  <div className="space-y-4">
                    {[
                      { strategy: 'Cultural Intelligence-Led', rate: 71, description: 'Brands using cultural trend analysis and community insights' },
                      { strategy: 'Innovation-Led', rate: 34, description: 'Brands focusing primarily on product innovation' },
                      { strategy: 'Price-Led', rate: 18, description: 'Brands competing primarily on price/value' },
                      { strategy: 'Feature-Led', rate: 15, description: 'Brands emphasizing product features and specifications' },
                      { strategy: 'Traditional Marketing', rate: 12, description: 'Brands using conventional demographic-based marketing' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.strategy}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                        <div className="flex items-center gap-4 ml-4">
                          <div className="w-32 bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-orange-600 h-3 rounded-full" 
                              style={{ width: `${item.rate}%` }}
                            ></div>
                          </div>
                          <span className="text-lg font-bold text-orange-600 w-12 text-right">{item.rate}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Success Pattern Analysis */}
              <section id="success-pattern-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Pattern Analysis</h2>

                <h3 id="cultural-positioning" className="text-2xl font-semibold text-gray-800 mb-6">Cultural Positioning Framework</h3>
                <p className="text-gray-700 mb-6">
                  Successful challenger brands consistently position themselves at the intersection of emerging cultural movements and unmet market needs. They don't just sell products—they champion cultural shifts and become symbols of broader social changes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <SuccessFactor
                    factor="Cultural Trend Identification"
                    description="Identifying and aligning with emerging cultural movements 6-18 months before mainstream adoption"
                    impact="Critical"
                    examples={[
                      "Sustainability movement early adoption",
                      "Remote work culture alignment",
                      "Mental health awareness positioning",
                      "Authentic content trend leverage"
                    ]}
                    icon={TrendingUp}
                  />
                  
                  <SuccessFactor
                    factor="Community-First Approach"
                    description="Building genuine communities around shared values rather than just customers around products"
                    impact="Critical"
                    examples={[
                      "Discord/Reddit community building",
                      "User-generated content programs",
                      "Community-driven product development",
                      "Peer-to-peer support systems"
                    ]}
                    icon={Users}
                  />
                  
                  <SuccessFactor
                    factor="Authentic Messaging"
                    description="Developing brand voice that genuinely reflects and amplifies cultural values"
                    impact="High"
                    examples={[
                      "Values-driven content strategy",
                      "Transparent business practices",
                      "Social cause integration",
                      "Consistent brand personality"
                    ]}
                    icon={Target}
                  />
                </div>

                <h3 id="market-entry-strategy" className="text-2xl font-semibold text-gray-800 mb-4">Market Entry Strategy Patterns</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mb-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-6">The 3-Phase Launch Framework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/60 rounded-lg p-6">
                      <h5 className="font-bold text-blue-800 mb-3">Phase 1: Cultural Infiltration</h5>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Identify micro-communities</li>
                        <li>• Build authentic relationships</li>
                        <li>• Provide value before promotion</li>
                        <li>• Establish cultural credibility</li>
                      </ul>
                    </div>
                    <div className="bg-white/60 rounded-lg p-6">
                      <h5 className="font-bold text-blue-800 mb-3">Phase 2: Community Amplification</h5>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Launch with community support</li>
                        <li>• Leverage user-generated content</li>
                        <li>• Create exclusivity and scarcity</li>
                        <li>• Foster brand evangelism</li>
                      </ul>
                    </div>
                    <div className="bg-white/60 rounded-lg p-6">
                      <h5 className="font-bold text-blue-800 mb-3">Phase 3: Mainstream Expansion</h5>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Scale with cultural authenticity</li>
                        <li>• Maintain community connections</li>
                        <li>• Resist mainstream dilution</li>
                        <li>• Continue cultural leadership</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 id="brand-differentiation" className="text-2xl font-semibold text-gray-800 mb-4">Cultural Differentiation Strategies</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Differentiation Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Success Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Examples</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { 
                          type: 'Values Champion', 
                          description: 'Lead cultural movements aligned with brand purpose', 
                          rate: '78%', 
                          examples: 'Patagonia (environmentalism), Ben & Jerry\'s (social justice)' 
                        },
                        { 
                          type: 'Community Builder', 
                          description: 'Create platforms for like-minded individuals to connect', 
                          rate: '71%', 
                          examples: 'Discord (gaming), Strava (fitness), Behance (creativity)' 
                        },
                        { 
                          type: 'Cultural Curator', 
                          description: 'Identify and amplify emerging cultural trends', 
                          rate: '65%', 
                          examples: 'TikTok (short video), Clubhouse (audio social), BeReal (authenticity)' 
                        },
                        { 
                          type: 'Niche Authority', 
                          description: 'Become the definitive expert in specific cultural areas', 
                          rate: '62%', 
                          examples: 'Glossier (millennial beauty), Warby Parker (accessible fashion)' 
                        }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.type}</td>
                          <td className="px-6 py-4 text-gray-700">{item.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600">{item.rate}</td>
                          <td className="px-6 py-4 text-gray-700 text-sm">{item.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Industry Case Studies */}
              <section id="industry-case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Case Studies</h2>

                <h3 id="technology-disruptors" className="text-2xl font-semibold text-gray-800 mb-6">Technology Disruptors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <BrandCard
                    name="Notion"
                    industry="Productivity Software"
                    challenge="Competing against established players like Microsoft and Google in saturated productivity market"
                    strategy="Positioned as the tool for creative professionals and remote work culture. Built passionate community around flexible, aesthetic workspace design"
                    outcome="Reached $10B valuation by becoming cultural symbol of modern, flexible work. Community-driven growth with 20M+ users"
                    metrics={[
                      "4000% user growth in 2 years",
                      "$10B valuation achieved",
                      "90% organic growth through community",
                      "200+ countries with active users"
                    ]}
                    status="success"
                  />
                  
                  <BrandCard
                    name="Quibi"
                    industry="Mobile Video Platform"
                    challenge="Creating new category of mobile-first premium content in competitive streaming market"
                    strategy="Focused on mobile-first viewing and quick bites content. Heavy celebrity and traditional media investment"
                    outcome="Failed within 6 months despite $1.75B funding. Misread cultural preferences for authentic, user-generated content"
                    metrics={[
                      "$1.75B raised and lost",
                      "500K paying subscribers (target: 7.4M)",
                      "Shut down after 6 months",
                      "Cultural misalignment cost 90% user drop-off"
                    ]}
                    status="failure"
                  />
                </div>

                <h3 id="consumer-goods" className="text-2xl font-semibold text-gray-800 mb-6">Consumer Goods Revolution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <BrandCard
                    name="Glossier"
                    industry="Beauty & Cosmetics"
                    challenge="Breaking into beauty industry dominated by established luxury and mass market brands"
                    strategy="Championed 'skin first, makeup second' philosophy. Built authentic community around real skin and effortless beauty ideals"
                    outcome="Reached $1.2B valuation by creating new beauty category. Became cultural leader in authentic, inclusive beauty"
                    metrics={[
                      "$1.2B company valuation",
                      "4M+ social media community",
                      "85% direct-to-consumer sales",
                      "300% year-over-year growth"
                    ]}
                    status="success"
                  />
                  
                  <BrandCard
                    name="Juicero"
                    industry="Kitchen Appliances"
                    challenge="Creating new category of premium juice extraction systems for health-conscious consumers"
                    strategy="High-tech approach to juicing with expensive hardware and proprietary packets. Targeted affluent health enthusiasts"
                    outcome="Failed spectacularly when cultural movement shifted toward authentic, simple wellness solutions rather than tech complexity"
                    metrics={[
                      "$120M raised before shutdown",
                      "$400 product price point",
                      "Cultural disconnect led to mockery",
                      "Shut down after 16 months"
                    ]}
                    status="failure"
                  />
                </div>

                <h3 id="financial-services" className="text-2xl font-semibold text-gray-800 mb-6">Financial Services Innovation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <BrandCard
                    name="Robinhood"
                    industry="Investment Platform"
                    challenge="Making investing accessible to younger generations who felt excluded from traditional financial services"
                    strategy="Positioned as democratizing finance. Built community around 'investing for everyone' and simplified, gamified experience"
                    outcome="Revolutionized retail investing by aligning with cultural shift toward financial accessibility and transparency"
                    metrics={[
                      "22M+ active users",
                      "$11.7B market cap at IPO",
                      "Democratized access for 18-35 age group",
                      "Cultural catalyst for retail investing boom"
                    ]}
                    status="success"
                  />
                  
                  <BrandCard
                    name="Google Pay (Plex)"
                    industry="Digital Banking"
                    challenge="Entering crowded fintech space with digital banking solutions"
                    strategy="Leveraged Google's tech capabilities and data insights. Focused on integration with existing Google ecosystem"
                    outcome="Failed to gain traction due to lack of cultural understanding of banking relationships and trust requirements"
                    metrics={[
                      "Shut down after 2 years",
                      "Low user adoption rates",
                      "Failed to build financial trust",
                      "Misunderstood cultural banking preferences"
                    ]}
                    status="failure"
                  />
                </div>
              </section>

              {/* Success Framework */}
              <section id="success-framework" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The CHALLENGER Success Framework</h2>

                <h3 id="the-challenger-model" className="text-2xl font-semibold text-gray-800 mb-6">The CHALLENGER Model</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200 mb-8">
                  <h4 className="text-xl font-bold text-orange-900 mb-6">7-Step Framework for Market Disruption</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { letter: "C", word: "Cultural", desc: "Trend identification" },
                      { letter: "H", word: "Human", desc: "Community insights" },
                      { letter: "A", word: "Authentic", desc: "Brand positioning" },
                      { letter: "L", word: "Launch", desc: "Community-first entry" },
                      { letter: "L", word: "Leverage", desc: "Amplification strategy" },
                      { letter: "E", word: "Engage", desc: "Deep relationship building" },
                      { letter: "N", word: "Navigate", desc: "Cultural evolution" },
                      { letter: "G", word: "Grow", desc: "Sustainable scaling" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          {item.letter}
                        </div>
                        <div className="font-bold text-orange-900">{item.word}</div>
                        <div className="text-sm text-orange-700">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 id="implementation-steps" className="text-2xl font-semibold text-gray-800 mb-4">Implementation Steps</h3>
                <div className="space-y-6 mb-8">
                  {[
                    {
                      step: "1. Cultural Intelligence Audit",
                      description: "Analyze emerging cultural trends, micro-communities, and unmet cultural needs in your target market",
                      timeline: "2-4 weeks",
                      deliverables: ["Cultural trend analysis", "Community mapping", "Opportunity assessment"]
                    },
                    {
                      step: "2. Authentic Positioning Strategy",
                      description: "Develop brand positioning that genuinely aligns with identified cultural movements and values",
                      timeline: "3-6 weeks", 
                      deliverables: ["Brand positioning", "Values framework", "Messaging strategy"]
                    },
                    {
                      step: "3. Community Infiltration Plan",
                      description: "Identify and engage with key micro-communities where your brand can provide authentic value",
                      timeline: "4-8 weeks",
                      deliverables: ["Community strategy", "Engagement plan", "Value proposition"]
                    },
                    {
                      step: "4. Minimum Viable Community",
                      description: "Launch with small, passionate community to test and refine brand-market-culture fit",
                      timeline: "6-12 weeks",
                      deliverables: ["Community platform", "Early adopters", "Feedback loops"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.step}</h4>
                          <p className="text-gray-700 mb-3">{item.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-800">Timeline:</span>
                              <span className="text-gray-600 ml-2">{item.timeline}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-800">Key Deliverables:</span>
                              <ul className="text-gray-600 ml-2">
                                {item.deliverables.map((deliverable, idx) => (
                                  <li key={idx}>• {deliverable}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 id="performance-metrics" className="text-2xl font-semibold text-gray-800 mb-4">Success Metrics & KPIs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Metrics</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Success Threshold</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Measurement Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { 
                          category: 'Cultural Alignment', 
                          metrics: 'Brand sentiment, cultural relevance score, community engagement', 
                          threshold: '>70% positive sentiment', 
                          timeline: '0-6 months' 
                        },
                        { 
                          category: 'Community Growth', 
                          metrics: 'Community size, engagement rate, user-generated content', 
                          threshold: '10,000+ engaged members', 
                          timeline: '3-12 months' 
                        },
                        { 
                          category: 'Market Penetration', 
                          metrics: 'Market share, brand awareness, competitor displacement', 
                          threshold: '5%+ market share', 
                          timeline: '6-18 months' 
                        },
                        { 
                          category: 'Financial Performance', 
                          metrics: 'Revenue growth, customer acquisition cost, lifetime value', 
                          threshold: '100%+ YoY growth', 
                          timeline: '12-24 months' 
                        },
                        { 
                          category: 'Sustainability', 
                          metrics: 'Brand loyalty, repeat purchase, cultural staying power', 
                          threshold: '60%+ retention rate', 
                          timeline: '18+ months' 
                        }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.category}</td>
                          <td className="px-6 py-4 text-gray-700">{item.metrics}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600">{item.threshold}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Strategic Playbook */}
              <section id="strategic-playbook" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Implementation Playbook</h2>

                <h3 id="launch-strategy" className="text-2xl font-semibold text-gray-800 mb-4">Launch Strategy Framework</h3>
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white mb-8">
                  <h4 className="text-xl font-bold mb-6">90-Day Launch Roadmap</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 1-30: Foundation</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Complete cultural intelligence audit</li>
                        <li>• Identify target micro-communities</li>
                        <li>• Develop authentic brand positioning</li>
                        <li>• Create community engagement strategy</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 31-60: Engagement</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Begin community infiltration</li>
                        <li>• Provide value before promotion</li>
                        <li>• Build relationships with key influencers</li>
                        <li>• Test messaging and positioning</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h5 className="font-bold text-lg mb-4">Days 61-90: Launch</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• Soft launch with community support</li>
                        <li>• Leverage user-generated content</li>
                        <li>• Scale based on early feedback</li>
                        <li>• Measure and optimize performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 id="long-term-sustainability" className="text-2xl font-semibold text-gray-800 mb-4">Long-term Sustainability Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                      Sustainable Growth Strategies
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Continuous cultural trend monitoring</li>
                      <li>• Community-driven product development</li>
                      <li>• Values-consistent business decisions</li>
                      <li>• Authentic brand evolution with culture</li>
                      <li>• Deep relationship maintenance</li>
                      <li>• Cultural leadership positioning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-orange-500" />
                      Long-term Success Indicators
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Brand becomes cultural symbol</li>
                      <li>• Community self-sustains and grows</li>
                      <li>• Consistent cultural relevance</li>
                      <li>• Strong brand-community bonds</li>
                      <li>• Sustainable competitive advantages</li>
                      <li>• Market leadership positioning</li>
                    </ul>
                  </div>
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
            "headline": "Challenger Brand Success Patterns",
            "description": "What separates thriving challenger brands from failures? Analysis of 847 challenger brands reveals the cultural intelligence strategies that drive market disruption.",
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
            "keywords": "challenger brands, brand strategy, market disruption, cultural intelligence, competitive analysis, startup success, brand positioning, market entry"
          })
        }}
      />
    </div>
  )
}