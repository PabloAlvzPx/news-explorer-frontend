import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onSwitchModal, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.trim().length >= 6;

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin();
    }
  };

  return (
    <PopupWithForm
      name="login"
      title="Iniciar sesión"
      buttonText="Iniciar sesión"
      isOpen={isOpen}
      onClose={onClose}
      altLinkText="Inscribirse"
      onAltLinkClick={onSwitchModal}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label className="popup__label">
        Correo electrónico
        <input
          type="email"
          name="email"
          className="popup__input"
          placeholder="Introduce tu correo electrónico"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="popup__label">
        Contraseña
        <input
          type="password"
          name="password"
          className="popup__input"
          placeholder="Introduce tu contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </PopupWithForm>
  );
}

export default Login;
