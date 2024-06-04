// import React, { useState, useEffect } from "react";

// const GeolocationComponent = () => {
//   const [locations, setLocations] = useState([]);
//   const [error, setError] = useState(null);
//   const [watchId, setWatchId] = useState(null);

//   const appendLocation = (location, verb = "updated") => {
//     const newLocation = {
//       verb,
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//     };
//     setLocations((prevLocations) => [...prevLocations, newLocation]);
//   };

//   const handleGetLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (location) => appendLocation(location, "fetched"),
//         (err) => setError("Failed to fetch current location")
//       );
//       const id = navigator.geolocation.watchPosition(appendLocation, (err) =>
//         setError("Failed to watch position")
//       );
//       setWatchId(id);
//     } else {
//       setError("Geolocation API not supported.");
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (watchId !== null) {
//         navigator.geolocation.clearWatch(watchId);
//       }
//     };
//   }, [watchId]);

//   return (
//     <div>
//       <button id="askButton" onClick={handleGetLocation}>
//         Get Location
//       </button>
//       <div id="target">
//         {error && <p>{error}</p>}
//         {locations.map((location, index) => (
//           <p key={index}>
//             Location {location.verb}: {location.latitude}, {location.longitude}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GeolocationComponent;

import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function Geoloc() {
  return (
    <>
      <h1>test</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

export default Geoloc;
