'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Save, X } from 'lucide-react'
import { Button } from './HeroButton'

interface CollapsiblePsychographicTileProps {
  label: string
  description?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  tickLabels?: string[]
  className?: string
}

export function CollapsiblePsychographicTile({
  label,
  description,
  value,
  onChange,
  min = 1,
  max = 5,
  step = 1,
  tickLabels,
  className = ''
}: CollapsiblePsychographicTileProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [tempValue, setTempValue] = useState(value)
  const [isDragging, setIsDragging] = useState(false)

  // Generate tick positions
  const ticks = []
  for (let i = min; i <= max; i += step) {
    ticks.push(i)
  }

  // Calculate percentage position for current value
  const percentage = ((tempValue - min) / (max - min)) * 100

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(Number(e.target.value))
  }

  const handleSave = () => {
    onChange(tempValue)
    setIsExpanded(false)
  }

  const handleCancel = () => {
    setTempValue(value)
    setIsExpanded(false)
  }

  const handleTileClick = () => {
    setTempValue(value)
    setIsExpanded(true)
  }

  const getValueLabel = (val: number) => {
    return tickLabels ? tickLabels[val - min] : val.toString()
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Collapsed Tile */}
      <motion.div
        className={`
          cursor-pointer p-4 rounded-xl border-2 transition-all duration-200
          ${isExpanded 
            ? 'border-accent-400 bg-accent-500/10' 
            : 'border-primary-600 hover:border-accent-500/50 bg-primary-800/30 hover:bg-primary-800/50'
          }
        `}
        onClick={handleTileClick}
        whileHover={{ scale: isExpanded ? 1 : 1.02 }}
        whileTap={{ scale: isExpanded ? 1 : 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-primary-100 mb-1">{label}</h4>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-medium">
                {value}/5
              </div>
              <span className="text-xs text-primary-300">
                {getValueLabel(value)}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-primary-400"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Expanded Slider */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-primary-900/30 rounded-xl border border-primary-700/50 space-y-6">
              {/* Description */}
              {description && (
                <p className="text-sm text-primary-400 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Current Value Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-accent-500/20 rounded-lg border border-accent-500/30">
                  <span className="text-sm font-medium text-accent-300">
                    {getValueLabel(tempValue)}
                  </span>
                </div>
              </div>

              {/* Slider Container */}
              <div className="relative px-8 py-4">
                {/* Slider Track */}
                <div className="relative">
                  {/* Background track */}
                  <div className="w-full h-3 bg-primary-800 rounded-full" />
                  
                  {/* Active track */}
                  <div 
                    className="absolute top-0 left-0 h-3 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-200"
                    style={{ width: `${percentage}%` }}
                  />
                  
                  {/* Slider input */}
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={tempValue}
                    onChange={handleSliderChange}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer touch-manipulation"
                  />
                  
                  {/* Large Slider thumb */}
                  <div 
                    className={`absolute top-1/2 w-8 h-8 bg-white border-3 border-accent-400 rounded-full shadow-lg transition-all duration-200 ${
                      isDragging ? 'scale-110 shadow-xl border-accent-300' : 'hover:scale-105'
                    }`}
                    style={{ 
                      left: `${percentage}%`, 
                      transform: 'translateX(-50%) translateY(-50%)',
                      pointerEvents: 'none'
                    }}
                  >
                    <div className="absolute inset-1.5 bg-accent-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-primary-700/50">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  className="px-4 py-2"
                >
                  <X className="w-3 h-3 mr-1" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  className="px-4 py-2 bg-accent-500 hover:bg-accent-600"
                >
                  <Save className="w-3 h-3 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}