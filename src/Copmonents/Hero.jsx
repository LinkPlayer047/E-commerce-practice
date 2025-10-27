import { MoveRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col-reverse md:flex-row lg:flex-row items-center border bg-gray-200 overflow-hidden rounded-2xl relative group border-gray-300 justify-between mycontainer py-10 text-gray-700 transition-all duration-500 hover:shadow-lg'>
        
        {/* Left Section */}
        <div className='w-full lg:w-1/2 px-6 md:px-10'>
          <p className='text-lg text-orange-500'>Exclusive Deal 40% off</p>
          <h1 className='text-lg lg:text-4xl font-bold text-gray-700'>
            Power Meets Elegance - Apple MacBook Pro is Here for you!
          </h1>
          <div className='mt-7 flex gap-6 max-sm:flex-col max-sm:items-center'>
            <button className='bg-amber-600 max-sm:text-xs rounded-full px-10 py-3 text-white hover:bg-amber-700 transition-all duration-300'>
              Order Now!
            </button>
            <button className='items-center flex gap-2 text-gray-800 hover:text-amber-600 transition-all duration-300'>
              Learn More <MoveRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-center w-full lg:w-1/2 p-6'>
          <img
            src="/Images/05.webp"
            alt="MacBook"
            className='h-60 md:h-80 lg:h-96 object-contain transform transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
