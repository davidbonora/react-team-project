import classes from "./MovieDescription.module.css";
import { useParams } from "react-router-dom";

function MovieDescription({ films }) {
  const { key } = useParams();
  return (
    <div className={classes.descContainer}>
        <div className={classes.descriptionFlex}>
          <div className={classes.imgPosterContainer}>
            <img
              className={classes.imgPoster}
              src={films[key].poster}
              alt={films[key].title}
            />
          </div>
          <div className={classes.infoContainer}>
            <h1 className={classes.movieTitle}>{films[key].title}</h1>
            <div className={classes.ratingGenre}>
              <p>
                <strong>Rating:</strong> {films[key].rating}
              </p>
              <p>
                <strong>Genre:</strong> {films[key].genre}
              </p>
            </div>
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

export default MovieDescription;
