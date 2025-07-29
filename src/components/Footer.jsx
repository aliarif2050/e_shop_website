import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-teal-900 text-white py-7 px-4 md:px-16 lg:px-18'>
      <div className='conatainer mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div >
          <h3 className='text-lg font-bold'>E-Shop</h3>
          <p className='mt-4'>
            Your one-Step for all you need. Shop with us and experience the best online shopping.
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400 text-3xl'><FaFacebook /></a>
            <a href="" className='hover:text-gray-400 text-3xl'><FaDiscord /></a>
            <a href="" className='hover:text-gray-400 text-3xl'><FaGithub /></a>
            <a href="" className='hover:text-gray-400 text-3xl'><FaLinkedin /></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Enter email' className='w-full p-2 rounded-l-lg text-black bg-white border-teal-800' />
            <button className='bg-teal-950 text-white px-3 py-2 rounded-r-lg
            border border-teal-800'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-4 border-t border-gray-200 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 E-shop All right reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer