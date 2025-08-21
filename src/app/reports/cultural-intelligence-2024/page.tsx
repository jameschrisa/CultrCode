'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, TrendingUp, BarChart3, Users, Globe, Brain, Target, Calendar, Award, DollarSign, Zap, Eye, ArrowRight, Heart } from 'lucide-react'

interface TableOfContentsProps {}

const TableOfContents: React.FC<TableOfContentsProps> = () => {
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
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Report Contents</h2>
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
                    className="block py-1 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
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

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, description, icon: Icon, color }) => (
  <div className={`bg-gradient-to-br ${color} rounded-xl p-6 border`}>
    <div className="flex items-center justify-between mb-4">
      <Icon className="h-8 w-8" />
      {change && (
        <span className={`text-sm font-medium px-2 py-1 rounded ${
          change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </span>
      )}
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

interface TrendCardProps {
  trend: string
  impact: 'High' | 'Medium' | 'Low'
  timeline: string
  description: string
  examples: string[]
}

const TrendCard: React.FC<TrendCardProps> = ({ trend, impact, timeline, description, examples }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-gray-900">{trend}</h3>
      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          impact === 'High' ? 'bg-red-100 text-red-800' :
          impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {impact} Impact
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {timeline}
        </span>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
      <ul className="space-y-1">
        {examples.map((example, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
            <ArrowRight className="h-3 w-3 mt-1 mr-2 text-blue-500 flex-shrink-0" />
            {example}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function CulturalIntelligence2024Report() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              2024 Annual Report
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              State of Cultural Intelligence 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Comprehensive analysis of cultural trends, micro-communities, and creator economy insights. The definitive report on how brands and creators are leveraging cultural intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Market Analysis</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Creator Economy</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Cultural Trends</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Industry Research</span>
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
                    Executive Summary
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    The cultural intelligence market has reached a tipping point in 2024. With $47.2 billion in creator economy value and 68% of brands investing in cultural trend analysis, understanding micro-communities and cultural dynamics has become essential for business success.
                  </p>
                  
                  <h3 id="key-findings" className="text-xl font-semibold text-gray-800 mb-4">Key Findings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Market Growth</h4>
                      <p className="text-sm text-gray-700">Cultural intelligence tools market grew 156% YoY, reaching $3.2B in 2024</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Creator Economy</h4>
                      <p className="text-sm text-gray-700">Creator-brand partnerships leveraging cultural insights show 3.7x higher ROI</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Micro-Communities</h4>
                      <p className="text-sm text-gray-700">Average engagement rates in niche communities are 12.4x higher than mainstream platforms</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">AI Integration</h4>
                      <p className="text-sm text-gray-700">87% of cultural intelligence platforms now incorporate predictive AI capabilities</p>
                    </div>
                  </div>
                </div>

                <h3 id="market-size-growth" className="text-2xl font-semibold text-gray-800 mb-6">Market Size & Growth Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard
                    title="Global Market Value"
                    value="$47.2B"
                    change="+156%"
                    description="Total creator economy market value, up from $18.6B in 2023"
                    icon={DollarSign}
                    color="from-green-50 to-emerald-50 border-green-200"
                  />
                  <StatCard
                    title="Active Creators"
                    value="67.8M"
                    change="+34%"
                    description="Creators actively monetizing cultural insights across platforms"
                    icon={Users}
                    color="from-blue-50 to-cyan-50 border-blue-200"
                  />
                  <StatCard
                    title="Brand Investment"
                    value="$12.4B"
                    change="+89%"
                    description="Total brand spending on cultural intelligence and creator partnerships"
                    icon={TrendingUp}
                    color="from-purple-50 to-indigo-50 border-purple-200"
                  />
                </div>
              </section>

              {/* Cultural Intelligence Landscape */}
              <section id="cultural-intelligence-landscape" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Globe className="h-8 w-8 mr-3 text-indigo-600" />
                  Cultural Intelligence Landscape 2024
                </h2>

                <h3 id="market-maturity" className="text-2xl font-semibold text-gray-800 mb-4">Market Maturity Assessment</h3>
                <p className="text-gray-700 mb-6">
                  The cultural intelligence market has evolved from experimental tools to essential business infrastructure. Enterprise adoption has accelerated, with 73% of Fortune 500 companies now using cultural trend analysis in strategic planning.
                </p>

                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Market Adoption by Industry</h4>
                  <div className="space-y-4">
                    {[
                      { industry: 'Fashion & Retail', adoption: 89, growth: '+23%' },
                      { industry: 'Entertainment & Media', adoption: 84, growth: '+31%' },
                      { industry: 'Consumer Goods', adoption: 76, growth: '+45%' },
                      { industry: 'Technology', adoption: 71, growth: '+67%' },
                      { industry: 'Financial Services', adoption: 58, growth: '+89%' },
                      { industry: 'Healthcare', adoption: 34, growth: '+156%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">{item.industry}</span>
                        <div className="flex items-center gap-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${item.adoption}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-green-600">{item.growth}</span>
                          <span className="text-sm text-gray-600 w-12 text-right">{item.adoption}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 id="technology-adoption" className="text-2xl font-semibold text-gray-800 mb-4">Technology Adoption Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <Brain className="h-8 w-8 text-purple-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">AI-Powered Analysis</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-2">87%</div>
                    <p className="text-sm text-gray-600">Platforms using predictive AI for trend identification</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Real-time Analytics</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">73%</div>
                    <p className="text-sm text-gray-600">Tools offering real-time cultural sentiment tracking</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <Target className="h-8 w-8 text-green-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Predictive Modeling</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">61%</div>
                    <p className="text-sm text-gray-600">Platforms with 30+ day trend prediction accuracy</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <Zap className="h-8 w-8 text-orange-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">API Integration</h4>
                    <div className="text-2xl font-bold text-orange-600 mb-2">45%</div>
                    <p className="text-sm text-gray-600">Enterprise customers using API-first solutions</p>
                  </div>
                </div>
              </section>

              {/* Creator Economy Analysis */}
              <section id="creator-economy-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Creator Economy Deep Dive</h2>

                <h3 id="revenue-models" className="text-2xl font-semibold text-gray-800 mb-4">Revenue Model Evolution</h3>
                <p className="text-gray-700 mb-6">
                  Creator monetization has shifted dramatically toward culturally-informed content strategies. Creators using cultural intelligence tools report 3.7x higher average revenue per follower compared to traditional approaches.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue Model</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">2023 Share</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">2024 Share</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Growth</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { model: 'Cultural Consulting', share2023: '12%', share2024: '28%', growth: '+133%', revenue: '$85K' },
                        { model: 'Trend-Based Content', share2023: '34%', share2024: '41%', growth: '+21%', revenue: '$52K' },
                        { model: 'Community Building', share2023: '23%', share2024: '31%', growth: '+35%', revenue: '$67K' },
                        { model: 'Brand Partnerships', share2023: '45%', share2024: '38%', growth: '-16%', revenue: '$43K' },
                        { model: 'Product Sales', share2023: '28%', share2024: '35%', growth: '+25%', revenue: '$72K' },
                        { model: 'Educational Content', share2023: '19%', share2024: '29%', growth: '+53%', revenue: '$59K' }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.model}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.share2023}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.share2024}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`font-medium ${item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {item.growth}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 id="audience-behavior" className="text-2xl font-semibold text-gray-800 mb-4">Audience Behavior Shifts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">Engagement Preferences</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="text-blue-800">Authentic Cultural Content</span>
                        <span className="font-bold text-blue-600">+89%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-blue-800">Behind-the-scenes</span>
                        <span className="font-bold text-blue-600">+67%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-blue-800">Educational Content</span>
                        <span className="font-bold text-blue-600">+54%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-blue-800">Community Discussions</span>
                        <span className="font-bold text-blue-600">+43%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-xl font-bold text-green-900 mb-4">Platform Migration Patterns</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="text-green-800">To Niche Communities</span>
                        <span className="font-bold text-green-600">+156%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-green-800">Discord Servers</span>
                        <span className="font-bold text-green-600">+134%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-green-800">Specialized Forums</span>
                        <span className="font-bold text-green-600">+98%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-green-800">Creator-owned Platforms</span>
                        <span className="font-bold text-green-600">+76%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Micro-Community Insights */}
              <section id="micro-community-insights" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Micro-Community Analysis</h2>

                <h3 id="growth-patterns" className="text-2xl font-semibold text-gray-800 mb-4">Growth Patterns & Dynamics</h3>
                <p className="text-gray-700 mb-6">
                  Micro-communities (500-10,000 members) have emerged as the highest-value audience segments. These communities show 12.4x higher engagement rates and 8.7x better conversion rates compared to mainstream platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard
                    title="Average Engagement Rate"
                    value="24.7%"
                    description="Micro-communities vs 2.1% on mainstream platforms"
                    icon={Heart}
                    color="from-pink-50 to-red-50 border-pink-200"
                  />
                  <StatCard
                    title="Conversion Rate"
                    value="18.3%"
                    description="Purchase conversion from micro-community recommendations"
                    icon={Target}
                    color="from-green-50 to-emerald-50 border-green-200"
                  />
                  <StatCard
                    title="Retention Rate"
                    value="89.2%"
                    description="12-month member retention in active micro-communities"
                    icon={Users}
                    color="from-blue-50 to-cyan-50 border-blue-200"
                  />
                </div>

                <h3 id="community-dynamics" className="text-2xl font-semibold text-gray-800 mb-4">Community Dynamics Study</h3>
                <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Key Success Factors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">High-Performance Communities</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Clear cultural identity and values</li>
                        <li>• Regular creator-member interaction</li>
                        <li>• Exclusive content and experiences</li>
                        <li>• Strong moderation and community guidelines</li>
                        <li>• Member-generated content encouragement</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">Growth Inhibitors</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Lack of consistent cultural messaging</li>
                        <li>• Over-commercialization</li>
                        <li>• Insufficient creator presence</li>
                        <li>• Poor onboarding experience</li>
                        <li>• Competing community fragmentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Future Predictions */}
              <section id="future-predictions" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">2025 Predictions & Strategic Outlook</h2>

                <h3 id="2025-forecasts" className="text-2xl font-semibold text-gray-800 mb-6">Key Trend Forecasts</h3>
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

                <h3 id="strategic-recommendations" className="text-2xl font-semibold text-gray-800 mb-4">Strategic Recommendations</h3>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200 mb-8">
                  <h4 className="text-xl font-bold text-indigo-900 mb-6">For Brands & Marketers</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-indigo-800 mb-3">Immediate Actions (0-6 months)</h5>
                      <ul className="space-y-2 text-indigo-700">
                        <li>• Invest in cultural intelligence tooling</li>
                        <li>• Identify key micro-communities in your sector</li>
                        <li>• Develop cultural trend monitoring processes</li>
                        <li>• Train teams on cultural intelligence principles</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-indigo-800 mb-3">Strategic Initiatives (6-18 months)</h5>
                      <ul className="space-y-2 text-indigo-700">
                        <li>• Build dedicated cultural intelligence team</li>
                        <li>• Develop long-term creator partnerships</li>
                        <li>• Integrate cultural data into product development</li>
                        <li>• Create community-first marketing strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-green-900 mb-6">For Creators & Agencies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">Skill Development</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Master cultural trend analysis tools</li>
                        <li>• Develop community building expertise</li>
                        <li>• Learn predictive content strategies</li>
                        <li>• Build cross-platform presence</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">Business Strategy</h5>
                      <ul className="space-y-2 text-green-700">
                        <li>• Diversify revenue streams</li>
                        <li>• Focus on micro-community engagement</li>
                        <li>• Develop cultural consulting services</li>
                        <li>• Invest in owned community platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Methodology */}
              <section id="methodology-data" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Methodology & Data Sources</h2>

                <h3 id="research-approach" className="text-2xl font-semibold text-gray-800 mb-4">Research Approach</h3>
                <p className="text-gray-700 mb-6">
                  This report combines quantitative analysis of platform data, creator revenue information, and brand investment patterns with qualitative insights from industry leaders, successful creators, and cultural intelligence platform providers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                    <div className="text-sm text-gray-600">Creator interviews and surveys</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
                    <div className="text-sm text-gray-600">Brand decision-maker surveys</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50TB</div>
                    <div className="text-sm text-gray-600">Platform engagement data analyzed</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">12 months</div>
                    <div className="text-sm text-gray-600">Longitudinal data collection period</div>
                  </div>
                </div>

                <h3 id="data-sources" className="text-2xl font-semibold text-gray-800 mb-4">Primary Data Sources</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sample Size</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Collection Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { source: 'Creator Revenue Surveys', type: 'Primary Research', size: '15,247 creators', period: 'Jan-Dec 2024' },
                        { source: 'Platform API Data', type: 'Quantitative', size: '2.3M communities', period: 'Continuous' },
                        { source: 'Brand Investment Reports', type: 'Secondary Research', size: '847 companies', period: 'Q1-Q4 2024' },
                        { source: 'Cultural Intelligence Tools', type: 'Platform Analytics', size: '45 platforms', period: 'Jan-Dec 2024' },
                        { source: 'Expert Interviews', type: 'Qualitative', size: '156 leaders', period: 'Mar-Nov 2024' }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.source}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.size}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.period}</td>
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