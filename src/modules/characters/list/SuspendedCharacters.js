import { useQueryClient, useQuery } from "react-query";
import CharactersList from "./CharactersList";

const SuspendedCharacters = ({ page }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["characters", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.json();
  });

  const { info, results } = data;

  return <CharactersList characters={results} pages={info.pages} page={page} />;
};

export default SuspendedCharacters;
