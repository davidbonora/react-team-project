import classes from "./IndividualDatabankCard.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderText from "./HeaderText";
import Related from "./Related";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function IndividualDatabankCard({ characters }) {
  const { key } = useParams();
  const navigate = useNavigate();

 

  return (
    <div>
      <HeaderText></HeaderText>
      <SearchBar></SearchBar>
      <div className={classes.card}>
        <div className={classes.character}>
          <img
            className={classes.images}
            src={characters[key].image}
            alt="character"
          />
        </div>
          <div className={classes["written-info"]}>
            <h4>{characters[key].name}</h4>
            <p>{characters[key].description}</p>
          </div>
          <div className={classes.dent}>&#x2B22;</div>
      </div>
      <Related></Related>
    </div>
  );
}

export default IndividualDatabankCard;
