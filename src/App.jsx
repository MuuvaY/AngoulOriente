import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Accueil from "./components/Accueil";
import Start from "./components/Start";
import Login from "./components/Login";
import Recap from "./components/Recap";
import Map from "./components/Map";
import { StopwatchProvider } from "./components/StopwatchContext";

export default function App() {
  return (
    <>
      <StopwatchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<Login />} />

            <Route path="/start" element={<Start />} />
            <Route path="/recap" element={<Recap />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </StopwatchProvider>
    </>
  );
}
