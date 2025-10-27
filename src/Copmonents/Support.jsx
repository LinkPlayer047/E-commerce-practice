import React from 'react'

const Support = () => {
  return (
    <div>
        <div className='mycontainer'>
            <div className='mt-20 flex flex-col gap-3 text-center items-center justify-center'>
                <h2 className='text-3xl font-semibold text-gray-700'>Subscribe now & get 20% off</h2>
                <p className='text-gray-400 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='flex lg:w-[50%] w-full items-center'>
                    <div className='w-full border  rounded-l-lg'>
                    <input type="text" placeholder='Enter you email' className='px-5 py-4 rounded-l-md border-none w-full lg:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-orange-500' />
                    </div>
                    <button className='bg-orange-600 rounded-r-md border border-orange-600 lg:rounded-r-lg text-white hover:bg-orange-700 px-10 py-4'>Subscribe</button>
                </div>        
            </div>

        </div>
    </div>
  )
}

export default Support