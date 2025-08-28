'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Globe, Clock, ExternalLink, Users, BookOpen, TrendingUp, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuth, useUser } from '@clerk/nextjs'
import { getSubscriptionAccess } from '@/lib/subscription'

interface TrendBlog {
  id: string
  title: string
  description: string
  author: string
  authorAvatar?: string
  authorInitials: string
  category: string
  tags: string[]
  url: string
  publishedDate: string
  readTime: number
  subscribers: number
  engagement: 'High' | 'Medium' | 'Low'
  featured: boolean
  recentPosts: {
    title: string
    date: string
  }[]
}

const trendBlogs: TrendBlog[] = [
  {
    id: 'blog-001',
    title: 'CulturScope Insights',
    description: 'Deep-dive analysis into emerging aesthetic movements and their cultural impact on consumer behavior.',
    author: 'Sofia Chen',
    authorInitials: 'SC',
    category: 'Fashion & Culture',
    tags: ['Aesthetic Trends', 'Fashion Forecasting', 'Cultural Analysis', 'Consumer Psychology'],
    url: 'https://culturscope.blog',
    publishedDate: '2023-01-15',
    readTime: 8,
    subscribers: 45000,
    engagement: 'High',
    featured: true,
    recentPosts: [
      { title: 'The Rise of Solarpunk Fashion: Beyond Sustainability', date: '2024-08-20' },
      { title: 'Quiet Luxury vs. Loud Minimalism: A Cultural Shift', date: '2024-08-15' },
      { title: 'Gen-Alpha Aesthetic: What\'s Coming Next', date: '2024-08-10' }
    ]
  },
  {
    id: 'blog-002',
    title: 'TechCulture Weekly',
    description: 'Newsletter covering the intersection of technology adoption and cultural movements in emerging markets.',
    author: 'Marcus Rodriguez',
    authorInitials: 'MR',
    category: 'Technology & Society',
    tags: ['Tech Adoption', 'Digital Culture', 'Fintech Trends', 'Latin America'],
    url: 'https://techcultureweekly.com',
    publishedDate: '2021-11-20',
    readTime: 12,
    subscribers: 67000,
    engagement: 'High',
    featured: true,
    recentPosts: [
      { title: 'Voice Commerce in Mexico: The Next Frontier', date: '2024-08-22' },
      { title: 'Decentralized Social Networks: Early Adopters Speak', date: '2024-08-18' },
      { title: 'AI Companions: Cultural Acceptance Patterns', date: '2024-08-12' }
    ]
  },
  {
    id: 'blog-003',
    title: 'Wellness Waves',
    description: 'Tracking the evolution of health and wellness trends with focus on mental health and traditional medicine integration.',
    author: 'Dr. Amara Okafor',
    authorInitials: 'AO',
    category: 'Health & Wellness',
    tags: ['Digital Health', 'Mental Wellness', 'Traditional Medicine', 'Biohacking'],
    url: 'https://wellnesswaves.health',
    publishedDate: '2022-01-10',
    readTime: 10,
    subscribers: 23000,
    engagement: 'Medium',
    featured: false,
    recentPosts: [
      { title: 'Personalized Nutrition: The AI Revolution', date: '2024-08-19' },
      { title: 'Mental Health Tech: What Actually Works', date: '2024-08-14' },
      { title: 'Biohacking Goes Mainstream: A Clinical Perspective', date: '2024-08-08' }
    ]
  },
  {
    id: 'blog-004',
    title: 'Sustainable Futures',
    description: 'Circular economy insights and eco-innovation trends from a Nordic perspective, focusing on regenerative business models.',
    author: 'Emma Larsson',
    authorInitials: 'EL',
    category: 'Sustainability',
    tags: ['Circular Economy', 'Climate Tech', 'Sustainable Packaging', 'Regenerative Business'],
    url: 'https://sustainablefutures.se',
    publishedDate: '2022-06-05',
    readTime: 9,
    subscribers: 31000,
    engagement: 'High',
    featured: true,
    recentPosts: [
      { title: 'Carbon Negative Products: The New Standard', date: '2024-08-21' },
      { title: 'Regenerative Materials: Beyond Recycling', date: '2024-08-16' },
      { title: 'Climate Positive Brands: Case Studies', date: '2024-08-11' }
    ]
  },
  {
    id: 'blog-005',
    title: 'Electronic Trends Japan',
    description: 'Consumer electronics innovation tracking with insider insights from Japan\'s tech industry.',
    author: 'Hiroshi Tanaka',
    authorInitials: 'HT',
    category: 'Consumer Electronics',
    tags: ['Wearable Tech', 'Smart Appliances', 'Gaming Hardware', 'Mobile Innovation'],
    url: 'https://electronictrends.jp',
    publishedDate: '2021-09-12',
    readTime: 15,
    subscribers: 89000,
    engagement: 'High',
    featured: true,
    recentPosts: [
      { title: 'Foldable Everything: The Next Wave', date: '2024-08-23' },
      { title: 'Haptic Feedback Revolution in Gaming', date: '2024-08-17' },
      { title: 'Energy Harvesting: Goodbye Batteries?', date: '2024-08-13' }
    ]
  },
  {
    id: 'blog-006',
    title: 'Food Futurist',
    description: 'Culinary trend research and food innovation insights covering plant-based evolution and cultural cuisine fusion.',
    author: 'Isabella Martinez',
    authorInitials: 'IM',
    category: 'Food & Beverage',
    tags: ['Plant-Based Innovation', 'Food Tech', 'Cultural Fusion', 'Functional Foods'],
    url: 'https://foodfuturist.es',
    publishedDate: '2022-02-28',
    readTime: 7,
    subscribers: 52000,
    engagement: 'Medium',
    featured: false,
    recentPosts: [
      { title: 'Fermented Everything: The Gut Health Revolution', date: '2024-08-20' },
      { title: 'Insect Protein Goes Mainstream in Europe', date: '2024-08-15' },
      { title: 'Hyperlocal Ingredients: Restaurant Revolution', date: '2024-08-09' }
    ]
  }
]

