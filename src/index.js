import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import Characters from "./routes/Characters";
import SingleCharacter from "./routes/SingleCharacter";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/characters" element={<Characters />} />
              <Route
                path="/characters/:characterId"
                element={<SingleCharacter />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
