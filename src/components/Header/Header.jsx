import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick, isLoggedIn, userName, onLogout }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const headerClass = isSavedNews ? "header header--light" : "header";
  const logoClass = isSavedNews
    ? "header__logo header__logo--light"
    : "header__logo";

  return (
    <header className={headerClass}>
      <Link to="/" className={logoClass}>
        NewsExplorer
      </Link>

      <Navigation
        isSavedNews={isSavedNews}
        onLoginClick={onLoginClick}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={onLogout}
      />
    </header>
  );
}

export default Header;
