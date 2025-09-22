import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import { FilterSection } from "../components/FilterSection";
import Spinner from "../components/Spinner";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoFilter } from "react-icons/io5";

export const Product = () => {
  const { data, fetchAllProducts, search } = getData(); // Global data & search
  const [category, setCategory] = useState("All"); // Selected category filter
  const [brand, setBrand] = useState("All"); // Selected brand filter
  const [priceRange, setPriceRange] = useState([0, 5000]); // Price range filter
  const [page, setPage] = useState(1); // Current pagination page
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter toggle

  // Fetch products on component mount
  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  // Handle category & brand change
  const handleChategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset page on filter change
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1); // Reset page on filter change
  };

  const padeHandler = (selectedPage) => {
    setPage(selectedPage); // Pagination handler
  };

  // Filter data based on search, category, brand, price
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8); // Total pages

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Mobile filter toggle button */}
        <div className="block lg:hidden text-right my-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 ml-auto"
          >
            <IoFilter />
            Filter
          </button>
        </div>

        {data?.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <FilterSection
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleChategoryChange={handleChategoryChange}
              handleBrandChange={handleBrandChange}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />

            {/* Products Section */}
            <div className="flex-1 flex flex-col items-center">
              {filteredData?.length > 0 ? (
                <>
                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 w-full">
                    {filteredData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-8 w-full flex justify-center">
                    <Pagination
                      padeHandler={padeHandler}
                      dynamicPage={dynamicPage}
                      page={page}
                    />
                  </div>
                </>
              ) : (
                // No products found animation
                <div className="flex justify-center items-center w-full lg:mt-40 lg:h-[400px] lg:w-[900px]">
                  <DotLottieReact
                    src="https://lottie.host/12e38197-df80-4c9e-a3bb-87cbdc7dd7cd/PIKjPpB10d.lottie"
                    loop
                    autoplay
                    style={{ width: "100%", maxWidth: "400px" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          // Loading spinner while data is fetching
          <div className="flex justify-center items-center h-[400px]">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};