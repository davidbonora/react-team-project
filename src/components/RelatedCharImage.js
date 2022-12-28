import classes from './RelatedCharImage.module.css';


function RelatedCharImage(props) {
  return (
  <div className={classes["img-container"]}>
            <div className={classes["img-wrapper"]}>
              <img src={props.related.image.path} alt={props.related.name} />
              <h3>{props.related.name}</h3>

            </div>
          </div>
          );
};



export default RelatedCharImage;