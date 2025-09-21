import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Add to Cart with quantity support
  const addToCart = (product) => {
    const { quantity = 1 } = product; // Use provided quantity or default 1
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItem(updatedCart);
      toast.success(`Product quantity increased by ${quantity}`);
    } else {
      // Add new item with specified quantity
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

export const useCart = () => useContext(CartContext);
