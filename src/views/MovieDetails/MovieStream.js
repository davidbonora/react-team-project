import classes from "./MovieStream.module.css";

function MovieStream() {
  return (
    <>
      <div className={classes.streamLong}>
        <a href="https://codespaceacademy.com/">
          ALL OF YOUR STAR WARS FAVORITES NOW STREAM ON CODE+
        </a>
      </div>
      <div className={classes.streamShort}>
        <a href="https://codespaceacademy.com/"> STREAM STAR WARS ON CODE+</a>
      </div>
    </>
  );
}

export default MovieStream;
