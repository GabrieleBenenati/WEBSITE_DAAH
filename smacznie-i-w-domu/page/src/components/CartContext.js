import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
  };

  const removeFromCart = (mealId) => {
    setCart((prevCart) => prevCart.filter(meal => meal._id !== mealId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
  );
};