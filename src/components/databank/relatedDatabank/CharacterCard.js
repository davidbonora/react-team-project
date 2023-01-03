import classes from "./CharacterCard.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Main character card from databank
function CharacterCard({ characters }) {
  const { key } = useParams();

  //  Showing or not showing the luminous line, depending on the width of the window.
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
      width < 1000 ? null : ".dividing-line-short" && ".dividing-line-long";
    setGlowLine(glowingLine);
    setWindowWidth(width);
  };

  return (
    <div className={classes.card}>
      <div className={classes.character}>
        <img
          className={classes.images}
          src={characters[key].image}
          alt="character"
        />
      </div>

      <div className={classes["written-info"]}>
        <div className={classes.luminous}>
          <div className={classes["sw-divider"]}>
            <div
              className={width < 1000 ? null : classes["dividing-line-long"]}
            ></div>
            <div
              className={width < 1000 ? null : classes["dividing-line-short"]}
            ></div>
          </div>
        </div>
        <h3>{characters[key].name}</h3>
        <p>{characters[key].description}</p>
      </div>
      {/* <div className={classes["card-dent"]}>
        <div className={classes.dent}></div>
      </div> */}
    </div>
  );
}

export default CharacterCard;
