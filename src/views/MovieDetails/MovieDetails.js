import classes from "./MovieDetails.module.css";
// import films from "../mockedDB/films.json";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieSelect from "./MovieSelect";

function MovieDetails({ films }) {
  const [selected, setSelected] = useState(false);

  const { key } = useParams();
  console.log(key);

  const navigate = useNavigate();

  return (
    <div className={classes.detailsContainer}>
      <div className={classes.header}>
        <div className={classes.streamLong}>
          <a href="https://codespaceacademy.com/">
            ALL OF YOUR STAR WARS FAVORITES NOW STREAM ON CODE+
          </a>
        </div>
        <div className={classes.streamShort}>
          <a href="https://codespaceacademy.com/"> STREAM STAR WARS ON CODE+</a>
        </div>
        <div className={classes.filmsSelectorContainer}>
          <MovieSelect films={films} />
        </div>
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
      </div>
      <div className={classes.main}>
        <div className={classes.imgPosterContainer}>
          <img
            className={classes.imgPoster}
            src={films[key].poster}
            alt={films[key].title}
          />
        </div>
        <div className={classes.infoContainer}>
          <h1 className={classes.movieTitle}>{films[key].title}</h1>
          <p>
            <strong>Rating:</strong> {films[key].rating}
          </p>
          <p>
            <strong>Genre:</strong> {films[key].genre}
          </p>
          <div className={classes.descriptionContainer}>
            <p>{films[key].description}</p>
            <p className={classes.rating}>{films[key].rating}</p>
          </div>
        </div>
        <div className={classes.anchorContainer}>
          <a href="https://www.motionpictures.org/">motionpictures.org</a>
          <a href="https://www.filmratings.com/">filmratings.com</a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
