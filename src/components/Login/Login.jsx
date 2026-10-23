import { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Login({ isOpen, onClose, onSwitchModal, onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <PopupWithForm
      name="login"
      title="Iniciar sesión"
      buttonText="Iniciar sesión"
      isOpen={isOpen}
      onClose={onClose}
      altLinkText="Regístrate"
      onAltLinkClick={onSwitchModal}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="popup__label">
        Correo electrónico
        <input
          type="email"
          name="email"
          className="popup__input"
          placeholder="Introduce tu correo electrónico"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.email}</span>
      </label>

      <label className="popup__label">
        Contraseña
        <input
          type="password"
          name="password"
          className="popup__input"
          placeholder="Introduce tu contraseña"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.password}</span>
      </label>
    </PopupWithForm>
  );
}

export default Login;
