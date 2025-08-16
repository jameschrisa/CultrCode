import { 
  CrossReference, 
  CrossReferenceType, 
  RelationshipType,
  EntityReference 
} from '@/types/segments'

export const crossReferences: CrossReference[] = [
  // Segment-Community Cross-References
  {
    id: 'xref-001',
    type: 'segment-community',
    entity1: { id: 'segment-tech-innovators', type: 'segment', name: 'Tech Innovators' },
    entity2: { id: 'mc-tech-bros', type: 'community', name: 'Tech Bros' },
    relationship: 'dominates',
    strength: 95,
    bidirectional: true,
    metadata: {
      confidence: 95,
      lastUpdated: '2024-07-01',
      source: 'platform_analysis',
      validFrom: '2024-01-01',
      tags: ['silicon-valley', 'startup-culture', 'reddit'],
      notes: 'Strong overlap between tech segment and tech bros community, especially in SF Bay Area'
    }
  },
  {
    id: 'xref-002',
    type: 'segment-community',
    entity1: { id: 'segment-wellness-enthusiasts', type: 'segment', name: 'Wellness Enthusiasts' },
    entity2: { id: 'mc-wellness-girlies', type: 'community', name: 'Wellness Girlies' },
    relationship: 'dominates',
    strength: 90,
    bidirectional: true,
    metadata: {
      confidence: 92,
      lastUpdated: '2024-07-01',
      source: 'social_listening',
      validFrom: '2023-06-01',
      tags: ['self-care', 'instagram', 'millennial-women'],
      notes: 'Primary driver of wellness segment engagement, particularly skincare and morning routines'
    }
  },
  {
    id: 'xref-003',
    type: 'segment-community',
    entity1: { id: 'segment-creative-elites', type: 'segment', name: 'Creative Elites' },
    entity2: { id: 'mc-coastal-grandma', type: 'community', name: 'Coastal Grandma' },
    relationship: 'influences',
    strength: 75,
    bidirectional: false,
    metadata: {
      confidence: 85,
      lastUpdated: '2024-07-01',
      source: 'trend_analysis',
      validFrom: '2023-03-01',
      tags: ['aesthetic', 'lifestyle', 'nancy-meyers'],
      notes: 'Creative professionals drive adoption of coastal grandma aesthetic'
    }
  },
  {
    id: 'xref-004',
    type: 'segment-community',
    entity1: { id: 'segment-urban-professionals', type: 'segment', name: 'Urban Professionals' },
    entity2: { id: 'mc-finance-bros', type: 'community', name: 'Finance Bros' },
    relationship: 'belongs_to',
    strength: 80,
    bidirectional: false,
    metadata: {
      confidence: 88,
      lastUpdated: '2024-07-01',
      source: 'demographic_analysis',
      validFrom: '2023-01-01',
      tags: ['wall-street', 'finance', 'status'],
      notes: 'Finance bros are subset of urban professionals with specific cultural markers'
    }
  },

  // Community-City Cross-References
  {
    id: 'xref-005',
    type: 'community-city',
    entity1: { id: 'mc-tech-bros', type: 'community', name: 'Tech Bros' },
    entity2: { id: 'us-san-francisco', type: 'city', name: 'San Francisco' },
    relationship: 'originated_from',
    strength: 95,
    bidirectional: false,
    metadata: {
      confidence: 98,
      lastUpdated: '2024-07-01',
      source: 'historical_analysis',
      validFrom: '2010-01-01',
      tags: ['silicon-valley', 'startup-hub', 'venture-capital'],
      notes: 'San Francisco is the cultural birthplace and epicenter of tech bro culture'
    }
  },
  {
    id: 'xref-006',
    type: 'community-city',
    entity1: { id: 'mc-wellness-girlies', type: 'community', name: 'Wellness Girlies' },
    entity2: { id: 'us-los-angeles', type: 'city', name: 'Los Angeles' },
    relationship: 'dominates',
    strength: 85,
    bidirectional: false,
    metadata: {
      confidence: 90,
      lastUpdated: '2024-07-01',
      source: 'geographic_analysis',
      validFrom: '2022-01-01',
      tags: ['health-conscious', 'influencer-culture', 'wellness-industry'],
      notes: 'LA\'s wellness industry and influencer culture drives global wellness girlie trends'
    }
  },
  {
    id: 'xref-007',
    type: 'community-city',
    entity1: { id: 'mc-finance-bros', type: 'community', name: 'Finance Bros' },
    entity2: { id: 'us-nyc', type: 'city', name: 'New York City' },
    relationship: 'originated_from',
    strength: 90,
    bidirectional: false,
    metadata: {
      confidence: 95,
      lastUpdated: '2024-07-01',
      source: 'historical_analysis',
      validFrom: '1980-01-01',
      tags: ['wall-street', 'finance-capital', 'trader-culture'],
      notes: 'Wall Street culture created and continues to define finance bro community'
    }
  },
  {
    id: 'xref-008',
    type: 'community-city',
    entity1: { id: 'mc-academia-aesthetic', type: 'community', name: 'Academia Aesthetic' },
    entity2: { id: 'us-boston', type: 'city', name: 'Boston' },
    relationship: 'emerging_in',
    strength: 80,
    bidirectional: false,
    metadata: {
      confidence: 85,
      lastUpdated: '2024-07-01',
      source: 'platform_analysis',
      validFrom: '2022-09-01',
      tags: ['harvard', 'mit', 'university-culture', 'dark-academia'],
      notes: 'Boston\'s concentration of prestigious universities drives academia aesthetic trends'
    }
  },
  {
    id: 'xref-009',
    type: 'community-city',
    entity1: { id: 'mc-southern-belles', type: 'community', name: 'Southern Belles' },
    entity2: { id: 'us-atlanta', type: 'city', name: 'Atlanta' },
    relationship: 'dominates',
    strength: 85,
    bidirectional: false,
    metadata: {
      confidence: 88,
      lastUpdated: '2024-07-01',
      source: 'cultural_analysis',
      validFrom: '2020-01-01',
      tags: ['southern-culture', 'modern-south', 'hospitality'],
      notes: 'Atlanta represents modern southern culture that southern belle community embodies'
    }
  },

  // City-Region Cross-References
  {
    id: 'xref-010',
    type: 'city-region',
    entity1: { id: 'us-san-francisco', type: 'city', name: 'San Francisco' },
    entity2: { id: 'region-west-coast-us', type: 'region', name: 'West Coast US' },
    relationship: 'belongs_to',
    strength: 100,
    bidirectional: false,
    metadata: {
      confidence: 100,
      lastUpdated: '2024-07-01',
      source: 'geographic_data',
      validFrom: '2020-01-01',
      tags: ['geographic', 'regional-classification'],
      notes: 'Geographic classification - San Francisco is primary city in West Coast region'
    }
  },
  {
    id: 'xref-011',
    type: 'city-region',
    entity1: { id: 'us-nyc', type: 'city', name: 'New York City' },
    entity2: { id: 'region-northeast-us', type: 'region', name: 'Northeast US' },
    relationship: 'dominates',
    strength: 95,
    bidirectional: false,
    metadata: {
      confidence: 100,
      lastUpdated: '2024-07-01',
      source: 'economic_analysis',
      validFrom: '2020-01-01',
      tags: ['economic-hub', 'cultural-center', 'finance'],
      notes: 'NYC drives economic and cultural trends for entire Northeast region'
    }
  },
  {
    id: 'xref-012',
    type: 'city-region',
    entity1: { id: 'us-atlanta', type: 'city', name: 'Atlanta' },
    entity2: { id: 'region-southeast-us', type: 'region', name: 'Southeast US' },
    relationship: 'dominates',
    strength: 85,
    bidirectional: false,
    metadata: {
      confidence: 90,
      lastUpdated: '2024-07-01',
      source: 'economic_analysis',
      validFrom: '2020-01-01',
      tags: ['regional-hub', 'entertainment', 'business'],
      notes: 'Atlanta is the economic and cultural hub of the Southeast'
    }
  },

  // Segment-Region Cross-References
  {
    id: 'xref-013',
    type: 'segment-region',
    entity1: { id: 'segment-tech-innovators', type: 'segment', name: 'Tech Innovators' },
    entity2: { id: 'region-west-coast-us', type: 'region', name: 'West Coast US' },
    relationship: 'dominates',
    strength: 90,
    bidirectional: false,
    metadata: {
      confidence: 95,
      lastUpdated: '2024-07-01',
      source: 'regional_analysis',
      validFrom: '2020-01-01',
      tags: ['tech-concentration', 'innovation-hub', 'venture-capital'],
      notes: 'West Coast has highest concentration and influence of tech innovator segment'
    }
  },
  {
    id: 'xref-014',
    type: 'segment-region',
    entity1: { id: 'segment-wellness-enthusiasts', type: 'segment', name: 'Wellness Enthusiasts' },
    entity2: { id: 'region-west-coast-us', type: 'region', name: 'West Coast US' },
    relationship: 'emerging_in',
    strength: 85,
    bidirectional: false,
    metadata: {
      confidence: 88,
      lastUpdated: '2024-07-01',
      source: 'trend_analysis',
      validFrom: '2022-01-01',
      tags: ['wellness-industry', 'health-conscious', 'lifestyle'],
      notes: 'West Coast leads wellness trends that spread nationally'
    }
  },
  {
    id: 'xref-015',
    type: 'segment-region',
    entity1: { id: 'segment-authentic-storytellers', type: 'segment', name: 'Authentic Storytellers' },
    entity2: { id: 'region-southeast-us', type: 'region', name: 'Southeast US' },
    relationship: 'dominates',
    strength: 80,
    bidirectional: false,
    metadata: {
      confidence: 85,
      lastUpdated: '2024-07-01',
      source: 'cultural_analysis',
      validFrom: '2020-01-01',
      tags: ['storytelling-culture', 'authenticity', 'community'],
      notes: 'Southern storytelling tradition drives authentic content creation'
    }
  },

  // Seasonal/Temporal Cross-References
  {
    id: 'xref-016',
    type: 'segment-community',
    entity1: { id: 'segment-wellness-enthusiasts', type: 'segment', name: 'Wellness Enthusiasts' },
    entity2: { id: 'mc-wellness-girlies', type: 'community', name: 'Wellness Girlies' },
    relationship: 'seasonal_in',
    strength: 70,
    bidirectional: false,
    metadata: {
      confidence: 80,
      lastUpdated: '2024-07-01',
      source: 'seasonal_analysis',
      validFrom: '2023-01-01',
      validTo: '2024-12-31',
      tags: ['new-year-resolutions', 'summer-body', 'seasonal-wellness'],
      notes: 'Wellness engagement peaks during January (resolutions) and March-May (summer prep)'
    }
  },
  {
    id: 'xref-017',
    type: 'community-city',
    entity1: { id: 'mc-coastal-grandma', type: 'community', name: 'Coastal Grandma' },
    entity2: { id: 'us-nyc', type: 'city', name: 'New York City' },
    relationship: 'seasonal_in',
    strength: 60,
    bidirectional: false,
    metadata: {
      confidence: 75,
      lastUpdated: '2024-07-01',
      source: 'seasonal_analysis',
      validFrom: '2023-05-01',
      validTo: '2023-09-30',
      tags: ['hamptons', 'summer-escape', 'seasonal-lifestyle'],
      notes: 'Coastal grandma aesthetic peaks in NYC during summer months (Hamptons season)'
    }
  },

  // Competition Cross-References
  {
    id: 'xref-018',
    type: 'community-city',
    entity1: { id: 'mc-tech-bros', type: 'community', name: 'Tech Bros' },
    entity2: { id: 'us-austin', type: 'city', name: 'Austin' },
    relationship: 'migrates_to',
    strength: 70,
    bidirectional: false,
    metadata: {
      confidence: 80,
      lastUpdated: '2024-07-01',
      source: 'migration_analysis',
      validFrom: '2021-01-01',
      tags: ['tech-migration', 'covid-exodus', 'lower-cost-living'],
      notes: 'Significant tech bro migration from SF/LA to Austin for lower costs and tax benefits'
    }
  },
  {
    id: 'xref-019',
    type: 'segment-community',
    entity1: { id: 'segment-creative-elites', type: 'segment', name: 'Creative Elites' },
    entity2: { id: 'mc-academia-aesthetic', type: 'community', name: 'Academia Aesthetic' },
    relationship: 'influences',
    strength: 65,
    bidirectional: false,
    metadata: {
      confidence: 70,
      lastUpdated: '2024-07-01',
      source: 'content_analysis',
      validFrom: '2023-01-01',
      tags: ['intellectual-aesthetics', 'creative-inspiration', 'cultural-capital'],
      notes: 'Creative professionals adopt academic aesthetics to signal intellectual sophistication'
    }
  },

  // Brand-Community Cross-References
  {
    id: 'xref-020',
    type: 'community-brand',
    entity1: { id: 'mc-wellness-girlies', type: 'community', name: 'Wellness Girlies' },
    entity2: { id: 'brand-glossier', type: 'brand', name: 'Glossier' },
    relationship: 'dominates',
    strength: 95,
    bidirectional: false,
    metadata: {
      confidence: 98,
      lastUpdated: '2024-07-01',
      source: 'brand_analysis',
      validFrom: '2022-01-01',
      tags: ['beauty-brand', 'clean-girl', 'authentic-marketing'],
      notes: 'Glossier built brand identity around wellness girlies community preferences'
    }
  }
]

