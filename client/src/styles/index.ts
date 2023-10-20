import { createTheme, styled } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      contrastText: '#ea526f',
    },
    secondary: {
      main: '#ea526f',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Bebas Neue',
      fontSize: '4.5rem',
      fontWeight: 500,
      letterSpacing: '1.0rem',
    },
    h2: {
      fontFamily: 'Bebas Neue',
      fontSize: '3.5rem',
      fontWeight: 500,
      letterSpacing: '0.2rem',
    },
    h3: {
      fontFamily: 'Bebas Neue',
      fontSize: '1.3rem',
      fontWeight: 500,
      letterSpacing: '0.2rem',
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Bebas Neue',
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '0.2rem',
    },
  },
});
