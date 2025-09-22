import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5"
import { useCart } from '../context/CartContext'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { getData } from "../context/DataContext"

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart, cartItem } = useCart() // Get cart items and addToCart function
  const { wishlist, toggleWishlist } = getData() // Get wishlist and toggle function

  // Check if product is in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  // Check if product is in cart
  const isInCart = cartItem.some((item) => item.id === product.id)

  return (
    <div
      className="
        flex
        relative
        border-b border-gray-100
        cursor-pointer
        hover:scale-105
        hover:shadow-2xl
        transition-all
        p-2
        h-max
        rounded-md
        bg-white
        md:flex flex-col
      "
    >
      {/* Product Image */}
      <div className="bg-cover">
        <img
          src={product.images ? product.images[0] : product.image} 
          alt={`${product.title}`}
          className="bg-gray-100 aspect-square"
          onClick={() => navigate(`/products/${product.id}`)} // Navigate to product details page
        />
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product)} // Add/remove product from wishlist
        className="absolute top-2 right-2 text-xl"
      >
        {isInWishlist ? (
          <FaHeart className="text-red-500" /> // Filled heart if in wishlist
        ) : (
          <FaRegHeart className="text-gray-500" /> // Empty heart if not in wishlist
        )}
      </button>

      {/* Product Info */}
      <h1 className="line-clamp-1 p-1 font-semibold text-sm sm:text-base md:text-lg">
        {product.title}
      </h1>
      <p className="my-1 text-sm sm:text-base md:text-lg text-gray-400">
        ₹{product.price}
      </p>

      {/* Add to Cart / Go to Cart Button */}
      {isInCart ? (
        <button
          onClick={() => navigate('/cart')} // Go to cart if already added
          className="bg-green-500 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-green-600 transition duration-700 hover:scale-110"
        >
          Go to Cart 🛒
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)} // Add product to cart
          className="bg-orange-400 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-orange-600 transition duration-700 hover:scale-110"
        >
          <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
          Add to Cart
        </button>
      )}
    </div>
  )
}
