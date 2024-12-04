import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (user && isLoggedIn)
    {
      setIsLoggedIn(true);
      setUserData(user);
    }
    else
    {
      alert("You must log in to place an order !");
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (cart.length === 0)
    {
      alert("The cart is empty !");
      return;
    }
  
    if (
      form.name !== userData.name ||
      form.surname !== userData.surname ||
      form.email !== userData.email ||
      form.password !== userData.password
    ) 
    {
      alert("The user details are invalid. Check your name, surname, email and password.");
      return;
    }
  
    const orderData = {
      user:
      {
        name: form.name,
        surname: form.surname,
        email: form.email,
      },
      address: form.address,
      meals: cart.map((meal) => ({ mealId: meal._id, name: meal.name })),
    };
  
    try
    {
      await axios.post("http://localhost:5000/api/orders/place-order", orderData);
      alert("The order has been placed !");
      navigate("/thanks");
    }
    catch (error)
    {
      console.error(error);
      alert("Error placing the order.");
    }
  };

  return (
    <div className="cart-container">
      <video className="background-video-cart" autoPlay muted loop>
        <source src="/mealList_background.mp4" type="video/mp4"/>
      </video>

      <div className="cart-navigation">
        <Link to="/lista-posilkow" className="back-to-meal-list">BACK TO MEAL LIST</Link>
        <Link to="/" className="back-to-home-page">BACK TO HOMEPAGE</Link>
      </div>

      <h2>Your Cart</h2>
      {isLoggedIn ? (
        <>
          <ul>
            {cart.map((meal) => (
              <li key={meal._id}>{meal.name}</li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required/>

              <input type="text" placeholder="Lastname" value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} required/>

              <input type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required/>

              <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required/>

              <input type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required/>
            </div>

            <button type="submit" className="submit-order-btn">Submit Order</button>
          </form>
        </>
      ):(<p>You need to log in to place an order.</p>)}
    </div>
  );
};

export default Cart;