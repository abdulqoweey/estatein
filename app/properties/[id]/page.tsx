'use client'
import { useParams } from 'next/navigation'
import { properties } from '@/app/components/propertyData'
import Image from 'next/image'
import { Bed, Bath, Home, Landmark, Mountain, CircuitBoard } from 'lucide-react'
import Link from 'next/link' // Import Link for navigation

const PropertyDetails = () => {
  const { id } = useParams() // useParams to fetch URL params (id)
  const propertyId = id ? parseInt(id as string) : null

  // Find the property by ID
  const property = properties.find((prop) => prop.id === propertyId)

  if (!property) {
    return (
      <div className='text-center text-xl font-semibold text-gray-500 mt-32'>
        Property not found.
      </div>
    )
  }

  const iconMap: Record<string, JSX.Element> = {
    bedroom: <Bed size={18} className='text-[#703BF7]' />,
    bathroom: <Bath size={18} className='text-[#34D399]' />,
    villa: <Home size={18} className='text-[#F59E0B]' />,
    penthouse: <Landmark size={18} className='text-[#A78BFA]' />,
    mountainRetreat: <Mountain size={18} className='text-[#10B981]' />,
    smartHome: <CircuitBoard size={18} className='text-[#EC4899]' />,
  }

  return (
    <div className='container mx-auto p-6 pt-32 text-[#ffffff]'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Property Image */}
        <div className='w-full lg:w-1/2'>
          <div className='relative w-full h-96 overflow-hidden rounded-xl mb-5'>
            <Image
              src={property.imageUrl || '/placeholder.jpg'}
              width={800}
              height={600}
              alt={property.title}
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
        </div>

        {/* Property Details */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <h1 className='text-3xl font-bold'>{property.title}</h1>
          <p className='text-lg text-[#999999]'>{property.description}</p>
          <p className='text-xl font-semibold mt-2'>{property.price}</p>
          <p className='text-sm text-[#999999] mt-2'>{property.location}</p>

          {/* Property Features */}
          {property.details?.length ? (
            <ul className='flex flex-wrap gap-3 mt-4'>
              {property.details.map((item, index) => (
                <li
                  key={index}
                  className='border flex items-center gap-2 border-[#262626] px-4 py-2 rounded-full bg-[#262626]'
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

          {/* Proceed to Booking Button */}
          <Link href={`/booking/${property.id}`}>
            <button className='bg-[#703BF7] hover:bg-[#5a2dc4] transition-colors text-white rounded-xl px-5 py-3 text-sm sm:text-base'>
              Proceed to Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
