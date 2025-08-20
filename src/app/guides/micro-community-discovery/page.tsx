'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Users, Search, Compass, Target, Network, Zap, Map, Filter, Eye, Heart, MessageCircle, Share2, Download, BookOpen } from 'lucide-react'

interface TableOfContentsProps {}

const TableOfContents: React.FC<TableOfContentsProps> = () => {
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
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Framework Contents</h2>
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
                    className="block py-1 px-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                  >
                    {subsection}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 className="font-bold text-green-800 mb-2 flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Download Templates
        </h3>
        <p className="text-sm text-green-700 mb-3">Get all worksheets and templates as downloadable resources.</p>
        <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
          Download Complete Kit
        </button>
      </div>
    </div>
  )
}

interface FrameworkStepProps {
  number: string
  title: string
  description: string
  tools: string[]
  outputs: string[]
  icon: React.ComponentType<{ className?: string }>
}

const FrameworkStep: React.FC<FrameworkStepProps> = ({ number, title, description, tools, outputs, icon: Icon }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
    <div className="flex items-start mb-6">
      <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mr-6 flex-shrink-0">
        <span className="text-2xl font-bold">{number}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <Icon className="h-6 w-6 text-green-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-bold text-gray-800 mb-3">Tools & Methods:</h4>
        <ul className="space-y-2">
          {tools.map((tool: string, index: number) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-3">Expected Outputs:</h4>
        <ul className="space-y-2">
          {outputs.map((output: string, index: number) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{output}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

interface MetricCardProps {
  metric: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, value, description, icon: Icon, color }) => (
  <div className={`bg-gradient-to-br ${color} rounded-xl p-6 border`}>
    <div className="flex items-center justify-between mb-4">
      <Icon className="h-8 w-8" />
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{metric}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

interface PlatformStrategyProps {
  platform: string
  icon: React.ComponentType<{ className?: string }>
  characteristics: string[]
  discoveryMethods: string[]
  keyMetrics: string[]
  opportunities: string[]
}

const PlatformStrategy: React.FC<PlatformStrategyProps> = ({ 
  platform, 
  icon: Icon, 
  characteristics, 
  discoveryMethods, 
  keyMetrics, 
  opportunities 
}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 mr-3 text-blue-600" />
      <h3 className="text-xl font-bold text-gray-900">{platform}</h3>
    </div>
    
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Community Characteristics:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          {characteristics.map((char: string, index: number) => (
            <li key={index}>• {char}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Discovery Methods:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          {discoveryMethods.map((method: string, index: number) => (
            <li key={index}>• {method}</li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        <div>
          <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Metrics:</h4>
          <div className="space-y-1 text-xs text-gray-600">
            {keyMetrics.map((metric: string, index: number) => (
              <div key={index}>{metric}</div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm mb-2">Opportunities:</h4>
          <div className="space-y-1 text-xs text-gray-600">
            {opportunities.map((opp: string, index: number) => (
              <div key={index}>{opp}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function MicroCommunityDiscoveryFramework() {
  const [activeTemplate, setActiveTemplate] = useState('checklist')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Optimized Header */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro-Community Discovery Framework
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Uncover hidden, highly-engaged communities where your content can thrive. A systematic approach to finding your perfect audience niche.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Community Discovery</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Niche Research</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Audience Analysis</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Creator Strategy</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Framework Template</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Framework Navigation - Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              
              {/* Framework Overview */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Compass className="h-6 w-6 mr-2 text-cyan-600" />
                  Framework Overview
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  The DISCOVER Framework is a systematic 7-step methodology for identifying and engaging with high-value micro-communities. This template provides everything you need to find your ideal audience niche.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">7 Steps</div>
                    <div className="text-sm text-gray-600">Systematic Process</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">5 Platforms</div>
                    <div className="text-sm text-gray-600">Cross-Platform Strategy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">15+ Tools</div>
                    <div className="text-sm text-gray-600">Discovery Methods</div>
                  </div>
                </div>
              </div>

              {/* Section 1: Understanding Micro-Communities */}
              <section id="understanding-micro-communities" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-green-600" />
                  Understanding Micro-Communities: Your Untapped Goldmine
                </h2>

                <h3 id="what-are-micro-communities" className="text-2xl font-semibold text-gray-800 mb-4">
                  What Are Micro-Communities?
                </h3>
                <p className="text-gray-700 mb-6">
                  Micro-communities are small, highly-engaged groups (typically 100-10,000 members) united by specific interests, challenges, or goals. They represent the sweet spot between intimacy and scale for creators.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <MetricCard 
                    metric="Engagement Rate"
                    value="8.7x"
                    description="Higher than mainstream communities"
                    icon={Heart}
                    color="from-red-50 to-pink-50 border-red-200"
                  />
                  <MetricCard 
                    metric="Conversion Rate" 
                    value="12.3x"
                    description="Better monetization potential"
                    icon={Target}
                    color="from-green-50 to-emerald-50 border-green-200"
                  />
                  <MetricCard 
                    metric="Content Lifespan"
                    value="4.2x"
                    description="Longer content relevancy"
                    icon={Eye}
                    color="from-blue-50 to-cyan-50 border-blue-200"
                  />
                </div>
              </section>

              {/* Section 2: Platform-Specific Strategies */}
              <section id="platform-specific-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Platform-Specific Discovery Strategies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <PlatformStrategy 
                    platform="Reddit"
                    icon={MessageCircle}
                    characteristics={[
                      "Highly specialized subreddits",
                      "Anonymous, content-focused discussions", 
                      "Strong community moderation",
                      "In-depth conversations"
                    ]}
                    discoveryMethods={[
                      "Subreddit mining with metrics",
                      "Cross-subreddit user analysis",
                      "Content gap identification",
                      "Moderator relationship building"
                    ]}
                    keyMetrics={["Member count", "Posts/day", "Comments/post", "Upvote ratio"]}
                    opportunities={["Expert positioning", "Educational content", "AMA hosting", "Tool recommendations"]}
                  />

                  <PlatformStrategy 
                    platform="Discord" 
                    icon={Users}
                    characteristics={[
                      "Real-time community interaction",
                      "Interest-based servers",
                      "High engagement rates",
                      "Voice and text channels"
                    ]}
                    discoveryMethods={[
                      "Server discovery platforms",
                      "Invite link tracking",
                      "Member overlap analysis",
                      "Activity level monitoring"
                    ]}
                    keyMetrics={["Member count", "Active members", "Message frequency", "Voice activity"]}
                    opportunities={["Community building", "Live engagement", "Premium access", "Direct relationships"]}
                  />
                </div>
              </section>

              {/* Implementation Roadmap */}
              <section id="implementation-roadmap" className="mb-16">
                <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">Your 30-Day Implementation Roadmap</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Week 1: Setup</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Define your niche focus</li>
                        <li>• Set up discovery tools</li>
                        <li>• Create tracking templates</li>
                        <li>• Begin platform research</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Week 2: Discovery</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Find 50+ communities</li>
                        <li>• Initial engagement assessment</li>
                        <li>• Document key findings</li>
                        <li>• Identify top 20 prospects</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Week 3: Assessment</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Deep dive on top 20</li>
                        <li>• Complete scoring framework</li>
                        <li>• Select 5-10 priority targets</li>
                        <li>• Plan entry strategies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Week 4: Engagement</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Begin community engagement</li>
                        <li>• Provide value-first content</li>
                        <li>• Build initial relationships</li>
                        <li>• Track and optimize</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-6 inline-block">
                      <h3 className="text-xl font-bold mb-2">Expected Outcomes After 30 Days:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold">5-10</div>
                          <div className="text-sm">Active Communities</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">150+</div>
                          <div className="text-sm">New Connections</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">2.5x</div>
                          <div className="text-sm">Engagement Rate</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">$2K+</div>
                          <div className="text-sm">Revenue Potential</div>
                        </div>
                      </div>
                    </div>
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
            "@type": "Article",
            "headline": "Micro-Community Discovery Framework",
            "description": "Uncover hidden, highly-engaged communities where your content can thrive. A systematic approach to finding your perfect audience niche.",
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