import classes from "./MovieDescription.module.css";
import { useParams } from "react-router-dom";

function MovieDescription({ films }) {
  const { key } = useParams();
  return (
    <div className={classes.descriptionContainer}>
      <div className={classes.posterContainer}>
        <img
          src={films[key].poster}
          alt={films[key].title}
        />
      </div>
      <div className={classes.movieInfo}>
        <h1 className={classes.movieTitle}>{films[key].title}</h1>
        {/* <div className={classes.ratingGenre}> */}
        <p>
          <strong>Rating:</strong> {films[key].rating}
        </p>
        <p>
          <strong>Genre:</strong> {films[key].genre}
        </p>
      </div>
      <div className={classes.synopsis}>
        <p className={classes.textContainer}>{films[key].description}</p>
      </div>
      <div className={classes.lineContainer}>
        <div className={classes.line}> </div>
      </div>
      <div className={classes.ratingContainer}>
        <div className={classes.ratingShort}>
          <p className={classes.rating}>{films[key].rating}</p>
        </div>
        <div className={classes.linkContainer}>
          <a href="https://www.motionpictures.org/">motionpictures.org</a>
          <a href="https://www.filmratings.com/">filmratings.com</a>
        </div>
      </div>
    </div>
  );
}

export default MovieDescription;
