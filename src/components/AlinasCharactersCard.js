

import classes from "./AlinasCharactersCard.module.css";
import { useNavigate } from "react-router-dom";
const CharactersCard = ({ img, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes["character-card"]}
      onClick={() => {
        navigate(`/${id}`);
        console.log("redirecting");
      }}
    >
      <div className={classes["character-img"]}>
        <img src={img} alt='' />
      </div>
      <div className={classes["character-name"]}>
        <h5>{name}</h5>
        <div className={classes.trapezium}></div>
      </div>
    </div>
  );
};

export default CharactersCard;