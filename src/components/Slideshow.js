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
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del slide actual
  const [moveAuto, setMoveAuto] = useState(true);
  const slideshow = useRef(null);
  const firstRender = useRef(true);

  const nextSlide = () => {
    // Comprueba que el slideshow tiene elementos
    if (slideshow.current.children.length > 0) {
      // Obtiene el primer elemento del slideshow

      // Establece la transición para el slideshow

      //Envía el primer elemento al final

      setTimeout(() => {
        slideshow.current.style.transition = `1s ease-out all`;
        const slideSize = slideshow.current.children[0].offsetWidth;
        // Mueve el slideshow
        slideshow.current.style.transform = `translateX(-${slideSize}px)`;

        setTimeout(() => {
          const firstElement = slideshow.current.children[0];
          slideshow.current.appendChild(firstElement);
          slideshow.current.style.transition = `none`;
          slideshow.current.style.transform = `translateX(0)`;
        }, 1000);
        if (currentIndex < 3) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }, 2000);
      // const transition = () => {
      //   // Reinicia la posición del slideshow

      //   slideshow.current.removeEventListener(`transitionend`, transition);
      //   // console.log('running!');
      //   // setCurrentSlide(currentSlide + 1)
      //   // console.log("current index", currentIndex);
      //   // console.log("current slide", currentSlide);
      // };

      // // EventListener para cuando acaba la animación
      // slideshow.current.addEventListener(`transitionend`, transition);
    }
  };

  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      slideshow.current.style.transition = `300ms ease-out all`;
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(${slideSize}px)`;
      
      setTimeout(() => {
        const index = slideshow.current.children.length - 1;
        const lastElement = slideshow.current.children[index];
        slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);      
        slideshow.current.style.transition = `none`;
          slideshow.current.style.transform = `translateX(0)`;
        }, 300);
    }
  };

  const selectedSlide = (numSlide) => {
    if (slideshow.current.children.length > 0) {
      setMoveAuto(false);
      handleStopInterval();
      slideshow.current.style.transition = `none`;
      const slideSize = slideshow.current.children[0].offsetWidth;
      let positions = [];
      Array.from(slideshow.current.children).forEach((element, index) => {
        positions[index] = {
          elementId: parseInt(element.id),
          currentPosition: index,
        };
      });
      console.log(positions);

      let current = parseInt(slideshow.current.children[0].id);
      let newPosition = 0;
      if (current !== numSlide) {
        positions.forEach((element) => {
          if (element.elementId === numSlide) {
            newPosition = element.currentPosition;
          }
        });
        newPosition = -newPosition;
      }
      slideshow.current.style.transition = `150ms ease-out all`;
      slideshow.current.style.transform = `translateX(${
        slideSize * newPosition
      }px)`;
      setCurrentIndex(numSlide);
    }
  };

  // Función para detener el intervalo al hacer click
  const handleStopInterval = () => {
    // clearInterval(intervalRef.current);
  };

  // Agrupación de funciones para poder pasarlas al onClick porque react solo admite pasarle una función
  const handleClickNext = () => {
    setMoveAuto(false)
    nextSlide();
    // handleStopInterval();
  };
  const handleClickPrev = () => {
    setMoveAuto(false)
    prevSlide();
    // handleStopInterval();
  };

  // Array para generar los botones inferiores del slide
  const indicators = [0, 1, 2, 3];

  // Crea un botón indicador por cada elemento en el array "indicators"
  const buttons = indicators.map((_, index) => (
    <button
      key={index}
      className={index === currentIndex ? classes.active : ""} // Añade una clase "active" al botón del slide actual
      onClick={() => selectedSlide(index)} // Llama a la función "handleClickIndicator" al hacer click en el botón
    ></button>
  ));

  // Para el autoplay
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (moveAuto) {
        nextSlide();
      }
    }
    // const interval = setInterval(() => {
    // }, 5000);

    // // Elimina el intervalo
    // // Guarda la referencia del intervalo
    // intervalRef.current = interval;

    // // Devuelve la función que elimina el intervalo
    // return () => clearInterval(intervalRef.current);
  });

  return (
    <div className={classes["main-container"]}>
      <h5>ALL YOUR CODE WARS FAVOURITES NOW STREAMING ON CODE+</h5>
      {/* Slideshow */}
      <div ref={slideshow} className={classes["slide-container"]}>
        <div className={classes.slide} id="0">
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
        <div className={classes.slide} id="1">
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
        <div className={classes.slide} id="2">
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
        <div className={classes.slide} id="3">
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
      <div className={classes["img-buttons"]}>{buttons}</div>
    </div>
  );
}

export default Slideshow;
