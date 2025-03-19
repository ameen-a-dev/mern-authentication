import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate  = useNavigate()
    let authorized = false

    useEffect(()=>{
        if(!authorized){
            navigate("/login")
        }
    },[authorized, navigate])
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700">Welcome, User!</h2>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <p className="text-gray-700 font-semibold">Full Name:</p>
          <p className="text-gray-600">John Doe</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <p className="text-gray-700 font-semibold">Email:</p>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <p className="text-gray-700 font-semibold">Phone:</p>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details
