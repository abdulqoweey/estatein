'use client'
import Image from 'next/image'
import { useState } from 'react'
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
    <div className='text-white px-6 sm:px-16 pt-32'>
      {/* ✅ Introduction */}
      <div className='text-center sm:text-left'>
        <h1 className='text-3xl font-bold'>About Estatein</h1>
        <p className='text-[#999999] text-base mt-3 max-w-lg leading-relaxed'>
          Estatein is built to simplify real estate transactions. Whether you
          are buying, selling, or renting, we ensure a seamless and stress-free
          experience.
        </p>
      </div>

      {/* ✅ Mission & Vision Tabs */}
      <div className='mt-12'>
        <div className='flex border-b border-[#262626] justify-center sm:justify-start'>
          <button
            className={`px-6 py-3 text-sm font-medium transition w-1/2 sm:w-auto text-center ${
              activeTab === 'mission'
                ? 'border-b-2 border-[#703BF7] text-[#703BF7]'
                : 'text-[#999999]'
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium transition w-1/2 sm:w-auto text-center ${
              activeTab === 'vision'
                ? 'border-b-2 border-[#703BF7] text-[#703BF7]'
                : 'text-[#999999]'
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
        </div>

        {/* Tab Content */}
        <div className='mt-6 bg-[#1A1A1A] p-6 rounded-xl border border-[#262626]'>
          {activeTab === 'mission' ? (
            <p className='text-base text-[#cccccc] leading-relaxed'>
              We aim to transform the real estate industry by making it more
              transparent, efficient, and accessible to everyone. Our goal is to
              eliminate barriers, streamline processes, and empower individuals
              with the information and tools they need to make informed
              decisions. By leveraging technology and innovation, we strive to
              create a seamless experience for buyers, sellers, and investors,
              ensuring that real estate transactions are simpler, faster, and
              more trustworthy than ever before.
            </p>
          ) : (
            <p className='text-base text-[#cccccc] leading-relaxed'>
              Our vision is to be the most trusted and innovative real estate
              platform, connecting buyers and sellers globally through seamless,
              technology-driven solutions. We strive to create a transparent and
              efficient marketplace where individuals and businesses can
              confidently navigate property transactions with ease. By
              leveraging cutting-edge technology, data-driven insights, and a
              user-centric approach, we aim to revolutionize the way people buy,
              sell, and invest in real estate. Our commitment to trust,
              innovation, and global accessibility ensures that we empower users
              with the tools and resources they need to make informed decisions
              and achieve their real estate goals effortlessly.
            </p>
          )}
        </div>
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
              desc: 'Our experienced professionals guide you through every step.',
              icon: <Briefcase size={50} className='text-[#703BF7]' />, // Using Lucide icon
            },
            {
              title: 'Verified Listings',
              desc: 'We guarantee genuine and authenticated property listings.',
              icon: <CheckCircle size={50} className='text-[#34D399]' />, // Using Lucide icon
            },
            {
              title: '24/7 Support',
              desc: 'We’re available around the clock to assist you.',
              icon: <LifeBuoy size={50} className='text-[#F59E0B]' />, // Using Lucide icon
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='border border-[#262626] rounded-xl p-6 flex flex-col items-center'
            >
              <div className='mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-semibold mt-4'>{feature.title}</h3>
              <p className='text-sm text-[#cccccc] text-center mt-2'>
                {feature.desc}
              </p>
            </div>
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
            <div
              key={member.name}
              className='border border-[#262626] rounded-xl overflow-hidden'
            >
              <Image
                src={member.image}
                width={400}
                height={250}
                alt={member.name}
                className='w-full h-60 object-cover'
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
                {expandedMember === member.name && (
                  <p className='text-sm text-[#cccccc] mt-3'>{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
