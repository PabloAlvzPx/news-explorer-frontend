import { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation"; // Asegúrate de que la ruta sea correcta

function Register({ isOpen, onClose, onSwitchModal, onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.email, values.password, values.name);
  };

  return (
    <PopupWithForm
      name="register"
      title="Regístrate"
      buttonText="Regístrate"
      isOpen={isOpen}
      onClose={onClose}
      altLinkText="Inicia sesión"
      onAltLinkClick={onSwitchModal}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        Correo electrónico
        <input
          type="email"
          name="email"
          className="popup__input"
          placeholder="Introduce tu correo electrónico"
          value={values.email || ""}
          onChange={handleChange}
          required
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
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__error">{errors.password}</span>
      </label>

      <label className="popup__label">
        Nombre de usuario
        <input
          type="text"
          name="name"
          className="popup__input"
          placeholder="Introduce tu nombre de usuario"
          value={values.name || ""}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error">{errors.name}</span>
      </label>
    </PopupWithForm>
  );
}

export default Register;
