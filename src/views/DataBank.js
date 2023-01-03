import classes from "./DataBank.module.css";
import CharactersCard from "../components/databank/CharactersCard";
import SearchBar from "../components/databank/SearchBar";
import Spinner from "../components/spinner/Spinner";
import ShowMoreBtn from "../components/databank/ShowMoreBtn";
import { DataBankContext } from "../providers/DataBankProvider";
import { useState, useContext } from "react";

const DataBank = () => {
  const {
    characters,
    pending,
    fetchError,
    searchTerm,
    setSearchTerm,
    setFilterCharacters,
  } = useContext(DataBankContext);

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SearchBar
        characters={characters}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setFilterCharacters={setFilterCharacters}
      />
      <section className={classes["databank-container"]}>
        <div className={classes["section-heading"]}>
          <h3>Andor</h3>
          <div className={classes["short-line"]}></div>
          <div className={classes["long-line"]}></div>
        </div>
        {pending && <Spinner />}
        {fetchError && (
          <h4>
            Something went wrong please reload the page
          </h4>
        )}

        {/* 12 cards showed when component rendered */}
        {!pending &&
          !fetchError &&
          !showMore &&
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
            {/* All cards showed when click button "Show more" */}
        {!pending &&
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
      </section>
      <ShowMoreBtn setShowMore={setShowMore} />
    </>
  );
};

export default DataBank;
