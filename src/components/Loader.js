// src/components/Loader.js
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
