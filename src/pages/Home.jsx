import React, { useEffect } from 'react'
import { Catrgories, mockData } from '../assets/mockData'
import Dashing from "../assets/images/png-1.png"
import InfoSection from '../components/infosection'
import CategoriesSection from '../components/CategoriesSection'
import { setProducts } from '../redux/productSlice'
import { useDispatch,useSelector } from 'react-redux'
import Productcard from '../components/productcard'
import Shop from './Shop'
import { useNavigate } from 'react-router-dom'




const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    const navigate = useNavigate()
    useEffect(()=>
    {
        dispatch(setProducts(mockData))
    })
    const hanldleClick = ()=>{
        navigate('/shop')
    }
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
            <div className='container mx-auto py-7 flex flex-col md:flex-row space-x-2 '>
                <div className='w-full md:w-3/12'>
                    <div className='bg-teal-800 text-white text-xs font-bold px-2 py-2.5 border rounded-t-xl'>
                        SHOP BY CATEGORIES
                    </div>
                    <ul className='space-y-4 bg-gray-200 p-3 rounded-b-xl'>
                        {Catrgories.map((category, index) =>
                        (
                            <li key={index} className='cursor-pointer'>
                                <span className='w-2 h-2 border border-teal-800 mr-2'></span> 
                                {category}
                            </li>
                        ))}
                    </ul>
                </div >
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img className='w-177 h-105 shadow-md rounded-xl' src={Dashing} alt='E_shop Main Pic' />
                    <div className='absolute top-27 left-2 md:top-28 md:left-8'>
                        <p className='text-sm md:text-xl'>Chaotic_boie Here</p>
                        <h2 className='text-lg font-bold md:text-2xl'>Welcome to E-Shop</h2>
                        <p className='text-sm md:text-xl'>Tons of products to buy!!</p>
                        <p className='text-sm md:text-xl'>Click the button below to start<br/> shoping</p>
                        <button className='bg-teal-800 rounded-full ml-9 px-8 py-1.5 text-white mt-4 hover:bg-teal-800
                        transform transition-trasform duration-300 hover:scale-105 cursor-pointer' onClick={hanldleClick}>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <InfoSection/>
            <CategoriesSection/>
            <div className='container mx-auto py-12 '>
                <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                gap-6'>
                    {products.products.slice(0,5).map((product)=>(
                    <Productcard product={product}/>
                    ))}
                </div>
            </div>
            <Shop/>
        </div>
    )
}

export default Home