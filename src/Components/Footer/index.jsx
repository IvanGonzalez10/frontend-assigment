import React from "react";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <div className="policy-container">
        <h5>Preguntas frecuentes</h5>
        <h5>Contactenos</h5>
        <h5>Informacion</h5>
      </div>
      <div className="rights-container">
        <h4>DocRed © 2021. Todos los derechos reservados</h4>
      </div>
    </div>
  );
};
