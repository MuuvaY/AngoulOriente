import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-angouloriente.webp";

function Login() {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState("");

  const handleLogin = (event) => {
    const login = event.target.value;
    setLoginValue(login);
    sessionStorage.setItem("username", login);
  };

  const redirectToApp = () => {
    navigate("/start");
  };

  return (
    <div id="login">
      <img
        src={logo}
        alt="logo de l'application Angoul'Oriente"
        className="login-logo"
      />
      <h1 id="login-title">Inscription</h1>
      <div id="login-barre-red"></div>

      <input
        type="text"
        value={loginValue}
        onChange={handleLogin}
        placeholder="Entrer votre nom..."
      />
      <button onClick={redirectToApp}>Valider</button>
    </div>
  );
}

export default Login;
