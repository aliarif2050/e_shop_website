import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className=' p-2 text-lg font-bold bg-teal-800 text-white rounded-3xl'>
                    <Link to="/">E-shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form action="">
                        <input type='text' placeholder='Search Product'
                            className='w-full border py-2 px-4 rounded-xl' />
                        <FaSearch className='absolute top-3 right-3 text-teal-800'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/cart' className='relative'><FaShoppingCart className='text-lg ' />
                    {products.length>0 && (
                        <span className=' absolute top-0 text-xs w-4 left-3 bg-teal-800 rounded-full flex justify-center items-center text-white'>
                            {products.length}
                        </span>
                    )}
                    </Link>
                    <button className='hidden md:block'>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/home" className='hover: underline'>HOME</Link>
                <Link to="/shop" className='hover: underline'>SHOP</Link>
                <Link to="/" className='hover: underline'>CONTACT</Link>
                <Link to="/" className='hover: underline'>ABOUT</Link>

            </div>
        </nav>
    )
}

export default Navbar