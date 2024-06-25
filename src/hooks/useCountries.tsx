import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';

export const useCountries = () => {
  return useContext(CountriesContext);
};
