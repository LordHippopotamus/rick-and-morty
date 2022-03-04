import { useQueryClient, useQuery } from "react-query";

export const useFetchLocationById = (id) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["location", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    return response.json();
  });

  return data;
};
