import { useQueryClient, useQuery } from "react-query";
import SingleCharacter from "./SingleCharacter";

const SuspendedSingleCharacter = ({ id }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["character", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.json();
  });

  return <SingleCharacter character={data} />;
};

export default SuspendedSingleCharacter;
