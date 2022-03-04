import { useQueryClient, useQuery } from "react-query";

export const useFetchAllLocations = (page) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["location", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
    return response.json();
  });

  return data;
};
