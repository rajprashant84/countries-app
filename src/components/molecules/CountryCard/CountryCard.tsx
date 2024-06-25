import React from 'react';
import { Country } from '../../../types/types';
import Button from '../../atoms/Button/Button';
import './CountryCard.css';

interface CountryCardProps {
  country: Country;
  isFavorite: boolean;
  onToggleFavorite: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, isFavorite, onToggleFavorite }) => {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" />
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
      <Button
        text={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onClick={() => onToggleFavorite(country)}
      />
    </div>
  );
};

export default CountryCard;


