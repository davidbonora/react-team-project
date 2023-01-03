import classes from "./CharacterCard.module.css";
import ShortLuminousLine from "./ShortLuminousLine";
import { useParams } from "react-router-dom";

function CharacterCard({ characters }) {
  const { key } = useParams();

  return (
    <div className={classes.card}>
      <div className={classes.character}>
        <img
          className={classes.images}
          src={characters[key].image}
          alt="character"
        />
      </div>

      <div className={classes["written-info"]}>
        <div className={classes.luminous}>
          <ShortLuminousLine></ShortLuminousLine>
        </div>
        <h4>{characters[key].name}</h4>
        <p>{characters[key].description}</p>
      </div>
      {/* <div className={classes["card-dent"]}>
        <div className={classes.dent}></div>
      </div> */}
    </div>
  );
}

export default CharacterCard;
