import classes from "./SearchResultPage.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchResultPage = ({ searchTerm }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.form}
      >
        <input type='text' value={searchTerm} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
      </form>
    </>
  );
};

export default SearchResultPage;
