# Persona Chat System - Production Implementation Guide

## Overview
This document outlines the steps to convert the current mock persona chat system into a fully functional AI-powered chat platform. The foundation is already built - this guide covers integrating real AI APIs and production features.

## Current State
✅ **Already Implemented:**
- Complete chat UI at `/src/app/personas/chat/[personaId]/page.tsx`
- Personality-based conversation system
- Psychographic data mapping to chat profiles
- System prompt generation based on persona traits
- Chat session management (frontend)
- Responsive design with animations
- Audio recording integration
- Navigation and reset functionality

## Production Implementation Steps

### 1. AI API Integration

#### Option A: OpenAI Integration
```typescript
// Add to /src/lib/openaiChatService.ts
import OpenAI from 'openai'

export class OpenAIChatService {
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }

  async generatePersonaResponse(
    systemPrompt: string,
    conversationHistory: ChatMessage[],
    userMessage: string
  ): Promise<string> {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map(msg => ({
        role: msg.role === 'persona' ? 'assistant' : 'user',
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ]

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      max_tokens: 500,
      temperature: 0.8
    })

    return response.choices[0]?.message?.content || 'I need a moment to think about that.'
  }
}
```

#### Option B: Claude Integration
```typescript
// Add to /src/lib/claudeChatService.ts
import Anthropic from '@anthropic-ai/sdk'

export class ClaudeChatService {
  private anthropic: Anthropic

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    })
  }

  async generatePersonaResponse(
    systemPrompt: string,
    conversationHistory: ChatMessage[],
    userMessage: string
  ): Promise<string> {
    const messages = conversationHistory.map(msg => ({
      role: msg.role === 'persona' ? 'assistant' : 'user',
      content: msg.content
    }))
    
    messages.push({ role: 'user', content: userMessage })

    const response = await this.anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      system: systemPrompt,
      messages,
      max_tokens: 500
    })

    return response.content[0]?.text || 'Let me think about that...'
  }
}
```

### 2. Database Schema

#### Prisma Schema Updates
```prisma
// Add to schema.prisma

model PersonaChatSession {
  id          String   @id @default(cuid())
  personaId   String
  userId      String
  startedAt   DateTime @default(now())
  lastActive  DateTime @updatedAt
  
  messages    PersonaChatMessage[]
  
  @@map("persona_chat_sessions")
}

model PersonaChatMessage {
  id        String   @id @default(cuid())
  sessionId String
  role      String   // 'user' or 'persona'
  content   String   @db.Text
  timestamp DateTime @default(now())
  
  session   PersonaChatSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  @@map("persona_chat_messages")
}

model PersonaProfile {
  id                String   @id @default(cuid())
  name              String
  userId            String
  baseSelection     Json
  customInputs      Json
  psychographics    Json
  generatedInsights Json
  profilePicture    Json?
  chatProfile       Json?    // Store computed chat personality
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  chatSessions      PersonaChatSession[]
  
  @@map("persona_profiles")
}
```

### 3. API Routes

#### Chat Message API
```typescript
// Create /src/app/api/personas/[personaId]/chat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { OpenAIChatService } from '@/lib/openaiChatService'
import { PersonaChatProfileGenerator, PersonaConversationEngine } from '@/lib/personaChatProfileGenerator'

export async function POST(
  request: NextRequest,
  { params }: { params: { personaId: string } }
) {
  try {
    const session = await getServerSession()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { message, sessionId } = await request.json()
    const personaId = params.personaId

    // Get persona data
    const persona = await prisma.personaProfile.findFirst({
      where: { id: personaId, userId: session.user.id }
    })

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 })
    }

    // Get or create chat session
    let chatSession = sessionId 
      ? await prisma.personaChatSession.findUnique({ where: { id: sessionId } })
      : null

    if (!chatSession) {
      chatSession = await prisma.personaChatSession.create({
        data: {
          personaId,
          userId: session.user.id
        }
      })
    }

    // Save user message
    await prisma.personaChatMessage.create({
      data: {
        sessionId: chatSession.id,
        role: 'user',
        content: message
      }
    })

    // Get conversation history
    const history = await prisma.personaChatMessage.findMany({
      where: { sessionId: chatSession.id },
      orderBy: { timestamp: 'asc' },
      take: 20 // Limit context
    })

    // Generate AI response
    const chatProfile = PersonaChatProfileGenerator.generateChatProfile(persona)
    const systemPrompt = PersonaConversationEngine.generateSystemPrompt(persona, chatProfile)
    
    const aiService = new OpenAIChatService()
    const response = await aiService.generatePersonaResponse(systemPrompt, history, message)

    // Save persona response
    const personaMessage = await prisma.personaChatMessage.create({
      data: {
        sessionId: chatSession.id,
        role: 'persona',
        content: response
      }
    })

    return NextResponse.json({
      sessionId: chatSession.id,
      message: personaMessage,
      response
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

### 4. Frontend Updates

#### Update Chat Component
```typescript
// Replace generatePersonaResponse function in /src/app/personas/chat/[personaId]/page.tsx

const generatePersonaResponse = async (userInput: string): Promise<string> => {
  if (!persona) throw new Error('No persona loaded')

  try {
    const response = await fetch(`/api/personas/${persona.id}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message: userInput,
        sessionId 
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get response')
    }

    const data = await response.json()
    
    // Update session ID if new
    if (!sessionId) {
      setSessionId(data.sessionId)
    }

    return data.response
  } catch (error) {
    console.error('Error generating response:', error)
    throw error
  }
}
```

### 5. Real-time Features (Optional)

#### WebSocket Integration
```typescript
// Add to /src/lib/websocket.ts
import { io, Socket } from 'socket.io-client'

export class ChatWebSocket {
  private socket: Socket

  constructor(sessionId: string) {
    this.socket = io('/chat', {
      query: { sessionId }
    })
  }

  onMessage(callback: (message: any) => void) {
    this.socket.on('message', callback)
  }

  sendMessage(message: string) {
    this.socket.emit('send_message', { message })
  }

  disconnect() {
    this.socket.disconnect()
  }
}
```

### 6. Environment Variables

Add to `.env.local`:
```bash
# AI Services
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# Database
DATABASE_URL=your_database_url_here
```

### 7. Error Handling & Rate Limiting

```typescript
// Add to /src/lib/rateLimiter.ts
import { RateLimiter } from 'limiter'

const chatLimiter = new RateLimiter({
  tokensPerInterval: 10, // 10 messages
  interval: 'minute'
})

export async function checkChatRateLimit(userId: string): Promise<boolean> {
  return await chatLimiter.removeTokens(1)
}
```

### 8. Testing Strategy

#### Unit Tests
- Test persona chat profile generation
- Test system prompt creation
- Test message persistence

#### Integration Tests
- Test full chat flow API
- Test AI service integration
- Test real-time features

#### E2E Tests
- Test complete user chat experience
- Test error handling scenarios

### 9. Performance Optimizations

#### Caching
```typescript
// Add Redis caching for frequent persona data
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export async function getCachedPersona(personaId: string) {
  const cached = await redis.get(`persona:${personaId}`)
  return cached ? JSON.parse(cached) : null
}
```

#### Message Streaming
```typescript
// For real-time response streaming
export async function streamPersonaResponse(
  systemPrompt: string,
  message: string,
  onChunk: (chunk: string) => void
) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ],
    stream: true
  })

  for await (const chunk of response) {
    const content = chunk.choices[0]?.delta?.content
    if (content) {
      onChunk(content)
    }
  }
}
```

### 10. Monitoring & Analytics

#### Track Chat Metrics
- Message count per session
- Average session duration
- Popular persona types
- User engagement patterns

#### Error Monitoring
- AI API failures
- Database connection issues
- Rate limit violations

## Deployment Checklist

- [ ] Set up production database with chat tables
- [ ] Configure AI API keys securely
- [ ] Set up Redis for caching (optional)
- [ ] Configure rate limiting
- [ ] Set up error monitoring (Sentry)
- [ ] Test AI integration thoroughly
- [ ] Deploy database migrations
- [ ] Monitor API costs and usage

## Cost Considerations

**OpenAI GPT-4:**
- ~$0.03 per 1k input tokens
- ~$0.06 per 1k output tokens
- Estimate: $0.10-0.30 per conversation

**Claude:**
- ~$0.015 per 1k input tokens
- ~$0.075 per 1k output tokens
- Estimate: $0.05-0.20 per conversation

**Recommendations:**
- Implement conversation length limits
- Use GPT-3.5-turbo for cost-effective option
- Cache system prompts
- Monitor usage patterns

## Notes

The current mock system in `generateMockResponse()` provides excellent fallback behavior and can be kept as a backup when AI services are unavailable. The personality-based response generation logic is already sophisticated and ready for AI integration.