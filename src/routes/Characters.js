import { useQueryClient, useQuery } from "react-query";
import { useSearchParams, Link } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  Heading,
  Image,
  Center,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";

const Characters = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = +searchParams.get("page") || 1;

  const { data } = useQuery(["characters", page], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.json();
  });

  const { info, results: characters } = data;

  return (
    <Container maxW="6xl">
      <SimpleGrid my={8} columns={[1, 2, 4]} spacing={4}>
        {characters.map((el) => (
          <LinkBox key={el.id} as="article" borderWidth="1px" rounded="lg">
            <Image w="100%" src={el.image} alt={el.name} />
            <LinkOverlay as={Link} to={`${el.id}`}>
              <Heading p={4} size="md" isTruncated>
                {el.name}
              </Heading>
            </LinkOverlay>
          </LinkBox>
        ))}
      </SimpleGrid>
      <Center my={8}>
        <Pagination maxPages={info.pages} active={page} />
      </Center>
    </Container>
  );
};

export default Characters;
