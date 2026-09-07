import { useEffect } from "react";
import closeIcon from "../../images/close-icon.svg";
import "../PopupWithForm/PopupWithForm.css";

function SuccessModal({ isOpen, onClose, onSwitchModal }) {
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
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={closeIcon} alt="Cerrar ventana" />
        </button>

        <h2 className="popup__title" style={{ marginBottom: "14px" }}>
          ¡El registro se ha completado con éxito!
        </h2>

        <span
          className="popup__alt-link"
          onClick={onSwitchModal}
          style={{ fontSize: "18px", textAlign: "left" }}
        >
          Iniciar sesión
        </span>
      </div>
    </div>
  );
}

export default SuccessModal;
