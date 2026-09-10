import { useState } from "react";
import { useLocation } from "react-router-dom";
import bookmarkIcon from "../../images/bookmark-icon.svg";
import bookmarkHoverIcon from "../../images/bookmark-hover.svg";
import bookmarkActiveIcon from "../../images/bookmark-active.svg";
import trashIcon from "../../images/trash-icon.svg";
import trashIconHover from "../../images/trash-icon-hover.svg";
import "./NewsCard.css";

function NewsCard({
  article,
  keyword,
  isLoggedIn,
  savedArticles = [],
  onSaveArticle,
  onDeleteArticle,
}) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const isSaved = savedArticles.some((item) => item.url === article.url);

  let currentBookmarkIcon = bookmarkIcon;
  if (isSaved) {
    currentBookmarkIcon = bookmarkActiveIcon;
  } else if (isBookmarkHovered) {
    currentBookmarkIcon = bookmarkHoverIcon;
  }

  const handleSaveClick = () => {
    if (!isLoggedIn) return;

    if (isSaved) {
      onDeleteArticle(article.url);
    } else {
      onSaveArticle(article, keyword);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <div
          className="news-card__image"
          style={{ backgroundImage: `url(${article.urlToImage})` }}
        ></div>

        {isSavedNews ? (
          <>
            <div className="news-card__keyword">
              {article.keyword || keyword || "Naturaleza"}
            </div>

            <div className="news-card__button-container">
              <button
                type="button"
                className="news-card__button"
                aria-label="Eliminar artículo"
                onMouseEnter={() => setIsTrashHovered(true)}
                onMouseLeave={() => setIsTrashHovered(false)}
                onClick={() => onDeleteArticle(article.url)}
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
              className={`news-card__button ${isSaved ? "news-card__button_active" : ""}`}
              aria-label="Guardar artículo"
              onClick={handleSaveClick}
              onMouseEnter={() => setIsBookmarkHovered(true)}
              onMouseLeave={() => setIsBookmarkHovered(false)}
            >
              <img src={currentBookmarkIcon} alt="Guardar" />
            </button>
            {!isLoggedIn && (
              <div className="news-card__tooltip">
                Inicia sesión para guardar artículos
              </div>
            )}
          </div>
        )}
      </div>

      <div className="news-card__info">
        <p className="news-card__date">{formatDate(article.publishedAt)}</p>
        <h3 className="news-card__title">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {article.title}
          </a>
        </h3>
        <p className="news-card__text">{article.description}</p>
        <p className="news-card__source">{article.source?.name || "FUENTE"}</p>
      </div>
    </article>
  );
}

export default NewsCard;
