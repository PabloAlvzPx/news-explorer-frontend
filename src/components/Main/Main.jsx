import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import "./Main.css";

function Main() {
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
          <SearchForm />
        </div>
      </section>
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
