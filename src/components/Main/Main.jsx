import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import "./Main.css";

function Main({
  news,
  isLoading,
  hasSearched,
  searchError,
  onSearch,
  keyword,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
}) {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">
            ¿Qué está pasando
            <br /> en el mundo?
          </h1>
          <p className="main__subtitle">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en
            tu cuenta personal.
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
      </section>

      {isLoading && <Preloader />}

      {searchError && (
        <div
          className="main__error"
          style={{
            textAlign: "center",
            padding: "40px",
            fontFamily: "Roboto, sans-serif",
            color: "#FF0000",
          }}
        >
          Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
          haya un problema de conexión o que el servidor no funcione. Por favor,
          inténtalo más tarde.
        </div>
      )}

      {hasSearched && !isLoading && !searchError && news.length === 0 && (
        <NothingFound />
      )}

      {hasSearched && !isLoading && !searchError && news.length > 0 && (
        <NewsCardList
          articles={news}
          keyword={keyword}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onSaveArticle={onSaveArticle}
          onDeleteArticle={onDeleteArticle}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
