'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import UserNavbar from './userNavbar'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <nav className='bg-[#1A1A1A] text-white border-b border-[#262626] fixed top-0 left-0 w-full opacity-95 z-50'>
      <div className='px-6 sm:px-12 lg:px-32 py-5 flex justify-between items-center'>
        {/* ✅ Logo */}
        <div>
          <Link href='/'>
            <Image
              src='/images/logo.jpg' // Ensure this path matches your file structure
              alt='Estatein Logo'
              width={150}
              height={150}
              priority // Ensures fast loading
              className='w-24 sm:w-36 md:w-40'
              aria-hidden='true'
            />
          </Link>
        </div>

        {/* ✅ Desktop Navigation */}
        <ul className='hidden sm:flex gap-4'>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/propertylist', label: 'Properties' },
            { href: '/services', label: 'Services' },
          ].map((item, index) => (
            <li
              key={index}
              className='rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm hover:bg-[#262626] transition'
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* ✅ Contact Button */}
        <div className='hidden sm:block'>
          <Link
            href='/contact'
            className='bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm'
          >
            Contact Us
          </Link>
        </div>

        {/* ✅ User Navbar */}
        <UserNavbar />

        {/* ✅ Mobile Menu Toggle */}
        <button className='sm:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className='sm:hidden bg-[#1A1A1A] border-t border-[#262626] absolute top-full left-0 w-full py-5'
        >
          <ul className='flex flex-col text-center space-y-3'>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/propertylist', label: 'Properties' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact Us' },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className='block py-2 text-sm hover:bg-[#262626] transition'
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
