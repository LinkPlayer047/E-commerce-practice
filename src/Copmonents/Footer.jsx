import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='border-b py-15'>
        <div className='mycontainer'>
            <div className='mt-20 flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg-w-1/2'>
                    <img src="\Images\GMSlogo.png" alt="Logo" className='h-25' />
                    <p className='text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div  className='w-full lg-w-1/2 lg:flex'>
                    <div className='w-full'>
                    <h2 className='text-lg text-black'>Company</h2>
                    <a href="#">
                        <ul>
                            <li className='mt-3 text-sm text-gray-700 hover:underline'>Home</li>
                            <li className='mt-3 text-sm text-gray-700 hover:underline'>About Us</li>
                            <li className='mt-3 text-sm text-gray-700 hover:underline'>Contact Us</li>
                            <li className='mt-3 text-sm text-gray-700 hover:underline'>Privacy Policy</li>
                        </ul>
                    </a>
                </div>
                <div className='w-full'>
                    <h2 className='text-lg text-black'>Get in touch</h2>
                    <ul>
                        <li className='text-gray-400 mt-3'>+92 328 4468 247</li>
                        <li className='text-gray-400 mt-3'>info.abdullah57@gmail.com</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        
        </div>
        <div className='flex items-center justify-center py-3'><h2 className='text-sm text-gray-500 '>Copyright 2025 © GMS Agency All Right Reserved.</h2></div>
    </div>
  )
}

export default Footer