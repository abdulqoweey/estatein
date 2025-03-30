'use client'
import { properties } from '@/app/components/propertyData'
import PropertyCard from '../components/PropertyCard'
import { useState } from 'react'

export default function PropertyList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('price')

  // Filter and sort properties based on search and selected option
  const filteredProperties = properties
    .filter((property) => {
      // Check for price range (e.g., "price:1000000-2000000")
      const priceRangeMatch = searchTerm.match(/price:(\d+)-(\d+)/)
      if (priceRangeMatch) {
        const minPrice = parseInt(priceRangeMatch[1])
        const maxPrice = parseInt(priceRangeMatch[2])
        const propertyPrice = parseInt(property.price.replace(/[^0-9.-]+/g, ''))
        return propertyPrice >= minPrice && propertyPrice <= maxPrice
      }

      // Filter by title, location, and price range (if no price range specified)
      const searchLower = searchTerm.toLowerCase()
      return (
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.price.toLowerCase().includes(searchLower)
      )
    })
    .sort((a, b) => {
      if (sortOption === 'price') {
        const priceA = parseInt(a.price.replace(/[^0-9.-]+/g, ''))
        const priceB = parseInt(b.price.replace(/[^0-9.-]+/g, ''))
        return priceA - priceB
      }
      if (sortOption === 'location') {
        return a.location.localeCompare(b.location) // Sort by location
      }
      return a.title.localeCompare(b.title) // Default sort by title
    })

  return (
    <div className='container mx-auto p-6 pt-32 text-[#ffffff]'>
      {/* Page Title */}
      <h1 className='text-3xl font-bold text-center text-[#ffffff] mb-8'>
        Property Listings
      </h1>

      {/* Search Bar */}
      <div className='mb-8 flex justify-center'>
        <input
          type='text'
          placeholder='Search by title, location, or price (e.g., "price:1000000-2000000")'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='text-[#ffffff] border-2 border-[#DDDDDD] rounded-lg p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-lg focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-[#703BF7]'
        />
      </div>

      {/* Sort Dropdown */}
      <div className='mb-8 flex justify-center'>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className='border-2 border-[#DDDDDD] rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-[#703BF7]'
        >
          <option value='price'>Sort by Price</option>
          <option value='title'>Sort by Title</option>
          <option value='location'>Sort by Location</option>{' '}
          {/* Added location sorting option */}
        </select>
      </div>

      {/* Property List */}
      {filteredProperties.length === 0 ? (
        <div className='text-center text-lg text-gray-500'>
          No properties found.
        </div>
      ) : (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Map through the filtered properties and render PropertyCard */}
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  )
}
