import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({order}) => {
    const navigate= useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank You for Your Order</h2>
        <p>Your order has been placed! You will recieve an e-mail for further details and confirmation of your order! </p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-200'>
            <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
            <p>Order Number: {order.OrderNumber}</p>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>Billing Information</h2>
                <p>{order.billingInformation.name}</p>
                <p>{order.billingInformation.email}</p>
                <p>{order.billingInformation.phone}</p>
             </div>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
             </div>
             <div className='mt-4'>
                <h3 className='text-md font-semibold mb-2'>Products Ordered</h3>
                {order.products.map(product=>(
                    <div>
                        <p>{product.name} x {product.quantity}</p>
                        <p>{product.price*product.quantity}</p>

                    </div>
                ))}
             </div>
             <div className='mt-4 flex justify-between'>
                <span>Total Price:</span>
                <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
             </div>
             <div className='mt-6'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Order tracking</button>
                <button className='ml-4 bg-teal-800 text-white py-2 px-4 hover:bg-teal-900' onClick={()=> navigate('/')}>Continue Shopping</button>
             </div>
            

        </div>
    </div>
  )
}

export default Order