import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-teal-800'/>,
            title:'Free Shipping',
            description:'Get your orders delivered free',
        },
        {
            icon:<FaHeadset className='text-3xl text-teal-800'/>,
            title:'Support 24/7',
            description:'We are here to assist you any time',
        },
        {
            icon: <FaMoneyBillWave className='text-3xl text-teal-800'/>,
            title:'100% Money Back',
            description:'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className='text-3xl text-teal-800'/>,
            title:'Payment Secure',
            description:'Your payment info is safe with us',
        },
        {
            icon: <FaTag className='text-3xl text-teal-800'/>,
            title:'Discount',
            description:'Enjoy the best prices on our products',
        },
    ];
  return (
    <div className='bg-white pb-7 pt-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item,index)=>(
                <div key= {index} className='flex flex-col items-center text-center p-4 rounded-lg shadow-2xl
                transform transition-trasform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection