import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export const ProductListView = ({ product }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex flex-col md:flex-row gap-4 md:gap-7 items-center p-4 rounded-md">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/products/${product.id}`)}
          className="w-full md:w-60 h-48 md:h-60 rounded-md cursor-pointer object-cover"
        />

        {/* Details */}
        <div className="space-y-2 md:flex-1">
          <h1 className="font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-full">
            {product.title}
          </h1>

          <p className="font-semibold flex items-center md:text-lg text-sm">
            ₹ <span className="md:text-4xl text-3xl">{product.price}</span> ({product.discount}% off)
          </p>

          <p className="text-sm">
            FREE delivery <span className="font-semibold">Within Seven Days</span>
            <br />
            Or fastest delivery <span className="font-semibold">Tomorrow</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-400 text-white px-4 py-2 rounded-md mt-2 md:mt-4 hover:bg-orange-600 transition duration-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
