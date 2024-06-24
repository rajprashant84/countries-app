import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (country) => {
        const isFavorite = favorites.some((c) => c.alpha3Code === country.alpha3Code);
        if (isFavorite) {
            setFavorites(favorites.filter((c) => c.alpha3Code !== country.alpha3Code));
        } else {
            setFavorites([...favorites, country]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
