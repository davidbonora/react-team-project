// import './RelatedCharImage.css';


function RelatedCharImage(props) {
  return (
  <div className="img-container">
            <div className="img-wrapper">
              <img src={props.related.image.path} />

            </div>
          </div>
          );
};



export default RelatedCharImage;