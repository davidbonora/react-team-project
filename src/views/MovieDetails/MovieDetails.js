import classes from "./MovieDetails.module.css";
// import films from "../mockedDB/films.json";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieSelect from "./MovieSelect";
import MovieBanner from "./MovieBanner";
import MovieStream from "./MovieStream";
import MovieDescription from "./MovieDescription";

function MovieDetails({ films }) {
  const [selected, setSelected] = useState(false);

  const { key } = useParams();
  console.log(key);

  const navigate = useNavigate();

  return (
    <div className={classes.detailsContainer}>
      <MovieStream />
      <MovieSelect films={films} />
      <MovieBanner films={films} />
      <MovieDescription films={films} />
    </div>
  );
}

export default MovieDetails;
