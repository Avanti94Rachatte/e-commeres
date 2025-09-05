import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { ChevronLeft } from 'lucide-react';
import { ProductListView } from '../components/ProductListView';

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="bg-gray-800 mb-5 text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 text-sm sm:text-base hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back
          </button>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchData.map((product, index) => (
              <ProductListView key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        // Loading Spinner
        <div className="flex items-center justify-center h-[400px]">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
 