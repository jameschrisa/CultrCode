'use client'

import { motion } from 'framer-motion'
import { User, Crown, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'

const testUsers = [
  {
    type: 'Free User',
    email: 'user@launchlens.com',
    password: 'user123',
    name: 'Test User',
    tier: 'free',
    icon: User,
    features: [
      'Basic segment matching',
      'Top 3 customer segments',
      'High-level insights',
      'No saved reports',
      'No premium features'
    ],
    color: 'text-primary-400'
  },
  {
    type: 'Standard User',
    email: 'standard@launchlens.com',
    password: 'standard123',
    name: 'Sarah Johnson',
    tier: 'standard',
    icon: Zap,
    features: [
      'Everything in Free',
      'Detailed customer personas',
      'ZIP code analysis',
      '15-page launch strategy report',
      'PDF export ready',
      '1 saved report limit',
      'Redirects to Advanced Analysis form'
    ],
    color: 'text-accent-400'
  },
  {
    type: 'Premium User (Pro)',
    email: 'premium@launchlens.com',
    password: 'premium123',
    name: 'Marcus Chen',
    tier: 'pro',
    icon: Crown,
    features: [
      'Everything in Standard',
      'Advanced AI predictions',
      'Competitor deep-dive analysis',
      'Budget optimization framework',
      'Monthly strategy updates',
      'Priority support',
      'Unlimited saved reports',
      'Redirects to Dashboard on login'
    ],
    color: 'text-accent-400'
  },
  {
    type: 'Admin User',
    email: 'admin@launchlens.com',
    password: 'admin123',
    name: 'Admin User',
    tier: 'enterprise',
    icon: Shield,
    features: [
      'Everything in Pro',
      'Admin access',
      'User management',
      'Analytics dashboard',
      'System configuration',
      'All premium features',
      'Unlimited everything'
    ],
    color: 'text-success-400'
  }
]

export default function TestUsers() {
  const copyCredentials = (email: string, password: string) => {
    navigator.clipboard.writeText(`Email: ${email}\nPassword: ${password}`)
    alert('Credentials copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-50 mb-4">
            Test User Accounts
          </h1>
          <p className="text-primary-300 text-lg max-w-3xl mx-auto">
            Use these test accounts to experience different subscription tiers and their features. 
            Each account demonstrates role-based access controls and usage limits.
          </p>
        </motion.div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testUsers.map((user, index) => (
            <motion.div
              key={user.email}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl text-primary-50 flex items-center">
                      <user.icon className={`w-6 h-6 mr-3 ${user.color}`} />
                      {user.type}
                    </CardTitle>
                    <div className={`px-3 py-1 rounded-lg text-xs font-medium bg-${user.tier === 'free' ? 'primary' : user.tier === 'standard' ? 'blue' : user.tier === 'pro' ? 'accent' : 'success'}-500/20 text-${user.tier === 'free' ? 'primary' : user.tier === 'standard' ? 'blue' : user.tier === 'pro' ? 'accent' : 'success'}-400`}>
                      {user.tier.charAt(0).toUpperCase() + user.tier.slice(1)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-primary-200 font-medium">{user.name}</div>
                    <div className="text-sm text-primary-400 font-mono bg-primary-800/50 p-2 rounded">
                      {user.email}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-200 mb-3">Features & Limits</h4>
                    <ul className="space-y-2 text-sm">
                      {user.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-primary-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => copyCredentials(user.email, user.password)}
                    >
                      Copy Login Credentials
                    </Button>
                    
                    <div className="text-xs text-primary-400 text-center">
                      Password: <span className="font-mono">{user.password}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="border-0 bg-gradient-to-br from-accent-500/10 to-brand-500/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-50 mb-4">Testing Instructions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary-200 mb-3">Standard User Testing</h4>
                  <ul className="space-y-2 text-sm text-primary-300">
                    <li>• Can generate 1 comprehensive report</li>
                    <li>• Can save only 1 report (enforced)</li>
                    <li>• Gets redirected to Advanced Analysis form on login</li>
                    <li>• Has access to ZIP code analysis</li>
                    <li>• Can export reports to PDF</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-200 mb-3">Premium User Testing</h4>
                  <ul className="space-y-2 text-sm text-primary-300">
                    <li>• All standard features included</li>
                    <li>• Unlimited report generation & saves</li>
                    <li>• Access to advanced features</li>
                    <li>• No upgrade prompts shown</li>
                    <li>• Premium dashboard experience</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <p className="text-sm text-accent-300">
                  <strong>Login Redirects:</strong> Premium users (Pro/Enterprise) → Dashboard | Standard users → Advanced Analysis form | Free users → Homepage for onboarding.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}