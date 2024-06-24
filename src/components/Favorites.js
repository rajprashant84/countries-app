import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div>
            <h2>My Favorite Countries</h2>
            <ul>
                {favorites.map((country) => (
                    <li key={country.alpha3Code}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export { Favorites }; // Export Favorites as named export

