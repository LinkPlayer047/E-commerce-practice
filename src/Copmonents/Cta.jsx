import React from 'react'

const Cta = () => {
  return (
    <div>
        <div className='mycontainer'>
            <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center justify-center gap-10 bg-gray-200 rounded-2xl mt-20'>
                <div>
                    <img src="/Speakers.png" alt="" className='h-70' />
                </div>
                <div className='flex flex-col items-center justify-center text-center gap-5'>
                    <h2 className='text-3xl text-gray-800 font-semibold'>Level up your Gaming Experience</h2>
                    <p>From immersive sound to precise controls—everything you need to win</p>
                    <button className='text-white hover:bg-orange-700 rounded-lg px-10 py-3 bg-orange-600'>Buy Now </button>
                </div>
                <div>
                    <img src="/Images/gaming.png" alt="" className='h-70' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Cta