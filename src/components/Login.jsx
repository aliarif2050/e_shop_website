import React from 'react'

const Login = ({openSignUp}) => {
    return (
        <div>
            <h2 className='texr-2xl font-bold mb-4'>Login</h2>
            <form >
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'/>
                </div>
                <div className='mb-4 flex items-center justify-between'>
                    <label htmlFor="" className='inline-flex items-center'>
                        <input type="checkbox" name="" id="" className='form-checkbox'/>
                        <span className=' ml-2 yext-gray-700 '>Remember Me</span>
                    </label>
                    <a href="#" className='text-teal-800'>Forgot Password?</a>
                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-teal-800 text-white py-2 rounded-full'>Login</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Don't have an Account</span>
                <button className='text-teal-800 rounded-full ml-4 cursor-pointer' onClick={openSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login