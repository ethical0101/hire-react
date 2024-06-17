// AddProfessionForm.js
import React, { useState } from 'react';

const AddProfessionForm = ({ onAddProfession }) => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    location: '',
    number: '',
    rating: 0, // Default rating
    email: '',
    countryCode: 'US' // Default country code
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rating') {
      // Ensure rating stays within 0 to 5 range
      const rating = parseInt(value);
      if (!isNaN(rating) && rating >= 0 && rating <= 5) {
        setFormData({
          ...formData,
          [name]: rating
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleIncrement = () => {
    if (formData.rating < 5) {
      setFormData({
        ...formData,
        rating: formData.rating + 1
      });
    }
  };

  const handleDecrement = () => {
    if (formData.rating > 0) {
      setFormData({
        ...formData,
        rating: formData.rating - 1
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateProfession(formData)) {
      return;
    }
    onAddProfession(formData);
    setFormData({
      name: '',
      profession: '',
      location: '',
      number: '',
      rating: 0,
      email: '',
      countryCode: 'US'
    });
  };

  const validateProfession = (profession) => {
    const { name, number, email, countryCode } = profession;
    if (!name) {
      alert('Please enter a name');
      return false;
    }
    if (number && !validateNumber(number, countryCode)) {
      alert(`Please enter a valid number for ${countryCode}`);
      return false;
    }
    if (email && !validateEmail(email)) {
      alert('Please enter a valid email address ending with @gmail.com');
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /\S+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validateNumber = (number, countryCode) => {
    // Validate number based on country code
    switch (countryCode) {
      case 'US':
        return /^\d{10}$/.test(number); // US phone number format
      case 'IN':
        return /^\d{10}$/.test(number); // India phone number format
      // Add more cases as needed
      default:
        return true; // Default to no validation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
          <option value="US">+1 (US)</option>
          <option value="IN">+91 (India)</option>
          {/* Add more options for other countries */}
        </select>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label>
      <label>
        Rating:
        <div>
          <button type="button" onClick={handleDecrement}>-</button>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={{ width: '30px', textAlign: 'center' }}
          />
          <button type="button" onClick={handleIncrement}>+</button>
        </div>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Profession</button>
    </form>
  );
};

export default AddProfessionForm;
