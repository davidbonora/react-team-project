import classes from "./MovieBanner.module.css";
import { useParams } from "react-router-dom";

function MovieBanner({ films }) {
  const { key } = useParams();

  return (
    <div className={classes.bannerContainer}>
      <div>
        <div className={classes.imgBannerContainer}>
          <img
            className={classes.imgBanner}
            src={films[key].banner}
            alt={films[key].title}
          />
        </div>
        <span className={classes.gradientBg}></span>
        <span className={classes.bannerTitle}>
          <div className={classes.logoContainer}>
            <img
              className={classes.logoTitle}
              src={films[key]["logo-title"]}
              alt={films[key].title}
            />
          </div>
          <h2>{films[key]["short-description"]}</h2>
        </span>
        <div className={classes.btnContainer}>
          <button className={classes.btn}>STREAM ON CODE+</button>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
