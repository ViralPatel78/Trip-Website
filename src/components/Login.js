// src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(formData.email); // simulate login
    navigate('/'); // Redirect to HomePage
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src="/logo.png" alt="VM Trip" className="logo" />
       
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <p className="auth-link">
          New to VM Trip? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
