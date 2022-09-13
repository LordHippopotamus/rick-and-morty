import { Box } from '@mui/material';
import { Card, Filters } from '../../components/location';
import { Main, Grid, Wrapper, Pagination } from '../../components/layout';
import { getLocation, getFilters } from '../../lib/api';

export const getServerSideProps = async context => {
  const locations = await getLocation(context.query);
  const filters = await getFilters('location');

  return {
    props: {
      locations: locations,
      filters,
    },
  };
};

const Location = ({ locations, filters }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters filters={filters} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters filters={filters} />
        </Box>
        <Grid list={locations.results} Component={Card} />
        <Pagination pages={locations.info.pages} pathname="location" />
      </Main>
    </Box>
  </Wrapper>
);

export default Location;
