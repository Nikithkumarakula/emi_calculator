import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Switch, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Header = () => {
  const { themeMode, toggleTheme, currency, setCurrency } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Exchange Rates', path: '/exchange-rates' },
    { title: 'About', path: '/about' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.title}
              color="inherit"
              component={RouterLink}
              to={link.path}
            >
              {link.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ ml: 2 }}>
          <Switch
            checked={themeMode === 'dark'}
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.title}
            component={RouterLink}
            to={link.path}
            onClick={handleMenuClose}
          >
            {link.title}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Header;
