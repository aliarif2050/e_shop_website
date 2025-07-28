import React from 'react'
import Man from '../assets/images/Man.jpg'
import Woman from '../assets/images/Woman.jpg'
import Kid from '../assets/images/Kids.jpg'

const CategoriesSection = () => {
  const Itemlist =[
    {
        title :'Men',
        imageUrl: Man,
        alt:'Men Category',
    },
    {
        title :'Women',
        imageUrl: Woman,
        alt:'Women Category',
    },
    {
        title :'Kids',
        imageUrl: Kid,
        alt:'Kids Category',
    }
  ]
    return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {Itemlist.map((item, index)=>(
            <div key={index} className='relative h-64 transform transition-trasform duration-300 hover:scale-105 cursor pointer'>
                <img src={item.imageUrl} alt={item.alt} className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-10 left-2'>
                    <p className='text-2xl font-bold'>{item.title}</p>
                    <p className='text-gray-700 text-sm'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategoriesSection