// import './App.css';
import DataBank from "./views/DataBank";
import { Routes, Route } from "react-router-dom";
import OliversComponent from "./components/databank/OliversComponent";
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
            <OliversComponent />
          </DataBankProvider>
        }
      />
    </Routes>
  );
}

export default App;
