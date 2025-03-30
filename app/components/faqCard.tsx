export default function FaqCard() {
  return (
    <div className='w-full md:grid grid-cols-12 gap-6'>
      {/* First Question */}
      <div className='border md:col-span-4 rounded-2xl border-[#262626] p-6 w-full'>
        <h1 className='text-lg font-semibold'>
          How do I search for properties on Estatein?
        </h1>
        <p className='text-sm text-[#999999] my-4'>
          Learn how to use our user-friendly search tools to find properties
          that match your criteria.
        </p>
        <button className='bg-[#1A1A1A] rounded-xl border border-[#262626] px-6 py-3 w-full sm:w-auto'>
          Learn More
        </button>
      </div>

      {/* Second Question */}
      <div className='md:col-span-4 border rounded-2xl border-[#262626] p-6 w-full'>
        <h1 className='text-lg font-semibold'>
          What documents do I need to sell my property through Estatein?
        </h1>
        <p className='text-sm text-[#999999] my-4'>
          Find out about the necessary documentation for listing your property
          with us.
        </p>
        <button className='bg-[#1A1A1A] rounded-xl border border-[#262626] px-6 py-3 w-full sm:w-auto'>
          Learn More
        </button>
      </div>

      {/* Third Question */}
      <div className='md:col-span-4 border rounded-2xl border-[#262626] p-6 w-full'>
        <h1 className='text-lg font-semibold'>
          How can I contact an Estatein agent?
        </h1>
        <p className='text-sm text-[#999999] my-4'>
          Discover the different ways you can get in touch with our experienced
          agents.
        </p>
        <button className='bg-[#1A1A1A] rounded-xl border border-[#262626] px-6 py-3 w-full sm:w-auto'>
          Learn More
        </button>
      </div>
    </div>
  )
}
