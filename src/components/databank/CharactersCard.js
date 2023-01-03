import classes from "./modules/CharacterCard.module.css";
import { useNavigate } from "react-router-dom";

const CharactersCard = ({ img, name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes["character-card"]}
      onClick={() => {
        navigate(`/databank/${id}`);
      }}
    >
      <div className={classes["character-img"]}>
        <img src={img} alt='' />
      </div>
      <div className={classes["character-name"]}>
        <div className={classes["card-hover-indicator"]}>
          <div className={classes.long}></div>
          <div className={classes.short}></div>
        </div>

        <h5>{name}</h5>
        <div className={classes.trapezium}></div>
      </div>
    </div>
  );
};

export default CharactersCard;
