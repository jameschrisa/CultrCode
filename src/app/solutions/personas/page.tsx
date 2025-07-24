'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Brain, Target, Filter, Search, Play, Eye, MessageCircle, Share2, ExternalLink } from 'lucide-react'
import { HiSparkles } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function PersonasPage() {
  const { isAuthenticated, canAccessPremium } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Generated personas data representing AI-created psychographic profiles
  const generatedPersonas = [
    {
      id: 1,
      name: "Eco-Conscious Emma",
      category: "Sustainable Living",
      ageRange: "25-34",
      description: "Environmentally-minded professional who prioritizes sustainability in all purchasing decisions",
      values: ["Environmental protection", "Quality over quantity", "Ethical consumption"],
      personality: ["Conscientious", "Research-oriented", "Community-focused"],
      interests: ["Zero waste lifestyle", "Organic products", "Environmental activism"],
      painPoints: ["Finding truly sustainable brands", "Greenwashing confusion", "Premium pricing barriers"],
      goals: ["Reduce environmental footprint", "Influence others positively", "Live authentically"],
      communication: ["Instagram Stories", "Email newsletters", "Sustainability blogs"],
      buyingMotivations: ["Environmental impact", "Brand transparency", "Product longevity"],
      demographicMatch: "87%",
      psychographicDepth: "95%",
      engagementPotential: "High",
      confidenceScore: 94
    },
    {
      id: 2,
      name: "Tech-Savvy Marcus",
      category: "Digital Innovation",
      ageRange: "28-35",
      description: "Early adopter who values efficiency and cutting-edge technology solutions",
      values: ["Innovation", "Efficiency", "Continuous learning"],
      personality: ["Analytical", "Optimistic", "Forward-thinking"],
      interests: ["AI and automation", "Productivity tools", "Tech reviews"],
      painPoints: ["Information overload", "Analysis paralysis", "Time management"],
      goals: ["Optimize productivity", "Stay ahead of trends", "Professional growth"],
      communication: ["LinkedIn", "Tech podcasts", "YouTube reviews"],
      buyingMotivations: ["Time savings", "Performance improvement", "Future-proofing"],
      demographicMatch: "82%",
      psychographicDepth: "91%",
      engagementPotential: "Very High",
      confidenceScore: 89
    },
    {
      id: 3,
      name: "Wellness-Focused Sage",
      category: "Health & Wellness",
      ageRange: "22-28",
      description: "Holistic wellness enthusiast who seeks balance in all aspects of life",
      values: ["Mental health", "Work-life balance", "Authentic self-care"],
      personality: ["Introspective", "Empathetic", "Mindful"],
      interests: ["Meditation", "Yoga", "Mental health advocacy"],
      painPoints: ["Wellness overwhelm", "Authentic brand identification", "Budget constraints"],
      goals: ["Achieve inner peace", "Help others heal", "Create healthy routines"],
      communication: ["TikTok", "Wellness apps", "Community forums"],
      buyingMotivations: ["Holistic benefits", "Brand values alignment", "Community connection"],
      demographicMatch: "79%",
      psychographicDepth: "88%",
      engagementPotential: "High",
      confidenceScore: 85
    },
    {
      id: 4,
      name: "Creative Catalyst Alex",
      category: "Arts & Design",
      ageRange: "24-32",
      description: "Artistic entrepreneur who values creativity and authentic self-expression",
      values: ["Creative freedom", "Authenticity", "Artistic integrity"],
      personality: ["Creative", "Independent", "Passionate"],
      interests: ["Digital art", "Design trends", "Creative communities"],
      painPoints: ["Creative blocks", "Monetization challenges", "Market saturation"],
      goals: ["Build creative business", "Inspire others", "Maintain artistic vision"],
      communication: ["Instagram", "Pinterest", "Creative newsletters"],
      buyingMotivations: ["Creative inspiration", "Quality tools", "Community support"],
      demographicMatch: "84%",
      psychographicDepth: "92%",
      engagementPotential: "Very High",
      confidenceScore: 91
    },
    {
      id: 5,
      name: "Mindful Parent Maya",
      category: "Family & Lifestyle",
      ageRange: "30-40",
      description: "Conscious parent who prioritizes family wellness and mindful living",
      values: ["Family first", "Mindful parenting", "Quality time"],
      personality: ["Nurturing", "Protective", "Value-driven"],
      interests: ["Child development", "Family activities", "Mindful living"],
      painPoints: ["Time scarcity", "Information overwhelm", "Balance struggles"],
      goals: ["Raise conscious children", "Create family memories", "Model good values"],
      communication: ["Facebook groups", "Parenting blogs", "Email"],
      buyingMotivations: ["Child safety", "Family benefits", "Time efficiency"],
      demographicMatch: "88%",
      psychographicDepth: "89%",
      engagementPotential: "High",
      confidenceScore: 87
    },
    {
      id: 6,
      name: "Ambitious Achiever Carlos",
      category: "Professional Growth",
      ageRange: "26-35",
      description: "Career-focused individual who seeks professional advancement and personal development",
      values: ["Achievement", "Growth mindset", "Professional excellence"],
      personality: ["Ambitious", "Disciplined", "Results-oriented"],
      interests: ["Professional development", "Leadership", "Industry trends"],
      painPoints: ["Work-life balance", "Skill gaps", "Network building"],
      goals: ["Career advancement", "Skill mastery", "Industry recognition"],
      communication: ["LinkedIn", "Professional podcasts", "Industry newsletters"],
      buyingMotivations: ["Career advancement", "Skill development", "Professional image"],
      demographicMatch: "86%",
      psychographicDepth: "93%",
      engagementPotential: "Very High",
      confidenceScore: 92
    }
  ]

  const categories = ['all', 'Sustainable Living', 'Digital Innovation', 'Health & Wellness', 'Arts & Design', 'Family & Lifestyle', 'Professional Growth']
  const ageGroups = ['all', '18-24', '25-34', '35-44', '45-54']

  const filteredPersonas = generatedPersonas.filter(persona => {
    const matchesCategory = selectedCategory === 'all' || persona.category === selectedCategory
    const matchesAge = selectedAgeGroup === 'all' || persona.ageRange.includes(selectedAgeGroup.split('-')[0])
    const matchesSearch = persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.values.some(value => value.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         persona.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesAge && matchesSearch
  })

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

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight">
              Generated
              <span className="gradient-text block">Personas</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              Create AI-powered psychographic personas using your segmentation data and community insights. 
              Understand the values, motivations, and decision-making patterns that drive your ideal customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!canAccessPremium ? (
                <Link href="/register?plan=premium">
                  <Button size="xl" className="px-12">
                    <Star className="w-5 h-5 mr-2" />
                    Unlock Premium Features
                  </Button>
                </Link>
              ) : (
                <Link href="/generate-persona">
                  <Button size="xl" className="px-12">
                    <Brain className="w-5 h-5 mr-2" />
                    Generate New Persona
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="xl" className="px-12">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Deep Customer Understanding
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Go beyond demographics. Our AI analyzes your audience data to create rich psychographic personas 
              that reveal the psychological drivers behind customer behavior.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Psychographic Depth",
                description: "Values, personality traits, interests, and motivations revealed through AI analysis",
                stat: "95% accuracy"
              },
              {
                icon: Target,
                title: "Behavioral Insights",
                description: "Pain points, goals, and decision-making patterns that drive purchasing behavior",
                stat: "7+ data points"
              },
              {
                icon: Users,
                title: "Communication Preferences",
                description: "Preferred channels, messaging styles, and content formats for each persona",
                stat: "Multi-channel"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-50 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-primary-300 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="text-accent-400 font-bold text-sm">
                      {feature.stat}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search personas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="custom-select px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="custom-select px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              >
                {ageGroups.map(age => (
                  <option key={age} value={age}>
                    {age === 'all' ? 'All Ages' : `Age ${age}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-primary-400">
              {filteredPersonas.length} persona{filteredPersonas.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* Personas Grid */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPersonas.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Brain className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary-50 mb-4">
                No personas found
              </h3>
              <p className="text-primary-300 mb-8">
                Try adjusting your search criteria or generate new personas from your audience data.
              </p>
              <Link href="/generate-persona">
                <Button>
                  <Brain className="w-4 h-4 mr-2" />
                  Generate New Personas
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPersonas.map((persona, index) => (
                <motion.div
                  key={persona.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Persona Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-brand-500/20 rounded-full flex items-center justify-center text-accent-400 flex-shrink-0">
                          <Brain className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-primary-50">{persona.name}</h3>
                            <span className="px-2 py-1 bg-success-500/20 text-success-300 rounded text-xs font-medium">
                              {persona.confidenceScore}% match
                            </span>
                          </div>
                          <div className="text-sm text-primary-400 mb-1">{persona.category}</div>
                          <div className="text-xs text-primary-500">Age: {persona.ageRange}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-primary-300 mb-4 leading-relaxed">
                        {persona.description}
                      </p>

                      {/* Key Attributes */}
                      <div className="space-y-3 mb-6">
                        <div>
                          <h4 className="text-xs font-semibold text-primary-200 mb-1">Top Values</h4>
                          <div className="flex flex-wrap gap-1">
                            {persona.values.slice(0, 2).map((value, i) => (
                              <span key={i} className="px-2 py-1 bg-accent-500/10 text-accent-300 rounded text-xs">
                                {value}
                              </span>
                            ))}
                            {persona.values.length > 2 && (
                              <span className="px-2 py-1 bg-primary-700 text-primary-400 rounded text-xs">
                                +{persona.values.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-primary-200 mb-1">Interests</h4>
                          <div className="flex flex-wrap gap-1">
                            {persona.interests.slice(0, 2).map((interest, i) => (
                              <span key={i} className="px-2 py-1 bg-brand-500/10 text-brand-300 rounded text-xs">
                                {interest}
                              </span>
                            ))}
                            {persona.interests.length > 2 && (
                              <span className="px-2 py-1 bg-primary-700 text-primary-400 rounded text-xs">
                                +{persona.interests.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                        <div className="bg-primary-800/30 rounded-lg p-3">
                          <div className="text-lg font-bold text-accent-400">{persona.demographicMatch}</div>
                          <div className="text-xs text-primary-400">Demo Match</div>
                        </div>
                        <div className="bg-primary-800/30 rounded-lg p-3">
                          <div className="text-lg font-bold text-brand-400">{persona.psychographicDepth}</div>
                          <div className="text-xs text-primary-400">Psycho Depth</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-accent-400 hover:text-accent-300 border-accent-400/50 hover:border-accent-400"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-brand-400 hover:text-brand-300 border-brand-400/50 hover:border-brand-400"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <HiSparkles className="w-16 h-16 text-accent-400 mx-auto" />
                
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Ready to Understand Your Customers?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Generate AI-powered personas from your audience data and discover the psychological drivers behind customer behavior.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {!canAccessPremium ? (
                    <Link href="/register?plan=premium">
                      <Button size="xl" className="px-12">
                        <Star className="w-5 h-5 mr-2" />
                        Upgrade to Premium
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/generate-persona">
                      <Button size="xl" className="px-12">
                        <Brain className="w-5 h-5 mr-2" />
                        Generate Your First Persona
                      </Button>
                    </Link>
                  )}
                  <Link href="/contact">
                    <Button variant="outline" size="xl" className="px-12">
                      Schedule Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}