import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'c14b2983b02f62b57dcea416';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

const useExchangeRates = (baseCurrency = 'USD', page = 1, perPage = 20) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}${baseCurrency}`);
        if (response.data && response.data.conversion_rates) {
          setRates(response.data.conversion_rates);
        } else {
          setError('Invalid response from API');
        }
      } catch (err) {
        setError(err.message || 'Error fetching exchange rates');
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [baseCurrency]);

  // Pagination logic
  const rateEntries = Object.entries(rates);
  const totalPages = Math.ceil(rateEntries.length / perPage);
  const paginatedRates = rateEntries.slice((page - 1) * perPage, page * perPage);

  return { rates: paginatedRates, loading, error, totalPages };
};

export default useExchangeRates;
