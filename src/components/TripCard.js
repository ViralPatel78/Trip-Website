// src/components/TripCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TripCard.css';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.title} className="trip-image" />
      <div className="trip-details">
        <h3>{trip.title}</h3>
        <p>{trip.description}</p>
        <div className="trip-footer">
          <span className="price">₹{trip.price}</span>
          <Link to={`/trips/${trip.id}`} className="details-btn">
            View Details
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default TripCard;
