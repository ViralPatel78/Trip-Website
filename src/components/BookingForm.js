// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BookingForm.css';

const mockTrips = [
  { id: '1', title: 'Goa Beach Escape', price: 6999 },
  { id: '2', title: 'Manali Mountain Adventure', price: 8999 },
  { id: '3', title: 'Kerala Backwaters', price: 7999 },
  { id: '4', title: 'Rajasthan Desert Safari', price: 7999 },
  { id: '5', title: 'Manali Snow Retreat', price: 7999 },
  { id: '6', title: 'Andaman Island Explorer', price: 7999 },
  { id: '7', title: 'Meghalaya Cave Expedition', price: 7999 },
  { id: '8', title: 'Kashmir Heaven Tour', price: 7999 },
  { id: '9', title: 'Coorg Coffee Hills Escape', price: 7999 },
  { id: '10', title: 'Sikkim Serenity Tour', price: 7999 },
];

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelers: 1,
    date: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Confirmed:', formData);
    navigate('/success');
  };

  return (
    <div className="booking-form-outer">
      <div className="booking-form-card">
        <h2 className="form-title">Reserve Your Spot</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Step 1 */}
          <div className={`form-step ${step === 1 ? 'active' : 'hidden'}`}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email Address</label>
            </div>

            <button type="button" onClick={nextStep} className="book-trip-btn">Next</button>
          </div>

          {/* Step 2 */}
          <div className={`form-step ${step === 2 ? 'active' : 'hidden'}`}>
            <div className="form-group">
              <input
                type="number"
                name="travelers"
                min="1"
                max="20"
                required
                value={formData.travelers}
                onChange={handleChange}
              />
              <label>Number of Travelers</label>
            </div>

            <div className="form-group">
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
              <label>Travel Date</label>
            </div>

            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="back-btn">Back</button>
              <button type="submit" className="book-trip-btn">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
