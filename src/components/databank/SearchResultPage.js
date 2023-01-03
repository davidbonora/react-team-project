import classes from "./modules/SearchResultPage.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchResultCard from "./SearchResultCard";
import { useContext } from "react";
import { DataBankContext } from "../../providers/DataBankProvider";

const SearchResultPage = () => {
  const { searchTerm, characters, filterCharacters } =useContext(DataBankContext);
  return (
    <div className={classes["search-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.form}
      >
        <div className={classes.trapezium}></div>
        <input type='text' value={searchTerm} readOnly />
        <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
      </form>
      <p>Top search results for "{`${searchTerm}`}"</p>

      {filterCharacters.length > 0 &&
        filterCharacters.map((item) => {
          let key = item[0];
          return (
            <SearchResultCard
              key={key}
              id={key}
              img={characters[key].image}
              name={characters[key].name}
              description={characters[key].description}
            />
          );
        })}
      {!filterCharacters.length && (
        <p style={{ color: "white" }}>
          Please try another search or check the spelling
        </p>
      )}
    </div>
  );
};

export default SearchResultPage;