const categories = ['All', 'Fashion & Culture', 'Technology & Society', 'Health & Wellness', 'Sustainability', 'Consumer Electronics', 'Food & Beverage']

function TrendBlogsContent() {
  const { user } = useUser()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<'featured' | 'subscribers' | 'recent'>('featured')
  
  // Get subscription access information
  const subscriptionAccess = user ? getSubscriptionAccess(user) : null

  // Filter and search logic
  const filteredBlogs = useMemo(() => {
    let filtered = trendBlogs.filter(blog => {
      const matchesSearch = searchTerm === '' || 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort results
    switch (sortBy) {
      case 'subscribers':
        filtered.sort((a, b) => b.subscribers - a.subscribers)
        break
      case 'recent':
        filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const formatSubscribers = (count: number) => {
    if (count >= 1000) return `${(count / 1000).toFixed(0)}K`
    return count.toString()
  }

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case 'High': return 'text-green-400 bg-green-500/20'
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'Low': return 'text-red-400 bg-red-500/20'
      default: return 'text-primary-400 bg-primary-500/20'
    }
  }

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 glass-card text-accent-300 rounded-full text-sm font-semibold border border-accent-500/20 mb-6">
            <BookOpen className="w-5 h-5 mr-2" />
            Curated Trend Intelligence
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-primary-50 leading-tight mb-6">
            Trend Hunters
            <span className="gradient-text block">Blog Directory</span>
          </h1>
          
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover expert blogs, newsletters, and publications from the world's leading cultural analysts and trend forecasters.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-primary-400">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{trendBlogs.length} Expert Blogs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>{categories.length - 1} Categories</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>{trendBlogs.filter(b => b.featured).length} Featured</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
                  <input
                    type="text"
                    placeholder="Search blogs, authors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
                >
                  <option value="featured">Featured First</option>
                  <option value="subscribers">Most Subscribers</option>
                  <option value="recent">Recently Started</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-primary-400 text-sm">
            Showing {filteredBlogs.length} of {trendBlogs.length} trend blogs
          </p>
        </div>

        {/* Blog Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className={`glass-card h-full hover:bg-white/10 transition-all duration-300 ${blog.featured ? 'border-accent-500/30' : ''}`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                        {blog.authorInitials}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-50 text-lg">{blog.title}</h3>
                        <p className="text-sm text-primary-400">by {blog.author}</p>
                      </div>
                    </div>
                    {blog.featured && (
                      <div className="px-2 py-1 bg-accent-500/20 text-accent-400 rounded text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-primary-300 text-sm mb-4 leading-relaxed">
                    {blog.description}
                  </p>

                  {/* Category & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-700/50 text-primary-200 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(blog.engagement)}`}>
                      {blog.engagement} Engagement
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-800/50 text-primary-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="px-2 py-1 bg-primary-800/30 text-primary-400 rounded text-xs">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-primary-400 mb-2">Recent Posts</h4>
                    <div className="space-y-1">
                      {blog.recentPosts.slice(0, 2).map((post, postIndex) => (
                        <div key={postIndex} className="text-xs text-primary-200">
                          <div className="truncate">{post.title}</div>
                          <div className="text-primary-500">{new Date(post.date).toLocaleDateString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary-700/30">
                    <div className="flex items-center space-x-4 text-xs text-primary-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{formatSubscribers(blog.subscribers)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime} min read</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(blog.url, '_blank')}
                      className="text-xs hover:border-accent-400 hover:text-accent-300 hover:bg-accent-500/10 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-200 mb-2">No blogs found</h3>
              <p className="text-primary-400 mb-4">
                Try adjusting your search or filter criteria to find more results.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default function TrendBlogsPage() {
  return (
    <ProtectedRoute>
      <TrendBlogsContent />
    </ProtectedRoute>
  )
}