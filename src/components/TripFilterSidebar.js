// src/components/TripFilterSidebar.js
import React from 'react';
import '../styles/TripFilterSidebar.css';

const TripFilterSidebar = ({ filter, setFilter }) => {
  return (
    <div className="filter-sidebar">
      <h3>Filter by Destination</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Goa">Goa</option>
        <option value="Manali">Manali</option>
        <option value="Kerala">Kerala</option>
      </select>
    </div>
  );
};

export default TripFilterSidebar;
