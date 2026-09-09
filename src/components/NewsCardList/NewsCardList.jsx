import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  keyword,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Resultados de la búsqueda</h2>

      <div className="news-card-list__cards">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            keyword={keyword}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onSaveArticle={onSaveArticle}
            onDeleteArticle={onDeleteArticle}
          />
        ))}
      </div>

      {visibleCount < articles.length && (
        <button
          className="news-card-list__button"
          type="button"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
