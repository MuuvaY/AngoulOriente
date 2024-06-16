import React from "react";
import logo from "../assets/logo-angouloriente.webp";

const getSessionData = (key) => {
  return sessionStorage.getItem(key);
};

const Recap = () => {
  const username = getSessionData("username");
  const hours = getSessionData("hours");
  const minutes = getSessionData("minutes");
  const seconds = getSessionData("seconds");

  return (
    <div id="recap">
      <img
        src={logo}
        alt="logo de l'application Angoul'Oriente"
        className="recap-logo"
      />
      <h1 id="recap-title">Félicitations, {username} !</h1>
      <div id="recap-body">
        <p>Vous avez terminé la course d'orientation.</p>
        <p>
          Vous avez trouvé le mot secret :{" "}
          <strong id="secret-word">New York</strong>
        </p>
        <h2>Le saviez-vous ?</h2>
        <p>
          Le nom de Terre-d'Angoulême, donné au site où se dresse aujourd'hui
          New-York, se retrouve sur de nombreuses cartes et portulans du
          seizième siècle, jusqu'en 1561. Cette première appellation de la
          grande cité américaine dura donc trente-sept ans.
        </p>
        <p>
          Temps total :{" "}
          <span id="time">
            {" "}
            {hours} heures, {minutes} minutes, {seconds} secondes
          </span>
        </p>
      </div>
    </div>
  );
};

export default Recap;
