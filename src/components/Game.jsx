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
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(2)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(3)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(4)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(5)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(6)),
      new maptilersdk.Popup({ offset: 25 }).setHTML(popupContent(7)),
    ];

    const markers = [
      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.13878, 45.64794])
        .setPopup(popups[0])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.13836014204100858, 45.656061430471276])
        .setPopup(popups[1])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.15097989897922934, 45.654567103069716])
        .setPopup(popups[2])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.14701226404733178, 45.65187998039186])
        .setPopup(popups[3])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.15712064520431374, 45.64990543277496])
        .setPopup(popups[4])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.16221130659391206, 45.649302734779106])
        .setPopup(popups[5])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.17213830875420214, 45.64789783145135])
        .setPopup(popups[6])
        .addTo(map),

      new maptilersdk.Marker({ color: "#000000", draggable: false })
        .setLngLat([0.1751636388762578, 45.64250940634848])
        .setPopup(popups[7])
        .addTo(map),
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
    <div id="game">
      <h1> Bienvenue dans l'aventure de la chasse aux trésors ! </h1>
      <p>
        {" "}
        Pour commencer, scanne les QR codes des balises dans l'odre des balises
        pour trouver les lettres cachées. Attention, la dernière balise ne donne
        pas une lettre mais la clé du chiffrement de César.{" "}
      </p>
      <p>
        {" "}
        Une fois que tu as déchiffré le mot, rentre le dans le champ ci-dessous
        pour valider ta réponse et terminer la course.{" "}
      </p>
      <Timer />
      <p id="found-letters">
        Lettres trouvées: <br></br>
        <h3>
          <b>{scannedCodes}</b>
        </h3>
      </p>
      <Weather />

      <div id="map" style={{ height: "80vh", border: "2px solid black" }}></div>
      <input
        id="game-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez ici les lettres trouvées à chaque qr code"
      />
    </div>
  );
}

export default Game;
