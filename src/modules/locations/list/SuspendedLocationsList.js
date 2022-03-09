import { useQueryClient, useQuery } from "react-query";
import LocationsList from "./LocationsList";

const SuspendedLocationsList = ({ page }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["locations", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
    return response.json();
  });

  const { info, results } = data;

  return <LocationsList locations={results} pages={info.pages} page={page} />;
};

export default SuspendedLocationsList;
