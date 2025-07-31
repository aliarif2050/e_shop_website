import React from 'react'
import Productcard from '../components/productcard'
import { useSelector } from 'react-redux'

const Shop = () => {
  const products = useSelector(state => state.product)

  return (
    <div className='mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {products.products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
