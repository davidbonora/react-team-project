// import './MovieImg.css';


function MovieImage(props) {
  return (
  <div className="img-container">
            <div className="img-wrapper">
              <img src={props.movie.img.path} alt={props.movie.img.text} />

            </div>
          </div>
          );
};



export default MovieImage;