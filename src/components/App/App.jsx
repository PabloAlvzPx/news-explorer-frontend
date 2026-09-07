import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className="page">
      <Header onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <Login
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onSwitchModal={handleRegisterClick}
      />

      <Register
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onSwitchModal={handleLoginClick}
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
