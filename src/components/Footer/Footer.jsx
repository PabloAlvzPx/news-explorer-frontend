import { Link } from "react-router-dom";
import githubIcon from "../../images/github-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>

      <div className="footer__content">
        <nav className="footer__links">
          <Link to="/" className="footer__link">
            Inicio
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Practicum
          </a>
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer__social-icon"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer__social-icon"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
