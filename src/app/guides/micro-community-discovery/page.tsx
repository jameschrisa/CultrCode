'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Users, Search, Compass, Target, Network, Zap, Map, Filter, Eye, Heart, MessageCircle, Share2, Download } from 'lucide-react'

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

const FrameworkStep = ({ number, title, description, tools, outputs, icon: Icon }: any) => (
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

const MetricCard = ({ metric, value, description, icon: Icon, color }: any) => (
  <div className={`bg-gradient-to-br ${color} rounded-xl p-6 border`}>
    <div className="flex items-center justify-between mb-4">
      <Icon className="h-8 w-8" />
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{metric}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

const PlatformStrategy = ({ platform, icon: Icon, characteristics, discoveryMethods, keyMetrics, opportunities }: any) => (
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

                <h3 id="community-size-vs-engagement" className="text-2xl font-semibold text-gray-800 mb-4">
                  The Sweet Spot: Community Size vs. Engagement
                </h3>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-red-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Nano Communities</h4>
                      <p className="text-sm text-gray-600 mb-2">50-500 members</p>
                      <div className="text-xs text-gray-500">
                        <div>Engagement: 15-25%</div>
                        <div>Monetization: Limited</div>
                        <div>Competition: Very Low</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Micro Communities</h4>
                      <p className="text-sm text-gray-600 mb-2">500-5,000 members</p>
                      <div className="text-xs text-gray-500">
                        <div>Engagement: 8-15%</div>
                        <div>Monetization: High</div>
                        <div>Competition: Low</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Small Communities</h4>
                      <p className="text-sm text-gray-600 mb-2">5K-50K members</p>
                      <div className="text-xs text-gray-500">
                        <div>Engagement: 3-8%</div>
                        <div>Monetization: Moderate</div>
                        <div>Competition: Moderate</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-gray-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Large Communities</h4>
                      <p className="text-sm text-gray-600 mb-2">50K+ members</p>
                      <div className="text-xs text-gray-500">
                        <div>Engagement: 1-3%</div>
                        <div>Monetization: Low</div>
                        <div>Competition: Very High</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: The DISCOVER Framework */}
              <section id="the-discover-framework" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Map className="h-8 w-8 mr-3 text-purple-600" />
                  The DISCOVER Framework: Your 7-Step Community Discovery System
                </h2>

                <div className="bg-purple-50 rounded-xl p-8 mb-12 border border-purple-200">
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">Framework Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { letter: "D", word: "Define", desc: "Your niche focus" },
                      { letter: "I", word: "Identify", desc: "Key platforms" },
                      { letter: "S", word: "Search", desc: "Pattern analysis" },
                      { letter: "C", word: "Community", desc: "Health assessment" },
                      { letter: "O", word: "Opportunity", desc: "Validation process" },
                      { letter: "V", word: "Validate", desc: "Engagement testing" },
                      { letter: "E", word: "Engage", desc: "Value-first approach" },
                      { letter: "R", word: "Relationships", desc: "Build connections" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                          {item.letter}
                        </div>
                        <div className="font-bold text-purple-900">{item.word}</div>
                        <div className="text-sm text-purple-700">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 1: Define */}
                <FrameworkStep 
                  number="1"
                  title="Define Your Niche Focus"
                  description="Clearly articulate your expertise, target audience, and the specific problem you solve. This foundation determines which communities to target."
                  icon={Target}
                  tools={[
                    "Expertise audit worksheet",
                    "Audience persona templates", 
                    "Problem-solution fit analysis",
                    "Competitive landscape mapping",
                    "Value proposition canvas"
                  ]}
                  outputs={[
                    "Clear niche definition statement",
                    "Target audience personas",
                    "Unique value proposition",
                    "Content pillar framework",
                    "Community search criteria"
                  ]}
                />

                {/* Step 2: Identify */}
                <FrameworkStep 
                  number="2"
                  title="Identify Key Platforms"
                  description="Determine which platforms your target audience uses and where micro-communities naturally form around your niche."
                  icon={Search}
                  tools={[
                    "Platform demographic research",
                    "Audience behavior analysis",
                    "Community feature mapping",
                    "Content format preferences",
                    "Engagement pattern studies"
                  ]}
                  outputs={[
                    "Prioritized platform list",
                    "Platform-specific strategies",
                    "Content format preferences",
                    "Community size benchmarks",
                    "Engagement expectations"
                  ]}
                />

                {/* Step 3: Search */}
                <FrameworkStep 
                  number="3"
                  title="Search Pattern Analysis"
                  description="Use systematic search methods to uncover relevant communities across your identified platforms."
                  icon={Compass}
                  tools={[
                    "Keyword research tools",
                    "Hashtag analysis systems",
                    "Social listening platforms",
                    "Community discovery tools",
                    "Cross-platform correlation"
                  ]}
                  outputs={[
                    "Community database (50-100 prospects)",
                    "Engagement pattern insights",
                    "Content theme analysis",
                    "Influencer identification",
                    "Growth trajectory data"
                  ]}
                />

                {/* Step 4: Community Health Assessment */}
                <FrameworkStep 
                  number="4"
                  title="Community Health Assessment"
                  description="Evaluate each community's engagement quality, growth potential, and alignment with your goals."
                  icon={Heart}
                  tools={[
                    "Engagement quality metrics",
                    "Growth trajectory analysis",
                    "Content performance review",
                    "Member activity patterns",
                    "Moderation quality assessment"
                  ]}
                  outputs={[
                    "Community health scores",
                    "Engagement quality ratings",
                    "Growth potential rankings",
                    "Content opportunity gaps",
                    "Risk factor analysis"
                  ]}
                />

                {/* Step 5: Opportunity Validation */}
                <FrameworkStep 
                  number="5"
                  title="Opportunity Validation"
                  description="Validate the commercial and engagement potential of your top community prospects."
                  icon={Eye}
                  tools={[
                    "Monetization feasibility analysis",
                    "Content gap identification",
                    "Competition assessment",
                    "Audience purchasing power analysis",
                    "Brand partnership potential"
                  ]}
                  outputs={[
                    "Opportunity scoring matrix",
                    "Revenue potential estimates",
                    "Competitive positioning",
                    "Content strategy frameworks",
                    "Risk-adjusted ROI projections"
                  ]}
                />

                {/* Step 6: Validate Engagement */}
                <FrameworkStep 
                  number="6"
                  title="Validate Through Testing"
                  description="Test your hypotheses with small-scale content and engagement experiments."
                  icon={Zap}
                  tools={[
                    "A/B content testing",
                    "Engagement experiment design",
                    "Community interaction trials",
                    "Value delivery tests",
                    "Feedback collection systems"
                  ]}
                  outputs={[
                    "Validated engagement strategies",
                    "Content performance benchmarks",
                    "Community response patterns",
                    "Optimization recommendations",
                    "Scale-up strategies"
                  ]}
                />

                {/* Step 7: Relationship Building */}
                <FrameworkStep 
                  number="7"
                  title="Build Strategic Relationships"
                  description="Develop genuine relationships with community members and leaders to establish your presence."
                  icon={Network}
                  tools={[
                    "Relationship mapping tools",
                    "Value-first engagement strategies",
                    "Community contribution frameworks",
                    "Influencer outreach templates",
                    "Long-term relationship tracking"
                  ]}
                  outputs={[
                    "Relationship development plan",
                    "Community integration strategy",
                    "Value contribution schedule",
                    "Influencer collaboration pipeline",
                    "Long-term growth roadmap"
                  ]}
                />
              </section>

              {/* Section 3: Platform-Specific Strategies */}
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

                  <PlatformStrategy 
                    platform="Instagram"
                    icon={Heart}
                    characteristics={[
                      "Visual-first communities",
                      "Hashtag-driven discovery",
                      "Story-based engagement",
                      "Creator-follower dynamics"
                    ]}
                    discoveryMethods={[
                      "Hashtag research and tracking",
                      "Story mention analysis",
                      "Follower overlap studies",
                      "Engagement pod identification"
                    ]}
                    keyMetrics={["Follower count", "Engagement rate", "Story views", "Save rate"]}
                    opportunities={["Visual storytelling", "Behind-the-scenes", "Product showcase", "Lifestyle branding"]}
                  />

                  <PlatformStrategy 
                    platform="TikTok"
                    icon={Zap}
                    characteristics={[
                      "Algorithm-driven discovery",
                      "Trend-based communities",
                      "Short-form content focus",
                      "Viral potential"
                    ]}
                    discoveryMethods={[
                      "Sound and hashtag tracking",
                      "Creator collaboration networks",
                      "Trend origin analysis",
                      "Niche content exploration"
                    ]}
                    keyMetrics={["View count", "Like rate", "Share rate", "Comment engagement"]}
                    opportunities={["Trend leadership", "Educational content", "Entertainment value", "Viral moments"]}
                  />
                </div>
              </section>

              {/* Section 4: Assessment Tools & Templates */}
              <section id="templates-and-worksheets" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Ready-to-Use Templates & Assessment Tools
                </h2>

                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { id: 'checklist', label: 'Discovery Checklist' },
                    { id: 'scorecard', label: 'Assessment Scorecard' },
                    { id: 'strategy', label: 'Entry Strategy Template' },
                    { id: 'tracking', label: 'Progress Tracker' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTemplate(tab.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        activeTemplate === tab.id 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Discovery Checklist Template */}
                {activeTemplate === 'checklist' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Community Discovery Checklist</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Phase 1: Preparation (Week 1)</h4>
                        <div className="space-y-2 text-sm">
                          {[
                            "Define your niche and expertise areas",
                            "Create target audience personas",
                            "List potential keywords and topics",
                            "Set up social listening tools",
                            "Prepare content analysis spreadsheet"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <input type="checkbox" className="mr-3 rounded border-gray-300" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Phase 2: Discovery (Weeks 2-3)</h4>
                        <div className="space-y-2 text-sm">
                          {[
                            "Search Reddit subreddits using keyword variations",
                            "Explore Discord servers through discovery platforms",
                            "Track Instagram hashtags and communities",
                            "Analyze TikTok niche content and creators",
                            "Document 50-100 potential communities"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <input type="checkbox" className="mr-3 rounded border-gray-300" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Phase 3: Assessment (Week 4)</h4>
                        <div className="space-y-2 text-sm">
                          {[
                            "Calculate engagement rates for each community",
                            "Assess content quality and relevance",
                            "Evaluate growth trajectories",
                            "Identify key influencers and moderators", 
                            "Score monetization potential"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <input type="checkbox" className="mr-3 rounded border-gray-300" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Assessment Scorecard Template */}
                {activeTemplate === 'scorecard' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Community Assessment Scorecard</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-green-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase">Assessment Factor</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase">Weight</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase">Score (1-5)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase">Weighted Score</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-green-800 uppercase">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { factor: "Size (Sweet Spot: 500-5,000)", weight: "15%" },
                            { factor: "Engagement Rate (Target: >5%)", weight: "25%" },
                            { factor: "Content Quality", weight: "15%" },
                            { factor: "Growth Trajectory", weight: "10%" },
                            { factor: "Niche Alignment", weight: "20%" },
                            { factor: "Monetization Potential", weight: "10%" },
                            { factor: "Competition Level", weight: "5%" }
                          ].map((item, index) => (
                            <tr key={index}>
                              <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.factor}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{item.weight}</td>
                              <td className="px-4 py-3">
                                <input 
                                  type="number" 
                                  min="1" 
                                  max="5" 
                                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                                  placeholder="1-5"
                                />
                              </td>
                              <td className="px-4 py-3 text-sm font-bold text-green-600">Auto-calc</td>
                              <td className="px-4 py-3">
                                <input 
                                  type="text" 
                                  className="w-32 px-2 py-1 border border-gray-300 rounded text-sm"
                                  placeholder="Notes..."
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Scoring Guide:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                        <div><strong>1:</strong> Poor fit</div>
                        <div><strong>2:</strong> Below average</div>
                        <div><strong>3:</strong> Average</div>
                        <div><strong>4:</strong> Good fit</div>
                        <div><strong>5:</strong> Excellent fit</div>
                      </div>
                      <p className="text-green-700 mt-3"><strong>Total Score:</strong> 70+ = Priority Target | 50-69 = Consider | <50 = Pass</p>
                    </div>
                  </div>
                )}

                {/* Entry Strategy Template */}
                {activeTemplate === 'strategy' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Community Entry Strategy Template</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">Community Profile</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Community Name</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Member Count</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Engagement Rate</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="%" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">Entry Strategy (30-Day Plan)</h4>
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-3">Week 1: Observation & Learning</h5>
                            <textarea 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" 
                              placeholder="- Observe community norms and rules
- Identify most active/popular content types
- Note key community members and influencers
- Study posting patterns and optimal times"
                            />
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-3">Week 2: Initial Engagement</h5>
                            <textarea 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" 
                              placeholder="- Make thoughtful comments on existing posts
- Share valuable insights without self-promotion
- Ask genuine questions to start conversations
- Support other community members"
                            />
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-3">Week 3: Value-First Contribution</h5>
                            <textarea 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" 
                              placeholder="- Create first valuable post/resource
- Offer free help or advice
- Share relevant tools or insights
- Begin building recognition as helpful member"
                            />
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-3">Week 4: Relationship Building</h5>
                            <textarea 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" 
                              placeholder="- Connect with key community members
- Participate in community discussions regularly
- Offer expertise when relevant
- Consider first subtle mention of your content (if appropriate)"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">Success Metrics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Engagement Goal</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="e.g., 5 meaningful conversations/week" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Recognition Goal</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="e.g., 3 members recognize expertise" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Progress Tracking Template */}
                {activeTemplate === 'tracking' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Progress Tracking Dashboard</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">Discovery Progress</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-blue-600">0</div>
                            <div className="text-sm text-blue-700">Communities Found</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-green-600">0</div>
                            <div className="text-sm text-green-700">Communities Assessed</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-purple-600">0</div>
                            <div className="text-sm text-purple-700">Priority Targets</div>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-orange-600">0</div>
                            <div className="text-sm text-orange-700">Active Engagements</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">Weekly Activity Log</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Week</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Communities Researched</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Engagement Activities</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Key Insights</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Next Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {[1, 2, 3, 4].map(week => (
                                <tr key={week}>
                                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Week {week}</td>
                                  <td className="px-4 py-3">
                                    <input type="number" className="w-16 px-2 py-1 border border-gray-300 rounded text-sm" />
                                  </td>
                                  <td className="px-4 py-3">
                                    <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                                  </td>
                                  <td className="px-4 py-3">
                                    <textarea className="w-full px-2 py-1 border border-gray-300 rounded text-sm h-16" />
                                  </td>
                                  <td className="px-4 py-3">
                                    <textarea className="w-full px-2 py-1 border border-gray-300 rounded text-sm h-16" />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">ROI Tracking</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time Invested (Hours)</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Followers Gained</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Generated ($)</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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