import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video-mainpage">
        <source src="main_background_page.mp4" type="video/mp4"/>
      </video>
      
      <div className="content">
        <h1>Delicious and at Home</h1>

        <h3>JOIN US</h3>
        <Link to="/login" className="btn btn-main mx-2">LOGIN</Link>
        <Link to="/register" className="btn btn-main mx-2">REGISTER</Link>

        <h3>OUR OFFERS</h3>
        <Link to="/lista-posilkow" className="btn btn-main mx-2">MEAL LIST</Link>
        <Link to="/cart" className="btn btn-main mx-2">CART</Link>
        <Link to="/o-nas" className="btn btn-main mx-2">ABOUT US</Link>
        <Link to="/support" className="btn btn-main mx-2">SUPPORT SERWIS</Link>
      </div>
    </div>
  );
};

export default Home;