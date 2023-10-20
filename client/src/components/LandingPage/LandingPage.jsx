import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel.jsx";
import style from "./landing.module.css";

import borderCollie from "../../assets/landingDogs/borderCollie.jpg";
import perroEnBosque from "../../assets/landingDogs/perroEnBosque.jpg";
import perroEnNaturaleza from "../../assets/landingDogs/perroEnNaturaleza.jpg";
import perros from "../../assets/landingDogs/perros.jpg";
import perrosAmigos from "../../assets/landingDogs/perrosAmigos.jpg";
import perrosDesierto from "../../assets/landingDogs/perrosDesierto.jpg";
import tresPerrosLago from "../../assets/landingDogs/tresPerrosLago.jpg";

const LandingPage = () => {
  const images = [
    borderCollie,
    perroEnBosque,
    perroEnNaturaleza,
    perros,
    perrosAmigos,
    perrosDesierto,
    tresPerrosLago,
  ];

  return (
    <div className={style.mainCntnr}>
      <h1 className={style.titulo}>
        ¡Hola! Te damos la bienvenida a la página de perros
      </h1>

      <div className={style.subContainer}>
        <div className={style.carouselContainer}>
          <Carousel images={images} autoplay={false} showButtons={false} />
        </div>

        <div className={style.minorContainer}>
          <div className={style.txtContainer}>
            <p className={style.txt}>
              En esta pagina puedes explorar una amplia variedad de razas de
              perros y aprender datos interesantes sobre cada una de ellas.
            </p>
          </div>
          <Link to="/home">
            <button className={style.btn}>Ir a la pagina principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
