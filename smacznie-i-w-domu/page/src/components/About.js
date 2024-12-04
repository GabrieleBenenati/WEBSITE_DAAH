import React from "react";
import { Link } from "react-router-dom";
import './About.css';

const About = () => {
  return (
    <>
    <div className="top-bar-about-us">
    <div className="left-button-about-us">
      <Link to="/" className="back-button-about-us">BACK TO HOMEPAGE</Link>
    </div>
  </div>
    
    <div className="container mt-5">
      <video className="background-video-about_us" autoPlay muted loop>
        <source src="/main_background_page.mp4" type="video/mp4" />
      </video>
      <h2>Welcome to "Delicious and at Home!"</h2>
      <p>
      Our mission is to bring you tasty, home-cooked meals and top-quality products delivered
      right to your door. We believe that food should not only satisfy your hunger but also
      bring joy and memories of family moments around the table.
      </p>

      <p>
      At "Delicious and at Home," we focus on freshness, local ingredients, and a variety
      of flavors that everyone in your household will love. Our menu includes both traditional
      dishes and modern culinary options. Additionally, we offer a wide range of grocery products
      to make your daily cooking easier.
    </p>

    <p>
    With us, you can enjoy delicious meals without leaving home. We ensure that every
    bite is full of flavor and quality, and your shopping experience is fast and convenient.
    </p>
    
    <p>
    Thank you for being with us!
    </p>
    </div>
    </>
  );
};

export default About;