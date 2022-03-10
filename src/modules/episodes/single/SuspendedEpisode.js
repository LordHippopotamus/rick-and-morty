import { useQueryClient, useQuery } from "react-query";
import SingleEpisode from "./SingleEpisode";

const SuspendedEpisode = ({ id }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["episode", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    return response.json();
  });

  return <SingleEpisode episode={data} />;
};

export default SuspendedEpisode;
