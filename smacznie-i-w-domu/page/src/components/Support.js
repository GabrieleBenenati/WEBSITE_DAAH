import React from "react";
import { Link } from "react-router-dom";
import './Support.css';

const Support = () => {
  return (
<>
    <div className="top-bar-support">
    <div className="left-button-support">
      <Link to="/" className="back-button-support">BACK TO HOMEPAGE</Link>
    </div>
  </div>

    <div className="container mt-5">
    <video className="background-video-support" autoPlay muted loop>
        <source src="/main_background_page.mp4" type="video/mp4"/>
      </video>
      <h2>Support Serwis</h2>
      <p>In case of problems, please contact us: support@delicious_and_at_home.pl</p>
    </div>
</>
  );
};

export default Support;