// Helper functions for cross-reference data
export const getCrossReferencesByType = (type: CrossReferenceType): CrossReference[] => {
  return crossReferences.filter(ref => ref.type === type)
}

export const getCrossReferencesByEntity = (entityId: string): CrossReference[] => {
  return crossReferences.filter(ref => 
    ref.entity1.id === entityId || ref.entity2.id === entityId
  )
}

export const getCrossReferencesByRelationship = (relationship: RelationshipType): CrossReference[] => {
  return crossReferences.filter(ref => ref.relationship === relationship)
}

export const getStrongestRelationships = (minStrength: number = 80): CrossReference[] => {
  return crossReferences.filter(ref => ref.strength >= minStrength)
}

export const getRelatedEntities = (entityId: string, entityType?: string): EntityReference[] => {
  const references = getCrossReferencesByEntity(entityId)
  const relatedEntities: EntityReference[] = []
  
  references.forEach(ref => {
    if (ref.entity1.id === entityId) {
      if (!entityType || ref.entity2.type === entityType) {
        relatedEntities.push(ref.entity2)
      }
    } else {
      if (!entityType || ref.entity1.type === entityType) {
        relatedEntities.push(ref.entity1)
      }
    }
  })
  
  return relatedEntities
}

export const getSegmentCommunities = (segmentId: string): EntityReference[] => {
  return getRelatedEntities(segmentId, 'community')
}

