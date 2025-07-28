import React, { useEffect } from 'react'
import { Catrgories } from '../assets/mockData'
import E_shop from "../assets/images/e_shop.jpg"
import InfoSection from '../components/infosection'
import CategoriesSection from '../components/CategoriesSection'
import { setProducts } from '../redux/productSlice'
import { useDispatch,useSelector } from 'react-redux'



const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    useEffect(()=>
    {
        dispatch(setProducts())
    })
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2 '>
                <div className='w-full md:w-3/12'>
                    <div className='bg-teal-800 text-white text-xs font-bold px-2 py-2.5 border rounded-t-xl'>
                        SHOP BY CATEGORIES
                    </div>
                    <ul className='space-y-4 bg-gray-200 p-3 rounded-b-xl'>
                        {Catrgories.map((category, index) =>
                        (
                            <li key={index}>
                                <span className='w-2 h-2 border border-teal-800 mr-2'></span>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div >
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img className='w-150 shadow-md rounded-xl' src={E_shop} alt='E_shop Main Pic' />
                    <div className='absolute top-28 left-8'>
                        <p>Chaotic_boie Here</p>
                        <h2 className='text-2xl font-bold'>Welcome to E-Shop</h2>
                        <p>Tons of products to buy!!</p>
                        <p>Click the button below to start<br/> shoping</p>
                        <button className='bg-teal-800 ml-9 px-8 py-1.5 text-white mt-4 hover:bg-teal-800
                        transform transition-trasform duration-300 hover:scale-105'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <InfoSection/>
            <CategoriesSection/>
        </div>
    )
}

export default Home