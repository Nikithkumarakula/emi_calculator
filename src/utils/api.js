import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

/**
 * Fetches exchange rates for the given base currency.
 * @param {string} baseCurrency - The base currency code (default 'USD').
 * @returns {Promise<Object|null>} - Returns conversion rates object or null if error occurs.
 */
export const fetchExchangeRates = async (baseCurrency = 'USD') => {
  try {
    const response = await axios.get(`${BASE_URL}${baseCurrency}`);
    if (response.data && response.data.conversion_rates) {
      return response.data.conversion_rates;
    }
    throw new Error('Invalid response from API');
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
};
