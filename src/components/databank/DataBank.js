import classes from "./DataBank.module.css";

import {  Outlet } from "react-router-dom";
import CharactersCard from "./CharactersCard";
import SearchBar from "./SearchBar";




const DataBank = ({characters}) => {
  

  return (
    <>
      <section className={classes["databank-container"]}>
        <SearchBar
        // characters ={characters} setCharacters={setCharacters} content ={content} setContent={setContent}
        />
        <div className={classes["section-heading"]}>
          <h3>Andor</h3>
          <div className={classes["short-line"]}></div>
          <div className={classes["long-line"]}></div>
        </div>
       
        {Object.keys(characters).map((key) => (
          <CharactersCard
            key={key}
            id={key}
            img={characters[key].thumb}
            name={characters[key].name}
          />
        ))}
         
      </section>
    </>
  );
};

export default DataBank;
