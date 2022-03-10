import {
  Container,
  Heading,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";

const SingleEpisode = ({ episode }) => (
  <Container my={8}>
    <Heading>{episode.name}</Heading>
    <Table mt={4}>
      <Thead>
        <Tr>
          <Th>Property</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>air date</Td>
          <Td>{episode.air_date}</Td>
        </Tr>
        <Tr>
          <Td>episode</Td>
          <Td>{episode.episode}</Td>
        </Tr>
      </Tbody>
    </Table>
  </Container>
);

export default SingleEpisode;
