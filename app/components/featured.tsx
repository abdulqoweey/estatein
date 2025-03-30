'use client'

import { useState } from 'react'
import PropertyCard from './PropertyCard'
import { properties } from './propertyData' // Ensure only dummy data is used
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeaturedProperty() {
  const itemsPerPage = 3 // ✅ Number of properties per page
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(properties.length / itemsPerPage)

  // ✅ Get properties for current page
  const displayedProperties = properties.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  return (
    <div className='text-white pt-32 px-6 sm:px-16 lg:px-32'>
      {/* 🔹 Section Header */}
      <div className='text-center sm:text-start mb-10'>
        <h1 className='mb-3 text-2xl font-semibold'>Featured Properties</h1>

        {/* 🔹 Description & Button */}
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-6 items-center'>
          <p className='font-extralight text-[#999999] max-w-xl'>
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein.
          </p>
          <button className='text-sm bg-[#1A1A1A] rounded-xl border border-[#262626] px-5 py-3 w-full sm:w-auto'>
            View All Properties
          </button>
        </div>
      </div>

      {/* 🔹 Property Cards (Paginated) */}
      <div className='mt-10'>
        {properties.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'
          >
            {displayedProperties.map((property) => (
              <motion.div
                key={property.id}
                className='w-full flex justify-center'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className='text-gray-400 text-center'>No properties available.</p>
        )}
      </div>

      {/* 🔹 Pagination Controls */}
      {properties.length > itemsPerPage && (
        <div className='border-t border-[#262626] flex justify-between items-center p-4 mt-8'>
          <p className='text-sm text-center'>
            Page {currentPage + 1} of {totalPages}
          </p>
          <div className='flex gap-4'>
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 0}
            >
              <ArrowLeft
                size={40}
                className={`text-white ${
                  currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage >= totalPages - 1}
            >
              <ArrowRight
                size={40}
                className={`text-white ${
                  currentPage >= totalPages - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
