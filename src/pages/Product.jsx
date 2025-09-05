import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import { FilterSection } from "../components/FilterSection";
import Spinner from "../components/Spinner";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoFilter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const Product = () => {
  const { data, fetchAllProducts, search } = getData(); // ✅ global search
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleChategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const padeHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Toggle Button - Only visible on small screens */}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 w-full">
                    {filteredData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))}
                  </div>
                  <div className="mt-8 w-full flex justify-center">
                    <Pagination
                      padeHandler={padeHandler}
                      dynamicPage={dynamicPage}
                      page={page}
                    />
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-[300px]">
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
          <div className="flex justify-center items-center h-[400px]">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
