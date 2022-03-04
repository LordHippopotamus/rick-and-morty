import { useQueryClient, useQuery } from "react-query";

export const useFetchAllCharacters = (page) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["characters", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.json();
  });

  return data;
};
