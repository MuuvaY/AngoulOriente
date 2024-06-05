import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });

  const [inputValue, setInputValue] = useState("");
  const [started, setStarted] = useState(false);

  const navigate = useNavigate();  // Déplacez useNavigate ici

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.toLowerCase() === "secret") {
      pause();
    }
  };

  const handleStart = () => {
    start();
    setStarted(true);
  };

  useEffect(() => {
    if (!isRunning && started) {
      sessionStorage.setItem("hours", hours);
      sessionStorage.setItem("minutes", minutes);
      sessionStorage.setItem("seconds", seconds);
      navigate("/recap");
    }
  }, [isRunning, started, hours, minutes, seconds, navigate]);

  return (
    <div style={{ textAlign: "center" }} id="test">
      <p>Test timer</p>

      <button
        onClick={handleStart}
        style={{ display: started ? "none" : "inline-block" }}
      >
        Commencer la course
      </button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrez le mot caché pour terminer la course"
          style={{ display: !started ? "none" : "inline-block" }}
        />
      </div>
    </div>
  );
}

export default MyStopwatch;
