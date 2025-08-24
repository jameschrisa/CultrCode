'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Users, Target, Brain, TrendingUp, Eye, Heart, DollarSign, ArrowLeft, BookOpen } from 'lucide-react'
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
      title: "Understanding Your Audience",
      subsections: ["Why Audience Segmentation Matters", "The Creator's Dilemma", "ROI of Proper Segmentation"]
    },
    {
      title: "Foundation: Demographic Segmentation",
      subsections: ["Age and Generation Cohorts", "Geographic Considerations", "Income and Lifestyle Factors"]
    },
    {
      title: "Advanced: Psychographic Segmentation", 
      subsections: ["Values and Beliefs", "Interests and Hobbies", "Personality Traits", "Lifestyle Choices"]
    },
    {
      title: "Behavioral Segmentation",
      subsections: ["Engagement Patterns", "Content Consumption Habits", "Purchase Behavior", "Platform Preferences"]
    },
    {
      title: "Tools and Frameworks",
      subsections: ["Analytics Setup", "Survey Methods", "Social Listening", "AI-Powered Insights"]
    },
    {
      title: "Implementation Strategy",
      subsections: ["Content Personalization", "Platform Strategy", "Community Building", "Monetization Optimization"]
    },
    {
      title: "Case Studies and Examples",
      subsections: ["Successful Creator Campaigns", "Common Pitfalls", "Industry Benchmarks"]
    }
  ]

  return (
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Table of Contents</h2>
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
            Quick Access Templates
          </h3>
          <p className="text-sm text-primary-300 mb-3">Download worksheets and implementation guides.</p>
          <Button 
            size="sm" 
            className="w-full bg-accent-500 hover:bg-accent-600"
          >
            Access Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ metric, value, description, icon: Icon, trend }: {
  metric: string
  value: string
  description: string
  icon: any
  trend?: string
}) => (
  <Card className="glass-card">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-accent-400" />
        <div className="text-3xl font-bold text-primary-50">{value}</div>
      </div>
      <h3 className="font-bold text-primary-50 mb-2">{metric}</h3>
      <p className="text-primary-300 text-sm">{description}</p>
      {trend && (
        <div className="mt-2 text-xs text-accent-400 font-medium">
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
)

const FrameworkStep = ({ number, title, description, tools, outputs, icon: Icon }: {
  number: string
  title: string
  description: string
  tools: string[]
  outputs: string[]
  icon: any
}) => (
  <Card className="glass-card mb-8">
    <CardContent className="p-8">
      <div className="flex items-start mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-accent-500 text-white rounded-full mr-6 flex-shrink-0">
          <span className="text-2xl font-bold">{number}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <Icon className="h-6 w-6 text-accent-400 mr-2" />
            <h3 className="text-2xl font-bold text-primary-50">{title}</h3>
          </div>
          <p className="text-primary-300 text-lg">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-primary-200 mb-3">Tools & Methods:</h4>
          <ul className="space-y-2">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-primary-300">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-200 mb-3">Expected Outputs:</h4>
          <ul className="space-y-2">
            {outputs.map((output, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-primary-300">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function AudienceSegmentationGuide() {
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
              Creator Economy Guide
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
              The Complete Guide to
              <span className="gradient-text block">Audience Segmentation</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Master audience segmentation with proven frameworks, tools, and strategies that increase engagement by 127% and revenue by 3.5x for creators.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Audience Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Strategy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Revenue Optimization</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Proven Framework</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="max-w-4xl">

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Introduction to Audience Segmentation</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Audience segmentation is the practice of dividing your audience into distinct groups based on shared characteristics, behaviors, or preferences. For creators, effective segmentation can increase engagement by 127% and revenue by 3.5x compared to generic content approaches.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Unlike traditional marketing segmentation that relies heavily on demographics, creator economy segmentation focuses on values, interests, content consumption patterns, and community participation. This approach recognizes that a 22-year-old urban professional might have more in common with a 35-year-old rural entrepreneur if they share similar values and interests.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-8">
                  This guide introduces the S.E.G.M.E.N.T Framework - a systematic 7-step approach that transforms generic content into highly-targeted, engaging experiences that resonate with specific audience groups.
                </p>
              </section>

              {/* Why Segmentation Matters */}
              <section id="why-segmentation-matters" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Why Segmentation Matters for Creators</h1>
                
                <h2 id="engagement-impact" className="text-2xl font-bold text-primary-100 mb-4">Engagement Impact</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Proper audience segmentation directly correlates with higher engagement rates. When content speaks to specific groups rather than everyone in general, audiences feel seen and understood. This connection translates into likes, comments, shares, and most importantly, loyal followers who actively engage with your content over time.
                </p>
                
                <h2 id="revenue-optimization" className="text-2xl font-bold text-primary-100 mb-4">Revenue Optimization</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Segmented audiences convert at higher rates because the content, products, and services feel personally relevant. Instead of creating one product for everyone, successful creators develop targeted offerings for specific segments, often charging premium prices for specialized solutions.
                </p>
                
                <h2 id="content-efficiency" className="text-2xl font-bold text-primary-100 mb-4">Content Efficiency</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Understanding your segments eliminates content guesswork. Rather than creating content hoping it resonates, segmentation provides clear direction for topics, formats, and messaging that will perform well with specific audience groups.
                </p>
                
                <h2 id="competitive-advantage" className="text-2xl font-bold text-primary-100 mb-4">Competitive Advantage</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Most creators operate with basic demographics or attempt to serve everyone equally. Sophisticated segmentation creates competitive advantages by identifying underserved niches and developing specialized content that competitors overlook.
                </p>
              </section>

              {/* The S.E.G.M.E.N.T Framework */}
              <section id="segment-framework" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">The S.E.G.M.E.N.T Framework</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  The S.E.G.M.E.N.T Framework is a systematic 7-step approach to audience segmentation. Each letter represents a crucial step in creating meaningful audience segments that drive engagement and revenue.
                </p>
                
                <h2 id="study-your-audience" className="text-2xl font-bold text-primary-100 mb-4">Study Your Current Audience</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Begin with comprehensive audience research using platform analytics, surveys, and direct engagement. Gather data on demographics, interests, engagement patterns, content preferences, and behavioral indicators.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Key metrics include follower demographics, content performance by topic, engagement timing patterns, and audience overlap across platforms. This baseline data informs all subsequent segmentation decisions.
                </p>
                
                <h2 id="evaluate-behavior-patterns" className="text-2xl font-bold text-primary-100 mb-4">Evaluate Behavior Patterns</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Analyze how different audience groups interact with your content. Look for patterns in viewing duration, engagement types, sharing behaviors, and content format preferences.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Behavioral segmentation often reveals more actionable insights than demographic data alone. A group that consistently engages with educational content represents a distinct segment regardless of age or location.
                </p>
                
                <h2 id="group-by-commonalities" className="text-2xl font-bold text-primary-100 mb-4">Group by Commonalities</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Identify shared characteristics that create meaningful groups within your audience. These might include values, interests, goals, challenges, or stage of life rather than traditional demographic categories.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective groupings create segments large enough to justify targeted content but specific enough to enable personalized messaging. Aim for 3-5 primary segments initially.
                </p>
                
                <h2 id="map-content-preferences" className="text-2xl font-bold text-primary-100 mb-4">Map Content Preferences</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Document each segment's content preferences including topics, formats, posting schedules, and engagement styles. Some segments prefer quick tips while others want detailed tutorials.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Create content preference profiles for each segment, noting not just what they like but how they prefer to consume it. This includes preferred platforms, content lengths, and interaction styles.
                </p>
                
                <h2 id="establish-personas" className="text-2xl font-bold text-primary-100 mb-4">Establish Detailed Personas</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Develop comprehensive personas for each segment that go beyond demographics to include motivations, pain points, goals, and objections. These personas guide content creation and product development.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Effective personas feel like real people rather than statistical averages. Include specific details about their challenges, aspirations, and how your content fits into their daily lives.
                </p>
                
                <h2 id="name-your-segments" className="text-2xl font-bold text-primary-100 mb-4">Name Your Segments</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Give each segment memorable, descriptive names that capture their essence. Good segment names help your team remember and discuss different audience groups effectively.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Examples might include "Ambitious Beginners," "Experienced Optimizers," or "Community Builders." These names should immediately convey the segment's key characteristics and needs.
                </p>
                
                <h2 id="test-and-refine" className="text-2xl font-bold text-primary-100 mb-4">Test and Continuously Refine</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Validate your segments through targeted content testing and audience feedback. Segmentation is iterative - expect to refine segments as you learn more about your audience and as your community evolves.
                </p>
              </section>

              {/* Segmentation Methods */}
              <section id="segmentation-methods" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Segmentation Methods</h1>
                
                <h2 id="demographic-segmentation" className="text-2xl font-bold text-primary-100 mb-4">Demographic Segmentation</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Demographic segmentation divides audiences based on age, gender, income, education, and location. While useful as a starting point, demographics alone rarely explain content preferences or purchasing behaviors in the creator economy.
                </p>
                
                <h2 id="psychographic-segmentation" className="text-2xl font-bold text-primary-100 mb-4">Psychographic Segmentation</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Psychographic segmentation focuses on values, attitudes, interests, and lifestyle choices. This method often provides more actionable insights for content creators than demographic data.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  For example, environmentally conscious consumers represent a psychographic segment that spans multiple demographics but shares common values that influence their content consumption and purchasing decisions.
                </p>
                
                <h2 id="behavioral-segmentation" className="text-2xl font-bold text-primary-100 mb-4">Behavioral Segmentation</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Behavioral segmentation analyzes how audiences interact with your content, including engagement patterns, content consumption habits, and platform preferences.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Key behavioral indicators include viewing duration, comment frequency, sharing patterns, and content format preferences. These behaviors often predict future engagement better than demographic characteristics.
                </p>
                
                <h2 id="value-based-segmentation" className="text-2xl font-bold text-primary-100 mb-4">Value-Based Segmentation</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Value-based segmentation considers what audiences care about most deeply - their core values, causes they support, and principles that guide their decisions. This method creates the strongest emotional connections between creators and audiences.
                </p>
              </section>

              {/* Tools and Analytics */}
              <section id="tools-and-analytics" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Tools and Analytics</h1>
                
                <h2 id="platform-analytics" className="text-2xl font-bold text-primary-100 mb-4">Platform Analytics</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Each social media platform provides native analytics tools that offer insights into audience demographics and behavior patterns. Instagram Insights, YouTube Analytics, and TikTok Analytics provide valuable segmentation data.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Focus on metrics like audience demographics, content performance by topic, engagement patterns, and follower growth sources to identify natural audience segments.
                </p>
                
                <h2 id="surveys-and-polls" className="text-2xl font-bold text-primary-100 mb-4">Surveys and Polls</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Direct audience surveys provide qualitative insights that analytics alone cannot capture. Use surveys to understand motivations, preferences, challenges, and goals.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Keep surveys brief and focused, asking about specific topics like content preferences, purchasing behavior, or values. Offer incentives to increase response rates.
                </p>
                
                <h2 id="engagement-analysis" className="text-2xl font-bold text-primary-100 mb-4">Engagement Analysis</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Analyze engagement patterns across different content types to identify audience preferences. Look for correlations between content topics, formats, and engagement levels.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Track which content generates the most comments, shares, and saves versus simple likes. Different engagement types often indicate different audience segments.
                </p>
                
                <h2 id="customer-interviews" className="text-2xl font-bold text-primary-100 mb-4">Customer Interviews</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Conduct one-on-one interviews with representative audience members to gain deep insights into their motivations, challenges, and content consumption habits. These conversations reveal nuances that quantitative data misses.
                </p>
              </section>

              {/* Implementation Strategy */}
              <section id="implementation-strategy" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Implementation Strategy</h1>
                
                <h2 id="content-planning" className="text-2xl font-bold text-primary-100 mb-4">Content Planning by Segment</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Develop content calendars that address each segment's preferences and needs. Plan a mix of content that serves different segments while maintaining overall brand consistency.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Consider creating segment-specific content series, varying posting times for different audience groups, and adapting content formats to match segment preferences.
                </p>
                
                <h2 id="personalized-messaging" className="text-2xl font-bold text-primary-100 mb-4">Personalized Messaging</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Adapt your messaging tone, vocabulary, and focus points for different segments. The same core message can be presented differently to resonate with distinct audience groups.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  For example, present productivity tips as "efficiency hacks" for one segment and "work-life balance strategies" for another, even when the underlying advice is similar.
                </p>
                
                <h2 id="product-development" className="text-2xl font-bold text-primary-100 mb-4">Product Development</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Use segmentation insights to guide product development decisions. Different segments may prefer different product formats, price points, or delivery methods.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Consider creating tiered offerings that serve multiple segments at different price points, or specialized products that deeply serve specific segment needs.
                </p>
                
                <h2 id="community-building" className="text-2xl font-bold text-primary-100 mb-4">Community Building</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Foster connections between similar audience segments while maintaining overall community cohesion. Create sub-communities or discussion threads that cater to specific segment interests.
                </p>
              </section>

              {/* Measuring Success */}
              <section id="measuring-success" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Measuring Segmentation Success</h1>
                
                <h2 id="engagement-metrics" className="text-2xl font-bold text-primary-100 mb-4">Engagement Metrics</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Track engagement rates by content type and audience segment. Successful segmentation should show increasing engagement rates for segment-specific content compared to generic content.
                </p>
                
                <h2 id="conversion-rates" className="text-2xl font-bold text-primary-100 mb-4">Conversion Rates</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Monitor how different segments convert to email subscribers, product purchases, or other desired actions. Effective segmentation typically increases conversion rates by 2-4x.
                </p>
                
                <h2 id="audience-growth" className="text-2xl font-bold text-primary-100 mb-4">Audience Growth</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Analyze which segments are growing fastest and attracting the highest-quality followers. This data helps inform content strategy and resource allocation decisions.
                </p>
                
                <h2 id="feedback-quality" className="text-2xl font-bold text-primary-100 mb-4">Feedback Quality</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Evaluate the quality and depth of audience feedback. Better segmentation often leads to more detailed, thoughtful comments and higher-value audience interactions.
                </p>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Common Segmentation Mistakes</h1>
                
                <h2 id="over-segmentation" className="text-2xl font-bold text-primary-100 mb-4">Over-Segmentation</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Creating too many small segments can dilute your content strategy and make execution overwhelming. Start with 3-5 primary segments and expand gradually as your audience grows.
                </p>
                
                <h2 id="demographic-only-focus" className="text-2xl font-bold text-primary-100 mb-4">Demographics-Only Focus</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Relying solely on demographic data often misses the psychological and behavioral factors that drive content engagement in the creator economy.
                </p>
                
                <h2 id="static-segments" className="text-2xl font-bold text-primary-100 mb-4">Static Segments</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Treating segments as fixed rather than evolving with your audience leads to outdated strategies. Regularly review and update your segmentation approach.
                </p>
                
                <h2 id="ignoring-overlap" className="text-2xl font-bold text-primary-100 mb-4">Ignoring Segment Overlap</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Segments often overlap, and content can serve multiple segments simultaneously. Look for opportunities to create content that appeals to multiple segments without losing focus.
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
            "headline": "The Complete Guide to Audience Segmentation for Creators",
            "description": "Master audience segmentation with proven frameworks, tools, and strategies that increase engagement by 127% and revenue by 3.5x for creators.",
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
              "@id": "https://cultrcode.com/guides/audience-segmentation"
            },
            "keywords": "audience segmentation, creator economy, content strategy, audience analysis, creator marketing, engagement optimization, revenue growth"
          })
        }}
      />
    </div>
  )
}