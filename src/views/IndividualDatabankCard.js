import classes from "./IndividualDatabankCard.module.css";
import Related from "../components/databank/relatedDatabank/Related";
import SearchBar from "../components/databank/relatedDatabank/SearchBar";
import CharacterCard from "../components/databank/relatedDatabank/CharacterCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataBankContext } from "../providers/DataBankProvider";

function IndividualDatabankCard() {
  const { characters } = useContext(DataBankContext);
  const { key } = useParams();
  return (
    <div>
      <div className={classes.dent}></div>

      <SearchBar characters={characters}></SearchBar>

      <CharacterCard characters={characters}></CharacterCard>

      <Related></Related>
    </div>
  );
}

export default IndividualDatabankCard;
