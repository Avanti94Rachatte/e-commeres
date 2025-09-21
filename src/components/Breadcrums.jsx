import React from "react";
import { useNavigate } from "react-router-dom";

// Breadcrumbs component for navigation trail
export const Breadcrums = ({ title }) => {
  const navigate = useNavigate(); // hook for navigation

  return (
    <div className="max-w-6xl mx-auto my-6 px-4">
      <h1 className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-wrap gap-1">
        {/* Home link */}
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => navigate("/")} // navigate to homepage
        >
          Home
        </span>
 
        <span className="text-gray-500">/</span>

        {/* Products link */}
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => navigate("/products")} // navigate to products page
        >
          Products
        </span>
        
        <span className="text-gray-500">/</span>

        {/* Current page title (not clickable) */}
        <span className="text-black">{title}</span>
      </h1>
    </div>
  );
};
