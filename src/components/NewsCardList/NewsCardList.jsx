import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Resultados de la búsqueda</h2>

      <div className="news-card-list__cards">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

      <button className="news-card-list__button" type="button">
        Ver más
      </button>
    </section>
  );
}

export default NewsCardList;
