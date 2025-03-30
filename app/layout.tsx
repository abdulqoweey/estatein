// import type { Metadata } from 'next'
'use client'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Right from './components/right'
// import Modal from './components/Modals/Modal'
import NavBar from './components/navBar/navbar'
// import { useState } from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <html lang='en'>
      <body className={`${urbanist.className} antialiased bg-[#141414]`}>
        <NavBar />

        <main className=''>{children}</main>

        <Footer />
        <Right />

        {/* ✅ Button to Open Modal */}
      </body>
    </html>
  )
}
