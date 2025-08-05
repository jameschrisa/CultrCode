import { NextRequest, NextResponse } from 'next/server'

// Mark this route as dynamic to prevent build-time execution
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/personas - Get all personas for the authenticated user
export async function GET(request: NextRequest) {
  try {
    // Dynamically import to prevent build-time execution
    const { PersonaDatabase } = await import('@/lib/personaDatabase')
    const { initializeSeedData } = await import('@/lib/seedData')
    const { auth } = await import('@clerk/nextjs/server')
    
    // Initialize seed data if needed
    await initializeSeedData()
    
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const personas = await PersonaDatabase.getUserPersonas(userId)
    return NextResponse.json({ personas })

  } catch (error) {
    console.error('Error fetching personas:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/personas - Create a new persona
export async function POST(request: NextRequest) {
  try {
    // Dynamically import to prevent build-time execution
    const { PersonaDatabase } = await import('@/lib/personaDatabase')
    const { PersonaData } = await import('@/types/personas')
    const { auth } = await import('@clerk/nextjs/server')
    
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const personaData = body.persona || body

    // Validate required fields
    if (!personaData.name || !personaData.baseSelection?.type) {
      return NextResponse.json({ 
        error: 'Name and base selection are required' 
      }, { status: 400 })
    }

    // Save persona to database
    const personaId = await PersonaDatabase.savePersona(userId, personaData)
    
    // Return the created persona
    const createdPersona = await PersonaDatabase.getPersona(personaId)
    return NextResponse.json({ 
      success: true, 
      persona: createdPersona 
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating persona:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}