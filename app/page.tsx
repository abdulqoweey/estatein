import FaqPage from './Faq/page'
import Herosection from './components/Hero'
import FeaturedProperty from './components/featured'
// import TestData from './test'
import TestimonialPage from './testimonials/page'

export default function Home() {
  return (
    <div className='text-white'>
      <Herosection />
      <FeaturedProperty />
      <TestimonialPage />
      <FaqPage />
      {/* <TestData /> */}

      {/* CTA Section */}
      <div className='pt-16'>
        <div className="text-white border-t border-b border-[#262626] w-full bg-[url('/images/CTABackground.png')] bg-cover bg-center flex flex-col sm:flex-row items-center justify-center p-6 sm:p-16">
          <div className='text-center sm:text-left sm:w-3/4'>
            <h1 className='mb-3 text-xl sm:text-2xl font-semibold'>
              Start Your Real Estate Journey Today
            </h1>
            <p className='font-extralight text-sm sm:text-base text-[#999999]'>
              Your dream property is just a click away. Whether you are looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>

          <button className='bg-[#703BF7] text-white rounded-xl px-6 py-3 mt-6 sm:mt-0 sm:ml-6 w-full sm:w-auto'>
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  )
}
