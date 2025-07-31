import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/cartSlice'
import  emailjs from 'emailjs-com'


const Checkout = ({ setOrder, orderNumber }) => {
    const [billingToglle, setBillingToggle] = useState(true)
    const [shippingToglle, setShippingToggle] = useState(true)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [paymentToglle, setPaymentToggle] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sendOrderEmail = (order) => {
        const templateParams = {
            name: order.billingInformation.name?.trim(),
            email: order.billingInformation.email?.toLowerCase(),
            phone: order.billingInformation.phone,
            address: order.shippingInformation.address,
            city: order.shippingInformation.city,
            zip: order.shippingInformation.zip,
            products: order.products.map(p => `${p.name} x ${p.quantity}`).join(', '),
            total: order.totalPrice.toFixed(2),
            to_email: import.meta.env.VITE_RECEIVER_EMAIL,  
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((res) => console.log("✅ Email sent!", res.status))
            .catch((err) => console.error("❌ Email failed:", err));
    };


    const handleOrder = () => {
        // Basic form validation
        if (
            !BillingInfo.name ||
            !BillingInfo.email ||
            !BillingInfo.phone ||
            !ShippingInfo.address ||
            !ShippingInfo.city ||
            !ShippingInfo.zip
        ) {
            alert("⚠️ Please fill in all billing and shipping details before placing the order.");
            return;
        }

        const newOrder = {
            products: cart.products,
            OrderNumber: orderNumber,
            shippingInformation: ShippingInfo,
            billingInformation: BillingInfo,
            totalPrice: cart.totalPrice
        };

        sendOrderEmail(newOrder);
        setOrder(newOrder);
        dispatch(clearCart());
        navigate('/order-confirmation');
    };

    const cart = useSelector(state => state.cart)
    const [BillingInfo, setBillingInfo] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [ShippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: '',
    })


    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>

            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/*Billing Info */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToglle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToglle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${billingToglle ? "" : "hidden"}`}>
                            <div>
                                <div>
                                    <label className='block text-gray-700'>Name</label>
                                    <input type="text" name='name' placeholder='Enter Name' value={BillingInfo.name}
                                        className='w-full px-3 py-2 border' onChange={(e) => setBillingInfo({ ...BillingInfo, name: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className='block text-gray-700'>Email</label>
                                    <input type="email" name='email' placeholder='Enter Email' value={BillingInfo.email}
                                        className='w-full px-3 py-2 border' onChange={(e) => setBillingInfo({ ...BillingInfo, email: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="">Phone</label>
                                    <input type="text" name='phone' placeholder='Enter Phone' value={BillingInfo.phone}
                                        className='w-full px-3 py-2 border' onChange={(e) => setBillingInfo({ ...BillingInfo, phone: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Shipping Info */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToglle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToglle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${shippingToglle ? "" : "hidden"}`}>
                            <div>
                                <div>
                                    <label className='block text-gray-700'>Address</label>
                                    <input type="text" name='address' placeholder='Enter Address' value={ShippingInfo.address}
                                        className='w-full px-3 py-2 border' onChange={(e) => setShippingInfo({ ...ShippingInfo, address: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className='block text-gray-700'>City Name</label>
                                    <input type="text" name='city' placeholder='Enter City Name' value={ShippingInfo.city}
                                        className='w-full px-3 py-2 border' onChange={(e) => setShippingInfo({ ...ShippingInfo, city: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="">Zip Code</label>
                                    <input type="text" name='zip code' placeholder='Enter Zip code' value={ShippingInfo.zip}
                                        className='w-full px-3 py-2 border' onChange={(e) => setShippingInfo({ ...ShippingInfo, zip: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Payment Info */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToglle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToglle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${paymentToglle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>

                                <input type="radio" name='payment' checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')} />
                                <label className='block text-gray-700 ml-2'>Cash on Delivery</label>

                            </div>
                            {/* <div className='flex items-center mb-2'>

                                <input type="radio" name='payment' checked={paymentMethod === 'debit card'}
                                    onChange={() => setPaymentMethod('debit card')} />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>

                            </div>
                            {paymentMethod === 'debit card' ? (
                                <div className='bg-gray-300 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input type="text" placeholder='Enter Card Number' className='p-1 w-full bg-gray-100 rounded' required />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card Holder Name' className='p-1 w-full bg-gray-100 rounded' required />
                                    </div>
                                    <div className='flex'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                                            <input type="text" placeholder='MM/YY' className='p-1 bg-gray-100 rounded w-full' required />
                                        </div>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input type="text" placeholder='Enter CVV' className='p-1 bg-gray-100 rounded w-full' required />
                                        </div>
                                    </div>
                                </div>
                            ) : null} */}
                        </div>
                        <p>WE WILL ADD OTHER PAYMENT TYPES SOON😊</p>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>${product.price} x {product.quantity}</p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price</span>
                            <span>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className='w-full bg-teal-800 text-white py-2 mt-6 hover:bg-teal-800 rounded-full'
                        onClick={handleOrder}>
                        Place Order</button>
                </div>

            </div>
        </div>)
}


export default Checkout