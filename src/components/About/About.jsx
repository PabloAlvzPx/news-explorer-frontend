import authorImage from "../../images/author.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img
        src={authorImage}
        alt="Autor del proyecto"
        className="about__image"
      />

      <div className="about__text-content">
        <h2 className="about__title">Acerca del autor</h2>
        <p className="about__paragraph">
          Este bloque describe al autor del proyecto. Aquí debe indicar tu
          nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
        </p>
        <p className="about__paragraph">
          También puedes hablar de tu experiencia con Practicum, de lo que
          aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
        </p>
      </div>
    </section>
  );
}

export default About;
