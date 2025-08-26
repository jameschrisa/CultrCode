'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Users, Globe, CheckCircle, Clock, ChevronDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TrendHunterCard } from '@/components/TrendHunterCard'
import { trendHunters, industryNames, countries } from '@/data/trendHunters'
import { TrendHunter, Industry, TrendHunterFilters } from '@/types/trendHunters'

interface TrendHuntersRegistryProps {
  className?: string
}

export function TrendHuntersRegistry({ className }: TrendHuntersRegistryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<TrendHunterFilters>({})
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'experience' | 'followers' | 'recent'>('name')

  // Filter and search logic
  const filteredHunters = useMemo(() => {
    let filtered = trendHunters.filter(hunter => {
      const matchesSearch = searchTerm === '' || 
        hunter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hunter.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hunter.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hunter.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesIndustry = !filters.industry || hunter.focusArea === filters.industry
      const matchesCountry = !filters.country || hunter.country === filters.country
      const matchesVerification = !filters.verificationStatus || hunter.verificationStatus === filters.verificationStatus

      return matchesSearch && matchesIndustry && matchesCountry && matchesVerification
    })

    // Sort results
    switch (sortBy) {
      case 'experience':
        filtered.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
        break
      case 'followers':
        filtered.sort((a, b) => (b.followersCount || 0) - (a.followersCount || 0))
        break
      case 'recent':
        filtered.sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime())
        break
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [searchTerm, filters, sortBy])

  const clearFilters = () => {
    setFilters({})
    setSearchTerm('')
  }

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-50 mb-4">
          Global Trend Hunters Registry
        </h2>
        <p className="text-lg text-primary-300 max-w-3xl mx-auto">
          Connect with verified trend hunters and thought leaders from around the world. 
          Access exclusive insights from industry experts across fashion, technology, health, and more.
        </p>
        
        <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-primary-400">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{trendHunters.length} Experts</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>{new Set(trendHunters.map(h => h.country)).size} Countries</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>{trendHunters.filter(h => h.verificationStatus === 'verified').length} Verified</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
              <input
                type="text"
                placeholder="Search by name, industry, country, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-accent-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </Button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
            >
              <option value="name">Sort by Name</option>
              <option value="experience">Sort by Experience</option>
              <option value="followers">Sort by Followers</option>
              <option value="recent">Sort by Recent</option>
            </select>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-primary-600"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Industry Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Industry</label>
                    <select
                      value={filters.industry || ''}
                      onChange={(e) => setFilters(prev => ({ ...prev, industry: e.target.value as Industry || undefined }))}
                      className="w-full px-3 py-2 bg-primary-800/50 border border-primary-600 rounded text-primary-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
                    >
                      <option value="">All Industries</option>
                      {Object.entries(industryNames).map(([key, name]) => (
                        <option key={key} value={key}>{name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Country Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Country</label>
                    <select
                      value={filters.country || ''}
                      onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value || undefined }))}
                      className="w-full px-3 py-2 bg-primary-800/50 border border-primary-600 rounded text-primary-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
                    >
                      <option value="">All Countries</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  {/* Verification Filter */}
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Status</label>
                    <select
                      value={filters.verificationStatus || ''}
                      onChange={(e) => setFilters(prev => ({ ...prev, verificationStatus: e.target.value as any || undefined }))}
                      className="w-full px-3 py-2 bg-primary-800/50 border border-primary-600 rounded text-primary-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
                    >
                      <option value="">All Status</option>
                      <option value="verified">Verified</option>
                      <option value="pending">Pending</option>
                      <option value="unverified">Unverified</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="ghost" onClick={clearFilters} className="text-sm">
                    Clear All Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-primary-400 text-sm">
          Showing {filteredHunters.length} of {trendHunters.length} trend hunters
        </p>
      </div>

      {/* Trend Hunters Grid */}
      {filteredHunters.length === 0 ? (
        <Card className="glass-card">
          <CardContent className="p-12 text-center">
            <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary-200 mb-2">No trend hunters found</h3>
            <p className="text-primary-400 mb-4">
              Try adjusting your search or filter criteria to find more results.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredHunters.map((hunter, index) => (
            <motion.div
              key={hunter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TrendHunterCard trendHunter={hunter} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}