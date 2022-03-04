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

const SingleLocation = ({ location }) => (
  <Container my={8}>
    <Heading>{location.name}</Heading>
    <Table mt={4}>
      <Thead>
        <Tr>
          <Th>Property</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>type</Td>
          <Td>{location.type}</Td>
        </Tr>
        <Tr>
          <Td>dimension</Td>
          <Td>{location.dimension}</Td>
        </Tr>
      </Tbody>
    </Table>
  </Container>
);

export default SingleLocation;
