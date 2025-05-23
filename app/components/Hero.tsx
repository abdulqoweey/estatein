'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Herosection() {
  return (
    <div className='text-white'>
      {/* ✅ Hero Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center p-6 pt-32 sm:p-12 lg:p-32 gap-10'>
        {/* Hero Texts */}
        <div className='text-center sm:text-left'>
          <h1 className='text-4xl sm:text-5xl font-bold leading-tight'>
            Discover Your Dream Property with Estatein
          </h1>
          <p className='my-6 text-[#999999] text-lg'>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-3 justify-center sm:justify-start'>
            <button className='bg-[#141414] rounded-xl border border-[#262626] px-6 py-3'>
              Learn More
            </button>
            <div>
              <Link href='/propertylist'>
                <button className='bg-[#703BF7] rounded-xl px-6 py-3 cursor-pointer'>
                  Browse Properties
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Section with Animation */}
          <div className='grid grid-cols-2 sm:flex gap-4 mt-10 justify-center sm:justify-start'>
            {[
              { number: '200+', text: 'Happy Customers' },
              { number: '10k+', text: 'Properties For Clients' },
              { number: '16+', text: 'Years of Experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 20px rgba(112, 59, 247, 0.4)',
                }}
                transition={{ duration: 0.3 }}
                className='p-6 border rounded-lg bg-[#1A1A1A] border-[#262626] text-center'
              >
                <h1 className='text-2xl font-extrabold'>{item.number}</h1>
                <p className='text-sm text-[#999999] font-extralight'>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className='flex justify-center'>
          <Image
            src='/images/herocontainer.jpg'
            alt='Hero Image'
            width={500}
            height={500}
            className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl'
            priority // Ensures the image loads faster
          />
        </div>
      </div>

      {/* ✅ Features Section with Animation */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center px-6 sm:px-12 lg:px-32 my-10'>
        {[
          { src: '/home-icon.svg', text: 'Find Your Dream Home' },
          {
            src: '/propertymanagement-icon.svg',
            text: 'Unlock Property Value',
          },
          { src: '/property-icon.svg', text: 'Effortless Property Management' },
          {
            src: '/investment-icon.svg',
            text: 'Smart Investments, Informed Decisions',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(112, 59, 247, 0.4)',
            }}
            transition={{ duration: 0.3 }}
            className='p-6 border rounded-lg bg-[#1A1A1A] border-[#262626]'
          >
            <Image
              src={feature.src}
              width={50}
              height={50}
              alt={feature.text}
              className='w-16 h-16 mx-auto'
            />
            <h1 className='m-3'>{feature.text}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
