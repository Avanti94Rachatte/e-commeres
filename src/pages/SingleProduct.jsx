import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Breadcrums } from '../components/Breadcrums';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from '../context/CartContext';

export const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();

  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }  
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  const discount = singleProduct?.discountPercentage || 0;
  const originalPrice = singleProduct?.price
    ? singleProduct.price + (singleProduct.price * discount) / 100
    : 0;

  // Check if item is already in cart
  const isInCart = cartItem.some((item) => item.id === singleProduct.id);

  return (
    <div className="px-4 sm:px-6 md:px-8 pb-10">
      <Breadcrums title={singleProduct.title} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            className="rounded-xl w-full object-contain max-h-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            {singleProduct.brand?.toUpperCase()} / {singleProduct.category?.toUpperCase()}
          </p>

          {/* Price Section */}
          <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-semibold">
            <span className="text-red-500">₹ {singleProduct.price}</span>
            <span className="line-through text-gray-400 text-base sm:text-lg">₹ {Math.round(originalPrice)}</span>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-md">
              {discount}% OFF
            </span>
          </div>

          <p className="text-gray-700 text-sm sm:text-base">{singleProduct.description}</p>

          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
            <label htmlFor="qty" className="text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              value={quantity}
              id="qty"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Add to Cart / Go to Cart Button */}
          <div className="mt-6">
            {isInCart ? (
              <button
                onClick={() => navigate('/cart')}
                className="bg-green-500 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-green-600 transition duration-700 hover:scale-105"
              >
                Go to Cart 🛒
              </button>
            ) : (
              <button
                onClick={() => {
                  addToCart({ ...singleProduct, quantity });
                }}
                className="bg-orange-400 mx-2 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-orange-600 transition duration-700 hover:scale-105"
              >
                <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
