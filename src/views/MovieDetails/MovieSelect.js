import classes from "./MovieSelect.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieSelect({ films }) {
  const { key } = useParams();

  // set dropdown menu opened or closed by clicking on all movies
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div className={classes["select-container"]} onClick={handleOpen}>
        <h3 className={classes["select-container-title"]}>
          ALL FILMS
          <span
            className={
              isOpened ? classes["arrow-img-rotate"] : classes["arrow-img"]
            }
          >
            <img
              src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Mobile_Arrow_Down_White-248b16ea1997.svg"
              alt="arrow"
            />
          </span>
        </h3>

        <div
          className={
            isOpened
              ? classes["link-list-dropdown"]
              : classes["link-list-dropdown-closed"]
          }
        >
          <ul className={classes["link-list"]}>
            {films.map((film, key) => (
              <li className={classes["link-list-item"]} key={key}>
                <Link
                  to={`/movies/${film.id}`}
                  id={key}
                  key={key}
                  className={classes.link}
                >
                  {film.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieSelect;
