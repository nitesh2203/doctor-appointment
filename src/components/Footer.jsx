import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left Side  */}
            <div>
             <img className='mb-5 w-40 ' src={assets.logo} alt="" />
             <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repudiandae consectetur odit quasi magni natus quisquam veritatis? A aliquam eos maiores repellendus. Perspiciatis minima laudantium sapiente accusantium quis est id.</p>
            </div>
             {/* middle Side  */}
             <div>
               <p className='text-xl font-medium mb-5'>COMPANY</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
               </ul>
             </div>
              {/* right Side  */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-78781-02351</li>
                <li>b220676@skit.ac.in</li>
               </ul>
            </div>
        </div>
        {/* Copy Right Text*/}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer