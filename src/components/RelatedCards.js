import classes from "./RelatedCards.module.css";
import { relatedCharactersImg } from "../utils/RelatedImages";
import { useState } from "react";
import RelatedCharImage from "./RelatedCharImage";

function RelatedCards() {
  const [relatedChar, setRelatedChar] = useState(relatedCharactersImg);

  return (
    <div className={classes.card}>
      <div className={classes.character}>
        {relatedChar.map((related) => {
          return (
            <div key={related.id} className={classes.card}>
              <div className={classes["image-card"]}>
                <RelatedCharImage related={related}></RelatedCharImage>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedCards;
