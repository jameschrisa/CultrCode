'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Lightbulb, Heart, Leaf, Briefcase, Palette } from 'lucide-react'
import { PersonaOptions, getInterestsByCategory } from '@/data/personaOptions'
import { SmartValueInput } from './SmartValueInput'

interface InterestSelectorProps {
  onAdd: (interest: string) => void
  existingInterests?: string[]
}

const categoryIcons = {
  technology: <Lightbulb className="w-4 h-4" />,
  wellness: <Heart className="w-4 h-4" />,
  sustainability: <Leaf className="w-4 h-4" />,
  business: <Briefcase className="w-4 h-4" />,
  creative: <Palette className="w-4 h-4" />
}

export function InterestSelector({ onAdd, existingInterests = [] }: InterestSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const categories = Object.keys(PersonaOptions.interests) as Array<keyof typeof PersonaOptions.interests>

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  const handleQuickAdd = (interest: string) => {
    if (!existingInterests.includes(interest)) {
      onAdd(interest)
    }
  }

  const getDisplayName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  const getCategoryOptions = () => {
    if (selectedCategory) {
      return getInterestsByCategory(selectedCategory as keyof typeof PersonaOptions.interests)
    }
    return Object.values(PersonaOptions.interests).flat()
  }

  return (
    <div className="space-y-3">
      {/* Smart Search Input */}
      <SmartValueInput
        onAdd={onAdd}
        placeholder="Search interests or add custom..."
        options={getCategoryOptions()}
        existingValues={existingInterests}
        maxSuggestions={6}
        allowCustom={true}
        category="interests"
      />

      {/* Category Browser */}
      <div className="border-t border-primary-700 pt-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-sm text-primary-300 hover:text-primary-200 transition-colors"
        >
          <span>Browse by category</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-3"
            >
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                          : 'bg-primary-700/30 text-primary-300 hover:bg-primary-700/50 hover:text-primary-200'
                      }`}
                    >
                      {categoryIcons[category as keyof typeof categoryIcons]}
                      <span>{getDisplayName(category)}</span>
                    </button>
                  )
                })}
              </div>

              {/* Category Options */}
              <AnimatePresence mode="wait">
                {selectedCategory && (
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-primary-800/30 rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      {categoryIcons[selectedCategory as keyof typeof categoryIcons]}
                      <h4 className="font-medium text-primary-200">
                        {getDisplayName(selectedCategory)} Interests
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {getInterestsByCategory(selectedCategory as keyof typeof PersonaOptions.interests)
                        .filter(interest => !existingInterests.includes(interest))
                        .slice(0, 12)
                        .map((interest) => (
                          <button
                            key={interest}
                            onClick={() => handleQuickAdd(interest)}
                            className="flex items-center justify-between p-2 text-left text-sm text-primary-300 hover:text-primary-100 hover:bg-primary-700/30 rounded-md transition-colors group"
                          >
                            <span>{interest}</span>
                            <Plus className="w-3 h-3 opacity-0 group-hover:opacity-100 text-accent-400 transition-opacity" />
                          </button>
                        ))}
                    </div>

                    {getInterestsByCategory(selectedCategory as keyof typeof PersonaOptions.interests).length > 12 && (
                      <div className="mt-3 text-xs text-primary-400 text-center">
                        And {getInterestsByCategory(selectedCategory as keyof typeof PersonaOptions.interests).length - 12} more...
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Popular Suggestions */}
              {!selectedCategory && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-primary-800/30 rounded-lg p-4"
                >
                  <h4 className="font-medium text-primary-200 mb-3">Popular Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Technology trends',
                      'Health & fitness',
                      'Sustainable living',
                      'Professional development',
                      'Creative arts',
                      'Travel',
                      'Food & cooking',
                      'Investment & finance'
                    ]
                      .filter(interest => !existingInterests.includes(interest))
                      .slice(0, 8)
                      .map((interest) => (
                        <button
                          key={interest}
                          onClick={() => handleQuickAdd(interest)}
                          className="px-3 py-1 text-sm text-primary-300 hover:text-primary-100 bg-primary-700/30 hover:bg-primary-700/50 rounded-full transition-colors"
                        >
                          {interest}
                        </button>
                      ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}