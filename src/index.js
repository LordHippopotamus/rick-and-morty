import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { extendTheme, ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import CharactersPage from "./modules/characters/list";
import CharacterPage from "./modules/characters/single";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false
});

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/characters" element={<CharactersPage />} />
              <Route
                path="/characters/:characterId"
                element={<CharacterPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
