import CardPeque from "./CardPeque";
import classes from "./Interactive.module.css";
import { useState } from "react";

function Interactive() {
  //   const [active, setActive] = useState(false);

  //   const focusHandle = (e) => {
  //     // console.log(e.target);
  //     setActive(true);
  //     console.log(active);
  //   };
  return (
    <>
      <h3 className={classes["titulo-principal"]}>
        ALL OF YOUR STAR WARS FAVORITES NOW STREMING ON DISNEY+
      </h3>
      <h3 className={classes["titulo-principal-mobile"]}>
        STREAM STAR WARS ON DISNEY+
      </h3>
      <div className={classes["franja"]}>
        <h2 className={classes["titulo-imagen-uno"]}>
          The Latest | Star Wars Virtual Reality
        </h2>
        <div className={classes["linea"]}></div>
        <div className={classes["contenedor-principal"]}>
          <div id={classes["contenedor-card-grande"]}>
            <div className={classes["imagen-contenedor-grande"]}>
              <img
                className={classes["imagen-grande"]}
                src={require("../assets/img/starWars-uno.jpg")}
              />
            </div>
            <div className={classes["contenedor-subtitulo-card"]}>
              <div className={classes["contenedor-logo"]}>
                <div
                  className={classes["logo-linea"]}
                ></div>
                <div className={`${classes["logo-circulo"]}`}></div>
              </div>
              <span>
                Star Wars:Tales from the Galaxy's Edge-Enhanced Edition
                Available to Pre-Order Now
              </span>
              <div className={classes["muesca"]}></div>
            </div>
          </div>

          <div className={classes["contenedor-todasCardsPeques"]}>
            <CardPeque
              imagen="dos"
              texto="Return to Batuu with Star Wars: Tales from the Galaxy's Edge-Enhanced Edition"
            />
            <CardPeque
              imagen="tres"
              texto="SWCA 2022: The  Women of ILMxLAB Discuss Their Career Journeys"
            />
            <CardPeque
              imagen="cuatro"
              texto="SWCA 2022: 5 Highlights from ILMxLAB Making of Tales from the Galaxy'sEdge Panel"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Interactive;
