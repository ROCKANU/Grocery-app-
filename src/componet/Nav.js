import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* Use an online image URL for the logo */}
          <img src="https://www.logodesign.net/logo/grocery-in-cart-included-with-stars-6045ld.png?nwm=1&nws=1&industry=grocery-shop&sf=&txt_keyword=All" alt="Logo" className="logo-img" /> 
          Grocery App
        </Link>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Signup</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <input type="text" className="navbar-search" placeholder="Search for groceries..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

