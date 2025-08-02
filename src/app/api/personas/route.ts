import { NextRequest, NextResponse } from 'next/server'
import { PersonaDatabase } from '@/lib/personaDatabase'
import { PersonaData } from '@/types/personas'
import { initializeSeedData } from '@/lib/seedData'

// GET /api/personas - Get all personas for the authenticated user
export async function GET(request: NextRequest) {
  try {
    // Initialize seed data if needed
    await initializeSeedData()
    
    // For demo purposes, use a default user ID
    // In production, this would come from session authentication
    const userId = 'demo-user'
    
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
    // For demo purposes, use a default user ID
    // In production, this would come from session authentication
    const userId = 'demo-user'

    const personaData: PersonaData = await request.json()

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