import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
