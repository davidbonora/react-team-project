import classes from "./App.module.css";
import MoviesGrid from "./components/MoviesGrid";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import logo from "./utils/logo.png";
import { useEffect, useState } from "react";


function App() {
  const [films, setFilms] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const API_MOVIES =
    "https://starwars-films-default-rtdb.europe-west1.firebasedatabase.app/movies.json";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_MOVIES);
        if (!response.ok) throw new Error("Did not receive expected data");
        const listMovies = await response.json();
        console.log(listMovies);
        setFilms(listMovies);
        setError(null);
      } catch (error) {
        setError(error.message);
        // console.log(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => fetchMovies())();
  }, []);
console.log(films);
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <div className={classes.logo}>
            <img className={classes.codeLogo} src={logo} alt="logo" />
          </div>
        </Link>
        <Link to="/movies">
          <h1 className={classes.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element="Home" />
          <Route path="/movies" element={<MoviesGrid films ={films} />} />
          <Route path="/movies/:key" element={<MovieDetails films={films}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
