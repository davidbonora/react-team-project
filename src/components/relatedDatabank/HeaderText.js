import classes from "./HeaderText.module.css";
import { useState, useEffect } from "react";


function HeaderText() {
  const [width, setWindowWidth] = useState(0);
  const [headerText, setHeaderText] = useState("");
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    const headText =
      width < 700
        ? "STREAM CODE WARS ON CODE+"
        : "ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODE+";
    setHeaderText(headText);
    setWindowWidth(width);
  };
  console.log("width: ", width);
  console.log("headerText: ", headerText);

  return (
    <div>
      <div className={classes.head}>
        <p onChange={updateDimensions}>{headerText}</p>
      </div>
    </div>
  );
}

export default HeaderText;
