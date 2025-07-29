'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, Square, Play, Pause, Volume2, Download, Trash2, Upload } from 'lucide-react'
import { Button } from '@/components/ui/HeroButton'

interface AudioRecorderProps {
  onTranscription?: (text: string) => void
  onAudioRecorded?: (audioBlob: Blob) => void
  maxDuration?: number // in seconds
  className?: string
  variant?: 'default' | 'compact'
}

interface RecordingState {
  isRecording: boolean
  isPaused: boolean
  duration: number
  audioBlob: Blob | null
  transcription: string
}

export function AudioRecorder({ 
  onTranscription, 
  onAudioRecorded,
  maxDuration = 300, // 5 minutes default
  className = '',
  variant = 'default'
}: AudioRecorderProps) {
  const [recordingState, setRecordingState] = useState<RecordingState>({
    isRecording: false,
    isPaused: false,
    duration: 0,
    audioBlob: null,
    transcription: ''
  })
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [permission, setPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt')
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioStreamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioElementRef = useRef<HTMLAudioElement | null>(null)
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const recognitionRef = useRef<any>(null)

  // Check for browser support and request permissions
  useEffect(() => {
    checkBrowserSupport()
    return cleanup
  }, [])

  const checkBrowserSupport = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      setError('Audio recording is not supported in this browser')
      return
    }

    // Check for Web Speech API support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech recognition not supported, transcription will be disabled')
    }

    try {
      const permissionState = await navigator.permissions.query({ name: 'microphone' as PermissionName })
      setPermission(permissionState.state)
      
      permissionState.addEventListener('change', () => {
        setPermission(permissionState.state)
      })
    } catch (err) {
      console.warn('Permission API not supported')
    }
  }

  const cleanup = () => {
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current)
    }
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach(track => track.stop())
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  const startRecording = async () => {
    try {
      setError(null)
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      })
      
      audioStreamRef.current = stream
      setPermission('granted')
      
      // Initialize MediaRecorder
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
      })
      
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType })
        setRecordingState(prev => ({ ...prev, audioBlob, isRecording: false }))
        onAudioRecorded?.(audioBlob)
        
        // Start transcription if supported
        startTranscription(audioBlob)
      }

      // Start recording
      mediaRecorder.start(1000) // Collect data every second
      
      setRecordingState(prev => ({ 
        ...prev, 
        isRecording: true, 
        isPaused: false,
        duration: 0 
      }))

      // Start duration counter
      durationIntervalRef.current = setInterval(() => {
        setRecordingState(prev => {
          const newDuration = prev.duration + 1
          
          // Auto-stop at max duration
          if (newDuration >= maxDuration) {
            stopRecording()
            return prev
          }
          
          return { ...prev, duration: newDuration }
        })
      }, 1000)

      // Start real-time speech recognition if available
      startLiveTranscription()
      
    } catch (err) {
      console.error('Error starting recording:', err)
      setError('Failed to start recording. Please check microphone permissions.')
      setPermission('denied')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach(track => track.stop())
    }
    
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current)
      durationIntervalRef.current = null
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause()
      setRecordingState(prev => ({ ...prev, isPaused: true }))
      
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current)
      }
    }
  }

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume()
      setRecordingState(prev => ({ ...prev, isPaused: false }))
      
      // Resume duration counter
      durationIntervalRef.current = setInterval(() => {
        setRecordingState(prev => {
          const newDuration = prev.duration + 1
          if (newDuration >= maxDuration) {
            stopRecording()
            return prev
          }
          return { ...prev, duration: newDuration }
        })
      }, 1000)
    }
  }

  const startLiveTranscription = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event: any) => {
      let finalTranscript = ''
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          finalTranscript += transcript
        } else {
          interimTranscript += transcript
        }
      }

      const fullTranscript = finalTranscript + interimTranscript
      if (fullTranscript.trim()) {
        setRecordingState(prev => ({ ...prev, transcription: fullTranscript }))
        onTranscription?.(fullTranscript)
      }
    }

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error)
    }

    recognitionRef.current = recognition
    recognition.start()
  }

  const startTranscription = async (audioBlob: Blob) => {
    // This is where you would typically send the audio to a transcription service
    // For now, we'll use the live transcription result
    setIsTranscribing(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setIsTranscribing(false)
      if (recordingState.transcription) {
        onTranscription?.(recordingState.transcription)
      }
    }, 2000)
  }

  const playRecording = () => {
    if (!recordingState.audioBlob) return

    if (audioElementRef.current) {
      audioElementRef.current.pause()
      audioElementRef.current = null
    }

    const audio = new Audio(URL.createObjectURL(recordingState.audioBlob))
    audioElementRef.current = audio

    audio.onplay = () => setIsPlaying(true)
    audio.onpause = () => setIsPlaying(false)
    audio.onended = () => setIsPlaying(false)

    audio.play().catch(err => {
      console.error('Error playing audio:', err)
      setIsPlaying(false)
    })
  }

  const pausePlayback = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause()
    }
  }

  const downloadRecording = () => {
    if (!recordingState.audioBlob) return

    const url = URL.createObjectURL(recordingState.audioBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = `recording-${new Date().toISOString().slice(0, 10)}.webm`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearRecording = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause()
      audioElementRef.current = null
    }
    
    setRecordingState({
      isRecording: false,
      isPaused: false,
      duration: 0,
      audioBlob: null,
      transcription: ''
    })
    setIsPlaying(false)
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {!recordingState.isRecording && !recordingState.audioBlob && (
          <Button
            variant="outline"
            size="sm"
            onClick={startRecording}
            disabled={permission === 'denied'}
            className="rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
          >
            <Mic className="w-4 h-4" />
          </Button>
        )}
        
        {recordingState.isRecording && (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={recordingState.isPaused ? resumeRecording : pauseRecording}
              className="rounded-xl"
            >
              {recordingState.isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={stopRecording}
              className="rounded-xl text-red-400 hover:text-red-300"
            >
              <Square className="w-4 h-4" />
            </Button>
            <span className="text-sm text-primary-300 font-mono">
              {formatDuration(recordingState.duration)}
            </span>
          </div>
        )}
        
        {recordingState.audioBlob && (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={isPlaying ? pausePlayback : playRecording}
              className="rounded-xl"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearRecording}
              className="rounded-xl text-red-400 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`bg-primary-800/50 border border-primary-600 rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Mic className="w-5 h-5 text-accent-400" />
          <span className="text-sm font-medium text-primary-200">Audio Recording</span>
        </div>
        
        {recordingState.duration > 0 && (
          <div className="text-sm text-primary-300 font-mono">
            {formatDuration(recordingState.duration)} / {formatDuration(maxDuration)}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
          >
            {error}
          </motion.div>
        )}

        {!recordingState.isRecording && !recordingState.audioBlob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <Button
              onClick={startRecording}
              disabled={permission === 'denied'}
              className="px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
            >
              <Mic className="w-5 h-5 mr-2" />
              Start Recording
            </Button>
            {permission === 'denied' && (
              <p className="text-sm text-red-400 mt-2">
                Microphone access denied. Please enable in browser settings.
              </p>
            )}
          </motion.div>
        )}

        {recordingState.isRecording && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                onClick={recordingState.isPaused ? resumeRecording : pauseRecording}
                className="rounded-xl"
              >
                {recordingState.isPaused ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={stopRecording}
                className="rounded-xl text-red-400 hover:text-red-300 border-red-500/30"
              >
                <Square className="w-4 h-4 mr-2" />
                Stop
              </Button>
            </div>

            {/* Recording indicator */}
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 bg-red-500 rounded-full"
              />
              <span className="text-sm text-primary-300">
                {recordingState.isPaused ? 'Paused' : 'Recording...'}
              </span>
            </div>

            {/* Live transcription */}
            {recordingState.transcription && (
              <div className="p-3 bg-primary-900/50 rounded-lg border border-primary-700/50">
                <div className="text-xs text-primary-400 mb-1">Live Transcription:</div>
                <div className="text-sm text-primary-200">{recordingState.transcription}</div>
              </div>
            )}
          </motion.div>
        )}

        {recordingState.audioBlob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                onClick={isPlaying ? pausePlayback : playRecording}
                className="rounded-xl"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={downloadRecording}
                className="rounded-xl"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              
              <Button
                variant="outline"
                onClick={clearRecording}
                className="rounded-xl text-red-400 hover:text-red-300 border-red-500/30"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>

            {/* Transcription result */}
            {isTranscribing && (
              <div className="p-3 bg-primary-900/50 rounded-lg border border-primary-700/50">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin w-4 h-4 border-2 border-accent-500 border-t-transparent rounded-full" />
                  <span className="text-sm text-primary-300">Transcribing audio...</span>
                </div>
              </div>
            )}

            {recordingState.transcription && !isTranscribing && (
              <div className="p-3 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <div className="text-xs text-accent-400 mb-1">Transcription:</div>
                <div className="text-sm text-primary-200">{recordingState.transcription}</div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}