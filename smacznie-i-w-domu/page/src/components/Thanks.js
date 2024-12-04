import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Thanks.css";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-container">
      <video className="background-video-thank-you" autoPlay muted loop>
        <source src="/mealList_background.mp4" type="video/mp4"/>
      </video>

      <div className="thank-you-message">
        <h1>Thank you for placing your order !</h1>
        <p>We will redirect you to the home page in 5 seconds !!!</p>
      </div>
      
    </div>
  );
};

export default Thanks;