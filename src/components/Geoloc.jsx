// import React, { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// import * as maptilersdk from "@maptiler/sdk";
// import { Scanner } from "@yudiel/react-qr-scanner";

// function Geoloc() {
//   const [activePopup, setActivePopup] = useState(0);

//   useEffect(() => {
//     maptilersdk.config.apiKey = "y1dslXIqqQPSOGJWsaQy";
//     const map = new maptilersdk.Map({
//       container: "map",
//       style: maptilersdk.MapStyle.STREETS,
//       center: [0.15, 45.650002],
//       zoom: 14,
//     });

//     const passwords = ["secret1", "secret2"]; // Add more passwords as needed

//     const checkAnswer = (popupIndex) => (e) => {
//       e.preventDefault();
//       const input = e.target.elements.secret.value;
//       if (input === passwords[popupIndex]) {
//         alert("Correct! You have entered the right word.");
//         // Close the current popup
//         markers[popupIndex].getPopup().remove();
//       } else {
//         alert("Incorrect! Try again.");
//       }
//     };

//     const popupContent = (index) => `
//       <div>
//         <h3>Popup ${index + 1}</h3>
//         <p>Enter the secret word to proceed:</p>
//         <form>
//           <input type="text" name="secret" />
//           <button type="submit">Submit</button>

//         </form>
//       </div>`;

//     const popups = [
//       new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(0)),
//       new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(1)),
//       // Add more popups as needed
//     ];

//     const markers = [
//       new maptilersdk.Marker({ color: "#FFFFFF", draggable: true })
//         .setLngLat([0.15, 45.650002])
//         .setPopup(popups[0])
//         .addTo(map),

//       new maptilersdk.Marker({ color: "#000000", draggable: true })
//         .setLngLat([0.15, 45.660002])
//         .setPopup(popups[1])
//         .addTo(map),

//       // Add more markers as needed
//     ];

//     popups.forEach((popup, index) => {
//       popup.on("open", () => {
//         const form = popup.getElement().querySelector("form");
//         if (form) {
//           form.onsubmit = checkAnswer(index);
//         }
//       });
//     });

//     // Uncomment this line if you want the first popup to open automatically
//     // markers[0].togglePopup();
//   }, []);

//   return (
//     <>
//       <h1>Chasse au Trésor</h1>
//       <div id="map" style={{ height: "80vh" }}></div>
//       <Scanner onScan={(result) => console.log(result)} />
//       <div>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
//         doloremque? Repellat excepturi nobis earum placeat! Voluptas consequatur
//         sapiente autem nesciunt delectus eveniet consequuntur illo omnis
//         architecto, debitis eos dicta nostrum? Cum qui debitis iusto possimus
//         deserunt libero impedit? Aliquam quasi magni ut qui tenetur, doloremque
//         vel dolorum assumenda, eveniet aliquid ullam debitis quae explicabo a
//         sint accusantium minus suscipit reiciendis? Tenetur, fugit temporibus?
//         Voluptatibus et consequuntur exercitationem porro impedit ducimus quia
//         iure corrupti molestiae ad voluptatem odio architecto vero eligendi
//         harum tempore odit, in quod dolore animi numquam. Exercitationem,
//         eveniet. Cupiditate, nam ipsum non omnis dignissimos cumque ullam cum
//         voluptates nulla iste! Dolore minima a temporibus possimus voluptate
//         necessitatibus asperiores, aliquid beatae nemo animi vitae atque
//         repellendus mollitia doloribus dignissimos. Saepe consectetur iure culpa
//         quaerat eligendi accusantium quos? Reprehenderit officiis inventore
//         voluptatum sint! Animi delectus, reprehenderit minus quos assumenda
//         repudiandae amet tenetur aliquid pariatur blanditiis quod, tempora esse
//         omnis ad. Nam quaerat tempora, rem consequuntur amet iusto! Cum rem
//         explicabo tempora ex vitae amet blanditiis soluta commodi. Sit repellat
//         quis hic mollitia. Officiis, inventore! Atque, consectetur. Perferendis
//         molestias maxime suscipit. Tenetur aliquid hic souvent, ce dolor
//         adipisci quas? Corporis, quod sont, fugiat, voluptatem expedita ab odit.
//       </div>
//     </>
//   );
// }

// export default Geoloc;

// import React, { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// import * as maptilersdk from "@maptiler/sdk";
// import { Scanner } from "@yudiel/react-qr-scanner";

// function Geoloc() {
//   const [activePopup, setActivePopup] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = "y1dslXIqqQPSOGJWsaQy";
//     const map = new maptilersdk.Map({
//       container: "map",
//       style: maptilersdk.MapStyle.STREETS,
//       center: [0.15, 45.650002],
//       zoom: 14,
//     });

//     const passwords = ["secret1", "secret2"]; // Add more passwords as needed

//     const checkAnswer = (popupIndex) => (e) => {
//       e.preventDefault();
//       const input = e.target.elements.secret.value;
//       if (input === passwords[popupIndex]) {
//         alert("Correct! You have entered the right word.");
//         setActivePopup(null); // Close the current popup
//       } else {
//         alert("Incorrect! Try again.");
//       }
//     };

//     const handleScan = (result, index) => {
//       console.log(result);
//       if (result === passwords[index]) {
//         alert("QR Code correct! You have entered the right word.");
//         setActivePopup(null); // Close the current popup
//       } else {
//         alert("QR Code incorrect! Try again.");
//       }
//     };

