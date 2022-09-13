import { Box } from '@mui/material';
import { Card, Filters } from '../../components/episode';
import { Main, Grid, Wrapper, Pagination } from '../../components/layout';
import { getEpisode, getFilters } from '../../lib/api';

export const getServerSideProps = async context => {
  const episodes = await getEpisode(context.query);
  const filters = await getFilters('episode');

  return {
    props: { episodes, filters: { airDate: filters.air_date, code: filters.episode } },
  };
};

const Episode = ({ episodes, filters }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters filters={filters} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters filters={filters} />
        </Box>
        <Grid list={episodes.results} Component={Card} />
        <Pagination pages={episodes.info.pages} pathname="episode" />
      </Main>
    </Box>
  </Wrapper>
);

export default Episode;
