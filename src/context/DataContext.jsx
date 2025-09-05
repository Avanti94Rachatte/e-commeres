import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [wishlist, setWishlist] = useState([]); // ✅ wishlist state
  const [search, setSearch] = useState("");

  // Fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  // Unique category/brand
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  // ✅ Wishlist Functions
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
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
