'use client'
import { useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  label: string
  content: ReactNode
  isOpen: boolean
  onClose: () => void
  showFooter?: boolean
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
}

const Modal: React.FC<ModalProps> = ({
  label,
  content,
  isOpen,
  onClose,
  showFooter = false,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
}) => {
  // ✅ Close modal on `Escape` key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // ✅ Ensure modal renders only when `isOpen`
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Click outside closes modal
          aria-hidden={!isOpen}
        >
          <motion.div
            className='w-[90%] md:w-[40%] lg:w-[700px] bg-[#141414] shadow-xl rounded-xl overflow-hidden'
            initial={{ scale: 0.9, opacity: 2 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* ✅ Header */}
            <header className='flex items-center justify-between p-6 border-b border-gray-300'>
              <h1 className='font-semibold text-lg'>{label}</h1>
              <button
                className='p-2 rounded-full hover:text-red-400'
                onClick={onClose}
              >
                ✖
              </button>
            </header>

            {/* ✅ Content */}
            <section className='p-6'>{content}</section>

            {/* ✅ Footer (Optional) */}
            {showFooter && (
              <footer className='flex justify-end gap-3 p-4 bg-[#141414] border-t border-gray-300'>
                <button
                  className='px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200'
                  onClick={onClose}
                >
                  {cancelText}
                </button>
                <button
                  className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                  onClick={onConfirm}
                >
                  {confirmText}
                </button>
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
