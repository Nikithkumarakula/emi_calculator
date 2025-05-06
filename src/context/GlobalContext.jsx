import React, { createContext, useState, useMemo, useEffect } from 'react';

// Create the context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Theme state: 'light' or 'dark'
  const [themeMode, setThemeMode] = useState('light');

  // Currency state: default to USD
  const [currency, setCurrency] = useState('USD');

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Persist theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  // Persist currency preference in localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency');
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const value = useMemo(() => ({
    themeMode,
    toggleTheme,
    currency,
    setCurrency,
  }), [themeMode, currency]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
