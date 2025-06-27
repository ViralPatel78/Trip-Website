// src/components/SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <h2>🎉 Booking Confirmed!</h2>
        <p>Thank you for booking with VM Trip. Your adventure awaits!</p>
        <Link to="/dashboard" className="dashboard-btn">Go to Dashboard</Link>
        <Link to="/trips" className="trip-btn">Book Another Trip</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
