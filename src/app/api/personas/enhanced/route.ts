import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Enhanced Persona API Route
 * Handles creation of personas with full source attribution and quality tracking
 */

// POST /api/personas/enhanced - Create persona with source attribution
export async function POST(request: NextRequest) {
  try {
    const { EnhancedPersonaGenerator } = await import('@/lib/enhancedPersonaGenerator')
    const { ReliablePersonaService } = await import('@/lib/reliablePersonaService')
    const { auth } = await import('@clerk/nextjs/server')
    const { getCommunityDatabase } = await import('@/lib/database-factory')
    
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { sources, userInputs, psychographicOverrides } = body

    // Validate inputs
    if (!sources || !Array.isArray(sources) || sources.length === 0) {
      return NextResponse.json({ 
        error: 'At least one source (segment, community, or trend) is required' 
      }, { status: 400 })
    }

    // Fetch source data from database
    const enrichedSources = await enrichSourcesWithData(sources)
    
    // Generate comprehensive persona using enhanced generator
    const personaRecord = await EnhancedPersonaGenerator.generatePersona(
      enrichedSources,
      userInputs || {},
      psychographicOverrides || {}
    )
    
    // Create attribute mappings for tracking
    const attributeMappings = await EnhancedPersonaGenerator.createAttributeMappings(
      enrichedSources,
      personaRecord
    )
    
    // For now, save using the existing persona service
    // TODO: Implement full attribution tracking when database schema is deployed
    const personaId = await ReliablePersonaService.savePersona(userId, personaRecord, attributeMappings)
    
    // Return created persona with metadata
    const createdPersona = await ReliablePersonaService.getPersona(personaId)
    
    return NextResponse.json({ 
      success: true, 
      persona: createdPersona,
      attributions: attributeMappings,
      reliability: {
        confidenceScore: personaRecord.confidence,
        sourceQuality: enrichedSources.length,
        attributeCompleteness: calculateAttributeCompleteness(personaRecord)
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating enhanced persona:', error)
    return NextResponse.json({ 
      error: 'Failed to create persona',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

/**
 * Enrich source references with actual data from database
 */
async function enrichSourcesWithData(sources: any[]) {
  const { getCommunityDatabase } = await import('@/lib/database-factory')
  const db = await getCommunityDatabase()
  
  const enrichedSources = []
  
  for (const source of sources) {
    let sourceData = null
    
    try {
      switch (source.type) {
        case 'segment':
          sourceData = await db.getSegmentById(parseInt(source.id))
          break
          
        case 'community':
          sourceData = await db.getCommunityById(parseInt(source.id))
          break
          
        case 'trend':
          // For trends, we'll need to use the trending topics API
          // For now, create a mock trend data structure
          sourceData = {
            id: source.id,
            name: `Trend ${source.id}`,
            category: 'general',
            status: 'growing',
            platforms: ['instagram', 'tiktok'],
            keywords: ['trending', 'popular']
          }
          break
      }
      
      if (sourceData) {
        enrichedSources.push({
          type: source.type,
          id: source.id,
          data: sourceData
        })
      }
    } catch (error) {
      console.error(`Error fetching ${source.type} data:`, error)
      // Continue with other sources even if one fails
    }
  }
  
  return enrichedSources
}


/**
 * Calculate how complete the persona attributes are
 */
function calculateAttributeCompleteness(persona: any): number {
  const requiredFields = [
    'values', 'personality', 'interests', 'painPoints', 
    'goals', 'communicationChannels', 'buyingMotivations'
  ]
  
  let completeness = 0
  for (const field of requiredFields) {
    if (persona[field] && Array.isArray(persona[field]) && persona[field].length > 0) {
      completeness += 1
    }
  }
  
  return completeness / requiredFields.length
}