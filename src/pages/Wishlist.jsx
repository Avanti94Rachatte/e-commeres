import React from "react";
import { getData } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";

export const Wishlist = () => {
  const { wishlist } = getData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist ❤️</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
};
