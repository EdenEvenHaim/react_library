import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Books from "./components/Books"; // For displaying books
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Customers from "./components/Customers";
import Loans from "./components/Loans";

const App = () => {
  const [loggedIn, setLoggedIn] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="my-nav-bar">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            &nbsp;
            <Link to="/about-us" className="nav-btn">
              About-Us
            </Link>
            &nbsp;
            <Link to="/books" className="nav-btn">
              Books
            </Link>{" "}
            &nbsp;
            <Link to="/customers" className="nav-btn">
               Customers 
            </Link>
            <Link to="/loans" className="nav-btn">
               Loans 
            </Link>
            {loggedIn && (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>

          <div className="user-login">
            <Link to="/Login" className="nav-btn">
              Login
            </Link>{" "}
            &nbsp;
            <Link to="/Register" className="nav-btn">
              Sign up
            </Link>
          </div>
        </nav>

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/books" element={<Books />} />
          {/* <Route path="/books/id" element={<BookDetails />} />{" "} */}
          {/* Dynamic route for individual book details */}
          {/* Authenticated routes */}
          {loggedIn ? (
            <>
              {/* Redirect to home if already logged in */}
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              {/* Non-authenticated routes */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              {/* Redirect non-logged-in users trying to access cart */}
            </>
          )}
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/loans" element={<Loans/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
