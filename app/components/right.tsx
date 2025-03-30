import Link from 'next/link'
import Image from 'next/image'

export default function Right() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center text-white px-6 sm:px-12 lg:px-32 py-4 gap-4 sm:gap-0'>
      {/* 🔹 Copyright & Terms */}
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 text-sm text-center sm:text-left'>
        <p>© 2023 Estatein. All Rights Reserved.</p>
        <Link href='#'>
          <p className='hover:underline'>Terms & Conditions</p>
        </Link>
      </div>

      {/* 🔹 Social Media Icons */}
      <Image
        src='/Images/Social Icon.png'
        alt='Social Media Icons'
        width={150}
        height={150}
        className='w-40 sm:w-64 h-auto'
      />
    </div>
  )
}
