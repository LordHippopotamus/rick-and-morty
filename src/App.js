import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const pages = ["Characters", "Locations", "Episodes"];

export default function App() {
  return (
    <>
      <Navigation pages={pages} />
      <Outlet />
    </>
  );
}
