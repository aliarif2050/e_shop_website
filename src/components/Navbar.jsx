import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import Login from '../components/Login'
import Register from '../components/Register'
import { setSearchTerm } from '../redux/productSlice'

const Navbar = () => {
    const [isModalOpen, setIsModalOpen]=useState(false)
    const [isLogin,setIslogin] =useState(true)
    const products = useSelector(state => state.cart.products)
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const openSignUp = () => {
        setIslogin(false)
        setIsModalOpen(true)
    }
    const openLoginIn = () => {
        setIslogin(true)
        setIsModalOpen(true)
    }
    const handleSearch = (e) =>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')


    }
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className=' p-2 text-lg font-bold bg-teal-800 text-white rounded-3xl'>
                    <Link to="/">E-shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type='text' placeholder='Search Product'
                            className='w-full border py-2 px-4 rounded-xl' onChange={(e)=> setSearch(e.target.value)} />
                        <FaSearch className='absolute top-3 right-3 text-teal-800'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/cart' className='relative'><FaShoppingCart className='text-lg ' />
                    {products.length>0 ? (
                        <span className=' absolute top-0 text-xs w-4 left-3 bg-teal-800 rounded-full flex justify-center items-center text-white'>
                            {products.length}
                        </span>
                    ):null}
                    </Link>
                    <button className='hidden md:block' onClick={()=>setIsModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover: underline'>HOME</Link>
                <Link to="/shop" className='hover: underline'>SHOP</Link>
                <Link to="/" className='hover: underline'>CONTACT</Link>
                <Link to="/" className='hover: underline'>ABOUT</Link>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>{isLogin ? <Login openSignUp={openSignUp}/>: <Register openLoginIn={openLoginIn}/> }</Modal>
        </nav>
    )
}

export default Navbar