import { useParams } from "react-router-dom";
import { useFetchLocationById } from "./useFetchLocationById";
import SingleLocation from "./SingleLocation";

const LocationPage = () => {
  const params = useParams();
  const id = params.locationId;

  const location = useFetchLocationById(id);

  return <SingleLocation location={location} />;
};

export default LocationPage;
