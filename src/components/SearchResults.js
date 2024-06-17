// src/components/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const { profession, country } = location.state || { profession: '', country: '' };

  return (
    <div className="results">
      <h2>Search Results</h2>
      <p>Profession: {profession}</p>
      <p>Country: {country}</p>
      {/* Add logic to display search results here */}
    </div>
  );
}

export default SearchResults;
