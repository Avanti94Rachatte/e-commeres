import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  // Destructure functions and data from custom context
  const { data, fetchAllProducts, categoryOnlyData } = getData();
  
  const navigate = useNavigate(); // For page navigation
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track selected category

  // Fetch all products when component mounts
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Handle category selection change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Navigate to all products or specific category page
    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className="rounded-md p-2 hover:scale-x-110 duration-700 bg-transparent w-50"> {/* Container styling */}
      <div className="max-w-7xl mx-1 flex justify-center px-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="
              block
              w-full 
              appearance-none 
              bg-gray-200/80
              text-black 
              border 
              border-gray-600 
              rounded-lg 
              px-4 
              py-2 
              text-base 
              sm:text-lg
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-500 
              focus:border-red-500 
              transition 
              duration-600
            "
          >
           
            {/* Dynamically generate category options */}
            {categoryOnlyData?.map((category, index) => (
              <option key={index} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
