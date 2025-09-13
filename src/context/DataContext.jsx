// src/context/DataContext.jsx
import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // all products
  const [wishlist, setWishlist] = useState([]); 
  const [search, setSearch] = useState("");

  // ✅ Fetch all products from DummyJSON
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=200");
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ✅ Unique category/brand helper
  const getUniqueValues = (data, property) => {
    if (!data || data.length === 0) return ["All"];
    let values = data.map((item) => item[property]);
    return ["All", ...new Set(values)];
  };

  // These are recomputed whenever `data` updates
  const categoryOnlyData = getUniqueValues(data, "category");
  const brandOnlyData = getUniqueValues(data, "brand");

  //  Wishlist Functions
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <DataContext.Provider
      value={{
        // Products
        data,
        setData,
        fetchAllProducts,

        // Filters
        categoryOnlyData,
        brandOnlyData,

        // Wishlist
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,

        // Search
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// ✅ Hook to access DataContext
export const getData = () => useContext(DataContext);
