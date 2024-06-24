import React from 'react';

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Languages: {country.languages}</p>
            <p>Currencies: {country.currencies}</p>
            <p>Flag: <img src={country.flag} alt="Flag" width="100" /></p>
        </div>
    );
};

export default CountryDetails;
