'use client'
import { useState } from 'react'
import Modal from '@/app/components/Modals/Modal'

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Logging in with:', { email, password })
    // TODO: Add authentication logic here
    onClose() // Close modal after login attempt
  }

  return (
    <Modal
      label='Login'
      isOpen={isOpen}
      onClose={onClose}
      showFooter={true}
      confirmText='Login'
      cancelText='Cancel'
      onConfirm={handleLogin}
      content={
        <form className='flex flex-col gap-4 '>
          
          {/* ✅ Email Input */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your email'
              required
            />
          </div>
          {/* ✅ Password Input */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your password'
              required
            />
          </div>
        </form>
      }
    />
  )
}
