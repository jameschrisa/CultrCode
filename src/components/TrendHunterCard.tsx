'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Calendar, CheckCircle, Clock, ExternalLink, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { Card, CardContent } from '@/components/ui/Card'
import { TrendHunter } from '@/types/trendHunters'
import { cn } from '@/lib/utils'

interface TrendHunterCardProps {
  trendHunter: TrendHunter
  className?: string
}

const socialPlatformIcons = {
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  tiktok: FaTiktok,
  youtube: Youtube
}

const verificationColors = {
  verified: 'text-green-400 bg-green-500/20',
  pending: 'text-yellow-400 bg-yellow-500/20',
  unverified: 'text-primary-400 bg-primary-500/20'
}

export function TrendHunterCard({ trendHunter, className }: TrendHunterCardProps) {
  const [imageError, setImageError] = useState(false)
  const SocialIcon = socialPlatformIcons[trendHunter.socialPlatform]
  
  // Placeholder image URL if no profile image or if image fails to load
  const getProfileImage = () => {
    if (imageError || !trendHunter.profileImage) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(trendHunter.name)}&size=200&background=6366f1&color=ffffff&bold=true`
    }
    return trendHunter.profileImage
  }

  const formatFollowers = (count?: number) => {
    if (!count) return 'N/A'
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
    return count.toString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("group", className)}
    >
      <Card className="glass-card hover:bg-white/10 transition-all duration-300 h-full">
        <CardContent className="p-6">
          {/* Header with Image and Basic Info */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="relative flex-shrink-0">
              <img
                src={getProfileImage()}
                alt={`${trendHunter.name} profile`}
                className="w-16 h-16 rounded-full object-cover border-2 border-accent-500/30"
                onError={() => setImageError(true)}
              />
              {/* Country Flag */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-primary-800 bg-primary-700 flex items-center justify-center text-xs">
                {trendHunter.countryCode}
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-primary-100 truncate">{trendHunter.name}</h3>
                <div className={cn(
                  "flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium",
                  verificationColors[trendHunter.verificationStatus]
                )}>
                  {trendHunter.verificationStatus === 'verified' ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  <span className="capitalize">{trendHunter.verificationStatus}</span>
                </div>
              </div>
              
              <p className="text-sm text-accent-400 font-medium mb-1">{trendHunter.industry}</p>
              
              <div className="flex items-center space-x-4 text-xs text-primary-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{trendHunter.country}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{trendHunter.yearsOfExperience}y exp</span>
                </div>
                {trendHunter.followersCount && (
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{formatFollowers(trendHunter.followersCount)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-primary-300 mb-4 line-clamp-3">{trendHunter.bio}</p>

          {/* Expertise Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {trendHunter.expertise.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-700/50 text-primary-200 rounded text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
              {trendHunter.expertise.length > 3 && (
                <span className="px-2 py-1 bg-primary-700/30 text-primary-400 rounded text-xs">
                  +{trendHunter.expertise.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Recent Trends */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-primary-400 mb-2">Recent Predictions</h4>
            <div className="space-y-1">
              {trendHunter.recentTrends.slice(0, 2).map((trend, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full flex-shrink-0" />
                  <span className="text-xs text-primary-200 truncate">{trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Handle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SocialIcon className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">{trendHunter.socialHandle}</span>
            </div>
            
            <button className="p-1 text-primary-400 hover:text-accent-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}