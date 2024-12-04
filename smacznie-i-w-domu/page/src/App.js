import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MealsList from "./components/MealsList";
import Thanks from "./components/Thanks";
import Support from "./components/Support";
import About from "./components/About";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/lista-posilkow" element={<MealsList />}/>
          <Route path="/thanks" element={<Thanks />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/o-nas" element={<About />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;