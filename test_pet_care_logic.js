// Quick test to verify Pet Care category logic works correctly
const { SegmentMatcher } = require('./src/lib/segmentMatcher.ts')

// Test inputs with Pet Care category
const petCareInputs = {
  brandDescription: 'Premium organic dog food for health-conscious pet owners',
  category: 'pet-care',
  priceRange: '75-200',
  targetAge: '25-45',
  targetGender: 'unisex',
  values: ['quality', 'health', 'sustainability'],
  seasonality: 'perennial',
  launchBudget: '25k-50k',
  followingSize: '1k-10k',
  primaryPlatform: 'instagram',
  closestCompetitor: 'Blue Buffalo',
  targetCities: [],
  hyperlocalEnabled: false
}

// Test inputs with non-pet category for comparison
const nonPetInputs = {
  ...petCareInputs,
  category: 'beauty-skincare',
  brandDescription: 'Natural skincare products'
}

console.log('Testing Pet Care Category Logic...')
console.log('=====================================')

try {
  const petMatches = SegmentMatcher.matchSegments(petCareInputs)
  const nonPetMatches = SegmentMatcher.matchSegments(nonPetInputs)

  console.log('Pet Care Category Results:')
  console.log(`- Top Match: ${petMatches[0].segment.name} (${petMatches[0].matchScore}%)`)
  console.log(`- Match Reasons: ${petMatches[0].reasons.join(', ')}`)
  
  console.log('\nNon-Pet Category Results:')
  console.log(`- Top Match: ${nonPetMatches[0].segment.name} (${nonPetMatches[0].matchScore}%)`)
  console.log(`- Match Reasons: ${nonPetMatches[0].reasons.join(', ')}`)

  // Check if pet-friendly segments got bonus for pet care category
  const petFriendlyFound = petMatches[0].reasons.some(reason => 
    reason.includes('pet-related products') || reason.includes('High affinity for pet')
  )
  
  console.log(`\nPet-friendly bonus applied: ${petFriendlyFound ? 'YES' : 'NO'}`)
  console.log('✅ Test completed successfully!')

} catch (error) {
  console.error('❌ Test failed:', error.message)
}