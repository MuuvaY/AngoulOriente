import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./../style.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import logo from "./../assets/logo-angouloriente.webp";
import * as maptilersdk from "@maptiler/sdk";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import Weather from "./Weather";

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
      <Timer />
      <Weather />
      <div id="map"></div>
      <input type="text" />
    </>
  );
}

export default Geoloc;
