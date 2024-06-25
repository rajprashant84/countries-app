import React from 'react';
import CountryCard from '../../molecules/CountryCard/CountryCard';
import { Country } from '../../../types/types';
import './Favorites.css';

interface FavoritesProps {
  favorites: Country[];
  onToggleFavorite: (country: Country) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onToggleFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {favorites.length === 0 && <p>No favorites added.</p>}
      {favorites.map((country, index) => (
        <CountryCard
          key={index}
          country={country}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;


