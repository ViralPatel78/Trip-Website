// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <h1>About VM Trips</h1>
        <p>Creating memories through meaningful travel experiences.</p>
      </div>

      <section className="about-section fade-in">
        <h2>Who We Are</h2>
        <p>
          We are passionate explorers, storytellers, and travel designers. At VM Trips, we go beyond basic itineraries and deliver journeys that feel personal, inspiring, and immersive.
        </p>
      </section>

      <section className="about-section fade-in delay-1">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make travel easy, ethical, and extraordinary. We believe in thoughtful planning, local partnerships, and delivering exceptional experiences that spark joy.
        </p>
      </section>

      <section className="about-section fade-in delay-2">
        <h2>Our Vision</h2>
        <p>
          To be a trusted companion for every traveler, helping them discover the world with confidence, comfort, and curiosity.
        </p>
      </section>

      <section className="about-section fade-in delay-3">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Empathy:</strong> We understand our travelers' needs deeply.</li>
          <li><strong>Authenticity:</strong> True experiences over tourist traps.</li>
          <li><strong>Trust:</strong> Transparent pricing, honest reviews, real service.</li>
          <li><strong>Innovation:</strong> Smart tech, better trips.</li>
          <li><strong>Sustainability:</strong> Love the Earth. Leave only footprints.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
