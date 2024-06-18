import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/qr-frame.svg";

const QrReader = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [scannedResult, setScannedResult] = useState("");

  const onScanSuccess = (result) => {
    const scannedData = result?.data;

    // Update sessionStorage and trigger custom event
    if (scannedData) {
      const existingScans =
        JSON.parse(sessionStorage.getItem("scannedCodes")) || [];
      if (!existingScans.includes(scannedData)) {
        existingScans.push(scannedData);
        sessionStorage.setItem("scannedCodes", JSON.stringify(existingScans));
        setScannedResult(scannedData);
        window.dispatchEvent(new Event("sessionStorageUpdated"));
      }
    }
  };

  useEffect(() => {
    const startScanner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoEl.current.srcObject = stream;
        videoEl.current.play();
        scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
          onDecodeError: (err) => console.error(err),
          preferredCamera: "environment",
          highlightScanRegion: true,
          highlightCodeOutline: true,
          overlay: qrBoxEl.current || undefined,
        });
        scanner.current.start();
      } catch (error) {
        console.error("Camera not found or not accessible:", error);
      }
    };

    startScanner();

    return () => {
      if (scanner.current) {
        scanner.current.stop();
      }
      if (videoEl.current && videoEl.current.srcObject) {
        videoEl.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="qr-reader">
      <video ref={videoEl} playsInline></video>
      <div ref={qrBoxEl} className="qr-box">
        <img
          src={QrFrame}
          alt="Qr Frame"
          width={150}
          height={150}
          className="qr-frame"
        />
      </div>
    </div>
  );
};

export default QrReader;
