import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { Navigation } from 'components';

const pages = ['Character', 'Location', 'Episode'];

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation pages={pages} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
