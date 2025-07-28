'use client'

import { Slider as HeroSlider } from '@heroui/react'
import { cn } from '@/lib/utils'

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

  // Generate marks for the slider
  const marks = []
  for (let i = min; i <= max; i += step) {
    marks.push({
      value: i,
      label: tickLabels ? tickLabels[i - min] : String(i)
    })
  }

  const handleSliderChange = (values: number | number[]) => {
    const newValue = Array.isArray(values) ? values[0] : values
    onChange(newValue)
  }

  return (
    <div className={cn('space-y-6 md:space-y-8 p-4 md:p-6 bg-gradient-to-br from-primary-900/50 to-primary-800/30 rounded-2xl border border-primary-700/30 backdrop-blur-sm', className)}>
      {/* Label and Description */}
      <div className="space-y-2 md:space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <label className="text-base md:text-lg font-semibold text-primary-50 tracking-wide">
            {label}
          </label>
          <span className="text-lg md:text-xl font-bold text-white bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-lg border border-primary-400/30 text-center">
            {value}
          </span>
        </div>
        {description && (
          <p className="text-sm text-primary-300 leading-relaxed opacity-90">
            {description}
          </p>
        )}
      </div>

      {/* Current Selection Display */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl border border-accent-500/30 shadow-lg backdrop-blur-sm">
          <span className="text-base md:text-lg font-semibold text-accent-300">
            {tickLabels ? tickLabels[value - min] : `Level ${value}`}
          </span>
        </div>
      </div>

      {/* Hero UI XL Slider */}
      <div className="px-2 md:px-4 py-4 md:py-6">
        <HeroSlider
          value={value}
          onChange={handleSliderChange}
          minValue={min}
          maxValue={max}
          step={step}
          marks={marks}
          hideValue
          size="lg"
          color="primary"
          className="w-full py-2 md:py-4"
          classNames={{
            base: "gap-4 md:gap-6",
            track: [
              "border-s-primary-800/50 bg-primary-800/30",
              "h-2 md:h-3 rounded-full shadow-inner",
              "border border-primary-700/30"
            ],
            filler: [
              "bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500",
              "h-2 md:h-3 rounded-full shadow-lg",
              "border border-primary-300/20"
            ],
            thumb: [
              "w-10 h-10 md:w-12 md:h-12 bg-white border-3 md:border-4 border-primary-400 shadow-xl",
              "after:w-6 after:h-6 md:after:w-8 md:after:h-8 after:bg-gradient-to-br after:from-primary-400 after:to-accent-500",
              "after:rounded-full after:absolute after:inset-2 after:shadow-inner",
              "hover:scale-125 hover:shadow-2xl hover:border-accent-400",
              "active:scale-110 transition-all duration-300 cursor-grab active:cursor-grabbing",
              "ring-2 md:ring-4 ring-primary-500/20 hover:ring-accent-500/30",
              "focus:scale-125 focus:shadow-2xl focus:border-accent-400 focus:ring-accent-500/40",
              "touch-action-none" // Better touch support
            ],
            mark: [
              "text-xs md:text-sm font-medium text-primary-400 mt-3 md:mt-4",
              "hover:text-primary-300 transition-colors"
            ],
            labelWrapper: "mb-3 md:mb-4",
            trackWrapper: "py-1 md:py-2"
          }}
        />
      </div>

      {/* Enhanced Tick Labels */}
      {tickLabels && (
        <div className="px-2 md:px-4">
          <div className="flex justify-between items-center">
            {tickLabels.map((label, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-1 md:space-y-2"
                style={{ flex: 1 }}
              >
                <div className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full border-2 transition-all duration-300",
                  value === index + min 
                    ? "bg-accent-400 border-accent-400 shadow-lg scale-125" 
                    : "bg-primary-700 border-primary-600 hover:border-primary-500"
                )} />
                <span className={cn(
                  "text-xs text-center transition-all duration-300 px-1 py-0.5 md:px-2 md:py-1 rounded-lg leading-tight",
                  value === index + min 
                    ? "text-accent-300 font-semibold bg-accent-500/10 border border-accent-500/30" 
                    : "text-primary-400 hover:text-primary-300"
                )}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}