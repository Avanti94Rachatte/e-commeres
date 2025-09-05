import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Breadcrums } from '../components/Breadcrums';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from '../context/CartContext';

export const SingleProduct = () => {
  const params = useParams();
  const { addToCart } = useCart();
  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`);
      const product = res.data.product;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, []);

  const originalPrice = singleProduct?.price + (singleProduct?.price * singleProduct?.discount / 100);

  return (
    <div>
      {singleProduct ? (
        <div className="px-4 sm:px-6 md:px-8 pb-10">
          <Breadcrums title={singleProduct.title} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Product Image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-xl w-full object-contain max-h-[500px]"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {singleProduct.brand?.toUpperCase()} / {singleProduct.category?.toUpperCase()} / {singleProduct.model}
              </p>

              {/* Price Section */}
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-semibold">
                <span className="text-red-500">₹ {singleProduct.price}</span>
                <span className="line-through text-gray-400 text-base sm:text-lg">₹ {Math.round(originalPrice)}</span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-md">
                  {singleProduct.discount}% OFF
                </span>
              </div>

              <p className="text-gray-700 text-sm sm:text-base">{singleProduct.discription}</p>

              {/* Quantity Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
                <label htmlFor="qty" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  id="qty"
                  className="w-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 rounded-md text-base sm:text-lg bg-orange-400 text-white hover:bg-orange-600 transition duration-700"
                >
                  <IoCartOutline className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Loading State
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      )}
    </div>
  );
};
