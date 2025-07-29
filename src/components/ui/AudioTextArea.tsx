'use client'

import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Type, X } from 'lucide-react'
import { AudioRecorder } from './AudioRecorder'
import { Button } from './HeroButton'

interface AudioTextAreaProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  rows?: number
  className?: string
  label?: string
  required?: boolean
  disabled?: boolean
  maxLength?: number
  showCharCount?: boolean
  error?: string
  audioMaxDuration?: number
  name?: string
  id?: string
}

export interface AudioTextAreaRef {
  focus: () => void
  blur: () => void
  select: () => void
}

export const AudioTextArea = forwardRef<AudioTextAreaRef, AudioTextAreaProps>(({
  value = '',
  onChange,
  placeholder,
  rows = 5,
  className = '',
  label,
  required = false,
  disabled = false,
  maxLength,
  showCharCount = true,
  error,
  audioMaxDuration = 300,
  name,
  id,
  ...props
}, ref) => {
  const [showAudioRecorder, setShowAudioRecorder] = useState(false)
  const [audioMode, setAudioMode] = useState<'replace' | 'append'>('append')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => textAreaRef.current?.focus(),
    blur: () => textAreaRef.current?.blur(),
    select: () => textAreaRef.current?.select()
  }))

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (maxLength && newValue.length > maxLength) {
      return
    }
    onChange?.(newValue)
  }

  const handleTranscription = (transcription: string) => {
    if (!transcription.trim()) return

    const cleanTranscription = transcription.trim()
    
    if (audioMode === 'replace') {
      onChange?.(cleanTranscription)
    } else {
      // Append mode
      const currentValue = value.trim()
      const newValue = currentValue 
        ? `${currentValue} ${cleanTranscription}`
        : cleanTranscription
      onChange?.(newValue)
    }
  }

  const toggleAudioRecorder = () => {
    setShowAudioRecorder(!showAudioRecorder)
  }

  const handleAudioModeChange = (mode: 'replace' | 'append') => {
    setAudioMode(mode)
  }

  const charCount = value.length
  const isOverLimit = maxLength ? charCount > maxLength : false

  return (
    <div className="space-y-3">
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-primary-200"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <div className="relative">
          <textarea
            ref={textAreaRef}
            id={id}
            name={name}
            value={value}
            onChange={handleTextChange}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className={`
              w-full p-4 pr-12 
              bg-primary-900/50 border-2 border-primary-700 
              rounded-2xl 
              focus:border-accent-400 focus:outline-none 
              transition-all duration-300
              text-primary-50 placeholder-primary-400 
              resize-none backdrop-blur-sm
              ${error ? 'border-red-500/50 focus:border-red-400' : ''}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${className}
            `}
            {...props}
          />
          
          {/* Audio Recording Button */}
          {!disabled && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleAudioRecorder}
              className={`
                absolute top-3 right-3 p-2 rounded-lg
                transition-all duration-300
                ${showAudioRecorder 
                  ? 'bg-accent-500/20 text-accent-400 shadow-lg shadow-accent-500/20' 
                  : 'hover:bg-primary-700/50 text-primary-400 hover:text-accent-400'
                }
              `}
              title="Toggle audio recording"
            >
              {showAudioRecorder ? <X className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          )}
        </div>

        {/* Character count */}
        {showCharCount && (maxLength || charCount > 0) && (
          <div className={`
            flex justify-end mt-1 text-xs
            ${isOverLimit ? 'text-red-400' : 'text-primary-400'}
          `}>
            {charCount}{maxLength && ` / ${maxLength}`}
          </div>
        )}

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {error}
          </motion.div>
        )}

        {/* Audio Recorder Panel */}
        <AnimatePresence>
          {showAudioRecorder && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4"
            >
              <div className="bg-primary-800/80 backdrop-blur-xl border border-primary-600/50 rounded-2xl p-4 shadow-xl">
                {/* Mode Selection */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Mic className="w-4 h-4 text-accent-400" />
                    <span className="text-sm font-medium text-primary-200">Audio Input</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleAudioModeChange('append')}
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200
                        ${audioMode === 'append' 
                          ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30' 
                          : 'bg-primary-700/50 text-primary-400 hover:bg-primary-600/50'
                        }
                      `}
                    >
                      Append
                    </button>
                    <button
                      onClick={() => handleAudioModeChange('replace')}
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200
                        ${audioMode === 'replace' 
                          ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30' 
                          : 'bg-primary-700/50 text-primary-400 hover:bg-primary-600/50'
                        }
                      `}
                    >
                      Replace
                    </button>
                  </div>
                </div>

                {/* Mode explanation */}
                <div className="mb-4 p-2 bg-primary-900/50 rounded-lg border border-primary-700/30">
                  <div className="text-xs text-primary-400">
                    {audioMode === 'append' 
                      ? '💡 Audio will be added to existing text'
                      : '💡 Audio will replace all existing text'
                    }
                  </div>
                </div>

                {/* Audio Recorder Component */}
                <AudioRecorder
                  onTranscription={handleTranscription}
                  maxDuration={audioMaxDuration}
                  variant="default"
                  className="border-none bg-transparent p-0"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})

AudioTextArea.displayName = 'AudioTextArea'