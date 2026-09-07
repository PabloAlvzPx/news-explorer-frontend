import { useEffect } from "react";
import closeIcon from "../../images/close-icon.svg";
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  name,
  title,
  buttonText,
  children,
  onClose,
  onSubmit,
  altLinkText,
  onAltLinkClick,
  isValid = true,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) onClose();
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={closeIcon} alt="Cerrar ventana" />
        </button>

        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className={`popup__submit-button ${!isValid ? "popup__submit-button_disabled" : ""}`}
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>

        {altLinkText && (
          <p className="popup__alt-text">
            o{" "}
            <span className="popup__alt-link" onClick={onAltLinkClick}>
              {altLinkText}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
