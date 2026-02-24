import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import AOS from "aos";
import "aos/dist/aos.css";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(() => {
    setLatestProducts(products.slice(0, 12));

    AOS.init({
        duration: 2000,
        once: true
    });
}, [products]);

  return (
    <div className='my-10'>
        <div data-aos="fade-right" className='text-center py-8 text-3xl bg-[#E6E6E4]'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our Latest Collection, where style meets comfort. Explore trendy designs, premium quality, and must-have pieces carefully selected to elevate your everyday look. Stay ahead of fashion with our newest arrivals crafted just for you.
            </p>
        </div>
        <br />
        {/*Rendering Products */}
        <div data-aos="fade-up" data-aos-delay="200" className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>

    </div> 
  )
}

export default LatestCollection