export const getCommunitySegments = (communityId: string): EntityReference[] => {
  return getRelatedEntities(communityId, 'segment')
}

export const getCityCommunities = (cityId: string): EntityReference[] => {
  return getRelatedEntities(cityId, 'community')
}

export const getRegionCommunities = (regionId: string): EntityReference[] => {
  return getRelatedEntities(regionId, 'community')
}

export const getCommunityInsights = (communityId: string) => {
  const references = getCrossReferencesByEntity(communityId)
  
  return {
    relatedSegments: references.filter(ref => 
      ref.type === 'segment-community' && 
      (ref.entity1.id === communityId || ref.entity2.id === communityId)
    ),
    geographicStrongholds: references.filter(ref => 
      ref.type === 'community-city' && 
      ref.entity1.id === communityId &&
      ref.strength >= 70
    ),
    seasonalPatterns: references.filter(ref => 
      ref.relationship === 'seasonal_in' &&
      (ref.entity1.id === communityId || ref.entity2.id === communityId)
    ),
    migrationPatterns: references.filter(ref => 
      ref.relationship === 'migrates_to' &&
      ref.entity1.id === communityId
    )
  }
}

export const getMarketOpportunities = (segmentId: string, cityId: string) => {
  const segmentRefs = getCrossReferencesByEntity(segmentId)
  const cityRefs = getCrossReferencesByEntity(cityId)
  
  // Find communities that are strong in both the segment and city
  const commonCommunities = segmentRefs
    .filter(ref => ref.type === 'segment-community' && ref.strength >= 70)
    .map(ref => ref.entity1.id === segmentId ? ref.entity2.id : ref.entity1.id)
    .filter(communityId => 
      cityRefs.some(cityRef => 
        cityRef.type === 'community-city' && 
        (cityRef.entity1.id === communityId || cityRef.entity2.id === communityId) &&
        cityRef.strength >= 60
      )
    )
  
  return commonCommunities
}

