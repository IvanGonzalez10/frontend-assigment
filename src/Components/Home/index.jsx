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
          <button>Guardas</button>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h2>Noticias DocRed</h2>
            <h3>Hace 12 h  |  Publicado: 17/01/18  |  Lectura: 3 min.</h3>
          </div>
          <button>Medicina interna</button>
          <button>Pediatria</button>
          <button>Obstreticia</button>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, voluptatum, iste autem odit atque dolore suscipit incidunt laborum deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem tempora deleniti reiciendis obcaecati.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, voluptatum, iste autem odit atque dolore suscipit incidunt laborum deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem tempora deleniti reiciendis obcaecati.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, voluptatum, iste autem odit atque dolore suscipit incidunt laborum deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem tempora deleniti reiciendis obcaecati.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, voluptatum, iste autem odit atque dolore suscipit incidunt laborum deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem tempora deleniti reiciendis obcaecati.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, voluptatum, iste autem odit atque dolore suscipit incidunt laborum deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem tempora deleniti reiciendis obcaecati.</p>
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
