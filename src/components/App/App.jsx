import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { searchNews } from "../../utils/NewsApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SuccessModal from "../SuccessModal/SuccessModal";
import "./App.css";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const [currentKeyword, setCurrentKeyword] = useState("");

  const [savedArticles, setSavedArticles] = useState([]);

  const navigate = useNavigate();

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const handleLoginClick = () => {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  };

  const handleRegisterClick = () => {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  };

  const handleLogin = (e) => {
    e?.preventDefault();
    setIsLoggedIn(true);
    setUserName("Pablo");
    closeAllPopups();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  const handleRegister = (e) => {
    e?.preventDefault();
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(true);
  };

  const handleSaveArticle = (article, keyword) => {
    const articleWithKeyword = { ...article, keyword };
    const newSavedList = [...savedArticles, articleWithKeyword];
    setSavedArticles(newSavedList);
    localStorage.setItem("savedArticles", JSON.stringify(newSavedList));
  };

  const handleDeleteArticle = (articleUrl) => {
    const newSavedList = savedArticles.filter(
      (item) => item.url !== articleUrl,
    );
    setSavedArticles(newSavedList);
    localStorage.setItem("savedArticles", JSON.stringify(newSavedList));
  };

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setHasSearched(true);
    setSearchError(false);

    setCurrentKeyword(keyword);
    localStorage.setItem("currentKeyword", keyword);

    searchNews(keyword)
      .then((data) => {
        setNews(data.articles);
        localStorage.setItem(
          "savedNewsArticles",
          JSON.stringify(data.articles),
        );
      })
      .catch((err) => {
        console.error("Error al buscar noticias:", err);
        setSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const storedSavedArticles = localStorage.getItem("savedArticles");
    if (storedSavedArticles) {
      setSavedArticles(JSON.parse(storedSavedArticles));
    }
  }, [setSavedArticles]);

  return (
    <div className="page">
      <Header
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              news={news}
              isLoading={isLoading}
              hasSearched={hasSearched}
              searchError={searchError}
              onSearch={handleSearchSubmit}
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              onSaveArticle={handleSaveArticle}
              onDeleteArticle={handleDeleteArticle}
              keyword={currentKeyword}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              onDeleteArticle={handleDeleteArticle}
              isLoggedIn={isLoggedIn}
              userName={userName}
            />
          }
        />
      </Routes>

      <Footer />

      <Login
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onSwitchModal={handleRegisterClick}
        onLogin={handleLogin}
      />

      <Register
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onSwitchModal={handleLoginClick}
        onRegister={handleRegister}
      />

      <SuccessModal
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}
        onSwitchModal={handleLoginClick}
      />
    </div>
  );
}

export default App;
