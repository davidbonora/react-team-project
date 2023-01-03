import classes from "./RelatedCharImage.module.css";

import { useState, useEffect } from "react";

// This is the image that is used in the related section.

function RelatedCharImage(props) {
  const [width, setWindowWidth] = useState(0);
  const [glowLine, setGlowLine] = useState("");
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    const glowingLine =
      width < 700 ? null : ".dividing-line-short" && ".dividing-line-long";
    setGlowLine(glowingLine);
    setWindowWidth(width);
  };

  return (
    <div className={classes["img-container"]}>
      <div className={classes["img-wrapper"]}>
        <div>
          <img src={props.related.image.path} alt={props.related.name} />
        </div>
        <div className={classes.luminous}>
          <div className={classes["sw-divider"]}>
            <div
              className={width < 700 ? null : classes["dividing-line-long"]}
            ></div>
            <div
              className={width < 700 ? null : classes["dividing-line-short"]}
            ></div>
          </div>
        </div>
        <h3>{props.related.name}</h3>
      </div>
    </div>
  );
}

export default RelatedCharImage;
