import { useState } from "react";
import { useLocation } from "react-router-dom";
import bookmarkIcon from "../../images/bookmark-icon.svg";
import bookmarkActiveIcon from "../../images/bookmark-active.svg";
import trashIcon from "../../images/trash-icon.svg";
import trashIconHover from "../../images/trash-icon-hover.svg";
import "./NewsCard.css";

function NewsCard() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <div
          className="news-card__image"
          style={{ backgroundColor: "#D1D2D6" }}
        ></div>

        {isSavedNews ? (
          <>
            <div className="news-card__keyword">Naturaleza</div>

            <div className="news-card__button-container">
              <button
                type="button"
                className="news-card__button"
                aria-label="Eliminar artículo"
                onMouseEnter={() => setIsTrashHovered(true)}
                onMouseLeave={() => setIsTrashHovered(false)}
              >
                <img
                  src={isTrashHovered ? trashIconHover : trashIcon}
                  alt="Eliminar"
                />
              </button>
              <div className="news-card__tooltip">Eliminar de guardados</div>
            </div>
          </>
        ) : (
          <div className="news-card__button-container">
            <button
              type="button"
              className="news-card__button"
              aria-label="Guardar artículo"
            >
              <img
                src={isSaved ? bookmarkActiveIcon : bookmarkIcon}
                alt="Guardar"
              />
            </button>
            <div className="news-card__tooltip">
              Inicia sesión para guardar artículos
            </div>
          </div>
        )}
      </div>

      <div className="news-card__info">
        <p className="news-card__date">2 de noviembre de 2020</p>
        <h3 className="news-card__title">
          Todo el mundo necesita un lugar de reflexión en la naturaleza
        </h3>
        <p className="news-card__text">
          Desde que leí el influyente libro de Richard Louv, "El último niño en
          el bosque", la idea de tener un "lugar de reflexión" especial para mí
          se me ha quedado grabada.
        </p>
        <p className="news-card__source">TREEHUGGER</p>
      </div>
    </article>
  );
}

export default NewsCard;
