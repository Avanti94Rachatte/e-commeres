import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { getData } from '../context/DataContext'

export const ProductListView = ({ product }) => {
  const { addToCart, cartItem } = useCart() // Access cart items and addToCart function
  const { wishlist, toggleWishlist } = getData() // Access wishlist and toggle function
  const navigate = useNavigate() // For programmatic navigation

  // Check if product is already in cart
  const isInCart = cartItem.some((item) => item.id === product.id)

  // Check if product is already in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  return (
    <div className="space-y-4 mt-2 rounded-md">
      {/* Product card container */}
      <div className="bg-gray-100 flex flex-col md:flex-row gap-4 md:gap-7 items-center p-4 rounded-md">
        
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/products/${product.id}`)} // Go to product details
          className="w-full md:w-60 h-48 md:h-60 rounded-md cursor-pointer object-cover"
        />

        {/* Product Details */}
        <div className="space-y-2 md:flex-1">
          {/* Product Title */}
          <h1 className="font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-full">
            {product.title}
          </h1>

          {/* Price and Discount */}
          <p className="font-semibold flex items-center md:text-lg text-sm">
            ₹ <span className="md:text-4xl text-3xl">{product.price}</span> ({product.discount}% off)
          </p>

          {/* Delivery Information */}
          <p className="text-sm">
            FREE delivery <span className="font-semibold">Within Seven Days</span>
            <br />
            Or fastest delivery <span className="font-semibold">Tomorrow</span>
          </p>

          {/* Add to Cart / Go to Cart Button */}
          {isInCart ? (
            // If product is in cart, show "Go to Cart" button
            <button
              onClick={() => navigate('/cart')}
              className="bg-green-500 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-green-600 transition duration-700 hover:scale-110"
            >
              Go to Cart 🛒
            </button>
          ) : (
            // If product is not in cart, show "Add to Cart" button
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-400 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-orange-600 transition duration-700 hover:scale-110"
            >
              <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductListView
