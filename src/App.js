import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const pages = ["Characters", "Locations", "Episodes"];

const App = () => (
  <>
    <Navigation pages={pages} />
    <Outlet />
  </>
);

export default App;
