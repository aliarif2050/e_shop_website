import React from 'react'
import { FaStar } from 'react-icons/fa'

const Productcard = ({product}) => {
  return (
    <div className='bg-white p-4 shadow rounded relative border
    transform transition-trasform duration-300 hover:scale-105'>
        <img src={product.image} alt="" className='w-full h-30 object-cover rounded-lg'/>
        <h3 className='text-lg font-semibold text-center'>{product.label}</h3>
        <p className='text-gray-500 text-center'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>


        </div>
         <div
        className='absolute bottom-1 right-1 flex items-center justify-center w-8 h-8 bg-teal-800
        group text-white text-sm rounded-full hover:w-19 hover:bg-teal-800 transition-all cursor-pointer'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to cart</span>
        </div>
    
    </div>
  )
}

export default Productcard