import classes from "./AlinasDatabank.module.css";
import AlinasCharactersCard from "./AlinasCharactersCard";
// import SearchBar from "./SearchBar";

const DataBank = ({ characters }) => {
  return (
    <>
      {/* <section className={classes["databank-container"]}> */}
      <section>
        {/* <SearchBar
        // characters ={characters} setCharacters={setCharacters} content ={content} setContent={setContent}
        />
        <div className={classes["section-heading"]}>
          <h3>Andor</h3>
          <div className={classes["short-line"]}></div>
          <div className={classes["long-line"]}></div>
        </div> */}

        {Object.keys(characters).map((key) => (
          <AlinasCharactersCard
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