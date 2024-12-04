import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
    {
      alert("Passwords do not match!");
      return;
    }

    const userData = { name, surname, email, password };

    try
    {
      await axios.post("http://localhost:5000/api/users/register", userData);
      alert(`User registered: ${name} ${surname}`);
      navigate("/login");
    }
    catch (error)
    {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-page">
      <video autoPlay muted loop className="background-video">
        <source src="background_page_log_reg.mp4" type="video/mp4" />
      </video>

      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="border p-4 rounded">
            <h4>Creating an account</h4>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label>Surname</label>
                <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label>Repeat password</label>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </div>

              <button className="btn btn-main mx-2">REGISTER</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;