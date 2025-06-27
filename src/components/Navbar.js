// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // make sure logo.png exists in src/assets/

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="VM Trip Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/trips">Trips</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            {user === 'admin@trip.com' && <Link to="/admin">Admin</Link>}
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
