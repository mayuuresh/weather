import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./Weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const API_KEY = "dc90bcb47a3a16755d61dfaed9d2c9c1";

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>{weather?.name}, {weather?.sys?.country}</h1>
        <div className="weather-icon">☀️</div>
        <h2>{weather?.weather[0]?.main}</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search any city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={() => fetchWeather(city)}>🔍</button>
        </div>
        <div className="weather-details">
          <p>Temperature: {weather?.main?.temp}°C</p>
          <p>Humidity: {weather?.main?.humidity}%</p>
          <p>Visibility: {weather?.visibility / 1000} km</p>
          <p>Wind Speed: {weather?.wind?.speed} Km/h</p>
          <p>{moment().format("hh:mm A, dddd, DD MMM YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
