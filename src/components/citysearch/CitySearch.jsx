import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CitySearch = ({ onCitySearch }) => {
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySearch(cityInput);
    setCityInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-3">
      <TextField
        label="Enter city name"
        variant="outlined"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        className="me-2"
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default CitySearch;
