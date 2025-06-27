// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Find the best curated travel experiences tailored for you</p>
          <button onClick={() => navigate('/trips')}>Explore Trips</button>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Travel With Us?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Personalized Itineraries</h3>
            <p>We customize every journey to your needs and dreams.</p>
          </div>
          <div className="feature-box">
            <h3>Trusted Guides</h3>
            <p>Our local experts ensure safe and immersive travel experiences.</p>
          </div>
          <div className="feature-box">
            <h3>Hassle-Free Booking</h3>
            <p>Instant confirmations, smooth payments, and zero stress.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
