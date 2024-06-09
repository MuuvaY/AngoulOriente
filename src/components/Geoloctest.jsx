import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import "./../style.css";

import "@maptiler/sdk/dist/maptiler-sdk.css";

// import logo from "./assets/react.svg";
import * as maptilersdk from "@maptiler/sdk";

function Geoloctest() {
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
        <p>This is a popup with an image!</p>
        <input type="text" name="text">
        <button type="submit">Envoyer</button>
      </div>`
    );

    const popup2 = new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<div>
          <h3>Popup Titre</h3>
          <p>This is a popup with an image!</p>
          <input type="text" name="text">
          <button type="submit">Envoyer</button>
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

    const marker2 = new maptilersdk.Marker({
      color: "#00000",
      draggable: true,
    })
      .setLngLat([0.15, 45.660002])
      .setPopup(popup2) // Attach the popup to the marker
      .addTo(map);
  }, []);

  return (
    <>
      <h1>test</h1>
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
        molestias maxime suscipit. Tenetur aliquid hic saepe, esse dolor
        adipisci quas? Corporis, quod sunt, fugiat, voluptatem expedita ab odit
      </div>
    </>
  );
}

export default Geoloctest;
