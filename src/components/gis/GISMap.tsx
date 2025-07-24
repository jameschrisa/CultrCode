// Placeholder component for GIS Map
// Mapbox integration is disabled until proper API token is configured

interface GISMapProps {
  height?: string
  showControls?: boolean
  zipCodeData?: any[]
}

export function GISMap({ height = '500px' }: GISMapProps) {
  return (
    <div className="w-full bg-primary-800 rounded-lg border border-primary-600 flex items-center justify-center" style={{ height }}>
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-primary-200 mb-2">Interactive Map Coming Soon</h4>
        <p className="text-sm text-primary-400 max-w-md mx-auto leading-relaxed">
          Geographic visualization will be available once Mapbox integration is configured. 
          This will show customer density heat maps and ZIP code demographics.
        </p>
      </div>
    </div>
  )
}