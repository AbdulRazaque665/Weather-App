import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const TemperatureToggle = ({ unit, onToggleUnit }) => {
  return (
    <FormControl component="fieldset" className="mb-3 d-flex justify-content-center">
      <RadioGroup
        row
        aria-label="temperature-unit"
        value={unit}
        onChange={(e) => onToggleUnit(e.target.value)}
      >
        <FormControlLabel value="Celsius" control={<Radio />} label="Celsius" />
        <FormControlLabel value="Fahrenheit" control={<Radio />} label="Fahrenheit" />
      </RadioGroup>
    </FormControl>
  );
};

export default TemperatureToggle;
