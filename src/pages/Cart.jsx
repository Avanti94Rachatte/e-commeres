import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LucideBaggageClaim, LucideNotebookText } from "lucide-react";
import { MdDeliveryDining } from "react-icons/md";

export const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 mb-5">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl mb-6">My Cart - {cartItem.length}</h1>

          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-md flex justify-between items-center gap-4"
                >
                  {/* Left: Image + Title + Price */}
                  <div className="flex gap-4 min-w-0 flex-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-md flex-shrink-0 object-cover"
                    />
                    <div className="min-w-0">
                      <h1 className="line-clamp-2 text-base font-medium break-words">
                        {item.title}
                      </h1>
                      <p className="text-red-500 font-semibold text-lg mt-1">
                        ₹ {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Right: Fixed Controls */}
                  <div className="flex items-center gap-4 shrink-0 w-[220px] justify-end">
                    {/* Quantity Controls */}
                    <div className="bg-red-500 text-white flex items-center gap-4 px-4 py-2 rounded-md font-bold text-xl">
                      <button
                        onClick={() => updateQuantity(cartItem, item.id, "decrease")}
                        className="cursor-pointer"
                      >-</button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(cartItem, item.id, "increase")}
                        className="cursor-pointer"
                      >+</button>
                    </div>

                    {/* Delete Button */}
                    <span
                      onClick={() => deleteItem(item.id)}
                      className="hover:bg-white/60 transition-all p-3 rounded-full hover:shadow-2xl cursor-pointer"
                    >
                      <FaRegTrashAlt className="text-red-500 text-2xl" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Grid - Info + Bill */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Delivery Info Form */}
              <div className="bg-gray-100 rounded-md p-5 space-y-4">
                <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

                <div className="flex flex-col space-y-1">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    className="p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full space-y-1">
                    <label>State</label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="p-2 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <label>PostCode</label>
                    <input
                      type="text"
                      placeholder="Enter your Postcode"
                      className="p-2 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full space-y-1">
                    <label>Country</label>
                    <input
                      type="text"
                      placeholder="Enter your Country"
                      className="p-2 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      className="p-2 rounded-md"
                    />
                  </div>
                </div>

                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-2">
                  Submit
                </button>

                <div className="text-center text-gray-700 my-3">
                  --------------OR--------------
                </div>

                <div className="flex justify-center">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                    Detect Location
                  </button>
                </div>
              </div>

              {/* Bill Details */}
              <div className="bg-white border border-gray-100 shadow-xl px-6 py-6 rounded-md space-y-4">
                <h1 className="text-gray-800 font-bold text-xl">Bill Details</h1>

                <div className="flex justify-between items-center">
                  <span className="flex gap-2 items-center text-gray-700">
                    <LucideNotebookText /> Items total
                  </span>
                  <p>₹ {totalPrice}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex gap-2 items-center text-gray-700">
                    <MdDeliveryDining /> Delivery Charge
                  </span>
                  <p className="text-red-500 font-semibold">
                    <span className="text-gray-600 line-through">₹ 40</span> FREE
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex gap-2 items-center text-gray-700">
                    <LucideBaggageClaim /> Handling Charge
                  </span>
                  <p className="text-red-500 font-semibold">₹ 20</p>
                </div>

                <hr className="border-t border-gray-200" />

                <div className="flex justify-between items-center">
                  <span className="flex gap-2 items-center text-gray-700">
                    <MdDeliveryDining /> Grand Total
                  </span>
                  <p className="text-red-500 font-semibold">₹ {20 + totalPrice}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-700 mb-2 mt-4">Apply Promo Code</h2>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full"
                    />
                    <button className="border border-gray-300 px-4 py-2 rounded-md">
                      Apply
                    </button>
                  </div>
                </div>

                <button className="bg-red-500 text-white p-3 rounded-md w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Section
        <div className="flex flex-col gap-4 justify-center items-center min-h-[60vh] px-4 text-center">
          <h1 className="font-bold text-2xl text-red-500">Cart is empty</h1>
          <div className="w-60 sm:w-80 md:w-full max-w-xl">
            <DotLottieReact
              src="https://lottie.host/3bdd20c2-3f0a-4ff2-baf7-b2e83e41cbff/2bQyP8jLAh.lottie"
              loop
              autoplay
            />
          </div>
          <button
            onClick={() => navigate('/products')}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};
