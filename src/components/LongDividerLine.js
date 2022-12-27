import classes from  "./LongDividerLine.module.css";
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
