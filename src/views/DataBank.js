import classes from "./DataBank.module.css";
import CharactersCard from "../components/databank/CharactersCard";
import SearchBar from "../components/databank/SearchBar";
import Spinner from "../components/Spinner";
import ShowMoreBtn from "../components/databank/ShowMoreBtn";
import { useState, useEffect } from "react";
const DataBank = ({ characters, pending, fetchError }) => {
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [showFiltred, setShowFiltered] = useState(false);
  console.log(filterCharacters.length);
  return (
    <>
      <SearchBar
        characters={characters}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setFilterCharacters={setFilterCharacters}
        setShowFiltered={setShowFiltered}
      />
      <section className={classes["databank-container"]}>
        <div className={classes["section-heading"]}>
          <h3>Andor</h3>
          <div className={classes["short-line"]}></div>
          <div className={classes["long-line"]}></div>
        </div>
        {pending && <Spinner />}
        {fetchError && (
          <h4 style={{ color: "white" }}>
            Something went wrong please reload the page
          </h4>
        )}
        {!pending &&
          !fetchError &&
          !showMore &&
          !showFiltred &&
          Object.keys(characters)
            .slice(0, 12)
            .map((key) => (
              <CharactersCard
                key={key}
                id={key}
                img={characters[key].thumb}
                name={characters[key].name}
              />
            ))}
        {!pending &&
          !showFiltred &&
          !fetchError &&
          showMore &&
          Object.keys(characters).map((key) => (
            <CharactersCard
              key={key}
              id={key}
              img={characters[key].thumb}
              name={characters[key].name}
            />
          ))}

        {filterCharacters.length &&
          showFiltred &&
          filterCharacters.map((item) => {
            let key = item[0];
            return (
              <CharactersCard
                key={key}
                id={key}
                img={characters[key].thumb}
                name={characters[key].name}
              />
            );
          })}
        {!filterCharacters.length && showFiltred && (
          <p style={{ color: "white" }}>
            There is no such character in our Databank. Please try again
          </p>
        )}
      </section>
      {!showFiltred && <ShowMoreBtn setShowMore={setShowMore} />}
    </>
  );
};

export default DataBank;
