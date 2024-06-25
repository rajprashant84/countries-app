import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries');
  }
};

export const searchCountriesByName = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Search by name failed');
  }
};

export const searchCountriesByLanguage = async (language: string) => {
  try {
    const response = await axios.get(`${API_URL}/lang/${language}`);
    return response.data;
  } catch (error) {
    throw new Error('Search by language failed');
  }
};

export const searchCountriesByCurrency = async (currency: string) => {
  try {
    const response = await axios.get(`${API_URL}/currency/${currency}`);
    return response.data;
  } catch (error) {
    throw new Error('Search by currency failed');
  }
};
