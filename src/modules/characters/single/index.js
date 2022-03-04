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
import { useParams } from "react-router-dom";
import { useFetchCharacterById } from "./useFetchCharacterById";

const CharacterPage = () => {
  const params = useParams();
  const id = params.characterId;

  const character = useFetchCharacterById(id);

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

export default CharacterPage;
