import { useState } from 'react';
import SearchInput from './SearchInput';
import Autocomplete from './Autocomplete';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Icon,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: '5rem', backgroundColor: 'white' }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h3"
            sx={{
              color: 'red',
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover': {
                color: 'yellow',
              },
            }}
          >
            GIT GUD GAMES
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Autocomplete />
            {loggedIn ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ color: 'black' }}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <div>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{ mr: 3 }}
                >
                  Login
                </Button>
                <Button component={Link} to="/signup" variant="contained">
                  Signup
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Navbar;
