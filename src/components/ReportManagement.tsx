'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Upload, Trash2, FileText, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { reportsService, SavedReport } from '@/lib/reportsService'
import { useAuth } from '@/contexts/AuthContext'

interface ReportManagementProps {
  reports: SavedReport[]
  onReportsUpdated: () => void
}

export function ReportManagement({ reports, onReportsUpdated }: ReportManagementProps) {
  const { user } = useAuth()
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  const handleExport = async () => {
    if (!user || reports.length === 0) return

    setIsExporting(true)
    try {
      const exportData = reportsService.exportReports(reports)
      const blob = new Blob([exportData], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = `launchlens_reports_${user.name?.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`
      link.click()
      
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export error:', error)
      alert('Failed to export reports')
    } finally {
      setIsExporting(false)
    }
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !user) return

    setIsImporting(true)
    const reader = new FileReader()
    
    reader.onload = async (e) => {
      try {
        const jsonData = e.target?.result as string
        await reportsService.importReports(jsonData, user.id)
        onReportsUpdated()
        alert('Reports imported successfully!')
      } catch (error) {
        console.error('Import error:', error)
        alert('Failed to import reports. Please check the file format.')
      } finally {
        setIsImporting(false)
        event.target.value = '' // Reset file input
      }
    }
    
    reader.readAsText(file)
  }

  const handleClearReports = async () => {
    if (!user || !showClearConfirm) {
      setShowClearConfirm(true)
      return
    }

    try {
      await reportsService.clearUserReports(user.id)
      onReportsUpdated()
      setShowClearConfirm(false)
      alert('All reports cleared successfully!')
    } catch (error) {
      console.error('Clear error:', error)
      alert('Failed to clear reports')
    }
  }

  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-primary-50 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Report Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Export Reports */}
        <div className="flex items-center justify-between p-4 glass-card rounded-xl">
          <div>
            <h4 className="font-semibold text-primary-100">Export Reports</h4>
            <p className="text-sm text-primary-400">Download all your reports as JSON</p>
          </div>
          <Button
            variant="outline"
            onClick={handleExport}
            disabled={isExporting || reports.length === 0}
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Exporting...' : 'Export'}</span>
          </Button>
        </div>

        {/* Import Reports */}
        <div className="flex items-center justify-between p-4 glass-card rounded-xl">
          <div>
            <h4 className="font-semibold text-primary-100">Import Reports</h4>
            <p className="text-sm text-primary-400">Upload previously exported reports</p>
          </div>
          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={isImporting}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="import-file"
            />
            <label htmlFor="import-file" className="cursor-pointer">
              <Button
                variant="outline"
                disabled={isImporting}
                className="flex items-center space-x-2"
              >
                <Upload className="w-4 h-4" />
                <span>{isImporting ? 'Importing...' : 'Import'}</span>
              </Button>
            </label>
          </div>
        </div>

        {/* Clear All Reports */}
        <div className="flex items-center justify-between p-4 glass-card rounded-xl border border-red-500/20">
          <div>
            <h4 className="font-semibold text-red-300">Clear All Reports</h4>
            <p className="text-sm text-primary-400">Permanently delete all saved reports</p>
          </div>
          <div className="flex items-center space-x-2">
            {showClearConfirm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2"
              >
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-300">Are you sure?</span>
              </motion.div>
            )}
            <Button
              variant="ghost"
              onClick={handleClearReports}
              disabled={reports.length === 0}
              className={`flex items-center space-x-2 ${
                showClearConfirm 
                  ? 'text-red-300 hover:text-red-200 bg-red-500/20' 
                  : 'text-red-400 hover:text-red-300'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>{showClearConfirm ? 'Confirm Delete' : 'Clear All'}</span>
            </Button>
            {showClearConfirm && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowClearConfirm(false)}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-primary-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-400">{reports.length}</div>
            <div className="text-xs text-primary-400">Total Reports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success-400">
              {reports.filter(r => r.reportType === 'premium').length}
            </div>
            <div className="text-xs text-primary-400">Premium</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {reports.filter(r => r.reportType === 'basic').length}
            </div>
            <div className="text-xs text-primary-400">Basic</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-400">
              {reports.length > 0 
                ? Math.round(reports.reduce((acc, r) => acc + r.segmentMatch.matchScore, 0) / reports.length)
                : 0}%
            </div>
            <div className="text-xs text-primary-400">Avg Match</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}