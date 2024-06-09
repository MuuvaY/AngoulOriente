import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import Weather from "./Weather";
import ReactDOM from "react-dom";
//import { Scanner } from "@yudiel/react-qr-scanner";
import QrReader from "./QrReader";

function Game() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    maptilersdk.config.apiKey = "y1dslXIqqQPSOGJWsaQy";
    const map = new maptilersdk.Map({
      container: "map",
      style: maptilersdk.MapStyle.STREETS,
      center: [0.15, 45.650002],
      zoom: 14,
    });

    const popupContent = (index) => `
      <div class="popup ${index}">
        <h3>Balise ${index + 1}</h3>
        <p>Scan le Qr que tu as trouvé sur place:</p>
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
          ReactDOM.render(<QrReader />, scannerContainer);
        }
      });
    });
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.toLowerCase() === "newyork") {
      navigate("/Recap");
    }
  };

  return (
    <>
      <Timer />
      <Weather />
      <div id="map" style={{ height: "80vh" }}></div>
      <input
        id="game-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez ici les lettres trouvées à chauqe qr code"
      />
    </>
  );
}

export default Game;
