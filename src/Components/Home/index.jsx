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
        <div className="text-container">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Omnis veniam,
            voluptatum, iste autem odit atque dolore suscipit incidunt laborum
            deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem
            tempora deleniti reiciendis obcaecati. Lorem ipsum dolor, sit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum. <br /> Doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Omnis veniam,
            voluptatum, iste autem odit atque dolore suscipit incidunt laborum
            deleniti, doloribus nemo nulla! Recusandae quaerat exercitationem
            tempora deleniti reiciendis obcaecati. Doloribus nemo nulla! Lorem
            ipsum dolor.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Omnis veniam, volup.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti reiciendis obcaecati. Lorem ipsum
            sit elit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            veniam, voluptatum, iste autem odit atque dolore suscipit incidunt
            laborum deleniti, doloribus nemo nulla! Recusandae quaerat
            exercitationem tempora deleniti obcaecati.
          </p>
        </div>
        <div className="option-container">
          <div className="star-container">
            <img src="./assets/star.svg" alt="" />
            <h4>Destacar</h4>
          </div>
          <div className="comment-container">
            <img src="./assets/comment.svg" alt="" />
            <h4>Comentar</h4>
          </div>
          <div className="share-container">
            <img src="./assets/share.svg" alt="" />
            <h4>Compartir</h4>
          </div>
        </div>
      </div>
      <div className="little-container">
        <div className="title-container">
          <h1>Noticias relacionadas</h1>
        </div>
        <div className="other-news-container">
          <div className="little-news-container">
            <div className="image-little-news-container">
              <span className='one'>Noticia</span>
              <img src="./assets/sea.jpg" alt="Noticia" />
            </div>
            <div className="box-news-container">
              <h4>
                Lorem ipsum dolor: <br /> Volutpat consequat
              </h4>
              <h5>Por: Lorem ipsum dolor</h5>
              <div className="news-images-container">
                <div className="little-star-container">
                  <img src="./assets/star.svg" alt="" />
                  <h5>50</h5>
                </div>
                <div className="little-comment-container">
                  <img src="./assets/comment.svg" alt="" />
                  <h5>40</h5>
                </div>
                <div className="little-watch-container">
                  <img src="./assets/watch.svg" alt="" />
                  <h5>75</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="little-news-container">
            <div className="image-little-news-container">
              <span className='two'>Noticia</span>
              <img src="./assets/sea.jpg" alt="Noticia" />
            </div>
            <div className="box-news-container">
              <h4>
                Lorem ipsum dolor: <br /> Volutpat consequat
              </h4>
              <h5>Por: Lorem ipsum dolor</h5>
              <div className="news-images-container">
                <div className="little-star-container">
                  <img src="./assets/star.svg" alt="" />
                  <h5>50</h5>
                </div>
                <div className="little-comment-container">
                  <img src="./assets/comment.svg" alt="" />
                  <h5>40</h5>
                </div>
                <div className="little-watch-container">
                  <img src="./assets/watch.svg" alt="" />
                  <h5>75</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="little-news-container">
            <div className="image-little-news-container">
              <span className='three'>Noticia</span>
              <img src="./assets/sea.jpg" alt="Noticia" />
            </div>
            <div className="box-news-container">
              <h4>
                Lorem ipsum dolor: <br /> Volutpat consequat
              </h4>
              <h5>Por: Lorem ipsum dolor</h5>
              <div className="news-images-container">
                <div className="little-star-container">
                  <img src="./assets/star.svg" alt="" />
                  <h5>50</h5>
                </div>
                <div className="little-comment-container">
                  <img src="./assets/comment.svg" alt="" />
                  <h5>40</h5>
                </div>
                <div className="little-watch-container">
                  <img src="./assets/watch.svg" alt="" />
                  <h5>75</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="little-news-container">
            <div className="image-little-news-container">
              <span className='four'>Noticia</span>
              <img src="./assets/sea.jpg" alt="Noticia" />
            </div>
            <div className="box-news-container">
              <h4>
                Lorem ipsum dolor: <br /> Volutpat consequat
              </h4>
              <h5>Por: Lorem ipsum dolor</h5>
              <div className="news-images-container">
                <div className="little-star-container">
                  <img src="./assets/star.svg" alt="" />
                  <h5>50</h5>
                </div>
                <div className="little-comment-container">
                  <img src="./assets/comment.svg" alt="" />
                  <h5>40</h5>
                </div>
                <div className="little-watch-container">
                  <img src="./assets/watch.svg" alt="" />
                  <h5>75</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="little-news-container">
            <div className="image-little-news-container">
              <span className='five'>Noticia</span>
              <img src="./assets/sea.jpg" alt="Noticia" />
            </div>
            <div className="box-news-container">
              <h4>
                Lorem ipsum dolor: <br /> Volutpat consequat
              </h4>
              <h5>Por: Lorem ipsum dolor</h5>
              <div className="news-images-container">
                <div className="little-star-container">
                  <img src="./assets/star.svg" alt="" />
                  <h5>50</h5>
                </div>
                <div className="little-comment-container">
                  <img src="./assets/comment.svg" alt="" />
                  <h5>40</h5>
                </div>
                <div className="little-watch-container">
                  <img src="./assets/watch.svg" alt="" />
                  <h5>75</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
