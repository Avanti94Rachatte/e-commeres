import banner from '../assets/banner.jpg'
import React from 'react'

export const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24 py-12 rounded-2xl">
      <div
        className="relative max-w-7xl mx-auto rounded-2xl md:rounded-2xl pt-24 md:pt-28 bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl  md:rounded-2xl flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Bringing Joy to Your Shopping Experience at Your Fingertips
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
            Deals, delights, and everything in between <span className='font-extrabold'>MY SHOP</span> shopping made simple.
            </p>
            <button className="bg-orange-300/70 hover:bg-orange-600 transform hover:scale-105 transition duration-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
