import classes from "./MovieBanner.module.css";
import { useParams } from "react-router-dom";

function MovieBanner({ films }) {
  const { key } = useParams();

  return (
    <>
      <img
        className={classes.imgBanner}
        src={films[key].banner}
        alt={films[key].title}
      />
      <div className={classes.logoContainer}>
        <img
          className={classes.logoTitle}
          src={films[key]["logo-title"]}
          alt={films[key].title}
        />
        <h3 className={classes.textHeader}>
          {films[key]["short-description"]}
        </h3>
        <button className={classes.btn}>
          <a className={classes.aBtn} href="https://codespaceacademy.com/">
            STREAM ON CODE+
          </a>
        </button>
      </div>
    </>
  );
}

export default MovieBanner;
