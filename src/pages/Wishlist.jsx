import React from "react";
import { getData } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = getData(); // Get wishlist data & remove function

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist ❤️</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="relative">
              {/* Product Card */}
              <ProductCard product={product} />

              {/* Remove button */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Empty wishlist animation
        <div className="flex flex-col gap-4 justify-center items-center min-h-[60vh] px-4 text-center">
          <h1 className="font-bold text-2xl text-red-500">Wishlist is empty</h1>
          <div className="w-60 sm:w-80 md:w-full max-w-xl">
            <DotLottieReact
              src="https://lottie.host/4e27c791-f557-47dd-8ff7-1b0d1f8fc3f9/DPozP04WgQ.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      )}
    </div>
  );
};
