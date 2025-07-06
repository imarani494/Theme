import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homes = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Weather Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Homes;
