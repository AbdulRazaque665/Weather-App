import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ data, unit }) => {
  const temperature = unit === 'Fahrenheit' ? data.temperature * 1.8 + 32 : data.temperature;

  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div">
          Current Weather
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Temperature: {temperature.toFixed(1)} °{unit === 'Fahrenheit' ? 'F' : 'C'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Humidity: {data.humidity}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wind Speed: {data.windSpeed} km/h
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weather Icon: {data.icon}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
