// src/routes/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

const ProtectedRoute = ({ children, admin = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (admin && user !== 'admin@trip.com') {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
