// import React, { useState, useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import "./../style.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import mongodb from "./../assets/mongodb.webp";

// function Geoloc() {
//   const position = [45.650002, 0.15];

//   const [locations, setLocations] = useState([]);
//   const [error, setError] = useState(null);

//   const appendLocation = (location, verb = "updated") => {
//     const newLocation = {
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//       verb,
//       timestamp: new Date().toISOString(),
//     };
//     setLocations((prevLocations) => [...prevLocations, newLocation]);
//     // Stockez la nouvelle localisation dans le stockage de session
//     sessionStorage.setItem(
//       "locations",
//       JSON.stringify([...locations, newLocation])
//     );
//   };

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       const fetchLocation = () => {
//         navigator.geolocation.getCurrentPosition(
//           (location) => appendLocation(location, "fetched"),
//           (error) => setError(error.message)
//         );
//       };

//       // Récupérez la localisation initialement
//       fetchLocation();
//       // Configurez un intervalle pour récupérer la localisation toutes les 10 secondes
//       const intervalId = setInterval(fetchLocation, 10000);

//       return () => {
//         clearInterval(intervalId);
//       };
//     } else {
//       setError("API de géolocalisation non supportée.");
//     }
//   }, []);

//   const mapTilerApiKey = import.meta.env.MAP_TILER_API;

//   return (
//     <>
//       <h1>test</h1>
//       <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
//           url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=3M20Tu4JoCibtEUQUL1X`}
//         />
//         <Marker position={position}>
//           <Popup>
//             Je suis elio
//             <img src={mongodb} alt="test" />{" "}
//           </Popup>
//         </Marker>
//       </MapContainer>

//       <div>
//         <div id="target">
//           {error && <p>{error}</p>}
//           {locations.map((loc, index) => (
//             <p key={index}>
//               Location {loc.verb} at {loc.timestamp}: {loc.latitude},{" "}
//               {loc.longitude}
//             </p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Geoloc;
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./../style.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import logo from "./../assets/logo-angouloriente.webp";

import * as maptilersdk from "@maptiler/sdk";

function Geoloc() {
  useEffect(() => {
    maptilersdk.config.apiKey = "y1dslXIqqQPSOGJWsaQy";
    const map = new maptilersdk.Map({
      container: "map", // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS,
      center: [0.15, 45.650002], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    // Create a popup
    // const popup = new maptilersdk.Popup({ offset: 25 }).setText(
    //   <img src={logo} alt="logo" />
    // );
    // Create a popup with an image
    const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<div>
        <h3>Popup Title</h3>
        <img src="${logo}" alt="Example image" style="width: 80%; height: auto;"/>
        <p>This is a popup with an image!</p>
      </div>`
    );

    // Set marker options and add popup
    const marker = new maptilersdk.Marker({
      color: "#FFFFFF",
      draggable: true,
    })
      .setLngLat([0.15, 45.650002])
      .setPopup(popup) // Attach the popup to the marker
      .addTo(map);
  }, []);

  return (
    <>
      <h1>test</h1>
      <div id="map"></div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        doloremque? Repellat excepturi nobis earum placeat! Voluptas consequatur
        sapiente autem nesciunt delectus eveniet consequuntur illo omnis
        architecto, debitis eos dicta nostrum? Cum qui debitis iusto possimus
        deserunt libero impedit? Aliquam quasi magni ut qui tenetur, doloremque
        vel dolorum assumenda, eveniet aliquid ullam debitis quae explicabo a
        sint accusantium minus suscipit reiciendis? Tenetur, fugit temporibus?
        Voluptatibus et consequuntur exercitationem porro impedit ducimus quia
        iure corrupti molestiae ad voluptatem odio architecto vero eligendi
        harum tempore odit, in quod dolore animi numquam. Exercitationem,
        eveniet. Cupiditate, nam ipsum non omnis dignissimos cumque ullam cum
        voluptates nulla iste! Dolore minima a temporibus possimus voluptate
        necessitatibus asperiores, aliquid beatae nemo animi vitae atque
        repellendus mollitia doloribus dignissimos. Saepe consectetur iure culpa
        quaerat eligendi accusantium quos? Reprehenderit officiis inventore
        voluptatum sint! Animi delectus, reprehenderit minus quos assumenda
        repudiandae amet tenetur aliquid pariatur blanditiis quod, tempora esse
        omnis ad. Nam quaerat tempora, rem consequuntur amet iusto! Cum rem
        explicabo tempora ex vitae amet blanditiis soluta commodi. Sit repellat
        quis hic mollitia. Officiis, inventore! Atque, consectetur. Perferendis
        molestias maxime suscipit. Tenetur aliquid hic saepe, esse dolor
        adipisci quas? Corporis, quod sunt, fugiat, voluptatem expedita ab odit
      </div>
    </>
  );
}

export default Geoloc;
