import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make POST request using axios
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });
  
      // Log the response data specifically
      console.log('Response Data:', response.data); // Log only the data part of the response
  
      // Access the token correctly
      const access_token = response.data.token; // Change to 'token' instead of 'access_token'
  
      console.log('Access Token:', access_token); // Log the token
  
      if (access_token) {
        // Save the token to localStorage (or cookies) for future authenticated requests
        localStorage.setItem('access_token', access_token);
        // Navigate to the homepage or any other protected page after successful login
        navigate('/');
      } else {
        setError('Token not received. Login failed.');
      }
    } catch (error) {
      if (error.response) {
        // If the server responded with an error
        console.error('Login Error:', error.response.data);
        setError(error.response.data.message || 'Login failed. Please try again.');
      } else {
        // If there was an error setting up the request
        console.error('Network Error:', error.message);
        setError('An error occurred. Please try again later.');
      }
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account yet? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
