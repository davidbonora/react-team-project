import classes from "./FilmsTitleContainer.module.css";

function FilmsTitleContainer() {
  return (
    <>
      <div className={classes.title__container}>
        <h3 className={classes.title__container__text}>
          STREAM STAR WARS ON CODE+
        </h3>
      </div>
    </>
  );
}

export default FilmsTitleContainer;
