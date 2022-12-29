import classes from "./ShortLuminousLine.module.css";
import { useState, useEffect } from "react";
function ShortLuminousLine() {
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
    <div>
      <div className={classes["sw-divider"]}>
        <div
          className={width < 700 ? null : classes["dividing-line-short"]}
        ></div>

        <div className={width < 700 ? null : classes["dividing-line-long"]}>
          <div className={classes.space}></div>
        </div>
      </div>
    </div>
  );
}

export default ShortLuminousLine;
