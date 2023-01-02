import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faMagni } from '@fortawesome/free-regular-svg-icons'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchBar({ characters, id }) {
  const { key } = useParams();
  const [width, setWindowWidth] = useState(0);
  const [addSearchText, setAddSearchText] = useState("");
  const [searchInput, setSearchInput] = useState({});
  const navigate = useNavigate();

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

  // const handleSearch = (e) => {
  //   let search = Object.keys(characters).filter((key) =>
  //     characters[key].name.includes(e.target.value)
  //   );
  //   setSearchInput(search);
  //   console.log(search);
  // };
  // console.log(searchInput);

  // const handleSubmit = (e) => {
  //   let search = Object.keys(characters).filter((key) =>
  //     characters[key].name.includes(e.target.value)
  //   );
  //   setSearchInput(search);
  //   console.log(search);
  //   // e.preventDefault();

  //   if (search.length) {
  //     navigate(`/`);
  //   } else throw new Error("No match found");
  // };

  return (
    <div>
      <div className={classes["search-bar-bg"]}>
        <form
          action="/"
          method="get"
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          <div className={classes["search-bar"]}>
            <input
              className={classes["search-input"]}
              type="text"
              placeholder="Databank"
              // onSubmit={handleSubmit}

              // value={searchInput}
            />
            <FontAwesomeIcon
              size="1x"
              className={classes.magnifying}
              icon={faMagnifyingGlass}
              transform="down-2"
              // onClick={handleSubmit}
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
