interface Test {
  title: string
  description: string
  price: string
}
export default function TestCard({ test }: { test: Test }) {
  return (
    <div>
      {/* Property Details */}
      <div className='flex flex-col gap-3'>
        <h2 className='text-lg font-semibold'>{test.title}</h2>
        <p className='text-sm text-[#999999] line-clamp-2'>
          {test.description}
          <span className='text-[#703BF7] cursor-pointer ml-1 hover:underline'>
            Read More
          </span>
        </p>
      </div>

      {/* Property Features */}

      <div />
    </div>
  )
}
