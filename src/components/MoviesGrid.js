import classes from "./MoviesGrid.module.css";
// import movies from "../mockedDB/movies.json";
import MovieCard from "./MovieCard";

function MoviesGrid({ films }) {
  return (
    <ul className={classes.moviesGrid}>
      {Object.keys(films).map((key) => (
        <MovieCard
          key={key}
          id={key}
          title={films[key].title}
          poster={films[key].poster}
          
        />
      ))}
    </ul>
  );
}

export default MoviesGrid;
