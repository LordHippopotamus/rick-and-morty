import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container, Skeleton } from "@chakra-ui/react";
import SuspendedEpisode from "./SuspendedEpisode";

const LocationPage = () => {
  const params = useParams();
  const id = params.episodeId;

  return (
    <Suspense
      fallback={
        <Container my={8}>
          <Skeleton h="30px" w="60%" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
          <Skeleton mt={8} h="20px" />
        </Container>
      }
    >
      <SuspendedEpisode id={id} />
    </Suspense>
  );
};

export default LocationPage;
