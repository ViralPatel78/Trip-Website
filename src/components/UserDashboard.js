// src/components/UserDashboard.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDashboard.css';

const mockBookings = []; // empty for now

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/trips');
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Hello, {user || 'Guest'}!</h1>
        <p>Welcome to your trip dashboard.</p>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div className="dashboard-section">
        <h2>Your Bookings</h2>
        {mockBookings.length > 0 ? (
          <div className="booking-grid">
            {mockBookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <h3>{booking.title}</h3>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Travelers:</strong> {booking.travelers}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-bookings-container">
            <p className="no-bookings">You haven't booked any trips yet.</p>
            <button className="explore-btn" onClick={handleExploreClick}>
              Explore Trips
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
