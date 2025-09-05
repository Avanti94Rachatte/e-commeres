import React from "react";
import { useNavigate } from "react-router-dom";

export const Breadcrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-6 px-4">
      <h1 className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-wrap gap-1">
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="text-gray-500">/</span>
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => navigate("/products")}
        >
          Products
        </span>
        <span className="text-gray-500">/</span>
        <span className="text-black">{title}</span>
      </h1>
    </div>
  );
};
