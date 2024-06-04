import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./../style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Geoloc() {
  const position = [45.650002, 0.15];

  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  const appendLocation = (location, verb = "updated") => {
    const newLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      verb,
      timestamp: new Date().toISOString(),
    };
    setLocations((prevLocations) => [...prevLocations, newLocation]);
    // Store the new location in session storage
    sessionStorage.setItem(
      "locations",
      JSON.stringify([...locations, newLocation])
    );
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (location) => appendLocation(location, "fetched"),
          (error) => setError(error.message)
        );
      };

      // Fetch the location initially
      fetchLocation();
      // Set up an interval to fetch the location every 10 seconds
      const intervalId = setInterval(fetchLocation, 10000);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      setError("Geolocation API not supported.");
    }
  }, []);

  //MapBox

  const TOKEN = process.env.REACT_APP_TOKEN;

  const [viewPort, setViewPort] = useState({
    latitude: 45.650002,
    longitude: 0.15,
    zoom: 6,
  });

  return (
    <>
      <h1>test</h1>
      <MapContainer
        center={[45.650002, 0.15]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Je suis elio </Popup>
        </Marker>
      </MapContainer>

      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactMapG1
          {...viewPort}
          mapBoxApiAccesToken={TOKEN}
          width="100%"
          height="100%"
          transitionDuration="200"
          map="mapbox://styles/mapbox/standard"
        ></ReactMapG1>
      </div>

      <div>
        <div id="target">
          {error && <p>{error}</p>}
          {locations.map((loc, index) => (
            <p key={index}>
              Location {loc.verb} at {loc.timestamp}: {loc.latitude},{" "}
              {loc.longitude}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Geoloc;
