import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Bed,
  Bath,
  Home,
  Building2,
  Mountain,
  CircuitBoard,
  Landmark,
} from 'lucide-react'

// Define the Property type
interface Property {
  id: number
  title: string
  description: string
  price: string
  imageUrl?: string
  type?: string
  details?: { type: string; label: string }[]
}

// Property Card Component
function PropertyCard({ property }: { property: Property }) {
  const iconMap: Record<string, React.ReactNode> = {
    bedroom: <Bed size={18} className='text-[#703BF7]' />,
    bathroom: <Bath size={18} className='text-[#34D399]' />,
    villa: <Home size={18} className='text-[#F59E0B]' />,
    apartment: <Building2 size={18} className='text-[#60A5FA]' />,
    smartHome: <CircuitBoard size={18} className='text-[#EC4899]' />,
    penthouse: <Landmark size={18} className='text-[#A78BFA]' />,
    house: <Home size={18} className='text-[#FBBF24]' />,
    mountainRetreat: <Mountain size={18} className='text-[#10B981]' />,
  }

  return (
    <div className='border border-[#262626] bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm sm:max-w-md lg:max-w-lg p-6'>
      {/* Property Image */}
      <div className='relative w-full h-56 overflow-hidden rounded-xl mb-5'>
        <Image
          src={property.imageUrl || '/placeholder.jpg'}
          width={500}
          height={400}
          alt={property.title}
          className='w-full h-full object-cover rounded-xl  transition-transform duration-300 hover:scale-105'
        />
        {/* Property Type Badge */}
        {property.type && (
          <span className='absolute top-3 left-3 bg-[#703BF7] text-white text-xs px-3 py-1 rounded-full capitalize'>
            {property.type.replace(/([A-Z])/g, ' $1').trim()}
          </span>
        )}
      </div>

      {/* Property Details */}
      <div className='flex flex-col gap-3'>
        <h2 className='text-lg font-semibold'>{property.title}</h2>
        <p className='text-sm text-[#999999] line-clamp-2'>
          {property.description}
          <span className='text-[#703BF7] cursor-pointer ml-1 hover:underline'>
            Read More
          </span>
        </p>

        {/* Property Features */}
        {property.details?.length ? (
          <ul className='flex flex-wrap gap-2 my-3'>
            {property.details.map((item, index) => (
              <li
                key={index}
                className='border flex items-center gap-2 border-[#262626] px-3 py-2 rounded-full bg-[#262626]'
              >
                {iconMap[item.type.toLowerCase()] || (
                  <Home size={18} className='text-gray-400' />
                )}
                <p className='text-sm'>{item.label}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-gray-500 my-3'>No details available</p>
        )}

        {/* Price & Button */}
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-[#999999] text-sm'>Price</p>
            <h6 className='text-lg font-semibold'>{property.price}</h6>
          </div>
          <Link href={`/properties/${property.id}`}>
            <button className='bg-[#703BF7] hover:bg-[#5a2dc4] transition-colors text-white rounded-xl px-5 py-3 text-sm sm:text-base'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
