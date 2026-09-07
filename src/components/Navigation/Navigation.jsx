import { Link } from "react-router-dom";
import logoutIcon from "../../images/logout-icon.svg";
import logoutIconDark from "../../images/logout-icon-dark.svg";
import "./Navigation.css";

function Navigation({ isSavedNews, onLoginClick, isLoggedIn }) {
  const linkClass = `navigation__link ${isSavedNews ? "navigation__link_dark" : ""}`;
  const buttonClass = `navigation__button ${isSavedNews ? "navigation__button_dark" : ""}`;

  return (
    <nav className="navigation">
      <Link to="/" className={linkClass}>
        Inicio
      </Link>

      {isLoggedIn && (
        <Link to="/saved-news" className={linkClass}>
          Artículos guardados
        </Link>
      )}

      {isLoggedIn ? (
        <button className={`${buttonClass} navigation__button_logout`}>
          Elise
          <img
            src={isSavedNews ? logoutIconDark : logoutIcon}
            alt="Cerrar sesión"
            style={{ marginLeft: "10px" }}
          />
        </button>
      ) : (
        <button className={buttonClass} onClick={onLoginClick}>
          Iniciar sesión
        </button>
      )}
    </nav>
  );
}

export default Navigation;
