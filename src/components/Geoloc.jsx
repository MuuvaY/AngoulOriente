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

import mongodb from "./../assets/mongodb.webp";
import "@maptiler/sdk/dist/maptiler-sdk.css";

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

    const marker = new maptilersdk.Marker()
      .setLngLat([0.15, 45.650002])
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
        illo fuga libero temporibus pariatur facere velit. Officiis, vitae. Est
        vero aspernatur facere minima? Accusamus praesentium ipsum aut saepe
        eveniet, ducimus quisquam voluptate inventore suscipit officia tempora
        libero dolore natus sunt. Illo magni accusamus quidem incidunt impedit
        accusantium eos similique architecto, excepturi voluptates sed. Quae id
        saepe libero, inventore ex, eveniet nam corporis voluptatum ipsa
        possimus hic eaque sed consectetur neque dolores fugit molestiae a.
        Sapiente dolores aliquam quidem fugiat esse, earum perferendis nulla?
        Laborum aspernatur, doloribus excepturi blanditiis, cum nihil incidunt
        unde recusandae eveniet laudantium, dolore fugiat? Deserunt autem quia,
        quas explicabo in provident est sint minima excepturi tempora, possimus,
        voluptatem magnam ullam. Modi enim, minus facilis vitae unde iure
        eveniet itaque? Corporis, repellendus consequatur fugit alias sit sed
        eius quisquam aliquam molestias dolores earum omnis repudiandae magni
        beatae vero distinctio veritatis neque! Fugit dolorem ipsum veritatis
        ipsam voluptatibus vel corrupti! Harum, quisquam illum pariatur odio ab
        beatae dolorum earum dolorem, omnis laborum odit, assumenda possimus
        tenetur velit totam nemo hic necessitatibus culpa. Ipsam eligendi,
        commodi a quidem qui veniam quas amet illo ipsa animi voluptas adipisci
        voluptates numquam ex libero enim deserunt laboriosam autem consectetur
        harum minus dicta nesciunt quia. Magni, repellendus? Cum rerum
        aspernatur molestiae sed. Doloremque cum rerum, consectetur facere,
        laboriosam iusto eligendi expedita quasi non sed nulla eveniet tenetur
        natus hic deserunt? Laudantium repellendus culpa impedit obcaecati
        laborum voluptatem. Voluptatem modi impedit corporis quia ratione
        placeat ex doloremque omnis, delectus aliquid nesciunt unde ipsam sint
        enim aliquam pariatur nisi, ducimus repellat cumque quaerat maxime
        voluptatibus eveniet, officiis accusantium? Necessitatibus? Animi
        tenetur iste ducimus dolores, asperiores eos eveniet sequi voluptates
        non ex similique voluptatum earum ipsa placeat architecto veritatis sit
        nulla quaerat debitis ipsam eius unde soluta quod? Molestiae, ipsam.
        Possimus odit laboriosam tempora adipisci corrupti excepturi distinctio,
        magni ea, et, assumenda quod. Quibusdam, totam beatae aliquam facere
        sapiente, nesciunt ab doloremque quisquam obcaecati velit, architecto
        sed doloribus ipsam numquam. Veniam quam ipsam exercitationem aperiam
        delectus molestias quod dolore animi repellat pariatur quae perferendis,
        temporibus nostrum at quos suscipit inventore, sapiente minima nobis
        illum atque? Iste error ipsum reiciendis! Placeat? Dolore molestiae
        earum corrupti esse voluptate provident rerum magni id aperiam nisi vero
        odit dignissimos eaque reiciendis saepe, enim, dolor nemo corporis
        blanditiis repellat eius doloremque. Voluptatibus facere beatae
        veritatis. Odio accusantium eligendi maxime ipsa. Est fugit voluptatibus
        cum! Veniam quam obcaecati aut, debitis praesentium corporis animi
        dolores placeat enim fugiat hic quidem omnis, dolorem recusandae libero
        error distinctio asperiores!
      </div>
    </>
  );
}

export default Geoloc;
