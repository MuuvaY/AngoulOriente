import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatchContext } from "./StopwatchContext";

function Start() {
  const { start } = useStopwatchContext();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStart = () => {
    if (inputValue.toLowerCase() === "start") {
      start();
      navigate("/map");
    }
  };

  return (
    <div id="start">
      <h1 id="start-title">Pour démarrer la course</h1>
      <p>
        Pour démarrer la course, vous devez vous rendre sous le préau du
        bâtiment MMI où vous trouverez le premier QR code.
      </p>
      <div id="start-qr">
        <div id="start-qr-container">
          <i className="fa-solid fa-qrcode"></i>
        </div>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrez le mot du premier QR code pour démarrer la course"
        />
      </div>
      <button
        onClick={handleStart}
        disabled={inputValue.toLowerCase() !== "start"}
      >
        Valider
      </button>
    </div>
  );
}

export default Start;
