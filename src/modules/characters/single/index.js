import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container, Skeleton } from "@chakra-ui/react";
import SuspendedSingleCharacter from "./SuspendedSingleCharacter";

const CharacterPage = () => {
  const params = useParams();
  const id = params.characterId;

  return (
    <Suspense
      fallback={
        <Container my={8}>
          <Skeleton h="30px" w="60%" />
          <Skeleton my={4} h="300px" w="100%" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
        </Container>
      }
    >
      <SuspendedSingleCharacter id={id} />
    </Suspense>
  );
};

export default CharacterPage;
