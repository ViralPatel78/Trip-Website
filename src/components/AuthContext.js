// src/components/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem('vmtrip_user');
  const [user, setUser] = useState(storedUser || null);

  const login = (email) => {
    localStorage.setItem('vmtrip_user', email);
    setUser(email);
  };

  const logout = () => {
    localStorage.removeItem('vmtrip_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
