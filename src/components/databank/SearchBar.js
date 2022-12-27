import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SearchBar.module.css"
const SearchBar = ({ setContent, characters }) => {
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
    <form onSubmit={handleSubmit} className={classes.form}>
      <input type='seach' placeholder='Search Databank' onChange={handleSearch} />{" "}
      <FontAwesomeIcon icon={faMagnifyingGlass}  />
    </form>
  );
};

export default SearchBar;