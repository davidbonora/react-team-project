import { Link } from "react-router-dom";
import classes from "./MovieCard.module.css";

function MovieCard({ title, poster, id }) {
  return (
    <li className={classes.movieCard}>
      {/* link que hace que se abra details al clickar */}
      <Link to={"/movies/" + id}>
        <img
          className={classes.imgMovieCard}
          src={poster}
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default MovieCard;
