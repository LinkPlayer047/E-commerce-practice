import { Search, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' border-b border-gray-300'>
      <div className="flex items-center justify-between mycontainer py-3 text-gray-700">
        <img src='\Images\GMSlogo.png' alt='' className='h-15'/>
        <div className='flex items-center gap-4 lg:gap-8 max-md:hidden'>
          <a href='#' className='text-lg text-gray-800 hover:text-black'>Home</a>
          <a href='#' className='text-lg text-gray-800 hover:text-black'>Shop</a>
          <a href='#' className='text-lg text-gray-800 hover:text-black'>About Us</a>
          <a href='#' className='text-lg text-gray-800 hover:text-black'>Contact</a>
          <button className='text-xs border border-gray-500 hover:border-black px-4 py-1.5 rounded-full'>Seller Dashboard</button>
        </div>
        <div>
          <ul className='hidden md:flex items-center gap-4'>
            <Search className='h-5' />
            <button className='flex items-center gap-2 '> <User /> Account</button>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar