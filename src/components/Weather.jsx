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

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const { seconds, minutes, hours } = useStopwatchContext();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError(new Error("Geolocation not supported"));
    }
    sessionStorage.setItem("hours", hours);
    sessionStorage.setItem("minutes", minutes);
    sessionStorage.setItem("seconds", seconds);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (coords.lat !== null && coords.lon !== null) {
        fetchWeather();
      }
    }, 10 * 60 * 1000); // Set up interval to fetch weather every 10 minutes

    // Fetch weather once when component mounts if coordinates are available
    if (coords.lat !== null && coords.lon !== null) {
      fetchWeather();
    }

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [coords]); // Only set up the interval when the coordinates are available

  const fetchWeather = async () => {
    try {
      const { lat, lon } = coords;

      const api_key = "94a93b1e6f27f1fb76a63e3b73fa7f01";
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error);
    }
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
              <p>{Math.round(weather.current.temp - 273.15)}°C</p>
              <FontAwesomeIcon
                icon={getWeatherIcon(weather.current.weather[0].description)}
                size="2x"
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error.message}</p>}
        </div>
      </div>
    </>
  );
};

export default Weather;
