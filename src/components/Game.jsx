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
  const [scannedCodes, setScannedCodes] = useState([]);

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

  useEffect(() => {
    // Fonction pour récupérer les codes scannés depuis sessionStorage
    const retrieveScannedCodes = () => {
      try {
        const storedData = sessionStorage.getItem("scannedCodes");
        const codes = storedData ? JSON.parse(storedData) : [];
        setScannedCodes(codes);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données sessionStorage :",
          error
        );
        setScannedCodes([]);
      }
    };

    // Initialisation ou mise à jour initiale des codes scannés
    retrieveScannedCodes();

    // Écoute des mises à jour de sessionStorage
    const handleStorageUpdate = () => {
      retrieveScannedCodes();
    };

    window.addEventListener("sessionStorageUpdated", handleStorageUpdate);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("sessionStorageUpdated", handleStorageUpdate);
    };
  }, []);

  // Gestion de l'entrée utilisateur
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const inputText = e.target.value.toLowerCase();
    if (
      scannedCodes.length === 7 &&
      inputText === scannedCodes.join("").toLowerCase()
    ) {
      navigate("/Recap");
    }
  };

  return (
    <>
      <Timer />
      <p id="found-letters">
        Lettres trouvées: <br></br>
        {scannedCodes}
      </p>
      <Weather />

      <div id="map" style={{ height: "80vh" }}></div>
      <input
        id="game-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez ici les lettres trouvées à chaque qr code"
      />
    </>
  );
}

export default Game;
