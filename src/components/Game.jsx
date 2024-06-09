import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./../style.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import logo from "./../assets/logo-angouloriente.webp";
import * as maptilersdk from "@maptiler/sdk";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import Weather from "./Weather";

function Game() {
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
      <Timer />
      <Weather />
      <div id="map" style={{ height: "80vh" }}></div>
      <input type="text" />
    </>
  );
}

export default Game;
