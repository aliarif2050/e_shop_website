import React from 'react'
import { Catrgories } from '../assets/mockData'
import E_shop from "../assets/images/e_shop.jpg"

const Home = () => {
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                <div className='w-full md:w-3/12'>
                    <div className='bg-teal-800 text-white text-xs font-bold px-2 py-2.5'>
                        SHOP BY CATEGORIES
                    </div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Catrgories.map((category, index) =>
                        (
                            <li key={index}>
                                <span className='w-2 h-2 border border-teal-800 rounded-full mr-2'></span>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div >
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img className='w-150 shadow-md' src={E_shop} alt='E_shop Main Pic' />
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
        </div>
    )
}

export default Home