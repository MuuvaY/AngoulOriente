import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatchContext } from "./StopwatchContext";

function Start() {
  const { start } = useStopwatchContext();
  const navigate = useNavigate();

  const handleStart = () => {
    start();
    navigate("/Game");
    // Initialisation de sessionStorage avec un tableau vide si nécessaire
    if (!sessionStorage.getItem("scannedCodes")) {
      sessionStorage.setItem("scannedCodes", JSON.stringify([]));
    }
  };

  return (
    <div id="start">
      <h1>Prêt pour la course ?</h1>
      <p>
        Pour commencer la course, cliquez sur le bouton ci-dessous. Vous devrez
        scanner les 8 codes Qr cachés dans la ville pour terminer la course.
      </p>
      <button onClick={handleStart}>Commencer la course</button>
    </div>
  );
}

export default Start;
