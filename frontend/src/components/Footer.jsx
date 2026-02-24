import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

          useEffect(() => {
      
          AOS.init({
              duration: 2000,
              once: true
          });
      });

  return (
    <footer data-aos="fade-right" className='bg-[#E6E6E4] text-gray-700 mt-32'>
      
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm'>

        {/* Logo + About */}
        <div>
          <img src={assets.logo} className='mb-6 w-36' alt="Logo" />
          <p className='text-gray-500 leading-relaxed'>
            We provide high-quality products with modern design and
            excellent customer service. Your satisfaction is our priority.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-lg font-semibold mb-6 text-gray-800'>Company</p>
          <ul className='space-y-3'>
            <li className='hover:text-black cursor-pointer transition'>Home</li>
            <li className='hover:text-black cursor-pointer transition'>About Us</li>
            <li className='hover:text-black cursor-pointer transition'>Delivery</li>
            <li className='hover:text-black cursor-pointer transition'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='text-lg font-semibold mb-6 text-gray-800'>Get In Touch</p>
          <ul className='space-y-3'>
            <li>+1-212-456-7890</li>
            <li>contact@AFCodersCommunity.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-300'>
        <p className='text-center text-gray-500 text-sm py-6'>
          © 2026 AF Coders Community. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
