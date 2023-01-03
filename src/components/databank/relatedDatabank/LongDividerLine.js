import classes from  "./LongDividerLine.module.css";
// This is the long line that is used in the related section.
function CommonDividerLine() {
  return (
    <div>
      <div className={classes["sw-divider"]}>
        <div className={classes["dividing-line-short"]}></div>
        <div className={classes["dividing-line-long"]}></div>
      </div>
    </div>
  );
}

export default CommonDividerLine;
