import "./SavedNewsHeader.css";

function SavedNewsHeader({ savedArticles = [], userName = "Usuario" }) {
  const keywordCounts = {};
  savedArticles.forEach((article) => {
    const kw = article.keyword || "Naturaleza";
    keywordCounts[kw] = (keywordCounts[kw] || 0) + 1;
  });

  const sortedKeywords = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );

  let keywordString = "";
  if (sortedKeywords.length === 1) {
    keywordString = sortedKeywords[0];
  } else if (sortedKeywords.length === 2) {
    keywordString = `${sortedKeywords[0]} y ${sortedKeywords[1]}`;
  } else if (sortedKeywords.length === 3) {
    keywordString = `${sortedKeywords[0]}, ${sortedKeywords[1]} y ${sortedKeywords[2]}`;
  } else if (sortedKeywords.length > 3) {
    keywordString = `${sortedKeywords[0]}, ${sortedKeywords[1]} y ${sortedKeywords.length - 2} más`;
  }

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Artículos guardados</p>
      <h2 className="saved-news-header__title">
        {userName}, tienes {savedArticles.length} artículos guardados
      </h2>

      {sortedKeywords.length > 0 && (
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
