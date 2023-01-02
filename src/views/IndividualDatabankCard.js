import classes from "./IndividualDatabankCard.module.css";
// import { useEffect, useState } from "react";
import HeaderText from "../components/relatedDatabank/HeaderText";
import Related from "../components/relatedDatabank/Related";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/relatedDatabank/SearchBar";
import CharacterCard from "../components/relatedDatabank/CharacterCard";

function IndividualDatabankCard({ characters }) {
  console.log(characters);

  // const navigate = useNavigate();

  return (
    <div>
        <div className={classes.dent}></div>
      <HeaderText></HeaderText>
      <SearchBar characters={characters}></SearchBar>
      
      <CharacterCard characters={characters} >
      </CharacterCard>

      <Related></Related>
    </div>
  );
}

export default IndividualDatabankCard;
