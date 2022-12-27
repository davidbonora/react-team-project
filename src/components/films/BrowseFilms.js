import classes from "./BrowseFilms.module.css";

function BrowseFilms() {
  return (
    <>
      <div className={classes.browse__container}>
        <div className={classes.browse__title}>
          <span className={classes.browse__text}>Browse Films</span>
        </div>
        <div>
          <hr className={classes.browse__line} />
        </div>
      </div>
    </>
  );
}

export default BrowseFilms;
