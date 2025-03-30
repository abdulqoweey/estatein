import Image from 'next/image'
import TestimonialCard from '../components/testimonialModal'

export default function TestimonialPage() {
  return (
    <div className='text-white pt-32 px-6 sm:px-16'>
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
          What Our Clients Say
        </h1>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6'>
          <p className='font-extralight text-sm sm:text-base text-[#999999] max-w-lg'>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <button className='text-sm bg-[#1A1A1A] text-white rounded-xl border border-[#262626] px-5 py-3 w-full sm:w-auto'>
            View All Testimonials
          </button>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

      {/* Pagination Controls */}
      <div className='border-t border-[#262626] flex flex-col sm:flex-row justify-between items-center p-4 mt-8'>
        <p className='text-sm'>01 of 60</p>
        <div className='flex gap-4'>
          <button>
            <Image
              src='arrowLeft.svg'
              width={40}
              height={40}
              alt='Previous'
              className='w-10 h-10'
            />
          </button>
          <button>
            <Image
              src='arrowRight.svg'
              width={40}
              height={40}
              alt='Next'
              className='w-10 h-10'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
