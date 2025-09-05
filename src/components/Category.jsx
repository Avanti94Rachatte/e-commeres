import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const { data, fetchAllProducts, categoryOnlyData } = getData();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className=" rounded-md p-2 hover:scale-x-110 duration-700 bg-transparent"> {/* Added padding */}
      <div className="max-w-7xl mx-1 flex justify-center px-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
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
            {/* Include 'All' option */}
            <option value="All">All</option>

            {categoryOnlyData?.map((category, index) => (
              <option key={index} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>

          {/* Dropdown arrow */}
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
