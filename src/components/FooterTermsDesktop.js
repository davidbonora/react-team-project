import classes from "./FooterTermsDesktop.module.css";
import { useState, useEffect } from "react";

export const FooterTermsDesktop = () => {
  return (
    <div className={classes["footer-terms"]}>
      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Terms of Use</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Additional Content Information</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Privacy Policy</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Children's Online Privicy Policy</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Your California Privacy Policy</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Code Wars at Shop Code</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Interest-Based Ads</a>
      </div>
      <div className={classes["dividing-line"]}></div>

      <div className={classes["list-item"]}>
        {" "}
        <a href="#">Do Not Sell My Personal Information</a>
      </div>
    </div>
  );
};
