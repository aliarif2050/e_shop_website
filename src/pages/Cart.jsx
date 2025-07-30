import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../assets/images/emptyCart.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { useDispatch } from 'react-redux'
import { increaseQuantity,decreaseQuantity,removeItem} from '../redux/cartSlice'
import { Navigate, useNavigate } from 'react-router-dom'
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address,setAddress]=useState('main street,0012')
    const [isModalOpen,setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleDecreaseCount = (id) =>{
        dispatch(decreaseQuantity(id))
    }
     const handleIncreaseCount = (id)=>{
        dispatch(increaseQuantity(id))
     }
     const toremoveItem = (id) =>{
        dispatch(removeItem(id))
     }
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>
            {cart.products.length > 0 ?
                (<div>
                    <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold '>
                                <p>PRODUCTS</p>
                                <div className='flex space-x-10'>
                                    <p>PRICE&emsp;&emsp;</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                            {cart.products.map((product) =>
                                    product.quantity > 0 ?(
                                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                    <div className='md:flex items-center space-x-5'>
                                        <img src={product.image} alt={product.label} className='w-12 h-12 object-contain rounded' />
                                        <div className='flex'>
                                            <h3 className='font-bold pr-1'>{product.name}</h3>
                                        </div>
                                    </div>
                                    <div className='flex space-x-11 items-center'>
                                        <p>${product.price}</p>
                                        <div className='flex items-center justify-center border rounded-full'>
                                            <button className='text-xl px-2.5 py-0.5 rounded-l-full bg-teal-800 text-white cursor-pointer '
                                             onClick={()=>handleDecreaseCount(product.id)}>-</button>
                                            <p className='text-xl px-2 '>{product.quantity}</p>
                                            <button className='text-xl px-2 py-0.5 bg-teal-800 text-white rounded-r-full cursor-pointer' onClick={()=>handleIncreaseCount(product.id)}>+</button>
                                        </div>
                                        <p>${(product.quantity * product.price).toFixed(2)}&nbsp;&nbsp;</p>
                                        <button className='text-teal-800 hover:text-black cursor-pointer'>
                                            <FaTrashAlt onClick={()=>toremoveItem(product.id)}/>
                                        </button>
                                    </div>
                                </div>
                            ): null
                        )}

                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping</p>
                                <p className='ml-2'>Shipping to{" "}</p>
                                <span className='text-sm font-bold'>{address}</span>
                                <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={()=> setIsModalOpen(true)}>Change Address</button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total Price: </span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-teal-800 text-white py-2 hover:bg-teal-950 rounded-full'
                            onClick={()=>navigate('/checkout')}>Procced to Checkout</button>
                        </div>
                        <Modal isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}>
                            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
                            </Modal>
                    </div>
                </div>)
                : <div className='flex justify-center'>
                    <img src={EmptyCart} alt="" />
                </div>}

        </div>
    )
}

export default Cart