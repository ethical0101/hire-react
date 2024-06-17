import './styles.css'; // Import your CSS file
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProfessionForm from './components/AddProfessionForm';
import SearchBar from './components/SearchBar';
import ProfessionalList from './components/ProfessionalList';

const App = () => {
  const [professionals, setProfessionals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const savedProfessionals = JSON.parse(localStorage.getItem('professionals')) || [];
    setProfessionals(savedProfessionals);
  }, []);

  const handleAddProfession = (newProfession) => {
    if (!validateProfession(newProfession)) {
      return;
    }
    const updatedProfessionals = [...professionals, { ...newProfession, available: true }];
    setProfessionals(updatedProfessionals);
    localStorage.setItem('professionals', JSON.stringify(updatedProfessionals));
  };

  const handleSearch = ({ profession, location }) => {
    const filteredProfessionals = professionals.filter(professional =>
      professional.profession.toLowerCase().includes(profession.toLowerCase()) &&
      professional.location.toLowerCase().includes(location.toLowerCase())
    );
    setSearchResults(filteredProfessionals);
    if (filteredProfessionals.length === 0) {
      setErrorMessage(`No ${profession} available in ${location}`);
    } else {
      setErrorMessage('');
    }
  };

  const validateProfession = (profession) => {
    const { number, rating } = profession;
    if (number && isNaN(number)) {
      alert('Please enter a valid number');
      return false;
    }
    if (rating && (isNaN(rating) || rating < 0 || rating > 5)) {
      alert('Rating should be between 0 and 5');
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <div className="main-content">
          <div className="side-panel">
            <h2>Add Profession</h2>
            <AddProfessionForm onAddProfession={handleAddProfession} />
          </div>
          <div className="search-section">
            <h2>Search Profession</h2>
            <SearchBar onSearch={handleSearch} />
            <ProfessionalList professionals={searchResults} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
