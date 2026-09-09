import "./SavedNewsHeader.css";

function SavedNewsHeader({ savedArticles = [], userName = "Usuario" }) {
  const keywords = savedArticles.map(
    (article) => article.keyword || "Naturaleza",
  );
  const uniqueKeywords = [...new Set(keywords)];

  let keywordString = "";
  if (uniqueKeywords.length === 1) {
    keywordString = uniqueKeywords[0];
  } else if (uniqueKeywords.length === 2) {
    keywordString = `${uniqueKeywords[0]} y ${uniqueKeywords[1]}`;
  } else if (uniqueKeywords.length > 2) {
    keywordString = `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, y ${uniqueKeywords.length - 2} más`;
  }

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Artículos guardados</p>
      <h2 className="saved-news-header__title">
        {userName}, tienes {savedArticles.length} artículos guardados
      </h2>

      {uniqueKeywords.length > 0 && (
        <p className="saved-news-header__keywords">
          Por palabras clave:{" "}
          <span className="saved-news-header__keywords-span">
            {keywordString}
          </span>
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
