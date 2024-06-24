import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const useFavorites = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    return { favorites, toggleFavorite };
};

export default useFavorites;
