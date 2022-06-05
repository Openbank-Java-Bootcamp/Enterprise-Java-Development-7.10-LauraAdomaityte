import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";



function CountriesList(props) {
  

  return (
    <div >
      {props.fetching && <p>Loading...</p>}

      {props.countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <ul>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag"/>
              <br/>
              <Link to={`/${country.alpha3Code}`}> {country.name.official} </Link>
            </ul>
          </div>
        );
      })}

     
    </div>
  );
}

export default CountriesList;
