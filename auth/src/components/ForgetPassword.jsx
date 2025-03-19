import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = () => {
    
    const navigate  =useNavigate()
    const email = useRef()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // checking email format
        console.log(email.current.value);
        
        if(emailPattern.test(email.current.value)){
            navigate("/otp")
        }else{
           toast("Emial Format is not correct");
        }
      
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Forgot Password</h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your email address to reset your password.
        </p>
        <form className="mt-6" onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              ref={email}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Remembered your password?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ForgetPassword
