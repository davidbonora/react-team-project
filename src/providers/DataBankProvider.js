import { createContext, useEffect, useState } from "react";
export const DataBankContext = createContext(null);

const DataBankProvider = ({ children }) => {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);

  const API_CHARACTERS =
    "https://starwars-databank-default-rtdb.europe-west1.firebasedatabase.app/characters.json";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_CHARACTERS);
        if (!response.ok) throw new Error("Did not receive expected data");
        const listCharacters = await response.json();
        // console.log(listCharacters);
        setCharacters(listCharacters);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
        // console.log(fetchError);
      } finally {
        setPending(false);
      }
    };

    (async () => fetchCharacters())();
  }, []);

  return (
    <DataBankContext.Provider
      value={{
        characters,
        setCharacters,
        pending,
        setPending,
        fetchError,
        setFetchError,
        searchTerm,
        setSearchTerm,
        filterCharacters,
        setFilterCharacters,
      }}
    >
      {children}
    </DataBankContext.Provider>
  );
};

export default DataBankProvider;
