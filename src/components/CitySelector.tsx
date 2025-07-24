'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Users, DollarSign, TrendingUp, X, Filter } from 'lucide-react'
import { TargetCity, NorthAmericanRegion, MarketSize } from '@/types/segments'
import { 
  northAmericanCities, 
  getCitiesByRegion, 
  getCitiesByMarketSize,
  getTopCreatorEconomyCities,
  searchCities,
  regionLabels,
  marketSizeLabels
} from '@/data/cities'
import { cn } from '@/lib/utils'

interface CitySelectorProps {
  selectedCities: TargetCity[]
  onCityToggle: (city: TargetCity) => void
  maxSelections?: number
  className?: string
}

export function CitySelector({ selectedCities, onCityToggle, maxSelections = 5, className }: CitySelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<NorthAmericanRegion | 'all'>('all')
  const [selectedMarketSize, setSelectedMarketSize] = useState<MarketSize | 'all'>('all')
  const [showSuggestions, setShowSuggestions] = useState(true)

  const filteredCities = useMemo(() => {
    let cities = northAmericanCities

    // Apply search filter
    if (searchQuery.trim()) {
      cities = searchCities(searchQuery)
    }

    // Apply region filter
    if (selectedRegion !== 'all') {
      cities = cities.filter(city => city.region === selectedRegion)
    }

    // Apply market size filter
    if (selectedMarketSize !== 'all') {
      cities = cities.filter(city => city.marketSize === selectedMarketSize)
    }

    return cities.sort((a, b) => b.demographics.creatorEconomyPenetration - a.demographics.creatorEconomyPenetration)
  }, [searchQuery, selectedRegion, selectedMarketSize])

  const topCreatorCities = useMemo(() => {
    return getTopCreatorEconomyCities(8).filter(city => 
      !selectedCities.some(selected => selected.id === city.id)
    )
  }, [selectedCities])

  const canSelectMore = selectedCities.length < maxSelections

  const handleCityToggle = (city: TargetCity) => {
    const isSelected = selectedCities.some(selected => selected.id === city.id)
    
    if (isSelected || canSelectMore) {
      onCityToggle(city)
    }
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedRegion('all')
    setSelectedMarketSize('all')
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Selected Cities */}
      {selectedCities.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-primary-100">
              Selected Cities ({selectedCities.length}/{maxSelections})
            </h4>
            <span className="text-sm text-primary-400">
              Click to remove
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCities.map((city) => (
              <motion.button
                key={city.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => handleCityToggle(city)}
                className="flex items-center space-x-2 px-4 py-2 bg-accent-500/20 border border-accent-500/40 rounded-full text-accent-300 hover:bg-accent-500/30 transition-colors group"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{city.name}</span>
                <span className="text-xs text-accent-400">{city.state}</span>
                <X className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
          <input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-primary-900/50 border-2 border-primary-700 rounded-2xl focus:border-accent-400 focus:outline-none transition-all text-primary-50 placeholder-primary-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary-300 mb-2">
              Region
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value as NorthAmericanRegion | 'all')}
              className="custom-select w-full p-3 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100"
            >
              <option value="all">All Regions</option>
              {Object.entries(regionLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-300 mb-2">
              Market Size
            </label>
            <select
              value={selectedMarketSize}
              onChange={(e) => setSelectedMarketSize(e.target.value as MarketSize | 'all')}
              className="custom-select w-full p-3 bg-primary-900/50 border-2 border-primary-700 rounded-xl focus:border-accent-400 focus:outline-none transition-all text-primary-100"
            >
              <option value="all">All Sizes</option>
              {Object.entries(marketSizeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {(searchQuery || selectedRegion !== 'all' || selectedMarketSize !== 'all') && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 text-sm text-accent-400 hover:text-accent-300 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Suggestions */}
      {showSuggestions && !searchQuery && selectedRegion === 'all' && selectedMarketSize === 'all' && topCreatorCities.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-primary-100">
              Top Creator Economy Cities
            </h4>
            <button
              onClick={() => setShowSuggestions(false)}
              className="text-sm text-primary-400 hover:text-primary-300"
            >
              Hide suggestions
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {topCreatorCities.slice(0, 6).map((city) => (
              <motion.button
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => handleCityToggle(city)}
                disabled={!canSelectMore}
                className={cn(
                  "p-4 border-2 rounded-xl text-left transition-all hover:border-accent-400/50 hover:bg-accent-500/5",
                  canSelectMore 
                    ? "border-primary-700 bg-primary-900/30 cursor-pointer" 
                    : "border-primary-800 bg-primary-900/20 cursor-not-allowed opacity-50"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-semibold text-primary-100">{city.name}</h5>
                    <p className="text-sm text-primary-400">{city.state}, {city.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-accent-400 font-medium">
                      {city.demographics.creatorEconomyPenetration}% Creator Penetration
                    </div>
                    <div className="text-xs text-primary-500 capitalize">
                      {city.marketSize} market
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* City List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-primary-100">
            {searchQuery || selectedRegion !== 'all' || selectedMarketSize !== 'all' 
              ? `Filtered Cities (${filteredCities.length})` 
              : 'All Cities'
            }
          </h4>
          {!canSelectMore && (
            <span className="text-sm text-orange-400 font-medium">
              Maximum {maxSelections} cities selected
            </span>
          )}
        </div>
        
        <div className="max-h-96 overflow-y-auto custom-scrollbar space-y-2">
          <AnimatePresence>
            {filteredCities.map((city) => {
              const isSelected = selectedCities.some(selected => selected.id === city.id)
              const canSelect = canSelectMore || isSelected
              
              return (
                <motion.button
                  key={city.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={() => handleCityToggle(city)}
                  disabled={!canSelect}
                  className={cn(
                    "w-full p-4 border-2 rounded-xl text-left transition-all",
                    isSelected 
                      ? "border-accent-500 bg-accent-500/10 shadow-lg shadow-accent-500/20"
                      : canSelect
                        ? "border-primary-700 bg-primary-900/30 hover:border-accent-400/50 hover:bg-accent-500/5"
                        : "border-primary-800 bg-primary-900/20 cursor-not-allowed opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <MapPin className={cn(
                          "w-5 h-5",
                          isSelected ? "text-accent-400" : "text-primary-400"
                        )} />
                        <div>
                          <h5 className="font-semibold text-primary-100">{city.name}</h5>
                          <p className="text-sm text-primary-400">{city.state}, {city.country}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="text-center">
                        <Users className="w-4 h-4 mx-auto mb-1 text-primary-400" />
                        <div className="text-primary-300">
                          {(city.population / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-4 h-4 mx-auto mb-1 text-primary-400" />
                        <div className="text-primary-300">
                          ${(city.demographics.medianIncome / 1000).toFixed(0)}K
                        </div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-4 h-4 mx-auto mb-1 text-accent-400" />
                        <div className="text-accent-300 font-medium">
                          {city.demographics.creatorEconomyPenetration}%
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </AnimatePresence>
          
          {filteredCities.length === 0 && (
            <div className="text-center py-8 text-primary-400">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No cities found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}