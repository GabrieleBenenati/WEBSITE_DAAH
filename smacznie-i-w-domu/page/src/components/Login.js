import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/lista-posilkow");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try
    {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });

      if (response.status === 200)
      {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/lista-posilkow");
      }

      else
      {
        alert("Invalid credentials!");
      }
    }
    
    catch (error)
    {
      alert("Invalid credentials or not registered!");
    }
  };

  return (
    <div className="login-page">
      <video autoPlay muted loop className="background-video">
        <source src="background_page_log_reg.mp4" type="video/mp4" />
      </video>

      <div className="login-container">
        <div className="login-forms">
          <div className="form-section">
            <h4>Login</h4>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>E-mail</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>

              <button className="btn btn-main2 mx-2">LOGIN</button>
            </form>
          </div>

          <div className="form-section">
            <h4>Don't have an account ?</h4>
            <p>If you don't have an account, you can register by clicking the button below.</p>
            <Link to="/register" className="btn btn-main2 mx-2">CREATE AN ACCOUNT</Link>
          </div>
        </div>

        <div className="btn-container">
          <Link to="/" className="btn btn-main2">RETURN TO HOMEPAGE</Link>
          <Link to={localStorage.getItem("isLoggedIn") === "true" ? "/lista-posilkow" : "/login"} className="btn btn-main2">CHECK THE MEAL LIST</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;