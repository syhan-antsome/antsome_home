import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1400,
      lg: 1800,
      xl: 2200,
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Nanum Square"',
      '나눔스퀘어',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
