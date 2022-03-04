import { useQueryClient, useQuery } from "react-query";

export const useFetchCharacterById = (id) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["characters", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.json();
  });

  return data;
};
