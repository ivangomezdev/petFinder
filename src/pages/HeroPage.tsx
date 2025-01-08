
import "./heroPage.css";
import huellas from "../assets/huellas.png";
import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import other from "../assets/other.png";
import petsAnimated from "../assets/footerPets.png";
import carnet from "../assets/carnet.png";
import { Link } from "react-router-dom";
import UseLocation from "../hooks/UseLocation";

const HeroPage = () => {
  const location = UseLocation()
  const heroData = [
    { title: "Perros", btnText: "Ver más", img: dog, link: "/pets" },
    { title: "Gatos", btnText: "Ver más", img: cat, link: "/pets" },
    { title: "Aves", btnText: "Ver más", img: other, link: "/pets" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <img className={"heroPage__imageAnimated"} src={petsAnimated} alt="" />
        <img className={"heroPage__image"} src={huellas} />
        <h1 className={"heroPage__text"}>Encontrá a tu mascota</h1>
        <p className={"heroPage__text"}>Descubrí la conexión especial que te espera</p>
        <Link to={"/pets"}>
        <button className="cta-button">Explorar mascotas</button>
        </Link>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explorá por categoría</h2>
        <div className="heroPage__cards-container">
          {heroData.map((i) => {
            return (
              <div className="heroPage__card">
                <img src={i.img} />
                <h3>{i.title}</h3>
                <Link to={i.link}>
                <button>{i.btnText}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="heroPage__testimonials">
        <h2>Testimonios de éxito</h2>
        <div className="testimonial">
          <img src={carnet} alt="Adoptante feliz" />
          <blockquote>
            "Adoptar a Max fue la mejor decisión de mi vida. ¡Gracias por
            hacerlo posible!"
          </blockquote>
          <p>- María Gómez</p>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
