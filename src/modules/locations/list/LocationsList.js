import { Link } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Center,
  LinkBox,
  LinkOverlay,
  Box
} from "@chakra-ui/react";
import Pagination from "../../../components/Pagination";

const LocationsList = ({ locations, pages, page }) => (
  <Container maxW="6xl">
    <SimpleGrid my={8} columns={[1, 2, 4]} spacing={4}>
      {locations.map((el) => (
        <LinkBox
          key={el.id}
          as="article"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
        >
          <LinkOverlay as={Link} to={`${el.id}`}>
            <Box p={4}>
              <Heading size="md" isTruncated>
                {el.name}
              </Heading>
              <Text>{el.type}</Text>
            </Box>
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
