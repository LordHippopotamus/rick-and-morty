import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container, Skeleton } from "@chakra-ui/react";
import SuspendedLocation from "./SuspendedLocation";

const LocationPage = () => {
  const params = useParams();
  const id = params.locationId;

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
      <SuspendedLocation id={id} />
    </Suspense>
  );
};

export default LocationPage;
