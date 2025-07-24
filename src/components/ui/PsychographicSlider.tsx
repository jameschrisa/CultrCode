'use client'

import { useState } from 'react'

interface PsychographicSliderProps {
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

export function PsychographicSlider({
  label,
  description,
  value,
  onChange,
  min = 1,
  max = 5,
  step = 1,
  tickLabels,
  className = ''
}: PsychographicSliderProps) {
  const [isDragging, setIsDragging] = useState(false)

  // Generate tick positions
  const ticks = []
  for (let i = min; i <= max; i += step) {
    ticks.push(i)
  }

  // Calculate percentage position for current value
  const percentage = ((value - min) / (max - min)) * 100

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Label and Description */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-base md:text-sm font-medium text-primary-50">
            {label}
          </label>
          <span className="text-base md:text-sm font-bold text-accent-400 bg-accent-500/20 px-3 py-1.5 md:px-2 md:py-1 rounded-lg">
            {value}
          </span>
        </div>
        {description && (
          <p className="text-sm md:text-xs text-primary-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative pt-2 px-8 md:px-6">
        {/* Tick marks and labels */}
        <div className="relative mb-16 md:mb-12">
          {/* Tick lines */}
          <div className="absolute top-0 left-0 right-0 flex justify-between">
            {ticks.map((tick, index) => {
              const isFirst = index === 0
              const isLast = index === ticks.length - 1
              const position = ((tick - min) / (max - min)) * 100
              
              return (
                <div
                  key={tick}
                  className="flex flex-col items-center"
                  style={{ 
                    position: 'absolute', 
                    left: `${position}%`, 
                    transform: isFirst ? 'translateX(0)' : isLast ? 'translateX(-100%)' : 'translateX(-50%)'
                  }}
                >
                  <div className={`w-0.5 h-5 md:h-4 ${tick === value ? 'bg-accent-400' : 'bg-primary-600'} transition-colors`} />
                  <div className={`mt-3 md:mt-2 text-sm md:text-xs leading-tight ${
                    tick === value ? 'text-accent-400 font-medium' : 'text-primary-500'
                  } transition-colors max-w-[80px] md:max-w-[90px] ${
                    isFirst ? 'text-left' : isLast ? 'text-right' : 'text-center'
                  }`}>
                    {tickLabels ? tickLabels[index] : tick}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Slider Track */}
        <div className="relative -mx-8 md:-mx-6">
          {/* Background track */}
          <div className="w-full h-3 md:h-2 bg-primary-800 rounded-full" />
          
          {/* Active track */}
          <div 
            className="absolute top-0 left-0 h-3 md:h-2 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-200"
            style={{ width: `${percentage}%` }}
          />
          
          {/* Slider input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute top-0 left-0 w-full h-3 md:h-2 opacity-0 cursor-pointer touch-manipulation"
          />
          
          {/* Slider thumb */}
          <div 
            className={`absolute top-1/2 w-8 h-8 md:w-6 md:h-6 bg-white border-2 border-accent-400 rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-200 ${
              isDragging ? 'scale-110 shadow-xl border-accent-300' : 'hover:scale-105'
            }`}
            style={{ left: `${percentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
          >
            <div className="absolute inset-1.5 md:inset-1 bg-accent-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}