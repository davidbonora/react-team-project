import classes from "./CharacterCard.module.css";

const CharactersCard = ({ img, name }) => {
  return (
    <div className={classes["character-card"]}>
      <div className={classes["character-img"]}>
        <img src={img} alt='' />
      </div>
      <div className={classes["character-name"]}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CharactersCard;
