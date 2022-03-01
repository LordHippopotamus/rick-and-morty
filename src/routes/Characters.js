import { useQueryClient, useQuery } from "react-query";
import { Container, SimpleGrid, Box, Heading, Image } from "@chakra-ui/react";

const Characters = () => {
  const queryClient = useQueryClient();

  const { isSuccess, data } = useQuery("characters", async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  });

  if (isSuccess) {
    return (
      <Container my={8} maxW="6xl">
        <SimpleGrid columns={[1, 2, 4]} spacing={4}>
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
      </Container>
    );
  }

  return null;
};

export default Characters;
