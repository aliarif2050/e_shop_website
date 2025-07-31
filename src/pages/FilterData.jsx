import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../components/productcard'
import no_item from '../assets/images/no_item.png'

const FilterData = () => {
  const filterProducts = useSelector(state => state.product.filteredData)

  return (
    <div className='mx-auto py-12 md:px-16 lg:px-12'>
      {filterProducts.length > 0 ?
        <>
          <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                gap-6'>
            {filterProducts.map((product) => (
              <Productcard product={product} />
            ))}
          </div>
        </> :
        <div className='flex justify-center'>
          <img src={no_item} alt="No Item Found" />
        </div>
}
    </div>
  )
}

export default FilterData