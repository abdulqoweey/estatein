import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 px-6 sm:px-12 lg:px-32 py-16 bg-[#131313]'>
      {/* ✅ Left Section (Logo & Newsletter) */}
      <div className='col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left'>
        {/* Logo */}
        <Link href='#'>
          <Image
            src='/Images/Logo.png'
            alt='App logo'
            width={150}
            height={150}
            className='mx-auto lg:mx-0'
          />
        </Link>

        {/* Newsletter Form */}
        <form className='py-10 relative w-full max-w-md'>
          <input
            type='email'
            className='border border-[#262626] bg-transparent rounded-lg text-xs p-4 pl-12 pr-12 w-full'
            placeholder='Your Email'
          />
          {/* Email Icon */}
          <span className='absolute left-4 top-1/2 transform -translate-y-1/2'>
            <Image
              src='/emailIcon.svg'
              alt='Email Icon'
              width={20}
              height={20}
            />
          </span>
          {/* Send Icon */}
          <span className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'>
            <Image src='/sendIcon.svg' alt='Send Icon' width={24} height={24} />
          </span>
        </form>
      </div>

      {/* ✅ Right Section (Navigation Links) */}
      <div className='col-span-12 lg:col-span-7 flex flex-wrap justify-between mt-8 lg:mt-0 gap-6'>
        {[
          {
            title: 'Home',
            links: [
              'Hero Section',
              'Features',
              'Properties',
              'Testimonials',
              'FAQs',
            ],
          },
          {
            title: 'About Us',
            links: [
              'Our Story',
              'Our Works',
              'How it works',
              'Our Team',
              'Our Clients',
            ],
          },
          { title: 'Properties', links: ['Portfolio', 'Categories'] },
          {
            title: 'Services',
            links: [
              'Valuation Mastery',
              'Strategic Marketing',
              'Negotiation Wizardry',
              'Closing Success',
              'Property Management',
            ],
          },
          { title: 'Contact Us', links: ['Contact Form', 'Our Offices'] },
        ].map((section, index) => (
          <div key={index} className='w-1/2 sm:w-1/3 lg:w-auto'>
            <h4 className='text-[#999999] font-semibold'>{section.title}</h4>
            <ul className='flex flex-col gap-3 mt-2 text-sm'>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href='#'>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
