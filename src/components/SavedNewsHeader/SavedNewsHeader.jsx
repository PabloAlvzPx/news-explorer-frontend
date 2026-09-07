import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Artículos guardados</p>
      <h2 className="saved-news-header__title">
        Elise, tienes 5 artículos guardados
      </h2>
      <p className="saved-news-header__keywords">
        Por palabras clave:{" "}
        <span className="saved-news-header__keywords-span">
          Naturaleza, Yellowstone, y 2 más
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
