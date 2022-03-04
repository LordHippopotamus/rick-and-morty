import { useSearchParams } from "react-router-dom";
import { useFetchAllLocations } from "./useFetchAllLocations";
import LocationsList from "./LocationsList";

const LocationsPage = () => {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;

  const { info, results } = useFetchAllLocations(page);

  return <LocationsList locations={results} pages={info.pages} page={page} />;
};

export default LocationsPage;
