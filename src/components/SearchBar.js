// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    profession: '',
    location: '',
    countryCode: 'US' // Default country code
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({
      ...searchQuery,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={searchQuery.profession}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={searchQuery.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Country:
        <select name="countryCode" value={searchQuery.countryCode} onChange={handleChange}>
          <option value="US">United States</option>
          <option value="IN">India</option>
          {/* Add more options for other countries */}
        </select>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
