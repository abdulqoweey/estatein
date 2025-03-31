'use client'
import Image from 'next/image'
import { useState } from 'react'
import FaqCard from '../components/faqCard'

export default function FaqPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3 // Adjust this dynamically if fetching from an API

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className='text-white pt-32 px-6 sm:px-32'>
      {/* Heading & Description */}
      <div className='text-center sm:text-left'>
        <Image
          src='AbstractDesign.svg'
          width={50}
          height={50}
          alt='Abstract Design'
          className='w-12 h-12 mx-auto sm:mx-0'
        />
        <h1 className='mb-3 text-xl sm:text-2xl font-semibold'>
          Frequently Asked Questions
        </h1>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6'>
          <p className='font-extralight text-sm sm:text-base text-[#999999] max-w-lg'>
            Find answers to common questions about Estate&apos;s services,
            property listings, and the real estate process. We are here to
            provide clarity and assist you every step of the way.
          </p>
          <button className='text-sm bg-[#1A1A1A] text-white rounded-xl border border-[#262626] px-5 py-3 w-full sm:w-auto'>
            View All FAQs
          </button>
        </div>
      </div>

      {/* FAQ Cards */}
      <div className='gap-6 mt-8'>
        <FaqCard />
      </div>

      {/* Pagination Controls */}
      <div className='border-t border-[#262626] flex flex-col sm:flex-row justify-between items-center p-4 mt-8'>
        <p className='text-sm'>
          {currentPage} of {totalPages}
        </p>
        <div className='flex gap-4'>
          <button onClick={handlePrev} disabled={currentPage === 1}>
            <Image
              src='arrowLeft.svg'
              width={40}
              height={40}
              alt='Previous'
              className={`w-10 h-10 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <Image
              src='arrowRight.svg'
              width={40}
              height={40}
              alt='Next'
              className={`w-10 h-10 ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
