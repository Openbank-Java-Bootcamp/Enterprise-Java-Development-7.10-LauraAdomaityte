import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    const country = props.countries.find((countryObj) => {
      return countryObj.alpha3Code === countryId;
    });
    console.log(country);
    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);

    if (!foundCountry) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {!foundCountry && <p>The country was not found</p>}
  
        {foundCountry && (
          <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="country flag"/>
            <h2>{foundCountry.name.official}</h2>
            <p>Capital: {foundCountry.capital}</p>
            <p>Area: {foundCountry.area}</p>
            
              
              
            <ul>Borders:</ul>
          {foundCountry.borders.map((countryCode, index) => {
            return (
              <li key={index}>
                <Link to={`/${countryCode}`}>{props.countries.find(country => country.alpha3Code === countryCode).name.official}</Link>
                
              </li>
            );
          })}
            
           
          </>
        )}
      </div>
    );
  }
  
  export default CountryDetails;
  

