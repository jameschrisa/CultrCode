'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react'
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


export default function MicroCommunityDiscoveryFramework() {

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
            <div className="max-w-4xl">
              
              {/* Understanding Micro-Communities */}
              <section id="understanding-micro-communities" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Understanding Micro-Communities</h1>
                
                <h2 id="what-are-micro-communities" className="text-2xl font-bold text-primary-100 mb-4">What Are Micro-Communities?</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Micro-communities are small, highly-engaged groups typically ranging from 100 to 10,000 members, united by specific interests, challenges, or shared goals. Unlike massive social media platforms where content gets lost in algorithmic noise, micro-communities offer creators the perfect balance between intimacy and scale.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  These communities exist across various platforms including Discord servers, specialized Reddit communities, niche Facebook groups, exclusive Slack channels, and purpose-built community platforms. The defining characteristic isn't the platform, but the depth of engagement and shared identity among members.
                </p>
                
                <h2 id="the-creators-opportunity" className="text-2xl font-bold text-primary-100 mb-4">The Creator's Opportunity</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Research shows that creators who successfully identify and engage with relevant micro-communities see 8.7x higher engagement rates and 12.3x better conversion rates compared to broad-market approaches. This dramatic improvement stems from the authentic connections formed within focused communities.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Micro-communities represent untapped goldmines for creators because most marketing efforts focus on demographic targeting across large platforms. By understanding the psychographic and behavioral patterns within specific communities, creators can develop content and products that resonate deeply with engaged audiences.
                </p>
                
                <h2 id="community-size-vs-engagement" className="text-2xl font-bold text-primary-100 mb-4">Community Size vs. Engagement</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  The inverse relationship between community size and engagement quality is crucial for creators to understand. Communities with 500-5,000 active members often provide the highest value, offering sufficient scale for meaningful impact while maintaining the intimacy that drives authentic engagement and trust-building.
                </p>
              </section>

              {/* The DISCOVER Framework */}
              <section id="the-discover-framework" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">The DISCOVER Framework</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  DISCOVER is a systematic 7-step methodology for identifying, evaluating, and engaging with high-value micro-communities. This framework transforms random community searching into a strategic, repeatable process that consistently identifies opportunities for meaningful creator growth.
                </p>
                
                <h2 id="define-your-niche" className="text-2xl font-bold text-primary-100 mb-4">Define Your Niche</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Begin by establishing clear parameters for your ideal micro-community characteristics and target audience segments. This involves creating detailed audience personas that go beyond basic demographics to include psychographic factors, behavioral patterns, and community participation preferences.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective niche definition requires analyzing your existing audience data, conducting surveys with your most engaged followers, and identifying the intersection points between your expertise and underserved community needs. The goal is to create a focused targeting framework that guides all subsequent discovery efforts.
                </p>
                
                <h2 id="identify-key-platforms" className="text-2xl font-bold text-primary-100 mb-4">Identify Key Platforms</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Research and prioritize platforms where your target micro-communities are most active and engaged. Different types of communities gravitate toward different platforms based on their communication preferences, privacy needs, and interaction styles.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Platform identification involves analyzing where meaningful conversations about your topic occur, studying cross-platform migration patterns, and understanding the unique culture and engagement patterns of each platform. This research phase prevents wasted effort on platforms that don't align with your community goals.
                </p>
                
                <h2 id="search-pattern-analysis" className="text-2xl font-bold text-primary-100 mb-4">Search Pattern Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Develop systematic approaches to discovering communities through keyword research, hashtag analysis, and social graph exploration. This involves understanding how your target audience describes their interests, challenges, and goals in their own language.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective search pattern analysis combines automated tools with manual exploration, tracking emerging terminology and communication patterns within your target communities. This ongoing analysis ensures you stay current with evolving language and interests.
                </p>
                
                <h2 id="community-health-assessment" className="text-2xl font-bold text-primary-100 mb-4">Community Health Assessment</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Evaluate discovered communities using engagement quality metrics, growth trajectory analysis, and creator saturation indices. Healthy communities show consistent member participation, meaningful discussions, and sustainable growth patterns without creator oversaturation.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Assessment criteria include average engagement rates, response times to new content, member retention patterns, and the balance between content creators and content consumers. These metrics indicate whether a community offers genuine opportunities for creator growth.
                </p>
                
                <h2 id="opportunity-validation" className="text-2xl font-bold text-primary-100 mb-4">Opportunity Validation</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Test your assumptions about community needs and interests through small-scale engagement experiments and value-driven content contributions. This validation phase prevents investing significant time in communities that may not align with your creator goals.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Validation activities include sharing helpful resources, participating in discussions, and observing community responses to different content types. Successful validation shows clear interest in your expertise area and positive reception to your contribution style.
                </p>
                
                <h2 id="engagement-strategy" className="text-2xl font-bold text-primary-100 mb-4">Engagement Strategy</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Develop authentic, value-first approaches to community participation that respect community norms while establishing your expertise and building relationships. Effective engagement strategies prioritize giving value before seeking any form of return.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Strategic engagement involves understanding community etiquette, identifying opportunities to help members solve problems, and gradually building recognition as a valuable contributor rather than a self-promoter. This approach builds sustainable, long-term community relationships.
                </p>
                
                <h2 id="relationship-building" className="text-2xl font-bold text-primary-100 mb-4">Relationship Building</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Focus on developing genuine connections with key community members, moderators, and fellow creators through consistent value contribution and authentic interaction. Strong relationships within micro-communities become the foundation for sustainable creator growth and collaboration opportunities.
                </p>
              </section>

              {/* Advanced Discovery Methods */}
              <section id="advanced-discovery-methods" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Advanced Discovery Methods</h1>
                
                <h2 id="social-graph-analysis" className="text-2xl font-bold text-primary-100 mb-4">Social Graph Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Map connections between community members, influencers, and related communities to understand network structures and identify bridge communities that connect different niches. Social graph analysis reveals hidden pathways for community discovery and cross-pollination opportunities.
                </p>
                
                <h2 id="hashtag-archaeology" className="text-2xl font-bold text-primary-100 mb-4">Hashtag Archaeology</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Systematically explore hashtag evolution and usage patterns to discover emerging communities and track community migration across platforms. This method involves tracking how hashtags develop, combine, and split as communities evolve and mature.
                </p>
                
                <h2 id="influencer-network-mapping" className="text-2xl font-bold text-primary-100 mb-4">Influencer Network Mapping</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Identify and analyze micro and nano-influencers within target communities to understand community leadership structures and content preferences. Network mapping reveals who shapes opinions and drives engagement within specific communities.
                </p>
                
                <h2 id="content-gap-analysis" className="text-2xl font-bold text-primary-100 mb-4">Content Gap Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Systematically identify underserved content needs within discovered communities by analyzing discussion patterns, frequently asked questions, and unresolved challenges. Gap analysis reveals immediate opportunities for value creation and community contribution.
                </p>
              </section>

              {/* Platform-Specific Strategies */}
              <section id="platform-specific-strategies" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Platform-Specific Strategies</h1>
                
                <h2 id="reddit-community-mining" className="text-2xl font-bold text-primary-100 mb-4">Reddit Community Mining</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Leverage Reddit's specialized subreddit structure for deep niche community discovery through engagement metrics analysis, cross-community user research, and moderator relationship building.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective Reddit mining involves analyzing subreddit subscriber growth, post engagement patterns, comment quality, and community rules to identify active, well-moderated communities aligned with your niche. Focus on communities with consistent daily activity and meaningful discussion rather than simple content consumption.
                </p>
                
                <h2 id="discord-server-discovery" className="text-2xl font-bold text-primary-100 mb-4">Discord Server Discovery</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Access real-time communities through Discord server directories, invite link tracking, and member overlap analysis to identify active voice and text-based communities.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Discord communities often provide more intimate, real-time interaction opportunities compared to other platforms. Success requires understanding server culture, participating in voice channels when appropriate, and contributing to ongoing conversations rather than broadcasting content.
                </p>
                
                <h2 id="instagram-niche-mapping" className="text-2xl font-bold text-primary-100 mb-4">Instagram Niche Mapping</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Discover visual-focused micro-communities through hashtag clustering, story engagement analysis, and creator collaboration patterns. Instagram's visual nature creates unique opportunities for aesthetic-aligned community building.
                </p>
                
                <h2 id="tiktok-subculture-analysis" className="text-2xl font-bold text-primary-100 mb-4">TikTok Subculture Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Identify emerging trends and niche communities through algorithm pattern analysis, sound usage tracking, and creator interaction networks. TikTok's algorithm-driven discovery creates rapid community formation around specific interests and trends.
                </p>
                
                <h2 id="youtube-community-tabs" className="text-2xl font-bold text-primary-100 mb-4">YouTube Community Tabs</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Utilize YouTube's community features, premiere chat functions, and creator collaborations to identify engaged subscriber communities and cross-channel opportunities.
                </p>
              </section>

              {/* Community Assessment Tools */}
              <section id="community-assessment-tools" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Community Assessment Tools</h1>
                
                <h2 id="engagement-quality-metrics" className="text-2xl font-bold text-primary-100 mb-4">Engagement Quality Metrics</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Develop scoring systems for evaluating community health based on member participation rates, content quality, discussion depth, and response patterns. Quality metrics go beyond simple like counts to assess meaningful interaction and community value.
                </p>
                
                <h2 id="growth-trajectory-analysis" className="text-2xl font-bold text-primary-100 mb-4">Growth Trajectory Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Track community growth patterns, member retention rates, and seasonal activity fluctuations to predict future community health and opportunity potential. Understanding growth trajectories helps identify communities in their optimal engagement phases.
                </p>
                
                <h2 id="creator-saturation-index" className="text-2xl font-bold text-primary-100 mb-4">Creator Saturation Index</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Calculate the ratio of content creators to content consumers within communities to identify oversaturated markets versus underserved opportunities. Optimal communities maintain healthy creator-to-audience ratios that support multiple creators without excessive competition.
                </p>
                
                <h2 id="monetization-potential" className="text-2xl font-bold text-primary-100 mb-4">Monetization Potential</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Assess community spending patterns, product interest signals, and commercial tolerance levels to evaluate revenue opportunities. Monetization assessment helps prioritize communities that align with your business goals and offer sustainable income potential.
                </p>
              </section>

              {/* Integration & Monetization */}
              <section id="integration-monetization" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Integration & Monetization</h1>
                
                <h2 id="community-entry-strategy" className="text-2xl font-bold text-primary-100 mb-4">Community Entry Strategy</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Develop systematic approaches to joining and integrating with new communities while respecting community norms and building authentic relationships. Successful entry strategies prioritize value contribution over self-promotion, establishing credibility before introducing commercial elements.
                </p>
                
                <h2 id="value-first-approach" className="text-2xl font-bold text-primary-100 mb-4">Value-First Approach</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Implement strategies that prioritize community benefit over immediate personal gain, building trust and authority through consistent value delivery. Value-first approaches create sustainable community relationships that support long-term creator growth and monetization opportunities.
                </p>
                
                <h2 id="product-market-fit" className="text-2xl font-bold text-primary-100 mb-4">Product-Market Fit</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Align your content and product offerings with specific community needs and preferences identified through engagement and analysis. Strong product-market fit within micro-communities generates higher conversion rates and customer satisfaction than broad-market approaches.
                </p>
                
                <h2 id="revenue-optimization" className="text-2xl font-bold text-primary-100 mb-4">Revenue Optimization</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Develop monetization strategies that align with community values and member preferences, ensuring sustainable revenue growth without compromising community relationships. Optimization involves testing different approaches and measuring both financial and community health metrics.
                </p>
              </section>

              {/* Templates & Worksheets */}
              <section id="templates-worksheets" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Templates & Worksheets</h1>
                
                <h2 id="discovery-checklist" className="text-2xl font-bold text-primary-100 mb-4">Discovery Checklist</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Systematic checklists ensure comprehensive community evaluation and prevent overlooking critical assessment factors. Discovery checklists guide researchers through each step of the DISCOVER framework, maintaining consistency across different community evaluations.
                </p>
                
                <h2 id="assessment-scorecard" className="text-2xl font-bold text-primary-100 mb-4">Assessment Scorecard</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Standardized scoring systems enable objective comparison between different community opportunities, supporting data-driven decision making about where to invest time and energy. Scorecards include weighted criteria based on your specific creator goals and priorities.
                </p>
                
                <h2 id="entry-strategy-template" className="text-2xl font-bold text-primary-100 mb-4">Entry Strategy Template</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Pre-built templates for planning community entry approaches, including research phases, value contribution strategies, and relationship building timelines. Templates accelerate the community integration process while ensuring consistent, respectful approaches.
                </p>
                
                <h2 id="progress-tracking-sheet" className="text-2xl font-bold text-primary-100 mb-4">Progress Tracking Sheet</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Documentation systems for monitoring community engagement progress, relationship development, and outcome measurement. Tracking sheets enable continuous optimization of community strategies and identification of successful patterns for replication.
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