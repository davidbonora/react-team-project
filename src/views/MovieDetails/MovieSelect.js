import classes from "./MovieSelect.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieSelect({ films }) {
  const { key } = useParams();

  // abrir y cerrar el menú
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div className={classes.selectContainer} onClick={handleOpen}>
        <h3 className={classes.selectTitle}>
          ALL FILMS
          <span
            className={
              isOpened ? classes.arrowImgRotate : classes.arrowImg
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
              ? classes.listOpen
              : classes.listClose
          }
        >
          <ul className={classes.list}>
            {films.map((film, key) => (
              <li className={classes.listItem} key={key}>
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
