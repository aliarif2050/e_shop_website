import React from 'react'

const Register = ({openLoginIn}) => {
  return (
    <div>
            <h2 className='texr-2xl font-bold mb-4'>Sign Up</h2>
            <form >
                 <div className='mb-4'>
                    <label className='block text-gray-700'>Name</label>
                    <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email ' className='w-full px-3 py-2 border'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'/>
                </div>
                
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-teal-800 text-white py-2 rounded-full'>Sign Up</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Already have an Account</span>
                <button className='text-teal-800 rounded-full ml-3' onClick={openLoginIn}>Login</button>
            </div>
        </div>
  )
}

export default Register