import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Accueil from "./components/Accueil";
import MyStopwatch from "./components/Timer";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />

          <Route path="/chrono" element={<MyStopwatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
