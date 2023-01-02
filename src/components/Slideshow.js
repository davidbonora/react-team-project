import classes from "./Slideshow.module.css";
// Imagenes
import Slide1 from "../assets/img/slideshow/sld-1.webp";
import Slide2 from "../assets/img/slideshow/sld-2.jpeg";
import Slide3 from "../assets/img/slideshow/sld-3.jpeg";
import Slide4 from "../assets/img/slideshow/sld-4.webp";
// Iconos
import { ReactComponent as LeftArrow } from "../assets/img/slideshow/chevron-left-solid.svg";
import { ReactComponent as RightArrow } from "../assets/img/slideshow/chevron-right-solid.svg";

// import styled from "styled-components";

import { useRef, useEffect, useState } from "react";

function Slideshow() {
  const slideshow = useRef(null);

  const intervalRef = useRef();

  const nextSlide = () => {
    // Comprueba que el slideshow tiene elementos
    if (slideshow.current.children.length > 0) {
      // Obtiene el primer elemento del slideshow
      const firstElement = slideshow.current.children[0];

      // Extablece la transición para el slideshow
      slideshow.current.style.transition = `250ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      // Mueve el slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        // Reinicia la posición del slideshow
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        //Envía el primer elemento al final

        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener(`transitionend`, transition);
      };

      // EventListener para cuando acaba la animación
      slideshow.current.addEventListener(`transitionend`, transition);
    }
  };

  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = `none`;

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `2000ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 300);
    }
  };

  // Para el autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Elimina el intervalo
    // Guarda la referencia del intervalo
    intervalRef.current = interval;

    // Devuelve la función que elimina el intervalo
    return () => clearInterval(intervalRef.current);
  }, []);

  // Función para detener el intervalo al hacer click
  const handleStopInterval = () => {
    clearInterval(intervalRef.current);
  };

  // Agrupación de funciones para poder pasarlas al onClick porque react solo admite pasarle una función
  const handleClickNext = () => {
    nextSlide();
    handleStopInterval();
  };
  const handleClickPrev = () => {
    prevSlide();
    handleStopInterval();
  };

  // Indicador 

  const indicators = [0, 1, 2, 3];
  
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del slide actual

  // Función para cambiar el índice del slide actual al hacer click en un botón indicador
  const handleClickIndicator = index => {
    
    setCurrentIndex(index);
    console.log(currentIndex);
    console.log(slideshow);
    handleStopInterval(); // Detiene el intervalo de autoplay
  };

  // Crea un botón indicador por cada elemento en el array "indicators"
  const buttons = indicators.map((_, index) => (
    <button
      key={index}
      className={index === currentIndex ? classes.active : ""} // Añade una clase "active" al botón del slide actual
      onClick={() => handleClickIndicator(index)} // Llama a la función "handleClickIndicator" al hacer click en el botón
    >
      {index + 1}
    </button>
  ));


  return (


    <div className={classes["main-container"]}>
      <h5>ALL YOUR CODE WARS FAVOURITES NOW STREAMING ON CODE+</h5>
      {/* Slideshow */}
      <div ref={slideshow} className={classes["slide-container"]}>
        <div className={classes.slide}>
            <img src={Slide1} alt="Slide 1" />
          <div className={classes["slide-info"]}>
            <h2>
              <span>CODE WARS</span>: BEST OF 2022
            </h2>
            <h4>
              CodeWars.com's writers dive into the year's biggest
              announcements,releases, and fan-favorite moments.
            </h4>
            <button>READ MORE</button>
          </div>
        </div>
        <div className={classes.slide}>
            <img src={Slide2} alt="Slide 2" />
          <div className={classes["slide-info"]}>
            <h2>FROM SANTA YODA TO ROCKET SLEDS</h2>
            <h4>
              A look back at Lucasfilm's <span>Code Wars</span> holiday cards
              through the years.
            </h4>
            <button>READ MORE</button>
          </div>
        </div>
        <div className={classes.slide}>
            <img src={Slide3} alt="Slide 3" />
          <div className={classes["slide-info"]}>
            <h2>
              <span>THE HIGH REPUBLIC SHOW</span>
            </h2>
            <h4>
              Phase II exclusive reveals, a visit to Dark Horse comics, and
              more!
            </h4>
            <button>WATCH NOW</button>
          </div>
        </div>
        <div className={classes.slide}>
            <img src={Slide4} alt="Slide 4" />
          <div className={classes["slide-info"]}>
            <h2>FROM A CERTAIN POINT OF VIEW</h2>
            <h4>
              What's your favorite episode of <span>Andor</span> (so far)?
            </h4>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      {/* Botones Slideshow */}
      <div className={classes["slide-buttons"]}>
        <button onClick={handleClickPrev}>
          <LeftArrow />
        </button>
        <button onClick={handleClickNext} className={classes["button-r"]}>
          <RightArrow />
        </button>
      </div>
      <div className={classes["img-buttons"]}>
         {/* <button  className={classes["img-btn-1"]}></button>
        <button  className={classes["img-btn-2"]}></button>
        <button  className={classes["img-btn-3"]}></button>
        <button  className={classes["img-btn-4"]}></button>  */}
        {buttons}
      </div>

    </div>
  );
}

export default Slideshow;
