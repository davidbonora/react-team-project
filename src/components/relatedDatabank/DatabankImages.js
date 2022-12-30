import classes from './DatabankImages.module.css';


function MovieImage(props) {
  return (
  <div className={classes["image-container"]}>
            <div className={classes["img-wrapper"]}>
              <img src={props.movie.img.path} alt={props.movie.img.text} />

            </div>
          </div>
          );
};



export default MovieImage;