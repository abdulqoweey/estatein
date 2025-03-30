import Image from 'next/image'

export default function TestimonialCard() {
  return (
    <div className='md:grid gap-6 px-6 sm:px-8 lg:px-16'>
      <div className='border rounded-2xl border-[#262626] p-6 my-5 w-full max-w-md mx-auto'>
        {/* 🔹 Star Ratings */}
        <div className='flex flex-wrap gap-1 mb-4'>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src='/starIcon.svg'
              alt='Rating Icon'
              width={16}
              height={16}
              className='w-6 h-6'
            />
          ))}
        </div>

        {/* 🔹 Testimonial Content */}
        <div className='p-3'>
          <h1 className='text-lg font-semibold'>Exceptional Service!&apos;</h1>{' '}
          {/* Fixed the single quote */}
          <p className='text-sm text-[#999999] mt-2'>
            Our experience with Estatein was outstanding. Their teams dedication
            and professionalism made finding our dream home a breeze. Highly
            recommended!
          </p>
          {/* 🔹 Client Info */}
          <div className='flex gap-3 items-center my-6'>
            <Image
              src='/Images/clientImage.png'
              alt='Client Profile Picture'
              width={48}
              height={48}
              className='w-12 h-12 rounded-full'
            />
            <div>
              <h6 className='font-semibold'>Wade Warren</h6>
              <p className='text-sm text-[#999999]'>USA, California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
