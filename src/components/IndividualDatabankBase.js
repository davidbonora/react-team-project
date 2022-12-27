import classes from "./IndividualDatabankBase.module.css";
import IndividualDatabankCard from "./IndividualDatabankCard";
import LongDividerLine from "./LongDividerLine";
import RelatedCards from "./RelatedCards";

function IndividualDatabankBase() {
  return (
    <>
      <div>
        <div className={classes.head}>
          <p>STREAM CODE WARS ON CODE+</p>
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
        <RelatedCards></RelatedCards>
      </div>
    </>
  );
}

export default IndividualDatabankBase;
