'use client'
import { useState, useRef, useEffect } from 'react'
import { User } from 'lucide-react' // Import the Lucide User icon
import LoginModal from '@/app/components/Modals/loginModal'

const UserNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
    <div className='relative flex items-center'>
      {/* ✅ User Icon to Toggle Menu */}
      <button
        onClick={toggleMenu}
        className='cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition'
      >
        <User size={24} className='text-white' /> {/* Use Lucide User icon */}
      </button>

      {/* ✅ Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className='absolute right-0 top-12 w-48 md:w-56 bg-[#262626] text-white border border-[#333] z-50 rounded-xl py-2 shadow-lg'
        >
          <div
            className='hover:bg-gray-700 px-4 py-3 cursor-pointer transition'
            onClick={() => setIsLoginOpen(true)}
          >
            Login
            <LoginModal
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </div>

          <div className='hover:bg-gray-700 px-4 py-3 cursor-pointer transition'>
            Sign Up
          </div>
        </div>
      )}
    </div>
  )
}

export default UserNavbar
