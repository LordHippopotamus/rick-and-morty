import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, SimpleGrid, Skeleton, Box } from "@chakra-ui/react";
import SuspendedCharactersList from "./SuspendedCharactersList";

const CharactersPage = () => {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;

  return (
    <Suspense
      fallback={
        <Container my={8} maxW="6xl">
          <SimpleGrid my={8} columns={[1, 2, 4]} spacing={4}>
            {[
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20
            ].map((el) => (
              <Box key={el}>
                <Skeleton h="300px" />
                <Skeleton mt={2} h="30px" />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      }
    >
      <SuspendedCharactersList page={page} />
    </Suspense>
  );
};

export default CharactersPage;
