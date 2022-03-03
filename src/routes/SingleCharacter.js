import {
  Container,
  Heading,
  Image,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import { useQueryClient, useQuery } from "react-query";
import { useParams } from "react-router-dom";

const SingleCharacter = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const id = params.characterId;

  const { data: character } = useQuery(["character", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.json();
  });

  console.log(character);

  return (
    <Container my={8}>
      <Heading>{character.name}</Heading>
      <Image src={character.image} alt={character.name} w="100%" />
      <Table mt={4}>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>status</Td>
            <Td>{character.status}</Td>
          </Tr>
          <Tr>
            <Td>species</Td>
            <Td>{character.species}</Td>
          </Tr>
          <Tr>
            <Td>type</Td>
            <Td>{character.type}</Td>
          </Tr>
          <Tr>
            <Td>gender</Td>
            <Td>{character.gender}</Td>
          </Tr>
          <Tr>
            <Td>origin</Td>
            <Td>{character.origin.name}</Td>
          </Tr>
          <Tr>
            <Td>location</Td>
            <Td>{character.location.name}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default SingleCharacter;
