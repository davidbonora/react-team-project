import classes from './DatabankImages.module.css';


function MovieImage(props) {
  return (
    // import images from relatedImages in assets folder
  <div className={classes["image-container"]}>
            <div className={classes["img-wrapper"]}>
              <img src={props.movie.img.path} alt={props.movie.img.text} />

            </div>
          </div>
          );
};



export default MovieImage;