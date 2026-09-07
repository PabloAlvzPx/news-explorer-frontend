import "./NothingFound.css";
import notFoundIcon from "../../images/not-found.svg";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img
        src={notFoundIcon}
        alt="Lupa triste de no encontrado"
        className="nothing-found__icon"
      />
      <h3 className="nothing-found__title">No se encontró nada</h3>
      <p className="nothing-found__text">
        Lo sentimos, pero no hay nada que coincida
        <br />
        con tus términos de búsqueda.
      </p>
    </section>
  );
}

export default NothingFound;