// Validation functions
export const validateCrossReference = (ref: CrossReference): boolean => {
  return (
    ref.strength >= 0 && ref.strength <= 100 &&
    ref.metadata.confidence >= 0 && ref.metadata.confidence <= 100 &&
    ref.entity1.id !== ref.entity2.id
  )
}

export const findInconsistencies = (): Array<{ message: string; references: CrossReference[] }> => {
  const inconsistencies: Array<{ message: string; references: CrossReference[] }> = []
  
  // Check for bidirectional relationships that should be consistent
  crossReferences.forEach(ref => {
    if (ref.bidirectional) {
      const reverse = crossReferences.find(r => 
        r.entity1.id === ref.entity2.id && 
        r.entity2.id === ref.entity1.id &&
        r.type === ref.type
      )
      
      if (!reverse) {
        inconsistencies.push({
          message: `Bidirectional relationship missing reverse reference`,
          references: [ref]
        })
      } else if (Math.abs(reverse.strength - ref.strength) > 10) {
        inconsistencies.push({
          message: `Bidirectional relationship strength mismatch`,
          references: [ref, reverse]
        })
      }
    }
  })
  
  return inconsistencies
}

// Relationship type labels for UI
export const relationshipLabels: Record<RelationshipType, string> = {
  'belongs_to': 'Belongs To',
  'influences': 'Influences',
  'competes_with': 'Competes With',
  'complements': 'Complements',
  'migrates_to': 'Migrates To',
  'dominates': 'Dominates',
  'emerging_in': 'Emerging In',
  'declining_in': 'Declining In',
  'seasonal_in': 'Seasonal In',
  'originated_from': 'Originated From'
}

export const crossReferenceTypeLabels: Record<CrossReferenceType, string> = {
  'segment-community': 'Segment ↔ Community',
  'community-city': 'Community ↔ City',
  'city-region': 'City ↔ Region',
  'segment-region': 'Segment ↔ Region',
  'community-brand': 'Community ↔ Brand',
  'influencer-community': 'Influencer ↔ Community',
  'trend-community': 'Trend ↔ Community',
  'segment-city': 'Segment ↔ City'
}