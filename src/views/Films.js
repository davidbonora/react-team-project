import classes from "./Films.module.css";
import BrowseFilms from "../components/films/BrowseFilms";
import FilmsTitleContainer from "../components/films/FilmsTitleContainer";
import DropdownActions from "../components/films/DropdownActions";
import FilmsGrid from "../components/films/FilmsGrid";

function App() {
  return (
    <div className={classes["main-bg-color"]}>
      <FilmsTitleContainer />
      <BrowseFilms />
      <div className={classes["direction"]}>
        <DropdownActions />
        <FilmsGrid />
      </div>
    </div>
  );
}

export default App;
