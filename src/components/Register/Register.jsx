import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({ isOpen, onClose, onSwitchModal, onRegister }) {
  return (
    <PopupWithForm
      name="register"
      title="Inscribirse"
      buttonText="Inscribirse"
      isOpen={isOpen}
      onClose={onClose}
      altLinkText="Iniciar sesión"
      onAltLinkClick={onSwitchModal}
      isValid={true}
      onSubmit={onRegister}
    >
      <label className="popup__label">
        Correo electrónico
        <input
          type="email"
          name="email"
          className="popup__input"
          placeholder="Introduce tu correo electrónico"
          required
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
        />
      </label>

      <label className="popup__label">
        Nombre de usuario
        <input
          type="text"
          name="username"
          className="popup__input"
          placeholder="Introduce tu nombre de usuario"
          required
          minLength="2"
          maxLength="30"
        />
      </label>
    </PopupWithForm>
  );
}

export default Register;
