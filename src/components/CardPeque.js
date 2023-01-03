import classes from "./CardPeque.module.css";

function CardPeque(props) {
  return (
    <div id={classes["contenedor-card-pequeña"]}>
      <div className={classes["imagen-contenedor-pequeño"]}>
        <img
          className={classes["imagen-peque"]}
          src={require(`../assets/img/starWars-${props.imagen}.jpg`)}
        />
      </div>
      <div className={classes["contenedor-subtitulo-card-pequeña"]}>
        <div className={classes["contenedor-logo"]}>
          <div className={classes["logo-linea"]}></div>
          <div className={classes["logo-circulo"]}></div>
        </div>
        <span className={classes["titulo-card-pequeña"]}>{props.texto}</span>
        <div className={classes["muesca-pequeña"]}></div>
      </div>
    </div>
  );
}

export default CardPeque;
