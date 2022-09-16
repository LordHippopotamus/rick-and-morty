import { Box } from '@mui/material';
import { Card } from '../../components/location';
import { Filters } from '../../components/common';
import { Main, Grid, Wrapper, Pagination } from '../../components/layout';
import { getLocations } from 'rickmortyapi';

export const getServerSideProps = async ({ query }) => {
  const { data: locations } = await getLocations(query);

  return {
    props: { locations },
  };
};

const fields = [
  {
    label: 'Name',
    sm: 6,
    md: 3,
  },
  {
    label: 'Type',
    sm: 6,
    md: 3,
  },
  {
    label: 'Dimension',
    sm: 6,
    md: 3,
  },
];

const Location = ({ locations }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters fields={fields} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters fields={fields} button={{ sm: 6, md: 3 }} />
        </Box>
        <Grid list={locations.results} Component={Card} />
        <Pagination pages={locations.info.pages} pathname="location" />
      </Main>
    </Box>
  </Wrapper>
);

export default Location;
