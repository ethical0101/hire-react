// ProfessionalList.js
import React from 'react';

const ProfessionalList = ({ professionals }) => {
  return (
    <div className="professional-list">
      {professionals.length > 0 ? (
        <ul>
          {professionals.map((professional, index) => (
            <li key={index}>
              <strong>Name:</strong> {professional.name}<br />
              <strong>Profession:</strong> {professional.profession}<br />
              <strong>Location:</strong> {professional.location}<br />
              <strong>Number:</strong> {professional.number}<br />
              <strong>Rating:</strong> {professional.rating}<br />
              <strong>Email:</strong> {professional.email}<br />
              <strong>Country Code:</strong> {professional.countryCode}
            </li>
          ))}
        </ul>
      ) : (
        <p>No professionals available.</p>
      )}
    </div>
  );
};

export default ProfessionalList;
