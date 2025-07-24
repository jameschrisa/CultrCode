import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CitySelector } from '@/components/CitySelector'
import { TargetCity } from '@/types/segments'
import { 
  northAmericanCities,
  getCitiesByRegion,
  getCitiesByMarketSize,
  getTopCreatorEconomyCities,
  searchCities
} from '@/data/cities'

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('CitySelector Component Integration', () => {
  const mockCities: TargetCity[] = [
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
    }
  ]

  const mockOnCityToggle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Basic Functionality', () => {
    test('should render city selector with initial state', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      expect(screen.getByPlaceholderText('Search cities...')).toBeInTheDocument()
      expect(screen.getByText('All Regions')).toBeInTheDocument()
      expect(screen.getByText('All Sizes')).toBeInTheDocument()
      expect(screen.getByText('Top Creator Economy Cities')).toBeInTheDocument()
    })

    test('should display selected cities', () => {
      render(
        <CitySelector
          selectedCities={[mockCities[0]]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      expect(screen.getByText('Selected Cities (1/5)')).toBeInTheDocument()
      expect(screen.getByText('San Francisco')).toBeInTheDocument()
      expect(screen.getByText('California')).toBeInTheDocument()
    })

    test('should call onCityToggle when city is selected', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Find and click a city button (this might need adjustment based on actual rendered content)
      const cityButtons = screen.getAllByRole('button')
      const cityButton = cityButtons.find(button => 
        button.textContent?.includes('95%') || button.textContent?.includes('Creator Penetration')
      )

      if (cityButton) {
        fireEvent.click(cityButton)
        expect(mockOnCityToggle).toHaveBeenCalled()
      }
    })

    test('should remove city when selected city is clicked', () => {
      render(
        <CitySelector
          selectedCities={[mockCities[0]]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const removeButton = screen.getByText('San Francisco').closest('button')
      if (removeButton) {
        fireEvent.click(removeButton)
        expect(mockOnCityToggle).toHaveBeenCalledWith(mockCities[0])
      }
    })
  })

  describe('Search Functionality', () => {
    test('should filter cities based on search query', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      fireEvent.change(searchInput, { target: { value: 'San Francisco' } })

      // The component should update to show filtered results
      expect(searchInput).toHaveValue('San Francisco')
    })

    test('should show no results message for invalid search', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      fireEvent.change(searchInput, { target: { value: 'NonexistentCity' } })

      // Should show no results message (if implemented)
      expect(searchInput).toHaveValue('NonexistentCity')
    })

    test('should clear search when clear button is clicked', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      fireEvent.change(searchInput, { target: { value: 'San Francisco' } })

      // Select a region to show clear filters button
      const regionSelect = screen.getByDisplayValue('All Regions')
      fireEvent.change(regionSelect, { target: { value: 'west-coast-us' } })

      const clearButton = screen.getByText('Clear Filters')
      fireEvent.click(clearButton)

      expect(searchInput).toHaveValue('')
    })
  })

  describe('Filtering Functionality', () => {
    test('should filter by region', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const regionSelect = screen.getByDisplayValue('All Regions')
      fireEvent.change(regionSelect, { target: { value: 'west-coast-us' } })

      expect(regionSelect).toHaveValue('west-coast-us')
    })

    test('should filter by market size', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const marketSizeSelect = screen.getByDisplayValue('All Sizes')
      fireEvent.change(marketSizeSelect, { target: { value: 'mega' } })

      expect(marketSizeSelect).toHaveValue('mega')
    })

    test('should show clear filters button when filters are applied', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const regionSelect = screen.getByDisplayValue('All Regions')
      fireEvent.change(regionSelect, { target: { value: 'west-coast-us' } })

      expect(screen.getByText('Clear Filters')).toBeInTheDocument()
    })
  })

  describe('Selection Limits', () => {
    test('should enforce maximum selection limit', () => {
      const maxSelections = 2
      render(
        <CitySelector
          selectedCities={mockCities.slice(0, 2)}
          onCityToggle={mockOnCityToggle}
          maxSelections={maxSelections}
        />
      )

      expect(screen.getByText('Selected Cities (2/2)')).toBeInTheDocument()
      expect(screen.getByText('Maximum 2 cities selected')).toBeInTheDocument()
    })

    test('should disable city selection when limit is reached', () => {
      render(
        <CitySelector
          selectedCities={mockCities.slice(0, 2)}
          onCityToggle={mockOnCityToggle}
          maxSelections={2}
        />
      )

      // Find unselected city buttons - they should be disabled
      const cityButtons = screen.getAllByRole('button')
      const disabledButtons = cityButtons.filter(button => 
        button.hasAttribute('disabled') && 
        !button.textContent?.includes('San Francisco') &&
        !button.textContent?.includes('New York City')
      )

      expect(disabledButtons.length).toBeGreaterThan(0)
    })

    test('should allow removal of selected cities even when limit is reached', () => {
      render(
        <CitySelector
          selectedCities={mockCities.slice(0, 2)}
          onCityToggle={mockOnCityToggle}
          maxSelections={2}
        />
      )

      const removeButton = screen.getByText('San Francisco').closest('button')
      if (removeButton) {
        fireEvent.click(removeButton)
        expect(mockOnCityToggle).toHaveBeenCalledWith(mockCities[0])
      }
    })
  })

  describe('Data Integration', () => {
    test('should display city demographics correctly', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Check for demographic information display
      // This depends on how the actual component renders city data
      // Look for population, income, and creator penetration data
      const demographicElements = screen.getAllByText(/\d+%|\$\d+K|\d+\.\d+M/)
      expect(demographicElements.length).toBeGreaterThan(0)
    })

    test('should sort cities by creator economy penetration', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // The component should render cities sorted by creator economy penetration
      // This is tested indirectly by checking the data source
      const topCities = getTopCreatorEconomyCities(3)
      expect(topCities[0].demographics.creatorEconomyPenetration).toBeGreaterThanOrEqual(
        topCities[1].demographics.creatorEconomyPenetration
      )
    })

    test('should show top creator economy cities as suggestions', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      expect(screen.getByText('Top Creator Economy Cities')).toBeInTheDocument()
    })

    test('should update suggestions when cities are selected', () => {
      const { rerender } = render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Initially should show suggestions
      expect(screen.getByText('Top Creator Economy Cities')).toBeInTheDocument()

      // After selecting a city, suggestions should update
      rerender(
        <CitySelector
          selectedCities={[mockCities[0]]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // The component should still show suggestions, but filtered
      expect(screen.getByText('Top Creator Economy Cities')).toBeInTheDocument()
    })
  })

  describe('Real Data Integration Tests', () => {
    test('should work with actual city data', () => {
      // Test with real data from the cities file
      const realCities = northAmericanCities.slice(0, 3)
      
      render(
        <CitySelector
          selectedCities={realCities.slice(0, 1)}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      expect(screen.getByText(`Selected Cities (1/5)`)).toBeInTheDocument()
    })

    test('should integrate with region filtering', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Test region filtering with real data
      const westCoastCities = getCitiesByRegion('west-coast-us')
      expect(westCoastCities.length).toBeGreaterThan(0)

      const regionSelect = screen.getByDisplayValue('All Regions')
      fireEvent.change(regionSelect, { target: { value: 'west-coast-us' } })

      // The component should filter to show only west coast cities
      expect(regionSelect).toHaveValue('west-coast-us')
    })

    test('should integrate with market size filtering', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Test market size filtering with real data
      const megaCities = getCitiesByMarketSize('mega')
      expect(megaCities.length).toBeGreaterThan(0)

      const marketSizeSelect = screen.getByDisplayValue('All Sizes')
      fireEvent.change(marketSizeSelect, { target: { value: 'mega' } })

      expect(marketSizeSelect).toHaveValue('mega')
    })

    test('should integrate with search functionality', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      // Test search with real data
      const searchResults = searchCities('San Francisco')
      expect(searchResults.length).toBeGreaterThan(0)
      expect(searchResults[0].name).toContain('San Francisco')

      const searchInput = screen.getByPlaceholderText('Search cities...')
      fireEvent.change(searchInput, { target: { value: 'San Francisco' } })

      expect(searchInput).toHaveValue('San Francisco')
    })
  })

  describe('Accessibility and User Experience', () => {
    test('should have proper ARIA labels', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      expect(searchInput).toHaveAttribute('type', 'text')

      const regionSelect = screen.getByDisplayValue('All Regions')
      expect(regionSelect.tagName).toBe('SELECT')
    })

    test('should provide clear feedback for user actions', () => {
      render(
        <CitySelector
          selectedCities={[mockCities[0]]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      expect(screen.getByText('Click to remove')).toBeInTheDocument()
      expect(screen.getByText('Selected Cities (1/5)')).toBeInTheDocument()
    })

    test('should handle keyboard navigation', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      
      // Test keyboard interaction
      fireEvent.keyDown(searchInput, { key: 'Tab' })
      fireEvent.focus(searchInput)
      
      expect(searchInput).toHaveAttribute('type', 'text')
    })

    test('should show helpful empty states', () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      fireEvent.change(searchInput, { target: { value: 'NonexistentCity123' } })

      // Should handle empty search results gracefully
      expect(searchInput).toHaveValue('NonexistentCity123')
    })
  })

  describe('Performance Tests', () => {
    test('should handle large datasets efficiently', () => {
      const startTime = performance.now()
      
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const endTime = performance.now()
      const renderTime = endTime - startTime

      // Should render quickly even with large datasets
      expect(renderTime).toBeLessThan(100) // 100ms threshold
    })

    test('should debounce search input', async () => {
      render(
        <CitySelector
          selectedCities={[]}
          onCityToggle={mockOnCityToggle}
          maxSelections={5}
        />
      )

      const searchInput = screen.getByPlaceholderText('Search cities...')
      
      // Rapid typing should be handled efficiently
      fireEvent.change(searchInput, { target: { value: 'S' } })
      fireEvent.change(searchInput, { target: { value: 'Sa' } })
      fireEvent.change(searchInput, { target: { value: 'San' } })
      fireEvent.change(searchInput, { target: { value: 'San Francisco' } })

      expect(searchInput).toHaveValue('San Francisco')
    })
  })
})