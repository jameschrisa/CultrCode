'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Send, Users, Calendar, AlertCircle } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { useAuth } from '@clerk/nextjs'
import { Notification } from '@/lib/database'

interface NotificationFormData {
  title: string
  message: string
  type: 'trend' | 'community' | 'segment' | 'system'
  target_audience: 'all' | 'free' | 'community_explorer' | 'cultural_analyst' | 'enterprise'
  priority: 'low' | 'medium' | 'high'
  expires_at?: string
  metadata?: any
}

export default function AdminNotificationsPage() {
  const { userId } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingNotification, setEditingNotification] = useState<Notification | null>(null)
  const [formData, setFormData] = useState<NotificationFormData>({
    title: '',
    message: '',
    type: 'system',
    target_audience: 'all',
    priority: 'medium'
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/admin/notifications')
      if (response.ok) {
        const data = await response.json()
        setNotifications(data)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingNotification 
        ? `/api/notifications/${editingNotification.id}`
        : '/api/notifications'
      
      const method = editingNotification ? 'PATCH' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        await fetchNotifications()
        resetForm()
        setShowForm(false)
      } else {
        const error = await response.json()
        alert(`Error: ${error.message}`)
      }
    } catch (error) {
      console.error('Error saving notification:', error)
      alert('Error saving notification')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (notification: Notification) => {
    setEditingNotification(notification)
    setFormData({
      title: notification.title,
      message: notification.message,
      type: notification.type,
      target_audience: notification.target_audience,
      priority: notification.priority,
      expires_at: notification.expires_at?.split('T')[0], // Convert to date input format
      metadata: notification.metadata
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this notification?')) return

    try {
      const response = await fetch(`/api/notifications/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchNotifications()
      }
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      message: '',
      type: 'system',
      target_audience: 'all',
      priority: 'medium'
    })
    setEditingNotification(null)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'trend': return '📈'
      case 'community': return '👥'
      case 'segment': return '🎯'
      default: return '⚡'
    }
  }

  const getAudienceLabel = (audience: string) => {
    switch (audience) {
      case 'all': return 'All Users'
      case 'free': return 'Free Users'
      case 'community_explorer': return 'Community Explorer'
      case 'cultural_analyst': return 'Cultural Analyst'
      case 'enterprise': return 'Enterprise'
      default: return audience
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20'
      case 'medium': return 'text-orange-400 bg-orange-500/20'
      default: return 'text-green-400 bg-green-500/20'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-accent-500/20 top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-64 h-64 bg-brand-400/15 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-accent-600/10 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-50 mb-2">Notification Management</h1>
            <p className="text-primary-300">Send targeted notifications to users based on their subscription tier</p>
          </div>
          <Button 
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Notification</span>
          </Button>
        </div>

        {/* Notification Form */}
        {showForm && (
          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-primary-50 mb-4">
                {editingNotification ? 'Edit Notification' : 'Create New Notification'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                      className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                    >
                      <option value="system">System Update</option>
                      <option value="trend">Emerging Trend</option>
                      <option value="community">New Community</option>
                      <option value="segment">Segment Update</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Target Audience</label>
                    <select
                      value={formData.target_audience}
                      onChange={(e) => setFormData({ ...formData, target_audience: e.target.value as any })}
                      className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                    >
                      <option value="all">All Users</option>
                      <option value="free">Free Users</option>
                      <option value="community_explorer">Community Explorer</option>
                      <option value="cultural_analyst">Cultural Analyst</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                      className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-300 mb-2">Expires At (Optional)</label>
                    <input
                      type="date"
                      value={formData.expires_at || ''}
                      onChange={(e) => setFormData({ ...formData, expires_at: e.target.value || undefined })}
                      className="w-full px-3 py-2 bg-primary-800 border border-primary-600 rounded-lg text-primary-100 focus:border-accent-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : (editingNotification ? 'Update' : 'Create')} Notification
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setShowForm(false)
                      resetForm()
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg">{getTypeIcon(notification.type)}</span>
                      <h3 className="font-bold text-primary-50">{notification.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                        {notification.priority}
                      </span>
                      {!notification.is_active && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">
                          Inactive
                        </span>
                      )}
                    </div>
                    <p className="text-primary-300 mb-3">{notification.message}</p>
                    <div className="flex items-center space-x-4 text-sm text-primary-400">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{getAudienceLabel(notification.target_audience)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(notification.created_at).toLocaleDateString()}</span>
                      </span>
                      {notification.expires_at && (
                        <span className="flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>Expires {new Date(notification.expires_at).toLocaleDateString()}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(notification)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(notification.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {notifications.length === 0 && (
            <Card className="glass-card">
              <CardContent className="p-12 text-center">
                <Send className="w-12 h-12 text-primary-400 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium text-primary-300 mb-2">No notifications yet</h3>
                <p className="text-primary-400">Create your first notification to engage with users</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}