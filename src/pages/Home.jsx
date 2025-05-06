import React, { useState, useContext } from 'react';
import { Typography, TextField, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import useEMICalculation from '../hooks/useEMICalculation';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {
  const { currency } = useContext(GlobalContext);

  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [tenureMonths, setTenureMonths] = useState('');

  const principalNum = parseFloat(principal);
  const annualRateNum = parseFloat(annualRate);
  const tenureNum = parseInt(tenureMonths, 10);

  const { emi, amortizationSchedule } = useEMICalculation(principalNum, annualRateNum, tenureNum);

  const handleReset = () => {
    setPrincipal('');
    setAnnualRate('');
    setTenureMonths('');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Loan EMI Calculator
      </Typography>
      <Box component="form" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        <TextField
          label="Principal Amount"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
          fullWidth
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Annual Interest Rate (%)"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          required
          fullWidth
          inputProps={{ min: 0, step: 0.01 }}
        />
        <TextField
          label="Loan Tenure (Months)"
          type="number"
          value={tenureMonths}
          onChange={(e) => setTenureMonths(e.target.value)}
          required
          fullWidth
          inputProps={{ min: 1 }}
        />
        <Button variant="outlined" onClick={handleReset} sx={{ alignSelf: 'center' }}>
          Reset
        </Button>
      </Box>
      <Typography variant="h6" gutterBottom>
        Monthly EMI: {emi ? emi.toFixed(2) : '0.00'} {currency}
      </Typography>
      {amortizationSchedule.length > 0 && (
        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
          <Table stickyHeader size="small" aria-label="amortization schedule">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Principal Paid ({currency})</TableCell>
                <TableCell>Interest Paid ({currency})</TableCell>
                <TableCell>Remaining Balance ({currency})</TableCell>
                <TableCell>EMI ({currency})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amortizationSchedule.map(({ month, principalPaid, interest, balance, emi }) => (
                <TableRow key={month}>
                  <TableCell>{month}</TableCell>
                  <TableCell>{principalPaid.toFixed(2)}</TableCell>
                  <TableCell>{interest.toFixed(2)}</TableCell>
                  <TableCell>{balance.toFixed(2)}</TableCell>
                  <TableCell>{emi.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Home;
