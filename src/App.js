import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import Navigation from "./components/Navigation";

const pages = ["Characters", "Locations", "Episodes"];

const App = () => (
  <>
    <Navigation pages={pages} />
    <Suspense
      fallback={
        <Center>
          <Spinner />
        </Center>
      }
    >
      <Outlet />
    </Suspense>
  </>
);

export default App;
