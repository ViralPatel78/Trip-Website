// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} VM Trip. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
