import React, { createContext, useContext, useState, useEffect } from 'react';
import { Country } from '../types/types';
import { getCountries } from '../services/api';

interface CountriesContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

export const CountriesContext = createContext<CountriesContextProps | undefined>(undefined);

export const CountriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = (): CountriesContextProps => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider');
  }
  return context;
};
