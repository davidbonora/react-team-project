import classes from "./FooterTermsMobile.module.css";
import { useState, useEffect } from "react";

export const FooterTermsMobile = () => {

  return (
    <div className={classes["footer-terms"]}>
      <ul>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Terms of Use</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Additional Content Information</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Privacy Policy</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Children's Online Privicy Policy</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Your California Privacy Policy</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Code Wars at Shop Code</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Interest-Based Ads</a>
        </li>
        <li className={classes["list-item"]}>
          {" "}
          <a href="#">Do Not Sell My Personal Information</a>
        </li>
      </ul>
    </div>
  );
};
