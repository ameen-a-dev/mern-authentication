import React from 'react'

const OTP = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700">OTP Verification</h2>
      <p className="text-center text-gray-600 mt-2">
        Enter the OTP sent to your email.
      </p>
      <form className="mt-6">
        <div>
          <label className="block text-gray-700">OTP Code</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
            placeholder="Enter OTP"
            maxLength="6"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Verify OTP
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Didn't receive the OTP?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Resend OTP
        </a>
      </p>
    </div>
  </div>
  )
}

export default OTP
