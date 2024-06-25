import React, { useState, useEffect } from 'react';
import CountryList from '../organisms/CountryList/CountryList';
import SearchBar from '../molecules/SearchBar/SearchBar';
import CountryModal from '../templates/CountryModal/CountryModal';
import Favorites from '../organisms/Favorites/Favorites';
import { getCountries, searchCountriesByName, searchCountriesByLanguage, searchCountriesByCurrency } from '../../services/api';
import { Country } from '../../types/types';
import '../../styles/App.css';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [favorites, setFavorites] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setApiError('Failed to fetch countries');
        setLoading(false);
      }
    };

    fetchCountries();
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = async (type: string, query: string) => {
    setLoading(true);
    try {
      let results;
      if (type === 'name') {
        results = await searchCountriesByName(query);
      } else if (type === 'language') {
        results = await searchCountriesByLanguage(query);
      } else if (type === 'currency') {
        results = await searchCountriesByCurrency(query);
      }
      setCountries(results);
      setLoading(false);
    } catch (error) {
      console.error('Search failed:', error);
      setApiError('Search failed. Please try again.');
      setLoading(false);
    }
  };

  const handleRowClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleToggleFavorite = (country: Country) => {
    const isFavorite = favorites.some(fav => fav.name.common === country.name.common);
    const updatedFavorites = isFavorite ? favorites.filter(fav => fav.name.common !== country.name.common) : [...favorites, country];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setSelectedCountry(null); // Close the modal after adding to favorites
  };

  const handleModalClose = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="container">
      {/* <SearchBar onSearch={handleSearch} /> */} 
      {loading && <p>Loading...</p>}
      {apiError && <p>{apiError}</p>}
      <div className="main-content">
        <CountryList 
          countries={countries} 
          favorites={favorites} 
          onToggleFavorite={handleToggleFavorite} 
          onRowClick={handleRowClick} 
        />
        <Favorites favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
      {selectedCountry && <CountryModal country={selectedCountry} onClose={handleModalClose} addFaV={handleToggleFavorite} />}
    </div>
  );
};

export default Home;


