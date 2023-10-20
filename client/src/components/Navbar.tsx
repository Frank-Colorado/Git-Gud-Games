import { useState } from 'react';
import Autocomplete from './Autocomplete';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const loggedIn = Auth.loggedIn();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Auth.logout();
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile">
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
              color: '#ea526f',
            },
          }}
        >
          Profile
        </MenuItem>
      </Link>
      <MenuItem
        onClick={handleLogout}
        sx={{
          textDecoration: 'none',
          color: 'white',
          '&:hover': {
            color: '#ea526f',
          },
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          //add shadow
          borderBottom: '1px solid #000000',
          boxShadow: '0px 0px 15px #ffffff',
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: 'black',
            height: '7rem',
          }}
        >
          <Typography
            component={Link}
            to="/"
            variant="h1"
            color="primary"
            sx={{
              fontWeight: 'bold',
              textDecoration: 'none',
              '&:hover': {
                color: '#ea526f',
              },
            }}
          >
            GIT GUD GAMES
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 7 }}>
            <Autocomplete />
            {loggedIn ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  color="primary"
                  variant="text"
                  sx={{
                    mr: 2,
                    '&:hover': {
                      backgroundColor: '#000000',
                      color: '#ea526f',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  color="primary"
                  variant="text"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#000000',
                      color: '#ea526f',
                    },
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Navbar;
