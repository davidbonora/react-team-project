import { useState, useEffect } from "react";
import classes from "../films/FilmsGrid.module.css";

function FilmsCard() {
  const [movies, setMovies] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    setIsPending(true);
    try {
      let response = await fetch(
        "https://films-a2db5-default-rtdb.europe-west1.firebasedatabase.app/films.json"
      );
      if (response.ok) {
        let data = await response.json();
        if (Object.keys(data).length > 0) {
          setMovies(data);
        }
      }
    } catch (error) {
      setError({
        message: error.message || "error loading movies",
      });
    }
    setIsPending(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ul className={classes.filmsGrid}>
      {Object.keys(movies).map((key) => {
        return (
          <li className={classes.filmCard} key={movies[key].id}>
            <img
              src={movies[key].poster}
              alt={movies[key].title}
              className={classes.filmImage}
            />
            <div className={classes.filmsPosterTitle}>{movies[key].title}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default FilmsCard;
