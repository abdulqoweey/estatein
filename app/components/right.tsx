import Link from 'next/link'
// import Image from 'next/image'

export default function Right() {
  return (
    <div className='flex flex-col sm:flex-row text-center justify-center items-center text-white px-6 sm:px-12 lg:px-32 py-4 space-x-5 sm:gap-0'>
      {/* 🔹 Copyright & Terms */}
      
        <p>© 2023 Estatein. All Rights Reserved.</p>
        <Link href='#'>
          <p className='hover:underline'>Terms & Conditions</p>
        </Link>
      
    </div>
  )
}
