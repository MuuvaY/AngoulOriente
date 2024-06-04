import React, { useState, useEffect } from "react";
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
    // Stockez la nouvelle localisation dans le stockage de session
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

      // Récupérez la localisation initialement
      fetchLocation();
      // Configurez un intervalle pour récupérer la localisation toutes les 10 secondes
      const intervalId = setInterval(fetchLocation, 10000);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      setError("API de géolocalisation non supportée.");
    }
  }, []);

  const mapTilerApiKey = import.meta.env.MAP_TILER_API;

  return (
    <>
      <h1>test</h1>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
          url={`https://api.maptiler.com/maps/streets-v2/256/tiles.json?key=3M20Tu4JoCibtEUQUL1X`}
        />
        <Marker position={position}>
          <Popup>Je suis elio </Popup>
        </Marker>
      </MapContainer>

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
