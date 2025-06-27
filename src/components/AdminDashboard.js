// src/components/AdminDashboard.js
import React from 'react';
import '../styles/AdminDashboard.css';

const mockBookings = [
  { id: 'B001', user: 'vpatel@example.com', trip: 'Goa Beach Escape', date: '2025-07-12' },
  { id: 'B002', user: 'neha123@gmail.com', trip: 'Kerala Backwaters', date: '2025-08-05' },
  { id: 'B003', user: 'admin@trip.com', trip: 'Manali Adventure', date: '2025-09-01' }
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h4>All Bookings</h4>
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Email</th>
            <th>Trip</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {mockBookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.trip}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
