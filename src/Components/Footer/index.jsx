import React from "react";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <div className="policy-container">
        <a href="/">
          <h5>Preguntas frecuentes</h5>
        </a>
        <a href="/">
          <h5>Contáctenos</h5>
        </a>
        <a href="/">
          <h5>Información</h5>
        </a>
      </div>
      <div className="rights-container">
        <h4>DocRed © 2021. Todos los derechos reservados</h4>
      </div>
    </div>
  );
};
