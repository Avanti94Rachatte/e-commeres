import banner from '../assets/banner.jpg'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MidBanner = () => {
  const navigate = useNavigate() // Hook to navigate programmatically

  return (
    <div className="bg-gray-100 md:py-24 py-12 rounded-2xl">
      {/* Banner container with fixed height and responsive padding */}
      <div
        className="relative max-w-7xl mx-auto rounded-2xl md:rounded-2xl pt-24 md:pt-28 bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner})`, // Set banner image
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl md:rounded-2xl flex items-center justify-center px-4 sm:px-6">
          {/* Centered text content */}
          <div className="text-center text-white max-w-3xl">
            {/* Banner title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Bringing Joy to Your Shopping Experience at Your Fingertips
            </h1>
            {/* Banner subtitle */}
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Deals, delights, and everything in between <span className='font-extrabold'>MY SHOP</span> shopping made simple.
            </p>
            {/* Button to navigate to products page */}
            <button 
              onClick={() => navigate(`/products`)} // Navigate to /products on click
              className="bg-orange-300/70 hover:bg-orange-600 transform hover:scale-105 transition duration-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
