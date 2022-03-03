import { useQueryClient, useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Image,
  Center
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";

const Characters = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = +searchParams.get("page") || 1;

  const { isSuccess, data } = useQuery(["characters", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.json();
  });

  if (isSuccess) {
    return (
      <Container maxW="6xl">
        <SimpleGrid my={8} columns={[1, 2, 4]} spacing={4}>
          {data.results.map((el) => (
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={el.id}
            >
              <Image w="100%" src={el.image} alt={el.name} />
              <Heading p={4} size="md" isTruncated>
                {el.name}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
        <Center my={8}>
          <Pagination maxPages={42} active={page} />
        </Center>
      </Container>
    );
  }

  return null;
};

export default Characters;
