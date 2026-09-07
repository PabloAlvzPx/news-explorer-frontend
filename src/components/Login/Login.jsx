import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onSwitchModal }) {
  return (
    <PopupWithForm
      name="login"
      title="Iniciar sesión"
      buttonText="Iniciar sesión"
      isOpen={isOpen}
      onClose={onClose}
      altLinkText="Inscribirse"
      onAltLinkClick={onSwitchModal}
      isValid={true}
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
    </PopupWithForm>
  );
}

export default Login;
