import classes from "./modules/SearchResultCard.module.css";

const SearchResultCard = ({ img, name, description }) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["img-container"]}>
        <img src={img} alt={name} />
      </div>
      <div className={classes["info-container"]}>
        <div className={classes["card-hover-indicator"]}>
          <div className={classes.long}></div>
          <div className={classes.short}></div>
        </div>
        <h5>{name}</h5>
        <p className={classes.description}>{`${description.substr(
          0,
          150
        )} ...`}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
