import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { searchNews } from "../../utils/NewsApi";
import {
  register,
  login,
  checkToken,
  getSavedArticles,
  deleteArticle,
  saveArticle,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SuccessModal from "../SuccessModal/SuccessModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const [currentKeyword, setCurrentKeyword] = useState("");

  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((userData) => {
          if (userData) {
            setCurrentUser(userData);
            setUserName(userData.name);
            setIsLoggedIn(true);

            getSavedArticles(jwt)
              .then((articles) => {
                setSavedArticles(articles);
              })
              .catch((err) =>
                console.error("Error al obtener artículos:", err),
              );
          }
        })
        .catch((err) => {
          console.error("Error al validar el token:", err);
          handleLogout();
        });
    }
  }, []);

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

  const handleLogin = (email, password) => {
    login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);

          return checkToken(data.token);
        }
      })
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setUserName(userData.name);
          setIsLoggedIn(true);
          closeAllPopups();
        }
      })
      .catch((err) => {
        console.error("Error al iniciar sesión:", err);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  const handleRegister = (email, password, name) => {
    register(email, password, name)
      .then((res) => {
        setIsRegisterPopupOpen(false);
        setIsSuccessPopupOpen(true);
      })
      .catch((err) => {
        console.error("Error al registrarse:", err);
      });
  };

  const handleSaveArticle = (article, keyword) => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;

    saveArticle(article, keyword, jwt)
      .then((savedArticle) => {
        setSavedArticles([...savedArticles, savedArticle]);
      })
      .catch((err) => console.error("Error al guardar el artículo:", err));
  };

  const handleDeleteArticle = (articleId) => {
    const jwt = localStorage.getItem("jwt");
    deleteArticle(articleId, jwt)
      .then(() => {
        setSavedArticles((state) =>
          state.filter((item) => item._id !== articleId),
        );
      })
      .catch((err) => console.error("Error al eliminar el artículo:", err));
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                onUnauthorizedClick={handleRegisterClick}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                handleLoginClick={handleLoginClick}
              >
                <SavedNews
                  savedArticles={savedArticles}
                  onDeleteArticle={handleDeleteArticle}
                  isLoggedIn={isLoggedIn}
                  userName={userName}
                />
              </ProtectedRoute>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
