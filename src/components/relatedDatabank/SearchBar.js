import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faMagni } from '@fortawesome/free-regular-svg-icons'
import { useParams } from "react-router-dom";

function SearchBar({ characters }) {
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
    const searchText =
      width < 700 ? null : "SEARCH";
    setAddSearchText(searchText);
    setWindowWidth(width);
  };

  // // search input
  // const [searchInput, setSearchInput] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };
  // const family = [{ name: characters.name }];
  // if (searchInput.length > 0) {
  //   family.filter((item) =>
  //     item.name.toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   characters.filter((item) => {
  //     return item.name.match(searchInput);
  //   });
  // }

  return (
    <div>
      <div className={classes["search-bar-bg"]}>
        <div className={classes["search-bar"]}>
          <input
            className={classes["search-input"]}
            type="text"
            placeholder="Databank"
            // onChange={handleChange}
            // value={searchInput}
          />
          <FontAwesomeIcon
            size="2x"
            className={classes.magnifying}
            icon={faMagnifyingGlass}
            // onClick={() => navigate(family)}
          />
        {width > 700 && <p className={classes["search-text"]}>{addSearchText}</p>}
        </div>
        <div className={classes.underline}></div>
      </div>
    </div>
  );
}

export default SearchBar;
