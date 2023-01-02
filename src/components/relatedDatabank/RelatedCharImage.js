import classes from './RelatedCharImage.module.css';
import ShortLuminousLine from './ShortLuminousLine';


function RelatedCharImage(props) {
  
  return (
  <div className={classes["img-container"]}>
            <div className={classes["img-wrapper"]}>
              <div><img src={props.related.image.path} alt={props.related.name} /></div>
              <div className={classes.luminous}>
            <ShortLuminousLine></ShortLuminousLine>
          </div>
              <h3>{props.related.name}</h3>

            </div>
          </div>
          );
};



export default RelatedCharImage;