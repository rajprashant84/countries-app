import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
