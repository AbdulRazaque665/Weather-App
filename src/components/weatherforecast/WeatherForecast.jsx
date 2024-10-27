import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const WeatherForecast = ({ forecast, unit }) => {
  return (
    <div className="mb-4">
      <Typography variant="h5" className="mb-2">5-Day Forecast</Typography>
      <Grid container spacing={2}>
        {forecast.map((day, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Paper className="p-3 text-center">
              <Typography variant="subtitle1">{day.day}</Typography>
              <Typography variant="body2">
                {unit === 'Fahrenheit' ? (day.temperature * 1.8 + 32).toFixed(1) : day.temperature}°{unit === 'Fahrenheit' ? 'F' : 'C'}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WeatherForecast;
