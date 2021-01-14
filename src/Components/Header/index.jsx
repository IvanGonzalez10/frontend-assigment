import React from "react";

import "./styles.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <div className="search-container">
        <button>
          <img src="./assets/lupa.svg" alt="Buscar" />
        </button>
        <input type="text" placeholder="¿Qué estás buscando?" />
        <img src="./assets/home.svg" alt="Inicio" />
        <h5>Inicio ▼</h5>
      </div>
      <div className="config-container">
        <div className='icon-container'>
          <img src="./assets/notification.svg" alt="Campana de notificaciones" />
          <button>1</button>
        </div>
        <div className='profile-container'>
          <img src="./assets/profile.svg" alt="" />
          <h5>▼</h5>
        </div>
        <div className='setting-container'>
          <img src="./assets/settings.svg" alt="configuracion" />
        </div>
      </div>
    </div>
  );
};
