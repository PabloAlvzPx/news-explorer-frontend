import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ savedArticles, onDeleteArticle, isLoggedIn, userName }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedArticles={savedArticles} userName={userName} />

      {savedArticles.length > 0 && (
        <NewsCardList
          articles={savedArticles}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onDeleteArticle={onDeleteArticle}
        />
      )}
    </main>
  );
}

export default SavedNews;
