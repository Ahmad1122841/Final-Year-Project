import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import AOS from "aos";
import "aos/dist/aos.css";

const OurPolicy = () => {

      useEffect(() => {
  
      AOS.init({
          duration: 2000,
          once: true
      });
  });
  return (
    <div className='bg-[#E6E6E4] flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div data-aos="fade-right">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>Easy Exchange policy</p>
            <p className='text-gray-400'>we offer hassle free exchange policy</p>
        </div>
         <div data-aos="fade-right">
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>we provide 7 days free return policy</p>
        </div>
         <div data-aos="fade-right">
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div> 
    </div>
  )
}

export default OurPolicy