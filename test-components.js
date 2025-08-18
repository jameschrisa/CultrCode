/**
 * Local Component Testing Script
 * Tests individual components without requiring database setup
 */

console.log('🚀 Starting Enhanced Persona Components Testing')
console.log('=' .repeat(50))
console.log('')

/**
 * Test 1: Enhanced Persona Generator Logic
 */
async function testEnhancedGenerator() {
  console.log('🧪 Testing Enhanced Persona Generator...\n')
  
  try {
    const { EnhancedPersonaGenerator } = await import('./src/lib/enhancedPersonaGenerator.js')
    
    // Test data
    const mockSources = [
      {
        type: 'community',
        id: '1',
        data: {
          name: 'AI Enthusiasts',
          category: 'tech',
          platform_presence: ['reddit', 'discord'],
          engagement_level: 'very_high',
          characteristics: {
            values: ['innovation', 'creativity', 'learning'],
            interests: ['artificial intelligence', 'machine learning', 'technology'],
            behaviors: [{ spendingPower: 'medium', digitalBehavior: 'heavy' }]
          }
        }
      },
      {
        type: 'segment',
        id: '2',
        data: {
          name: 'Tech Leaders',
          description: 'Innovative professionals leading technology adoption and creative problem solving',
          demographics: { ageRange: '28-42', education: 'Masters+' },
          psychographics: {
            values: ['innovation', 'efficiency', 'quality'],
            interests: ['technology', 'leadership', 'strategy']
          }
        }
      }
    ]
    
    const userInputs = {
      name: 'Tech Maya',
      description: 'An AI-enthusiastic tech professional',
      industry: 'technology'
    }
    
    console.log('📋 Testing: Persona Generation from Multiple Sources')
    
    const persona = await EnhancedPersonaGenerator.generatePersona(
      mockSources,
      userInputs,
      { innovationAdoption: 5, belongingNeed: 4 }
    )
    
    console.log('   ✅ Persona generated successfully')
    console.log(`   👤 Name: ${persona.name}`)
    console.log(`   🎯 Values: ${persona.values?.slice(0, 3).join(', ')}`)
    console.log(`   🎭 Personality: ${persona.personality?.slice(0, 3).join(', ')}`)
    console.log(`   💚 Interests: ${persona.interests?.slice(0, 3).join(', ')}`)
    console.log(`   📊 Confidence: ${(persona.confidence * 100).toFixed(1)}%`)
    console.log(`   💬 Chat Ready: ${persona.chatPersonality ? '✅' : '❌'}`)
    
    if (persona.chatPersonality) {
      console.log(`   🗣️  Communication: ${persona.chatPersonality.communicationStyle?.formality}/${persona.chatPersonality.communicationStyle?.enthusiasm}`)
      console.log(`   🧠 Decision Making: ${persona.chatPersonality.decisionMaking?.speed}/${persona.chatPersonality.decisionMaking?.riskTolerance}`)
    }
    
    console.log('')
    
    // Test attribute mappings
    console.log('📋 Testing: Attribute Mappings')
    const mappings = EnhancedPersonaGenerator.createAttributeMappings(mockSources, persona)
    console.log(`   ✅ Created ${mappings.length} attribute mappings`)
    console.log(`   📊 Value mappings: ${mappings.filter(m => m.attributeType === 'value').length}`)
    console.log(`   🎯 Interest mappings: ${mappings.filter(m => m.attributeType === 'interest').length}`)
    console.log(`   🎭 Personality mappings: ${mappings.filter(m => m.attributeType === 'personality').length}`)
    console.log('')
    
  } catch (error) {
    console.log(`   ❌ Test failed: ${error.message}`)
    if (error.stack) {
      console.log(`   🔍 Stack: ${error.stack.split('\n').slice(0, 3).join('\n')}`)
    }
    console.log('')
  }
}

/**
 * Test 2: Persona Validation Service
 */
async function testValidation() {
  console.log('🧪 Testing Persona Validation...\n')
  
  try {
    const { PersonaValidationService } = await import('./src/lib/personaValidation.js')
    
    const testPersonas = [
      {
        name: 'Complete Test Persona',
        values: ['innovation', 'quality', 'community'],
        personality: ['creative', 'analytical', 'social'],
        interests: ['technology', 'design', 'trends'],
        painPoints: ['time constraints', 'decision fatigue'],
        goals: ['stay informed', 'connect with others'],
        chatPersonality: {
          communicationStyle: { formality: 'balanced', enthusiasm: 'high' },
          decisionMaking: { speed: 'deliberate', riskTolerance: 'balanced' }
        },
        confidence: 0.85
      },
      {
        name: 'Incomplete Test Persona',
        values: ['quality'],
        personality: [],
        interests: ['technology'],
        confidence: 0.3
      }
    ]
    
    for (const [index, persona] of testPersonas.entries()) {
      console.log(`📋 Testing: ${persona.name}`)
      
      const validation = PersonaValidationService.validatePersona(persona)
      
      console.log(`   ✅ Validation completed`)
      console.log(`   📊 Valid: ${validation.isValid}`)
      console.log(`   🎯 Reliability Score: ${validation.reliabilityScore.toFixed(2)}`)
      console.log(`   ⚠️  Issues: ${validation.issues.length}`)
      console.log(`   💡 Recommendations: ${validation.recommendations.length}`)
      
      if (validation.issues.length > 0) {
        console.log(`   🚨 Sample Issue: ${validation.issues[0]}`)
      }
      
      console.log('')
    }
    
  } catch (error) {
    console.log(`   ❌ Validation test failed: ${error.message}`)
    console.log('')
  }
}

