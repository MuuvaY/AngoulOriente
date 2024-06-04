import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import { QrReader } from "@blackbox-vision/react-qr-reader";

function Accueil() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/qr");
  };

  return (
    <div>
      <h1>Bienvenue</h1>
      <p>
        Cette application vous permet de suivre une course d'orientation. A
        chaques étapes, trouver le qr code qui vous donnera une lettre afin de
        déchiffrer le mot secret. Une fois le mot secret trouvé, le temps
        s'arrête !
      </p>
      <button onClick={handleClick}>J'ai compris</button>
    </div>
  );
}
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/qr" element={<QRCodeReader />} />
          <Route path="/chrono" element={<MyStopwatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
