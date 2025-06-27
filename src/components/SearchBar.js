// src/components/SearchBar.js
import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search trips by name or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
