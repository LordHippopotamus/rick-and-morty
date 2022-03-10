import { useQueryClient, useQuery } from "react-query";
import EpisodesList from "./EpisodesList";

const SuspendedEpisodesList = ({ page }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["locations", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    return response.json();
  });

  const { info, results } = data;

  return <EpisodesList episodes={results} pages={info.pages} page={page} />;
};

export default SuspendedEpisodesList;
