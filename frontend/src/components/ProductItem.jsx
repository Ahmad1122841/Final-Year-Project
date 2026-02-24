import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link 
    to={`/product/${id}`} 
    className='block bg-[#E6E6E4] rounded-lg overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:shadow-xl hover:scale-105'
    >
      {/* Image */}
      <div className='w-full'>
        <img 
          className='w-full object-contain transition-all duration-500 ease-in-out'
          src={image[0]} 
          alt={name} 
        />
      </div>
      {/* Bottom Content */}
      <div className='p-4 text-center border-t border-gray-300'>
        <p className='text-sm font-semibold'>{name}</p>
        <p className='text-gray-600 font-bold mt-1'>
          {currency}{price}
        </p>
      </div>

    </Link>
  )
}

export default ProductItem
