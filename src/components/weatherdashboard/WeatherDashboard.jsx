import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import CitySearch from "../citysearch/CitySearch";
import CurrentWeather from "../currentweather/CurrentWeather";
import WeatherForecast from "../weatherforecast/WeatherForecast";
import TemperatureToggle from "../temperaturetoggle/TemperatureToggle";
import "../weatherdashboard/weatherdashboard.css"

const dummyWeatherData = {
  Lahore: {
    current: { temperature: 30, humidity: 70, windSpeed: 10, icon: "☀️" },
    forecast: [
      { day: "Monday", temperature: 32 },
      { day: "Tuesday", temperature: 34 },
      { day: "Wednesday", temperature: 33 },
      { day: "Thursday", temperature: 31 },
      { day: "Friday", temperature: 30 },
    ],
  },
  Karachi: {
    current: { temperature: 28, humidity: 80, windSpeed: 12, icon: "☁️" },
    forecast: [
      { day: "Monday", temperature: 29 },
      { day: "Tuesday", temperature: 31 },
      { day: "Wednesday", temperature: 30 },
      { day: "Thursday", temperature: 28 },
      { day: "Friday", temperature: 27 },
    ],
  },
  Sukkur: {
    current: { temperature: 35, humidity: 40, windSpeed: 10, icon: "☀️" },
    forecast: [
      { day: "Mon", temperature: 35 },
      { day: "Tue", temperature: 36 },
      { day: "Wed", temperature: 35 },
      { day: "Thu", temperature: 34 },
      { day: "Fri", temperature: 35 },
    ],
  },
  Larkana: {
    current: { temperature: 34, humidity: 50, windSpeed: 8, icon: "☀️" },
    forecast: [
      { day: "Mon", temperature: 34 },
      { day: "Tue", temperature: 35 },
      { day: "Wed", temperature: 33 },
      { day: "Thu", temperature: 34 },
      { day: "Fri", temperature: 33 },
    ],
  },
  Layyah: {
    current: { temperature: 29, humidity: 60, windSpeed: 14, icon: "🌦️" },
    forecast: [
      { day: "Mon", temperature: 29 },
      { day: "Tue", temperature: 28 },
      { day: "Wed", temperature: 27 },
      { day: "Thu", temperature: 28 },
      { day: "Fri", temperature: 29 },
    ],
  },
};

const WeatherDashboard = () => {
  const [city, setCity] = useState("Lahore");
  const [unit, setUnit] = useState("Celsius");
  const [weatherData, setWeatherData] = useState(
    dummyWeatherData[city] || null
  );

  useEffect(() => {
    setWeatherData(dummyWeatherData[city] || null);
  }, [city]);

  const handleCitySearch = (cityName) => {
    setCity(cityName);
  };

  const handleToggleUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="weather-dashboard">
      <Container className="dashboard-container p-4 my-4 rounded">
        <Typography variant="h4" align="center" gutterBottom className="dashboard-title">
          Weather Dashboard
        </Typography>
        <CitySearch onCitySearch={handleCitySearch} />
        <TemperatureToggle unit={unit} onToggleUnit={handleToggleUnit} />
        <Box className="my-4">
          {weatherData ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card className="current-weather-card">
                    <CardContent>
                      <CurrentWeather data={weatherData.current} unit={unit} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="forecast-card">
                    <CardContent>
                      <WeatherForecast forecast={weatherData.forecast} unit={unit} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography variant="h6" align="center">
              City data not found. Please try a different city.
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default WeatherDashboard;
