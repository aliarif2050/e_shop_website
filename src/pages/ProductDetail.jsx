import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState()
    const products = useSelector(state => state.product.products)
    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id))
        setProduct(newProduct)
    }, [id, products])

    const handleAddToCart = (e) => {
        e.preventDefault()
        if (!product) return
        const productWithQty = {
            id: product.id,
            label: product.label,           // renamed from `name`
            price: product.price,
            quantity: quantity,
            image: product.image
        }
        dispatch(addToCart(productWithQty))
        alert("Product added successfully")
        confetti({
            particleCount: 500,
            spread: 360,
            origin: { x: 0.5, y: 0.5 }
        })
    }


    if (!product) return <div>Loading...</div>
    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-x-16'>
                <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                    <img src={product.image} alt={product.label} className='h-full' />
                </div>
                <div className='md:w-1/2 py-4 shadow-md md:px-16 flex flex-col items-center gap-y-2'>
                    <h2 className='text-3xl font-semibold mb-2'>{product.label}</h2>
                    <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
                    <div className='flex items-center mb-4 gap-x-2'>
                        <input
                            type="number"
                            id="quantity"
                            className="border p-1 w-16"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />

                        <button className='bg-teal-800 text-white py-1.5 px-4 hover:bg-teal-900' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    <div className='flex flex-col gap-y-4 mt-4'>
                        <p className='flex items-center'><FaCarSide className='mr-1' />Delivery & Return</p>
                        <p className='flex items-center'><FaQuestion className='mr-1' />Ask a Question</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-2'></h3>
                <p>Product description will go here</p>
            </div>
        </div>
    )
}

export default ProductDetail