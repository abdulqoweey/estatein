'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TeamMemberData } from '../components/teamData'
import { Briefcase, CheckCircle, LifeBuoy } from 'lucide-react' // Import Lucide icons

interface TeamMemberData {
  name: string
  role: string
  image: string
  bio: string
}

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-white px-6 sm:px-16 pt-32'
    >
      {/* ✅ Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className='text-3xl font-bold'>About Estatein</h1>
        <p className='text-[#999999] text-base mt-3 max-w-lg leading-relaxed'>
          Estatein is built to simplify real estate transactions. Whether you
          are buying, selling, or renting, we ensure a seamless and stress-free
          experience.
        </p>
      </motion.div>

      {/* ✅ Mission & Vision Tabs */}
      <div className='mt-12'>
        <div className='flex border-b border-[#262626] justify-center sm:justify-start'>
          {['mission', 'vision'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-sm font-medium transition w-1/2 sm:w-auto text-center ${
                activeTab === tab
                  ? 'border-b-2 border-[#703BF7] text-[#703BF7]'
                  : 'text-[#999999]'
              }`}
              onClick={() => setActiveTab(tab as 'mission' | 'vision')}
            >
              {tab === 'mission' ? 'Our Mission' : 'Our Vision'}
            </button>
          ))}
        </div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className='mt-6 bg-[#1A1A1A] p-6 rounded-xl border border-[#262626]'
          >
            <p className='text-base text-[#cccccc] leading-relaxed'>
              {activeTab === 'mission'
                ? 'We aim to transform the real estate industry by making it more transparent, efficient, and accessible to everyone...'
                : 'Our vision is to be the most trusted and innovative real estate platform, connecting buyers and sellers globally...'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ Why Choose Us */}
      <div className='mt-16'>
        <h2 className='text-2xl font-bold text-center sm:text-left'>
          Why Choose Estatein?
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {[
            {
              title: 'Expert Agents',
              desc: 'Our experienced professionals guide you.',
              icon: <Briefcase size={50} className='text-[#703BF7]' />,
            },
            {
              title: 'Verified Listings',
              desc: 'We guarantee genuine listings.',
              icon: <CheckCircle size={50} className='text-[#34D399]' />,
            },
            {
              title: '24/7 Support',
              desc: 'We’re available anytime.',
              icon: <LifeBuoy size={50} className='text-[#F59E0B]' />,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className='border border-[#262626] rounded-xl p-6 flex flex-col items-center'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className='mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-semibold mt-4'>{feature.title}</h3>
              <p className='text-sm text-[#cccccc] text-center mt-2'>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Team Section (Expandable) */}
      <div className='mt-16'>
        <h2 className='text-2xl font-bold text-center sm:text-left'>
          Meet Our Team
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {TeamMemberData.map((member) => (
            <motion.div
              key={member.name}
              className='border border-[#262626] rounded-xl overflow-hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={member.image}
                width={400}
                height={250}
                alt={member.name}
                className='w-full h-60 object-cover transition-transform duration-300 hover:scale-105'
              />
              <div className='p-4 text-center'>
                <h3 className='text-lg font-semibold'>{member.name}</h3>
                <p className='text-sm text-[#cccccc]'>{member.role}</p>
                <button
                  className='bg-[#703BF7] text-white rounded-lg px-4 py-2 mt-3 text-sm'
                  onClick={() =>
                    setExpandedMember(
                      expandedMember === member.name ? null : member.name
                    )
                  }
                >
                  {expandedMember === member.name ? 'Hide Bio' : 'View Bio'}
                </button>
                <AnimatePresence>
                  {expandedMember === member.name && (
                    <motion.p
                      className='text-sm text-[#cccccc] mt-3'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.bio}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
