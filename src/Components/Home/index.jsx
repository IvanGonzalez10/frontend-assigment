import React from "react";

import "./styles.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="big-container">
        <div className="news-container">
          <span>NOTICIA</span>
        </div>
        <div className="information-container">
          <h1>Lorem ipsum dolor: Volutpat consequat</h1>
          <button>Guardar</button>
        </div>
        <div className="description-container">
          <img src="./assets/image.png" alt="imagen de logo" />
          <div>
            <h2>Noticias DocRed</h2>
            <div className="sub-container">
              <h2>Hace 12 h</h2>
              <h3>Publicado: 17/01/18</h3>
              <h4>Lectura: 3 min.</h4>
            </div>
          </div>
        </div>
        <div className="btns-container">
          <button>Medicina interna</button>
          <button>Pediatria</button>
          <button>Obstreticia</button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati.
          </p>
        </div>
        <div>
          <h4>Destacar</h4>
          <h4>Comentar</h4>
          <h4>Compartir</h4>
        </div>
      </div>
      <div className="little-container">
        <div className="title-container">
          <h1>Noticias relacionadas</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};
