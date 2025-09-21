import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// Create a cart context
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Add product to cart or update quantity if already in cart
  const addToCart = (product) => {
    const { quantity = 1 } = product; // Use provided quantity or default to 1
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item exists, update its quantity
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: quantity } // replace with new quantity
          : item
      );
      setCartItem(updatedCart);
      toast.success(`Quantity updated to ${quantity}`);
    } else {
      // If new item, add it to cart
      setCartItem([...cartItem, { ...product, quantity }]);
      toast.success("Product added to Cart");
    }
  };

  // Update quantity via cart page buttons
  const updateQuantity = (cartItemList, productId, action) => {
    setCartItem(
      cartItemList
        .map((item) => {
          if (item.id === productId) {
            let newQuantity = item.quantity;
            if (action === "increase") {
              newQuantity += 1;
              toast.success("Quantity increased");
            } else if (action === "decrease") {
              newQuantity -= 1;
              toast.success("Quantity decreased");
            }
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item) => item != null)
    );
  };

  // Delete item from cart
  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.success("Product deleted");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
