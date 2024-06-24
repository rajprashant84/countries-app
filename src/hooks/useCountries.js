import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/api';

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const data = await fetchCountries();
                setCountries(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching countries: ', error);
            }
        };

        getCountries();
    }, []);

    return { countries, loading };
};

export default useCountries;
