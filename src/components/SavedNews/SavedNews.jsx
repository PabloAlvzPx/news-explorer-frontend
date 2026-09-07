import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews() {
  return (
    <main className="saved-news">
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}

export default SavedNews;
