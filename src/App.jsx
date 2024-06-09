import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import MyStopwatch from "./components/Timer";
import Login from "./components/Login";
import Geoloc from "./components/Geoloc";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />

          <Route path="/chrono" element={<MyStopwatch />} />
          <Route path="/geoloc" element={<Geoloc />} />
        </Routes>
      </BrowserRouter>

      <div className="geoloc">
        <Geoloc />
      </div>
    </>
  );
}
