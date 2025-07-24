import { SegmentMatch, UserInputs } from '@/types/segments'

export interface SavedReport {
  id: string
  userId: string
  segmentMatch: SegmentMatch
  userInputs?: UserInputs
  reportType: 'basic' | 'premium'
  createdAt: string
  title: string
  description: string
}

export interface ReportStats {
  totalReports: number
  premiumReports: number
  avgMatchScore: number
}

class ReportsService {
  private static readonly STORAGE_KEY = 'launchlens_saved_reports'

  // Save a report (hybrid approach: localStorage + API ready)
  async saveReport(reportData: Omit<SavedReport, 'id' | 'createdAt'>): Promise<SavedReport> {
    try {
      // Try API first (for future database integration)
      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      })

      if (response.ok) {
        const result = await response.json()
        const savedReport = result.report

        // Also save to localStorage as backup
        this.saveToLocalStorage(savedReport)
        
        return savedReport
      }
    } catch (error) {
      console.log('API save failed, using localStorage:', error)
    }

    // Fallback to localStorage
    const savedReport: SavedReport = {
      ...reportData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    this.saveToLocalStorage(savedReport)
    return savedReport
  }

  // Get reports for current user
  async getReports(userId: string): Promise<SavedReport[]> {
    try {
      // Try API first
      const response = await fetch('/api/reports?include_stats=false')
      if (response.ok) {
        const result = await response.json()
        return result.reports
      }
    } catch (error) {
      console.log('API fetch failed, using localStorage:', error)
    }

    // Fallback to localStorage
    return this.getFromLocalStorage(userId)
  }

  // Delete a report
  async deleteReport(reportId: string, userId: string): Promise<boolean> {
    try {
      // Try API first
      const response = await fetch(`/api/reports/${reportId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Also remove from localStorage
        this.deleteFromLocalStorage(reportId)
        return true
      }
    } catch (error) {
      console.log('API delete failed, using localStorage:', error)
    }

    // Fallback to localStorage
    this.deleteFromLocalStorage(reportId)
    return true
  }

  // Get report statistics
  getReportStats(reports: SavedReport[]): ReportStats {
    const totalReports = reports.length
    const premiumReports = reports.filter(r => r.reportType === 'premium').length
    const avgMatchScore = totalReports > 0 
      ? Math.round(reports.reduce((acc, r) => acc + r.segmentMatch.matchScore, 0) / totalReports)
      : 0

    return {
      totalReports,
      premiumReports,
      avgMatchScore
    }
  }

  // LocalStorage helper methods
  private saveToLocalStorage(report: SavedReport): void {
    try {
      const existingReports = this.getAllFromLocalStorage()
      const updatedReports = [...existingReports, report]
      localStorage.setItem(ReportsService.STORAGE_KEY, JSON.stringify(updatedReports))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  private getFromLocalStorage(userId: string): SavedReport[] {
    try {
      const allReports = this.getAllFromLocalStorage()
      return allReports.filter(report => report.userId === userId)
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return []
    }
  }

  private getAllFromLocalStorage(): SavedReport[] {
    try {
      const stored = localStorage.getItem(ReportsService.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Error parsing localStorage data:', error)
      return []
    }
  }

  private deleteFromLocalStorage(reportId: string): void {
    try {
      const allReports = this.getAllFromLocalStorage()
      const updatedReports = allReports.filter(report => report.id !== reportId)
      localStorage.setItem(ReportsService.STORAGE_KEY, JSON.stringify(updatedReports))
    } catch (error) {
      console.error('Error deleting from localStorage:', error)
    }
  }

  // Export/Import functionality
  exportReports(reports: SavedReport[]): string {
    return JSON.stringify(reports, null, 2)
  }

  importReports(jsonData: string, userId: string): SavedReport[] {
    try {
      const importedReports = JSON.parse(jsonData) as SavedReport[]
      
      // Update user IDs and timestamps for imported reports
      const updatedReports = importedReports.map(report => ({
        ...report,
        userId,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString()
      }))

      // Save to storage
      const existingReports = this.getAllFromLocalStorage()
      const allReports = [...existingReports, ...updatedReports]
      localStorage.setItem(ReportsService.STORAGE_KEY, JSON.stringify(allReports))

      return updatedReports
    } catch (error) {
      console.error('Error importing reports:', error)
      throw new Error('Invalid report data format')
    }
  }

  // Clear all reports for a user (useful for testing)
  async clearUserReports(userId: string): Promise<void> {
    try {
      const allReports = this.getAllFromLocalStorage()
      const otherUsersReports = allReports.filter(report => report.userId !== userId)
      localStorage.setItem(ReportsService.STORAGE_KEY, JSON.stringify(otherUsersReports))
    } catch (error) {
      console.error('Error clearing user reports:', error)
    }
  }
}

export const reportsService = new ReportsService()