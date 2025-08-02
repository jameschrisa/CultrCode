'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Search, Check, X } from 'lucide-react'
import { Button } from './HeroButton'

interface SmartValueInputProps {
  onAdd: (value: string) => void
  placeholder?: string
  options: string[]
  existingValues?: string[]
  maxSuggestions?: number
  allowCustom?: boolean
  category?: string
}

export function SmartValueInput({ 
  onAdd, 
  placeholder = "Add new item...", 
  options = [],
  existingValues = [],
  maxSuggestions = 8,
  allowCustom = true,
  category
}: SmartValueInputProps) {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter suggestions based on input and existing values
  useEffect(() => {
    if (!value.trim()) {
      // Show popular options when no search query
      const availableOptions = options.filter(option => !existingValues.includes(option))
      setSuggestions(availableOptions.slice(0, maxSuggestions))
    } else {
      const normalizedValue = value.toLowerCase()
      const filtered = options.filter(option => 
        option.toLowerCase().includes(normalizedValue) && 
        !existingValues.includes(option)
      )
      setSuggestions(filtered.slice(0, maxSuggestions))
    }
    setSelectedIndex(-1)
  }, [value, options, existingValues, maxSuggestions])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setIsOpen(true)
  }

  const handleInputFocus = () => {
    setIsOpen(true)
  }

  const handleInputBlur = (e: React.FocusEvent) => {
    // Don't close if clicking on dropdown
    if (dropdownRef.current?.contains(e.relatedTarget as Node)) {
      return
    }
    setTimeout(() => setIsOpen(false), 150)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, -1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelectSuggestion(suggestions[selectedIndex])
        } else if (value.trim()) {
          handleSubmit()
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleSelectSuggestion = (suggestion: string) => {
    onAdd(suggestion)
    setValue('')
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  const handleSubmit = () => {
    const trimmedValue = value.trim()
    if (!trimmedValue) return

    // Check if it's already in existing values
    if (existingValues.includes(trimmedValue)) return

    // Check if it matches an existing option
    const exactMatch = options.find(option => 
      option.toLowerCase() === trimmedValue.toLowerCase()
    )

    if (exactMatch) {
      onAdd(exactMatch)
    } else if (allowCustom) {
      onAdd(trimmedValue)
    }

    setValue('')
    setIsOpen(false)
    setSelectedIndex(-1)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <div className="relative">
      <form onSubmit={handleFormSubmit} className="flex space-x-2">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full p-2 pl-8 bg-primary-800/50 border border-primary-600 rounded-lg focus:border-accent-400 focus:outline-none text-primary-100 placeholder-primary-400 text-sm"
          />
          <Search className="absolute left-2.5 top-2.5 w-3 h-3 text-primary-500" />
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={!value.trim()}
          className="rounded-lg px-3"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </form>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1 bg-primary-800 border border-primary-600 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
          >
            <div className="p-2">
              {!value.trim() && (
                <div className="px-3 py-2 text-xs text-primary-400 font-medium border-b border-primary-700 mb-2">
                  Popular {category || 'options'}:
                </div>
              )}
              
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSelectSuggestion(suggestion)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    index === selectedIndex
                      ? 'bg-accent-500/20 text-accent-300'
                      : 'text-primary-200 hover:bg-primary-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{suggestion}</span>
                    {index === selectedIndex && (
                      <Check className="w-3 h-3 text-accent-400" />
                    )}
                  </div>
                </button>
              ))}
              
              {/* Custom value option */}
              {allowCustom && value.trim() && !suggestions.some(s => s.toLowerCase() === value.toLowerCase()) && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full text-left px-3 py-2 rounded-md text-sm text-primary-200 hover:bg-primary-700/50 border-t border-primary-700 mt-2 pt-3"
                >
                  <div className="flex items-center space-x-2">
                    <Plus className="w-3 h-3 text-accent-400" />
                    <span>Add "<span className="text-accent-300">{value}</span>"</span>
                  </div>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No results message */}
      <AnimatePresence>
        {isOpen && value.trim() && suggestions.length === 0 && !allowCustom && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-primary-800 border border-primary-600 rounded-lg shadow-xl z-50 p-4 text-center"
          >
            <div className="text-sm text-primary-400">
              No matching options found
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}