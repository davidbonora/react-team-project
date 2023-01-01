import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";
const SearchBar = ({
  searchTerm,
  setSearchTerm,
  characters,
  setFilterCharacters,
  setShowFiltered,
}) => {
  const navigate = useNavigate();
  const handleSearchSubmit = () => {
    if (!searchTerm) return;
    let filtered = Object.entries(characters).filter((item) => {
      return item[1].name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilterCharacters(filtered);
    setShowFiltered(true);
    setSearchTerm("")
    navigate(`/databank/search/${searchTerm}`)
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={classes.form}
    >
      <input
        type='text'
        placeholder='Search Databank'
        onChange={(e) => {
          setSearchTerm(e.target.value.trim());
        }}
        value={searchTerm}
      />
      <button type='submit' disabled={!searchTerm} onClick={handleSearchSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        <span className={classes.search}>SEARCH</span>
      </button>
    </form>
  );
};

export default SearchBar;
