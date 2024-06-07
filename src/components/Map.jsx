import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { useStopwatchContext } from "./StopwatchContext";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const { seconds, minutes, hours } = useStopwatchContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchWeather();
    sessionStorage.setItem("hours", hours);
    sessionStorage.setItem("minutes", minutes);
    sessionStorage.setItem("seconds", seconds);
  }, [hours, minutes, seconds]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Angoulême&appid=46f798d8f0bd7deed9d3354d72777914"
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error);
    }
  };

  const handleTestButtonClick = () => {
    navigate("/test");
  };

  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return faSun;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return faCloud;
      case "shower rain":
      case "rain":
        return faCloudRain;
      case "thunderstorm":
        return faBolt;
      case "snow":
        return faSnowflake;
      case "mist":
        return faSmog;
      default:
        return faCloud;
    }
  };

  return (
    <>
      <div id="weather">
        <div id="weather-container">
          {weather ? (
            <div id="weather-data">
              <p>{Math.round(weather.main.temp - 273.15)}°C</p>
              <FontAwesomeIcon
                icon={getWeatherIcon(weather.weather[0].description)}
                size="2x"
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error.message}</p>}
        </div>
      </div>
      <button onClick={handleTestButtonClick}>Go to Test</button>
    </>
  );
};

export default Weather;
