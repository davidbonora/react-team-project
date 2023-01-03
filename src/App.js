// import './App.css';
import DataBank from "./views/DataBank";
import { Routes, Route } from "react-router-dom";
import IndividualDatabankCard from "./views/IndividualDatabankCard";
import DataBankProvider from "./providers/DataBankProvider";
import SearchResultPage from "./components/databank/SearchResultPage";

function App() {
  return (
    <Routes>
      <Route
        path='/databank'
        element={
          <DataBankProvider>
            <DataBank />
          </DataBankProvider>
        }
      ></Route>
      <Route
        path='/databank/search/:searchTerm'
        element={
          <DataBankProvider>
            <SearchResultPage />
          </DataBankProvider>
        }
      ></Route>
      <Route
        path='/databank/:key'
        element={
          <DataBankProvider>
            <IndividualDatabankCard />
          </DataBankProvider>
        }
      />
    </Routes>
  );
}

export default App;
