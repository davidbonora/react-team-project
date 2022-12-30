import classes from "./DataBank.module.css";
import CharactersCard from "./CharactersCard";
import SearchBar from "./SearchBar";
import Spinner from "../Spinner";
import ShowMoreBtn from "./ShowMoreBtn";

const DataBank = ({ characters, pending, fetchError }) => {
  return (
    <>
     <SearchBar
        // characters ={characters} setCharacters={setCharacters} content ={content} setContent={setContent}
        />
      <section className={classes["databank-container"]}>
       
        <div className={classes["section-heading"]}>
          <h3>Andor</h3>
          <div className={classes["short-line"]}></div>
          <div className={classes["long-line"]}></div>
        </div>
        {pending && <Spinner />}
        {fetchError && <h4 style={{color: "white"}}>Something went wrong please reload the page</h4>}
        {Object.keys(characters).map((key) => (
          <CharactersCard
            key={key}
            id={key}
            img={characters[key].thumb}
            name={characters[key].name}
          />
        ))}
      </section>
      <ShowMoreBtn/>
    </>
  );
};

export default DataBank;
