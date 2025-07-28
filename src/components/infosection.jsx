import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const infosection = () => {
    const infoItem = [
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
            title:'',
            description:'',
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
    ]
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default infosection