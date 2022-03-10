import { Link } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  Heading,
  Center,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import Pagination from "../../../components/Pagination";

const LocationsList = ({ episodes, pages, page }) => (
  <Container maxW="6xl">
    <SimpleGrid my={8} columns={[1, 2, 4]} spacing={4}>
      {episodes.map((el) => (
        <LinkBox
          key={el.id}
          as="article"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
        >
          <LinkOverlay as={Link} to={`${el.id}`}>
            <Heading size="md" isTruncated p={4}>
              {el.name}
            </Heading>
          </LinkOverlay>
        </LinkBox>
      ))}
    </SimpleGrid>
    <Center my={8}>
      <Pagination maxPages={pages} active={page} />
    </Center>
  </Container>
);

export default LocationsList;
