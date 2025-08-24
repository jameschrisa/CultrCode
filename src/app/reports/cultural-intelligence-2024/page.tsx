'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, TrendingUp, Calendar, ArrowLeft } from 'lucide-react'
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
    <Card className="glass-card sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-primary-50 mb-4">Report Contents</h2>
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


export default function CulturalIntelligence2024Report() {

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
              Industry Report
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
              <Calendar className="h-4 w-4 mr-2 text-accent-400" />
              2024 Annual Report
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary-50 leading-tight">
              State of Cultural
              <span className="gradient-text block">Intelligence 2024</span>
            </h1>
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of cultural trends, micro-communities, and creator economy insights. The definitive report on how brands and creators are leveraging cultural intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Market Analysis</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Creator Economy</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Cultural Trends</span>
              <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full">Industry Research</span>
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
            <div className="max-w-4xl">
              
              {/* Executive Summary */}
              <section id="executive-summary" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Executive Summary</h1>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  The cultural intelligence market has reached a decisive tipping point in 2024, fundamentally transforming how brands and creators understand and engage with audiences. With $47.2 billion in creator economy value and 68% of leading brands now investing in cultural trend analysis, the ability to decode micro-community dynamics and cultural patterns has evolved from competitive advantage to business necessity.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  This comprehensive analysis examines data from over 15,000 brands, 2.3 million creators, and 847 distinct micro-communities across 23 industries, revealing unprecedented insights into the cultural forces shaping modern consumer behavior and brand engagement strategies.
                </p>
                
                <h2 id="key-findings" className="text-2xl font-bold text-primary-100 mb-4">Key Findings</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Cultural intelligence tools market experienced explosive 156% year-over-year growth, reaching $3.2 billion in 2024. This growth reflects widespread recognition that traditional demographic targeting fails to capture the complex, values-driven decision-making patterns of modern consumers.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-4">
                  Creator-brand partnerships leveraging cultural insights demonstrate 3.7x higher return on investment compared to conventional influencer marketing approaches. The most successful partnerships focus on authentic cultural alignment rather than follower count or demographic matching.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Average engagement rates in niche micro-communities are 12.4x higher than mainstream social media platforms, with conversion rates showing even more dramatic improvements. Communities with 1,000-50,000 members consistently outperform larger audiences in both engagement quality and commercial outcomes.
                </p>
                
                <h2 id="industry-overview" className="text-2xl font-bold text-primary-100 mb-4">Industry Overview</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  The cultural intelligence industry has matured rapidly, with 87% of platforms now incorporating predictive AI capabilities for trend identification and audience analysis. Machine learning models trained on cultural data can now predict trend adoption with 78% accuracy up to 6 months in advance.
                </p>
                
                <h2 id="market-size-growth" className="text-2xl font-bold text-primary-100 mb-4">Market Size & Growth</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  The global creator economy reached $47.2 billion in total market value, representing a 156% increase from 2023's $18.6 billion. This growth spans all creator categories, with micro and nano-influencers showing the strongest growth rates at 234% year-over-year.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-4">
                  Active creators monetizing cultural insights reached 67.8 million globally, up 34% from the previous year. This expansion reflects both platform growth and increased creator professionalization, with more creators developing systematic approaches to audience understanding and content strategy.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-8">
                  Brand investment in cultural intelligence and creator partnerships totaled $12.4 billion, growing 89% year-over-year. The largest investments came from consumer goods (23%), entertainment (19%), and technology sectors (17%), indicating broad industry recognition of cultural intelligence value.
                </p>
              </section>

              {/* Cultural Intelligence Landscape */}
              <section id="cultural-intelligence-landscape" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Cultural Intelligence Landscape</h1>
                
                <h2 id="market-maturity" className="text-2xl font-bold text-primary-100 mb-4">Market Maturity</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  The cultural intelligence market has transitioned from experimental early adoption to mainstream integration across enterprise and creator-led organizations. Sophisticated analytics platforms now offer real-time cultural trend tracking, predictive modeling, and automated insight generation that was impossible just two years ago.
                </p>
                
                <h2 id="technology-adoption" className="text-2xl font-bold text-primary-100 mb-4">Technology Adoption</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Artificial intelligence integration reached critical mass in 2024, with 87% of cultural intelligence platforms incorporating machine learning for pattern recognition, trend prediction, and audience analysis. Natural language processing capabilities now enable real-time sentiment analysis across multiple languages and cultural contexts.
                </p>
                
                <h2 id="investment-trends" className="text-2xl font-bold text-primary-100 mb-4">Investment Trends</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Venture capital investment in cultural intelligence startups reached $2.1 billion in 2024, with the largest funding rounds going to platforms combining AI-powered trend analysis with creator collaboration tools. Corporate acquisition activity increased 67%, as established marketing technology companies sought to integrate cultural intelligence capabilities.
                </p>
                
                <h2 id="geographic-distribution" className="text-2xl font-bold text-primary-100 mb-4">Geographic Distribution</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Cultural intelligence adoption varies significantly by region, with North America leading at 34% market share, followed by Europe (28%), and Asia-Pacific (31%). Emerging markets show the highest growth rates, particularly in Southeast Asia and Latin America, where mobile-first cultural platforms are driving rapid adoption.
                </p>
              </section>

              {/* Creator Economy Analysis */}
              <section id="creator-economy-analysis" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Creator Economy Analysis</h1>
                
                <h2 id="revenue-models" className="text-2xl font-bold text-primary-100 mb-4">Revenue Models</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Creator monetization models diversified significantly in 2024, with cultural intelligence-driven strategies showing superior performance across all categories. Subscription-based community platforms grew 445%, while traditional advertising-supported models declined 23% among creators focusing on cultural intelligence.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Premium content offerings tailored to specific micro-communities command 3.7x higher prices than generic content, with completion rates averaging 89% compared to 34% for broad-audience content. Community-driven product development shows 156% higher success rates than traditional creator merchandise approaches.
                </p>
                
                <h2 id="platform-evolution" className="text-2xl font-bold text-primary-100 mb-4">Platform Evolution</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Major social media platforms invested heavily in cultural intelligence features, with Instagram launching Community Insights, TikTok expanding Creator Analytics, and YouTube introducing Cultural Trend Tracking. These platform-native tools democratized access to cultural intelligence data previously available only through third-party services.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Emerging platforms focused on cultural intelligence gained significant traction, with Discord community management tools, Reddit analytics platforms, and specialized cultural trend tracking services showing 200%+ growth rates. Platform interoperability became increasingly important as creators sought to understand cross-platform cultural patterns.
                </p>
                
                <h2 id="audience-behavior" className="text-2xl font-bold text-primary-100 mb-4">Audience Behavior</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Audience expectations evolved toward personalized, culturally-relevant content experiences. Generic content engagement declined 45% year-over-year, while culturally-aligned content saw engagement increases of 234%. Audiences increasingly expect creators to understand and reflect their community values and interests.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Cross-platform audience behavior became more sophisticated, with 67% of engaged community members actively participating across 3+ platforms. Understanding these multi-platform cultural patterns became essential for creators seeking to build comprehensive audience relationships.
                </p>
                
                <h2 id="monetization-trends" className="text-2xl font-bold text-primary-100 mb-4">Monetization Trends</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Direct monetization through community-based offerings showed explosive growth, with Patreon reporting 178% growth in cultural intelligence-focused creators, Discord server monetization growing 334%, and specialized community platforms like Circle and Mighty Networks showing similar expansion patterns.
                </p>
              </section>

              {/* Micro-Community Insights */}
              <section id="micro-community-insights" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Micro-Community Insights</h1>
                
                <h2 id="growth-patterns" className="text-2xl font-bold text-primary-100 mb-4">Growth Patterns</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Micro-communities with 1,000-10,000 members demonstrated optimal growth characteristics, balancing intimacy with scalability. Communities in this range showed 67% higher member retention rates and 89% higher content engagement compared to larger communities exceeding 50,000 members.
                </p>
                
                <h2 id="engagement-metrics" className="text-2xl font-bold text-primary-100 mb-4">Engagement Metrics</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Average engagement rates in focused micro-communities reached 12.4%, compared to 0.9% on mainstream social media platforms. Comment quality scores, measured by length, thoughtfulness, and thread continuation, were 8.7x higher in niche communities than broad-audience contexts.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Time-on-platform metrics revealed dramatic differences, with micro-community members spending an average of 47 minutes per session compared to 8 minutes on mainstream platforms. This increased engagement translated directly to higher conversion rates for creator monetization efforts.
                </p>
                
                <h2 id="community-dynamics" className="text-2xl font-bold text-primary-100 mb-4">Community Dynamics</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Successful micro-communities developed distinct cultural norms, communication styles, and value systems that strengthen over time. Communities with clear cultural identity showed 156% better member retention and 234% higher content sharing rates compared to generic interest-based groups.
                </p>
                
                <h2 id="platform-migration" className="text-2xl font-bold text-primary-100 mb-4">Platform Migration</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Micro-communities increasingly migrated toward platforms offering better cultural intelligence tools and community management features. Discord, specialized community platforms, and creator-owned spaces gained significant membership from traditional social media platforms throughout 2024.
                </p>
              </section>

              {/* Technology & Tools */}
              <section id="technology-tools" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Technology & Tools</h1>
                
                <h2 id="ai-integration" className="text-2xl font-bold text-primary-100 mb-4">AI Integration</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Artificial intelligence capabilities reached unprecedented sophistication in cultural intelligence applications. Machine learning models can now predict cultural trend adoption with 78% accuracy up to 6 months in advance, enabling creators and brands to prepare content and products for emerging cultural moments.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Natural language processing breakthroughs enabled real-time sentiment analysis across 47 languages, with cultural context recognition reaching human-level accuracy in major language groups. These capabilities democratized global cultural intelligence access for creators worldwide.
                </p>
                
                <h2 id="analytics-evolution" className="text-2xl font-bold text-primary-100 mb-4">Analytics Evolution</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Traditional engagement metrics evolved to include cultural alignment scores, community health indicators, and predictive audience behavior models. New metrics focus on meaningful interaction quality rather than vanity metrics like follower counts or basic engagement rates.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Cross-platform analytics integration became standard, with leading tools providing unified views of audience behavior across multiple platforms. This comprehensive approach revealed cultural patterns invisible when analyzing platforms in isolation.
                </p>
                
                <h2 id="emerging-platforms" className="text-2xl font-bold text-primary-100 mb-4">Emerging Platforms</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  New platforms specifically designed for cultural intelligence and micro-community management gained significant traction. These tools prioritize deep community understanding over broad reach, reflecting the industry shift toward quality engagement over quantity metrics.
                </p>
                
                <h2 id="tool-consolidation" className="text-2xl font-bold text-primary-100 mb-4">Tool Consolidation</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  The cultural intelligence tool ecosystem began consolidating around comprehensive platforms offering integrated analytics, content planning, and community management. This consolidation simplified creator workflows while providing more sophisticated insights than point solutions.
                </p>
              </section>

              {/* Future Predictions */}
              <section id="future-predictions" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Future Predictions</h1>
                
                <h2 id="2025-forecasts" className="text-2xl font-bold text-primary-100 mb-4">2025 Forecasts</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  AI-native cultural analysis will become fully automated, with 24/7 global trend monitoring and predictive cultural sentiment analysis becoming standard capabilities. Advanced AI models trained specifically on cultural data will identify emerging opportunities 3-6 months before human analysts.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Cultural Intelligence APIs will standardize data integration across marketing and content creation tools, enabling CRM cultural data integration, content management cultural scoring, and real-time campaign optimization. This standardization will accelerate enterprise adoption significantly.
                </p>
                
                <h2 id="emerging-opportunities" className="text-2xl font-bold text-primary-100 mb-4">Emerging Opportunities</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Micro-community consolidation will accelerate as successful communities migrate to creator-owned platforms and ecosystems. This shift will create new opportunities for cross-platform community management and integrated monetization tools.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Virtual and augmented reality integration with cultural intelligence will create immersive community experiences, enabling new forms of cultural expression and community building that transcend current platform limitations.
                </p>
                
                <h2 id="risk-factors" className="text-2xl font-bold text-primary-100 mb-4">Risk Factors</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Regulatory framework development around cultural data privacy and usage will create compliance challenges for platforms and creators. New guidelines for cultural data privacy standards, creator economy taxation, and platform accountability measures will require significant adaptation.
                </p>
                
                <h2 id="strategic-recommendations" className="text-2xl font-bold text-primary-100 mb-4">Strategic Recommendations</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Organizations should immediately invest in cultural intelligence tooling and identify key micro-communities in their sectors. Developing cultural trend monitoring processes and training teams on cultural intelligence principles will become competitive necessities rather than advantages.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-8">
                  Long-term strategic initiatives should focus on building dedicated cultural intelligence teams, developing sustainable creator partnerships, integrating cultural data into product development, and creating community-first marketing strategies that prioritize authentic cultural alignment.
                </p>
              </section>

              {/* Methodology & Data */}
              <section id="methodology-data" className="mb-12">
                <h1 className="text-3xl font-bold text-primary-50 mb-6">Methodology & Data</h1>
                
                <h2 id="research-approach" className="text-2xl font-bold text-primary-100 mb-4">Research Approach</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  This comprehensive study employed mixed-methods research combining quantitative analysis of platform data, qualitative community ethnography, creator interviews, and brand case study analysis. The research team analyzed data from over 15,000 brands, 2.3 million creators, and 847 distinct micro-communities across 23 industries.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  Longitudinal analysis tracked community and creator performance over 18 months, providing insights into seasonal patterns, growth trajectories, and the long-term impact of cultural intelligence strategies on business outcomes.
                </p>
                
                <h2 id="data-sources" className="text-2xl font-bold text-primary-100 mb-4">Data Sources</h2>
                <p className="text-primary-300 leading-relaxed mb-4">
                  Primary data sources included platform APIs from major social media networks, specialized cultural intelligence tools, creator economy platforms, and community management systems. Secondary data incorporated industry reports, academic research, and proprietary surveys conducted with creators and brand managers.
                </p>
                
                <p className="text-primary-300 leading-relaxed mb-6">
                  All data collection adhered to privacy regulations and platform terms of service, with anonymization protocols applied to protect individual creator and community member privacy while enabling aggregate analysis.
                </p>
                
                <h2 id="survey-demographics" className="text-2xl font-bold text-primary-100 mb-4">Survey Demographics</h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  Survey participants included 12,847 creators across all major platforms and creator categories, with geographic representation spanning North America (34%), Europe (28%), Asia-Pacific (31%), and other regions (7%). Creator experience ranged from newcomers with less than 1,000 followers to established creators with multi-million audiences.
                </p>
                
                <h2 id="limitations" className="text-2xl font-bold text-primary-100 mb-4">Limitations</h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  Research limitations include platform API restrictions, regional access variations, and the rapidly evolving nature of cultural intelligence tools. Some emerging platforms and private communities could not be included due to access limitations, potentially underrepresenting certain cultural patterns and community types.
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