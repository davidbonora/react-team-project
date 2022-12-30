import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faMagni } from '@fortawesome/free-regular-svg-icons'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchBar({ setContent, characters }) {
  const { key } = useParams();
  const [width, setWindowWidth] = useState(0);
  const [addSearchText, setAddSearchText] = useState("");
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    const searchText = width < 700 ? null : "SEARCH";
    setAddSearchText(searchText);
    setWindowWidth(width);
  };
  // Search function
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    let search = Object.keys(characters).filter((key) =>
      characters[key].name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setContent(search);
  };

  return (
    <div>
      <div className={classes["search-bar-bg"]}>
        <form onSubmit={handleSubmit}>
          <div className={classes["search-bar"]}>
            <input
              className={classes["search-input"]}
              type="search"
              placeholder="Databank"
              onChange={handleSearch}
              // value={searchInput}
            />
            <FontAwesomeIcon
              size="1x"
              className={classes.magnifying}
              icon={faMagnifyingGlass}
              transform="down-2"
              // onClick={() => navigate(family)}
            />
            {width > 700 && (
              <p className={classes["search-text"]}>{addSearchText}</p>
            )}
          </div>
        </form>
        <div className={classes.underline}></div>
      </div>
    </div>
  );
}

export default SearchBar;
