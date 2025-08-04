'use client'

import { motion } from 'framer-motion'
import { Target, Users, Brain, Sparkles, TrendingUp, Globe, Award, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ProfileAvatar } from '@/components/ui/ProfileAvatar'

export default function AboutPage() {
  const stats = [
    { label: 'Micro-Communities Tracked', value: '500+', icon: Users },
    { label: 'Cultural Trends Analyzed', value: '10K+', icon: TrendingUp },
    { label: 'Creator Brands Served', value: '1,000+', icon: Target },
    { label: 'Accuracy Rate', value: '87%', icon: Award }
  ]

  const values = [
    {
      title: 'Cultural Intelligence First',
      description: 'We believe understanding culture is the key to authentic brand connections. Our AI doesn&apos;t just analyze data—it interprets cultural meaning.',
      icon: Brain
    },
    {
      title: 'Creator Economy Focus',
      description: 'Built specifically for creators, challenger brands, and emerging companies who need to move fast and connect authentically.',
      icon: Sparkles
    },
    {
      title: 'Predictive Over Reactive',
      description: 'While others analyze what happened, we predict what&apos;s coming. Spot trends 2-6 weeks before mainstream adoption.',
      icon: TrendingUp
    },
    {
      title: 'Mobile-First Innovation',
      description: 'Designed for the modern creator workflow. Access cultural intelligence anywhere, make decisions on-the-go.',
      icon: Zap
    }
  ]


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
              About
              <span className="gradient-text block">CultrCode™</span>
            </h1>
            
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re building the world&apos;s first cultural intelligence platform specifically designed for creator brands and challenger startups who need to understand their audience at a deeper level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed">
              To democratize cultural intelligence and give every creator brand the same insights that billion-dollar companies use to predict and shape culture. We believe authentic brands are built on genuine understanding of their communities.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-400 mx-auto mb-4">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-primary-50 mb-2">{stat.value}</div>
                    <div className="text-primary-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              What We Believe
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Our core values shape how we build products and serve our community of creators and challenger brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-accent-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-500/20 rounded-xl text-accent-400 flex-shrink-0">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-50 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-primary-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-primary-900/50 to-primary-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-6">
              Meet the Founder
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              CultrCode was founded by an expert in behavioral economics with deep insights into how subcultures drive commerce.
            </p>
          </motion.div>

          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <ProfileAvatar
                  src="/images/james-christopher-profile.png"
                  alt="James Christopher, Founder & CEO"
                  initials="JC"
                  size="xl"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary-50 mb-2">
                James Christopher
              </h3>
              <div className="text-accent-400 text-lg font-medium mb-6">
                Founder & CEO
              </div>
              <p className="text-primary-300 leading-relaxed text-lg">
                Trained in behavioral economics at the London School of Economics, James has dedicated his career to understanding how subcultures and emerging trends impact commerce. With a unique perspective on cultural intelligence and consumer behavior, he founded CultrCode to democratize access to the cultural insights that drive authentic brand connections and predict market movements before they go mainstream.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-8">
              Our Story
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-primary-300 leading-relaxed mb-6">
                CultrCode was born from a simple observation: creator brands were failing not because they lacked talent, but because they didn&apos;t understand their audience&apos;s cultural context. Traditional market research tools were built for Fortune 500 companies, not for creators who needed to move fast and connect authentically.
              </p>
              
              <p className="text-primary-300 leading-relaxed mb-6">
                Drawing on behavioral economics principles learned at the London School of Economics, founder James Christopher recognized that successful commerce happens at the intersection of culture and psychology. He built CultrCode as the first AI platform that doesn&apos;t just analyze demographics, but truly understands cultural context and subcultural movements.
              </p>
              
              <p className="text-primary-300 leading-relaxed mb-8">
                Today, CultrCode helps over 1,000 creator brands and challenger startups discover their perfect micro-audiences, predict viral trends, and connect with authentic voices before their competitors even know these communities exist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="glass-card bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-brand-500/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-50">
                  Ready to Join Our Community?
                </h2>
                <p className="text-xl text-primary-300 max-w-2xl mx-auto">
                  Discover why 1,000+ creator brands trust CultrCode to understand their audience and predict cultural trends.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/sign-up">
                    <Button size="xl" className="px-12">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Start Free Discovery
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="xl" className="px-12">
                      Contact Our Team
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}