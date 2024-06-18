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
  const { seconds, minutes, hours } = useStopwatchContext();

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const api_key = "19f56327ba77c093b366eef68a771866";
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
        );
        console.log("fetchWeather", response);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError(new Error("Geolocation not supported"));
    }
  }, []); // Empty dependency array ensures tdhis runs only once when the component mounts

  useEffect(() => {
    sessionStorage.setItem("hours", hours);
    sessionStorage.setItem("minutes", minutes);
    sessionStorage.setItem("seconds", seconds);
  }, [hours, minutes, seconds]); // This effect runs every time hours, minutes, or seconds change

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
