import { TargetCity, NorthAmericanRegion, MarketSize } from '@/types/segments'

export const northAmericanCities: TargetCity[] = [
  // United States - Northeast
  {
    id: 'us-nyc',
    name: 'New York City',
    state: 'New York',
    country: 'United States',
    population: 8400000,
    region: 'northeast-us',
    marketSize: 'mega',
    demographics: {
      medianAge: 37,
      medianIncome: 70000,
      educationLevel: 'High',
      diversityIndex: 95,
      techSavviness: 90,
      creatorEconomyPenetration: 95
    }
  },
  {
    id: 'us-boston',
    name: 'Boston',
    state: 'Massachusetts',
    country: 'United States',
    population: 695000,
    region: 'northeast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 32,
      medianIncome: 81000,
      educationLevel: 'Very High',
      diversityIndex: 75,
      techSavviness: 95,
      creatorEconomyPenetration: 85
    }
  },
  {
    id: 'us-philadelphia',
    name: 'Philadelphia',
    state: 'Pennsylvania',
    country: 'United States',
    population: 1580000,
    region: 'northeast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 34,
      medianIncome: 54000,
      educationLevel: 'High',
      diversityIndex: 80,
      techSavviness: 75,
      creatorEconomyPenetration: 70
    }
  },

  // United States - Southeast
  {
    id: 'us-miami',
    name: 'Miami',
    state: 'Florida',
    country: 'United States',
    population: 470000,
    region: 'southeast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 40,
      medianIncome: 44000,
      educationLevel: 'Medium',
      diversityIndex: 90,
      techSavviness: 80,
      creatorEconomyPenetration: 90
    }
  },
  {
    id: 'us-atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    country: 'United States',
    population: 498000,
    region: 'southeast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 33,
      medianIncome: 65000,
      educationLevel: 'High',
      diversityIndex: 85,
      techSavviness: 85,
      creatorEconomyPenetration: 80
    }
  },
  {
    id: 'us-nashville',
    name: 'Nashville',
    state: 'Tennessee',
    country: 'United States',
    population: 695000,
    region: 'southeast-us',
    marketSize: 'medium',
    demographics: {
      medianAge: 34,
      medianIncome: 56000,
      educationLevel: 'High',
      diversityIndex: 70,
      techSavviness: 75,
      creatorEconomyPenetration: 85
    }
  },

  // United States - West Coast
  {
    id: 'us-los-angeles',
    name: 'Los Angeles',
    state: 'California',
    country: 'United States',
    population: 3970000,
    region: 'west-coast-us',
    marketSize: 'mega',
    demographics: {
      medianAge: 36,
      medianIncome: 65000,
      educationLevel: 'High',
      diversityIndex: 95,
      techSavviness: 90,
      creatorEconomyPenetration: 100
    }
  },
  {
    id: 'us-san-francisco',
    name: 'San Francisco',
    state: 'California',
    country: 'United States',
    population: 875000,
    region: 'west-coast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 38,
      medianIncome: 112000,
      educationLevel: 'Very High',
      diversityIndex: 85,
      techSavviness: 100,
      creatorEconomyPenetration: 95
    }
  },
  {
    id: 'us-seattle',
    name: 'Seattle',
    state: 'Washington',
    country: 'United States',
    population: 750000,
    region: 'west-coast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 35,
      medianIncome: 93000,
      educationLevel: 'Very High',
      diversityIndex: 75,
      techSavviness: 95,
      creatorEconomyPenetration: 85
    }
  },
  {
    id: 'us-portland',
    name: 'Portland',
    state: 'Oregon',
    country: 'United States',
    population: 650000,
    region: 'west-coast-us',
    marketSize: 'medium',
    demographics: {
      medianAge: 37,
      medianIncome: 71000,
      educationLevel: 'High',
      diversityIndex: 65,
      techSavviness: 90,
      creatorEconomyPenetration: 80
    }
  },

  // United States - Southwest
  {
    id: 'us-austin',
    name: 'Austin',
    state: 'Texas',
    country: 'United States',
    population: 965000,
    region: 'southwest-us',
    marketSize: 'large',
    demographics: {
      medianAge: 33,
      medianIncome: 75000,
      educationLevel: 'High',
      diversityIndex: 75,
      techSavviness: 95,
      creatorEconomyPenetration: 90
    }
  },
  {
    id: 'us-denver',
    name: 'Denver',
    state: 'Colorado',
    country: 'United States',
    population: 715000,
    region: 'mountain-west-us',
    marketSize: 'large',
    demographics: {
      medianAge: 34,
      medianIncome: 78000,
      educationLevel: 'High',
      diversityIndex: 70,
      techSavviness: 85,
      creatorEconomyPenetration: 75
    }
  },
  {
    id: 'us-phoenix',
    name: 'Phoenix',
    state: 'Arizona',
    country: 'United States',
    population: 1680000,
    region: 'southwest-us',
    marketSize: 'large',
    demographics: {
      medianAge: 33,
      medianIncome: 62000,
      educationLevel: 'Medium',
      diversityIndex: 75,
      techSavviness: 70,
      creatorEconomyPenetration: 65
    }
  },

  // United States - Midwest
  {
    id: 'us-chicago',
    name: 'Chicago',
    state: 'Illinois',
    country: 'United States',
    population: 2720000,
    region: 'midwest-us',
    marketSize: 'mega',
    demographics: {
      medianAge: 35,
      medianIncome: 65000,
      educationLevel: 'High',
      diversityIndex: 85,
      techSavviness: 80,
      creatorEconomyPenetration: 75
    }
  },
  {
    id: 'us-detroit',
    name: 'Detroit',
    state: 'Michigan',
    country: 'United States',
    population: 670000,
    region: 'midwest-us',
    marketSize: 'medium',
    demographics: {
      medianAge: 35,
      medianIncome: 34000,
      educationLevel: 'Medium',
      diversityIndex: 80,
      techSavviness: 60,
      creatorEconomyPenetration: 55
    }
  },
  {
    id: 'us-minneapolis',
    name: 'Minneapolis',
    state: 'Minnesota',
    country: 'United States',
    population: 430000,
    region: 'midwest-us',
    marketSize: 'medium',
    demographics: {
      medianAge: 32,
      medianIncome: 70000,
      educationLevel: 'High',
      diversityIndex: 70,
      techSavviness: 85,
      creatorEconomyPenetration: 70
    }
  },

  // Canada - Eastern
  {
    id: 'ca-toronto',
    name: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    population: 2930000,
    region: 'eastern-canada',
    marketSize: 'mega',
    demographics: {
      medianAge: 39,
      medianIncome: 55000,
      educationLevel: 'High',
      diversityIndex: 95,
      techSavviness: 85,
      creatorEconomyPenetration: 85
    }
  },
  {
    id: 'ca-montreal',
    name: 'Montreal',
    state: 'Quebec',
    country: 'Canada',
    population: 1780000,
    region: 'eastern-canada',
    marketSize: 'large',
    demographics: {
      medianAge: 40,
      medianIncome: 50000,
      educationLevel: 'High',
      diversityIndex: 85,
      techSavviness: 80,
      creatorEconomyPenetration: 75
    }
  },
  {
    id: 'ca-ottawa',
    name: 'Ottawa',
    state: 'Ontario',
    country: 'Canada',
    population: 990000,
    region: 'eastern-canada',
    marketSize: 'medium',
    demographics: {
      medianAge: 40,
      medianIncome: 65000,
      educationLevel: 'Very High',
      diversityIndex: 75,
      techSavviness: 90,
      creatorEconomyPenetration: 70
    }
  },

  // Canada - Western
  {
    id: 'ca-vancouver',
    name: 'Vancouver',
    state: 'British Columbia',
    country: 'Canada',
    population: 675000,
    region: 'western-canada',
    marketSize: 'large',
    demographics: {
      medianAge: 40,
      medianIncome: 65000,
      educationLevel: 'High',
      diversityIndex: 90,
      techSavviness: 85,
      creatorEconomyPenetration: 80
    }
  },
  {
    id: 'ca-calgary',
    name: 'Calgary',
    state: 'Alberta',
    country: 'Canada',
    population: 1340000,
    region: 'western-canada',
    marketSize: 'large',
    demographics: {
      medianAge: 37,
      medianIncome: 75000,
      educationLevel: 'High',
      diversityIndex: 70,
      techSavviness: 80,
      creatorEconomyPenetration: 65
    }
  },

  // Additional US Cities
  {
    id: 'us-dallas',
    name: 'Dallas',
    state: 'Texas',
    country: 'United States',
    population: 1340000,
    region: 'southwest-us',
    marketSize: 'large',
    demographics: {
      medianAge: 33,
      medianIncome: 54000,
      educationLevel: 'Medium',
      diversityIndex: 85,
      techSavviness: 75,
      creatorEconomyPenetration: 70
    }
  },
  {
    id: 'us-san-diego',
    name: 'San Diego',
    state: 'California',
    country: 'United States',
    population: 1420000,
    region: 'west-coast-us',
    marketSize: 'large',
    demographics: {
      medianAge: 35,
      medianIncome: 80000,
      educationLevel: 'High',
      diversityIndex: 80,
      techSavviness: 85,
      creatorEconomyPenetration: 85
    }
  }
]

