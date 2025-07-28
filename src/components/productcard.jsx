import React from 'react'
import { FaStar } from 'react-icons/fa'

const Productcard = ({product}) => {
  return (
    <div className='bg-white p-4 shadow rounded relative border
    transform transition-trasform duration-300 hover:scale-105'>
        <img src={product.image} alt="" />
        <h3 className='text-lg font-semibold'>{product.label}</h3>
        <p className='text-gray-500'>{product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>


        </div>
        <div
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-teal-800
        group text-white text-sm rounded-full hover:w-32 hover:bg-teal-800 transition-all'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to cart</span>
        </div>

    </div>
  )
}

export default Productcard