import authorImage from "../../images/author.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img
        src={authorImage}
        alt="Pablo - Desarrollador Web Full Stack"
        className="about__image"
      />

      <div className="about__text-content">
        <h2 className="about__title">Acerca del autor</h2>
        <p className="about__paragraph">
          ¡Qué tal! Soy <strong>Pablo</strong>, un{" "}
          <strong>Desarrollador Web Full Stack</strong> que no se conforma con
          lo básico. Me apasiona construir aplicaciones completas: desde los
          cimientos y la lógica en el backend, hasta interfaces visualmente
          brutales e intuitivas en el frontend.
        </p>
        <p className="about__paragraph">
          A través del bootcamp de <strong>TripleTen</strong>, dominé todo el
          ecosistema web. En el frontend construyo magia con{" "}
          <strong>HTML5, CSS3, JavaScript y React</strong>; y en el backend, le
          doy vida a los datos con{" "}
          <strong>Node.js, Express y bases de datos</strong>.
        </p>
        <p className="about__paragraph">
          Proyectos como este demuestran mi capacidad para tomar una idea
          compleja y volverla realidad: integrando APIs, manejando estados
          globales, controlando la seguridad del usuario y asegurando un diseño
          impecable. No solo escribo código; construyo soluciones que marcan la
          diferencia. ¡Hagamos que las cosas sucedan! 🚀🔥
        </p>
      </div>
    </section>
  );
}

export default About;
