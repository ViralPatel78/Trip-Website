import React from 'react';
import './AuthBackground.css';

function AuthBackground({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="animated-gradient-bg"></div>
      <div className="auth-content">
        {children}
      </div>
    </div>
  );
}

export default AuthBackground;