// Helper functions for city data
export const getCitiesByRegion = (region: NorthAmericanRegion): TargetCity[] => {
  return northAmericanCities.filter(city => city.region === region)
}

export const getCitiesByMarketSize = (marketSize: MarketSize): TargetCity[] => {
  return northAmericanCities.filter(city => city.marketSize === marketSize)
}

export const getTopCreatorEconomyCities = (limit: number = 10): TargetCity[] => {
  return northAmericanCities
    .sort((a, b) => b.demographics.creatorEconomyPenetration - a.demographics.creatorEconomyPenetration)
    .slice(0, limit)
}

export const getCityById = (id: string): TargetCity | undefined => {
  return northAmericanCities.find(city => city.id === id)
}

export const searchCities = (query: string): TargetCity[] => {
  const lowerQuery = query.toLowerCase()
  return northAmericanCities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.state.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  )
}

// Regional groupings for UI
export const regionLabels: Record<NorthAmericanRegion, string> = {
  'northeast-us': 'Northeast US',
  'southeast-us': 'Southeast US', 
  'midwest-us': 'Midwest US',
  'southwest-us': 'Southwest US',
  'west-coast-us': 'West Coast US',
  'mountain-west-us': 'Mountain West US',
  'eastern-canada': 'Eastern Canada',
  'western-canada': 'Western Canada',
  'central-canada': 'Central Canada',
  'mexico-north': 'Northern Mexico',
  'mexico-central': 'Central Mexico'
}

export const marketSizeLabels: Record<MarketSize, string> = {
  'small': 'Small Market (< 500K)',
  'medium': 'Medium Market (500K - 1M)', 
  'large': 'Large Market (1M - 3M)',
  'mega': 'Mega Market (3M+)'
}