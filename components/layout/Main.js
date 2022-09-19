import { Box, Container } from '@mui/material';
import { Filters, Card } from '../common';
import { Grid, Pagination } from './';

const Main = ({ fields, list, pages, button, path = '' }) => (
  <Box my={4}>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters fields={fields} />
      </Box>
      <Container>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box display={{ lg: 'none' }}>
            <Filters fields={fields} button={button} path={path} />
          </Box>
          <Grid list={list} Component={Card} path={path} />
          <Pagination pages={pages} path={path} />
        </Box>
      </Container>
    </Box>
  </Box>
);

export default Main;
