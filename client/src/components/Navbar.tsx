import { useState } from 'react';
import SearchInput from './SearchInput';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: '5rem', backgroundColor: 'white' }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}
          >
            Git Gud Games
          </Typography>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
