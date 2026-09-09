import { useState } from "react";
import { Link } from "react-router-dom";
import logoutIcon from "../../images/logout-icon.svg";
import logoutIconDark from "../../images/logout-icon-dark.svg";
import "./Navigation.css";

function Navigation({
  isSavedNews,
  onLoginClick,
  isLoggedIn,
  userName,
  onLogout,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClass = `navigation__link ${isSavedNews ? "navigation__link--dark" : ""}`;
  const buttonClass = `navigation__button ${isSavedNews ? "navigation__button--dark" : ""}`;

  return (
    <>
      <button
        className={`navigation__hamburger ${isSavedNews ? "navigation__hamburger--dark" : ""} ${isMenuOpen ? "navigation__hamburger--close" : ""}`}
        onClick={toggleMenu}
        aria-label="Menú de navegación"
      />

      <nav className={`navigation ${isMenuOpen ? "navigation--opened" : ""}`}>
        {isMenuOpen && (
          <div className="navigation__overlay" onClick={closeMenu}></div>
        )}

        <div
          className={`navigation__container ${isSavedNews ? "navigation__container--dark" : ""}`}
        >
          <Link to="/" className={linkClass} onClick={closeMenu}>
            Inicio
          </Link>

          {isLoggedIn && (
            <Link to="/saved-news" className={linkClass} onClick={closeMenu}>
              Artículos guardados
            </Link>
          )}

          {isLoggedIn ? (
            <button
              className={`${buttonClass} navigation__button--logout`}
              onClick={() => {
                closeMenu();
                onLogout();
              }}
            >
              {userName}
              <img
                src={isSavedNews ? logoutIconDark : logoutIcon}
                alt="Cerrar sesión"
                style={{ marginLeft: "10px" }}
              />
            </button>
          ) : (
            <button
              className={buttonClass}
              onClick={() => {
                closeMenu();
                onLoginClick();
              }}
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
