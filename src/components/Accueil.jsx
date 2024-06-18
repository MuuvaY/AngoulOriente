import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-angouloriente.webp";

function Accueil() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div id="accueil">
      <img
        src={logo}
        alt="logo de l'application Angoul'Oriente"
        className="accueil-logo"
      />
      <h1 id="accueil-title">Bienvenue sur Angoul'Oriente.</h1>
      <div id="accueil-barre-red"></div>
      <p id="accueil-text">
        Cette application vous permet de participer à une course d'orientation
        ludique et sportive. À chaques étape, trouver le Qr Code qui vous
        donnera une lettre afin de déchiffrer le mot secret. Une fois le mot
        secret trouvé, le temps s'arrête !
      </p>
      <button onClick={handleClick}>J'ai compris</button>
    </div>
  );
}

export default Accueil;
