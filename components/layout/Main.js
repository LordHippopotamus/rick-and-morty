import { Box, Container } from '@mui/material';
import { Filters, Card } from '../common';
import { Grid, Pagination } from './';

const Main = ({ fields, list, pages, button }) => (
  <Box my={4}>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters fields={fields} />
      </Box>
      <Container>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box display={{ lg: 'none' }}>
            <Filters fields={fields} button={button} />
          </Box>
          <Grid list={list} Component={Card} />
          <Pagination pages={pages} />
        </Box>
      </Container>
    </Box>
  </Box>
);

export default Main;
