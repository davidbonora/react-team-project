import classes from "./Related.module.css";
import LongDividerLine from "./LongDividerLine";
import RelatedCards from "./RelatedCards";

function IndividualDatabankBase() {
  return (
    <>
      <div></div>
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
