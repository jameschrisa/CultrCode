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
    const { DatabaseFactory } = await import('@/lib/database-factory')
    
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
    
    // Save to database with full attribution
    const db = DatabaseFactory.getInstance()
    const personaId = await savePersonaWithAttribution(db, userId, personaRecord, attributeMappings)
    
    // Return created persona with metadata
    const createdPersona = await getPersonaWithAttribution(db, personaId)
    
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
  const { DatabaseFactory } = await import('@/lib/database-factory')
  const db = DatabaseFactory.getInstance()
  
  const enrichedSources = []
  
  for (const source of sources) {
    let sourceData = null
    
    try {
      switch (source.type) {
        case 'segment':
          const segmentResult = await db.query(
            'SELECT * FROM audience_segments WHERE id = $1',
            [source.id]
          )
          if (segmentResult.rows.length > 0) {
            sourceData = segmentResult.rows[0]
          }
          break
          
        case 'community':
          const communityResult = await db.query(
            'SELECT c.*, cat.name as category_name FROM communities c LEFT JOIN categories cat ON c.category_id = cat.id WHERE c.id = $1',
            [source.id]
          )
          if (communityResult.rows.length > 0) {
            sourceData = communityResult.rows[0]
          }
          break
          
        case 'trend':
          const trendResult = await db.query(
            'SELECT * FROM trending_topics WHERE id = $1',
            [source.id]
          )
          if (trendResult.rows.length > 0) {
            sourceData = trendResult.rows[0]
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
 * Save persona with full source attribution tracking
 */
async function savePersonaWithAttribution(db: any, userId: string, persona: any, attributeMappings: any[]) {
  const client = await db.getClient()
  
  try {
    await client.query('BEGIN')
    
    // Insert main persona record
    const personaInsert = await client.query(`
      INSERT INTO personas (
        user_id, name, description, source_type, source_id, 
        demographics, psychographics, interests, goals, challenges,
        personality_traits, communication_style, behavioral_patterns,
        chat_personality_profile, confidence_score, metadata
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING id
    `, [
      userId,
      persona.name,
      persona.description,
      persona.baseType,
      persona.sourceId,
      JSON.stringify(persona.demographics),
      JSON.stringify(persona.psychographics),
      JSON.stringify(persona.interests),
      JSON.stringify(persona.goals),
      JSON.stringify(persona.painPoints),
      JSON.stringify(persona.personality),
      JSON.stringify(persona.chatPersonality?.communicationStyle || {}),
      JSON.stringify(persona.chatPersonality?.socialBehavior || {}),
      JSON.stringify(persona.chatPersonality),
      persona.confidence,
      JSON.stringify({
        values: persona.values,
        communicationChannels: persona.communicationChannels,
        buyingMotivations: persona.buyingMotivations,
        createdAt: persona.createdAt,
        chatEnabled: persona.chatEnabled
      })
    ])
    
    const personaId = personaInsert.rows[0].id
    
    // Insert attribute mappings
    for (const mapping of attributeMappings) {
      await client.query(`
        INSERT INTO persona_attribute_mappings (
          persona_id, source_type, source_id, attribute_type,
          attribute_value, influence_weight, confidence
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        personaId,
        mapping.sourceType,
        mapping.sourceId,
        mapping.attributeType,
        mapping.attributeValue,
        mapping.influenceWeight,
        mapping.confidence
      ])
    }
    
    // Initialize quality metrics
    await client.query(`
      INSERT INTO persona_quality_metrics (
        persona_id, consistency_score, authenticity_score,
        engagement_score, accuracy_score
      ) VALUES ($1, $2, $3, $4, $5)
    `, [personaId, 0.8, 0.8, 0.8, 0.8])
    
    await client.query('COMMIT')
    return personaId
    
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}

/**
 * Get persona with attribution data
 */
async function getPersonaWithAttribution(db: any, personaId: string) {
  const personaResult = await db.query(`
    SELECT 
      p.*,
      qm.consistency_score,
      qm.authenticity_score,
      qm.engagement_score,
      qm.accuracy_score,
      qm.user_satisfaction_score
    FROM personas p
    LEFT JOIN persona_quality_metrics qm ON p.id = qm.persona_id
    WHERE p.id = $1
  `, [personaId])
  
  if (personaResult.rows.length === 0) {
    throw new Error('Persona not found after creation')
  }
  
  const persona = personaResult.rows[0]
  
  // Get attribute mappings
  const attributesResult = await db.query(`
    SELECT * FROM persona_attribute_mappings 
    WHERE persona_id = $1
    ORDER BY influence_weight DESC
  `, [personaId])
  
  return {
    ...persona,
    attributeMappings: attributesResult.rows
  }
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