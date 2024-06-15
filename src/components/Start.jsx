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
      <h1 id="start-title">Pour démarrer la course</h1>
      <button onClick={handleStart}>Commencer</button>
    </div>
  );
}

export default Start;
