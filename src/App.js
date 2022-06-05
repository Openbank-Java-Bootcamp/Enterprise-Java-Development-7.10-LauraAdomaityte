import logo from "./logo.svg";
import "./App.css";
import CountriesList from "./pages/CountriesList";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";
import axios from "axios";
import { useEffect, useState } from "react";
const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [fetching, setFetching] = useState(true);
  const [countriesDB, setCountriesDB] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountriesDB(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <CountriesList countries={countriesDB} fetching={fetching} />
          }
        />
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countriesDB} />}
        />
      </Routes>
    </div>
  );
}

export default App;
