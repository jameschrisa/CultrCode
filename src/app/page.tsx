'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Target, Sparkles, ChevronLeft, Menu, X, Zap, Users, TrendingUp, ArrowRight, Brain, MapPin, Cpu } from 'lucide-react'
import { FaRobot, FaChartLine, FaMapMarkedAlt, FaReddit, FaTiktok, FaYoutube, FaDiscord } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { RiAiGenerate, RiBrainFill } from 'react-icons/ri'
import { Button } from '@/components/ui/HeroButton'
import { SegmentFinder } from '@/components/SegmentFinder'
import { SegmentResults } from '@/components/SegmentResults'
import { OptimizedImage, ImagePresets } from '@/components/ui/OptimizedImage'
import { SimpleImage } from '@/components/ui/SimpleImage'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getImageWithAttribution } from '@/lib/imageConfig'
import { SegmentMatch, UserInputs } from '@/types/segments'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { 
  pageVariants, 
  glassCardVariants, 
  buttonVariants, 
  floatingVariants,
  containerVariants,
  itemVariants,
  glassMorphismVariants,
  viewportVariants,
  transitions,
  iconVariants
} from '@/lib/animations'

export default function Home() {
  const [currentView, setCurrentView] = useState<'hero' | 'finder' | 'results'>('hero')
  const [segmentMatches, setSegmentMatches] = useState<SegmentMatch[]>([])
  const [userInputs, setUserInputs] = useState<UserInputs | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, canAccessPremium, isLoading } = useAuth()
  const router = useRouter()

  // Handle URL parameters and premium user redirection
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // Check if user should go directly to finder (after registration/login)
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.get('finder') === 'true') {
          setCurrentView('finder')
          // Clear the parameter from URL
          const newUrl = window.location.pathname
          window.history.replaceState({}, '', newUrl)
          return
        }
      }

      // Check if premium user wants to stay on main page (via logo click)
      const stayOnMain = typeof window !== 'undefined' && 
                        sessionStorage.getItem('stay_on_main') === 'true'
      
      if (canAccessPremium() && !stayOnMain) {
        router.push('/dashboard')
      } else if (stayOnMain) {
        // Clear the stay flag after using it
        sessionStorage.removeItem('stay_on_main')
      }
    }
  }, [isAuthenticated, canAccessPremium, isLoading, router])

  const handleStartFinder = () => {
    if (!isAuthenticated) {
      // Redirect to registration page for non-authenticated users
      router.push('/register?redirect=segmentation')
    } else {
      setCurrentView('finder')
    }
  }

  const handleResults = (matches: SegmentMatch[], inputs: UserInputs) => {
    setSegmentMatches(matches)
    setUserInputs(inputs)
    setCurrentView('results')
  }

  const handleBack = () => {
    if (currentView === 'results') {
      setCurrentView('finder')
    } else if (currentView === 'finder') {
      setCurrentView('hero')
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="floating-orb w-48 h-48 bg-brand-500/20 bottom-1/3 -right-10"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
      </div>

      <Header showBackButton={currentView !== 'hero'} onBack={handleBack} />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {/* Hero Section */}
          {currentView === 'hero' && (
            <motion.section
              key="hero"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="min-h-screen flex items-center justify-center px-4 py-12 lg:py-20"
            >
              <div className="max-w-7xl mx-auto space-y-12">
                {/* Hero Content - Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="space-y-8 text-center lg:text-left"
                  >
                    <motion.div 
                      variants={glassMorphismVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20"
                    >
                      <motion.div variants={iconVariants}>
                        <HiSparkles className="w-5 h-5 mr-2" />
                      </motion.div>
                      Complete Creator Intelligence Suite
                    </motion.div>
                    
                    <motion.h1 
                      variants={itemVariants}
                      className="text-4xl lg:text-6xl xl:text-7xl font-black text-primary-50 leading-[0.9] tracking-tight"
                    >
                      Creator Brand
                      <motion.span 
                        variants={itemVariants}
                        className="gradient-text block"
                      >
                        Intelligence Suite
                      </motion.span>
                      <motion.span 
                        variants={itemVariants}
                        className="text-primary-300 text-2xl lg:text-3xl xl:text-4xl font-medium block mt-4"
                      >
                        5 Tools. One Platform. Unstoppable Growth.
                      </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                      variants={itemVariants}
                      className="text-lg lg:text-xl xl:text-2xl text-primary-300 leading-relaxed font-light"
                    >
                      Everything creator brands need to dominate their niche: AI audience segmentation, trend intelligence, 
                      micro-community discovery, geographic targeting, and AI-generated personas—all in one platform.
                    </motion.p>

                    <motion.div 
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
                    >
                      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <Button
                          size="xl"
                          onClick={handleStartFinder}
                          className="text-lg px-12 py-4 shadow-2xl hover:shadow-accent-500/50 relative group glass-button"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                          <div className="relative flex items-center">
                            <HiSparkles className="w-5 h-5 mr-3" />
                            Start Free Discovery
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Button>
                      </motion.div>
                      
                      <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-primary-400 pt-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                          <span>5 Creator Tools</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                          <span>Free to Start</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Hero Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative lg:ml-8"
                  >
                    <div className="relative">
                      <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
                        <Image
                          src="/images/hero.png"
                          alt="Professional woman working on laptop with confidence"
                          width={800}
                          height={600}
                          priority
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 to-brand-500/10 rounded-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-500/20 rounded-full blur-lg" />
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                  {[
                    { icon: Target, value: "5", label: "Creator Tools", color: "accent" },
                    { icon: HiSparkles, value: "100+", label: "Micro-Communities", color: "brand" },
                    { icon: TrendingUp, value: "1000+", label: "Creator Brands Served", color: "success" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="glass-card p-6 rounded-2xl group hover:border-accent-500/30 transition-all duration-500"
                      variants={glassCardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      whileTap="tap"
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <motion.div 
                          className={`p-3 rounded-xl bg-${stat.color}-500/20 group-hover:bg-${stat.color}-500/30 transition-colors`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                        </motion.div>
                        <div className="text-3xl font-bold text-primary-50">{stat.value}</div>
                        <div className="text-sm text-primary-400 font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Media Platforms Section */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-16 text-center"
                >
                  <div className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 backdrop-blur-xl rounded-3xl p-8 border border-primary-700/30">
                    <h3 className="text-xl font-semibold text-primary-100 mb-3">
                      We Monitor Emerging Trends Across
                    </h3>
                    <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
                      Our AI continuously analyzes these platforms to identify microcommunities, create psychographic personas, and spot trending opportunities before they go mainstream.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        {
                          name: 'Reddit',
                          icon: <FaReddit className="w-8 h-8" />,
                          description: 'Deep community insights',
                          color: 'text-orange-400',
                          bgColor: 'bg-orange-500/10 border-orange-500/20'
                        },
                        {
                          name: 'TikTok',
                          icon: <FaTiktok className="w-8 h-8" />,
                          description: 'Viral trend detection',
                          color: 'text-pink-400',
                          bgColor: 'bg-pink-500/10 border-pink-500/20'
                        },
                        {
                          name: 'YouTube',
                          icon: <FaYoutube className="w-8 h-8" />,
                          description: 'Long-form content analysis',
                          color: 'text-red-400',
                          bgColor: 'bg-red-500/10 border-red-500/20'
                        },
                        {
                          name: 'Discord',
                          icon: <FaDiscord className="w-8 h-8" />,
                          description: 'Niche community tracking',
                          color: 'text-indigo-400',
                          bgColor: 'bg-indigo-500/10 border-indigo-500/20'
                        }
                      ].map((platform, index) => (
                        <motion.div
                          key={platform.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className={`${platform.bgColor} border rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                        >
                          <div className={`${platform.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                            {platform.icon}
                          </div>
                          <h4 className="font-bold text-primary-100 mb-2">{platform.name}</h4>
                          <p className="text-sm text-primary-400 leading-relaxed">{platform.description}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-primary-400">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-accent-400" />
                        <span>Real-time trend monitoring</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-accent-400" />
                        <span>225+ microcommunities tracked</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-accent-400" />
                        <span>AI-generated personas</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Creator Solutions Section */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="mt-20 space-y-12"
                >
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-4">
                      5 Essential <span className="gradient-text">Creator Solutions</span>
                    </h2>
                    <p className="text-xl text-primary-300 max-w-3xl mx-auto mb-8">
                      Everything you need to understand your audience, spot trends, and dominate your niche
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        name: "AI Audience Segmentation",
                        badge: "Free",
                        description: "Discover your perfect customer segments with 95% accuracy using our creator-specific framework",
                        tags: ["Free Forever", "48 Segments", "Instant Results"],
                        gradient: "from-success-500/20 to-emerald-500/20",
                        icon: "🎯",
                        href: "/solutions/segmentation"
                      },
                      {
                        name: "Cultural Trend Intelligence",
                        badge: "Premium",
                        description: "Spot emerging trends 6-12 months before they go viral with real-time cultural monitoring",
                        tags: ["50+ Categories", "90% Accuracy", "Early Detection"],
                        gradient: "from-purple-500/20 to-pink-500/20",
                        icon: "📈",
                        href: "/solutions/trends"
                      },
                      {
                        name: "Micro-Community Discovery",
                        badge: "Premium",
                        description: "Explore 100+ emerging communities from aesthetic movements to lifestyle tribes",
                        tags: ["100+ Communities", "Cultural Intel", "Real-time Growth"],
                        gradient: "from-blue-500/20 to-cyan-500/20",
                        icon: "✨",
                        href: "/solutions/communities"
                      },
                      {
                        name: "Generated Personas Dashboard",
                        badge: "Premium",
                        description: "Create AI-powered psychographic personas using segmentation data and behavioral insights",
                        tags: ["1K-10K Followers", "API Integration", "Brand Alignment"],
                        gradient: "from-rose-500/20 to-red-500/20",
                        icon: "👥",
                        href: "/solutions/personas"
                      },
                      {
                        name: "Hyperlocal Intelligence",
                        badge: "Q3 2025",
                        description: "ZIP code precision geographic targeting with demographic overlays and market analysis",
                        tags: ["2,847+ ZIP codes", "GIS Integration", "Coming Soon"],
                        gradient: "from-amber-500/20 to-orange-500/20",
                        icon: "📍",
                        href: "/solutions/hyperlocal"
                      }
                    ].map((solution, index) => (
                      <Link key={index} href={solution.href}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="glass-card p-6 rounded-2xl group hover:border-accent-500/30 transition-all duration-300 relative overflow-hidden cursor-pointer"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          <div className="relative z-10 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-3xl">{solution.icon}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                solution.badge === 'Free' ? 'bg-success-500/20 text-success-400' :
                                solution.badge === 'Premium' ? 'bg-accent-500/20 text-accent-400' :
                                'bg-orange-500/20 text-orange-400'
                              }`}>
                                {solution.badge}
                              </span>
                            </div>
                            <h3 className="font-bold text-primary-50 text-xl group-hover:text-white transition-colors">
                              {solution.name}
                            </h3>
                            <p className="text-sm text-primary-300 leading-relaxed group-hover:text-primary-200 transition-colors">
                              {solution.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {solution.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-primary-700/50 text-primary-300 rounded-md text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-12"
                      onClick={() => window.location.href = '/solutions'}
                    >
                      <HiSparkles className="w-5 h-5 mr-2" />
                      View All Solutions
                    </Button>
                    <p className="text-sm text-primary-400 mt-4">
                      Start with free audience segmentation, upgrade for the full creator intelligence suite
                    </p>
                  </div>
                </motion.div>

                {/* Why Creator Brands Choose CultrCode */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="mt-20 space-y-12"
                >
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-4">
                      Why Creator Brands <span className="gradient-text">Choose CultrCode</span>
                    </h2>
                    <p className="text-xl text-primary-300 max-w-3xl mx-auto mb-12">
                      The only platform built specifically for creator economy dynamics and emerging brand challenges
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Target,
                      title: 'Creator-Specific Intelligence',
                      description: 'Unlike generic marketing tools, our AI understands creator economy dynamics, emerging communities, and authentic brand positioning.',
                      gradient: 'from-accent-500/20 to-accent-600/20'
                    },
                    {
                      icon: HiSparkles,
                      title: 'Complete Solution Suite',
                      description: 'Everything you need in one platform: audience discovery, trend intelligence, community insights, geographic data, and AI-generated personas.',
                      gradient: 'from-brand-500/20 to-brand-600/20'
                    },
                    {
                      icon: TrendingUp,
                      title: 'Early Advantage Access',
                      description: 'Spot trends 6-12 months early, discover untapped communities, and position your brand ahead of the competition.',
                      gradient: 'from-success-500/20 to-success-600/20'
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="glass-card p-8 rounded-3xl hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 space-y-4">
                        <div className="text-accent-400 mb-4">
                          <feature.icon className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-primary-50 text-xl group-hover:text-white transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-primary-300 leading-relaxed group-hover:text-primary-200 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  </div>
                </motion.div>

                {/* Creator Teams Using CultrCode */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="mt-20 space-y-12"
                >
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-4">
                      Meet the Creator Teams <span className="gradient-text">Building the Future</span>
                    </h2>
                    <p className="text-xl text-primary-300 max-w-3xl mx-auto mb-12">
                      From solo creators to enterprise teams, see who&apos;s using CultrCode to dominate their niche and scale their brands
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        image: "/images/group 1.png",
                        title: "Content Creator Collectives",
                        caption: "Multi-creator teams using AI segmentation to identify shared audience overlaps and cross-promotional opportunities across platforms.",
                        highlight: "15+ creator collectives"
                      },
                      {
                        image: "/images/group 2.png", 
                        title: "Brand Strategy Teams",
                        caption: "Marketing teams leveraging trend intelligence and community insights to position creator brands ahead of cultural shifts.",
                        highlight: "300+ brand strategists"
                      },
                      {
                        image: "/images/group 3.png",
                        title: "Creative Studio Partners",
                        caption: "Production teams and creative agencies using hyperlocal data to create regionally-targeted content that resonates deeply.",
                        highlight: "50+ creative studios"
                      },
                      {
                        image: "/images/group 4.png",
                        title: "Growth-Focused Entrepreneurs",
                        caption: "Solo creators and small teams using the complete suite to validate ideas, spot trends, and scale systematically.",
                        highlight: "500+ entrepreneurs"
                      },
                      {
                        image: "/images/group 5.png",
                        title: "Community-Driven Brands",
                        caption: "Teams building authentic communities using micro-community discovery to find their tribe and create meaningful connections.",
                        highlight: "200+ community brands"
                      },
                      {
                        image: "/images/group 6.png",
                        title: "Data-Driven Creators",
                        caption: "Analytics-focused creators combining persona generation with segmentation data to optimize content strategy and conversion rates.",
                        highlight: "100+ data creators"
                      }
                    ].map((group, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="glass-card rounded-2xl overflow-hidden group hover:border-accent-500/30 transition-all duration-300 relative"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={group.image}
                            alt={group.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-medium backdrop-blur-sm">
                              {group.highlight}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-3">
                          <h3 className="font-bold text-xl text-primary-50 group-hover:text-accent-300 transition-colors">
                            {group.title}
                          </h3>
                          <p className="text-primary-300 leading-relaxed text-sm">
                            {group.caption}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <div className="inline-flex items-center space-x-8 text-sm text-primary-400">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-success-400 rounded-full mr-2" />
                        <span>1,165+ Active Teams</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-2" />
                        <span>Growing 47% Monthly</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-400 rounded-full mr-2" />
                        <span>All Creator Sizes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Success Stories */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className="mt-24"
                >
                  <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-50 mb-4">
                      Trusted by 1,000+ Creator Brands
                    </h2>
                    <p className="text-xl text-primary-300 max-w-3xl mx-auto">
                      See how our complete creator intelligence suite has driven real growth for emerging brands.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Sarah Chen",
                        role: "Beauty Brand Founder",
                        content: "CultrCode&apos; segmentation tool identified our perfect customer base, then trend intelligence helped us spot the clean beauty wave early. Game changer.",
                        imageKey: "testimonials.sarah",
                        metric: "$250K ARR"
                      },
                      {
                        name: "Marcus Rodriguez", 
                        role: "Wellness Tech Creator",
                        content: "The complete suite is incredible—from audience discovery to micro-community insights to geographic targeting. Everything we needed in one place.",
                        imageKey: "testimonials.marcus",
                        metric: "5x Growth"
                      },
                      {
                        name: "Emma Johnson",
                        role: "Sustainable Fashion CEO", 
                        content: "Used 4 of their tools to launch in new markets. The hyperlocal data + community insights combination is unbeatable for creator brands.",
                        imageKey: "testimonials.emma",
                        metric: "400% ROI"
                      }
                    ].map((story, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                        className="glass-card p-6 rounded-2xl group hover:border-accent-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 rounded-full ring-2 ring-accent-500/20 overflow-hidden flex-shrink-0">
                            <Image
                              src={`/images/${story.imageKey.split('.')[1]}.png`}
                              alt={`${story.name} testimonial photo`}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-primary-50">{story.name}</div>
                            <div className="text-sm text-primary-400">{story.role}</div>
                            <div className="text-sm font-bold text-accent-400">{story.metric}</div>
                          </div>
                        </div>
                        <p className="text-primary-200 italic leading-relaxed">
                          &ldquo;{story.content}&rdquo;
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="text-center mt-16">
                    <Button
                      size="lg"
                      onClick={handleStartFinder}
                      className="px-12 shadow-xl hover:shadow-accent-500/30 transition-all duration-300"
                    >
                      <HiSparkles className="w-5 h-5 mr-2" />
                      Start Free Discovery
                    </Button>
                    <p className="text-sm text-primary-400 mt-4">
                      Join 1,000+ successful creator brands • Start free, upgrade as you grow
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Segment Finder */}
          {currentView === 'finder' && (
            <motion.section
              key="finder"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-screen flex items-center justify-center px-4 py-12"
            >
              <SegmentFinder onResults={handleResults} />
            </motion.section>
          )}

          {/* Results */}
          {currentView === 'results' && (
            <motion.section
              key="results"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-screen px-4 py-12"
            >
              <SegmentResults 
                matches={segmentMatches}
                userInputs={userInputs || undefined}
                onSegmentSelect={(match) => {
                  console.log('Selected segment:', match)
                }}
              />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}