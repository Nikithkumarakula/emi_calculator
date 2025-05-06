import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { GlobalContext, GlobalProvider } from './context/GlobalContext';
import { getTheme } from './theme';

// Import pages (to be created)
import Home from './pages/Home';
import About from './pages/About';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';

// Import components (to be created)
import Header from './components/Header';

const AppContent = () => {
  const { themeMode } = useContext(GlobalContext);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Router>
          <Header />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
