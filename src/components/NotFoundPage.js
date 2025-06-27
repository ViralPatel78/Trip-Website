// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="back-home-btn">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
