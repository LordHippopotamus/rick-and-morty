import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const pages = ["Characters", "Locations", "Episodes"];

const App = () => (
  <>
    <Navigation pages={pages} />
    <Outlet />
  </>
);

export default App;
