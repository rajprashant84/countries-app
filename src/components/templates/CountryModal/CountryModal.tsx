import React from 'react';
import { Country } from '../../../types/types';
import Button from '../../atoms/Button/Button';
import './CountryModal.css';

interface CountryModalProps {
  country: Country;
  onClose: () => void;
  addFaV: (country: Country) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ country, onClose, addFaV }) => {
  if (!country) return null;

  const handleAddToFavorites = () => {
    addFaV(country);
    onClose(); // Close the modal after adding to favorites
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{country.name.common}</h2>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-modal-flag" />
        <div className="country-modal-info">
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies).map((c: { name: string }) => c.name).join(', ')}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
        </div>
        <Button text="Add to Favorites" onClick={handleAddToFavorites} />
      </div>
    </div>
  );
};

export default CountryModal;



