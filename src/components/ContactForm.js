// src/components/ContactForm.js
import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} required />
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
          
          <label htmlFor="message">Message</label>
          <textarea name="message" value={data.message} onChange={handleChange} required />
          
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
