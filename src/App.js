// import './App.css';
import DataBank from "./views/DataBank";
import { Routes, Route } from "react-router-dom";
import OliversComponent from "./components/databank/OliversComponent";
import { useEffect, useState } from "react";
import SearchResultPage from "./components/databank/SearchResultPage";

const API_CHARACTERS =
  "https://starwars-databank-default-rtdb.europe-west1.firebasedatabase.app/characters.json";

function App() {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_CHARACTERS);
        if (!response.ok) throw new Error("Did not receive expected data");
        const listCharacters = await response.json();
        console.log(listCharacters);
        setCharacters(listCharacters);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
        console.log(fetchError);
      } finally {
        setPending(false);
      }
    };

    (async () => fetchCharacters())();
  }, []);

  return (
    <Routes>
      <Route
        path='/databank'
        element={
          <DataBank
            characters={characters}
            pending={pending}
            fetchError={fetchError}
          />
        }
      ></Route>
      <Route path='/databank/search/:searchTerm' element={<SearchResultPage />}>
        {" "}
      </Route>
      <Route
        path='/databank/:key'
        element={<OliversComponent characters={characters} />}
      />
    </Routes>
  );
}

export default App;
