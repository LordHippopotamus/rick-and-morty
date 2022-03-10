import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, SimpleGrid, Skeleton, Box } from "@chakra-ui/react";
import SuspendedEpisodessList from "./SuspendedEpisodessList";

const EpisodesPage = () => {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;

  return (
    <Suspense
      fallback={
        <Container maxW="6xl">
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
              <Skeleton mt={2} h="60px" key={el} />
            ))}
          </SimpleGrid>
        </Container>
      }
    >
      <SuspendedEpisodessList page={page} />
    </Suspense>
  );
};

export default EpisodesPage;
