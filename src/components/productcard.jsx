import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'


const Productcard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({ ...product, quantity: 1 }))
    alert("Product added successfully")
    confetti({
      particleCount: 500,
      spread: 360,
      origin: { x: 0.5, y: 0.5 }
    });
  }
  return (
    <Link to={`/product/${product.id}`}>
      <div className='bg-white p-4 shadow rounded relative border
    transform transition-trasform duration-300 hover:scale-105'>
        <img src={product.image} alt="" className='w-full h-30 object-cover rounded-lg' />
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
        group text-white text-sm rounded-full hover:w-19 hover:bg-teal-800 transition-all cursor-pointer overflow-visible'
          onClick={(e) => handleAddToCart(e, product)}>
          <span className='group-hover:hidden'>+</span>
          <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>
    </Link>
  )
}

export default Productcard