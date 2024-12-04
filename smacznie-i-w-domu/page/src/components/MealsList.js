import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './MealsList.css';
import { useCart } from "../components/CartContext";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try
      {
        const response = await axios.get("http://localhost:5000/api/meals");
        setMeals(response.data);

        const uniqueCategories = [
          ...new Set(response.data.map((meal) => meal.category)),
        ];
        setCategories(uniqueCategories);
      }
      catch (error)
      {
        console.error("Error while downloading meals:", error);
      }
    };

    fetchMeals();

    const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  const handleAddToCart = (meal) => {
    if(!isLoggedIn)
    {
      alert("You must log in to add to cart !");
      navigate("/login");
    }
    else
    {
      addToCart(meal);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    alert("You have logged out successfully !");
    navigate("/login");
  };

  return (
    <div className="meal-list-container">
      <video className="background-video-mealList" autoPlay muted loop>
        <source src="/mealList_background.mp4" type="video/mp4"/>
      </video>

      <div className="top-bar">
        <div className="left-buttons">
          <Link to="/" className="back-button">BACK TO HOMEPAGE</Link>
          <Link to="/cart" className="cart-button">CHECK YOUR CART</Link>
        </div>
        <h1 className="page-title">MEAL LIST</h1>
      </div>

      <div className="container mt-5">
        {categories.map((category) => (
          <div key={category} className="mb-4">
            <h2 className="text-primary">{category}</h2>
            <ul className="list-group">

              {meals.filter((meal) => meal.category === category).map((meal) => (

                  <li key={meal._id} className="list-group-item meal-item">
                    <img src={meal.imageUrl} alt={meal.name} className="meal-image" />

                    <div className="meal-details">
                      <h3>{meal.name}</h3>
                      <p className="ingredients">{meal.ingredients.join(", ")}</p>
                      <div className="meal-info">
                        <span className="price">{meal.price} zł</span>
                        <button className="btn btn-primary order-btn" onClick={() => handleAddToCart(meal)}>ADD TO CART</button>
                      </div>
                    </div>
                  </li>
                  
                ))}

            </ul>
          </div>
        ))}
      </div>

      <div className="bottom-bar">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="auth-button">LOGIN</Link>
            <Link to="/register" className="auth-button">REGISTER</Link>
          </>
        )}
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        )}
      </div>
    </div>
  );
};

export default MealsList;