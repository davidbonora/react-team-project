import classes from "./IndividualDatabankBase.module.css";
import IndividualDatabankCard from "./IndividualDatabankCard";
import LongDividerLine from "./LongDividerLine";
import RelatedCards from "./RelatedCards";
import { useState, useEffect } from "react";
// import { PixelRatio, Dimensions} from 'react';
// const deviceHeight = Dimensions.get("window").height;

function IndividualDatabankBase() {
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
    <>
      <div>
        <div className={classes.head}>
          <p onChange={updateDimensions}>{headerText}</p>
        </div>
        <IndividualDatabankCard></IndividualDatabankCard>
      </div>
      <div className={classes.appearances}>
        <h4 className={classes.title}>Appearances</h4>
        <h4 className={classes.link}>
          {" "}
          <a href="#">Andor</a>{" "}
        </h4>
      </div>
      <div className={classes["dividing-line"]}></div>
      <div className={classes.related}>
        <h3>Related</h3>
        <LongDividerLine></LongDividerLine>
        <div className={classes.cards}>
          {" "}
          <RelatedCards className={classes["related-cards"]}></RelatedCards>
        </div>
      </div>
    </>
  );
}

export default IndividualDatabankBase;
