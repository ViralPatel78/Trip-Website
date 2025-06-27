// src/App.js
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import TripList from "./components/TripList";
import TripDetails from "./components/TripDetails";
import BookingForm from "./components/BookingForm";
import SuccessPage from "./components/SuccessPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import BlogFAQ from "./components/BlogFAQ";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import NotFoundPage from "./components/NotFoundPage";
import AdminDashboard from "./components/AdminDashboard";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./styles/global.css";

const AppContent = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Only allow access to Login and Signup
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // User is logged in — show full app
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/blog" element={<BlogFAQ />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<ProtectedRoute admin><AdminDashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
