import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useStopwatch } from "react-timer-hook";
import Geoloc from "./components/Geoloc";
import "leaflet/dist/leaflet.css";

function MyStopwatch() {
  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });

  const [inputValue, setInputValue] = useState("");
  const [started, setStarted] = useState(false);

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
    }
  }, [isRunning, started, hours, minutes, seconds]);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Test timer </p>

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
          placeholder="Enter le mot caché pour terminer la course"
          style={{ display: !started ? "none" : "inline-block" }}
        />
      </div>
    </div>
  );
}

const QRCodeReader = () => {
  const [data, setData] = useState("No result");
  const [scannerEnabled, setScannerEnabled] = useState(false);
  const qrRef = useRef(null);

  const toggleScanner = () => {
    setScannerEnabled(!scannerEnabled);
  };

  return (
    <div style={{ textAlign: "center", width: "50%", height: "50%" }}>
      {scannerEnabled && (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          ref={qrRef}
          style={{ width: "100%" }}
        />
      )}
      {!scannerEnabled && <p>Scanner désactivé</p>}
      <p>{data}</p>
      <button onClick={toggleScanner}>
        {scannerEnabled ? "Désactiver le scanner" : "Activer le scanner"}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <>
      <div>
        <MyStopwatch />
      </div>
      <div>
        <QRCodeReader />
      </div>
      <div className="geoloc">
        <Geoloc />
      </div>
    </>
  );
}