/**
 * Test 3: Chat Personality Generation
 */
async function testChatPersonality() {
  console.log('🧪 Testing Chat Personality Generation...\n')
  
  try {
    const { PersonaChatProfileGenerator } = await import('./src/lib/personaChatProfileGenerator.js')
    
    const testPersona = {
      name: 'Test Persona',
      psychographics: {
        sustainabilityImportance: 4,
        convenienceOrientation: 3,
        luxuryAffinity: 2,
        adventurousness: 4,
        brandLoyalty: 3,
        prestigeSeeking: 2,
        belongingNeed: 4,
        riskTolerance: 3,
        innovationAdoption: 4,
        emotionalDriver: 4,
        nostalgiaInfluence: 2,
        priceSensitivity: 3,
        researchDepth: 3,
        socialMediaInfluence: 3,
        expertOpinionValue: 3
      },
      generatedInsights: {
        values: ['innovation', 'community', 'sustainability'],
        personality: ['creative', 'social', 'adventurous'],
        interests: ['technology', 'environment', 'design'],
        painPoints: ['time constraints', 'information overload'],
        goals: ['make impact', 'stay current', 'connect with others']
      }
    }
    
    console.log('📋 Testing: Chat Profile Generation')
    
    const chatProfile = PersonaChatProfileGenerator.generateChatProfile(testPersona)
    
    console.log('   ✅ Chat profile generated successfully')
    console.log(`   💬 Communication Style:`)
    console.log(`     - Formality: ${chatProfile.communicationStyle?.formality}`)
    console.log(`     - Enthusiasm: ${chatProfile.communicationStyle?.enthusiasm}`)
    console.log(`     - Directness: ${chatProfile.communicationStyle?.directness}`)
    console.log(`     - Empathy: ${chatProfile.communicationStyle?.empathy}`)
    
    console.log(`   🧠 Decision Making:`)
    console.log(`     - Speed: ${chatProfile.decisionMaking?.speed}`)
    console.log(`     - Risk Tolerance: ${chatProfile.decisionMaking?.riskTolerance}`)
    console.log(`     - Information Need: ${chatProfile.decisionMaking?.informationNeed}`)
    
    console.log(`   👥 Social Behavior:`)
    console.log(`     - Group Orientation: ${chatProfile.socialBehavior?.groupOrientation}`)
    console.log(`     - Influence Receptivity: ${chatProfile.socialBehavior?.influenceReceptivity}`)
    
    console.log(`   🎯 Conversation Preferences:`)
    console.log(`     - Preferred Topics: ${chatProfile.conversationPreferences?.preferredTopics?.slice(0, 3).join(', ')}`)
    console.log(`     - Curiosity Level: ${chatProfile.conversationPreferences?.curiosityLevel}`)
    
    console.log(`   😊 Emotional Profile:`)
    console.log(`     - Primary Emotions: ${chatProfile.emotionalProfile?.primaryEmotions?.slice(0, 3).join(', ')}`)
    
    console.log('')
    
  } catch (error) {
    console.log(`   ❌ Chat personality test failed: ${error.message}`)
    if (error.stack) {
      console.log(`   🔍 Stack: ${error.stack.split('\n').slice(0, 3).join('\n')}`)
    }
    console.log('')
  }
}

/**
 * Test 4: Platform Consistency Check
 */
function testPlatformConsistency() {
  console.log('🧪 Testing Platform Consistency...\n')
  
  console.log('📋 Testing: Supported Platforms')
  
  const supportedPlatforms = ['reddit', 'tiktok', 'instagram', 'youtube', 'discord']
  console.log(`   ✅ Supported platforms: ${supportedPlatforms.join(', ')}`)
  
  // Test platform validation
  const testPlatforms = ['reddit', 'facebook', 'tiktok', 'twitter', 'discord']
  const invalidPlatforms = testPlatforms.filter(p => !supportedPlatforms.includes(p))
  
  console.log(`   📊 Test platforms: ${testPlatforms.join(', ')}`)
  console.log(`   ❌ Invalid platforms detected: ${invalidPlatforms.length} (${invalidPlatforms.join(', ')})`)
  console.log(`   ✅ Platform validation: ${invalidPlatforms.length === 2 ? 'PASS' : 'FAIL'}`)
  console.log('')
}

/**
 * Main test runner
 */
async function runComponentTests() {
  console.log('')
  
  // Test 1: Enhanced Generator
  await testEnhancedGenerator()
  
  // Test 2: Validation
  await testValidation()
  
  // Test 3: Chat Personality
  await testChatPersonality()
  
  // Test 4: Platform Consistency
  testPlatformConsistency()
  
  console.log('🏁 Component tests completed!')
  console.log('=' .repeat(50))
}

// Run the tests
runComponentTests().catch(console.error)