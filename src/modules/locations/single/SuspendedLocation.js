import { useQueryClient, useQuery } from "react-query";
import SingleLocation from "./SingleLocation";

const SuspendedLocation = ({ id }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["location", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    return response.json();
  });

  return <SingleLocation location={data} />;
};

export default SuspendedLocation;
