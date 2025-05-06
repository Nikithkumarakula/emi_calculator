import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography paragraph>
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI.
        It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule,
        and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>
      <Typography paragraph>
        Features include:
        <ul>
          <li>Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table with monthly breakdown</li>
          <li>Real-time currency conversion of EMI using a live exchange rate API</li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark/Light mode toggle for a customizable experience</li>
          <li>Collapsible header navigation on mobile screens</li>
          <li>Fully responsive UI built with Material UI</li>
        </ul>
      </Typography>
      <Typography paragraph>
        Technologies Used:
        <ul>
          <li>React (Hooks, Routing, Context API)</li>
          <li>Material UI for styling and responsive components</li>
          <li>Axios for API calls</li>
          <li>Exchange Rate API for real-time currency conversion</li>
        </ul>
      </Typography>
      <Typography paragraph>
        You can find the source code for this app on{' '}
        <Link href="https://github.com/Nikithkumarakula/emi_calculator" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        .
      </Typography>
   
    </Box>
  );
};

export default About;
