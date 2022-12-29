// // import './App.css';
// import Base from "./components/relatedDatabank/IndividualDatabankBase";
// // import IndividualDatabankCard from "./components/IndividualDatabankCard";

// function App() {
//   return (
//     <>
//       <Base></Base>
//     </>
//   );
// }

// export default App;

// Alina's App.js
// ----------------
// import './App.css';
import DataBank from "./components/AlinasDatabank";


import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import IndividualDatabankCard from "./components/relatedDatabank/IndividualDatabankCard";
const API_CHARACTERS =
  "https://starwars-databank-default-rtdb.europe-west1.firebasedatabase.app/characters.json";

function App() {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  // const [content, setContent] =useState({})

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_CHARACTERS);
        if (!response.ok) throw new Error("Did not receive expected data");
        const listCharacters = await response.json();
        console.log(listCharacters);
        setCharacters(listCharacters);
        // setContent(listCharacters)
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setPending(false);
      }
    };

    (async () => fetchCharacters())();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<DataBank characters={characters} />} />
        <Route
          path=":key"
          element={<IndividualDatabankCard characters={characters} />}
        />
      </Routes>
     
    </>
  );
}

export default App;
