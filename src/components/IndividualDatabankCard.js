import classes from "./IndividualDatabankCard.module.css";
import { useEffect, useState } from "react";

let BASE_URL = {
  characters:
    "https://starwars-databank-default-rtdb.europe-west1.firebasedatabase.app/characters.json",
};
function IndividualDatabankCard() {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  // search input
  const [searchInput, setSearchInput] = useState("");

  const fetchDatabankData = async () =>
    // method = "GET",
    // characters =  [{id: "", name: "", description: "", image: "", thumb: "" }]
    {
      setPending(true);
      try {
        const response = await fetch(BASE_URL.characters);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          let info = Object.keys(data).map((key) => {
            return {
              id: key,
              name: data[key].name,
              description: data[key].description,
              image: data[key].image,
              thumb: data[key].thumb,
            };
          });
          console.log(info[0].name);
          setCharacters(info);
        }
      } catch (error) {
        setError({
          message: error.message || "Something went wrong!",
        });
      }
      setPending(false);

      console.log(characters);
    };
  // This is the search bar to be refactored
  // Search bar change and input
  // const family = [{ name: characters.name }];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    // family.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
    characters.filter((item) => {
      return item.name.match(searchInput);
    });
  }

  useEffect(() => {
    fetchDatabankData();
  }, []);

  return (
    <div>
      {/* <div className={classes["search-bar"]}>
        <input
          className={classes["search-input"]}
          type="text"
          placeholder="Databank"
          onChange={handleChange}
          value={searchInput}
        />
      
        <div className={classes.underline}></div>
      </div>
      <div className={classes.card}>
        <div className={classes.character}>
          <img
            className={classes.images}
            src={characters[0].image}
            alt="character"
          />
          <div className={classes["written-info"]}>
            <h4>{characters[0].name}</h4>
            <p>{characters[0].description}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default IndividualDatabankCard;