//     const popupContent = (index) => `
//       <div id="popup-${index}">
//         <h3>Popup ${index + 1}</h3>
//         <p>Enter the secret word to proceed:</p>
//         <form>
//           <input type="text" name="secret" />
//           <button type="submit">Submit</button>
//         </form>
//         <div id="scanner-${index}"></div>
//       </div>`;

//     const popups = [
//       new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(0)),
//       new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(1)),
//       // Add more popups as needed
//     ];

//     const markers = [
//       new maptilersdk.Marker({ color: "#FFFFFF", draggable: true })
//         .setLngLat([0.15, 45.650002])
//         .setPopup(popups[0])
//         .addTo(map),

//       new maptilersdk.Marker({ color: "#000000", draggable: true })
//         .setLngLat([0.15, 45.660002])
//         .setPopup(popups[1])
//         .addTo(map),

//       // Add more markers as needed
//     ];

//     popups.forEach((popup, index) => {
//       popup.on("open", () => {
//         const form = document.querySelector(`#popup-${index} form`);
//         const scannerContainer = document.querySelector(`#scanner-${index}`);
//         if (form) {
//           form.onsubmit = checkAnswer(index);
//         }
//         if (scannerContainer) {
//           ReactDOM.render(
//             <Scanner onScan={(result) => handleScan(result, index)} />,
//             scannerContainer
//           );
//         }
//       });
//     });
//   }, []);

//   return (
//     <>
//       <h1>Chasse au Trésor</h1>
//       <div id="map" style={{ height: "80vh" }}></div>
//       <div>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
//         doloremque? Repellat excepturi nobis earum placeat! Voluptas consequatur
//         sapiente autem nesciunt delectus eveniet consequuntur illo omnis
//         architecto, debitis eos dicta nostrum? Cum qui debitis iusto possimus
//         deserunt libero impedit? Aliquam quasi magni ut qui tenetur, doloremque
//         vel dolorum assumenda, eveniet aliquid ullam debitis quae explicabo a
//         sint accusantium minus suscipit reiciendis? Tenetur, fugit temporibus?
//         Voluptatibus et consequuntur exercitationem porro impedit ducimus quia
//         iure corrupti molestiae ad voluptatem odio architecto vero eligendi
//         harum tempore odit, in quod dolore animi numquam. Exercitationem,
//         eveniet. Cupiditate, nam ipsum non omnis dignissimos cumque ullam cum
//         voluptates nulla iste! Dolore minima a temporibus possimus voluptate
//         necessitatibus asperiores, aliquid beatae nemo animi vitae atque
//         repellendus mollitia doloribus dignissimos. Saepe consectetur iure culpa
//         quaerat eligendi accusantium quos? Reprehenderit officiis inventore
//         voluptatum sint! Animi delectus, reprehenderit minus quos assumenda
//         repudiandae amet tenetur aliquid pariatur blanditiis quod, tempora esse
//         omnis ad. Nam quaerat tempora, rem consequuntur amet iusto! Cum rem
//         explicabo tempora ex vitae amet blanditiis soluta commodi. Sit repellat
//         quis hic mollitia. Officiis, inventore! Atque, consectetur. Perferendis
//         molestias maxime suscipit. Tenetur aliquid hic souvent, ce dolor
//         adipisci quas? Corporis, quod sont, fugiat, voluptatem expedita ab odit.
//       </div>
//     </>
//   );
// }

// export default Geoloc;

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";
import { Scanner } from "@yudiel/react-qr-scanner";
import ReactDOM from "react-dom";

function Geoloc() {
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    maptilersdk.config.apiKey = "y1dslXIqqQPSOGJWsaQy";
    const map = new maptilersdk.Map({
      container: "map",
      style: maptilersdk.MapStyle.STREETS,
      center: [0.15, 45.650002],
      zoom: 14,
    });

    const passwords = ["secret1", "secret2"]; // Add more passwords as needed

    const handleScan = (result, index) => {
      console.log(result);
      if (result === passwords[index]) {
        alert("QR Code correct! You have entered the right word.");
        setActivePopup(null); // Close the current popup
      } else {
        alert("QR Code incorrect! Try again.");
      }
    };

    const popupContent = (index) => `
      <div id="popup-${index}">
        <h3>Popup ${index + 1}</h3>
        <p>Scan the QR code to proceed:</p>
        <div id="scanner-${index}"></div>
      </div>`;

    const popups = [
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(0)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(1)),
      // Add more popups as needed
    ];

    const markers = [
      new maptilersdk.Marker({ color: "#FFFFFF", draggable: true })
        .setLngLat([0.15, 45.650002])
        .setPopup(popups[0])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: true })
        .setLngLat([0.15, 45.660002])
        .setPopup(popups[1])
        .addTo(map),

      // Add more markers as needed
    ];

    popups.forEach((popup, index) => {
      popup.on("open", () => {
        const scannerContainer = document.querySelector(`#scanner-${index}`);
        if (scannerContainer) {
          ReactDOM.render(
            <Scanner onScan={(result) => handleScan(result, index)} />,
            scannerContainer
          );
        }
      });
    });
  }, []);

  return (
    <>
      <h1>Chasse au Trésor</h1>
      <div id="map" style={{ height: "80vh" }}></div>
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
        molestias maxime suscipit. Tenetur aliquid hic souvent, ce dolor
        adipisci quas? Corporis, quod sont, fugiat, voluptatem expedita ab odit.
      </div>
    </>
  );
}

export default Geoloc;
