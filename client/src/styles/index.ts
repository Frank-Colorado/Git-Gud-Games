import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ea526f',
    },
    background: {
      default: '#151515',
      paper: '#202020',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Pixelify Sans',
      fontSize: '5rem',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Pixelify Sans',
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
});
