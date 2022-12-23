import { useEffect, useState } from "react";
import CharactersCard from "./CharactersCard";

const API_URL =
  "https://starwars-databank-default-rtdb.europe-west1.firebasedatabase.app/characters.json";

const DataBank = () => {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Did not receive expected data");
        const listCharacters = await response.json();
        console.log(listCharacters);
        setCharacters(listCharacters);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setPending(false);
              }
    };

    (async () => fetchCharacters())();
  }, []);

  return <div>

{Object.keys(characters).map((key) => (<CharactersCard key={key} id={key} img={characters[key].image} name={characters[key].name}/>
))
  }
  </div>;
};

export default DataBank;
