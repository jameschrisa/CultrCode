'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, TrendingUp, DollarSign, Calendar, Target, Zap, Download, FileText } from 'lucide-react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { RiBrainFill } from 'react-icons/ri'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { SegmentMatch, PremiumInsights, ZipCodeData, CustomerPersona } from '@/types/segments'

interface LaunchStrategyReportProps {
  segmentMatch: SegmentMatch
  premiumInsights: PremiumInsights
  onDownloadPDF?: () => void
  onPrint?: () => void
}

export function LaunchStrategyReport({ 
  segmentMatch, 
  premiumInsights, 
  onDownloadPDF, 
  onPrint 
}: LaunchStrategyReportProps) {
  const { segment, matchScore, confidence } = segmentMatch
  const { detailedPersona, zipCodeAnalysis, competitorAnalysis, launchStrategy } = premiumInsights

  return (
    <div className="max-w-7xl mx-auto space-y-8 print:space-y-4">
      {/* Report Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 print:break-inside-avoid"
      >
        <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20 print:border-gray-300">
          <RiBrainFill className="w-5 h-5 mr-2" />
          Premium Intelligence Report
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-black text-primary-50 print:text-black">
          Launch Strategy for
          <span className="gradient-text block print:text-blue-600">{segment.name}</span>
        </h1>
        
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success-400 rounded-full print:bg-green-500" />
            <span className="text-primary-300 print:text-gray-700">{matchScore}% Match Confidence</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent-400 rounded-full print:bg-blue-500" />
            <span className="text-primary-300 print:text-gray-700">AI + GIS Powered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-400 rounded-full print:bg-purple-500" />
            <span className="text-primary-300 print:text-gray-700">Generated {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Buttons - Hidden in Print */}
        <div className="flex items-center justify-center space-x-4 print:hidden">
          <Button onClick={onDownloadPDF} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </Button>
          <Button variant="outline" onClick={onPrint} className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Print Report</span>
          </Button>
        </div>
      </motion.div>

      {/* Executive Summary */}
      <Card className="glass-card print:border-gray-300 print:shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <Target className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>Executive Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 glass-card rounded-xl print:border print:border-gray-300">
              <div className="text-2xl font-bold text-accent-400 print:text-blue-600">{matchScore}%</div>
              <div className="text-sm text-primary-300 print:text-gray-600">Segment Match</div>
            </div>
            <div className="text-center p-4 glass-card rounded-xl print:border print:border-gray-300">
              <div className="text-2xl font-bold text-success-400 print:text-green-600">${Math.round(confidence * 100)}K</div>
              <div className="text-sm text-primary-300 print:text-gray-600">Est. Market Size</div>
            </div>
            <div className="text-center p-4 glass-card rounded-xl print:border print:border-gray-300">
              <div className="text-2xl font-bold text-brand-400 print:text-purple-600">240%</div>
              <div className="text-sm text-primary-300 print:text-gray-600">ROI Potential</div>
            </div>
          </div>
          <p className="text-primary-300 print:text-gray-700 leading-relaxed">
            Based on your brand profile and AI analysis, the <strong className="text-primary-100 print:text-black">{segment.name}</strong> segment 
            represents your highest-opportunity customer base. This segment shows {matchScore}% alignment with your 
            brand values and demonstrates strong purchase intent for your category.
          </p>
        </CardContent>
      </Card>

      {/* Customer Persona */}
      <Card className="glass-card print:border-gray-300 print:shadow-none print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <Users className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>Detailed Customer Persona</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PersonaCard persona={detailedPersona} />
        </CardContent>
      </Card>

      {/* Geographic Intelligence */}
      <Card className="glass-card print:border-gray-300 print:shadow-none print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <FaMapMarkedAlt className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>Geographic Intelligence (GIS)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ZipCodeAnalysis zipCodes={zipCodeAnalysis} />
        </CardContent>
      </Card>

      {/* Launch Strategy Phases */}
      <Card className="glass-card print:border-gray-300 print:shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <Zap className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>90-Day Launch Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LaunchPhases strategy={launchStrategy} />
        </CardContent>
      </Card>

      {/* Competitor Analysis */}
      <Card className="glass-card print:border-gray-300 print:shadow-none print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <TrendingUp className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>Competitive Intelligence</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CompetitorInsights analysis={competitorAnalysis} />
        </CardContent>
      </Card>

      {/* Budget Allocation */}
      <Card className="glass-card print:border-gray-300 print:shadow-none print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary-50 print:text-black">
            <DollarSign className="w-6 h-6 text-accent-400 print:text-blue-600" />
            <span>Optimized Budget Allocation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BudgetBreakdown allocation={launchStrategy.budget_allocation} />
        </CardContent>
      </Card>
    </div>
  )
}

