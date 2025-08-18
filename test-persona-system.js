/**
 * Comprehensive Testing Script for Enhanced Persona System
 * Tests all components to ensure proper functionality
 */

const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-vercel-app.vercel.app' 
  : 'http://localhost:3001'

// Test data for different scenarios
const testScenarios = [
  {
    name: "Tech Community Persona",
    sources: [
      { type: "community", id: "4" }, // AI Enthusiasts
      { type: "segment", id: "LE1" }  // Creator Cult Leaders
    ],
    userInputs: {
      name: "Tech Maya",
      description: "An AI-enthusiastic creator",
      industry: "technology"
    },
    expectedTraits: ["innovative", "tech-savvy", "creative"]
  },
  {
    name: "Sustainable Living Persona", 
    sources: [
      { type: "community", id: "5" }, // Sustainable Living Advocates
      { type: "segment", id: "LE2" }  // Eco-Conscious Creators
    ],
    userInputs: {
      name: "Eco Alex",
      description: "Environmentally conscious creator",
      industry: "sustainability"
    },
    expectedTraits: ["sustainable", "conscious", "authentic"]
  },
  {
    name: "Custom Persona",
    sources: [
      { type: "community", id: "1" }, // Digital Art Collective
      { type: "community", id: "2" }  // Indie Game Developers
    ],
    userInputs: {
      name: "Creative Jordan",
      description: "Multi-creative professional",
      industry: "creative"
    },
    expectedTraits: ["creative", "artistic", "innovative"]
  }
]

/**
 * Test 1: Enhanced Persona Generation API
 */
async function testPersonaGeneration() {
  console.log('🧪 Testing Enhanced Persona Generation...\n')
  
  for (const scenario of testScenarios) {
    console.log(`📋 Testing: ${scenario.name}`)
    
    try {
      const response = await fetch(`${BASE_URL}/api/personas/enhanced`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Note: In real testing, you'd need proper auth headers
        },
        body: JSON.stringify({
          sources: scenario.sources,
          userInputs: scenario.userInputs
        })
      })
      
      if (!response.ok) {
        console.log(`   ❌ Failed: ${response.status} - ${response.statusText}`)
        const error = await response.text()
        console.log(`   Error: ${error}`)
        continue
      }
      
      const result = await response.json()
      
      // Validate response structure
      console.log(`   ✅ API Response: ${response.status}`)
      console.log(`   📊 Confidence: ${result.reliability?.confidenceScore || 'N/A'}`)
      console.log(`   🎯 Attributes: ${result.reliability?.attributeCompleteness || 'N/A'}`)
      
      // Check if expected traits are present
      const persona = result.persona
      const hasExpectedTraits = scenario.expectedTraits.some(trait => 
        persona?.personality?.some(p => p.toLowerCase().includes(trait.toLowerCase())) ||
        persona?.values?.some(v => v.toLowerCase().includes(trait.toLowerCase())) ||
        persona?.interests?.some(i => i.toLowerCase().includes(trait.toLowerCase()))
      )
      
      console.log(`   🎭 Expected traits found: ${hasExpectedTraits ? '✅' : '❌'}`)
      console.log(`   💬 Chat ready: ${persona?.chatPersonality ? '✅' : '❌'}`)
      console.log('')
      
    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}\n`)
    }
  }
}

/**
 * Test 2: Database Data Integrity
 */
async function testDatabaseIntegrity() {
  console.log('🧪 Testing Database Data Integrity...\n')
  
  const endpoints = [
    { name: 'Segments', url: '/api/segments' },
    { name: 'Communities', url: '/api/communities' },
    { name: 'Categories', url: '/api/categories' }
  ]
  
  for (const endpoint of endpoints) {
    try {
      console.log(`📋 Testing: ${endpoint.name}`)
      
      const response = await fetch(`${BASE_URL}${endpoint.url}`)
      
      if (!response.ok) {
        console.log(`   ❌ Failed: ${response.status}`)
        continue
      }
      
      const data = await response.json()
      const items = data.segments || data.communities || data.categories || data
      
      console.log(`   ✅ Response: ${response.status}`)
      console.log(`   📊 Count: ${Array.isArray(items) ? items.length : 'N/A'}`)
      console.log(`   🔍 Sample: ${items[0]?.name || 'No data'}`)
      console.log('')
      
    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}\n`)
    }
  }
}

/**
 * Test 3: Persona Validation
 */
