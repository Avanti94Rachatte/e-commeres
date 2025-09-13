import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">About MY SHOP</h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-red-600">MY SHOP</span>, where convenience meets choice. Discover a world of products at your fingertips, anytime, anywhere. Our shopping app brings the joy of effortless shopping to your pocket. From daily essentials to trendy finds, we make it simple and fast       </p>

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            At <span className="font-semibold text-red-600">MY SHOP</span>, Our mission is to make shopping simple and enjoyable for everyone. Explore a wide range of products, find the best deals, and have them delivered right to your doorstep.</p>
        </div>

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Why Choose <span className="font-semibold text-red-600">MY SHOP</span>?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Access thousands of products across categories, all in one place</li>
            <li>Save more with special offers available only on our app</li>
            <li>Intuitive interface and smooth navigation for hassle-free shopping</li>
            <li>Safe payments and quick order processing for your convenience.</li>
            <li>Timely deliveries with responsive customer support whenever you need it</li>
            <li>Shop Smarter, Live Better <span className="font-semibold text-red-600">MY SHOP</span> Discover everything you love in one place!</li>
          </ul>
        </div>

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-sm sm:text-base">
          To create a seamless and delightful shopping experience where users can discover, compare, and buy products effortlessly. We strive to become the go-to app for smart, convenient, and enjoyable shopping for everyone.
          </p>
        </div>

        <div className="text-center mt-8 sm:mt-10 max-w-md mx-auto px-4">
          <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Join the MY SHOP Family</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Whether you’re looking for something that you want <br /> <span className="font-semibold text-red-600">MY SHOP </span> <br />has something for everyone.
          </p>
          <Link to={'/products'}>
            <button className="bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-red-700 transition duration-300 w-full sm:w-auto">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
