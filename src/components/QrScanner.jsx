import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

const QrScanner = () => {
  const [isScannerVisible, setIsScannerVisible] = useState(false);

  const handleQrScanner = () => {
    setIsScannerVisible((prevState) => !prevState);
  };

  const handleScan = (detectedCodes) => {
    if (detectedCodes.length > 0) {
      console.log(detectedCodes);
    }
  };

  return (
    <>
      {isScannerVisible && (
        <div id="scanner-container">
          <Scanner onScan={handleScan} />
        </div>
      )}
      <div id="scanner-button" onClick={handleQrScanner}>
        <FontAwesomeIcon icon={faQrcode} size="2x" />
      </div>
    </>
  );
};

export default QrScanner;
