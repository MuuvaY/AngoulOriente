import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatchContext } from "./StopwatchContext";

function Start() {
  const { start } = useStopwatchContext();
  const navigate = useNavigate();

  const handleStart = () => {
    start();
    navigate("/Game");
    sessionStorage.setItem("balise1", "false");
    sessionStorage.setItem("balise2", "false");
    sessionStorage.setItem("balise3", "false");
    sessionStorage.setItem("balise4", "false");
    sessionStorage.setItem("balise5", "false");
    sessionStorage.setItem("balise6", "false");
    sessionStorage.setItem("balise7", "false");
    sessionStorage.setItem("balise8", "false");
  };

  return (
    <div id="start">
      <h1 id="start-title">Pour démarrer la course</h1>
      <button onClick={handleStart}>Commencer</button>
    </div>
  );
}

export default Start;
