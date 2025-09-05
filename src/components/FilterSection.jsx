import React from "react";
import { getData } from "../context/DataContext";
import { IoClose } from "react-icons/io5";

export const FilterSection = ({
  handleBrandChange,
  handleChategoryChange,
  category,
  setCategory,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  isOpen,
  onClose,
}) => {
  const { brandOnlyData, categoryOnlyData, search, setSearch } = getData(); // ✅ global search

  return (
    <>
      {/* Desktop: Always visible */}
      <div className="hidden lg:block w-full lg:w-[280px]">
        <div className="bg-gray-100 p-4 rounded-md h-max w-full">
          <FilterContent />
        </div>
      </div>

      {/* Mobile/Tablet: Slide-in modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 lg:hidden">
          <div className="bg-white w-full max-w-sm p-4 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={onClose} className="text-red-500 text-2xl">
                <IoClose />
              </button>
            </div>

            <FilterContent />
          </div>
        </div>
      )}
    </>

    // Extracted Filter content for reuse
  );

  function FilterContent() {
    return (
      <>
        {/* ✅ Shared Search */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          value={search}
          className="bg-white p-2 rounded-md border-2 border-gray-400 w-full"
        />

        {/* Category Section */}
        <h1 className="mt-5 font-semibold text-xl">Category</h1>
        <div className="flex flex-col gap-2 mt-3 max-h-48 overflow-auto">
          {categoryOnlyData?.map((item, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={item}
                name={item}
                checked={category === item}
                onChange={handleChategoryChange}
              />
              <span className="uppercase">{item}</span>
            </label>
          ))}
        </div>

        {/* Brand Section */}
        <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
        <select
          onChange={handleBrandChange}
          className="bg-white w-full border-2 border-gray-200 rounded-md p-2"
          value={brand}
        >
          {brandOnlyData?.map((item, index) => (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Price Range Section */}
        <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
        <div className="flex flex-col gap-2">
          <label>
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </label>
          <input
            min={0}
            max={5000}
            type="range"
            className="w-full"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setCategory("All");
            setSearch(""); // ✅ reset global search
            setBrand("All");
            setPriceRange([0, 5000]);
          }}
          className="bg-red-500 text-white rounded-md px-3 py-2 mt-5 w-full hover:bg-red-600 transition"
        >
          Reset Filter
        </button>
      </>
    );
  }
};
