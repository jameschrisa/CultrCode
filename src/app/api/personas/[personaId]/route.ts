import { NextRequest, NextResponse } from 'next/server'
import { PersonaDatabase } from '@/lib/personaDatabase'
import { PersonaDBRecord } from '@/types/personas'
import { initializeSeedData } from '@/lib/seedData'
import { auth } from '@clerk/nextjs/server'

// GET /api/personas/[personaId] - Get a specific persona
export async function GET(
  request: NextRequest,
  { params }: { params: { personaId: string } }
) {
  try {
    // Initialize seed data if needed
    await initializeSeedData()
    
    const personaId = params.personaId
    const persona = await PersonaDatabase.getPersona(personaId)

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 })
    }

    // For demo purposes, skip ownership verification
    // In production, verify that persona.userId matches userId

    return NextResponse.json({ persona })
  } catch (error) {
    console.error('Error fetching persona:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/personas/[personaId] - Update a persona
export async function PUT(
  request: NextRequest,
  { params }: { params: { personaId: string } }
) {
  try {
    const personaId = params.personaId
    const updateData = await request.json()

    // Validate required fields
    if (!updateData.name || !updateData.description) {
      return NextResponse.json({ 
        error: 'Name and description are required' 
      }, { status: 400 })
    }

    // Get existing persona
    const existingPersona = await PersonaDatabase.getPersona(personaId)
    if (!existingPersona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 })
    }

    // For demo purposes, skip ownership verification
    // In production, verify that existingPersona.userId matches userId

    // Prepare update data
    const updates: Partial<PersonaDBRecord> = {
      name: updateData.name,
      description: updateData.description,
      values: updateData.values || existingPersona.values,
      personality: updateData.personality || existingPersona.personality,
      interests: updateData.interests || existingPersona.interests,
      painPoints: updateData.painPoints || existingPersona.painPoints,
      goals: updateData.goals || existingPersona.goals,
      demographics: {
        ...existingPersona.demographics,
        ...(updateData.demographics || {})
      },
      psychographics: {
        ...existingPersona.psychographics,
        ...(updateData.psychographics || {})
      },
      lastModified: new Date().toISOString()
    }

    // Update persona in database
    const success = await PersonaDatabase.updatePersona(personaId, updates)
    
    if (!success) {
      return NextResponse.json({ 
        error: 'Failed to update persona' 
      }, { status: 500 })
    }

    // Return updated persona
    const updatedPersona = await PersonaDatabase.getPersona(personaId)
    return NextResponse.json({ 
      success: true, 
      persona: updatedPersona 
    })

  } catch (error) {
    console.error('Error updating persona:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/personas/[personaId] - Delete a persona
export async function DELETE(
  request: NextRequest,
  { params }: { params: { personaId: string } }
) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const personaId = params.personaId

    // Get existing persona to verify ownership
    const existingPersona = await PersonaDatabase.getPersona(personaId)
    if (!existingPersona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 })
    }

    if (existingPersona.userId !== userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Delete persona
    const success = await PersonaDatabase.deletePersona(personaId)
    
    if (!success) {
      return NextResponse.json({ 
        error: 'Failed to delete persona' 
      }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error deleting persona:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}