// Sub-components for different sections
function PersonaCard({ persona }: { persona: CustomerPersona }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center print:border print:border-gray-300">
            <Users className="w-8 h-8 text-accent-400 print:text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-50 print:text-black">{persona.name}</h3>
            <p className="text-primary-300 print:text-gray-600">Age {persona.age} • ${persona.income.toLocaleString()}/year</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-primary-100 print:text-black mb-2">Demographics</h4>
            <div className="text-sm text-primary-300 print:text-gray-700 space-y-1">
              <p>Education: {persona.demographics.education}</p>
              <p>Occupation: {persona.demographics.occupation}</p>
              <p>Location: {persona.location}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-primary-100 print:text-black mb-2">Key Values</h4>
          <div className="flex flex-wrap gap-2">
            {persona.psychographics.values.slice(0, 4).map((value, i) => (
              <span key={i} className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs print:border print:border-blue-300 print:text-blue-600">
                {value}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-primary-100 print:text-black mb-2">Preferred Channels</h4>
          <div className="flex flex-wrap gap-2">
            {persona.preferredChannels.map((channel, i) => (
              <span key={i} className="px-3 py-1 bg-brand-500/20 text-brand-300 rounded-full text-xs print:border print:border-purple-300 print:text-purple-600">
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ZipCodeAnalysis({ zipCodes }: { zipCodes: ZipCodeData[] }) {
  const topZipCodes = zipCodes.slice(0, 5)
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topZipCodes.slice(0, 3).map((zip, i) => (
          <div key={i} className="p-4 glass-card rounded-xl print:border print:border-gray-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-primary-50 print:text-black">{zip.zipCode}</span>
              <span className="text-xs bg-success-500/20 text-success-300 px-2 py-1 rounded-full print:border print:border-green-300 print:text-green-600">
                {Math.round(zip.segmentPenetration)}% match
              </span>
            </div>
            <p className="text-sm text-primary-300 print:text-gray-600">{zip.city}, {zip.state}</p>
            <p className="text-xs text-primary-400 print:text-gray-500">Pop: {zip.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-primary-700 print:border-gray-300">
              <th className="text-left py-2 text-primary-100 print:text-black">ZIP Code</th>
              <th className="text-left py-2 text-primary-100 print:text-black">Location</th>
              <th className="text-right py-2 text-primary-100 print:text-black">Population</th>
              <th className="text-right py-2 text-primary-100 print:text-black">Median Income</th>
              <th className="text-right py-2 text-primary-100 print:text-black">Match %</th>
            </tr>
          </thead>
          <tbody>
            {topZipCodes.map((zip, i) => (
              <tr key={i} className="border-b border-primary-800 print:border-gray-200">
                <td className="py-2 text-primary-200 print:text-black font-mono">{zip.zipCode}</td>
                <td className="py-2 text-primary-300 print:text-gray-700">{zip.city}, {zip.state}</td>
                <td className="py-2 text-right text-primary-300 print:text-gray-700">{zip.population.toLocaleString()}</td>
                <td className="py-2 text-right text-primary-300 print:text-gray-700">${zip.medianIncome.toLocaleString()}</td>
                <td className="py-2 text-right text-success-400 print:text-green-600 font-semibold">{Math.round(zip.segmentPenetration)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function LaunchPhases({ strategy }: { strategy: any }) {
  const phases = [strategy.phaseOne, strategy.phaseTwo, strategy.phaseThree]
  
  return (
    <div className="space-y-6">
      {phases.map((phase, i) => (
        <div key={i} className="p-6 glass-card rounded-xl print:border print:border-gray-300 print:break-inside-avoid">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center print:border print:border-blue-300">
              <span className="text-accent-400 font-bold print:text-blue-600">{i + 1}</span>
            </div>
            <div>
              <h3 className="font-bold text-primary-50 print:text-black">{phase.name}</h3>
              <p className="text-sm text-primary-300 print:text-gray-600">{phase.duration}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-primary-100 print:text-black mb-2">Objectives</h4>
              <ul className="space-y-1">
                {phase.objectives.map((obj: string, j: number) => (
                  <li key={j} className="text-sm text-primary-300 print:text-gray-700">• {obj}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-100 print:text-black mb-2">Key Tactics</h4>
              <ul className="space-y-1">
                {phase.tactics.slice(0, 3).map((tactic: any, j: number) => (
                  <li key={j} className="text-sm text-primary-300 print:text-gray-700">• {tactic.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CompetitorInsights({ analysis }: { analysis: any }) {
  return (
    <div className="space-y-6">
      <div className="p-4 glass-card rounded-xl print:border print:border-gray-300">
        <h3 className="font-bold text-primary-50 print:text-black mb-2">vs. {analysis.competitorName}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-primary-300 print:text-gray-600 mb-2">Shared Audience: {analysis.sharedAudience}%</p>
            <p className="text-sm text-primary-300 print:text-gray-700">{analysis.recommendedPositioning}</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-100 print:text-black mb-2">Your Advantages</h4>
            <ul className="space-y-1">
              {analysis.competitiveAdvantages.slice(0, 3).map((advantage: string, i: number) => (
                <li key={i} className="text-sm text-success-400 print:text-green-600">• {advantage}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-primary-100 print:text-black mb-3">Market Opportunities</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {analysis.marketGaps.map((gap: string, i: number) => (
            <div key={i} className="p-3 bg-accent-500/10 border border-accent-500/20 rounded-lg print:border-blue-300">
              <p className="text-sm text-primary-200 print:text-gray-700">{gap}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BudgetBreakdown({ allocation }: { allocation: any }) {
  const items = [
    { label: 'Content Creation', value: allocation.contentCreation, color: 'accent' },
    { label: 'Paid Advertising', value: allocation.paidAdvertising, color: 'brand' },
    { label: 'Influencer Partnerships', value: allocation.influencerPartnerships, color: 'success' },
    { label: 'Platform Fees', value: allocation.platformFees, color: 'orange' },
    { label: 'Analytics & Tools', value: allocation.analytics, color: 'blue' },
    { label: 'Contingency', value: allocation.contingency, color: 'gray' }
  ]
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 glass-card rounded-xl print:border print:border-gray-300">
            <span className="text-primary-200 print:text-gray-700">{item.label}</span>
            <span className="font-bold text-primary-50 print:text-black">{item.value}%</span>
          </div>
        ))}
      </div>
      
      <div className="p-4 glass-card rounded-xl print:border print:border-gray-300">
        <h4 className="font-semibold text-primary-100 print:text-black mb-3">Recommended Allocation Strategy</h4>
        <p className="text-sm text-primary-300 print:text-gray-700 leading-relaxed">
          Based on your segment profile and launch budget, we recommend focusing {allocation.contentCreation}% on 
          high-quality content creation, {allocation.paidAdvertising}% on targeted advertising, and {allocation.influencerPartnerships}% 
          on strategic influencer partnerships to maximize reach and engagement within your target segment.
        </p>
      </div>
    </div>
  )
}