async function testPersonaValidation() {
  console.log('🧪 Testing Persona Validation...\n')
  
  // Test validation with different quality personas
  const validationTests = [
    {
      name: "Complete Persona",
      persona: {
        name: "Test Persona",
        values: ["innovation", "quality", "community"],
        personality: ["creative", "analytical", "social"],
        interests: ["technology", "design", "trends"],
        painPoints: ["time constraints", "decision fatigue"],
        goals: ["stay informed", "connect with others"],
        chatPersonality: {
          communicationStyle: {
            formality: "balanced",
            enthusiasm: "high",
            directness: "direct",
            empathy: "empathetic"
          },
          decisionMaking: {
            speed: "deliberate",
            riskTolerance: "balanced",
            informationNeed: "detailed"
          }
        },
        confidence: 0.85
      },
      expectedValid: true
    },
    {
      name: "Incomplete Persona",
      persona: {
        name: "Incomplete Test",
        values: ["quality"],
        personality: [],
        interests: ["technology"],
        confidence: 0.3
      },
      expectedValid: false
    }
  ]
  
  // Import validation locally since it's a client-side function
  try {
    const { PersonaValidationService } = await import('./src/lib/personaValidation')
    
    for (const test of validationTests) {
      console.log(`📋 Testing: ${test.name}`)
      
      const result = PersonaValidationService.validatePersona(test.persona)
      
      console.log(`   ✅ Validation ran successfully`)
      console.log(`   📊 Valid: ${result.isValid} (expected: ${test.expectedValid})`)
      console.log(`   🎯 Reliability: ${result.reliabilityScore.toFixed(2)}`)
      console.log(`   ⚠️  Issues: ${result.issues.length}`)
      console.log(`   💡 Recommendations: ${result.recommendations.length}`)
      
      const validationPassed = result.isValid === test.expectedValid
      console.log(`   🧪 Test result: ${validationPassed ? '✅ PASS' : '❌ FAIL'}`)
      console.log('')
    }
    
  } catch (error) {
    console.log(`   ❌ Validation test failed: ${error.message}\n`)
  }
}

/**
 * Test 4: Platform Consistency
 */
async function testPlatformConsistency() {
  console.log('🧪 Testing Platform Consistency...\n')
  
  try {
    console.log('📋 Testing: Community Platform Data')
    
    const response = await fetch(`${BASE_URL}/api/communities`)
    
    if (!response.ok) {
      console.log(`   ❌ Failed to fetch communities: ${response.status}`)
      return
    }
    
    const data = await response.json()
    const communities = data.communities || data
    
    if (!Array.isArray(communities) || communities.length === 0) {
      console.log(`   ❌ No communities data found`)
      return
    }
    
    const supportedPlatforms = ['reddit', 'tiktok', 'instagram', 'youtube', 'discord']
    let invalidPlatforms = []
    let totalPlatformReferences = 0
    
    communities.forEach(community => {
      if (community.platform_presence && Array.isArray(community.platform_presence)) {
        totalPlatformReferences += community.platform_presence.length
        
        community.platform_presence.forEach(platform => {
          if (!supportedPlatforms.includes(platform.toLowerCase())) {
            invalidPlatforms.push({
              community: community.name,
              platform: platform
            })
          }
        })
      }
    })
    
    console.log(`   ✅ Communities checked: ${communities.length}`)
    console.log(`   📊 Platform references: ${totalPlatformReferences}`)
    console.log(`   ❌ Invalid platforms: ${invalidPlatforms.length}`)
    
    if (invalidPlatforms.length > 0) {
      console.log(`   🚨 Invalid platform examples:`)
      invalidPlatforms.slice(0, 3).forEach(item => {
        console.log(`     - ${item.community}: ${item.platform}`)
      })
    } else {
      console.log(`   ✅ All platforms are valid!`)
    }
    console.log('')
    
  } catch (error) {
    console.log(`   ❌ Platform consistency test failed: ${error.message}\n`)
  }
}

/**
 * Test 5: Chat Personality Generation
 */
async function testChatPersonality() {
  console.log('🧪 Testing Chat Personality Generation...\n')
  
  try {
    // Import the chat profile generator
    const { PersonaChatProfileGenerator } = await import('./src/lib/personaChatProfileGenerator')
    
    const testPersona = {
      name: "Test Persona",
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
        values: ["innovation", "community", "sustainability"],
        personality: ["creative", "social", "adventurous"],
        interests: ["technology", "environment", "design"],
        painPoints: ["time constraints", "information overload"],
        goals: ["make impact", "stay current", "connect with others"]
      }
    }
    
    console.log('📋 Testing: Chat Profile Generation')
    
    const chatProfile = PersonaChatProfileGenerator.generateChatProfile(testPersona)
    
    console.log(`   ✅ Chat profile generated successfully`)
    console.log(`   💬 Communication style: ${chatProfile.communicationStyle?.formality} / ${chatProfile.communicationStyle?.enthusiasm}`)
    console.log(`   🧠 Decision making: ${chatProfile.decisionMaking?.speed} / ${chatProfile.decisionMaking?.riskTolerance}`)
    console.log(`   👥 Social behavior: ${chatProfile.socialBehavior?.groupOrientation}`)
    console.log(`   🎯 Topics: ${chatProfile.conversationPreferences?.preferredTopics?.length || 0}`)
    console.log(`   😊 Emotions: ${chatProfile.emotionalProfile?.primaryEmotions?.length || 0}`)
    console.log('')
    
  } catch (error) {
    console.log(`   ❌ Chat personality test failed: ${error.message}\n`)
  }
}

/**
 * Main test runner
 */
async function runAllTests() {
  console.log('🚀 Starting Enhanced Persona System Tests')
  console.log('=' * 50)
  console.log('')
  
  // Test 1: API Generation (requires authentication in production)
  await testPersonaGeneration()
  
  // Test 2: Database integrity
  await testDatabaseIntegrity()
  
  // Test 3: Validation logic
  await testPersonaValidation()
  
  // Test 4: Platform consistency
  await testPlatformConsistency()
  
  // Test 5: Chat personality
  await testChatPersonality()
  
  console.log('🏁 All tests completed!')
  console.log('=' * 50)
}

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    runAllTests,
    testPersonaGeneration,
    testDatabaseIntegrity,
    testPersonaValidation,
    testPlatformConsistency,
    testChatPersonality
  }
} else {
  // Run if called directly
  runAllTests().catch(console.error)
}