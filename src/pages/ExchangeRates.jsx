import React, { useState, useContext } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';
import { GlobalContext } from '../context/GlobalContext';

const ExchangeRates = () => {
  const { currency, setCurrency } = useContext(GlobalContext);
  const [page, setPage] = useState(1);
  const perPage = 20;

  const { rates, loading, error, totalPages } = useExchangeRates(currency, page, perPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    setPage(1);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates
      </Typography>
      <FormControl sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel id="base-currency-label">Base Currency</InputLabel>
        <Select
          labelId="base-currency-label"
          value={currency}
          label="Base Currency"
          onChange={handleCurrencyChange}
        >
          {/* Common currencies */}
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
          <MenuItem value="AUD">AUD</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="CHF">CHF</MenuItem>
          <MenuItem value="CNY">CNY</MenuItem>
          <MenuItem value="HKD">HKD</MenuItem>
        </Select>
      </FormControl>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && (
        <>
          <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
            <Table stickyHeader size="small" aria-label="exchange rates table">
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell>Rate (per 1 {currency})</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rates.map(([code, rate]) => (
                  <TableRow key={code}>
                    <TableCell>{code}</TableCell>
                    <TableCell>{rate.toFixed(4)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ExchangeRates;
