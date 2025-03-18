import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: '#f83e87',
      contrastText: 'white'
    },
    secondary: {
      main: '#ffa68d',
      contrastText: 'white'
    },
  },
  typography: {
    fontFamily: ['Segoe UI'].join(','),
  },
});